import { Request, Response } from 'express';
import { JobConclusionRepository } from '../repositories/JobConclusionRepository';
import getEnvConnection from '../utils/get-env-connection';
import { Expense } from '../entity/Expanse';
import dayjs from 'dayjs';
import { Entities } from '../entity/Entities';
import _ from 'lodash';

class AggregationController {
  public getExpancesAndProfit = async (req: Request, res: Response) => {
    const connect = getEnvConnection();
    const jobConclusionRepo = connect.getCustomRepository(
      JobConclusionRepository
    );
    const expensesRepo = connect.getRepository(Expense);

    const fromDate = req.query.fromDate
      ? dayjs(String(req.query.fromDate)).format('YYYY-MM-DD')
      : dayjs(new Date()).subtract(1, 'month').format('YYYY-MM-DD');

    const toDate = req.query.toDate
      ? dayjs(String(req.query.toDate)).format('YYYY-MM-DD')
      : dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD');

    let profit = await jobConclusionRepo
      .createQueryBuilder(Entities.JobConclusion)
      .select(`SUM(${Entities.JobConclusion}.charged)`, 'profit')
      .addSelect(`DATE(DATE(${Entities.JobConclusion}.created_at))`, 'date')
      .where(
        `DATE(${Entities.JobConclusion}.created_at) BETWEEN :fromDate AND :toDate`,
        { fromDate, toDate }
      )
      .groupBy(`DATE(DATE(${Entities.JobConclusion}.created_at))`)
      .orderBy(`date`, 'ASC')
      .getRawMany();

    let expenses = await expensesRepo
      .createQueryBuilder(Entities.Expense)
      .select(`SUM(${Entities.Expense}.amount)`, 'expense')
      .addSelect(`DATE(${Entities.Expense}.created_at)`, 'date')
      .where(
        `DATE(${Entities.Expense}.created_at) BETWEEN :fromDate AND :toDate`,
        { fromDate, toDate }
      )
      .groupBy(`DATE(${Entities.Expense}.created_at)`)
      .orderBy(`date`, 'ASC')
      .getRawMany();

    //formating response
    profit = profit.map((p) => {
      p.profit = Number(p.profit);
      return p;
    });

    expenses = expenses.map((e) => {
      e.expense = Number(e.expense);
      return e;
    });

    // joining profit and expences arrays
    const getDatesWithProfitAndExpanses = () => {
      const profitDatesWithExpenses = profit.map((profitDay) => {
        const exp: any = _.filter(
          expenses,
          (e) =>
            dayjs(e.date).format('YYYY-MM-DD') ===
            dayjs(profitDay.date).format('YYYY-MM-DD')
        );
        return { ...profitDay, ...exp[0] };
      });
      let res = _.unionBy(profitDatesWithExpenses, expenses, 'date');

      res = res.map((o) => {
        if (!o.profit) o.profit = 0;
        if (!o.expense) o.expense = 0;

        return o;
      });
      return res;
    };

    let resData: any = {
      profit,
      expenses,
      profitAndExpenses: getDatesWithProfitAndExpanses(),
    };

    res.status(200).json({
      data: resData,
    });
  };
}

export default new AggregationController();
