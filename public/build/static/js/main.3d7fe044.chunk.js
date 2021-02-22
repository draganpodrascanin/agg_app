(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    3: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'LOADING', function () {
          return n;
        }),
        a.d(t, 'SUCCESS', function () {
          return r;
        }),
        a.d(t, 'CLEAR_LOADING', function () {
          return c;
        }),
        a.d(t, 'CLEAR_SUCCESS', function () {
          return i;
        }),
        a.d(t, 'UI_ERROR', function () {
          return o;
        }),
        a.d(t, 'CLEAR_UI_ERROR', function () {
          return s;
        }),
        a.d(t, 'MESSAGE_RECEIVED', function () {
          return l;
        }),
        a.d(t, 'CLEAR_MESSAGE_RECEIVED', function () {
          return u;
        }),
        a.d(t, 'LOGIN_SUCCESS', function () {
          return d;
        }),
        a.d(t, 'LOGIN_ERROR', function () {
          return p;
        }),
        a.d(t, 'GET_CURRENT_ADMIN_SUCCESS', function () {
          return j;
        }),
        a.d(t, 'GET_CURRENT_ADMIN_FAIL', function () {
          return b;
        }),
        a.d(t, 'LOGOUT', function () {
          return m;
        }),
        a.d(t, 'LOGIN_SAGA', function () {
          return O;
        }),
        a.d(t, 'LOGOUT_SAGA', function () {
          return h;
        }),
        a.d(t, 'LOGIN_SUCCESS_SAGA', function () {
          return x;
        }),
        a.d(t, 'LOGIN_ERROR_SAGA', function () {
          return f;
        }),
        a.d(t, 'GET_CURRENT_ADMIN_SAGA', function () {
          return E;
        }),
        a.d(t, 'GET_CHART_DATA_SAGA', function () {
          return g;
        }),
        a.d(t, 'GET_CHART_DATA', function () {
          return v;
        }),
        a.d(t, 'GET_CHART_DATA_SUCCESS', function () {
          return A;
        }),
        a.d(t, 'GET_CHART_DATA_FAILED', function () {
          return y;
        }),
        a.d(t, 'CHART_DATA_CLEAR_ERROR', function () {
          return _;
        }),
        a.d(t, 'GET_EXPENSES_SAGA', function () {
          return C;
        }),
        a.d(t, 'GET_EXPENSES', function () {
          return S;
        }),
        a.d(t, 'GET_EXPENSES_FAILED', function () {
          return N;
        }),
        a.d(t, 'CREATE_EXPENSE_SAGA', function () {
          return R;
        }),
        a.d(t, 'CREATE_EXPENSE', function () {
          return T;
        }),
        a.d(t, 'CREATE_EXPENSE_ERROR', function () {
          return I;
        }),
        a.d(t, 'UPDATE_EXPENSE', function () {
          return k;
        }),
        a.d(t, 'UPDATE_EXPENSE_SAGA', function () {
          return G;
        }),
        a.d(t, 'UPDATE_EXPENSE_ERROR', function () {
          return D;
        }),
        a.d(t, 'DELETE_EXPENSE', function () {
          return w;
        }),
        a.d(t, 'DELETE_EXPENSE_SAGA', function () {
          return L;
        }),
        a.d(t, 'DELETE_EXPENSE_ERROR', function () {
          return P;
        }),
        a.d(t, 'EXPENSE_ERROR', function () {
          return U;
        }),
        a.d(t, 'GET_JOBCONCLUSIONS_SAGA', function () {
          return M;
        }),
        a.d(t, 'GET_JOBCONCLUSIONS', function () {
          return B;
        }),
        a.d(t, 'JOB_CONCLUSIONS_ERROR', function () {
          return z;
        }),
        a.d(t, 'GET_CLIENTS_SAGA', function () {
          return Y;
        }),
        a.d(t, 'GET_CLIENTS', function () {
          return W;
        }),
        a.d(t, 'CLIENTS_LOADING', function () {
          return F;
        }),
        a.d(t, 'CLEAR_CLIENTS_LOADING', function () {
          return K;
        }),
        a.d(t, 'CLIENTS_ERROR', function () {
          return V;
        }),
        a.d(t, 'CLEAR_CLIENTS_ERROR', function () {
          return H;
        }),
        a.d(t, 'GET_ACTIVE_CLIENT_SAGA', function () {
          return J;
        }),
        a.d(t, 'GET_ACTIVE_CLIENT', function () {
          return X;
        }),
        a.d(t, 'CLEAR_ACTIVE_CLIENT', function () {
          return q;
        }),
        a.d(t, 'CREATE_CLIENT_SAGA', function () {
          return Z;
        }),
        a.d(t, 'CREATE_CLIENT', function () {
          return $;
        }),
        a.d(t, 'GET_CAR_SUGGESTIONS_SAGA', function () {
          return Q;
        }),
        a.d(t, 'GET_CAR_SUGGESTIONS', function () {
          return ee;
        }),
        a.d(t, 'CLEAR_CAR_SUGGESTIONS', function () {
          return te;
        }),
        a.d(t, 'CAR_SUGGESTION_LOADING', function () {
          return ae;
        }),
        a.d(t, 'CLEAR_CAR_SUGGESTION_LOADING', function () {
          return ne;
        }),
        a.d(t, 'CAR_SUGGESTION_ERROR', function () {
          return re;
        }),
        a.d(t, 'CLEAR_CAR_SUGGESTION_ERROR', function () {
          return ce;
        }),
        a.d(t, 'CAR_SUGGESTION_OPEN', function () {
          return ie;
        }),
        a.d(t, 'CAR_SUGGESTION_CLOSE', function () {
          return oe;
        }),
        a.d(t, 'SET_CLIENT_CAR_OWNERSHIP_SAGA', function () {
          return se;
        }),
        a.d(t, 'SET_CLIENT_CAR_OWNERSHIP', function () {
          return le;
        }),
        a.d(t, 'CREATE_CAR_SAGA', function () {
          return ue;
        }),
        a.d(t, 'CREATE_CAR', function () {
          return de;
        }),
        a.d(t, 'CREATE_CAR_AND_SET_OWNER', function () {
          return pe;
        }),
        a.d(t, 'CREATE_CAR_AND_SET_OWNER_SAGA', function () {
          return je;
        }),
        a.d(t, 'GET_CARS_SAGA', function () {
          return be;
        }),
        a.d(t, 'GET_CARS', function () {
          return me;
        }),
        a.d(t, 'SET_CARS_LOADING', function () {
          return Oe;
        }),
        a.d(t, 'CLEAR_CARS_LOADING', function () {
          return he;
        }),
        a.d(t, 'SET_CARS_ERROR', function () {
          return xe;
        }),
        a.d(t, 'CLEAR_CARS_ERROR', function () {
          return fe;
        }),
        a.d(t, 'CREATE_WORK_ORDERS_SAGA', function () {
          return Ee;
        }),
        a.d(t, 'CREATE_WORK_ORDERS', function () {
          return ge;
        }),
        a.d(t, 'GET_WORK_ORDERS_SAGA', function () {
          return ve;
        }),
        a.d(t, 'GET_WORK_ORDERS', function () {
          return Ae;
        }),
        a.d(t, 'GET_WORK_ORDER_SAGA', function () {
          return ye;
        }),
        a.d(t, 'GET_WORK_ORDER', function () {
          return _e;
        }),
        a.d(t, 'CLEAR_WORK_ORDER', function () {
          return Ce;
        }),
        a.d(t, 'SET_WORK_ORDERS_LOADING', function () {
          return Se;
        }),
        a.d(t, 'CLEAR_WORK_ORDERS_LOADING', function () {
          return Ne;
        }),
        a.d(t, 'CLEAR_WORK_ORDERS', function () {
          return Re;
        }),
        a.d(t, 'DELETE_WORK_ORDER_SAGA', function () {
          return Te;
        }),
        a.d(t, 'DELETE_WORK_ORDER', function () {
          return Ie;
        }),
        a.d(t, 'CREATE_CAR_RECEPTION', function () {
          return ke;
        }),
        a.d(t, 'CREATE_CAR_RECEPTION_SAGA', function () {
          return Ge;
        }),
        a.d(t, 'EDIT_CAR_RECEPTION', function () {
          return De;
        }),
        a.d(t, 'EDIT_CAR_RECEPTION_SAGA', function () {
          return we;
        }),
        a.d(t, 'DELETE_CAR_RECEPTION', function () {
          return Le;
        }),
        a.d(t, 'DELETE_CAR_RECEPTION_SAGA', function () {
          return Pe;
        }),
        a.d(t, 'CREATE_CAR_EXAM', function () {
          return Ue;
        }),
        a.d(t, 'CREATE_CAR_EXAM_SAGA', function () {
          return Me;
        }),
        a.d(t, 'EDIT_CAR_EXAM', function () {
          return Be;
        }),
        a.d(t, 'EDIT_CAR_EXAM_SAGA', function () {
          return ze;
        }),
        a.d(t, 'DELETE_CAR_EXAM', function () {
          return Ye;
        }),
        a.d(t, 'DELETE_CAR_EXAM_SAGA', function () {
          return We;
        }),
        a.d(t, 'GET_JOB_TICKETS', function () {
          return Fe;
        }),
        a.d(t, 'GET_JOB_TICKETS_SAGA', function () {
          return Ke;
        }),
        a.d(t, 'CREATE_JOB_TICKET', function () {
          return Ve;
        }),
        a.d(t, 'CREATE_JOB_TICKET_SAGA', function () {
          return He;
        }),
        a.d(t, 'EDIT_JOB_TICKET', function () {
          return Je;
        }),
        a.d(t, 'EDIT_JOB_TICKET_SAGA', function () {
          return Xe;
        }),
        a.d(t, 'DELETE_JOB_TICKET', function () {
          return qe;
        }),
        a.d(t, 'DELETE_JOB_TICKET_SAGA', function () {
          return Ze;
        }),
        a.d(t, 'GET_JOB_CONCLUSIONS', function () {
          return $e;
        }),
        a.d(t, 'GET_JOB_CONCLUSIONS_SAGA', function () {
          return Qe;
        }),
        a.d(t, 'CREATE_JOB_CONCLUSION', function () {
          return et;
        }),
        a.d(t, 'CREATE_JOB_CONCLUSION_SAGA', function () {
          return tt;
        }),
        a.d(t, 'EDIT_JOB_CONCLUSION', function () {
          return at;
        }),
        a.d(t, 'EDIT_JOB_CONCLUSION_SAGA', function () {
          return nt;
        }),
        a.d(t, 'DELETE_JOB_CONCLUSION', function () {
          return rt;
        }),
        a.d(t, 'DELETE_JOB_CONCLUSION_SAGA', function () {
          return ct;
        }),
        a.d(t, 'GET_APPOINTMENTS_SAGA', function () {
          return it;
        }),
        a.d(t, 'GET_APPOINTMENTS', function () {
          return ot;
        }),
        a.d(t, 'CREATE_APPOINTMENT_SAGA', function () {
          return st;
        }),
        a.d(t, 'CREATE_APPOINTMENT', function () {
          return lt;
        }),
        a.d(t, 'EDIT_APPOINTMENT_SAGA', function () {
          return ut;
        }),
        a.d(t, 'EDIT_APPOINTMENT', function () {
          return dt;
        }),
        a.d(t, 'DELETE_APPOINTMENT_SAGA', function () {
          return pt;
        }),
        a.d(t, 'DELETE_APPOINTMENT', function () {
          return jt;
        }),
        a.d(t, 'GET_ACTIVE_CAR_SAGA', function () {
          return bt;
        }),
        a.d(t, 'GET_ACTIVE_CAR', function () {
          return mt;
        }),
        a.d(t, 'CREATE_ACTIVE_CAR_SAGA', function () {
          return Ot;
        }),
        a.d(t, 'CREATE_ACTIVE_CAR', function () {
          return ht;
        }),
        a.d(t, 'EDIT_ACTIVE_CAR_SAGA', function () {
          return xt;
        }),
        a.d(t, 'EDIT_ACTIVE_CAR', function () {
          return ft;
        }),
        a.d(t, 'DELETE_ACTIVE_CAR_SAGA', function () {
          return Et;
        }),
        a.d(t, 'DELETE_ACTIVE_CAR', function () {
          return gt;
        }),
        a.d(t, 'GET_WARRANTIES', function () {
          return vt;
        }),
        a.d(t, 'GET_WARRANTIES_SAGA', function () {
          return At;
        }),
        a.d(t, 'CREATE_WARRANTY_SAGA', function () {
          return yt;
        }),
        a.d(t, 'CREATE_WARRANTY', function () {
          return _t;
        }),
        a.d(t, 'EDIT_WARRANTY_SAGA', function () {
          return Ct;
        }),
        a.d(t, 'EDIT_WARRANTY', function () {
          return St;
        }),
        a.d(t, 'DELETE_WARRANTY_SAGA', function () {
          return Nt;
        }),
        a.d(t, 'DELETE_WARRANTY', function () {
          return Rt;
        }),
        a.d(t, 'GET_BLOGS_SAGA', function () {
          return Tt;
        }),
        a.d(t, 'GET_BLOGS', function () {
          return It;
        }),
        a.d(t, 'GET_ACTIVE_BLOG_SAGA', function () {
          return kt;
        }),
        a.d(t, 'GET_ACTIVE_BLOG', function () {
          return Gt;
        }),
        a.d(t, 'CREATE_BLOG_SAGA', function () {
          return Dt;
        }),
        a.d(t, 'CREATE_BLOG', function () {
          return wt;
        }),
        a.d(t, 'EDIT_BLOG_SAGA', function () {
          return Lt;
        }),
        a.d(t, 'EDIT_BLOG', function () {
          return Pt;
        }),
        a.d(t, 'DELETE_BLOG_SAGA', function () {
          return Ut;
        }),
        a.d(t, 'DELETE_BLOG', function () {
          return Mt;
        }),
        a.d(t, 'PUBLISH_BLOG', function () {
          return Bt;
        }),
        a.d(t, 'PUBLISH_BLOG_SAGA', function () {
          return zt;
        }),
        a.d(t, 'GET_INVOICES', function () {
          return Yt;
        }),
        a.d(t, 'GET_INVOICES_SAGA', function () {
          return Wt;
        }),
        a.d(t, 'GET_ACTIVE_INVOICE', function () {
          return Ft;
        }),
        a.d(t, 'GET_ACTIVE_INVOICE_SAGA', function () {
          return Kt;
        }),
        a.d(t, 'CREATE_INVOICE', function () {
          return Vt;
        }),
        a.d(t, 'CREATE_INVOICE_SAGA', function () {
          return Ht;
        }),
        a.d(t, 'DELETE_INVOICE_SAGA', function () {
          return Jt;
        }),
        a.d(t, 'DELETE_INVOICE', function () {
          return Xt;
        }),
        a.d(t, 'GET_MESSAGES', function () {
          return qt;
        }),
        a.d(t, 'GET_MESSAGES_SAGA', function () {
          return Zt;
        }),
        a.d(t, 'NEW_MESSAGE', function () {
          return $t;
        }),
        a.d(t, 'NEW_MESSAGE_SAGA', function () {
          return Qt;
        }),
        a.d(t, 'UPDATE_MESSAGE_SEEN', function () {
          return ea;
        }),
        a.d(t, 'UPDATE_MESSAGE_SEEN_SAGA', function () {
          return ta;
        }),
        a.d(t, 'GET_UNREAD_MESSAGES_NUMBER', function () {
          return aa;
        }),
        a.d(t, 'GET_UNREAD_MESSAGES_NUMBER_SAGA', function () {
          return na;
        }),
        a.d(t, 'GET_ADMINS', function () {
          return ra;
        }),
        a.d(t, 'GET_ADMINS_SAGA', function () {
          return ca;
        }),
        a.d(t, 'CREATE_ADMIN', function () {
          return ia;
        }),
        a.d(t, 'CREATE_ADMIN_SAGA', function () {
          return oa;
        }),
        a.d(t, 'UPDATE_ADMIN', function () {
          return sa;
        }),
        a.d(t, 'UPDATE_ADMIN_SAGA', function () {
          return la;
        }),
        a.d(t, 'UPDATE_ADMIN_PASSWORD', function () {
          return ua;
        }),
        a.d(t, 'UPDATE_ADMIN_PASSWORD_SAGA', function () {
          return da;
        }),
        a.d(t, 'DELETE_ADMIN_SAGA', function () {
          return pa;
        }),
        a.d(t, 'DELETE_ADMIN', function () {
          return ja;
        });
      var n = 'LOADING',
        r = 'SUCCESS',
        c = 'CLEAR_LOADING',
        i = ' CLEAR_SUCCESS',
        o = 'UI_ERROR',
        s = 'CLEAR_UI_ERROR',
        l = 'MESSAGE_RECEIVED',
        u = 'CLEAR_MESSAGE_RECEIVED',
        d = 'LOGIN_SUCCESS',
        p = 'LOGIN_ERROR',
        j = 'GET_CURRENT_ADMIN_SUCCESS',
        b = 'GET_CURRENT_ADMIN_FAIL',
        m = 'LOGOUT',
        O = 'LOGIN_SAGA',
        h = 'LOGOUT_SAGA',
        x = 'LOGIN_SUCCESS_SAGA',
        f = 'LOGIN_ERROR_SAGA',
        E = 'GET_CURRENT_ADMIN_SAGA',
        g = 'GET_CHART_DATA_SAGA',
        v = 'GET_CHART_DATA',
        A = 'GET_CHART_DATA_SUCCESS',
        y = 'GET_CHART_DATA_FAILED',
        _ = 'CHART_DATA_CLEAR_ERROR',
        C = 'GET_EXPENSES_SAGA',
        S = 'GET_EXPENSES',
        N = 'GET_EXPENSES_FAILED',
        R = 'CREATE_EXPENSE_SAGA',
        T = 'CREATE_EXPENSE',
        I = 'CREATE_EXPENSE_ERROR',
        k = 'UPDATE_EXPENSE',
        G = 'UPDATE_EXPENSE_SAGA',
        D = 'UPDATE_EXPENSE_ERROR',
        w = 'DELETE_EXPENSE',
        L = 'DELETE_EXPENSE_SAGA',
        P = 'DELETE_EXPENSE_ERROR',
        U = 'EXPENSE_ERROR',
        M = 'GET_JOB_CONCLUSIONS_SAGA',
        B = 'GET_JOB_CONCLUSIONS',
        z = 'JOB_CONCLUSIONS_ERROR',
        Y = 'GET_CLIENTS_SAGA',
        W = 'GET_CLIENTS',
        F = 'CLIENTS_LOADING',
        K = 'CLEAR_CLIENTS_LOADING',
        V = 'CLIENTS_ERROR',
        H = 'CLEAR_CLIENTS_ERROR',
        J = 'GET_ACTIVE_CLIENT_SAGA',
        X = 'GET_ACTIVE_CLIENT',
        q = 'CLEAR_ACTIVE_CLIENT',
        Z = 'CREATE_CLIENT_SAGA',
        $ = 'CREATE_CLIENT',
        Q = 'GET_CAR_SUGGESTIONS_SAGA',
        ee = 'GET_CAR_SUGGESTIONS',
        te = 'CLEAR_CAR_SUGGESTIONS',
        ae = 'CAR_SUGGESTION_LOADING',
        ne = 'CLEAR_CAR_SUGGESTION_LOADING',
        re = 'CAR_SUGGESTION_ERROR',
        ce = 'CLEAR_CAR_SUGGESTION_ERROR',
        ie = 'CAR_SUGGESTION_OPEN',
        oe = 'CAR_SUGGESTION_CLOSE',
        se = 'SET_CLIENT_CAR_OWNERSHIP_SAGA',
        le = 'SET_CLIENT_CAR_OWNERSHIP',
        ue = 'CREATE_CAR_SAGA',
        de = 'CREATE_CAR',
        pe = 'CREATE_CAR_AND_SET_OWNER',
        je = 'CREATE_CAR_AND_SET_OWNER_SAGA',
        be = 'GET_CARS_SAGA',
        me = 'GET_CARS',
        Oe = 'SET_CARS_LOADING',
        he = 'CLEAR_CARS_LOADING',
        xe = 'SET_CARS_ERROR',
        fe = 'CLEAR_CARS_ERROR',
        Ee = 'CREATE_WORK_ORDERS_SAGA',
        ge = 'CREATE_WORK_ORDERS',
        ve = 'GET_WORK_ORDERS_SAGA',
        Ae = 'GET_WORK_ORDERS',
        ye = 'GET_WORK_ORDER_SAGA',
        _e = 'GET_WORK_ORDER',
        Ce = 'CLEAR_WORK_ORDER',
        Se = 'SET_WORK_ORDERS_LOADING',
        Ne = 'CLEAR_WORK_ORDERS_LOADING',
        Re = 'CLEAR_WORK_ORDERS',
        Te = 'DELETE_WORK_ORDER_SAGA',
        Ie = 'DELETE_WORK_ORDER',
        ke = 'CREATE_CAR_RECEPTION',
        Ge = 'CREATE_CAR_RECEPTION_SAGA',
        De = 'EDIT_CAR_RECEPTION',
        we = 'EDIT_CAR_RECEPTION_SAGA',
        Le = 'DELETE_CAR_RECEPTION',
        Pe = 'DELETE_CAR_RECEPTION_SAGA',
        Ue = 'CREATE_CAR_EXAM',
        Me = 'CREATE_CAR_EXAM_SAGA',
        Be = 'EDIT_CAR_EXAM',
        ze = 'EDIT_CAR_EXAM_SAGA',
        Ye = 'DELETE_CAR_EXAM',
        We = 'DELETE_CAR_EXAM_SAGA',
        Fe = 'GET_JOB_TICKETS',
        Ke = 'GET_JOB_TICKETS_SAGA',
        Ve = 'CREATE_JOB_TICKET',
        He = 'CREATE_JOB_TICKET_SAGA',
        Je = 'EDIT_JOB_TICKET',
        Xe = 'EDIT_JOB_TICKET_SAGA',
        qe = 'DELETE_JOB_TICKET',
        Ze = 'DELETE_JOB_TICKET_SAGA',
        $e = 'GET_JOB_CONCLUSIONS',
        Qe = 'GET_JOB_CONCLUSIONS_SAGA',
        et = 'CREATE_JOB_CONCLUSION',
        tt = 'CREATE_JOB_CONCLUSION_SAGA',
        at = 'EDIT_JOB_CONCLUSION',
        nt = 'EDIT_JOB_CONCLUSION_SAGA',
        rt = 'DELETE_JOB_CONCLUSION',
        ct = 'DELETE_JOB_CONCLUSION_SAGA',
        it = 'GET_APPOINTMENTS_SAGA',
        ot = 'GET_APPOINTMENTS',
        st = 'CREATE_APPOINTMENTS_SAGA',
        lt = 'CREATE_APPOINTMENTS',
        ut = 'EDIT_APPOINTMENT_SAGA',
        dt = 'EDIT_APPOINTMENT',
        pt = 'DELETE_APPOINTMENT_SAGA',
        jt = 'DELETE_APPOINTMENT',
        bt = 'GET_ACTIVE_CAR_SAGA',
        mt = 'GET_ACTIVE_CAR',
        Ot = 'CREATE_ACTIVE_CARS_SAGA',
        ht = 'CREATE_ACTIVE_CARS',
        xt = 'EDIT_ACTIVE_CAR_SAGA',
        ft = 'EDIT_ACTIVE_CAR',
        Et = 'DELETE_ACTIVE_CAR_SAGA',
        gt = 'DELETE_ACTIVE_CAR',
        vt = 'GET_WARRANTIES',
        At = 'GET_WARRANTIES_SAGA',
        yt = 'CREATE_WARRANTY_SAGA',
        _t = 'CREATE_WARRANTY',
        Ct = 'EDIT_WARRANTY_SAGA',
        St = 'EDIT_WARRANTY',
        Nt = 'DELETE_WARRANTY_SAGA',
        Rt = 'DELETE_WARRANTY',
        Tt = 'GET_BLOGS_SAGA',
        It = 'GET_BLOGS',
        kt = 'GET_ACTIVE_BLOG_SAGA',
        Gt = 'GET_ACTIVE_BLOG',
        Dt = 'CREATE_BLOG_SAGA',
        wt = 'CREATE_BLOG',
        Lt = 'EDIT_BLOG_SAGA',
        Pt = 'EDIT_BLOG',
        Ut = 'DELETE_BLOG_SAGA',
        Mt = 'DELETE_BLOG',
        Bt = 'PUBLISH_BLOG',
        zt = 'PUBLISH_BLOG_SAGA',
        Yt = 'GET_INVOICES',
        Wt = 'GET_INVOICES_SAGA',
        Ft = 'GET_ACTIVE_INVOICE',
        Kt = 'GET_ACTIVE_INVOICE_SAGA',
        Vt = 'CREATE_INVOICE',
        Ht = 'CREATE_INVOICE_SAGA',
        Jt = 'DELETE_INVOICE_SAGA',
        Xt = 'DELETE_INVOICE',
        qt = 'GET_MESSAGES',
        Zt = 'GET_MESSAGES_SAGA',
        $t = 'NEW_MESSAGE',
        Qt = 'NEW_MESSAGE_SAGA',
        ea = 'UPDATE_MESSAGE_SEEN',
        ta = 'UPDATE_MESSAGE_SEEN_SAGA',
        aa = 'GET_UNREAD_MESSAGES_NUMBER',
        na = 'GET_UNREAD_MESSAGES_NUMBER_SAGA',
        ra = 'GET_ADMIN',
        ca = 'GET_ADMIN_SAGA',
        ia = 'CREATE_ADMIN',
        oa = 'CREATE_ADMIN_SAGA',
        sa = 'UPDATE_ADMIN',
        la = 'UPDATE_ADMIN_SAGA',
        ua = 'UPDATE_ADMIN_PASSWORD',
        da = 'UPDATE_ADMIN_PASSWORD_SAGA',
        pa = 'DELETE_ADMIN_SAGA',
        ja = 'DELETE_ADMIN';
    },
    467: function (e, t, a) {},
    682: function (e, t, a) {},
    683: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a(0),
        c = a.n(r),
        i = a(35),
        o = a.n(i),
        s = a(141),
        l = a(778),
        u = (a(423), a(342)),
        d = a(11),
        p = a(38),
        j = a(48),
        b = a(344),
        m = a(24),
        O = a(3),
        h = a(75),
        x = a(739),
        f = a(83),
        E = a(379),
        g = a(686),
        v = a(692),
        A = a(735),
        y = function (e) {
          return Object(n.jsx)(v.a, {
            open: e.open,
            onClose: e.handleClose,
            'aria-labelledby': 'loading modal',
            'aria-describedby': 'loading-modal-please-wait',
            style: { zIndex: 9e3 },
            children: Object(n.jsx)('div', {
              style: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                outline: 'none',
                zIndex: 1e3,
                '&:fokus': { outline: 'none' },
              },
              children: Object(n.jsx)(A.a, {
                style: {
                  color: '#fff',
                  height: 100,
                  width: 100,
                  border: 'none',
                },
              }),
            }),
          });
        },
        _ = Object(h.a)(function (e) {
          return {
            heading: { margin: '3rem 0', color: e.palette.primary.dark },
            form: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
            input: { width: '100%', maxWidth: 400, padding: '10px 0px' },
            button: { marginTop: 20 },
          };
        }),
        C = function () {
          var e = _(),
            t = Object(d.b)(),
            a = Object(d.c)(function (e) {
              return e.admin;
            }),
            r = Object(d.c)(function (e) {
              return e.UI;
            }),
            c = Object(m.a)({
              initialValues: { username: '', password: '' },
              onSubmit: function (e) {
                var a, n;
                t(
                  ((a = e.username),
                  (n = e.password),
                  { type: O.LOGIN_SAGA, payload: { username: a, password: n } })
                );
              },
            });
          return Object(n.jsxs)(x.a, {
            maxWidth: 'sm',
            children: [
              Object(n.jsx)(y, { open: r.loading }),
              Object(n.jsx)(f.a, {
                display: 'block',
                variant: 'h2',
                component: 'h1',
                style: { textAlign: 'center' },
                className: e.heading,
                children: 'Login',
              }),
              Object(n.jsxs)('form', {
                className: e.form,
                onSubmit: c.handleSubmit,
                children: [
                  Object(n.jsx)(E.a, {
                    variant: 'standard',
                    label: 'username',
                    name: 'username',
                    onChange: c.handleChange,
                    className: e.input,
                  }),
                  Object(n.jsx)(E.a, {
                    id: 'standard-adornment-password',
                    variant: 'standard',
                    label: 'password',
                    name: 'password',
                    type: 'password',
                    onChange: c.handleChange,
                    className: e.input,
                    onKeyPress: function (e) {
                      'Enter' === e.key && c.submitForm();
                    },
                  }),
                  Object(n.jsx)(g.a, {
                    variant: 'contained',
                    color: 'primary',
                    size: 'large',
                    disabled: a.loading,
                    onClick: c.submitForm,
                    className: e.button,
                    children: 'Potvrdi',
                  }),
                ],
              }),
            ],
          });
        },
        S = a(9),
        N = function (e) {
          var t = Object(d.c)(function (e) {
              return e.admin;
            }),
            a = Object(j.g)(),
            c = Object(j.f)();
          return (
            Object(r.useEffect)(
              function () {
                var e, n;
                t.isLoggedIn &&
                (null === a ||
                void 0 === a ||
                null === (e = a.state) ||
                void 0 === e ||
                null === (n = e.from) ||
                void 0 === n
                  ? void 0
                  : n.pathname)
                  ? c.push(a.state.from.pathname)
                  : 'admin' === t.role || 'super-admin' === t.role
                  ? c.push('/')
                  : 'mechanic' === t.role
                  ? c.push('/servisni-nalozi')
                  : 'blogger' === t.role && c.push('/blog');
              },
              [a, c, t]
            ),
            Object(n.jsx)('div', {
              children: Object(n.jsx)(
                j.a,
                Object(S.a)(Object(S.a)({}, e), {}, { children: e.children })
              ),
            })
          );
        },
        R = a(12),
        T = a(688),
        I = a(800),
        k = a(744),
        G = a(747),
        D = a(750),
        w = a(745),
        L = a(687),
        P = a(204),
        U = a(347),
        M = a.n(U),
        B = Object(h.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            menuButton: { marginRight: e.spacing(2) },
            title: { flexGrow: 1 },
          };
        }),
        z = function (e) {
          var t = B(),
            a = Object(d.b)(),
            r = Object(d.c)(function (e) {
              return e.admin;
            });
          return Object(n.jsx)(w.a, {
            position: 'static',
            children: Object(n.jsxs)(L.a, {
              children: [
                Object(n.jsx)(P.a, {
                  edge: 'start',
                  className: t.menuButton,
                  color: 'inherit',
                  'aria-label': 'menu',
                  onClick: e.drawerHandler,
                  children: Object(n.jsx)(M.a, {}),
                }),
                Object(n.jsx)(f.a, {
                  style: { textTransform: 'capitalize' },
                  variant: 'h6',
                  className: t.title,
                  children: ''.concat(r.firstName, ' ').concat(r.lastName),
                }),
                Object(n.jsx)(g.a, {
                  color: 'inherit',
                  onClick: function () {
                    a({ type: O.LOGOUT_SAGA });
                  },
                  children: 'Logout',
                }),
              ],
            }),
          });
        },
        Y = a(348),
        W = a.n(Y),
        F = a(350),
        K = a.n(F),
        V = a(354),
        H = a.n(V),
        J = a(349),
        X = a.n(J),
        q = a(353),
        Z = a.n(q),
        $ = a(351),
        Q = a.n($),
        ee = a(355),
        te = a.n(ee),
        ae = a(352),
        ne = a.n(ae),
        re = a(748),
        ce = a(749),
        ie = Object(h.a)(function (e) {
          return {
            list: {
              paddingTop: 30,
              width: 360,
              height: '100%',
              backgroundColor: e.palette.primary.dark,
            },
            item: {
              color: e.palette.grey[800],
              '& span, & svg': {
                fontSize: 20,
                fontWeight: 200,
                color: '#fff',
                textTransform: 'capitalize',
              },
            },
            heading: {
              color: '#fff',
              fontSize: 30,
              margin: 15,
              fontWeight: 700,
            },
            icon: { color: 'white', marginRight: '5px' },
            button: {
              position: 'absolute',
              top: 15,
              left: 15,
              backgroundColor: e.palette.primary.dark,
            },
            selected: {
              backgroundColor: 'rgba(255,255,255,0.3)',
              border: 'solid 1px rgba(255,255,255,0.3)',
            },
            unreadMessagesDiv: {
              height: 30,
              width: 30,
              background: e.palette.secondary.main,
              color: '#fff',
              borderRadius: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          };
        }),
        oe = function (e) {
          var t = ie();
          return Object(n.jsx)(r.Fragment, {
            children: Object(n.jsx)(
              T.a,
              Object(S.a)(
                { button: !0, component: p.c, activeClassName: t.selected },
                e
              )
            ),
          });
        },
        se = function () {
          var e = ie(),
            t = Object(r.useState)(!1),
            a = Object(R.a)(t, 2),
            c = a[0],
            i = a[1],
            o = function () {
              i(!c);
            },
            s = Object(d.b)(),
            l = Object(d.c)(function (e) {
              return e.messages.unreadMessages;
            });
          return (
            Object(r.useEffect)(
              function () {
                s({ type: O.GET_UNREAD_MESSAGES_NUMBER_SAGA });
              },
              [s]
            ),
            Object(n.jsxs)('div', {
              children: [
                Object(n.jsx)(z, { drawerHandler: o }),
                Object(n.jsx)(I.a, {
                  anchor: 'left',
                  open: c,
                  onClose: o,
                  children: Object(n.jsx)('div', {
                    className: e.list,
                    children: Object(n.jsxs)(k.a, {
                      component: 'nav',
                      children: [
                        Object(n.jsxs)(oe, {
                          to: '/',
                          exact: !0,
                          children: [
                            Object(n.jsx)(W.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Dashboard',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/klijenti',
                          children: [
                            Object(n.jsx)(X.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Klijenti',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/automobili',
                          children: [
                            Object(n.jsx)(K.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Automobili',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/servisni-nalozi',
                          children: [
                            Object(n.jsx)(Q.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Servisni Nalozi',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/radni-nalozi',
                          children: [
                            Object(n.jsx)(ne.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Aktivni Radni Nalozi',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/zakazani-termini',
                          children: [
                            Object(n.jsx)(Z.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Zakazani Termini',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/racuni',
                          children: [
                            Object(n.jsx)(H.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Ra\u010duni',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/blog',
                          children: [
                            Object(n.jsx)(te.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'blog',
                            }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/poruke',
                          children: [
                            Object(n.jsx)(re.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Poruke',
                            }),
                            0 !== l &&
                              Object(n.jsx)('div', {
                                className: e.unreadMessagesDiv,
                                children: Object(n.jsx)(f.a, {
                                  children: 0 !== l && l,
                                }),
                              }),
                          ],
                        }),
                        Object(n.jsxs)(oe, {
                          to: '/adminpanel',
                          children: [
                            Object(n.jsx)(ce.a, {
                              className: e.icon,
                              fontSize: 'small',
                            }),
                            Object(n.jsx)(G.a, {
                              className: e.item,
                              primary: 'Admin Panel',
                            }),
                          ],
                        }),
                        Object(n.jsx)(D.a, {
                          style: { background: 'rgba(255,255,255,0.3)' },
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        le = function (e) {
          var t = e.roles,
            a = Object(j.f)(),
            c = Object(d.c)(function (e) {
              return e.admin;
            });
          return (
            Object(r.useEffect)(
              function () {
                if (!c.isLoggedIn)
                  return a.push('/login', { from: a.location });
                t.includes(c.role) || a.push('zabranjen-pristup');
              },
              [c, c.isLoggedIn, c.role, a, t]
            ),
            Object(n.jsx)(
              j.a,
              Object(S.a)(Object(S.a)({}, e), {}, { children: e.children })
            )
          );
        },
        ue = a(795),
        de = a(793),
        pe = Object(h.a)(function (e) {
          return {
            alert: {
              backgroundColor: e.palette.primary.light,
              color: '#fff',
              textDecoration: 'none',
            },
            content: {
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            },
            icon: { marginRight: 10, textDecoration: 'none' },
            link: { textDecoration: 'none' },
          };
        }),
        je = function () {
          var e = pe(),
            t = Object(d.b)(),
            a = Object(d.c)(function (e) {
              return e.UI;
            }),
            r = function () {
              t({ type: O.CLEAR_MESSAGE_RECEIVED });
            };
          return Object(n.jsx)(ue.a, {
            open: !!a.messageRecieved,
            onClose: r,
            autoHideDuration: 1e4,
            children: Object(n.jsx)(p.b, {
              to: '/poruke',
              className: e.link,
              children: Object(n.jsx)(de.a, {
                onClose: r,
                variant: 'filled',
                className: e.alert,
                children: Object(n.jsxs)('div', {
                  className: e.content,
                  children: [
                    Object(n.jsx)(re.a, { className: e.icon }),
                    a.messageRecieved,
                  ],
                }),
              }),
            }),
          });
        },
        be = a.p + 'build/static/media/notification.55235d70.mp3',
        me = function (e) {
          return { type: O.GET_ACTIVE_BLOG_SAGA, payload: { id: e } };
        },
        Oe = a(194),
        he =
          (a(467),
          Object(h.a)(function (e) {
            return {
              editButton: {
                background: e.palette.warning.main,
                color: '#fff',
                '&:hover': { background: e.palette.warning.dark },
              },
            };
          })),
        xe = function () {
          var e = Object(j.h)().id,
            t = Object(d.c)(function (e) {
              return e.activeBlog;
            }),
            a = Object(d.b)(),
            c = he(),
            i = Object(j.f)();
          return (
            Object(r.useEffect)(
              function () {
                a(me(e));
              },
              [a, e]
            ),
            t
              ? Object(n.jsx)(n.Fragment, {
                  children: Object(n.jsxs)('div', {
                    className: 'blog',
                    children: [
                      Object(n.jsxs)('header', {
                        style: { background: 'url('.concat(t.image.path, ')') },
                        children: [
                          Object(n.jsx)('h1', { children: t.title }),
                          Object(n.jsx)('div', {
                            style: { width: 600, margin: '0 auto' },
                            children: Object(n.jsx)(g.a, {
                              variant: 'contained',
                              size: 'large',
                              className: c.editButton,
                              onClick: function () {
                                return i.push('/blog/'.concat(t.id, '/edit'));
                              },
                              children: 'Izmeni',
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsx)('div', {
                        className: 'content',
                        children: Object(Oe.a)(t.content),
                      }),
                    ],
                  }),
                })
              : Object(n.jsx)(y, {})
          );
        },
        fe = function () {
          return Object(n.jsx)(n.Fragment, { children: Object(n.jsx)(xe, {}) });
        },
        Ee = a(754),
        ge = a(755),
        ve = a(756),
        Ae = a(8),
        ye = a(25),
        _e = a(690),
        Ce = a(742),
        Se = a(799),
        Ne = a(791),
        Re = a(753),
        Te = a(751),
        Ie = a(752),
        ke = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
            textField: { width: '100%', marginBottom: 10, marginTop: 5 },
            heading: { marginBottom: 15 },
            select: { marginBottom: 10 },
            formControl: { minWidth: 120 },
          };
        }),
        Ge = function (e) {
          var t = e.firstName,
            a = e.lastName,
            c = e.phoneNumber,
            i = e.email,
            o = e.username,
            s = e.role,
            l = Object(Ae.a)(e, [
              'firstName',
              'lastName',
              'phoneNumber',
              'email',
              'username',
              'role',
            ]),
            u = ke(),
            d = Object(r.useState)(!1),
            p = Object(R.a)(d, 2),
            j = p[0],
            b = p[1],
            O = Object(r.useState)(!1),
            h = Object(R.a)(O, 2),
            x = h[0],
            v = h[1],
            A = function (e) {
              e.preventDefault();
            },
            y = ye.b().shape({
              firstName: ye.d().required('Polje Obavezno!'),
              lastName: ye.d().required('Polje Obavezno!'),
              phoneNumber: ye.d().required('Polje Obavezno!'),
              email: ye.d().required('Polje Obavezno!'),
              username: ye.d().required('Polje Obavezno!'),
              role: ye.d().required('Polje Obavezno!'),
              password:
                l.create &&
                ye
                  .d()
                  .min(8, 'Najmanje 8 karaktera.')
                  .required('Polje obavezno'),
              passwordConfirm:
                l.create &&
                ye
                  .d()
                  .oneOf([
                    ye.c('password'),
                    'Mora biti isto kao polje \u0161ifra.',
                  ]),
            }),
            _ = Object(m.a)({
              initialValues: {
                firstName: t || '',
                lastName: a || '',
                phoneNumber: c || '',
                email: i || '',
                username: o || '',
                role: s || 'mechanic',
                password: '',
                passwordConfirm: '',
              },
              onSubmit:
                l.onSubmit ||
                function (e) {
                  return alert(JSON.stringify(e));
                },
              validationSchema: y,
            });
          return Object(n.jsxs)('form', {
            className: u.form,
            onSubmit: _.handleSubmit,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                className: u.heading,
                children: l.heading || 'Registruj Administratora',
              }),
              Object(n.jsx)(E.a, {
                className: u.textField,
                variant: 'outlined',
                name: 'firstName',
                label: 'Ime',
                onChange: _.handleChange,
                value: _.values.firstName,
                helperText: _.errors.firstName,
                error: !!_.errors.firstName,
              }),
              Object(n.jsx)(E.a, {
                className: u.textField,
                variant: 'outlined',
                name: 'lastName',
                label: 'Prezime',
                onChange: _.handleChange,
                value: _.values.lastName,
                helperText: _.errors.lastName,
                error: !!_.errors.lastName,
              }),
              Object(n.jsx)(E.a, {
                className: u.textField,
                variant: 'outlined',
                name: 'username',
                label: 'Korisni\u010dko Ime',
                onChange: _.handleChange,
                value: _.values.username,
                helperText: _.errors.username,
                error: !!_.errors.username,
              }),
              Object(n.jsx)(E.a, {
                className: u.textField,
                variant: 'outlined',
                name: 'phoneNumber',
                label: 'Broj Telefona',
                onChange: _.handleChange,
                value: _.values.phoneNumber,
                helperText: _.errors.phoneNumber,
                error: !!_.errors.phoneNumber,
              }),
              Object(n.jsx)(E.a, {
                className: u.textField,
                variant: 'outlined',
                name: 'email',
                label: 'Email',
                onChange: _.handleChange,
                value: _.values.email,
                helperText: _.errors.email,
                error: !!_.errors.email,
              }),
              l.create &&
                Object(n.jsxs)(n.Fragment, {
                  children: [
                    Object(n.jsx)(E.a, {
                      className: u.textField,
                      type: j ? 'text' : 'password',
                      variant: 'outlined',
                      name: 'password',
                      value: _.values.password,
                      onChange: _.handleChange,
                      label: '\u0160ifra',
                      helperText: _.errors.password,
                      error: !!_.errors.password,
                      InputProps: {
                        endAdornment: Object(n.jsx)(_e.a, {
                          position: 'end',
                          children: Object(n.jsx)(P.a, {
                            'aria-label': 'toggle password visibility',
                            onClick: function () {
                              b(!j);
                            },
                            onMouseDown: A,
                            children: j
                              ? Object(n.jsx)(Te.a, {})
                              : Object(n.jsx)(Ie.a, {}),
                          }),
                        }),
                      },
                    }),
                    Object(n.jsx)(E.a, {
                      className: u.textField,
                      type: x ? 'text' : 'password',
                      variant: 'outlined',
                      name: 'passwordConfirm',
                      value: _.values.passwordConfirm,
                      onChange: _.handleChange,
                      label: 'Ponovi \u0161ifru',
                      helperText:
                        _.errors.passwordConfirm &&
                        _.errors.passwordConfirm.split(':')[1],
                      error: !!_.errors.passwordConfirm,
                      InputProps: {
                        endAdornment: Object(n.jsx)(_e.a, {
                          position: 'end',
                          children: Object(n.jsx)(P.a, {
                            'aria-label': 'toggle password confirm visibility',
                            onClick: function () {
                              v(!x);
                            },
                            onMouseDown: A,
                            children: x
                              ? Object(n.jsx)(Te.a, {})
                              : Object(n.jsx)(Ie.a, {}),
                          }),
                        }),
                      },
                    }),
                  ],
                }),
              Object(n.jsxs)(Ce.a, {
                className: u.formControl,
                children: [
                  Object(n.jsx)(Se.a, { children: 'Uloga' }),
                  Object(n.jsxs)(Ne.a, {
                    value: _.values.role,
                    onChange: function (e) {
                      _.setFieldValue('role', e.target.value);
                    },
                    label: 'Uloga',
                    className: u.select,
                    children: [
                      Object(n.jsx)(Re.a, {
                        value: 'mechanic',
                        children: 'Mehani\u010dar',
                      }),
                      Object(n.jsx)(Re.a, {
                        value: 'blogger',
                        children: 'Blogger',
                      }),
                      Object(n.jsx)(Re.a, {
                        value: 'admin',
                        children: 'Administrator',
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                onClick: _.submitForm,
                size: 'large',
                disabled: !_.isValid || !_.dirty,
                children: 'Potvrdi',
              }),
            ],
          });
        },
        De = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10, marginTop: 5 },
            heading: { marginBottom: 15 },
            select: { marginBottom: 10 },
            formControl: { minWidth: 120 },
          };
        }),
        we = function (e) {
          var t = De(),
            a = Object(r.useState)(!1),
            c = Object(R.a)(a, 2),
            i = c[0],
            o = c[1],
            s = Object(r.useState)(!1),
            l = Object(R.a)(s, 2),
            u = l[0],
            d = l[1],
            p = function (e) {
              e.preventDefault();
            },
            j = ye.b().shape({
              password: ye
                .d()
                .min(8, 'Najmanje 8 karaktera.')
                .required('Polje obavezno'),
              passwordConfirm: ye
                .d()
                .oneOf([
                  ye.c('password'),
                  'Mora biti isto kao polje \u0161ifra.',
                ]),
            }),
            b = Object(m.a)({
              initialValues: { password: '', passwordConfirm: '' },
              onSubmit: e.onSubmit,
              validationSchema: j,
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                className: t.heading,
                children: 'Promeni \u0160ifru',
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                type: i ? 'text' : 'password',
                variant: 'outlined',
                name: 'password',
                value: b.values.password,
                onChange: b.handleChange,
                label: '\u0160ifra',
                helperText: b.errors.password,
                error: !!b.errors.password,
                InputProps: {
                  endAdornment: Object(n.jsx)(_e.a, {
                    position: 'end',
                    children: Object(n.jsx)(P.a, {
                      'aria-label': 'toggle password visibility',
                      onClick: function () {
                        o(!i);
                      },
                      onMouseDown: p,
                      children: i
                        ? Object(n.jsx)(Te.a, {})
                        : Object(n.jsx)(Ie.a, {}),
                    }),
                  }),
                },
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                type: u ? 'text' : 'password',
                variant: 'outlined',
                name: 'passwordConfirm',
                value: b.values.passwordConfirm,
                onChange: b.handleChange,
                label: 'Ponovi \u0161ifru',
                helperText:
                  b.errors.passwordConfirm &&
                  b.errors.passwordConfirm.split(':')[1],
                error: !!b.errors.passwordConfirm,
                InputProps: {
                  endAdornment: Object(n.jsx)(_e.a, {
                    position: 'end',
                    children: Object(n.jsx)(P.a, {
                      'aria-label': 'toggle password confirm visibility',
                      onClick: function () {
                        d(!u);
                      },
                      onMouseDown: p,
                      children: u
                        ? Object(n.jsx)(Te.a, {})
                        : Object(n.jsx)(Ie.a, {}),
                    }),
                  }),
                },
              }),
              Object(n.jsx)(g.a, {
                size: 'large',
                color: 'primary',
                variant: 'contained',
                onClick: b.submitForm,
                style: { marginTop: 5 },
                disabled: !b.dirty || !b.isValid,
                children: 'Potvrdi',
              }),
            ],
          });
        },
        Le = function (e) {
          return 'mechanic' === e
            ? 'Mehani\u010dar'
            : 'blogger' === e
            ? 'Blogger'
            : 'admin' === e
            ? 'Administrator'
            : 'super-admin' === e
            ? 'Super Administrator'
            : 'status nepoznat';
        },
        Pe = a(746),
        Ue = a(689),
        Me = Object(h.a)(function (e) {
          return {
            modal: {
              outline: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              overflowY: 'scroll',
              maxHeight: '90vh',
              background: '#fff',
              padding: '45px 55px',
              '&:focus, &:active': { outline: 'none' },
              '@media screen and (max-width: 900px)': {
                padding: '45px 25px',
                width: '80%',
              },
            },
          };
        }),
        Be = function (e) {
          var t = e.open,
            a = e.onClose,
            r = Object(Ae.a)(e, ['open', 'onClose']),
            c = Me();
          return Object(n.jsx)(v.a, {
            open: t,
            onClose: a,
            closeAfterTransition: !0,
            BackdropComponent: Pe.a,
            BackdropProps: { timeout: 500 },
            children: Object(n.jsx)(Ue.a, {
              in: t,
              children: Object(n.jsx)('div', {
                className: c.modal,
                children: r.children,
              }),
            }),
          });
        },
        ze = a(3),
        Ye = ze.LOADING,
        We = ze.SUCCESS,
        Fe = ze.CLEAR_LOADING,
        Ke = ze.UI_ERROR,
        Ve = ze.CLEAR_UI_ERROR,
        He = function () {
          return { type: Ye };
        },
        Je = function () {
          return { type: Fe };
        },
        Xe = function (e) {
          return { type: We, payload: e };
        },
        qe = function (e) {
          return { type: Ke, payload: e };
        },
        Ze = function () {
          return { type: Ve };
        },
        $e = function () {
          var e = Object(d.b)(),
            t = Object(d.c)(function (e) {
              return e.UI;
            }),
            a = function () {
              e(Xe());
            };
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)(ue.a, {
              open: !!t.successMessage,
              onClose: a,
              children: Object(n.jsx)(de.a, {
                onClose: a,
                severity: 'success',
                variant: 'filled',
                children: t.successMessage,
              }),
            }),
          });
        },
        Qe = function () {
          var e = Object(d.b)(),
            t = Object(d.c)(function (e) {
              return e.UI;
            }),
            a = function () {
              e(Ze());
            };
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)(ue.a, {
              open: !!t.uiError,
              onClose: a,
              children: Object(n.jsx)(de.a, {
                onClose: a,
                severity: 'error',
                variant: 'filled',
                children: t.uiError,
              }),
            }),
          });
        },
        et = Object(h.a)(function (e) {
          return {
            form: { display: 'flex', flexDirection: 'column' },
            buttonContainer: {
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            },
            heading: { marginBottom: 20, textAlign: 'center' },
            button: { width: 150, marginRight: 15 },
            headIcon: {
              display: 'block',
              textAlign: 'center',
              color: e.palette.warning.main,
              '& svg': { fontSize: 100 },
            },
            text: { textAlign: 'center', marginBottom: 20 },
          };
        }),
        tt = function (e) {
          var t = e.heading,
            a = e.text,
            r = e.open,
            c = e.onClose,
            i = e.onSubmit,
            o = e.btn1,
            s = e.btn2,
            l = e.headIcon,
            u = et();
          return Object(n.jsx)(Be, {
            open: r,
            onClose: c,
            children: Object(n.jsxs)('form', {
              className: u.form,
              children: [
                Object(n.jsx)('div', {
                  className: u.headIcon,
                  children: l && l,
                }),
                Object(n.jsx)(f.a, {
                  variant: 'h4',
                  component: 'h3',
                  className: u.heading,
                  children:
                    t || 'Da li ste sigurni da \u017eelite da obri\u0161ete?',
                }),
                a &&
                  Object(n.jsx)(f.a, {
                    variant: 'body1',
                    color: 'textSecondary',
                    component: 'p',
                    className: u.text,
                    children: a,
                  }),
                Object(n.jsxs)('div', {
                  className: u.buttonContainer,
                  children: [
                    Object(n.jsx)(g.a, {
                      variant: 'contained',
                      size: 'large',
                      color: 'secondary',
                      onClick: i,
                      className: u.button,
                      children: o || 'Obri\u0161i',
                    }),
                    Object(n.jsx)(g.a, {
                      variant: 'contained',
                      size: 'large',
                      color: 'primary',
                      onClick: c,
                      className: u.button,
                      children: s || 'Otka\u017ei',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        at = Object(h.a)(function (e) {
          return {
            container: {
              background: '#fff',
              width: '100%',
              display: 'flex',
              marginTop: 20,
            },
            aside: {
              display: 'flex',
              flexDirection: 'column',
              width: 200,
              borderRight: '1px solid rgba(0,0,0,0.1)',
            },
            asideItem: {
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              padding: '20px',
              transition: 'all .3s',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                background: e.palette.primary.dark,
                color: '#fff',
                '& span': { color: '#f8f8f8' },
              },
              '& span': { color: e.palette.text.secondary },
            },
            asideItemActive: {
              background: e.palette.primary.dark,
              color: '#fff',
              '& span': { color: '#f8f8f8' },
            },
            formContainer: { padding: 50 },
            createNewButton: {
              border: '1px solid '.concat(e.palette.text.primary),
              marginBottom: 15,
            },
            formsContent: { height: 'fit-content', display: 'flex' },
            content: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
            deleteBtn: { margin: '0 0 50px 50px', display: 'flex' },
          };
        }),
        nt = function () {
          var e = at(),
            t = Object(d.b)(),
            a = Object(d.c)(function (e) {
              return e.admins;
            }),
            c = Object(r.useState)(!1),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = Object(r.useState)(!1),
            u = Object(R.a)(l, 2),
            p = u[0],
            j = u[1],
            b = function () {
              j(!p);
            },
            m = function () {
              return s(!o);
            },
            h = Object(r.useState)({}),
            x = Object(R.a)(h, 2),
            E = x[0],
            v = x[1];
          Object(r.useEffect)(
            function () {
              t({ type: O.GET_ADMINS_SAGA });
            },
            [t]
          );
          var A = Object(r.useState)(!1),
            _ = Object(R.a)(A, 2),
            C = _[0],
            S = _[1],
            N = function (e) {
              t(
                (function (e) {
                  return { type: O.DELETE_ADMIN_SAGA, payload: { id: e } };
                })(e)
              );
            };
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(tt, {
                open: p,
                onClose: b,
                heading:
                  'Da li ste sigurni da \u017eelite da izbri\u0161ete Administratora?',
                btn1: 'Izbri\u0161i',
                btn2: 'Otka\u017ei',
                headIcon: Object(n.jsx)(Ee.a, {}),
                onSubmit: function () {
                  N(E.id);
                },
              }),
              Object(n.jsx)(g.a, {
                variant: 'outlined',
                startIcon: Object(n.jsx)(ge.a, {}),
                className: e.createNewButton,
                onClick: m,
                children: 'Dodaj Korisnika',
              }),
              Object(n.jsx)(Be, {
                open: o,
                onClose: m,
                children: Object(n.jsx)(Ge, {
                  heading: 'Napravi Novog Administratora',
                  create: !0,
                  onSubmit: function (e) {
                    var a, n, r, c, i, o, s, l;
                    t(
                      ((a = e.username),
                      (n = e.firstName),
                      (r = e.lastName),
                      (c = e.email),
                      (i = e.phoneNumber),
                      (o = e.password),
                      (s = e.passwordConfirm),
                      (l = e.role),
                      {
                        type: O.CREATE_ADMIN_SAGA,
                        payload: {
                          username: a,
                          firstName: n,
                          lastName: r,
                          email: c,
                          phoneNumber: i,
                          password: o,
                          passwordConfirm: s,
                          role: l,
                        },
                      })
                    );
                  },
                }),
              }),
              Object(n.jsxs)('div', {
                className: e.container,
                children: [
                  Object(n.jsx)('aside', {
                    className: e.aside,
                    children: a.map(function (t) {
                      return Object(n.jsxs)(
                        'div',
                        {
                          className:
                            (null === E || void 0 === E ? void 0 : E.id) ===
                            t.id
                              ? ''
                                  .concat(e.asideItem, ' ')
                                  .concat(e.asideItemActive)
                              : e.asideItem,
                          onClick: function () {
                            !(function (e) {
                              v(e);
                            })(t),
                              S(!1),
                              requestAnimationFrame(function () {
                                S(!0);
                              });
                          },
                          children: [
                            Object(n.jsxs)(f.a, {
                              variant: 'body1',
                              component: 'p',
                              children: [t.firstName, ' ', t.lastName],
                            }),
                            Object(n.jsx)(f.a, {
                              variant: 'caption',
                              component: 'p',
                              children: Le(t.role),
                            }),
                            Object(n.jsxs)(f.a, {
                              variant: 'caption',
                              component: 'span',
                              children: ['username: ', t.username],
                            }),
                            Object(n.jsx)(f.a, {
                              variant: 'caption',
                              component: 'span',
                              children: t.email,
                            }),
                            Object(n.jsx)(f.a, {
                              variant: 'caption',
                              component: 'span',
                              children: t.phoneNumber,
                            }),
                          ],
                        },
                        t.id
                      );
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: e.content,
                    children: [
                      Object(n.jsxs)('div', {
                        className: e.formsContent,
                        children: [
                          Object(n.jsx)('div', {
                            className: e.formContainer,
                            children:
                              C &&
                              Object(n.jsx)(Ge, {
                                firstName: E.firstName,
                                lastName: E.lastName,
                                username: E.username,
                                phoneNumber: E.phoneNumber,
                                role: E.role,
                                email: E.email,
                                heading: 'Napravi Izmene',
                                onSubmit: function (e) {
                                  t(
                                    (function (e) {
                                      var t = e.id,
                                        a = e.username,
                                        n = e.firstName,
                                        r = e.lastName,
                                        c = e.phoneNumber,
                                        i = e.email,
                                        o = e.role;
                                      return {
                                        type: O.UPDATE_ADMIN_SAGA,
                                        payload: {
                                          id: t,
                                          username: a,
                                          firstName: n,
                                          lastName: r,
                                          phoneNumber: c,
                                          email: i,
                                          role: o,
                                        },
                                      };
                                    })({
                                      id: E.id,
                                      email: e.email,
                                      firstName: e.firstName,
                                      lastName: e.lastName,
                                      phoneNumber: e.phoneNumber,
                                      role: e.role,
                                      username: e.username,
                                    })
                                  );
                                },
                              }),
                          }),
                          Object(n.jsx)('div', {
                            className: e.formContainer,
                            children:
                              C &&
                              Object(n.jsx)(we, {
                                onSubmit: function (e) {
                                  var a, n, r;
                                  t(
                                    ((a = E.id),
                                    (n = e.password),
                                    (r = e.passwordConfirm),
                                    {
                                      type: O.UPDATE_ADMIN_PASSWORD_SAGA,
                                      payload: {
                                        id: a,
                                        password: n,
                                        passwordConfirm: r,
                                      },
                                    })
                                  );
                                },
                              }),
                          }),
                        ],
                      }),
                      C &&
                        Object(n.jsx)(g.a, {
                          className: e.deleteBtn,
                          color: 'secondary',
                          startIcon: Object(n.jsx)(ve.a, {}),
                          onClick: b,
                          children: 'Obri\u0161i Administratora',
                        }),
                    ],
                  }),
                ],
              }),
              Object(n.jsx)(y, {}),
              Object(n.jsx)($e, {}),
              Object(n.jsx)(Qe, {}),
            ],
          });
        },
        rt = Object(h.a)(function (e) {
          return { container: { padding: '20px 0', width: '90%' } };
        }),
        ct = function () {
          var e = rt();
          return Object(n.jsxs)(x.a, {
            className: e.container,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h2',
                component: 'h1',
                children: 'Admin Panel',
              }),
              Object(n.jsx)(nt, {}),
            ],
          });
        },
        it = a(44),
        ot = a(45),
        st = a(764),
        lt = a(18),
        ut = a.n(lt),
        dt = a(758),
        pt = a(759),
        jt = a(760),
        bt = a(761),
        mt = a(762),
        Ot = a(763),
        ht = a(2),
        xt = a.n(ht),
        ft = a(801),
        Et = a(757),
        gt = a(794),
        vt = function (e, t, a, n, r, c, i) {
          return {
            type: O.EDIT_APPOINTMENT_SAGA,
            payload: {
              appointmentId: e,
              showedUp: t,
              name: a,
              car: n,
              note: r,
              phoneNumber: c,
              datetime: i,
            },
          };
        },
        At = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
          };
        }),
        yt = function (e) {
          var t = At(),
            a = Object(d.b)(),
            r = Object(m.a)({
              initialValues: { showedUp: e.showedUp || null },
              onSubmit:
                e.onSubmit ||
                function (t) {
                  a(vt(e.appointmentId, t.showedUp));
                },
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                style: { marginLeft: -1 },
                children: 'Potvrdi Dolazak Na Termin',
              }),
              Object(n.jsx)(Ce.a, {
                component: 'fieldset',
                style: { marginBottom: 5, marginLeft: 5 },
                children: Object(n.jsxs)(ft.a, {
                  'aria-label': 'showedUp',
                  name: 'showedUp',
                  value: r.status,
                  onChange: function (e) {
                    var t = 'true' === e.target.value;
                    r.setFieldValue('showedUp', t);
                  },
                  children: [
                    Object(n.jsx)(Et.a, {
                      value: !0,
                      control: Object(n.jsx)(gt.a, {
                        checked: !0 === r.values.showedUp,
                      }),
                      label: 'Potvrdi dolazak.',
                    }),
                    Object(n.jsx)(Et.a, {
                      value: !1,
                      control: Object(n.jsx)(gt.a, {
                        checked: !1 === r.values.showedUp,
                      }),
                      label: 'Termin nije ispo\u0161tovan.',
                    }),
                  ],
                }),
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                onClick: r.submitForm,
                disabled:
                  !r.dirty &&
                  !(!1 === r.values.showedUp || !0 === r.values.showedUp),
                children: 'Potvrdi',
              }),
            ],
          });
        };
      yt.propTyps = {
        onSubmit: xt.a.func,
        appointmentId: xt.a.string,
        showedUp: xt.a.bool,
      };
      var _t = yt,
        Ct = a(790),
        St = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
          };
        }),
        Nt = function (e) {
          var t = e.heading,
            a = e.name,
            r = e.car,
            c = e.note,
            i = e.datetime,
            o = e.phoneNumber,
            s = Object(Ae.a)(e, [
              'heading',
              'name',
              'car',
              'note',
              'datetime',
              'phoneNumber',
            ]),
            l = St(),
            u = Object(d.b)(),
            p = ye.b().shape({
              name: ye.d().required('Polje Obavezno!'),
              car: ye.d().required('Polje Obavezno!'),
              note: ye.d().required('Polje Obavezno!'),
              phoneNumber: ye.d().required('Polje Obavezno!'),
            }),
            j = Object(m.a)({
              initialValues: {
                name: a || '',
                car: r || '',
                phoneNumber: o || '',
                note: c || '',
                datetime: i || ut()(new Date()).format('YYYY-MM-DDTHH:mm'),
              },
              onSubmit:
                s.onSubmit ||
                function (e) {
                  u(
                    (function (e, t, a, n, r) {
                      return {
                        type: O.CREATE_APPOINTMENT_SAGA,
                        payload: {
                          name: e,
                          car: t,
                          phoneNumber: a,
                          note: n,
                          datetime: r,
                        },
                      };
                    })(e.name, e.car, e.phoneNumber, e.note, e.datetime)
                  );
                },
              validationSchema: p,
            });
          return Object(n.jsxs)('form', {
            onSubmit: j.handleSubmit,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                style: { marginLeft: -1 },
                children: t || 'Zaka\u017ei termin',
              }),
              Object(n.jsx)(E.a, {
                className: l.textField,
                name: 'name',
                label: 'Ime',
                value: j.values.name,
                onChange: j.handleChange,
                helperText: j.errors.name,
                error: !!j.errors.name,
              }),
              Object(n.jsx)(E.a, {
                className: l.textField,
                name: 'car',
                label: 'Automobil',
                onChange: j.handleChange,
                value: j.values.car,
                helperText: j.errors.car,
                error: !!j.errors.car,
              }),
              Object(n.jsx)(E.a, {
                className: l.textField,
                name: 'phoneNumber',
                label: 'Broj Telefona',
                value: j.values.phoneNumber,
                onChange: j.handleChange,
                helperText: j.errors.phoneNumber,
                error: !!j.errors.phoneNumber,
              }),
              Object(n.jsx)(E.a, {
                className: l.textField,
                name: 'note',
                label: 'Razlog zakazivanja',
                value: j.values.note,
                onChange: j.handleChange,
                helperText: j.errors.note,
                error: !!j.errors.note,
              }),
              Object(n.jsx)(ot.a, {
                utils: it.a,
                children: Object(n.jsx)(Ct.a, {
                  variant: 'inline',
                  ampm: !1,
                  label: 'Datum i Vreme',
                  value: j.values.datetime,
                  onChange: function (e) {
                    j.setFieldValue(
                      'datetime',
                      ut()(e).format('YYYY-MM-DDTHH:mm')
                    );
                  },
                  style: { display: 'block', marginBottom: 10 },
                  onError: console.log,
                  disablePast: !0,
                  format: 'dd.MM.yyyy. HH:mm',
                }),
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                disabled: !j.dirty || !j.isValid,
                onClick: j.submitForm,
                children: 'Potvrdi',
              }),
            ],
          });
        },
        Rt = Object(h.a)(function (e) {
          return {
            container: { flexGrow: 1 },
            card: { width: '100%', position: 'relative' },
            confirmIcon: {
              position: 'absolute',
              top: '50%',
              right: 30,
              transform: 'translateY(-50%)',
            },
            noShowIcon: { color: e.palette.secondary.main, fontSize: 50 },
            showedUp: { color: e.palette.success.main, fontSize: 50 },
          };
        }),
        Tt = function (e) {
          var t = e.appointments,
            a = Rt(),
            c = Object(d.b)(),
            i = Object(r.useState)(!1),
            o = Object(R.a)(i, 2),
            s = o[0],
            l = o[1],
            u = Object(r.useState)({}),
            p = Object(R.a)(u, 2),
            j = p[0],
            b = p[1],
            m = function () {
              l(!s);
            },
            O = function (e) {
              b(e || {});
            },
            h = Object(r.useState)(!1),
            x = Object(R.a)(h, 2),
            E = x[0],
            v = x[1],
            A = function () {
              v(!E);
            };
          return t && t[0]
            ? Object(n.jsxs)(n.Fragment, {
                children: [
                  Object(n.jsx)(Be, {
                    open: s,
                    onClose: m,
                    children: Object(n.jsx)(_t, { appointmentId: j.id }),
                  }),
                  Object(n.jsx)(Be, {
                    open: E,
                    onClose: A,
                    children: Object(n.jsx)(Nt, {
                      heading: 'Izmeni Zakazani Termin',
                      datetime: j.datetime,
                      car: j.car,
                      name: j.name,
                      note: j.note,
                      phoneNumber: j.phoneNumber,
                      onSubmit: function (e) {
                        c(
                          vt(
                            j.id,
                            void 0,
                            e.name,
                            e.car,
                            e.note,
                            e.phoneNumber,
                            e.datetime
                          )
                        );
                      },
                    }),
                  }),
                  Object(n.jsx)(dt.a, {
                    className: a.container,
                    container: !0,
                    spacing: 3,
                    children:
                      t &&
                      t[0] &&
                      t.map(function (e) {
                        return Object(n.jsx)(
                          dt.a,
                          {
                            item: !0,
                            lg: 4,
                            sm: 6,
                            xs: 12,
                            children: Object(n.jsxs)(pt.a, {
                              className: a.card,
                              children: [
                                Object(n.jsxs)(jt.a, {
                                  children: [
                                    Object(n.jsx)(f.a, {
                                      variant: 'h5',
                                      component: 'h4',
                                      children: e.name,
                                    }),
                                    Object(n.jsx)(f.a, {
                                      variant: 'subtitle1',
                                      color: 'secondary',
                                      component: 'p',
                                      children: ut()(e.datetime).format(
                                        'DD.MM.YYYY HH:mm'
                                      ),
                                    }),
                                    Object(n.jsx)(f.a, {
                                      variant: 'body2',
                                      color: 'textPrimary',
                                      component: 'p',
                                      children: e.car.toUpperCase(),
                                    }),
                                    Object(n.jsx)(f.a, {
                                      variant: 'body2',
                                      color: 'textPrimary',
                                      component: 'p',
                                      children: e.phoneNumber,
                                    }),
                                    Object(n.jsx)(f.a, {
                                      variant: 'body2',
                                      color: 'textSecondary',
                                      component: 'p',
                                      children: e.note,
                                    }),
                                  ],
                                }),
                                Object(n.jsxs)(bt.a, {
                                  children: [
                                    Object(n.jsx)(g.a, {
                                      size: 'small',
                                      color: 'primary',
                                      onClick: function () {
                                        O(e), m();
                                      },
                                      children: 'Potvrdi Dolazak',
                                    }),
                                    Object(n.jsx)(g.a, {
                                      size: 'small',
                                      color: 'primary',
                                      onClick: function () {
                                        O(e), A();
                                      },
                                      children: 'izmeni',
                                    }),
                                  ],
                                }),
                                Object(n.jsxs)('div', {
                                  className: a.confirmIcon,
                                  children: [
                                    !1 === e.showedUp &&
                                      Object(n.jsx)(mt.a, {
                                        className: a.noShowIcon,
                                      }),
                                    !0 === e.showedUp &&
                                      Object(n.jsx)(Ot.a, {
                                        className: a.showedUp,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.id
                        );
                      }),
                  }),
                ],
              })
            : Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                children: 'Nema zakazanih termina..',
              });
        },
        It = Object(h.a)(function (e) {
          return { datesContainer: { display: 'flex', margin: '20px 0' } };
        }),
        kt = function () {
          var e = It(),
            t = Object(d.b)(),
            a = Object(d.c)(function (e) {
              return e.appointments;
            }),
            c = Object(r.useState)(!1),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = function () {
              s(!o);
            },
            u = Object(r.useState)(
              ut()(new Date()).subtract(1, 'day').format('YYYY-MM-DD')
            ),
            p = Object(R.a)(u, 2),
            j = p[0],
            b = p[1],
            m = Object(r.useState)(
              ut()(new Date()).add(1, 'day').format('YYYY-MM-DD')
            ),
            h = Object(R.a)(m, 2),
            x = h[0],
            f = h[1];
          return (
            Object(r.useEffect)(
              function () {
                t(
                  (function (e, t) {
                    var a = e || ut()(new Date()).subtract(1, 'day'),
                      n = t || ut()(new Date()).add(1, 'day');
                    return {
                      type: O.GET_APPOINTMENTS_SAGA,
                      payload: { fromDate: a, toDate: n },
                    };
                  })(j, x)
                );
              },
              [t, j, x]
            ),
            Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(Be, {
                  open: o,
                  onClose: l,
                  children: Object(n.jsx)(Nt, {}),
                }),
                Object(n.jsx)(g.a, {
                  startIcon: Object(n.jsx)(ge.a, {}),
                  onClick: l,
                  variant: 'outlined',
                  children: 'Zaka\u017ei termin',
                }),
                Object(n.jsxs)('div', {
                  children: [
                    Object(n.jsx)(ot.a, {
                      utils: it.a,
                      children: Object(n.jsxs)('div', {
                        className: e.datesContainer,
                        children: [
                          Object(n.jsx)(st.b, {
                            disableToolbar: !0,
                            variant: 'inline',
                            format: 'dd/MM/yyyy',
                            margin: 'normal',
                            label: 'Datum od:',
                            value: j,
                            onChange: function (e) {
                              b(ut()(e).format('YYYY-MM-DD'));
                            },
                            KeyboardButtonProps: {
                              'aria-label': 'change date',
                            },
                            style: { marginRight: 10 },
                          }),
                          Object(n.jsx)(st.b, {
                            disableToolbar: !0,
                            variant: 'inline',
                            format: 'dd/MM/yyyy',
                            margin: 'normal',
                            label: 'Datum do:',
                            value: x,
                            onChange: function (e) {
                              f(ut()(e).format('YYYY-MM-DD'));
                            },
                            KeyboardButtonProps: {
                              'aria-label': 'change date',
                            },
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsx)(Tt, { appointments: a }),
                    Object(n.jsx)(y, {}),
                    Object(n.jsx)($e, {}),
                    Object(n.jsx)(Qe, {}),
                  ],
                }),
              ],
            })
          );
        },
        Gt = Object(h.a)(function (e) {
          return { container: { padding: '20px 0', width: '90%' } };
        }),
        Dt = function () {
          var e = Gt();
          return Object(n.jsxs)(x.a, {
            className: e.container,
            children: [
              Object(n.jsx)(f.a, {
                componenet: 'h1',
                variant: 'h2',
                children: 'Zakazani termini',
              }),
              Object(n.jsx)(kt, {}),
            ],
          });
        },
        wt = a(796),
        Lt = Object(h.a)(function (e) {
          return {
            header: { padding: '2rem 0' },
            breadcrum: {
              color: e.palette.text.secondary,
              textTransform: 'capitalize',
              textDecoration: 'none',
              '&:hover': { color: e.palette.text.primary },
            },
          };
        }),
        Pt = function (e) {
          var t,
            a = Lt(),
            r =
              null === e ||
              void 0 === e ||
              null === (t = e.breadcrums) ||
              void 0 === t
                ? void 0
                : t.map(function (t, r) {
                    return Object(n.jsx)(
                      p.b,
                      {
                        to: t.path,
                        className: a.breadcrum,
                        style:
                          ((c = r === e.breadcrums.length - 1),
                          c ? { color: '#0e0e0e' } : {}),
                        children: t.name,
                      },
                      t.path
                    );
                    var c;
                  });
          return Object(n.jsxs)('header', {
            className: a.header,
            children: [
              Object(n.jsx)(f.a, {
                component: 'h1',
                variant: 'h2',
                children: e.children,
              }),
              Object(n.jsx)(wt.a, {
                'aria-label': 'breadcrumb',
                style: { marginLeft: 5 },
                children: r,
              }),
            ],
          });
        },
        Ut = Object(h.a)(function (e) {
          return { attention: { color: e.palette.primary.main } };
        }),
        Mt = function (e) {
          var t = Ut(),
            a = e;
          return e.carBrand
            ? Object(n.jsxs)(n.Fragment, {
                children: [
                  Object(n.jsxs)(f.a, {
                    variant: 'h4',
                    component: 'h2',
                    style: { marginLeft: -1 },
                    children: [
                      a.carBrand,
                      ' ',
                      a.carModel,
                      ' ',
                      a.productionYear,
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Registracija:',
                      ' ',
                      a.registration &&
                        Object(n.jsx)('span', {
                          className: t.attention,
                          children: a.registration.toUpperCase(),
                        }),
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Motor:',
                      ' ',
                      Object(n.jsx)('span', {
                        className: t.attention,
                        children: a.engine.toUpperCase(),
                      }),
                    ],
                  }),
                  a.user &&
                    Object(n.jsxs)(n.Fragment, {
                      children: [
                        Object(n.jsxs)(f.a, {
                          variant: 'body1',
                          children: [
                            'Vlasnik:',
                            ' ',
                            Object(n.jsxs)('span', {
                              className: t.attention,
                              children: [
                                a.user.firstName,
                                ' ',
                                a.user.lastName,
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)(f.a, {
                          variant: 'body1',
                          children: [
                            'Email:',
                            ' ',
                            Object(n.jsx)('a', {
                              href: 'mailto:'.concat(a.user.email),
                              className: t.attention,
                              children: a.user.email,
                            }),
                          ],
                        }),
                        Object(n.jsxs)(f.a, {
                          variant: 'body1',
                          children: [
                            'Br. Telefona:',
                            ' ',
                            Object(n.jsx)('a', {
                              href: 'tel:'.concat(a.user.phoneNumber),
                              className: t.attention,
                              children: a.user.phoneNumber,
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : Object(n.jsx)(f.a, { children: 'Automobil nije u\u010ditan..' });
        },
        Bt = a(10),
        zt = a(765),
        Yt = a(766),
        Wt = a(767),
        Ft = a(248),
        Kt = a(768),
        Vt = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
          };
        }),
        Ht = function (e) {
          var t = e.partsUnderWarranty,
            a = e.validUntil,
            r = Object(Ae.a)(e, ['partsUnderWarranty', 'validUntil']),
            c = Vt(),
            i = Object(d.b)(),
            o = ye.b().shape({
              partsUnderWarranty: ye.d().required('Polje Obavezno!'),
            }),
            s = Object(m.a)({
              initialValues: {
                partsUnderWarranty: t || '',
                validUntil:
                  a || ut()(new Date()).add(1, 'year').format('YYYY-MM-DD'),
              },
              onSubmit:
                r.onSubmit ||
                function (e) {
                  i(
                    (function (e, t, a) {
                      return {
                        type: O.CREATE_WARRANTY_SAGA,
                        payload: {
                          carId: e,
                          partsUnderWarranty: t,
                          validUntil: a,
                          warrantyConditionsTitle: 'std-warranty',
                        },
                      };
                    })(r.carId, e.partsUnderWarranty, e.validUntil)
                  );
                },
              validationSchema: o,
            });
          return Object(n.jsxs)('form', {
            className: c.form,
            onSubmit: s.handleSubmit,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                style: { marginLeft: -1 },
                children: r.heading || 'Dodaj Garanciju',
              }),
              Object(n.jsx)(E.a, {
                className: c.textField,
                name: 'partsUnderWarranty',
                label: 'Delovi pod garancijom:',
                multiline: !0,
                rows: 2,
                onChange: s.handleChange,
                value: s.values.partsUnderWarranty,
                helperText: s.errors.partsUnderWarranty,
                error: !!s.errors.partsUnderWarranty,
              }),
              Object(n.jsx)(ot.a, {
                utils: it.a,
                children: Object(n.jsx)(st.b, {
                  variant: 'inline',
                  ampm: !1,
                  label: 'Garancija va\u017ei do:',
                  value: s.values.validUntil,
                  onChange: function (e) {
                    s.setFieldValue(
                      'validUntil',
                      ut()(e).format('YYYY-MM-DDTHH:mm')
                    );
                  },
                  style: { display: 'block', marginBottom: 10 },
                  format: 'dd.MM.yyyy',
                  KeyboardButtonProps: { 'aria-label': 'change date' },
                }),
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                disabled: !s.dirty || !s.isValid,
                onClick: s.submitForm,
                children: 'Potvrdi',
              }),
            ],
          });
        },
        Jt = Object(h.a)(function (e) {
          return {
            section: { paddingBottom: 30 },
            addWarrantyButton: {
              color: e.palette.primary.main,
              background: '#fff',
              marginLeft: 10,
              marginTop: 2,
            },
            header: { display: 'flex', alignItems: 'center', marginBottom: 15 },
          };
        }),
        Xt = Object(Bt.a)(function (e) {
          return {
            root: {
              width: '100%',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: e.palette.action.hover,
              },
            },
          };
        })(zt.a),
        qt = Object(Bt.a)(function (e) {
          return {
            root: { width: '100%', minWidth: 'content' },
            head: {
              backgroundColor: e.palette.primary.dark,
              color: e.palette.common.white,
            },
            body: { fontSize: 14 },
          };
        })(Yt.a),
        Zt = function (e) {
          var t = e.warranties,
            a = Jt(),
            c = Object(d.c)(function (e) {
              return e.activeCar;
            }),
            i = Object(d.b)(),
            o = Object(r.useState)(!1),
            s = Object(R.a)(o, 2),
            l = s[0],
            u = s[1],
            p = function () {
              u(!l);
            },
            j = Object(r.useState)(null),
            b = Object(R.a)(j, 2),
            m = b[0],
            h = b[1],
            x = function (e) {
              h(e);
            },
            E = Object(r.useState)(!1),
            v = Object(R.a)(E, 2),
            A = v[0],
            y = v[1],
            _ = function () {
              y(!A);
            },
            C = function (e) {
              i(
                (function (e) {
                  return {
                    type: O.DELETE_WARRANTY_SAGA,
                    payload: { warrantyId: e },
                  };
                })(e)
              ),
                _(),
                x(null);
            };
          return Object(n.jsxs)('section', {
            className: a.section,
            children: [
              Object(n.jsx)(Be, {
                open: l,
                onClose: p,
                children: Object(n.jsx)(Ht, { carId: c.id }),
              }),
              Object(n.jsxs)(Be, {
                open: !!m,
                onClose: function () {
                  return x(null);
                },
                children: [
                  Object(n.jsx)(Ht, {
                    partsUnderWarranty: m && m.partsUnderWarranty,
                    validUntil: m && ut()(m.validUntil).format('YYYY-MM-DD'),
                    onSubmit: function (e) {
                      var t, a, n;
                      i(
                        ((t = m.id),
                        (a = e.partsUnderWarranty),
                        (n = e.validUntil),
                        {
                          type: O.EDIT_WARRANTY_SAGA,
                          payload: {
                            warrantyId: t,
                            partsUnderWarranty: a,
                            validUntil: n,
                            warrantyConditionsTitle: 'std-warranty',
                          },
                        })
                      );
                    },
                  }),
                  Object(n.jsx)(g.a, {
                    color: 'secondary',
                    style: { marginTop: 20 },
                    startIcon: Object(n.jsx)(ve.a, {}),
                    onClick: _,
                    children: 'Obri\u0161i garanciju',
                  }),
                ],
              }),
              Object(n.jsx)(tt, {
                heading:
                  'Da li ste sigurni da \u017eelite da obri\u0161ete garanciju?',
                open: A,
                onClose: _,
                onSubmit: function () {
                  return C(m.id);
                },
              }),
              Object(n.jsxs)('div', {
                className: a.header,
                children: [
                  Object(n.jsx)(f.a, {
                    variant: 'h3',
                    component: 'h3',
                    style: { marginLeft: -2 },
                    children: 'Garancije',
                  }),
                  Object(n.jsx)(g.a, {
                    variant: 'outlined',
                    className: a.addWarrantyButton,
                    startIcon: Object(n.jsx)(ge.a, {}),
                    color: 'inherit',
                    size: 'small',
                    onClick: p,
                    children: 'Dodaj Garanaciju',
                  }),
                ],
              }),
              (!t || !t[0]) &&
                Object(n.jsx)(f.a, {
                  variant: 'body2',
                  children: 'Nema registrovanih garancija..',
                }),
              t &&
                t[0] &&
                (function (e) {
                  return Object(n.jsxs)(Wt.a, {
                    component: Ft.a,
                    children: [
                      Object(n.jsx)(Kt.a, {
                        children: Object(n.jsxs)(zt.a, {
                          children: [
                            Object(n.jsx)(qt, {
                              children: 'Deo / delovi pod garancijom:',
                            }),
                            Object(n.jsx)(qt, {
                              align: 'right',
                              style: { minWidth: 120 },
                              children: 'Uslovi:',
                            }),
                            Object(n.jsx)(qt, {
                              align: 'right',
                              children: 'Va\u017ei do:',
                            }),
                          ],
                        }),
                      }),
                      e.map(function (e) {
                        return Object(n.jsxs)(
                          Xt,
                          {
                            onClick: function () {
                              return x(e);
                            },
                            children: [
                              Object(n.jsx)(qt, {
                                component: 'th',
                                scope: 'row',
                                children: e.partsUnderWarranty,
                              }),
                              Object(n.jsx)(qt, {
                                align: 'right',
                                children: e.warrantyConditions.conditionsTitle,
                              }),
                              Object(n.jsx)(qt, {
                                align: 'right',
                                children: ut()(e.validUntil).format(
                                  'DD.MM.YYYY.'
                                ),
                              }),
                            ],
                          },
                          e.id
                        );
                      }),
                    ],
                  });
                })(t),
            ],
          });
        },
        $t = Object(h.a)(function (e) {
          return {
            section: { padding: '30px 0' },
            cardContainer: {
              margin: '15px 0',
              display: 'flex',
              alignContent: 'stretch',
              flexWrap: 'wrap',
            },
            card: {
              alignSelf: 'stretch',
              marginRight: 20,
              marginBottom: 10,
              minWidth: 380,
              width: 380,
              '@media screen and (max-width: 900px)': {
                margin: '0 0 20px 0',
                width: '90%',
              },
            },
            cardContent: {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            },
          };
        }),
        Qt = function (e) {
          var t = e.workOrders,
            a = $t(),
            r = Object(j.f)();
          if (!t || !t[0])
            return Object(n.jsx)(f.a, {
              className: a.section,
              children: 'Nema servisnih naloga za ovaj automobil..',
            });
          var c = t.map(function (e) {
            return Object(n.jsx)(
              'div',
              {
                className: a.card,
                children: Object(n.jsxs)(pt.a, {
                  className: a.cardContent,
                  children: [
                    Object(n.jsxs)(jt.a, {
                      children: [
                        Object(n.jsxs)(f.a, {
                          gutterBottom: !0,
                          variant: 'h5',
                          component: 'h2',
                          children: [
                            'DATUM: ',
                            ut()(e.createdAt).format('DD.MM.YYYY'),
                          ],
                        }),
                        Object(n.jsx)(f.a, {
                          variant: 'body1',
                          component: 'p',
                          children: e.jobConclusion
                            ? e.jobConclusion.workDone
                            : 'Nalog i dalje nije zaklju\u010den.',
                        }),
                        e.jobConclusion &&
                          e.jobConclusion.note &&
                          Object(n.jsx)(f.a, {
                            variant: 'body2',
                            color: 'secondary',
                            style: { marginTop: 10 },
                            children: e.jobConclusion.note,
                          }),
                      ],
                    }),
                    Object(n.jsx)(bt.a, {
                      children: Object(n.jsx)(g.a, {
                        component: 'p',
                        size: 'small',
                        color: 'primary',
                        onClick: function () {
                          return r.push('/servisni-nalozi/'.concat(e.id));
                        },
                        children: 'Otvori Nalog',
                      }),
                    }),
                  ],
                }),
              },
              e.id
            );
          });
          return Object(n.jsxs)('section', {
            className: a.section,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h3',
                component: 'h3',
                style: { marginLeft: -1 },
                children: 'Servisni Nalozi',
              }),
              Object(n.jsx)('div', { className: a.cardContainer, children: c }),
            ],
          });
        },
        ea = function () {
          var e = Object(d.b)(),
            t = Object(d.c)(function (e) {
              return e.activeCar;
            }),
            a = Object(j.h)().id;
          return (
            Object(r.useEffect)(
              function () {
                e(
                  (function (e) {
                    return { type: O.GET_ACTIVE_CAR_SAGA, payload: { id: e } };
                  })(a)
                );
              },
              [e, a]
            ),
            Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(Mt, {
                  carBrand: t.carBrand,
                  carModel: t.carModel,
                  user: t.user,
                  engine: t.engine,
                  registration: t.registration,
                }),
                Object(n.jsx)(Qt, { workOrders: t.workOrders }),
                Object(n.jsx)(Zt, { warranties: t.warranties }),
                Object(n.jsx)(y, {}),
                Object(n.jsx)($e, {}),
                Object(n.jsx)(Qe, {}),
              ],
            })
          );
        },
        ta = function () {
          var e = Object(j.h)().id;
          return Object(n.jsxs)(x.a, {
            children: [
              Object(n.jsx)(Pt, {
                breadcrums: [
                  { name: 'Autmobili', path: '/automobili' },
                  {
                    name: 'Automobil '.concat(e.slice(-9)),
                    path: '/automobili/'.concat(e),
                  },
                ],
                children: 'Automobil',
              }),
              Object(n.jsx)(ea, {}),
            ],
          });
        },
        aa = a(802),
        na = a(769),
        ra = a(770),
        ca = a(771),
        ia = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
          };
        }),
        oa = function (e) {
          var t = ia(),
            a = Object(d.b)(),
            r = Object(m.a)({
              initialValues: { published: e.published || !1 },
              onSubmit:
                e.onSubmit ||
                function (t) {
                  var n, r;
                  a(
                    ((n = e.blogId),
                    (r = t.published),
                    {
                      type: O.PUBLISH_BLOG_SAGA,
                      payload: { blogId: n, published: r },
                    })
                  );
                },
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                style: { marginLeft: -1 },
                children: 'Odredi Status Bloga.',
              }),
              Object(n.jsx)(Ce.a, {
                component: 'fieldset',
                style: { marginBottom: 5, marginLeft: 5 },
                children: Object(n.jsxs)(ft.a, {
                  'aria-label': 'published',
                  name: 'published',
                  value: r.status,
                  onChange: function (e) {
                    var t = 'true' === e.target.value;
                    r.setFieldValue('published', t);
                  },
                  children: [
                    Object(n.jsx)(Et.a, {
                      value: !0,
                      control: Object(n.jsx)(gt.a, {
                        checked: !0 === r.values.published,
                      }),
                      label: 'Objavi',
                    }),
                    Object(n.jsx)(Et.a, {
                      value: !1,
                      control: Object(n.jsx)(gt.a, {
                        checked: !1 === r.values.published,
                      }),
                      label: 'Skini objavu',
                    }),
                  ],
                }),
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                onClick: r.submitForm,
                disabled:
                  !r.dirty &&
                  !(!1 === r.values.published || !0 === r.values.published),
                children: 'Potvrdi',
              }),
            ],
          });
        };
      oa.propTyps = {
        onSubmit: xt.a.func,
        blogId: xt.a.string,
        published: xt.a.bool,
      };
      var sa = oa,
        la = Object(h.a)(function (e) {
          return {
            unpublishedIcon: { color: e.palette.secondary.main },
            publishedIcon: { color: e.palette.success.main },
            card: { marginRight: 15 },
          };
        }),
        ua = function (e) {
          var t = e.blogs,
            a = (Object(Ae.a)(e, ['blogs']), Object(j.f)()),
            c = la(),
            i = Object(r.useState)(null),
            o = Object(R.a)(i, 2),
            s = o[0],
            l = o[1],
            u = Object(r.useState)(!1),
            d = Object(R.a)(u, 2),
            p = d[0],
            b = d[1],
            m = function (e, t) {
              !(function (e) {
                l(e);
              })(t),
                b(!p);
            };
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(Be, {
                open: p,
                onClose: m,
                children: Object(n.jsx)(sa, {
                  published: null === s || void 0 === s ? void 0 : s.published,
                  blogId: null === s || void 0 === s ? void 0 : s.id,
                }),
              }),
              Object(n.jsx)(dt.a, {
                container: !0,
                spacing: 3,
                style: { marginTop: 30 },
                children:
                  t &&
                  (function (e) {
                    return e.map(function (e) {
                      return Object(n.jsx)(
                        dt.a,
                        {
                          item: !0,
                          lg: 4,
                          sm: 6,
                          xs: 12,
                          children: Object(n.jsxs)(pt.a, {
                            children: [
                              Object(n.jsxs)(na.a, {
                                onClick: function () {
                                  return a.push('/blog/'.concat(e.id));
                                },
                                children: [
                                  Object(n.jsx)(ra.a, {
                                    style: { height: 200 },
                                    image: e.thumbnail.path,
                                    title: e.thumbnailAlt,
                                  }),
                                  Object(n.jsxs)(jt.a, {
                                    children: [
                                      Object(n.jsx)(f.a, {
                                        gutterBottom: !0,
                                        variant: 'h5',
                                        component: 'h2',
                                        children: e.title,
                                      }),
                                      Object(n.jsx)(f.a, {
                                        variant: 'body2',
                                        color: 'textSecondary',
                                        component: 'p',
                                        children: e.synopsis,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(n.jsxs)(bt.a, {
                                style: { justifyContent: 'space-between' },
                                children: [
                                  Object(n.jsxs)('div', {
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                    children: [
                                      Object(n.jsx)(g.a, {
                                        size: 'small',
                                        color: 'primary',
                                        onClick: function (t) {
                                          return m(0, e);
                                        },
                                        children: 'Objavi',
                                      }),
                                      Object(n.jsx)(g.a, {
                                        size: 'small',
                                        color: 'primary',
                                        onClick: function () {
                                          return a.push(
                                            '/blog/'.concat(e.id, '/edit')
                                          );
                                        },
                                        children: 'Izmeni',
                                      }),
                                    ],
                                  }),
                                  e.published
                                    ? Object(n.jsx)(ca.a, {
                                        className: c.publishedIcon,
                                      })
                                    : Object(n.jsx)(ca.a, {
                                        className: c.unpublishedIcon,
                                      }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.id
                      );
                    });
                  })(t),
              }),
            ],
          });
        },
        da = Object(h.a)(function (e) {
          return {
            container: { marginTop: 30 },
            searchForm: { display: 'flex' },
            paginationContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              margin: '30px 0',
            },
          };
        }),
        pa = function () {
          var e = da(),
            t = Object(d.b)(),
            a = Object(r.useRef)(null),
            c = Object(r.useState)(1),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = Object(r.useState)(12),
            u = Object(R.a)(l, 2),
            p = u[0],
            j = u[1],
            b = Object(r.useState)(''),
            h = Object(R.a)(b, 2),
            x = h[0],
            f = h[1],
            v = Object(d.c)(function (e) {
              return e.blogs;
            }),
            A = Object(m.a)({
              initialValues: { search: '' },
              onSubmit: function (e) {
                f(e.search);
              },
            });
          Object(r.useEffect)(
            function () {
              t(
                (function (e, t, a) {
                  return {
                    type: O.GET_BLOGS_SAGA,
                    payload: { page: e, limit: t, search: a },
                  };
                })(o, p, x)
              );
            },
            [t, o, p, x]
          );
          return Object(n.jsxs)('div', {
            className: e.container,
            children: [
              Object(n.jsxs)('div', {
                style: {
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                },
                children: [
                  Object(n.jsxs)('form', {
                    ref: a,
                    className: e.searchForm,
                    onSubmit: A.handleSubmit,
                    children: [
                      Object(n.jsx)(E.a, {
                        label: 'Pretra\u017ei',
                        size: 'small',
                        value: A.values.search,
                        name: 'search',
                        onChange: A.handleChange,
                        style: { marginRight: 10 },
                        onKeyPress: function (e) {
                          'Enter' === e.key && A.submitForm();
                        },
                      }),
                      Object(n.jsx)(g.a, {
                        size: 'small',
                        variant: 'contained',
                        color: 'primary',
                        style: { alignSelf: 'flex-end' },
                        onClick: function () {
                          return A.submitForm();
                        },
                        children: 'Pretra\u017ei',
                      }),
                    ],
                  }),
                  Object(n.jsx)(E.a, {
                    value: p,
                    onChange: function (e) {
                      j(e.target.value);
                    },
                    select: !0,
                    children: [12, 24, 36].map(function (e) {
                      return Object(n.jsx)(Re.a, { value: e, children: e }, e);
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(ua, { blogs: v.blogs }),
              Object(n.jsx)('div', {
                className: e.paginationContainer,
                children: Object(n.jsx)(aa.a, {
                  style: { marginBottom: 20 },
                  color: 'primary',
                  count: Math.ceil(v.count / p),
                  onChange: function (e, t) {
                    s(t);
                  },
                  page: o,
                }),
              }),
              Object(n.jsx)(y, {}),
              Object(n.jsx)($e, {}),
              Object(n.jsx)(Qe, {}),
            ],
          });
        },
        ja = Object(h.a)(function (e) {
          return {
            container: { padding: '36px 0', width: '90%' },
            addBlogButton: { color: e.palette.text.dark },
          };
        }),
        ba = function () {
          var e = ja(),
            t = Object(j.f)();
          return Object(n.jsxs)(x.a, {
            className: e.container,
            children: [
              Object(n.jsxs)('header', {
                className: e.header,
                children: [
                  Object(n.jsx)(f.a, {
                    component: 'h1',
                    variant: 'h2',
                    children: 'Blog',
                  }),
                  Object(n.jsx)(g.a, {
                    variant: 'outlined',
                    color: 'inherit',
                    className: e.addBlogButton,
                    startIcon: Object(n.jsx)(ge.a, {}),
                    onClick: function () {
                      return t.push('/blog/create');
                    },
                    children: 'Novi Blog',
                  }),
                ],
              }),
              Object(n.jsx)(pa, {}),
            ],
          });
        },
        ma = a(6),
        Oa = a.n(ma),
        ha = a(246),
        xa = a(36),
        fa = a(33),
        Ea = a(61),
        ga = a(62),
        va = a(359),
        Aa = a(360),
        ya = a.n(Aa),
        _a = (function (e) {
          Object(Ea.a)(a, e);
          var t = Object(ga.a)(a);
          function a() {
            return Object(xa.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(fa.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.value,
                    a = e.onChange,
                    r = {
                      extraPlugins: [Ca],
                      toolbar: {
                        items: [
                          'heading',
                          '|',
                          'bold',
                          'italic',
                          'link',
                          'bulletedList',
                          'numberedList',
                          '|',
                          'blockQuote',
                          'insertTable',
                          '|',
                          'imageUpload',
                          'undo',
                          'redo',
                        ],
                      },
                      table: {
                        contentToolbar: [
                          'tableColumn',
                          'tableRow',
                          'mergeTableCells',
                        ],
                      },
                      link: {
                        decorators: {
                          openInNewTab: {
                            mode: 'manual',
                            label: 'Open in a new tab',
                            attributes: {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            },
                          },
                        },
                      },
                      image: {
                        styles: [
                          'full',
                          'alignLeft',
                          'alignCenter',
                          'alignRight',
                        ],
                        resizeOptions: [
                          {
                            name: 'imageResize:original',
                            label: 'Original',
                            value: null,
                          },
                          { name: 'imageResize:50', label: '50%', value: '50' },
                          { name: 'imageResize:75', label: '75%', value: '75' },
                        ],
                        toolbar: [
                          'imageStyle:full',
                          'imageStyle:alignLeft',
                          'imageStyle:alignCenter',
                          'imageStyle:alignRight',
                          '|',
                          'imageTextAlternative',
                        ],
                      },
                    };
                  return Object(n.jsx)(va.CKEditor, {
                    required: !0,
                    editor: ya.a,
                    config: r,
                    data: t,
                    onChange: a,
                  });
                },
              },
            ]),
            a
          );
        })(r.Component);
      function Ca(e) {
        e.plugins.get('FileRepository').createUploadAdapter = function (e) {
          return new Sa(e);
        };
      }
      var Sa = (function () {
          function e(t) {
            Object(xa.a)(this, e),
              (this.loader = t),
              (this.url = '/api/v1/images/');
          }
          return (
            Object(fa.a)(e, [
              {
                key: 'upload',
                value: function () {
                  var e = this;
                  return new Promise(function (t, a) {
                    e._initRequest(), e._initListeners(t, a), e._sendRequest();
                  });
                },
              },
              {
                key: 'abort',
                value: function () {
                  this.xhr && this.xhr.abort();
                },
              },
              {
                key: '_initRequest',
                value: function () {
                  var e = (this.xhr = new XMLHttpRequest());
                  e.open('POST', this.url, !0),
                    (e.responseType = 'json'),
                    e.setRequestHeader('Access-Control-Allow-Origin', '*');
                },
              },
              {
                key: '_initListeners',
                value: function (e, t) {
                  var a = this.xhr,
                    n = this.loader,
                    r = "Couldn't upload file:" + ' '.concat(n.file.name, '.');
                  a.addEventListener('error', function () {
                    return t(r);
                  }),
                    a.addEventListener('abort', function () {
                      return t();
                    }),
                    a.addEventListener('load', function () {
                      var n = a.response;
                      if (!n || n.error)
                        return t(n && n.error ? n.error.message : r);
                      e({ default: n.data.path });
                    }),
                    a.upload &&
                      a.upload.addEventListener('progress', function (e) {
                        e.lengthComputable &&
                          ((n.uploadTotal = e.total), (n.uploaded = e.loaded));
                      });
                },
              },
              {
                key: '_sendRequest',
                value: function () {
                  var e = this,
                    t = new FormData();
                  this.loader.file.then(function (a) {
                    t.append('blogImage', a), e.xhr.send(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        Na = _a,
        Ra = a(16),
        Ta = a.n(Ra),
        Ia = Object(h.a)(function (e) {
          return {
            container: {
              width: '100%',
              maxWidth: 1800,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              margin: '0 auto',
            },
            item: {
              width: '40%',
              height: '100%',
              backgroundColor: '#fff',
              boxShadow: '2px 5px 12px rgba(0,0,0,0.2)',
            },
            form: {
              padding: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginRight: 30,
            },
            blog: { padding: 50 },
            divider: {
              height: 2,
              width: 250,
              background: 'rgba(0,0,0,0.4)',
              marginBottom: 20,
              marginLeft: 1,
            },
            uploadButton: {
              color: '#fff',
              background: e.palette.primary.main,
              alignSelf: 'flex-start',
              padding: '10px 17px',
              cursor: 'pointer',
              marginBottom: 14,
              borderRadius: 3,
              transition: 'all .2s',
              '&:hover': {
                background: e.palette.primary.dark,
                boxShadow: e.shadows[3],
              },
              'input[type=file][disabled] + &': {
                cursor: 'not-allowed',
                background: e.palette.text.disabled,
              },
            },
            textField: { width: '100%', margin: '0 auto 14px auto' },
            deleteImageButton: {
              cursor: 'pointer',
              transition: 'all .2s',
              display: 'inline-block',
              alignSelf: 'flex-start',
              '&:hover': { color: e.palette.secondary.dark },
            },
            formImage: { width: '100%', height: 'auto' },
          };
        }),
        ka = function (e) {
          var t = Ia(),
            a = Object(d.b)(),
            c = Object(r.useState)(e.image || null),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = Object(r.useState)(e.thumbnail || null),
            u = Object(R.a)(l, 2),
            p = u[0],
            j = u[1],
            b = Object(r.useRef)(null),
            h = Object(r.useRef)(null),
            x = (function () {
              var e = Object(ha.a)(
                Oa.a.mark(function e(t, n) {
                  var r, c, i;
                  return Oa.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((r = t.target.files[0])) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return');
                          case 3:
                            return (
                              (c = new FormData()).append(
                                'blogImage',
                                r,
                                r.name
                              ),
                              a(He()),
                              (e.prev = 6),
                              (e.next = 9),
                              Ta.a.post('/api/v1/images/', c)
                            );
                          case 9:
                            (i = e.sent),
                              n(i.data.data),
                              _.setFieldValue(
                                ''.concat(t.target.name, 'Id'),
                                i.data.data.id
                              ),
                              a(Je()),
                              (e.next = 19);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(6)),
                              a(Je()),
                              a(
                                qe(
                                  'Gre\u0161ka pri otpremanju slike na server.'
                                )
                              );
                          case 19:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 15]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            v = (function () {
              var e = Object(ha.a)(
                Oa.a.mark(function e(t) {
                  var n;
                  return Oa.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.target.attributes.deleteelid.value),
                              a(He()),
                              (e.prev = 2),
                              (e.next = 5),
                              Ta.a.delete('/api/v1/images/'.concat(n))
                            );
                          case 5:
                            a(Je()),
                              (null === o || void 0 === o ? void 0 : o.id) ===
                                n &&
                                (s(null),
                                _.setFieldValue('imageId', ''),
                                (b.current.type = 'text'),
                                (b.current.type = 'file')),
                              (null === p || void 0 === p ? void 0 : p.id) ===
                                n &&
                                (_.setFieldValue('thumbnailId', ''),
                                j(null),
                                (h.current.type = 'text'),
                                (h.current.type = 'file')),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              a(Je()),
                              a(
                                qe(
                                  'Do\u0161lo je do gre\u0161ke pri brisanju slike.'
                                )
                              );
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            A = ye.b().shape({
              title: ye.d().required('Polje Obavezno!'),
              blog: ye.d().required('Sadr\u017eaj bloga je obavezan..'),
              imageId: ye.d().required('Glavna slika je obavezna.'),
              imageAlt: ye.d().required('Alt naziv je obavezan.'),
              thumbnailId: ye.d().required('Thumbnail slika je obavezna.'),
              thumbnailAlt: ye.d().required('Alt naziv je obavezan.'),
            }),
            _ = Object(m.a)({
              initialValues: {
                title: e.title || '',
                blog: e.blog || '',
                imageId: e.imageId || '',
                imageAlt: e.imageAlt || '',
                thumbnailId: e.thumbnailId || '',
                thumbnailAlt: e.thumbnailAlt || '',
                synopsis: e.synopsis || '',
              },
              onSubmit:
                e.onSubmit ||
                function (e) {
                  var t, n, r, c, i, o, s;
                  a(
                    ((t = e.imageId),
                    (n = e.imageAlt),
                    (r = e.thumbnailId),
                    (c = e.thumbnailAlt),
                    (i = e.title),
                    (o = e.blog),
                    (s = e.synopsis),
                    {
                      type: O.CREATE_BLOG_SAGA,
                      payload: {
                        imageId: t,
                        imageAlt: n,
                        thumbnailId: r,
                        thumbnailAlt: c,
                        title: i,
                        content: o,
                        synopsis: s || void 0,
                      },
                    })
                  );
                },
              validationSchema: A,
            });
          return Object(n.jsxs)('div', {
            className: t.container,
            children: [
              Object(n.jsxs)('form', {
                className: ''.concat(t.item, ' ').concat(t.form),
                children: [
                  Object(n.jsx)(f.a, {
                    variant: 'h4',
                    component: 'h2',
                    style: { marginBottom: 15 },
                    children: 'Blog Editor',
                  }),
                  Object(n.jsx)('div', { className: t.divider }),
                  Object(n.jsx)('input', {
                    type: 'file',
                    id: 'image',
                    name: 'image',
                    style: { display: 'none' },
                    onChange: function (e) {
                      return x(e, s);
                    },
                    disabled: !!o,
                    ref: b,
                  }),
                  Object(n.jsx)(Se.a, {
                    htmlFor: 'image',
                    className: t.uploadButton,
                    children: 'Upload Glavne Slike',
                  }),
                  o &&
                    Object(n.jsxs)(n.Fragment, {
                      children: [
                        Object(n.jsx)('img', {
                          src: o.path,
                          className: t.formImage,
                          alt: _.values.imageAlt,
                        }),
                        Object(n.jsx)(f.a, {
                          variant: 'body2',
                          color: 'secondary',
                          deleteelid: o.id,
                          onClick: v,
                          className: t.deleteImageButton,
                          children: 'x obri\u0161i sliku',
                        }),
                      ],
                    }),
                  Object(n.jsx)(E.a, {
                    name: 'imageAlt',
                    label: 'Alternativni tekst za glavnu sliku.',
                    variant: 'standard',
                    onChange: _.handleChange,
                    value: _.values.imageAlt,
                    className: t.textField,
                    error: !!_.errors.imageAlt,
                    helperText: _.errors.imageAlt,
                  }),
                  Object(n.jsx)('input', {
                    type: 'file',
                    id: 'thumbnail',
                    name: 'thumbnail',
                    style: { display: 'none' },
                    onChange: function (e) {
                      return x(e, j);
                    },
                    disabled: !!p,
                    ref: h,
                  }),
                  Object(n.jsx)(Se.a, {
                    htmlFor: 'thumbnail',
                    className: t.uploadButton,
                    children: 'Upload Thumbnail-a 300x200',
                  }),
                  p &&
                    Object(n.jsxs)(n.Fragment, {
                      children: [
                        Object(n.jsx)('img', {
                          src: p.path,
                          className: t.formImage,
                          alt: _.values.thumbnailAlt,
                        }),
                        Object(n.jsx)(f.a, {
                          variant: 'body2',
                          color: 'secondary',
                          className: t.deleteImageButton,
                          deleteelid: p.id,
                          onClick: v,
                          children: 'x obri\u0161i sliku',
                        }),
                      ],
                    }),
                  Object(n.jsx)(E.a, {
                    name: 'thumbnailAlt',
                    label: 'Alternativni tekst za thumbnail.',
                    variant: 'standard',
                    onChange: _.handleChange,
                    value: _.values.thumbnailAlt,
                    className: t.textField,
                    style: { marginBottom: 35 },
                    error: !!_.errors.thumbnailAlt,
                    helperText: _.errors.thumbnailAlt,
                  }),
                  Object(n.jsx)(E.a, {
                    name: 'title',
                    label: 'Naslov',
                    variant: 'outlined',
                    onChange: _.handleChange,
                    value: _.values.title,
                    className: t.textField,
                    error: !!_.errors.title,
                    helperText: _.errors.title,
                  }),
                  Object(n.jsx)(E.a, {
                    name: 'synopsis',
                    label: 'Sinopsis (nije obavezno)',
                    variant: 'outlined',
                    onChange: _.handleChange,
                    value: _.values.synopsis,
                    className: t.textField,
                    multiline: !0,
                    rows: 2,
                  }),
                  Object(n.jsx)(Na, {
                    value: _.values.blog,
                    onChange: function (e, t) {
                      var a = t.getData();
                      _.setFieldValue('blog', a);
                    },
                  }),
                  Object(n.jsx)(g.a, {
                    variant: 'contained',
                    color: 'primary',
                    style: { alignSelf: 'flex-start', marginTop: 20 },
                    size: 'large',
                    onClick: _.submitForm,
                    disabled: !_.dirty || !_.isValid,
                    children: e.buttonText || 'Napravi Blog',
                  }),
                ],
              }),
              Object(n.jsxs)('div', {
                className: ''.concat(t.item, ' ').concat(t.blog),
                children: [
                  Object(n.jsx)(f.a, {
                    variant: 'h4',
                    component: 'h2',
                    style: { marginBottom: 15 },
                    children: 'Preview',
                  }),
                  Object(n.jsx)('div', { className: t.divider }),
                  Object(n.jsxs)('div', {
                    className: 'blog',
                    style: {
                      borderLeft: '1px solid #ccc',
                      borderRight: '1px solid #ccc',
                    },
                    children: [
                      Object(n.jsx)('header', {
                        style: o
                          ? { background: 'url('.concat(o.path, ')') }
                          : {},
                        children: Object(n.jsx)('h1', {
                          children: _.values.title,
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(Oe.a)(_.values.blog),
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsx)(y, {}),
              Object(n.jsx)($e, {}),
              Object(n.jsx)(Qe, {}),
            ],
          });
        },
        Ga = function () {
          return Object(n.jsx)('div', { children: Object(n.jsx)(ka, {}) });
        },
        Da = function () {
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)(x.a, {
                children: Object(n.jsx)(Pt, {
                  breadcrums: [
                    { name: 'Blog', path: '/blog' },
                    { name: 'Blog Kreator', path: '/blog/create' },
                  ],
                  children: 'Novi Blog',
                }),
              }),
              Object(n.jsx)(Ga, {}),
            ],
          });
        },
        wa = a(772),
        La = a(361),
        Pa = a.n(La),
        Ua = Object(h.a)(function (e) {
          return {
            cardContainer: { marginTop: 20 },
            searchContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 50,
            },
            paginationContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              margin: '30px 0',
            },
            card: { padding: '30px 20px', height: '100%' },
            cardHeading: { color: e.palette.text.primary, fontWeight: 600 },
            registration: { fontWeight: 300, color: e.palette.primary.dark },
            attentionText: { color: e.palette.primary.dark },
            svgIcon: {
              fontSize: 30,
              padding: '0 0',
              margin: '0 0 -6px 0',
              boxSizing: 'content-box',
              color: e.palette.primary.dark,
            },
          };
        }),
        Ma = function () {
          var e = Ua(),
            t = Object(d.b)(),
            a = Object(j.f)(),
            c = Object(d.c)(function (e) {
              return e.cars;
            }),
            i = Object(r.useState)(''),
            o = Object(R.a)(i, 2),
            s = o[0],
            l = o[1],
            u = Object(r.useState)(1),
            p = Object(R.a)(u, 2),
            b = p[0],
            h = p[1],
            x = Object(r.useState)(12),
            v = Object(R.a)(x, 2),
            A = v[0],
            y = v[1];
          Object(r.useEffect)(
            function () {
              t(
                (function (e, t, a) {
                  return {
                    type: O.GET_CARS_SAGA,
                    payload: { limit: t, page: e, search: a },
                  };
                })(b, A, s)
              );
            },
            [t, b, A, s]
          );
          var _ = Object(m.a)({
              initialValues: { search: '' },
              onSubmit: function (e) {
                l(e.search), h(1);
              },
            }),
            C = c.cars.map(function (t) {
              return Object(n.jsx)(
                dt.a,
                {
                  item: !0,
                  lg: 3,
                  sm: 6,
                  xs: 12,
                  children: Object(n.jsx)(pt.a, {
                    children: Object(n.jsxs)(na.a, {
                      className: e.card,
                      onClick: function () {
                        return a.push('/automobili/'.concat(t.id));
                      },
                      children: [
                        Object(n.jsxs)(f.a, {
                          variant: 'h5',
                          component: 'h4',
                          className: e.cardHeading,
                          children: [
                            Object(n.jsx)(Pa.a, { className: e.svgIcon }),
                            t.carBrand,
                            ' ',
                            t.carModel,
                            ' ',
                          ],
                        }),
                        Object(n.jsxs)(f.a, {
                          children: [
                            'Godina proizvodnje:',
                            ' ',
                            Object(n.jsx)('span', {
                              className: e.attentionText,
                              children: ut()(t.productionYear).format('YYYY'),
                            }),
                          ],
                        }),
                        Object(n.jsxs)(f.a, {
                          variant: 'body1',
                          children: [
                            'Registracija:',
                            Object(n.jsxs)('span', {
                              className: e.registration,
                              children: ['  ', t.registration.toUpperCase()],
                            }),
                          ],
                        }),
                        Object(n.jsxs)(f.a, {
                          children: [
                            'Motor: ',
                            Object(n.jsx)('span', {
                              className: e.attentionText,
                              children: t.engine,
                            }),
                          ],
                        }),
                        Object(n.jsxs)(f.a, {
                          children: [
                            'Kilometra\u017ea:',
                            ' ',
                            Object(n.jsx)('span', {
                              className: e.attentionText,
                              children: t.milage,
                            }),
                          ],
                        }),
                        Object(n.jsxs)(f.a, {
                          children: [
                            'Vlasnik:',
                            ' ',
                            Object(n.jsx)('span', {
                              className: e.attentionText,
                              children: t.user
                                ? ''
                                    .concat(t.user.firstName, ' ')
                                    .concat(t.user.lastName)
                                : '-',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                t.id
              );
            });
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsxs)('div', {
                className: e.searchContainer,
                children: [
                  Object(n.jsxs)('form', {
                    className: e.searchForm,
                    onSubmit: _.handleSubmit,
                    children: [
                      Object(n.jsx)(E.a, {
                        onChange: _.handleChange,
                        value: _.values.search,
                        style: { marginRight: 5 },
                        name: 'search',
                        placeholder: 'proizv. / model / reg.',
                        onKeyPress: function (e) {
                          'Enter' === e.key && _.submitForm();
                        },
                        InputProps: {
                          startAdornment: Object(n.jsx)(_e.a, {
                            position: 'start',
                            children: Object(n.jsx)(wa.a, {}),
                          }),
                        },
                      }),
                      Object(n.jsx)(g.a, {
                        variant: 'outlined',
                        size: 'small',
                        color: 'primary',
                        onClick: _.submitForm,
                        children: 'Pretra\u017ei',
                      }),
                    ],
                  }),
                  Object(n.jsx)(E.a, {
                    value: A,
                    onChange: function (e) {
                      y(e.target.value);
                    },
                    select: !0,
                    children: [12, 24, 36, 48, 120].map(function (e) {
                      return Object(n.jsx)(Re.a, { value: e, children: e }, e);
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(dt.a, {
                className: e.cardContainer,
                container: !0,
                spacing: 3,
                children: C,
              }),
              Object(n.jsx)('div', {
                className: e.paginationContainer,
                children: Object(n.jsx)(aa.a, {
                  style: { marginBottom: 20 },
                  color: 'primary',
                  count: Math.ceil(c.count / A),
                  onChange: function (e, t) {
                    h(t);
                  },
                  page: b,
                }),
              }),
            ],
          });
        },
        Ba = Object(h.a)({
          textInput: {
            width: '100%',
            maxWidth: 400,
            marginBottom: 3,
            '&:not(:nth-last-child(3))': { marginBottom: 10 },
          },
          form: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: 12,
          },
        }),
        za = function (e) {
          var t = Ba(),
            a = Object(m.a)({
              initialValues: {
                carBrand: '',
                carModel: '',
                registration: '',
                engine: '',
                milage: 1e5,
                productionYear: new Date(),
              },
              onSubmit: e.handleSubmit,
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            onSubmit: a.handleSubmit,
            children: [
              Object(n.jsx)(E.a, {
                className: t.textInput,
                name: 'carBrand',
                value: a.values.carBrand,
                onChange: a.handleChange,
                label: 'Proizvodjac Automobila',
                variant: 'outlined',
              }),
              Object(n.jsx)(E.a, {
                className: t.textInput,
                name: 'carModel',
                value: a.values.carModel,
                onChange: a.handleChange,
                label: 'Model Automobila',
                variant: 'outlined',
              }),
              Object(n.jsx)(E.a, {
                className: t.textInput,
                name: 'registration',
                value: a.values.registration,
                onChange: a.handleChange,
                label: 'Registracija',
                variant: 'outlined',
              }),
              Object(n.jsx)(E.a, {
                className: t.textInput,
                name: 'engine',
                value: a.values.engine,
                onChange: a.handleChange,
                label: 'Motor',
                variant: 'outlined',
              }),
              Object(n.jsx)(E.a, {
                className: t.textInput,
                name: 'milage',
                value: a.values.milage,
                type: 'number',
                onChange: a.handleChange,
                label: 'Kilometraza',
                variant: 'outlined',
                inputProps: { step: 1e3 },
              }),
              Object(n.jsxs)(ot.a, {
                utils: it.a,
                children: [
                  Object(n.jsx)(st.a, {
                    views: ['year'],
                    format: 'yyyy',
                    label: 'Godina proizvodnje',
                    name: 'productionYear',
                    value: a.values.productionYear,
                    onChange: function (e) {
                      a.setFieldValue('productionYear', new Date(e));
                    },
                    margin: 'dense',
                    variant: 'dialog',
                    animateYearScrolling: !0,
                  }),
                  Object(n.jsx)(g.a, {
                    style: { marginTop: 5 },
                    color: 'primary',
                    variant: 'contained',
                    onClick: a.submitForm,
                    size: e.btnSize ? e.btnSize : 'small',
                    children: e.buttonText,
                  }),
                ],
              }),
            ],
          });
        },
        Ya = Object(h.a)(function (e) {
          return {
            modal: {
              padding: '40px 60px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#fff',
              outline: 'none',
              width: 400,
              '&:fokus': { outline: 'none' },
            },
          };
        }),
        Wa = function (e) {
          var t = Ya(),
            a = Object(d.b)();
          return Object(n.jsx)(v.a, {
            open: e.open,
            onClose: e.close,
            children: Object(n.jsxs)('div', {
              className: t.modal,
              children: [
                Object(n.jsx)(f.a, {
                  variant: 'h5',
                  component: 'h3',
                  children: 'Registruj Novi Automobil',
                }),
                Object(n.jsx)(za, {
                  handleSubmit: function (e) {
                    var t, n, r, c, i, o;
                    a(
                      ((t = e.carBrand),
                      (n = e.carModel),
                      (r = e.registration),
                      (c = e.engine),
                      (i = e.milage),
                      (o = e.productionYear),
                      {
                        type: O.CREATE_CAR_SAGA,
                        payload: {
                          carBrand: t,
                          carModel: n,
                          registration: r,
                          engine: c,
                          milage: i,
                          productionYear: o,
                        },
                      })
                    );
                  },
                  buttonText: 'Registruj Novi Automobil',
                  btnSize: 'large',
                }),
              ],
            }),
          });
        },
        Fa = Object(h.a)(function (e) {
          return { carCards: {} };
        }),
        Ka = function () {
          var e = Fa(),
            t = Object(r.useState)(!1),
            a = Object(R.a)(t, 2),
            c = a[0],
            i = a[1],
            o = function () {
              i(!c);
            };
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)(Wa, { open: c, close: o }),
              Object(n.jsx)(g.a, {
                onClick: o,
                variant: 'outlined',
                color: 'default',
                startIcon: Object(n.jsx)(ge.a, {}),
                children: 'Registruj automobil',
              }),
              Object(n.jsx)(Ma, { className: e.carCards }),
              Object(n.jsx)(y, {}),
              Object(n.jsx)($e, {}),
              Object(n.jsx)(Qe, {}),
            ],
          });
        },
        Va = Object(h.a)(function (e) {
          return { container: { padding: '20px 0', width: '90%' } };
        }),
        Ha = function () {
          var e = Va();
          return Object(n.jsxs)(x.a, {
            className: e.container,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h2',
                component: 'h1',
                children: 'Automobili',
              }),
              Object(n.jsx)(Ka, {}),
            ],
          });
        },
        Ja = a(65),
        Xa = Object(h.a)(function (e) {
          return {
            chartCard: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
            title: { marginBottom: -15, marginLeft: 50, fontSize: 14 },
          };
        }),
        qa = function (e) {
          var t = Xa();
          return Object(n.jsxs)('div', {
            className: t.chartCard,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'overline',
                className: t.title,
                children: e.chartName || null,
              }),
              Object(n.jsxs)(Ja.b, {
                width: e.chartWidth,
                height: e.chartHeight,
                data: e.data,
                style: {
                  borderRadius: '10px',
                  paddingTop: '20px',
                  paddingRight: '20px',
                  textAlign: 'center',
                  fontFamily: 'Roboto',
                  width: '100%',
                  height: '100%',
                },
                children: [
                  Object(n.jsx)(Ja.e, { opacity: 1, strokeDasharray: '2 2' }),
                  Object(n.jsx)(Ja.a, {
                    type: 'monotone',
                    dataKey: e.YAxisKey,
                    stroke: 'rgba(0,0,0,0)',
                    fill: e.areaColor,
                  }),
                  Object(n.jsx)(Ja.g, {
                    fontSize: 14,
                    dataKey: e.XAxisKey,
                    stroke: '#0e0e0e',
                  }),
                  Object(n.jsx)(Ja.h, {
                    fontSize: 14,
                    dataKey: e.YAxisKey,
                    stroke: '#0e0e0e',
                  }),
                  Object(n.jsx)(Ja.f, {}),
                ],
              }),
            ],
          });
        },
        Za = Object(h.a)({
          chartCard: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          title: { marginBottom: -15, marginLeft: 50, fontSize: 14 },
        }),
        $a = function (e) {
          var t = Za();
          return Object(n.jsxs)('div', {
            className: t.chartCard,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'overline',
                className: t.title,
                children: e.children,
              }),
              Object(n.jsxs)(Ja.d, {
                width: e.chartWidth,
                height: e.chartHeight,
                data: e.data,
                style: {
                  width: '100%',
                  height: '100%',
                  paddingTop: 30,
                  borderRadius: '10px',
                  fontFamily: 'Roboto',
                },
                children: [
                  Object(n.jsx)(Ja.g, {
                    fontSize: 14,
                    dataKey: e.XAxisKey,
                    stroke: '#0e0e0e',
                  }),
                  Object(n.jsx)(Ja.h, {
                    fontSize: 14,
                    datakey: e.YAxisKey,
                    stroke: '#0e0e0e',
                  }),
                  Object(n.jsx)(Ja.f, {}),
                  Object(n.jsx)(Ja.c, { dataKey: e.bar1Key, fill: e.bar1Fill }),
                  Object(n.jsx)(Ja.c, { dataKey: e.bar2Key, fill: e.bar2Fill }),
                  Object(n.jsx)(Ja.e, { strokeDasharray: '3 3' }),
                ],
              }),
            ],
          });
        },
        Qa = Object(h.a)(function (e) {
          return {
            chartCard: {
              backgroundColor: '#FFF',
              padding: '10px 30px 10px 0',
              textAlign: 'center',
              borderRadius: 8,
              margin: 8,
              boxShadow: '6px 4px 10px rgba(0,0,0,0.2)',
            },
            span: {
              content: '',
              width: 9,
              height: 9,
              backgroundColor: '#ff0000',
              borderRadius: '100%',
              marginRight: 5,
              marginLeft: 5,
              display: 'inline-block',
            },
            chartDateContainer: { marginLeft: 10 },
            chartDatePicker: { marginRight: 10 },
            chartReport: {
              textAlign: 'start',
              marginLeft: 60,
              marginBottom: 10,
            },
            chartReportNegative: { color: e.palette.secondary.main },
            chartReportPositive: { color: e.palette.success.main },
          };
        }),
        en = function (e) {
          var t = Object(r.useRef)(null),
            a = Object(r.useState)(500),
            c = Object(R.a)(a, 2),
            i = c[0],
            o = c[1],
            s = Qa(),
            l = Object(d.b)(),
            u = Object(d.c)(function (e) {
              return e.chartData;
            }),
            p = Object(r.useState)(
              ut()(new Date()).subtract(1, 'month').format('YYYY/MM/DD')
            ),
            j = Object(R.a)(p, 2),
            b = j[0],
            m = j[1],
            h = Object(r.useState)(ut()(new Date()).format('YYYY/MM/DD')),
            x = Object(R.a)(h, 2),
            E = x[0],
            g = x[1],
            v = function (e) {
              var t = e.expenses.reduce(function (e, t) {
                return e + t.expense;
              }, 0);
              return (
                e.profit.reduce(function (e, t) {
                  return e + t.profit;
                }, 0) - t
              );
            };
          return (
            Object(r.useEffect)(
              function () {
                l(
                  (function (e, t) {
                    var a = e || null,
                      n = t || null;
                    return {
                      type: O.GET_CHART_DATA_SAGA,
                      payload: { queryFromDate: a, queryToDate: n },
                    };
                  })(b, E)
                );
              },
              [l, b, E]
            ),
            Object(r.useEffect)(
              function () {
                setTimeout(function () {
                  l({ type: O.CHART_DATA_CLEAR_ERROR });
                }, 8e3);
              },
              [l, u.error]
            ),
            Object(r.useEffect)(function () {
              var e = function () {
                var e;
                (null === t ||
                void 0 === t ||
                null === (e = t.current) ||
                void 0 === e
                  ? void 0
                  : e.offsetWidth) && o(t.current.offsetWidth);
              };
              return (
                e(),
                window.addEventListener('resize', e),
                function () {
                  window.removeEventListener('resize', e);
                }
              );
            }, []),
            Object(n.jsxs)('div', {
              children: [
                Object(n.jsxs)('div', {
                  className: s.chartDateContainer,
                  children: [
                    Object(n.jsx)(ot.a, {
                      utils: it.a,
                      children: Object(n.jsx)(st.b, {
                        className: s.chartDatePicker,
                        disableToolbar: !0,
                        variant: 'inline',
                        format: 'dd/MM/yyyy',
                        margin: 'normal',
                        label: 'Datum od',
                        value: b,
                        onChange: function (e) {
                          m(ut()(e).format('YYYY/MM/DD'));
                        },
                        KeyboardButtonProps: { 'aria-label': 'change date' },
                      }),
                    }),
                    Object(n.jsx)(ot.a, {
                      utils: it.a,
                      children: Object(n.jsx)(st.b, {
                        className: s.chartDatePicker,
                        disableToolbar: !0,
                        variant: 'inline',
                        format: 'dd/MM/yyyy',
                        margin: 'normal',
                        label: 'Datum do',
                        value: E,
                        onChange: function (e) {
                          g(ut()(e).format('YYYY/MM/DD'));
                        },
                        KeyboardButtonProps: { 'aria-label': 'change date' },
                      }),
                    }),
                  ],
                }),
                Object(n.jsxs)(dt.a, {
                  container: !0,
                  justify: 'space-between',
                  children: [
                    Object(n.jsx)(dt.a, {
                      ref: t,
                      item: !0,
                      md: 6,
                      xs: 12,
                      children: Object(n.jsx)('div', {
                        className: s.chartCard,
                        children: Object(n.jsx)(qa, {
                          chartHeight: 250,
                          chartWidth: i - 50,
                          areaColor: '#25a522',
                          backgroundColor: '#f5fef5',
                          data: u.profit,
                          XAxisKey: 'date',
                          YAxisKey: 'profit',
                          chartName: 'Prihodi:',
                        }),
                      }),
                    }),
                    Object(n.jsx)(dt.a, {
                      ref: t,
                      item: !0,
                      md: 6,
                      xs: 12,
                      children: Object(n.jsx)('div', {
                        className: s.chartCard,
                        children: Object(n.jsx)(qa, {
                          chartHeight: 250,
                          chartWidth: i - 50,
                          areaColor: '#ee7e6e',
                          backgroundColor: '#fef5f5',
                          data: u.expenses,
                          XAxisKey: 'date',
                          YAxisKey: 'expense',
                          chartName: 'Tro\u0161kovi:',
                        }),
                      }),
                    }),
                    Object(n.jsx)(dt.a, {
                      item: !0,
                      xs: 12,
                      children: Object(n.jsxs)('div', {
                        className: s.chartCard,
                        children: [
                          Object(n.jsxs)($a, {
                            title: 'Prihodi / Tro\u0161kovi',
                            data: u.profitAndExpenses,
                            chartWidth: e.containerWidth - 50,
                            chartHeight: 200,
                            XAxisKey: 'date',
                            YAxisKey: 'profit',
                            bar1Key: 'profit',
                            bar2Key: 'expense',
                            bar1Fill: '#25a522',
                            bar2Fill: '#ee736e',
                            children: [
                              Object(n.jsx)('div', {
                                className: s.span,
                                style: { backgroundColor: '#25a522' },
                              }),
                              'Prihodi /',
                              ' ',
                              Object(n.jsx)('div', {
                                className: s.span,
                                style: { backgroundColor: '#ee736e' },
                              }),
                              'Tro\u0161kovi',
                            ],
                          }),
                          Object(n.jsx)('div', {
                            children: Object(n.jsxs)(f.a, {
                              variant: 'h6',
                              component: 'p',
                              className:
                                v(u) > 0
                                  ? ''
                                      .concat(s.chartReport, ' ')
                                      .concat(s.chartReportPositive)
                                  : ''
                                      .concat(s.chartReport, ' ')
                                      .concat(s.chartReportNegative),
                              children: ['Profit: ', v(u), 'KM'],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        tn = a(775),
        an = a(776),
        nn = a(774),
        rn = a(773),
        cn = Object(h.a)(function () {
          return { input: { width: '100%', maxWidth: 400 } };
        }),
        on = function (e) {
          var t = e.description,
            a = e.amount,
            r = e.date,
            c = Object(Ae.a)(e, ['description', 'amount', 'date']),
            i = cn(),
            o = Object(m.a)({
              initialValues: {
                description: t || '',
                amount: a || '',
                date: r || ut()(new Date()).format('YYYY-MM-DD'),
              },
              onSubmit: c.onSubmit,
            });
          return Object(n.jsxs)('form', {
            children: [
              Object(n.jsx)(E.a, {
                variant: 'standard',
                label: 'Opis Tro\u0161ka',
                name: 'description',
                onChange: o.handleChange,
                className: i.input,
                value: o.values.description,
                required: !0,
              }),
              Object(n.jsx)(E.a, {
                variant: 'standard',
                type: 'number',
                label: 'iznos',
                name: 'amount',
                onChange: o.handleChange,
                className: i.input,
                value: o.values.amount,
                required: !0,
              }),
              Object(n.jsxs)('div', {
                style: {
                  display: 'flex',
                  alignItems: 'flex-end',
                  marginTop: 15,
                },
                children: [
                  Object(n.jsx)(E.a, {
                    id: 'date',
                    label: 'datum',
                    type: 'date',
                    defaultValue: o.values.date,
                    className: i.textField,
                    onChange: function (e) {
                      o.setFieldValue(
                        'date',
                        ut()(e.target.value).format('YYYY-MM-DD')
                      );
                    },
                    InputLabelProps: { shrink: !0 },
                    style: { marginRight: 20 },
                    required: !0,
                  }),
                  Object(n.jsx)(g.a, {
                    variant: 'contained',
                    className: i.btn,
                    style: {
                      backgroundColor: c.update ? '#ff9800' : '#1e7be2',
                      color: '#fff',
                    },
                    size: 'large',
                    startIcon: c.update
                      ? Object(n.jsx)(rn.a, {})
                      : Object(n.jsx)(nn.a, {}),
                    onClick: o.handleSubmit,
                    children: c.update
                      ? 'Izmeni Tro\u0161ak'
                      : 'Dodaj Tro\u0161ak',
                  }),
                ],
              }),
              c.update &&
                Object(n.jsx)(g.a, {
                  variant: 'contained',
                  color: 'secondary',
                  size: 'large',
                  startIcon: Object(n.jsx)(ve.a, {}),
                  onClick: c.handleDelete,
                  style: { marginTop: 20, width: '100%' },
                  children: 'OBRI\u0160I TRO\u0160AK',
                }),
            ],
          });
        },
        sn = Object(h.a)(function (e) {
          return {
            datePickerContainer: {
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              margin: '0 8px 12px 8px',
            },
            table: { margin: 8 },
            modal: {
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#fff',
              padding: '30px 50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              border: 'none',
              '&:active': { border: 'none' },
            },
            tableRow: {
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.05)',
                cursor: 'pointer',
              },
            },
            tableHead: { backgroundColor: '#000' },
          };
        }),
        ln = Object(Bt.a)(function (e) {
          return {
            head: {
              backgroundColor: e.palette.primary.dark,
              color: e.palette.common.white,
            },
            body: { fontSize: 14 },
          };
        })(Yt.a),
        un = Object(Bt.a)(function (e) {
          return {
            root: {
              '&:nth-of-type(odd)': { backgroundColor: e.palette.action.hover },
            },
          };
        })(zt.a),
        dn = function () {
          var e = sn(),
            t = Object(d.b)(),
            a = Object(d.c)(function (e) {
              return e.expenses;
            }),
            c = Object(r.useState)(ut()(new Date()).subtract(1, 'week')),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = Object(r.useState)(ut()(new Date())),
            u = Object(R.a)(l, 2),
            p = u[0],
            j = u[1],
            b = Object(r.useState)(!1),
            m = Object(R.a)(b, 2),
            h = m[0],
            x = m[1],
            E = Object(r.useState)({
              id: '',
              description: '',
              date: '',
              amount: null,
              active: !1,
            }),
            v = Object(R.a)(E, 2),
            A = v[0],
            y = v[1];
          Object(r.useEffect)(
            function () {
              var e, a;
              t(
                ((e = o),
                (a = p),
                {
                  type: O.GET_EXPENSES_SAGA,
                  payload: { dateFrom: e, dateTo: a },
                })
              );
            },
            [t, o, p]
          );
          var _ = function () {
              x(!h);
            },
            C = a.map(function (t) {
              return Object(n.jsxs)(
                un,
                {
                  className: e.tableRow,
                  onClick: function () {
                    return (
                      (e = t.description),
                      (a = ut()(t.createdAt).format('YYYY-MM-DD')),
                      (n = t.amount),
                      (r = t.id),
                      void y({
                        description: e,
                        date: a,
                        amount: n,
                        id: r,
                        active: !0,
                      })
                    );
                    var e, a, n, r;
                  },
                  children: [
                    Object(n.jsx)(Yt.a, {
                      component: 'th',
                      scope: 'row',
                      children: t.description,
                    }),
                    Object(n.jsxs)(Yt.a, {
                      align: 'right',
                      children: [' ', t.amount, ' '],
                    }),
                    Object(n.jsx)(Yt.a, {
                      align: 'right',
                      children: ut()(t.createdAt).format('DD/MM/YYYY'),
                    }),
                  ],
                },
                t.id
              );
            });
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsxs)(Be, {
                open: h,
                onClose: _,
                children: [
                  Object(n.jsx)(f.a, {
                    variant: 'h4',
                    component: 'h3',
                    children: 'DODAJ TRO\u0160AK',
                  }),
                  Object(n.jsx)(on, {
                    onSubmit: function (e) {
                      var a, n, r;
                      t(
                        ((a = e.description),
                        (n = e.amount),
                        (r = e.date),
                        {
                          type: O.CREATE_EXPENSE_SAGA,
                          payload: { description: a, amount: n, date: r },
                        })
                      ),
                        x(!1),
                        j(ut()(new Date())),
                        s(ut()(ut()(new Date()).subtract(1, 'week')));
                    },
                  }),
                ],
              }),
              Object(n.jsx)(Be, {
                open: A.active,
                onClose: function () {
                  y({
                    id: '',
                    description: '',
                    date: '',
                    amount: null,
                    active: !1,
                  });
                },
                heading: 'Izmeni Tro\u0161ak',
                children: Object(n.jsx)(on, {
                  date: A.date,
                  description: A.description,
                  amount: A.amount,
                  onSubmit: function (e) {
                    var a, n, r, c;
                    t(
                      ((a = e.description),
                      (n = e.amount),
                      (r = e.date),
                      (c = A.id),
                      {
                        type: O.UPDATE_EXPENSE_SAGA,
                        payload: { description: a, amount: n, date: r, id: c },
                      })
                    ),
                      y({
                        id: '',
                        description: '',
                        date: '',
                        amount: null,
                        active: !1,
                      });
                  },
                  handleDelete: function () {
                    var e;
                    t(
                      ((e = A.id),
                      { type: O.DELETE_EXPENSE_SAGA, payload: { id: e } })
                    ),
                      y({
                        id: '',
                        description: '',
                        date: '',
                        amount: null,
                        active: !1,
                      });
                  },
                  update: !0,
                }),
              }),
              Object(n.jsxs)('div', {
                style: { display: 'flex', alignItems: 'flex-end' },
                children: [
                  Object(n.jsx)(f.a, {
                    style: { margin: '40px 15px 0 6px' },
                    variant: 'h5',
                    component: 'h2',
                    children: 'Tro\u0161kovi:',
                  }),
                  Object(n.jsx)(g.a, {
                    variant: 'contained',
                    color: 'secondary',
                    size: 'small',
                    startIcon: Object(n.jsx)(nn.a, {}),
                    onClick: _,
                    children: 'Dodaj Tro\u0161ak',
                  }),
                ],
              }),
              Object(n.jsxs)('div', {
                className: e.datePickerContainer,
                children: [
                  Object(n.jsx)(ot.a, {
                    utils: it.a,
                    children: Object(n.jsx)(st.b, {
                      disableToolbar: !0,
                      variant: 'inline',
                      format: 'dd/MM/yyyy',
                      margin: 'normal',
                      label: 'Datum od',
                      value: o,
                      onChange: function (e) {
                        s(e);
                      },
                      KeyboardButtonProps: { 'aria-label': 'change date' },
                    }),
                  }),
                  Object(n.jsx)(ot.a, {
                    utils: it.a,
                    children: Object(n.jsx)(st.b, {
                      disableToolbar: !0,
                      variant: 'inline',
                      format: 'dd/MM/yyyy',
                      margin: 'normal',
                      label: 'Datum do',
                      value: p,
                      onChange: function (e) {
                        j(e);
                      },
                      KeyboardButtonProps: { 'aria-label': 'change date' },
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(Wt.a, {
                className: e.table,
                component: Ft.a,
                children: Object(n.jsxs)(tn.a, {
                  children: [
                    Object(n.jsx)(Kt.a, {
                      children: Object(n.jsxs)(zt.a, {
                        children: [
                          Object(n.jsx)(ln, { children: 'OPIS' }),
                          Object(n.jsx)(ln, {
                            align: 'right',
                            children: 'IZNOS',
                          }),
                          Object(n.jsx)(ln, {
                            align: 'right',
                            children: 'DATUM',
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsx)(an.a, { children: C }),
                  ],
                }),
              }),
            ],
          });
        },
        pn = Object(h.a)(function (e) {
          return {
            datePickerContainer: {
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              margin: '0 8px 12px 8px',
            },
            table: { margin: 8 },
          };
        }),
        jn = Object(Bt.a)(function (e) {
          return {
            head: {
              backgroundColor: e.palette.primary.dark,
              color: e.palette.common.white,
            },
            body: { fontSize: 14 },
          };
        })(Yt.a),
        bn = Object(Bt.a)(function (e) {
          return {
            root: {
              '&:nth-of-type(odd)': { backgroundColor: e.palette.action.hover },
            },
          };
        })(zt.a),
        mn = function () {
          var e = pn(),
            t = Object(r.useState)(ut()(new Date()).subtract(1, 'week')),
            a = Object(R.a)(t, 2),
            c = a[0],
            i = a[1],
            o = Object(r.useState)(ut()(new Date())),
            s = Object(R.a)(o, 2),
            l = s[0],
            u = s[1],
            p = Object(d.b)(),
            j = Object(d.c)(function (e) {
              return e.jobConclusions;
            });
          Object(r.useEffect)(
            function () {
              p(
                (function (e, t) {
                  return {
                    type: O.GET_JOBCONCLUSIONS_SAGA,
                    payload: {
                      fromDate: ut()(e).format('YYYY-MM-DD'),
                      toDate: ut()(t).format('YYYY-MM-DD'),
                    },
                  };
                })(c, l)
              );
            },
            [p, c, l]
          );
          var b = j.map(function (e) {
            return Object(n.jsxs)(
              bn,
              {
                children: [
                  Object(n.jsx)(Yt.a, {
                    omponent: 'th',
                    scope: 'row',
                    children: e.workDone,
                  }),
                  Object(n.jsx)(Yt.a, { align: 'right', children: e.charged }),
                  Object(n.jsx)(Yt.a, {
                    align: 'right',
                    children: ut()(e.createdAt).format('DD/MM/YYYY'),
                  }),
                ],
              },
              e.id
            );
          });
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(f.a, {
                style: { margin: '50px 15px 0 6px' },
                variant: 'h5',
                component: 'h2',
                children: 'Prihodi:',
              }),
              Object(n.jsxs)('div', {
                className: e.datePickerContainer,
                children: [
                  Object(n.jsx)(ot.a, {
                    utils: it.a,
                    children: Object(n.jsx)(st.b, {
                      disableToolbar: !0,
                      variant: 'inline',
                      format: 'dd/MM/yyyy',
                      margin: 'normal',
                      label: 'Datum od',
                      value: c,
                      onChange: function (e) {
                        i(e);
                      },
                      KeyboardButtonProps: { 'aria-label': 'change date' },
                    }),
                  }),
                  Object(n.jsx)(ot.a, {
                    utils: it.a,
                    children: Object(n.jsx)(st.b, {
                      disableToolbar: !0,
                      variant: 'inline',
                      format: 'dd/MM/yyyy',
                      margin: 'normal',
                      label: 'Datum do',
                      value: l,
                      onChange: function (e) {
                        u(e);
                      },
                      KeyboardButtonProps: { 'aria-label': 'change date' },
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(Wt.a, {
                className: e.table,
                component: Ft.a,
                children: Object(n.jsxs)(tn.a, {
                  children: [
                    Object(n.jsx)(Kt.a, {
                      children: Object(n.jsxs)(zt.a, {
                        children: [
                          Object(n.jsx)(jn, { children: 'OPIS' }),
                          Object(n.jsx)(jn, {
                            align: 'right',
                            children: 'IZNOS',
                          }),
                          Object(n.jsx)(jn, {
                            align: 'right',
                            children: 'DATUM',
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsx)(an.a, { children: b }),
                  ],
                }),
              }),
            ],
          });
        },
        On = function () {
          var e = Object(r.useRef)(null),
            t = Object(r.useState)(500),
            a = Object(R.a)(t, 2),
            c = a[0],
            i = a[1];
          return (
            Object(r.useEffect)(function () {
              var t = function () {
                var t;
                (null === e ||
                void 0 === e ||
                null === (t = e.current) ||
                void 0 === t
                  ? void 0
                  : t.offsetWidth) && i(e.current.offsetWidth);
              };
              t(), window.addEventListener('resize', t);
            }, []),
            Object(n.jsxs)(x.a, {
              ref: e,
              children: [
                Object(n.jsx)(Pt, {
                  breadcrums: [{ name: 'Dashboard', path: '/' }],
                  children: 'Dashboard',
                }),
                Object(n.jsx)(en, { containerWidth: c - 40 }),
                Object(n.jsx)(dn, {}),
                Object(n.jsx)(mn, {}),
              ],
            })
          );
        },
        hn = function () {
          var e,
            t,
            a = Object(d.b)(),
            c = Object(j.h)().id,
            i = Object(d.c)(function (e) {
              return e.activeBlog;
            });
          Object(r.useEffect)(
            function () {
              a(me(c));
            },
            [a, c]
          );
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)(ka, {
              blog: (null === i || void 0 === i ? void 0 : i.content) || '',
              title: (null === i || void 0 === i ? void 0 : i.title) || '',
              image: (null === i || void 0 === i ? void 0 : i.image) || '',
              thumbnail:
                (null === i || void 0 === i ? void 0 : i.thumbnail) || '',
              imageAlt:
                (null === i || void 0 === i ? void 0 : i.imageAlt) || '',
              imageId:
                (null === i ||
                void 0 === i ||
                null === (e = i.image) ||
                void 0 === e
                  ? void 0
                  : e.id) || '',
              thumbnailAlt:
                (null === i || void 0 === i ? void 0 : i.thumbnailAlt) || '',
              thumbnailId:
                (null === i ||
                void 0 === i ||
                null === (t = i.thumbnail) ||
                void 0 === t
                  ? void 0
                  : t.id) || '',
              synopsis:
                (null === i || void 0 === i ? void 0 : i.synopsis) || '',
              buttonText: 'izmeni blog',
              onSubmit: function (e) {
                a(
                  (function (e, t, a, n, r, c, i, o) {
                    return {
                      type: O.EDIT_BLOG_SAGA,
                      payload: {
                        blogId: e,
                        imageId: t,
                        imageAlt: a,
                        thumbnailId: n,
                        thumbnailAlt: r,
                        title: c,
                        content: i,
                        synopsis: o || void 0,
                      },
                    };
                  })(
                    c,
                    e.imageId,
                    e.imageAlt,
                    e.thumbnailId,
                    e.thumbnailAlt,
                    e.title,
                    e.blog,
                    e.synopsis
                  )
                );
              },
            }),
          });
        },
        xn = function () {
          var e = Object(j.h)().id;
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)(x.a, {
                children: Object(n.jsx)(Pt, {
                  breadcrums: [
                    { name: 'Blog', path: '/blog' },
                    { name: 'Blog Kreator', path: '/blog/'.concat(e, '/edit') },
                  ],
                  children: 'Izmeni Blog',
                }),
              }),
              Object(n.jsx)(hn, {}),
            ],
          });
        },
        fn = a(777),
        En = a(371),
        gn = a.n(En),
        vn = Object(h.a)(function (e) {
          return {
            modalForm: {
              padding: '30px 60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#fff',
              outline: 'none',
              '&:focus': { outline: 'none' },
            },
            modal: {
              outline: 'none',
              border: 'none',
              '&:focus': { outline: 'none' },
            },
            textInput: { width: 400, marginBottom: 3 },
          };
        }),
        An = function (e) {
          var t = vn(),
            a = Object(r.useState)(!1),
            c = Object(R.a)(a, 2),
            i = c[0],
            o = c[1],
            s = Object(r.useState)(!1),
            l = Object(R.a)(s, 2),
            u = l[0],
            p = l[1],
            j = Object(d.b)(),
            b = function (e) {
              e.preventDefault();
            },
            h = Object(m.a)({
              initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '',
                passwordConfirm: '',
              },
              onSubmit: function (e) {
                var t, a, n, r, c, i;
                j(
                  ((t = e.firstName),
                  (a = e.lastName),
                  (n = e.phoneNumber),
                  (r = e.email),
                  (c = e.password),
                  (i = e.passwordConfirm),
                  t && a && n && r && c && i
                    ? {
                        type: O.CREATE_CLIENT_SAGA,
                        payload: {
                          firstName: t,
                          lastName: a,
                          phoneNumber: n,
                          email: r,
                          password: c,
                          passwordConfirm: i,
                        },
                      }
                    : { type: O.UI_ERROR, payload: 'sva polja su obavezna' })
                );
              },
            });
          return Object(n.jsx)(v.a, {
            open: e.open,
            onClose: e.close,
            className: t.modal,
            children: Object(n.jsxs)('form', {
              className: t.modalForm,
              onSubmit: h.handleSubmit,
              children: [
                Object(n.jsx)(f.a, {
                  variant: 'h4',
                  type: 'h4',
                  children: 'Registruj novog klijenta',
                }),
                Object(n.jsx)(E.a, {
                  className: t.textInput,
                  name: 'firstName',
                  value: h.values.firstName,
                  onChange: h.handleChange,
                  label: 'Ime',
                }),
                Object(n.jsx)(E.a, {
                  className: t.textInput,
                  name: 'lastName',
                  value: h.values.lastName,
                  onChange: h.handleChange,
                  label: 'Prezime',
                }),
                Object(n.jsx)(E.a, {
                  className: t.textInput,
                  name: 'phoneNumber',
                  value: h.values.phoneNumber,
                  onChange: h.handleChange,
                  label: 'Broj Telefona',
                }),
                Object(n.jsx)(E.a, {
                  className: t.textInput,
                  name: 'email',
                  value: h.values.email,
                  onChange: h.handleChange,
                  label: 'Email',
                }),
                Object(n.jsx)(E.a, {
                  className: t.textInput,
                  type: i ? 'text' : 'password',
                  name: 'password',
                  value: h.values.password,
                  onChange: h.handleChange,
                  label: '\u0160ifra za pristup E-knji\u017eici',
                  InputProps: {
                    endAdornment: Object(n.jsx)(_e.a, {
                      position: 'end',
                      children: Object(n.jsx)(P.a, {
                        'aria-label': 'toggle password visibility',
                        onClick: function () {
                          o(!i);
                        },
                        onMouseDown: b,
                        children: i
                          ? Object(n.jsx)(Te.a, {})
                          : Object(n.jsx)(Ie.a, {}),
                      }),
                    }),
                  },
                }),
                Object(n.jsx)(E.a, {
                  className: t.textInput,
                  type: u ? 'text' : 'password',
                  name: 'passwordConfirm',
                  value: h.values.passwordConfirm,
                  onChange: h.handleChange,
                  label: 'Ponovi \u0161ifru',
                  InputProps: {
                    endAdornment: Object(n.jsx)(_e.a, {
                      position: 'end',
                      children: Object(n.jsx)(P.a, {
                        'aria-label': 'toggle password confirm visibility',
                        onClick: function () {
                          p(!u);
                        },
                        onMouseDown: b,
                        children: u
                          ? Object(n.jsx)(Te.a, {})
                          : Object(n.jsx)(Ie.a, {}),
                      }),
                    }),
                  },
                }),
                Object(n.jsx)(g.a, {
                  size: 'large',
                  color: 'primary',
                  variant: 'contained',
                  onClick: h.submitForm,
                  style: { marginTop: 15 },
                  children: 'Potvrdi',
                }),
              ],
            }),
          });
        },
        yn = a(792),
        _n = function () {
          return { type: O.CAR_SUGGESTION_OPEN };
        },
        Cn = function () {
          return { type: O.CAR_SUGGESTION_CLOSE };
        },
        Sn = function () {
          return { type: O.CAR_SUGGESTION_LOADING };
        },
        Nn = function (e) {
          return { type: O.GET_CAR_SUGGESTIONS_SAGA, payload: e };
        },
        Rn = function () {
          var e;
          return function (t, a, n) {
            n && n(),
              (function (t, a) {
                clearTimeout(e), (e = setTimeout(t, a));
              })(t, a);
          };
        },
        Tn = Rn(),
        In = Object(h.a)(function (e) {
          return {
            modalForm: {
              padding: '40px 60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#fff',
              outline: 'none',
              '&:focus': { outline: 'none' },
            },
            modal: {
              outline: 'none',
              border: 'none',
              overflowY: 'scroll',
              '&:focus': { outline: 'none' },
            },
            textInput: { width: 400, marginBottom: 3 },
            hr: {
              height: 1,
              backgroundColor: 'rgba(0, 0, 0, .17)',
              alignSelf: 'center',
              width: '110%',
            },
          };
        }),
        kn = function (e) {
          var t = In(),
            a = Object(d.b)(),
            i = Object(d.c)(function (e) {
              return e.carSuggestions;
            }),
            o = Object(r.useRef)(),
            s = Object(m.a)({
              initialValues: { registration: '' },
              onSubmit: function (t) {
                var n, r;
                a(
                  ((n = t.registration),
                  (r = e.clientId),
                  {
                    type: O.SET_CLIENT_CAR_OWNERSHIP_SAGA,
                    payload: { carReg: n, clientId: r },
                  })
                );
              },
            });
          Object(r.useEffect)(
            function () {
              '' !== s.values.registration &&
                Tn(
                  function () {
                    return a(Nn(s.values.registration));
                  },
                  700,
                  function () {
                    return a(Sn());
                  }
                );
            },
            [a, s.values.registration]
          ),
            setTimeout(function () {
              var e;
              (null === o ||
              void 0 === o ||
              null === (e = o.current) ||
              void 0 === e
                ? void 0
                : e.offsetHeight) >= window.innerHeight &&
                ((o.current.style.height = '80vh'),
                (o.current.style.overflowY = 'scroll'));
            });
          return Object(n.jsx)(v.a, {
            open: e.open,
            onClose: e.close,
            className: t.modal,
            children: Object(n.jsxs)('div', {
              ref: o,
              className: t.modalForm,
              children: [
                Object(n.jsxs)('form', {
                  style: { marginBottom: 16 },
                  onSubmit: s.handleSubmit,
                  children: [
                    Object(n.jsx)(f.a, {
                      variant: 'h5',
                      tyle: 'h4',
                      style: { marginBottom: 10 },
                      children: 'Postoje\u0107i automobil preko registracije:',
                    }),
                    Object(n.jsx)(yn.a, {
                      open: i.open,
                      onOpen: function () {
                        a(_n());
                      },
                      onClose: function () {
                        a(Cn());
                      },
                      options: i.cars,
                      getOptionSelected: function (e, t) {
                        return e.registration === t.registration;
                      },
                      getOptionLabel: function (e) {
                        return ''.concat(e.registration);
                      },
                      loading: i.loading,
                      onInputChange: function (e, t, a) {
                        !(function (e) {
                          s.setFieldValue('registration', e);
                        })(t);
                      },
                      renderOption: function (e) {
                        return Object(n.jsxs)(c.a.Fragment, {
                          children: [
                            e.registration,
                            ' : ',
                            e.carBrand,
                            ' ',
                            e.carModel,
                            ' ',
                            e.productionYear,
                          ],
                        });
                      },
                      renderInput: function (e) {
                        return Object(n.jsx)(
                          E.a,
                          Object(S.a)(
                            Object(S.a)({}, e),
                            {},
                            {
                              value: s.values.registration,
                              onChange: s.handleChange,
                              className: t.textInput,
                              label: 'Registracija',
                              variant: 'outlined',
                              name: 'registration',
                              id: 'registration',
                              InputProps: Object(S.a)(
                                Object(S.a)({}, e.InputProps),
                                {},
                                {
                                  endAdornment: Object(n.jsxs)(c.a.Fragment, {
                                    children: [
                                      i.loading
                                        ? Object(n.jsx)(A.a, {
                                            color: 'inherit',
                                            size: 20,
                                          })
                                        : null,
                                      e.InputProps.endAdornment,
                                    ],
                                  }),
                                }
                              ),
                            }
                          )
                        );
                      },
                    }),
                    Object(n.jsx)(g.a, {
                      variant: 'contained',
                      color: 'primary',
                      size: 'medium',
                      style: { marginTop: 5 },
                      onClick: s.handleSubmit,
                      children: 'Potvrdi',
                    }),
                  ],
                }),
                Object(n.jsx)('div', { className: t.hr }),
                Object(n.jsx)(f.a, {
                  variant: 'h5',
                  type: 'h5',
                  style: { marginTop: 10 },
                  children: 'Novi Automobil:',
                }),
                Object(n.jsx)(za, {
                  buttonText: 'Potvrdi Registraciju novog automobila',
                  handleSubmit: function (t) {
                    var n, r, c, i, o, s, l;
                    a(
                      ((n = t.carBrand),
                      (r = t.carModel),
                      (c = t.registration),
                      (i = t.engine),
                      (o = t.milage),
                      (s = t.productionYear),
                      (l = e.clientId),
                      {
                        type: O.CREATE_CAR_AND_SET_OWNER_SAGA,
                        payload: {
                          carBrand: n,
                          carModel: r,
                          registration: c,
                          engine: i,
                          milage: o,
                          productionYear: s,
                          userId: l,
                        },
                      })
                    );
                  },
                }),
              ],
            }),
          });
        },
        Gn = Object(h.a)(function (e) {
          return {
            card: {
              display: 'flex',
              padding: '20px 30px',
              alignItems: 'center',
            },
            cardSide: { display: 'flex', flexDirection: 'column' },
            cardIcon: { height: '100%', fontSize: '70px' },
            phone: {
              color: e.palette.primary.light,
              textDecoration: 'none',
              transition: 'all .2s',
              fontSize: '.9rem',
              '&:hover': { color: e.palette.primary.dark },
            },
            cardEmail: {
              fontSize: '1rem',
              fontWeight: 300,
              color: e.palette.primary.light,
              textDecoration: 'none',
              transition: 'all .2s',
              margin: '-5px 0 0px 0',
              '&:hover': { color: e.palette.primary.dark },
            },
            searchForm: {},
            cardsContainer: { marginTop: 10 },
            list: { listStyle: 'none', marginTop: 3 },
            listItem: {
              textDecoration: 'none',
              transition: 'all .2s',
              color: e.palette.primary.light,
              '&:hover': { color: e.palette.primary.dark },
            },
            cardCar: {
              fontSize: 14,
              padding: '3px 7px',
              textDecoration: 'none',
              color: '#fff',
              backgroundColor: e.palette.warning.main,
              whiteSpace: 'nowrap',
              margin: 3,
              '&:first-child': { marginLeft: 0 },
            },
            paginationContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: 25,
            },
          };
        }),
        Dn = function () {
          var e = Gn(),
            t = Object(d.b)(),
            a = Object(d.c)(function (e) {
              return e.clients;
            }),
            c = Object(d.c)(function (e) {
              return e.UI;
            }),
            i = Object(r.useState)(1),
            o = Object(R.a)(i, 2),
            s = o[0],
            l = o[1],
            u = Object(r.useState)(12),
            j = Object(R.a)(u, 2),
            b = j[0],
            h = j[1],
            x = Object(r.useState)(''),
            v = Object(R.a)(x, 2),
            _ = v[0],
            C = v[1],
            S = Object(r.useState)(!1),
            N = Object(R.a)(S, 2),
            T = N[0],
            I = N[1],
            k = Object(r.useState)(!1),
            G = Object(R.a)(k, 2),
            D = G[0],
            w = G[1],
            L = Object(r.useState)({}),
            P = Object(R.a)(L, 2),
            U = P[0],
            M = P[1];
          Object(r.useEffect)(
            function () {
              t(
                (function (e, t, a) {
                  return (
                    e || (e = 1),
                    t || (t = 12),
                    {
                      type: O.GET_CLIENTS_SAGA,
                      payload: { page: e, limit: t, search: a },
                    }
                  );
                })(s, b, _)
              );
            },
            [t, s, b, _]
          ),
            Object(r.useEffect)(
              function () {
                c.successMessage &&
                  setTimeout(function () {
                    c.successMessage && t(Xe());
                  }, 8e3);
              },
              [t, c.successMessage]
            ),
            Object(r.useEffect)(
              function () {
                c.uiError &&
                  setTimeout(function () {
                    c.uiError && t(Ze());
                  }, 8e3);
              },
              [t, c.uiError]
            );
          var B = function () {
              I(!T);
            },
            z = function (e) {
              w(!D), M(e);
            },
            Y = Object(m.a)({
              initialValues: { search: '' },
              onSubmit: function (e) {
                C(e.search), l(1);
              },
            }),
            W = function () {
              t(Ze());
            },
            F = function () {
              t(Xe());
            },
            K = a.clients.map(function (t) {
              return Object(n.jsx)(
                dt.a,
                {
                  item: !0,
                  lg: 4,
                  sm: 6,
                  xs: 12,
                  children: Object(n.jsxs)(Ft.a, {
                    className: e.card,
                    style: { height: '100%' },
                    children: [
                      Object(n.jsx)(fn.a, { className: e.cardIcon }),
                      Object(n.jsxs)('div', {
                        className: e.cardSide,
                        children: [
                          Object(n.jsxs)(f.a, {
                            variant: 'h5',
                            component: 'h3',
                            children: [t.firstName, ' ', t.lastName],
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              'email:',
                              ' ',
                              Object(n.jsx)('a', {
                                className: e.cardEmail,
                                href: 'mailto:'.concat(t.email),
                                children: t.email,
                              }),
                            ],
                          }),
                          Object(n.jsxs)('p', {
                            children: [
                              'broj telefona:',
                              ' ',
                              Object(n.jsx)('a', {
                                className: e.phone,
                                href: 'tel:'.concat(t.phoneNumber),
                                children: t.phoneNumber,
                              }),
                            ],
                          }),
                          Object(n.jsx)('div', {
                            style: { display: 'flex', flexWrap: 'wrap' },
                            children: t.cars.map(function (t) {
                              return Object(n.jsxs)(
                                p.b,
                                {
                                  className: e.cardCar,
                                  variant: 'contained',
                                  color: 'primary',
                                  size: 'small',
                                  to: '/automobili/'.concat(t.id),
                                  children: [t.carBrand, ' ', t.carModel],
                                },
                                t.id
                              );
                            }),
                          }),
                          Object(n.jsx)(g.a, {
                            size: 'small',
                            variant: 'outlined',
                            color: 'inherit',
                            startIcon: Object(n.jsx)(ge.a, {}),
                            style: {
                              marginTop: 5,
                              width: 'fit-content',
                              color: '#2ecc71',
                            },
                            onClick: function () {
                              return z(t);
                            },
                            children: 'Dodaj Automobil',
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                t.id
              );
            });
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(An, { open: T, close: B }),
              Object(n.jsx)(kn, { open: D, close: z, clientId: U.id }),
              Object(n.jsx)(y, { open: c.loading }),
              Object(n.jsx)(g.a, {
                variant: 'outlined',
                color: 'default',
                startIcon: Object(n.jsx)(ge.a, {}),
                onClick: B,
                children: 'Registruj Klijenta',
              }),
              Object(n.jsxs)('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 50,
                  width: '100%',
                },
                children: [
                  Object(n.jsxs)('form', {
                    className: e.searchForm,
                    onSubmit: Y.handleSubmit,
                    children: [
                      Object(n.jsx)(E.a, {
                        onChange: Y.handleChange,
                        value: Y.values.search,
                        style: { marginRight: 5 },
                        name: 'search',
                        placeholder: 'Ime / Br. Telefona',
                        onKeyPress: function (e) {
                          'Enter' === e.key && Y.submitForm();
                        },
                        InputProps: {
                          startAdornment: Object(n.jsx)(_e.a, {
                            position: 'start',
                            children: Object(n.jsx)(wa.a, {}),
                          }),
                        },
                      }),
                      Object(n.jsx)(g.a, {
                        variant: 'outlined',
                        size: 'small',
                        color: 'primary',
                        onClick: Y.submitForm,
                        children: 'Pretra\u017ei',
                      }),
                    ],
                  }),
                  Object(n.jsx)(E.a, {
                    value: b,
                    onChange: function (e) {
                      h(e.target.value);
                    },
                    select: !0,
                    children: [12, 24, 36, 48, 120].map(function (e) {
                      return Object(n.jsx)(Re.a, { value: e, children: e }, e);
                    }),
                  }),
                ],
              }),
              a.loading &&
                Object(n.jsx)('div', {
                  style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  },
                  children: Object(n.jsx)(A.a, {}),
                }),
              Object(n.jsx)(dt.a, {
                className: e.cardsContainer,
                container: !0,
                spacing: 3,
                children: K,
              }),
              Object(n.jsx)('div', {
                className: e.paginationContainer,
                children: Object(n.jsx)(gn.a, {
                  style: { marginBottom: 20 },
                  color: 'primary',
                  count: Math.ceil(a.count / b),
                  onChange: function (e, t) {
                    l(t);
                  },
                  page: s,
                }),
              }),
              Object(n.jsx)(ue.a, {
                open: !!c.uiError,
                onClose: W,
                children: Object(n.jsx)(de.a, {
                  onClose: W,
                  severity: 'error',
                  variant: 'filled',
                  children: c.uiError,
                }),
              }),
              Object(n.jsx)(ue.a, {
                open: !!c.successMessage,
                onClose: F,
                children: Object(n.jsx)(de.a, {
                  onClose: F,
                  severity: 'success',
                  variant: 'filled',
                  children: c.successMessage,
                }),
              }),
            ],
          });
        },
        wn = Object(h.a)(function (e) {
          return { heading: { marginTop: 20 } };
        }),
        Ln = function () {
          var e = wn();
          return Object(n.jsxs)(x.a, {
            children: [
              Object(n.jsx)(f.a, {
                className: e.heading,
                variant: 'h2',
                component: 'h1',
                children: 'Klijenti',
              }),
              Object(n.jsx)(Dn, {}),
            ],
          });
        },
        Pn = Object(h.a)({
          heading: {
            display: 'block',
            textAlign: 'center',
            marginTop: '30px',
            marginBottom: '50px',
          },
          span: { marginBottom: '20px' },
          item: {
            marginBottom: 5,
            '&:not(:last-child)': { marginRight: '5px' },
          },
        }),
        Un = function () {
          var e = Pn(),
            t = Object(d.c)(function (e) {
              return e.admin;
            });
          return Object(n.jsxs)(x.a, {
            children: [
              Object(n.jsx)(f.a, {
                className: e.heading,
                component: 'h1',
                variant: 'h3',
                color: 'primary',
                children: 'Nemate dozvolu za pristup.',
              }),
              Object(n.jsx)(f.a, {
                className: e.span,
                align: 'center',
                children: 'vratite se na neku od stranica',
              }),
              (function () {
                var a = [];
                return (
                  'admin' === t.role
                    ? (a.push({ path: '/', name: 'Dashboard' }),
                      a.push({ path: '/klijenti', name: 'Klijenti' }),
                      a.push({ path: '/automobili', name: 'Automobili' }),
                      a.push({
                        path: '/servisni-nalozi',
                        name: 'Servisni Nalozi',
                      }),
                      a.push({ path: '/radni-nalozi', name: 'Radni Nalozi' }),
                      a.push({
                        path: '/zakazani-termini',
                        name: 'Zakazani Termini',
                      }),
                      a.push({ path: '/racuni', name: 'Racuni' }))
                    : 'mechanic' === t.role
                    ? (a.push({ path: '/klijenti', name: 'Klijenti' }),
                      a.push({ path: '/automobili', name: 'Automobili' }),
                      a.push({
                        path: '/servisni-nalozi',
                        name: 'Servisni Nalozi',
                      }),
                      a.push({ path: '/radni-nalozi', name: 'Radni Nalozi' }),
                      a.push({
                        path: '/zakazani-termini',
                        name: 'Zakazani Termini',
                      }),
                      a.push({ path: '/racuni', name: 'Ra\u010duni' }))
                    : 'blogger' === t.role &&
                      (a.push({ path: '/blog', name: 'Blog' }),
                      a.push({ path: '/slike', name: 'Slike' })),
                  Object(n.jsx)(dt.a, {
                    container: !0,
                    align: 'center',
                    justify: 'center',
                    children: a.map(function (t) {
                      return Object(n.jsx)(
                        dt.a,
                        {
                          className: e.item,
                          children: Object(n.jsx)(g.a, {
                            component: p.b,
                            to: t.path,
                            variant: 'outlined',
                            color: 'secondary',
                            children: t.name,
                          }),
                        },
                        t.path
                      );
                    }),
                  })
                );
              })(),
            ],
          });
        },
        Mn = a(797),
        Bn = a(780),
        zn = a(779),
        Yn = a(781),
        Wn = Object(Bt.a)({
          root: {
            border: '1px solid rgba(0, 0, 0, .125)',
            boxShadow: 'none',
            '&:not(:last-child)': { borderBottom: 0 },
            '&:before': { display: 'none' },
            '&$expanded': { margin: 'auto' },
          },
          expanded: {},
        })(Mn.a),
        Fn = Object(Bt.a)(function (e) {
          return {
            root: {
              backgroundColor: 'rgba(0, 0, 30, .02)',
              borderBottom: '1px solid rgba(0, 0, 0, .125)',
              marginBottom: -1,
              minHeight: 56,
              '&$expanded': { minHeight: 56 },
            },
            content: { '&$expanded': { margin: '12px 0' } },
            expanded: {},
          };
        })(zn.a),
        Kn = Object(Bt.a)(function (e) {
          return { root: { padding: e.spacing(2) } };
        })(Bn.a),
        Vn = Object(h.a)(function (e) {
          return {
            container: { margin: '20px 0' },
            notSeenIcon: { color: e.palette.secondary.main, marginLeft: 20 },
            messageText: { marginTop: 10 },
          };
        }),
        Hn = function (e) {
          var t = e.messages,
            a = c.a.useState(''),
            r = Object(R.a)(a, 2),
            i = r[0],
            o = r[1],
            s = Vn(),
            l = Object(d.b)();
          if (!t)
            return Object(n.jsx)(f.a, { variant: 'h4', children: 'loading..' });
          var u = function (e) {
            l(
              (function (e) {
                return { type: O.UPDATE_MESSAGE_SEEN_SAGA, payload: { id: e } };
              })(e)
            );
          };
          return Object(n.jsx)('div', {
            className: s.container,
            children: t.map(function (e) {
              return Object(n.jsxs)(
                Wn,
                {
                  square: !0,
                  expanded: i === e.id,
                  onChange:
                    ((t = e.id),
                    function (e, a) {
                      o(!!a && t);
                    }),
                  onClick: function () {
                    e.seen || u(e.id);
                  },
                  children: [
                    Object(n.jsxs)(Fn, {
                      children: [
                        Object(n.jsxs)(f.a, {
                          children: [
                            e.name,
                            ' - ',
                            ut()(e.createdAt).format('DD.MM.YYYY'),
                          ],
                        }),
                        !e.seen &&
                          Object(n.jsx)(Yn.a, { className: s.notSeenIcon }),
                      ],
                    }),
                    Object(n.jsxs)(Kn, {
                      style: { flexDirection: 'column' },
                      children: [
                        Object(n.jsxs)(f.a, {
                          variant: 'body2',
                          color: 'textSecondary',
                          component: 'p',
                          children: ['Ime - ', e.name],
                        }),
                        Object(n.jsxs)(f.a, {
                          variant: 'body2',
                          color: 'textSecondary',
                          component: 'p',
                          children: ['Broj Telefona - ', e.phone],
                        }),
                        e.email &&
                          Object(n.jsxs)(f.a, {
                            variant: 'body2',
                            color: 'textSecondary',
                            component: 'p',
                            children: ['Email - ', e.email],
                          }),
                        Object(n.jsxs)(f.a, {
                          variant: 'body2',
                          color: 'textSecondary',
                          component: 'p',
                          children: ['Automobil - ', e.car],
                        }),
                        Object(n.jsx)(f.a, {
                          variant: 'body1',
                          component: 'p',
                          className: s.messageText,
                          children: e.message,
                        }),
                      ],
                    }),
                  ],
                },
                e.id
              );
              var t;
            }),
          });
        };
      Hn.propTyps = { messages: xt.a.array };
      var Jn = Hn,
        Xn = Object(h.a)(function (e) {
          return {
            cardContainer: { marginTop: 20 },
            searchContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 50,
            },
            paginationContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              margin: '30px 0',
            },
            card: { padding: '30px 20px', height: '100%' },
            cardHeading: { color: e.palette.text.primary, fontWeight: 600 },
            registration: { fontWeight: 300, color: e.palette.primary.dark },
            attentionText: { color: e.palette.primary.dark },
            svgIcon: {
              fontSize: 30,
              padding: '0 0',
              margin: '0 0 -6px 0',
              boxSizing: 'content-box',
              color: e.palette.primary.dark,
            },
          };
        }),
        qn = function () {
          var e = Xn(),
            t = Object(d.b)(),
            a = Object(d.c)(function (e) {
              return e.messages;
            }),
            c = Object(r.useState)(''),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = Object(r.useState)(1),
            u = Object(R.a)(l, 2),
            p = u[0],
            j = u[1],
            b = Object(r.useState)(20),
            h = Object(R.a)(b, 2),
            x = h[0],
            f = h[1];
          Object(r.useEffect)(
            function () {
              t(
                (function (e, t, a) {
                  return {
                    type: O.GET_MESSAGES_SAGA,
                    payload: { page: e, limit: t, search: a },
                  };
                })(p, x, o)
              );
            },
            [t, p, x, o]
          );
          var v = Object(m.a)({
            initialValues: { search: '' },
            onSubmit: function (e) {
              s(e.search), j(1);
            },
          });
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsxs)('div', {
                className: e.searchContainer,
                children: [
                  Object(n.jsxs)('form', {
                    onSubmit: v.handleSubmit,
                    children: [
                      Object(n.jsx)(E.a, {
                        onChange: v.handleChange,
                        value: v.values.search,
                        style: { marginRight: 5 },
                        name: 'search',
                        placeholder: 'Ime',
                        onKeyPress: function (e) {
                          'Enter' === e.key && v.submitForm();
                        },
                        InputProps: {
                          startAdornment: Object(n.jsx)(_e.a, {
                            position: 'start',
                            children: Object(n.jsx)(wa.a, {}),
                          }),
                        },
                      }),
                      Object(n.jsx)(g.a, {
                        variant: 'outlined',
                        size: 'small',
                        color: 'primary',
                        onClick: v.submitForm,
                        children: 'Pretra\u017ei',
                      }),
                    ],
                  }),
                  Object(n.jsx)(E.a, {
                    value: x,
                    onChange: function (e) {
                      f(e.target.value);
                    },
                    select: !0,
                    children: [20, 50, 100].map(function (e) {
                      return Object(n.jsx)(Re.a, { value: e, children: e }, e);
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(Jn, { messages: a.messages }),
              Object(n.jsx)('div', {
                className: e.paginationContainer,
                children: Object(n.jsx)(aa.a, {
                  style: { marginBottom: 20 },
                  color: 'primary',
                  count: Math.ceil(a.count / x),
                  onChange: function (e, t) {
                    j(t);
                  },
                  page: p,
                }),
              }),
            ],
          });
        },
        Zn = function () {
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)(qn, {}),
              Object(n.jsx)(y, {}),
              Object(n.jsx)($e, {}),
              Object(n.jsx)(Qe, {}),
            ],
          });
        },
        $n = Object(h.a)(function (e) {
          return { heading: { marginTop: 20 } };
        }),
        Qn = function () {
          var e = $n();
          return Object(n.jsxs)(x.a, {
            children: [
              Object(n.jsx)(f.a, {
                className: e.heading,
                variant: 'h2',
                component: 'h1',
                children: 'Poruke',
              }),
              Object(n.jsx)(Zn, {}),
            ],
          });
        },
        er = a(15),
        tr = function (e) {
          var t = e.invoiceDescs;
          return Object(n.jsxs)('div', {
            style: { fontStyle: 'italic' },
            children: [
              Object(n.jsxs)(f.a, {
                component: 'p',
                children: [
                  'Ukupna cena bez PDV-a',
                  ' ',
                  t.reduce(function (e, t) {
                    return Number(
                      (
                        e +
                        t.pricePerUnit * t.qty * (1 - t.discount / 100)
                      ).toFixed(2)
                    );
                  }, 0),
                  ' ',
                  'KM',
                ],
              }),
              Object(n.jsxs)(f.a, {
                component: 'p',
                children: [
                  'Ukupna cena sa PDV-om',
                  ' ',
                  t.reduce(function (e, t) {
                    return Number(
                      (
                        e +
                        t.pricePerUnit *
                          t.qty *
                          (1 - t.discount / 100) *
                          (1 + t.tax / 100)
                      ).toFixed(2)
                    );
                  }, 0),
                  ' ',
                  'KM',
                ],
              }),
            ],
          });
        },
        ar = c.a.memo(tr),
        nr = Object(h.a)(function (e) {
          return {
            form: {},
            textField: { width: '100%', marginBottom: 10 },
            formRow: {
              display: 'flex',
              margin: '10px 0',
              wrap: 1,
              '& *:not(:last-child)': { marginRight: 15 },
              '@media screen and (max-width: 900px)': {
                flexDirection: 'column',
                '& *:not(:last-child)': { marginRight: 0, marginBottom: 15 },
              },
            },
            select: {
              minWidth: 170,
              width: 170,
              '@media screen and (max-width: 900px)': { width: '100%' },
            },
            datePicker: {
              width: 170,
              '@media screen and (max-width: 900px)': { width: '100%' },
            },
            formDescContainer: { margin: '20px 0' },
            invoiceDesc: {
              padding: '10px 15px',
              background: 'rgba(0,0,0,.05)',
              marginBottom: 10,
            },
            flexBetween: {
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            },
          };
        }),
        rr = function (e) {
          var t = e.heading,
            a = nr(),
            c = Object(d.b)(),
            i = Object(r.useState)(!1),
            o = Object(R.a)(i, 2),
            s = o[0],
            l = o[1],
            u = function () {
              l(!s);
            },
            p = {
              desc: '',
              pricePerUnit: 0,
              qty: 1,
              tax: 0,
              discount: 0,
              unit: 'kom',
            },
            j = Object(m.a)({
              initialValues: {
                invoiceTitle: 'Ra\u010dun',
                location: 'Banja Luka',
                deliveryDate: ut()(new Date()).format('YYYY/MM/DD'),
                dpo: ut()(new Date()).format('YYYY/MM/DD'),
                valuta: ut()(new Date()).format('YYYY/MM/DD'),
                dueDate: ut()(new Date()).format('YYYY/MM/DD'),
                customerName: '',
                customerAdress: '',
                customerPostNumberLocation: '',
                customerPhoneNumber: '',
                customerEmail: '',
                customerAdditionalInfo: '',
                priceInWriting: '',
                invoiceDescs: [p],
              },
              onSubmit: function (e) {
                var t;
                c(
                  ((t = e),
                  { type: O.CREATE_INVOICE_SAGA, payload: Object(S.a)({}, t) })
                ),
                  j.resetForm(),
                  l(!1);
              },
            }),
            b = function (e, t) {
              j.setFieldValue(t, ut()(e).format('YYYY-MM-DDTHH:mm'));
            },
            h = function (e, t) {
              var a = Object(er.a)(j.values.invoiceDescs);
              (a[t][e.target.name] = e.target.value),
                j.setFieldValue('invoiceDescs', a),
                e.target.focus && e.target.focus();
            };
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(tt, {
                open: s,
                onClose: u,
                heading: 'Da li ste sigurni da ste sve popunili ispravno?',
                text:
                  'Nakon \u0161to napravite fakturu nemate mogu\u0107nost izmene ili brisanja. Proverite pravopis, imena, kva\u010dice (\u0161,\u0111,\u010d,\u0107,\u017e).',
                btn1: 'potvrdi',
                btn2: 'vrati se',
                headIcon: Object(n.jsx)(Ee.a, { style: { fontSize: 150 } }),
                onSubmit: j.handleSubmit,
              }),
              Object(n.jsxs)('form', {
                className: a.form,
                children: [
                  Object(n.jsx)(f.a, {
                    variant: 'h4',
                    component: 'h3',
                    style: { marginLeft: -1, marginBottom: 10 },
                    children: t || 'Kreiraj Fakturu',
                  }),
                  Object(n.jsxs)('div', {
                    className: a.formRow,
                    children: [
                      Object(n.jsx)(E.a, {
                        className: a.select,
                        name: 'invoiceTitle',
                        label: 'Tip Fakture',
                        value: j.values.invoiceTitle,
                        select: !0,
                        onChange: j.handleChange,
                        helperText: j.errors.invoiceTitle,
                        error: !!j.errors.invoiceTitle,
                        variant: 'outlined',
                        children: ['Ra\u010dun', 'Predra\u010dun'].map(
                          function (e, t) {
                            return Object(n.jsx)(
                              Re.a,
                              { value: e, children: e },
                              t
                            );
                          }
                        ),
                      }),
                      Object(n.jsx)(E.a, {
                        className: a.select,
                        name: 'location',
                        label: 'Lokacija*',
                        value: j.values.location,
                        onChange: j.handleChange,
                        helperText: j.errors.location,
                        error: !!j.errors.location,
                        variant: 'outlined',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: a.formRow,
                    children: [
                      Object(n.jsx)(ot.a, {
                        utils: it.a,
                        children: Object(n.jsx)(st.b, {
                          variant: 'inline',
                          ampm: !1,
                          label: 'Izdano Dana',
                          name: 'deliveryDate',
                          value: j.values.deliveryDate,
                          onChange: function (e) {
                            return b(e, 'deliveryDate');
                          },
                          onError: console.log,
                          format: 'dd.MM.yyyy.',
                          className: a.datePicker,
                        }),
                      }),
                      Object(n.jsx)(ot.a, {
                        utils: it.a,
                        children: Object(n.jsx)(st.b, {
                          variant: 'inline',
                          ampm: !1,
                          label: 'DPO',
                          name: 'dpo',
                          value: j.values.dpo,
                          onChange: function (e) {
                            return b(e, 'dpo');
                          },
                          onError: console.log,
                          format: 'dd.MM.yyyy.',
                          className: a.datePicker,
                        }),
                      }),
                      Object(n.jsx)(ot.a, {
                        utils: it.a,
                        children: Object(n.jsx)(st.b, {
                          variant: 'inline',
                          ampm: !1,
                          label: 'Valuta',
                          name: 'valuta',
                          value: j.values.valuta,
                          onChange: function (e) {
                            return b(e, 'valuta');
                          },
                          onError: console.log,
                          format: 'dd.MM.yyyy.',
                          className: a.datePicker,
                        }),
                      }),
                      Object(n.jsx)(ot.a, {
                        utils: it.a,
                        children: Object(n.jsx)(st.b, {
                          variant: 'inline',
                          ampm: !1,
                          label: 'Rok Pla\u0107anja',
                          name: 'dueDate',
                          value: j.values.dueDate,
                          onChange: function (e) {
                            return b(e, 'dueDate');
                          },
                          onError: console.log,
                          format: 'dd.MM.yyyy.',
                          className: a.datePicker,
                        }),
                      }),
                    ],
                  }),
                  Object(n.jsx)(E.a, {
                    className: a.textField,
                    name: 'customerName',
                    label: 'Ime Kupca*',
                    value: j.values.customerName,
                    onChange: j.handleChange,
                    helperText: j.errors.customerName,
                    error: !!j.errors.customerName,
                    variant: 'outlined',
                    style: { marginTop: 30 },
                  }),
                  Object(n.jsx)(E.a, {
                    className: a.textField,
                    name: 'customerAdress',
                    label: 'Adresa Kupca',
                    value: j.values.customerAdress,
                    onChange: j.handleChange,
                    helperText: j.errors.customerAdress,
                    error: !!j.errors.customerAdress,
                    variant: 'outlined',
                  }),
                  Object(n.jsx)(E.a, {
                    className: a.textField,
                    name: 'customerPostNumberLocation',
                    label: 'Po\u0161tanski Broj i Mesto Kupca',
                    value: j.values.customerPostNumberLocation,
                    onChange: j.handleChange,
                    helperText: j.errors.customerPostNumberLocation,
                    error: !!j.errors.customerPostNumberLocation,
                    variant: 'outlined',
                  }),
                  Object(n.jsx)(E.a, {
                    className: a.textField,
                    name: 'customerPhoneNumber',
                    label: 'Broj Telefona Kupca',
                    value: j.values.customerPhoneNumber,
                    onChange: j.handleChange,
                    helperText: j.errors.customerPhoneNumber,
                    error: !!j.errors.customerPhoneNumber,
                    variant: 'outlined',
                  }),
                  Object(n.jsx)(E.a, {
                    className: a.textField,
                    name: 'customerEmail',
                    label: 'Email Kupca',
                    value: j.values.customerEmail,
                    onChange: j.handleChange,
                    helperText: j.errors.customerEmail,
                    error: !!j.errors.customerEmail,
                    variant: 'outlined',
                  }),
                  Object(n.jsx)(E.a, {
                    className: a.textField,
                    name: 'customerAdditionalInfo',
                    label: 'Dodatne Informacije o Kupcu',
                    value: j.values.customerAdditionalInfo,
                    onChange: j.handleChange,
                    helperText: j.errors.customerAdditionalInfo,
                    error: !!j.errors.customerAdditionalInfo,
                    variant: 'outlined',
                  }),
                  Object(n.jsxs)('div', {
                    className: a.formDescContainer,
                    children: [
                      Object(r.useMemo)(
                        function () {
                          var e = ['kom', 'h', 'komplet'];
                          return j.values.invoiceDescs.map(function (t, r) {
                            return Object(n.jsxs)(
                              'div',
                              {
                                className: a.invoiceDesc,
                                children: [
                                  Object(n.jsxs)(f.a, {
                                    variant: 'h5',
                                    children: ['Linija ', r + 1],
                                  }),
                                  Object(n.jsxs)('div', {
                                    className: a.formRow,
                                    children: [
                                      Object(n.jsx)(E.a, {
                                        className: a.textField,
                                        name: 'desc',
                                        label: 'Ime Proizvoda/Usluge',
                                        value: t.desc,
                                        onChange: function (e) {
                                          h(e, r);
                                        },
                                        variant: 'standard',
                                      }),
                                      Object(n.jsx)(E.a, {
                                        className: a.select,
                                        name: 'unit',
                                        label: 'Jedinica Mere',
                                        value: t.unit,
                                        select: !0,
                                        onChange: function (e) {
                                          h(e, r);
                                        },
                                        variant: 'standard',
                                        children: e.map(function (e, t) {
                                          return Object(n.jsx)(
                                            Re.a,
                                            { value: e, children: e },
                                            t
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                  Object(n.jsxs)('div', {
                                    className: a.formRow,
                                    children: [
                                      Object(n.jsx)(E.a, {
                                        className: a.select,
                                        name: 'pricePerUnit',
                                        label: 'Cena Po Jedinici',
                                        value: t.pricePerUnit,
                                        type: 'number',
                                        onChange: function (e) {
                                          h(e, r);
                                        },
                                        variant: 'standard',
                                      }),
                                      Object(n.jsx)(E.a, {
                                        className: a.select,
                                        name: 'qty',
                                        label: 'Koli\u010dina',
                                        value: t.qty,
                                        type: 'number',
                                        onChange: function (e) {
                                          h(e, r);
                                        },
                                        variant: 'standard',
                                      }),
                                      Object(n.jsx)(E.a, {
                                        className: a.select,
                                        name: 'discount',
                                        label: 'Popust %',
                                        value: t.discount,
                                        type: 'number',
                                        onChange: function (e) {
                                          h(e, r);
                                        },
                                        variant: 'standard',
                                      }),
                                      Object(n.jsx)(E.a, {
                                        className: a.select,
                                        name: 'tax',
                                        label: 'PDV %',
                                        value: t.tax,
                                        type: 'number',
                                        onChange: function (e) {
                                          h(e, r);
                                        },
                                        variant: 'standard',
                                      }),
                                    ],
                                  }),
                                  Object(n.jsxs)(f.a, {
                                    variant: 'caption',
                                    component: 'p',
                                    style: { marginTop: 5 },
                                    color: 'textSecondary',
                                    children: [
                                      'Cena bez PDV-a:',
                                      ' ',
                                      (
                                        t.pricePerUnit *
                                        t.qty *
                                        (1 - t.discount / 100)
                                      ).toFixed(2),
                                      ' ',
                                      'KM',
                                    ],
                                  }),
                                  Object(n.jsxs)(f.a, {
                                    variant: 'caption',
                                    component: 'p',
                                    color: 'textSecondary',
                                    children: [
                                      'Cena sa PDV-om:',
                                      ' ',
                                      (
                                        t.pricePerUnit *
                                        t.qty *
                                        (1 - t.discount / 100) *
                                        (1 + t.tax / 100)
                                      ).toFixed(2),
                                      ' ',
                                      'KM',
                                    ],
                                  }),
                                ],
                              },
                              r
                            );
                          });
                        },
                        [j.values.invoiceDescs]
                      ),
                      Object(n.jsx)(g.a, {
                        size: 'small',
                        color: 'primary',
                        onClick: function () {
                          j.setValues(
                            Object(S.a)(
                              Object(S.a)({}, j.values),
                              {},
                              {
                                invoiceDescs: [].concat(
                                  Object(er.a)(j.values.invoiceDescs),
                                  [p]
                                ),
                              }
                            )
                          );
                        },
                        startIcon: Object(n.jsx)(ge.a, {}),
                        disabled: j.values.invoiceDescs.length > 6,
                        children: 'Dodaj Liniju',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: a.flexBetween,
                    children: [
                      Object(n.jsx)(E.a, {
                        style: { width: 300 },
                        name: 'priceInWriting',
                        label: 'Ukupna Cena sa PDV-om Slovima*',
                        value: j.values.priceInWriting,
                        onChange: j.handleChange,
                        helperText: j.errors.priceInWriting,
                        error: !!j.errors.priceInWriting,
                        variant: 'outlined',
                      }),
                      Object(n.jsx)(ar, {
                        invoiceDescs: j.values.invoiceDescs,
                      }),
                    ],
                  }),
                  Object(n.jsx)(g.a, {
                    style: { marginTop: 20 },
                    color: 'primary',
                    size: 'large',
                    variant: 'contained',
                    onClick: u,
                    children: 'Napravi Fakturu',
                  }),
                ],
              }),
              Object(n.jsx)(y, {}),
            ],
          });
        },
        cr = a(782),
        ir = a(783),
        or = Object(h.a)(function (e) {
          return {
            modal: {
              position: 'fixed !important',
              outline: 'none',
              top: '50% !important',
              left: '50% !important',
              transform: 'translate(-50%, -50%)',
              height: '100%',
              width: '100%',
              '&:focus, &:active': { outline: 'none' },
            },
            iframe: {
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
          };
        }),
        sr = function (e) {
          var t = e.open,
            a = e.onClose,
            r = e.path,
            c = or();
          return Object(n.jsx)(v.a, {
            className: c.modal,
            open: t,
            onClose: a,
            children: Object(n.jsx)('iframe', {
              title: 'invoice-pdf',
              src: 'https://gagatest.xyz'.concat(r),
              frameBorder: '0',
              width: '80%',
              height: '90%',
              className: c.iframe,
            }),
          });
        },
        lr = Object(Bt.a)(function (e) {
          return {
            head: {
              backgroundColor: e.palette.primary.dark,
              color: e.palette.common.white,
            },
            body: { fontSize: 14 },
          };
        })(Yt.a),
        ur = Object(Bt.a)(function (e) {
          return {
            root: {
              '&:nth-of-type(odd)': { backgroundColor: e.palette.action.hover },
            },
          };
        })(zt.a),
        dr = Object(h.a)(function (e) {
          return {
            table: { minWidth: 650 },
            printIcon: {
              cursor: 'pointer',
              transition: 'all .2s',
              '&:hover': {
                color: e.palette.primary.dark,
                backgroundColor: 'rgba(0,0,0,.05)',
              },
              '& svg:not(:last-child)': { marginRight: 5 },
            },
          };
        }),
        pr = function (e) {
          var t = e.invoices,
            a = (Object(Ae.a)(e, ['invoices']), dr()),
            c = Object(r.useState)(!1),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = Object(r.useState)(''),
            u = Object(R.a)(l, 2),
            d = u[0],
            p = u[1],
            j = function () {
              s(!o);
            };
          return t && t[0]
            ? Object(n.jsxs)('div', {
                children: [
                  Object(n.jsx)(sr, { open: o, onClose: j, path: d }),
                  Object(n.jsx)(Wt.a, {
                    component: Ft.a,
                    style: { marginTop: 50 },
                    children: Object(n.jsxs)(tn.a, {
                      className: a.table,
                      'aria-label': 'simple table',
                      children: [
                        Object(n.jsx)(Kt.a, {
                          children: Object(n.jsxs)(zt.a, {
                            children: [
                              Object(n.jsx)(lr, { children: 'Tip Fakture' }),
                              Object(n.jsx)(lr, {
                                align: 'right',
                                children: 'Broj Fakture',
                              }),
                              Object(n.jsx)(lr, {
                                align: 'right',
                                children: 'Ime Kupca / Naziv Firme',
                              }),
                              Object(n.jsx)(lr, {
                                align: 'right',
                                children: 'Ra\u010dun Otkucan Dana',
                              }),
                              Object(n.jsx)(lr, {
                                align: 'right',
                                children: 'Valuta',
                              }),
                              Object(n.jsx)(lr, {
                                align: 'right',
                                children: 'Skini / \u0160tampaj',
                              }),
                            ],
                          }),
                        }),
                        Object(n.jsx)(an.a, {
                          children: t.map(function (e) {
                            return Object(n.jsxs)(
                              ur,
                              {
                                children: [
                                  Object(n.jsx)(lr, {
                                    component: 'th',
                                    scope: 'invoice',
                                    children: e.invoiceTitle,
                                  }),
                                  Object(n.jsx)(lr, {
                                    align: 'right',
                                    children: e.po,
                                  }),
                                  Object(n.jsx)(lr, {
                                    align: 'right',
                                    children: e.customerName,
                                  }),
                                  Object(n.jsx)(lr, {
                                    align: 'right',
                                    children: ut()(e.createdAt).format(
                                      'DD.MM.YYYY.'
                                    ),
                                  }),
                                  Object(n.jsx)(lr, {
                                    align: 'right',
                                    children: ut()(e.valuta).format(
                                      'DD.MM.YYYY.'
                                    ),
                                  }),
                                  Object(n.jsxs)(lr, {
                                    align: 'right',
                                    className: a.printIcon,
                                    onClick: function () {
                                      var t;
                                      (t = '/documents/'.concat(e.pdfName)),
                                        p(t),
                                        j();
                                    },
                                    children: [
                                      Object(n.jsx)(cr.a, {}),
                                      Object(n.jsx)(ir.a, {}),
                                    ],
                                  }),
                                ],
                              },
                              e.id
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(n.jsx)(y, {}),
                ],
              })
            : Object(n.jsx)(f.a, {
                variant: 'h5',
                children: 'Nema Ra\u010duna..',
              });
        },
        jr = Object(h.a)(function (e) {
          return {
            searchContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              marginTop: 50,
            },
            searchField: { marginRight: 10 },
            paginationContainer: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              margin: '30px 0',
            },
            headContainer: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            },
            limitField: { width: 170 },
            newInvoiceButton: {
              color: e.palette.text.primary,
              border: '1px solid',
            },
          };
        }),
        br = function () {
          var e = jr(),
            t = Object(d.b)(),
            a = Object(r.useState)(1),
            c = Object(R.a)(a, 2),
            i = c[0],
            o = c[1],
            s = Object(r.useState)(10),
            l = Object(R.a)(s, 2),
            u = l[0],
            p = l[1],
            j = Object(r.useState)(''),
            b = Object(R.a)(j, 2),
            h = b[0],
            x = b[1],
            f = Object(r.useState)(!1),
            v = Object(R.a)(f, 2),
            A = v[0],
            _ = v[1],
            C = function () {
              _(!A);
            },
            S = Object(d.c)(function (e) {
              return e.invoices;
            });
          Object(r.useEffect)(
            function () {
              t(
                (function (e, t, a) {
                  return {
                    type: O.GET_INVOICES_SAGA,
                    payload: { page: e, limit: t, search: a },
                  };
                })(i, u, h)
              );
            },
            [t, i, u, h]
          );
          var N = Object(m.a)({
            initialValues: { searchField: '' },
            onSubmit: function (e) {
              x(e.searchField), o(1);
            },
          });
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(Be, {
                open: A,
                onClose: C,
                children: Object(n.jsx)(rr, {}),
              }),
              Object(n.jsx)(g.a, {
                size: 'medium',
                variant: 'outlined',
                startIcon: Object(n.jsx)(ge.a, {}),
                className: e.newInvoiceButton,
                onClick: C,
                children: 'Novi Ra\u010dun',
              }),
              Object(n.jsxs)('div', {
                children: [
                  Object(n.jsxs)('div', {
                    className: e.headContainer,
                    children: [
                      Object(n.jsxs)('form', {
                        onSubmit: N.handleSubmit,
                        className: e.searchContainer,
                        children: [
                          Object(n.jsx)(E.a, {
                            className: e.searchField,
                            name: 'searchField',
                            onChange: N.handleChange,
                            label: 'Pretra\u017ei Po Imenu Kupca',
                            value: N.values.searchField,
                            onKeyPress: function (e) {
                              'Enter' === e.key && N.submitForm();
                            },
                            InputProps: {
                              startAdornment: Object(n.jsx)(_e.a, {
                                position: 'start',
                                children: Object(n.jsx)(wa.a, {}),
                              }),
                            },
                          }),
                          Object(n.jsx)(g.a, {
                            size: 'small',
                            variant: 'outlined',
                            color: 'primary',
                            onClick: function () {
                              N.submitForm();
                            },
                            children: 'Pretra\u017ei',
                          }),
                        ],
                      }),
                      Object(n.jsx)(E.a, {
                        className: e.limitField,
                        value: u,
                        onChange: function (e) {
                          p(e.target.value);
                        },
                        label: 'Prikaza Po Stranici',
                        select: !0,
                        children: [10, 20, 50, 100].map(function (e) {
                          return Object(n.jsx)(
                            Re.a,
                            { value: e, children: e },
                            e
                          );
                        }),
                      }),
                    ],
                  }),
                  Object(n.jsx)(pr, { invoices: S.invoices }),
                  Object(n.jsx)('div', {
                    className: e.paginationContainer,
                    children: Object(n.jsx)(aa.a, {
                      style: { marginBottom: 20 },
                      color: 'primary',
                      count: Math.ceil(S.count / u),
                      onChange: function (e, t) {
                        o(t);
                      },
                      page: i,
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(y, {}),
              Object(n.jsx)($e, {}),
              Object(n.jsx)(Qe, {}),
            ],
          });
        },
        mr = Object(h.a)(function (e) {
          return { heading: { marginTop: 20 } };
        }),
        Or = function () {
          var e = mr();
          return Object(n.jsxs)(x.a, {
            children: [
              Object(n.jsx)(f.a, {
                className: e.heading,
                variant: 'h2',
                component: 'h1',
                children: 'Ra\u010duni',
              }),
              Object(n.jsx)(br, {}),
            ],
          });
        },
        hr = a(784),
        xr = function (e) {
          return 'to-do' === e
            ? 'Na \u010dekanju'
            : 'in-progress' === e
            ? 'Rad u toku'
            : 'waiting-for-parts' === e
            ? '\u010cekanje na delove'
            : 'finished' === e
            ? 'Zavr\u0161eno'
            : 'status nepoznat';
        },
        fr = Object(h.a)(function (e) {
          return {
            header: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            heading: { marginTop: 20 },
            headingIcon: {
              position: 'relative',
              marginLeft: 3,
              transform: 'rotate(-100deg)',
            },
            ticketCard: {
              width: '100%',
              height: '100%',
              color: '#fff',
              '@media screen and (max-width:900px)': {
                marginRight: 0,
                marginBottom: 10,
                maxWidth: '100%',
                width: '100%',
              },
            },
            cardButton: { color: '#fff' },
          };
        }),
        Er = function (e) {
          var t = e.jobTickets,
            a = fr(),
            r = Object(j.f)();
          return Object(n.jsxs)('section', {
            style: { marginTop: 30 },
            children: [
              t &&
                !t[0] &&
                Object(n.jsx)(f.a, {
                  variant: 'body1',
                  children: 'Nema radnih naloga..',
                }),
              t &&
                t[0] &&
                Object(n.jsx)(dt.a, {
                  container: !0,
                  spacing: 3,
                  children: t.map(function (e) {
                    return Object(n.jsx)(
                      dt.a,
                      {
                        item: !0,
                        lg: 4,
                        sm: 6,
                        xs: 12,
                        children: Object(n.jsx)(
                          pt.a,
                          {
                            className: a.ticketCard,
                            style:
                              'in-progress' === e.status
                                ? { background: 'rgb(75, 149, 231)' }
                                : 'finished' === e.status
                                ? { background: '#5FC0B4' }
                                : { background: '#FFa820' },
                            children: Object(n.jsx)(na.a, {
                              onClick: function () {
                                return r.push(
                                  '/servisni-nalozi/'.concat(e.workOrderId)
                                );
                              },
                              children: Object(n.jsxs)(jt.a, {
                                children: [
                                  Object(n.jsx)('div', {
                                    className: a.header,
                                    children: Object(n.jsxs)(f.a, {
                                      gutterBottom: !0,
                                      variant: 'h5',
                                      component: 'h2',
                                      children: [
                                        xr(e.status),
                                        Object(n.jsx)(hr.a, {
                                          className: a.headingIcon,
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(n.jsx)(f.a, {
                                    variant: 'body2',
                                    component: 'p',
                                    children: e.ticket,
                                  }),
                                ],
                              }),
                            }),
                          },
                          e.id
                        ),
                      },
                      e.id
                    );
                  }),
                }),
            ],
          });
        },
        gr = function (e, t, a) {
          return {
            type: O.EDIT_JOB_TICKET_SAGA,
            payload: { jobTicketId: e, status: t, ticket: a },
          };
        },
        vr = function () {
          var e = Object(d.b)(),
            t = Object(d.c)(function (e) {
              return e.jobTickets;
            });
          return (
            Object(r.useEffect)(
              function () {
                e({ type: O.GET_JOB_TICKETS_SAGA });
              },
              [e]
            ),
            Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(Er, { jobTickets: t }),
                Object(n.jsx)(y, {}),
                Object(n.jsx)($e, {}),
                Object(n.jsx)(Qe, {}),
              ],
            })
          );
        },
        Ar = Object(h.a)(function (e) {
          return { heading: { marginTop: 20 } };
        }),
        yr = function () {
          var e = Ar();
          return Object(n.jsxs)(x.a, {
            children: [
              Object(n.jsx)(f.a, {
                className: e.heading,
                variant: 'h2',
                component: 'h1',
                children: 'Aktivni Radni Nalozi',
              }),
              Object(n.jsx)(vr, {}),
            ],
          });
        },
        _r = function () {
          return { type: O.CLEAR_WORK_ORDERS };
        },
        Cr = Object(h.a)(function (e) {
          return { textImportant: { color: e.palette.primary.dark } };
        }),
        Sr = function (e) {
          var t = e.car,
            a = Cr();
          return t
            ? Object(n.jsxs)('section', {
                children: [
                  Object(n.jsxs)(f.a, {
                    variant: 'h4',
                    component: 'h3',
                    children: [
                      t.carBrand,
                      ' ',
                      t.carModel,
                      ' ',
                      t.productionYear,
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: ['Kilometra\u017ea: ', t.milage],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Registracija:',
                      ' ',
                      Object(n.jsx)('span', {
                        className: a.textImportant,
                        children: t.registration.toUpperCase(),
                      }),
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Motor: ',
                      Object(n.jsx)('span', {
                        className: a.textImportant,
                        children: t.engine,
                      }),
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Vlasnik:',
                      ' ',
                      Object(n.jsxs)('span', {
                        className: a.textImportant,
                        children: [t.user.firstName, ' ', t.user.lastName],
                      }),
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Broj Telefona:',
                      ' ',
                      Object(n.jsx)('a', {
                        href: 'tel:'.concat(t.user.phoneNumber),
                        className: a.textImportant,
                        children: t.user.phoneNumber,
                      }),
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Email:',
                      ' ',
                      Object(n.jsx)('a', {
                        href: 'mailto:'.concat(t.user.email),
                        className: a.textImportant,
                        children: t.user.email,
                      }),
                    ],
                  }),
                ],
              })
            : Object(n.jsx)(f.a, {
                variant: 'h4',
                children: 'Nepoznat Automobil..',
              });
        },
        Nr = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10, marginTop: 5 },
          };
        }),
        Rr = function (e) {
          var t = Nr(),
            a = Object(d.b)(),
            r = Object(d.c)(function (e) {
              return e.workOrder;
            }),
            c = ye
              .b()
              .shape({ examConclusion: ye.d().required('Polje Obavezno!') }),
            i = Object(m.a)({
              initialValues: { examConclusion: e.examConclusion || '' },
              onSubmit:
                e.onSubmit ||
                function (e) {
                  var t, n;
                  a(
                    ((t = r.id),
                    (n = e.examConclusion),
                    {
                      type: O.CREATE_CAR_EXAM_SAGA,
                      payload: { workOrderId: t, examConclusion: n },
                    })
                  );
                },
              validationSchema: c,
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            onSubmit: i.handleSubmit,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                children: e.heading || 'Pregled Automobila',
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                multiline: !0,
                rows: 3,
                name: 'examConclusion',
                label: 'Zaklju\u010dak pregleda',
                onChange: i.handleChange,
                value: i.values.examConclusion,
                helperText: i.errors.examConclusion,
                error: !!i.errors.examConclusion,
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                onClick: i.submitForm,
                disabled: !i.dirty || !i.isValid,
                children: 'Potvrdi',
              }),
            ],
          });
        },
        Tr = Object(h.a)(function (e) {
          return {
            examSection: { marginTop: 15, padding: '15px 0' },
            header: { display: 'flex', marginBottom: 12 },
            headerButton: {
              color: e.palette.warning.dark,
              marginLeft: 15,
              alignSelf: 'center',
            },
            text: { maxWidth: 600 },
          };
        }),
        Ir = function (e) {
          var t = e.exam,
            a = Tr(),
            c = Object(r.useState)(!1),
            i = Object(R.a)(c, 2),
            o = i[0],
            s = i[1],
            l = function () {
              s(!o);
            };
          return t
            ? Object(n.jsxs)('section', {
                className: a.examSection,
                children: [
                  Object(n.jsx)(Be, {
                    open: o,
                    onClose: l,
                    children: Object(n.jsx)(Rr, {
                      heading: 'Izmeni Pregled Automobila',
                      examConclusion: t.examConclusion,
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: a.header,
                    children: [
                      Object(n.jsx)(f.a, {
                        variant: 'h4',
                        component: 'h2',
                        children: 'Pregled',
                      }),
                      Object(n.jsx)(g.a, {
                        variant: 'outlined',
                        startIcon: Object(n.jsx)(rn.a, {}),
                        color: 'inherit',
                        className: a.headerButton,
                        size: 'small',
                        onClick: l,
                        children: 'Izmeni Pregled',
                      }),
                    ],
                  }),
                  Object(n.jsx)(f.a, {
                    variant: 'body1',
                    className: a.text,
                    children: t.examConclusion,
                  }),
                ],
              })
            : Object(n.jsx)(f.a, {
                variant: 'h5',
                component: 'h2',
                children: 'Pregled nije obavljen.',
              });
        },
        kr = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
            select: { marginBottom: 10 },
            heading: { marginLeft: -1 },
            chargedField: { marginBottom: 10, width: 120 },
          };
        }),
        Gr = function (e) {
          var t = kr(),
            a = Object(d.b)(),
            r = Object(d.c)(function (e) {
              return e.workOrder;
            }),
            c = ye.b().shape({
              workDone: ye.d().required('Polje Obavezno!'),
              charged: ye.a().required('Polje Obavezno!'),
            }),
            i = Object(m.a)({
              initialValues: {
                workDone: e.workDone || '',
                note: e.note || '',
                charged: e.charged || 50,
              },
              onSubmit:
                e.onSubmit ||
                function (e) {
                  var t, n, c, i;
                  a(
                    ((t = r.id),
                    (n = e.workDone),
                    (c = e.note),
                    (i = e.charged),
                    {
                      type: O.CREATE_JOB_CONCLUSION_SAGA,
                      payload: {
                        workOrderId: t,
                        workDone: n,
                        note: c,
                        charged: i,
                      },
                    })
                  );
                },
              validationSchema: c,
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                className: t.heading,
                children: e.heading || 'Zaklju\u010di Servisni Nalog',
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                name: 'workDone',
                label: 'Odra\u0111en Posao',
                multiline: !0,
                rows: 2,
                onChange: i.handleChange,
                value: i.values.workDone,
                helperText: i.errors.workDone,
                error: !!i.errors.workDone,
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                name: 'note',
                label: 'Napomena Servisera',
                multiline: !0,
                rows: 2,
                onChange: i.handleChange,
                value: i.values.note,
                helperText: i.errors.note,
                error: !!i.errors.note,
              }),
              Object(n.jsx)(E.a, {
                className: t.chargedField,
                name: 'charged',
                label: 'Napla\u0107eno',
                type: 'number',
                inputProps: { step: 10 },
                InputProps: {
                  endAdornment: Object(n.jsx)(_e.a, {
                    position: 'end',
                    children: 'KM',
                  }),
                },
                onChange: i.handleChange,
                value: i.values.charged,
                helperText: i.errors.charged,
                error: !!i.errors.charged,
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                disabled: !i.dirty || !i.isValid,
                color: 'primary',
                onClick: i.submitForm,
                children: 'Potvrdi',
              }),
            ],
          });
        },
        Dr = Object(h.a)(function (e) {
          return {
            section: { margin: '35px 0' },
            header: { display: 'flex', alignItems: 'center' },
            editButton: { color: e.palette.warning.main, marginLeft: 5 },
            charged: {
              background: e.palette.success.main,
              color: '#fff',
              padding: '2px 5px',
            },
            note: { color: e.palette.secondary.light },
          };
        }),
        wr = function (e) {
          var t = e.jobConclusion,
            a = Dr(),
            c = Object(d.c)(function (e) {
              return e.admin;
            }),
            i = Object(d.b)(),
            o = Object(r.useState)(!1),
            s = Object(R.a)(o, 2),
            l = s[0],
            u = s[1],
            p = function () {
              u(!l);
            };
          return t
            ? Object(n.jsxs)('section', {
                className: a.section,
                children: [
                  Object(n.jsx)(Be, {
                    open: l,
                    onClose: p,
                    children: Object(n.jsx)(Gr, {
                      heading: 'Izmeni zaklju\u010dak servisnog naloga',
                      workDone: t.workDone,
                      note: t.note,
                      charged: t.charged,
                      onSubmit: function (e) {
                        var a, n, r, c;
                        i(
                          ((a = t.id),
                          (n = e.workDone),
                          (r = e.note),
                          (c = e.charged),
                          {
                            type: O.EDIT_JOB_CONCLUSION_SAGA,
                            payload: {
                              jobConclusionId: a,
                              workDone: n,
                              note: r,
                              charged: c,
                            },
                          })
                        );
                      },
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: a.header,
                    children: [
                      Object(n.jsx)(f.a, {
                        variant: 'h4',
                        component: 'h3',
                        children: 'Posao Zaklju\u010den',
                      }),
                      ('admin' === c.role || 'super-admin' === c.role) &&
                        Object(n.jsx)(g.a, {
                          className: a.editButton,
                          variant: 'outlined',
                          color: 'inherit',
                          startIcon: Object(n.jsx)(rn.a, {}),
                          size: 'small',
                          onClick: p,
                          children: 'Izmeni',
                        }),
                    ],
                  }),
                  Object(n.jsx)(f.a, {
                    variant: 'h5',
                    style: { marginLeft: 1, marginTop: 5 },
                    children: 'Posao Odra\u0111en',
                  }),
                  Object(n.jsx)(f.a, {
                    variant: 'body2',
                    style: { marginLeft: 1, maxWidth: 600 },
                    children: t.workDone,
                  }),
                  Object(n.jsx)(f.a, {
                    variant: 'h5',
                    className: a.note,
                    style: {
                      marginLeft: 1,
                      marginTop: 5,
                      textDecoration: 'underline',
                    },
                    children: 'Napomena',
                  }),
                  Object(n.jsx)(f.a, {
                    variant: 'body2',
                    style: { marginLeft: 1, marginBottom: 10, maxWidth: 600 },
                    children: t.note,
                  }),
                  ('admin' === c.role || 'super-admin' === c.role) &&
                    Object(n.jsxs)(f.a, {
                      variant: 'body1',
                      style: { marginLeft: 1, marginTop: 10 },
                      children: [
                        'Napla\u0107eno:',
                        ' ',
                        Object(n.jsxs)('span', {
                          className: a.charged,
                          children: [t.charged, '.00 km'],
                        }),
                      ],
                    }),
                ],
              })
            : Object(n.jsx)(f.a, {
                variant: 'h6',
                style: { margin: '50px 0' },
                children: 'posao nije zaklju\u010den..',
              });
        },
        Lr = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
          };
        }),
        Pr = function (e) {
          var t = Lr(),
            a = Object(d.b)(),
            r = Object(m.a)({
              initialValues: { status: e.status || '' },
              onSubmit:
                e.onSubmit ||
                function (t) {
                  a(gr(e.jobTicketId, t.status));
                },
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                style: { marginLeft: -1 },
                children: 'Promeni Status Radnog Naloga',
              }),
              Object(n.jsx)(Ce.a, {
                component: 'fieldset',
                style: { marginBottom: 5, marginLeft: 5 },
                children: Object(n.jsxs)(ft.a, {
                  'aria-label': 'status',
                  name: 'status',
                  value: r.status,
                  onChange: function (e) {
                    r.setFieldValue('status', e.target.value);
                  },
                  children: [
                    Object(n.jsx)(Et.a, {
                      value: 'to-do',
                      control: Object(n.jsx)(gt.a, {
                        checked: 'to-do' === r.values.status,
                      }),
                      label: 'Na \u010cekanju',
                    }),
                    Object(n.jsx)(Et.a, {
                      value: 'in-progress',
                      control: Object(n.jsx)(gt.a, {
                        checked: 'in-progress' === r.values.status,
                      }),
                      label: 'Rad u toku',
                    }),
                    Object(n.jsx)(Et.a, {
                      value: 'waiting-for-parts',
                      control: Object(n.jsx)(gt.a, {
                        checked: 'waiting-for-parts' === r.values.status,
                      }),
                      label: '\u010cekanje na delove',
                    }),
                    Object(n.jsx)(Et.a, {
                      value: 'finished',
                      control: Object(n.jsx)(gt.a, {
                        checked: 'finished' === r.values.status,
                      }),
                      label: 'Zavr\u0161eno',
                    }),
                  ],
                }),
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                onClick: r.submitForm,
                children: 'Potvrdi',
              }),
            ],
          });
        };
      Pr.propTyps = {
        onSubmit: xt.a.func,
        jobTicketId: xt.a.string,
        status: xt.a.oneOf([
          'to-do',
          'waiting-for-parts',
          'in-progress',
          'finished',
        ]),
      };
      var Ur = Pr,
        Mr = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
            select: { marginBottom: 10 },
            heading: { marginLeft: -1 },
          };
        }),
        Br = function (e) {
          var t = Mr(),
            a = Object(d.b)(),
            r = Object(d.c)(function (e) {
              return e.workOrder;
            }),
            c = ye.b().shape({
              ticket: ye.d().required('Polje Obavezno!'),
              status: ye.d().required('Obavezno ozna\u010diti status!'),
            }),
            i = Object(m.a)({
              initialValues: { ticket: e.ticket || '', status: e.status || '' },
              onSubmit:
                e.onSubmit ||
                function (e) {
                  var t, n, c;
                  a(
                    ((t = r.id),
                    (n = e.ticket),
                    (c = e.status),
                    {
                      type: O.CREATE_JOB_TICKET_SAGA,
                      payload: { workOrderId: t, ticket: n, status: c },
                    })
                  );
                },
              validationSchema: c,
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            onSubmit: i.handleSubmit,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                className: t.heading,
                children: e.heading || 'Otvori Radni Nalog',
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                name: 'ticket',
                label: 'Zadatak',
                multiline: !0,
                rows: 2,
                onChange: i.handleChange,
                value: i.values.ticket,
                helperText: i.errors.ticket,
                error: i.errors.ticket,
              }),
              Object(n.jsxs)(Ce.a, {
                className: t.formControl,
                children: [
                  Object(n.jsx)(Se.a, {
                    htmlFor: 'status-select',
                    children: 'Status Naloga',
                  }),
                  Object(n.jsxs)(Ne.a, {
                    native: !0,
                    className: t.select,
                    onChange: function (e) {
                      var t = e.target.value;
                      i.setFieldValue('status', t);
                    },
                    inputProps: { id: 'status-select' },
                    children: [
                      Object(n.jsx)('option', {
                        'aria-label': 'None',
                        value: '',
                      }),
                      Object(n.jsx)('option', {
                        value: 'to-do',
                        children: 'Na \u010cekanju',
                      }),
                      Object(n.jsx)('option', {
                        value: 'in-progress',
                        children: 'U Radu',
                      }),
                      Object(n.jsx)('option', {
                        value: 'waiting-for-parts',
                        children: '\u010cekanje Na Delove',
                      }),
                      Object(n.jsx)('option', {
                        value: 'finished',
                        children: 'Zavr\u0161eno',
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                disabled: !i.dirty || !i.isValid,
                color: 'primary',
                onClick: i.submitForm,
                children: 'Potvrdi',
              }),
            ],
          });
        };
      Br.propTyps = {
        onSubmit: xt.a.func,
        heading: xt.a.string,
        status: xt.a.oneOf([
          'to-do',
          'waiting-for-parts',
          'in-progress',
          'finished',
        ]),
        ticket: xt.a.string,
      };
      var zr = Br,
        Yr = Object(h.a)(function (e) {
          return {
            header: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            heading: { marginTop: 20 },
            headingIcon: {
              position: 'relative',
              marginLeft: 3,
              transform: 'rotate(-100deg)',
            },
            ticketContainer: {
              marginTop: 10,
              display: 'flex',
              flexWrap: 'wrap',
              '@media screen and (max-width:900px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            },
            ticketCard: {
              maxWidth: 345,
              minWidth: 300,
              marginRight: 10,
              marginBottom: 10,
              color: '#fff',
              '@media screen and (max-width:900px)': {
                marginRight: 0,
                marginBottom: 10,
                maxWidth: '100%',
                width: '100%',
              },
            },
            cardButton: { color: '#fff' },
          };
        }),
        Wr = function (e) {
          var t = e.jobTickets,
            a = Yr(),
            c = Object(d.c)(function (e) {
              return e.admin;
            }),
            i = Object(d.b)(),
            o = Object(r.useState)(!1),
            s = Object(R.a)(o, 2),
            l = s[0],
            u = s[1],
            p = Object(r.useState)({}),
            j = Object(R.a)(p, 2),
            b = j[0],
            m = j[1],
            O = Object(r.useState)(!1),
            h = Object(R.a)(O, 2),
            x = h[0],
            E = h[1],
            v = function (e) {
              m(e), E(!x);
            },
            A = Object(r.useState)(''),
            y = Object(R.a)(A, 2),
            _ = y[0],
            C = y[1],
            S = function (e) {
              m(e || {}), u(!l);
            };
          return Object(n.jsxs)('section', {
            children: [
              Object(n.jsx)(Be, {
                open: x,
                onClose: v,
                children: Object(n.jsx)(Ur, { jobTicketId: b.id, status: _ }),
              }),
              Object(n.jsx)(Be, {
                open: l,
                onClose: S,
                children: Object(n.jsx)(zr, {
                  ticket: b.ticket,
                  status: _,
                  onSubmit: function (e) {
                    i(gr(b.id, e.status, e.ticket));
                  },
                  heading: 'Izmeni Radni Nalog',
                }),
              }),
              Object(n.jsx)(f.a, {
                className: a.heading,
                variant: 'h3',
                children: 'Radni Nalozi',
              }),
              t &&
                !t[0] &&
                Object(n.jsx)(f.a, {
                  variant: 'body1',
                  children: 'Nema radnih naloga..',
                }),
              t &&
                t[0] &&
                Object(n.jsx)('div', {
                  className: a.ticketContainer,
                  children: t.map(function (e) {
                    return Object(n.jsxs)(
                      pt.a,
                      {
                        className: a.ticketCard,
                        style:
                          'in-progress' === e.status
                            ? { background: 'rgb(75, 149, 231)' }
                            : 'finished' === e.status
                            ? { background: '#5FC0B4' }
                            : { background: '#FFa820' },
                        children: [
                          Object(n.jsxs)(jt.a, {
                            children: [
                              Object(n.jsxs)('div', {
                                className: a.header,
                                children: [
                                  Object(n.jsxs)(f.a, {
                                    gutterBottom: !0,
                                    variant: 'h5',
                                    component: 'h2',
                                    children: [
                                      xr(e.status),
                                      Object(n.jsx)(hr.a, {
                                        className: a.headingIcon,
                                      }),
                                    ],
                                  }),
                                  ('super-admin' === c.role ||
                                    'admin' === c.role) &&
                                    Object(n.jsx)(g.a, {
                                      size: 'small',
                                      color: 'inherit',
                                      className: a.cardButton,
                                      startIcon: Object(n.jsx)(rn.a, {}),
                                      variant: 'outlined',
                                      onClick: function () {
                                        return S(e);
                                      },
                                      children: 'Izmeni',
                                    }),
                                ],
                              }),
                              Object(n.jsx)(f.a, {
                                variant: 'body2',
                                component: 'p',
                                children: e.ticket,
                              }),
                            ],
                          }),
                          Object(n.jsx)(bt.a, {
                            children: Object(n.jsx)(g.a, {
                              size: 'small',
                              color: 'inherit',
                              className: a.cardButton,
                              onClick: function () {
                                C(e.status), v(e);
                              },
                              children: 'Promeni status naloga',
                            }),
                          }),
                        ],
                      },
                      e.id
                    );
                  }),
                }),
            ],
          });
        },
        Fr = Object(h.a)(function (e) {
          return {
            attention: { color: e.palette.primary.dark },
            section: { marginTop: 15, paddingTop: 15 },
            remarksText: { marginLeft: 10, maxWidth: 600 },
          };
        }),
        Kr = function (e) {
          var t = e.reception,
            a = Fr();
          return t
            ? Object(n.jsxs)('section', {
                className: a.section,
                children: [
                  Object(n.jsxs)(f.a, {
                    variant: 'h4',
                    component: 'h3',
                    children: [' ', 'Prijem'],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Automobil primio:',
                      ' ',
                      Object(n.jsxs)('span', {
                        className: a.attention,
                        children: [' ', t.adminRecived],
                      }),
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    variant: 'body1',
                    children: [
                      'Kilometra\u017ea:',
                      ' ',
                      Object(n.jsx)('span', {
                        className: a.attention,
                        children: t.milage,
                      }),
                    ],
                  }),
                  Object(n.jsxs)(f.a, {
                    children: [
                      'O\u0161te\u0107enja na automobilu:',
                      ' ',
                      Object(n.jsx)('span', {
                        className: a.attention,
                        children: t.carDamage ? t.carDamage : '-',
                      }),
                    ],
                  }),
                  Object(n.jsx)(f.a, {
                    variant: 'body1',
                    style: { textDecoration: 'underline' },
                    children: 'Klijent se \u017eali na:',
                  }),
                  Object(n.jsx)(f.a, {
                    variant: 'body2',
                    className: a.remarksText,
                    children: t.ownerRemarks,
                  }),
                ],
              })
            : Object(n.jsx)(f.a, {
                style: { marginTop: 20 },
                variant: 'h5',
                children: 'Prijem nije obavljen.',
              });
        },
        Vr = Object(h.a)(function (e) {
          return {
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 400,
            },
            textField: { width: '100%', marginBottom: 10 },
          };
        }),
        Hr = function (e) {
          var t = Vr(),
            a = Object(d.b)(),
            r = Object(d.c)(function (e) {
              return e.workOrder;
            }),
            c = ye.b().shape({
              ownerRemarks: ye.d().required('Polje Obavezno!'),
              milage: ye.a().required('Polje Obavezno!'),
            }),
            i = Object(m.a)({
              initialValues: {
                ownerRemarks: e.ownerRemarks || '',
                milage: e.milage || 1e5,
                carDamage: e.carDamage || '',
              },
              onSubmit:
                e.onSubmit ||
                function (e) {
                  var t, n, c, i;
                  a(
                    ((t = r.id),
                    (n = e.carDamage),
                    (c = e.ownerRemarks),
                    (i = e.milage),
                    {
                      type: O.CREATE_CAR_RECEPTION_SAGA,
                      payload: {
                        workOrderId: t,
                        carDamage: n,
                        ownerRemarks: c,
                        milage: i,
                      },
                    })
                  );
                },
              validationSchema: c,
            });
          return Object(n.jsxs)('form', {
            className: t.form,
            onSubmit: i.handleSubmit,
            children: [
              Object(n.jsx)(f.a, {
                variant: 'h4',
                component: 'h3',
                style: { marginLeft: -1 },
                children: e.heading || 'Napravi Prijem',
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                name: 'ownerRemarks',
                label: 'Vlasnik automobila se \u017eali na',
                value: i.values.ownerRemarks,
                onChange: i.handleChange,
                helperText: i.errors.ownerRemarks,
                error: !!i.errors.ownerRemarks,
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                name: 'milage',
                label: 'Kilometra\u017ea',
                type: 'number',
                inputProps: { step: 1e3 },
                onChange: i.handleChange,
                value: i.values.milage,
                helperText: i.errors.milage,
                error: !!i.errors.milage,
              }),
              Object(n.jsx)(E.a, {
                className: t.textField,
                name: 'carDamage',
                label: 'O\u0161te\u0107enja na automobilu',
                onChange: i.handleChange,
                value: i.values.carDamage,
              }),
              Object(n.jsx)(g.a, {
                variant: 'contained',
                color: 'primary',
                disabled: !i.dirty || !i.isValid,
                onClick: i.submitForm,
                children: 'Potvrdi',
              }),
            ],
          });
        },
        Jr = Object(h.a)(function (e) {
          return {
            createButtonsContainer: {
              display: 'flex',
              position: 'relative',
              top: -25,
            },
            createButton: {
              background: e.palette.warning.main,
              color: '#fff',
              '&:hover': { background: e.palette.warning.light },
              '&:not(:last-child)': { marginRight: 5 },
            },
            buttonSuccess: {
              color: '#fff',
              background: e.palette.primary.dark,
              '&:hover': { background: e.palette.primary.light },
            },
          };
        }),
        Xr = function () {
          var e = Jr(),
            t = Object(d.b)(),
            a = Object(j.h)().id,
            c = Object(d.c)(function (e) {
              return e.workOrder;
            }),
            i = Object(r.useState)(!1),
            o = Object(R.a)(i, 2),
            s = o[0],
            l = o[1],
            u = function () {
              l(!s);
            },
            p = Object(r.useState)(!1),
            b = Object(R.a)(p, 2),
            m = b[0],
            h = b[1],
            x = function () {
              h(!m);
            },
            f = Object(r.useState)(!1),
            E = Object(R.a)(f, 2),
            v = E[0],
            A = E[1],
            _ = function () {
              A(!v);
            },
            C = Object(r.useState)(!1),
            S = Object(R.a)(C, 2),
            N = S[0],
            T = S[1],
            I = function () {
              T(!N);
            };
          return (
            Object(r.useEffect)(
              function () {
                var e;
                t(
                  ((e = a), { type: O.GET_WORK_ORDER_SAGA, payload: { id: e } })
                );
              },
              [t, a]
            ),
            Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsxs)('div', {
                  className: e.createButtonsContainer,
                  children: [
                    Object(n.jsx)(Be, {
                      open: s,
                      onClose: u,
                      children: Object(n.jsx)(Hr, {}),
                    }),
                    Object(n.jsx)(Be, {
                      open: m,
                      onClose: x,
                      children: Object(n.jsx)(Rr, {}),
                    }),
                    Object(n.jsx)(Be, {
                      open: v,
                      onClose: _,
                      children: Object(n.jsx)(zr, {}),
                    }),
                    Object(n.jsx)(Be, {
                      open: N,
                      onClose: I,
                      children: Object(n.jsx)(Gr, {}),
                    }),
                    Object(n.jsx)(g.a, {
                      className: e.createButton,
                      startIcon: Object(n.jsx)(ge.a, {}),
                      size: 'small',
                      variant: 'contained',
                      color: 'inherit',
                      onClick: u,
                      disabled: !!c.carReception,
                      children: 'Prijem',
                    }),
                    Object(n.jsx)(g.a, {
                      className: e.createButton,
                      startIcon: Object(n.jsx)(ge.a, {}),
                      size: 'small',
                      variant: 'contained',
                      color: 'inherit',
                      onClick: x,
                      disabled: !!c.carExam,
                      children: 'Pregled',
                    }),
                    Object(n.jsx)(g.a, {
                      className: e.createButton,
                      startIcon: Object(n.jsx)(ge.a, {}),
                      size: 'small',
                      variant: 'contained',
                      color: 'inherit',
                      onClick: _,
                      disabled: !!c.jobConclusion,
                      children: 'Radni Nalog',
                    }),
                    Object(n.jsx)(g.a, {
                      className: e.buttonSuccess,
                      size: 'small',
                      variant: 'contained',
                      onClick: I,
                      disabled: !!c.jobConclusion,
                      children: 'Zaklju\u010di Servisni Nalog',
                    }),
                  ],
                }),
                Object(n.jsx)(Sr, { car: c.car }),
                Object(n.jsx)(Kr, { reception: c.carReception }),
                Object(n.jsx)(Ir, { exam: c.carExam }),
                Object(n.jsx)(Wr, { jobTickets: c.jobTickets }),
                Object(n.jsx)(wr, { jobConclusion: c.jobConclusion }),
                Object(n.jsx)(y, {}),
                Object(n.jsx)($e, {}),
                Object(n.jsx)(Qe, {}),
              ],
            })
          );
        },
        qr = a.p + 'build/static/media/blueNetwork.5a06aeb6.png',
        Zr = Object(h.a)(function (e) {
          return {
            body: { position: 'relative' },
            container: { padding: '20px 0', width: '90%' },
            bckImg: {
              position: 'absolute',
              height: '170vh',
              width: '100vw',
              right: '-35vw',
              top: '-69vh',
              zIndex: -1,
              '@media only screen and (max-width: 900px)': { display: 'none' },
            },
          };
        }),
        $r = function () {
          var e = Zr(),
            t = Object(j.h)().id;
          return Object(n.jsxs)('div', {
            className: e.body,
            children: [
              Object(n.jsx)('img', {
                className: e.bckImg,
                src: qr,
                alt: 'background network dots',
              }),
              Object(n.jsxs)(x.a, {
                children: [
                  Object(n.jsx)(Pt, {
                    breadcrums: [
                      { name: 'Servisni Nalozi', path: '/servisni-nalozi' },
                      {
                        name: 'Nalog '.concat(t.slice(-9)),
                        path: '/servisni-nalozi/'.concat(t),
                      },
                    ],
                    children: 'Servisni Nalog',
                  }),
                  Object(n.jsx)(Xr, {}),
                ],
              }),
            ],
          });
        },
        Qr = Rn(),
        ec = Object(h.a)(function (e) {
          return {
            container: {
              background: '#fff',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              outline: 'none',
              padding: '35px 50px',
              '&:fokus': { outline: 'none' },
            },
            textInput: { width: 400, marginBottom: 3 },
          };
        }),
        tc = function (e) {
          var t = ec(),
            a = Object(d.b)(),
            i = Object(d.c)(function (e) {
              return e.carSuggestions;
            }),
            o = Object(m.a)({
              initialValues: { registration: '' },
              onSubmit: function (e) {
                var t;
                a(
                  ((t = e.registration),
                  {
                    type: O.CREATE_WORK_ORDERS_SAGA,
                    payload: { carRegistration: t },
                  })
                );
              },
            });
          return (
            Object(r.useEffect)(
              function () {
                '' !== o.values.registration &&
                  Qr(
                    function () {
                      return a(Nn(o.values.registration));
                    },
                    700,
                    function () {
                      return a(Sn());
                    }
                  );
              },
              [a, o.values.registration]
            ),
            Object(n.jsx)(v.a, {
              onClose: e.onClose,
              open: e.open,
              children: Object(n.jsxs)('div', {
                className: t.container,
                children: [
                  Object(n.jsx)(f.a, {
                    variant: 'h4',
                    style: { marginBottom: 15 },
                    children: 'Novi Servisni Nalog',
                  }),
                  Object(n.jsxs)('form', {
                    style: {
                      marginBottom: 16,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    },
                    onSubmit: o.handleSubmit,
                    children: [
                      Object(n.jsx)(yn.a, {
                        open: i.open,
                        onOpen: function () {
                          a(_n());
                        },
                        onClose: function () {
                          a(Cn());
                        },
                        options: i.cars,
                        getOptionSelected: function (e, t) {
                          return e.registration === t.registration;
                        },
                        getOptionLabel: function (e) {
                          return ''.concat(e.registration);
                        },
                        loading: i.loading,
                        onInputChange: function (e, t) {
                          o.setFieldValue('registration', t);
                        },
                        renderOption: function (e) {
                          return Object(n.jsxs)(c.a.Fragment, {
                            children: [
                              e.registration,
                              ' : ',
                              e.carBrand,
                              ' ',
                              e.carModel,
                              ' ',
                              e.productionYear,
                            ],
                          });
                        },
                        renderInput: function (e) {
                          return Object(n.jsx)(
                            E.a,
                            Object(S.a)(
                              Object(S.a)({}, e),
                              {},
                              {
                                value: o.values.registration,
                                onChange: o.handleChange,
                                className: t.textInput,
                                label: 'registracija automobila',
                                variant: 'outlined',
                                name: 'registration',
                                id: 'registration',
                                InputProps: Object(S.a)(
                                  Object(S.a)({}, e.InputProps),
                                  {},
                                  {
                                    endAdornment: Object(n.jsxs)(c.a.Fragment, {
                                      children: [
                                        i.loading
                                          ? Object(n.jsx)(A.a, {
                                              color: 'inherit',
                                              size: 20,
                                            })
                                          : null,
                                        e.InputProps.endAdornment,
                                      ],
                                    }),
                                  }
                                ),
                              }
                            )
                          );
                        },
                      }),
                      Object(n.jsx)(g.a, {
                        variant: 'contained',
                        color: 'primary',
                        size: 'medium',
                        style: { marginTop: 5 },
                        onClick: o.submitForm,
                        children: 'Potvrdi',
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        ac = a(789),
        nc = a(785),
        rc = a(786),
        cc = a(787),
        ic = a(788),
        oc = a(374),
        sc = a.n(oc),
        lc = a(372),
        uc = a.n(lc),
        dc = a(373),
        pc = a.n(dc),
        jc = Object(h.a)(function (e) {
          return {
            loadMoreBtn: {
              textAlign: 'center',
              margin: '50px auto',
              padding: '12px 90px',
              fontSize: 18,
              background: e.palette.primary.light,
              borderRadius: 15,
              border: 'none',
              color: '#fff',
              fontWeight: 600,
              display: 'block',
              '&:hover': { background: e.palette.primary.main },
            },
            card: {
              padding: '30px 20px',
              height: '100%',
              marginBottom: 50,
              borderRadius: 5,
            },
            cardHeader: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '90%',
            },
            headerLink: {
              color: '#fff',
              textDecoration: 'none',
              height: 36,
              width: 250,
              borderRadius: 5,
              background: e.palette.primary.light,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              marginTop: 10,
              marginRight: 5,
              boxShadow:
                '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              transition:
                'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              '&:hover': {
                background: 'rgba(21, 86, 158,.85)',
                boxShadow:
                  '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
              },
              '&:active, &:visited,  &:link': { textDecoration: 'none' },
            },
            cardContent: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            },
            iconIncopmlete: {
              fontSize: 50,
              color: e.palette.success.light,
              margin: '0px 20px 0 0',
            },
            iconDone: {
              fontSize: 50,
              color: e.palette.info.light,
              margin: '0px 20px 0 0',
            },
            link: {
              textDecoration: 'none',
              '&:active, &:visited, &:hover, &:link': {
                textDecoration: 'none',
              },
            },
            date: { color: e.palette.primary.light, fontSize: 20 },
            innerContentContainer: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              margin: '30px 0',
              width: '100%',
              padding: '0 70px',
              '@media screen and (max-width: 900px)': { padding: '0' },
            },
            innerCard: {
              padding: '30px 45px',
              width: '100%',
              background: '#ccc',
              borderRadius: 5,
              color: '#fff',
              boxShadow: '2px 4px 5px rgba(0,0,0,0.15)',
              '@media screen and (max-width: 900px)': { padding: '20px 35px' },
              '&:not(:last-child)': { marginBottom: '10px' },
            },
            innerCardHeading: {
              fontSize: 28,
              fontWeight: 600,
              alignContent: 'center',
              '&:not(:last-child)': { marginBottom: 20 },
            },
            carReception: {
              background:
                'linear-gradient(90deg, rgba(61,164,237,1) 1%,rgba(10,197,232,1)  100%)',
            },
            carExam: {
              background:
                'linear-gradient(90deg, rgba(163,116,255,1) 0%, rgba(184,130,254,1) 100%)',
            },
            jobTickets: {
              background:
                'linear-gradient(90deg, rgba(26,175,145,1) 1%, rgba(97,225,182,1) 90%)',
            },
            jobConclusion: {
              background:
                'linear-gradient(90deg, rgba(225,161,50,1) 1%, rgba(243,188,69,1) 100%)',
            },
            innercardIcon: {
              fontSize: 34,
              color: '#fff',
              position: 'relative',
              top: 7,
              marginRight: 7,
            },
            bigInnerText: {
              fontWeight: 300,
              color: e.palette.text.primary,
              backgroundColor: '#fff',
              marginTop: 3,
              padding: '15px 15px',
              borderRadius: 5,
            },
            jobTicketsContainer: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'wrap',
              '@media screen and (max-width: 900px)': {
                flexDirection: 'column',
              },
            },
            jobTicket: {
              background: '#fff',
              borderRadius: 3,
              padding: '20px 35px',
              color: e.palette.text.primary,
              margin: '0 10px 10px 0',
              width: 'auto',
              '@media screen and (max-width: 900px)': {
                margin: '0 0 10px 0',
                width: '100%',
              },
            },
            jobTicketStatus: {
              color: '#fff',
              display: 'inline-flex',
              padding: '7px 14px',
              borderRadius: 5,
              marginBottom: 15,
            },
            jobTicketStatusSuccess: { background: e.palette.success.light },
            jobTicketStatusInfo: { background: e.palette.warning.light },
          };
        }),
        bc = function () {
          var e = jc(),
            t = Object(d.c)(function (e) {
              return e.workOrders;
            }),
            a = Object(d.c)(function (e) {
              return e.admin;
            }),
            i = Object(d.b)(),
            o = Object(r.useState)(1),
            s = Object(R.a)(o, 2),
            l = s[0],
            u = s[1],
            j = Object(r.useState)(!1),
            b = Object(R.a)(j, 2),
            m = b[0],
            h = b[1];
          Object(r.useEffect)(
            function () {
              i(_r());
            },
            [i]
          ),
            Object(r.useEffect)(
              function () {
                i(_r()), u(1);
              },
              [i, m]
            ),
            Object(r.useEffect)(
              function () {
                i(
                  (function (e, t, a, n) {
                    return {
                      type: O.GET_WORK_ORDERS_SAGA,
                      payload: { page: e, limit: t, search: a, completed: n },
                    };
                  })(l, 10, '', m)
                );
              },
              [i, l, m]
            );
          var x = Object(r.useState)(''),
            E = Object(R.a)(x, 2),
            v = E[0],
            y = E[1],
            _ = function (e) {
              y('string' !== typeof e ? '' : e || '');
            },
            C = t.workOrders.map(function (t) {
              return Object(n.jsxs)(
                Mn.a,
                {
                  className: e.card,
                  style: { marginBottom: 20 },
                  children: [
                    Object(n.jsx)(zn.a, {
                      expandIcon: Object(n.jsx)(uc.a, {}),
                      children: Object(n.jsxs)('div', {
                        className: e.cardHeader,
                        children: [
                          t.completed
                            ? Object(n.jsx)(nc.a, { className: e.iconDone })
                            : Object(n.jsx)(rc.a, {
                                className: e.iconIncopmlete,
                              }),
                          Object(n.jsxs)('div', {
                            className: e.cardContent,
                            children: [
                              Object(n.jsxs)(f.a, {
                                variant: 'h5',
                                children: [
                                  'Servisni Nalog Otvoren:',
                                  ' ',
                                  Object(n.jsx)('span', {
                                    className: e.date,
                                    children: ut()(t.createdAt).format(
                                      'DD.MM.YYYY. (HH:mm)'
                                    ),
                                  }),
                                ],
                              }),
                              Object(n.jsxs)(f.a, {
                                variant: 'body1',
                                children: [
                                  'Automobil:',
                                  ' ',
                                  Object(n.jsxs)('span', {
                                    className: e.span,
                                    children: [
                                      t.car.carBrand,
                                      ' ',
                                      t.car.carModel,
                                    ],
                                  }),
                                ],
                              }),
                              Object(n.jsxs)('div', {
                                style: {
                                  display: 'flex',
                                  alignItems: 'flex-end',
                                },
                                children: [
                                  Object(n.jsx)(p.b, {
                                    to: '/servisni-nalozi/'.concat(t.id),
                                    className: e.headerLink,
                                    children: 'U\u0111i u Nalog',
                                  }),
                                  ('admin' === a.role ||
                                    'super-admin' === a.role) &&
                                    Object(n.jsx)(g.a, {
                                      color: 'secondary',
                                      variant: 'contained',
                                      onClick: function (e) {
                                        e.stopPropagation(), _(t.id);
                                      },
                                      children: Object(n.jsx)(ve.a, {}),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsx)(Bn.a, {
                      children: Object(n.jsxs)('div', {
                        className: e.innerContentContainer,
                        children: [
                          Object(n.jsxs)('div', {
                            className: ''
                              .concat(e.innerCard, ' ')
                              .concat(e.carReception),
                            style: t.carReception
                              ? {}
                              : { padding: '20px 35px', marginBottom: 6 },
                            children: [
                              Object(n.jsxs)(f.a, {
                                variant: 'h4',
                                className: e.innerCardHeading,
                                style: t.carExam
                                  ? {}
                                  : { fontSize: 20, marginBottom: 0 },
                                children: [
                                  Object(n.jsx)(cc.a, {
                                    className: e.innercardIcon,
                                    style: t.carExam
                                      ? {}
                                      : { fontSize: 24, top: 3 },
                                  }),
                                  t.carReception
                                    ? 'Prijem obavio: '.concat(
                                        t.carReception.adminRecived
                                      )
                                    : 'Prijem jo\u0161 nije obavljen.',
                                ],
                              }),
                              t.carReception &&
                                Object(n.jsxs)(n.Fragment, {
                                  children: [
                                    Object(n.jsx)(f.a, {
                                      variant: 'h6',
                                      component: 'p',
                                      style: { marginLeft: 4 },
                                      children: 'Vlasnik se \u017eali na:',
                                    }),
                                    Object(n.jsx)(f.a, {
                                      variant: 'body2',
                                      className: e.bigInnerText,
                                      children: t.carReception.ownerRemarks,
                                    }),
                                    Object(n.jsx)(f.a, {
                                      variant: 'h6',
                                      component: 'p',
                                      style: { marginLeft: 4, marginTop: 10 },
                                      children:
                                        'O\u0161te\u0107enja na automobilu:',
                                    }),
                                    Object(n.jsx)(f.a, {
                                      variant: 'body2',
                                      className: e.bigInnerText,
                                      children: t.carReception.carDamage,
                                    }),
                                    Object(n.jsxs)(f.a, {
                                      variant: 'h6',
                                      component: 'p',
                                      style: { fontWeight: 100, marginTop: 25 },
                                      children: [
                                        'Kilometra\u017ea: ',
                                        t.carReception.milage,
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          Object(n.jsxs)('div', {
                            className: ''
                              .concat(e.innerCard, ' ')
                              .concat(e.carExam),
                            style: t.carExam
                              ? {}
                              : { padding: '20px 35px', marginBottom: 6 },
                            children: [
                              Object(n.jsxs)(f.a, {
                                variant: 'h5',
                                className: e.innerCardHeading,
                                style: t.carExam
                                  ? { marginBottom: 5 }
                                  : { fontSize: 20, marginBottom: 0 },
                                children: [
                                  Object(n.jsx)(ic.a, {
                                    className: e.innercardIcon,
                                    style: t.carExam
                                      ? {}
                                      : { fontSize: 24, top: 3 },
                                  }),
                                  t.carExam
                                    ? 'Pregled'
                                    : 'Pregled jo\u0161 nije obavljen.',
                                ],
                              }),
                              t.carExam &&
                                Object(n.jsx)(f.a, {
                                  variant: 'body2',
                                  className: e.bigInnerText,
                                  children: t.carExam.examConclusion,
                                }),
                            ],
                          }),
                          Object(n.jsxs)('div', {
                            className: ''
                              .concat(e.innerCard, ' ')
                              .concat(e.jobTickets),
                            style: (
                              null === t || void 0 === t
                                ? void 0
                                : t.jobTickets[0]
                            )
                              ? {}
                              : { padding: '20px 35px', marginBottom: 6 },
                            children: [
                              Object(n.jsxs)(f.a, {
                                variant: 'h5',
                                className: e.innerCardHeading,
                                style: (
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.jobTickets[0]
                                )
                                  ? {}
                                  : { fontSize: 20, marginBottom: 0 },
                                children: [
                                  Object(n.jsx)(hr.a, {
                                    className: e.innercardIcon,
                                    style: (
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.jobTickets[0]
                                    )
                                      ? {
                                          fontSize: 22,
                                          top: 3,
                                          transform: 'rotate(90deg)',
                                        }
                                      : { fontSize: 20, top: 3 },
                                  }),
                                  (
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.jobTickets[0]
                                  )
                                    ? 'Radni Nalozi'
                                    : 'Nema trenutnih naloga za rad.',
                                ],
                              }),
                              t.jobTickets[0] &&
                                Object(n.jsx)('div', {
                                  className: e.jobTicketsContainer,
                                  children: t.jobTickets.map(function (t) {
                                    return Object(n.jsxs)(
                                      'div',
                                      {
                                        className: e.jobTicket,
                                        children: [
                                          Object(n.jsxs)(f.a, {
                                            className: ''
                                              .concat(e.jobTicketStatus, ' ')
                                              .concat(
                                                'finished' === t.status
                                                  ? e.jobTicketStatusSuccess
                                                  : e.jobTicketStatusInfo
                                              ),
                                            children: [
                                              Object(n.jsx)(pc.a, {
                                                style: { marginRight: 5 },
                                              }),
                                              ' ',
                                              xr(t.status).toUpperCase(),
                                            ],
                                          }),
                                          Object(n.jsx)(f.a, {
                                            style: {
                                              fontSize: 20,
                                              marginBottom: 0,
                                            },
                                            children: t.ticket,
                                          }),
                                        ],
                                      },
                                      t.id
                                    );
                                  }),
                                }),
                            ],
                          }),
                          Object(n.jsxs)('div', {
                            className: ''
                              .concat(e.innerCard, ' ')
                              .concat(e.jobConclusion),
                            style: t.jobConclusion
                              ? {}
                              : { padding: '20px 35px', marginBottom: 6 },
                            children: [
                              Object(n.jsxs)(f.a, {
                                variant: 'h5',
                                className: e.innerCardHeading,
                                style: { fontSize: 20, marginBottom: 0 },
                                children: [
                                  Object(n.jsx)(sc.a, {
                                    className: e.innercardIcon,
                                    style: { fontSize: 20, top: 3 },
                                  }),
                                  t.jobConclusion
                                    ? 'Posao zaklju\u010den'
                                    : 'Posao nije zaklju\u010den.',
                                ],
                              }),
                              t.jobConclusion &&
                                Object(n.jsx)(c.a.Fragment, {
                                  children: Object(n.jsx)(f.a, {
                                    variant: 'body2',
                                    style: { marginTop: 5 },
                                    children: t.jobConclusion.workDone,
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                t.id
              );
            });
          return Object(n.jsxs)('div', {
            style: { width: '100%', marginTop: 50 },
            children: [
              Object(n.jsx)(tt, {
                id: v,
                open: !!v,
                onClose: _,
                onSubmit: function () {
                  var e;
                  i(
                    ((e = v),
                    {
                      type: O.DELETE_WORK_ORDER_SAGA,
                      payload: { workOrderId: e },
                    })
                  ),
                    _();
                },
              }),
              ('super-admin' === a.role || 'admin' === a.role) &&
                Object(n.jsx)(Et.a, {
                  control: Object(n.jsx)(ac.a, {
                    checked: m,
                    onChange: function () {
                      h(!m);
                    },
                    name: 'checkedB',
                    color: 'primary',
                  }),
                  label: 'Prika\u017ei zaklju\u010dene naloge.',
                }),
              Object(n.jsx)('div', { children: C }),
              t.loading &&
                Object(n.jsx)('div', {
                  style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  },
                  children: Object(n.jsx)(A.a, {}),
                }),
              t.count > t.workOrders.length &&
                Object(n.jsx)(g.a, {
                  className: e.loadMoreBtn,
                  disabled: t.loading,
                  onClick: function () {
                    u(l + 1);
                  },
                  children: 'U\u010ditaj jo\u0161',
                }),
            ],
          });
        },
        mc = function () {
          var e = Object(r.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            c = t[1],
            i = function () {
              c(!a);
            };
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)(tc, { onClose: i, open: a }),
              Object(n.jsx)(g.a, {
                variant: 'outlined',
                startIcon: Object(n.jsx)(ge.a, {}),
                color: 'default',
                style: { background: '#fff' },
                onClick: i,
                children: 'Dodaj Novi Servisni Nalog',
              }),
              Object(n.jsx)(bc, {}),
              Object(n.jsx)(y, {}),
              Object(n.jsx)($e, {}),
              Object(n.jsx)(Qe, {}),
            ],
          });
        },
        Oc = Object(h.a)(function (e) {
          return { heading: { marginTop: 20 } };
        }),
        hc = function () {
          var e = Oc();
          return Object(n.jsxs)(x.a, {
            style: { width: '90%' },
            children: [
              Object(n.jsx)(f.a, {
                className: e.heading,
                variant: 'h2',
                component: 'h1',
                children: 'Servisni Nalozi',
              }),
              Object(n.jsx)(mc, {}),
            ],
          });
        },
        xc =
          (a(682), Object(s.a)({ palette: { primary: { main: '#1e7be2' } } })),
        fc = Object(b.io)('https://gagatest.xyz'),
        Ec = new u.Howl({ src: be }),
        gc = function () {
          var e = Object(d.c)(function (e) {
              return e.admin;
            }),
            t = Object(d.b)();
          return (
            Object(r.useEffect)(
              function () {
                fc.on('NewMessage', function (e) {
                  t(
                    (function (e) {
                      return { type: O.NEW_MESSAGE_SAGA, payload: e };
                    })(e)
                  ),
                    Ec.play();
                }),
                  fc.on('disconnect', function () {
                    fc.removeAllListeners('NewMessage'),
                      fc.removeAllListeners('disconnect');
                  });
              },
              [t]
            ),
            Object(r.useEffect)(
              function () {
                t({ type: O.GET_CURRENT_ADMIN_SAGA });
              },
              [t]
            ),
            Object(n.jsx)(p.a, {
              basename: '/dashboard',
              children: Object(n.jsxs)('div', {
                children: [
                  e.isLoggedIn && Object(n.jsx)(se, {}),
                  'admin' === e.role ||
                    ('super-admin' === e.role && Object(n.jsx)(je, {})),
                  Object(n.jsxs)(j.c, {
                    children: [
                      Object(n.jsx)(N, {
                        exact: !0,
                        path: '/login',
                        children: Object(n.jsx)(C, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        path: '/servisni-nalozi/:id',
                        children: Object(n.jsx)($r, {}),
                      }),
                      Object(n.jsx)(j.a, {
                        path: '/forgot-password',
                        children: 'forgot password',
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic', 'blogger'],
                        exact: !0,
                        path: '/zabranjen-pristup',
                        children: Object(n.jsx)(Un, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        exact: !0,
                        path: '/klijenti',
                        children: Object(n.jsx)(Ln, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        exact: !0,
                        path: '/automobili',
                        children: Object(n.jsx)(Ha, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        exact: !0,
                        path: '/automobili/:id',
                        children: Object(n.jsx)(ta, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        exact: !0,
                        path: '/servisni-nalozi',
                        children: Object(n.jsx)(hc, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        exact: !0,
                        path: '/radni-nalozi',
                        children: Object(n.jsx)(yr, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        exact: !0,
                        path: '/zakazani-termini',
                        children: Object(n.jsx)(Dt, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'mechanic'],
                        exact: !0,
                        path: '/racuni',
                        children: Object(n.jsx)(Or, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'blogger'],
                        exact: !0,
                        path: '/blog',
                        children: Object(n.jsx)(ba, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'blogger'],
                        exact: !0,
                        path: '/blog/create',
                        children: Object(n.jsx)(Da, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'blogger'],
                        exact: !0,
                        path: '/blog/:id/',
                        children: Object(n.jsx)(fe, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin', 'blogger'],
                        exact: !0,
                        path: '/blog/:id/edit',
                        children: Object(n.jsx)(xn, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin'],
                        exact: !0,
                        path: '/poruke',
                        children: Object(n.jsx)(Qn, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin'],
                        exact: !0,
                        path: '/adminpanel',
                        children: Object(n.jsx)(ct, {}),
                      }),
                      Object(n.jsx)(le, {
                        roles: ['super-admin', 'admin'],
                        exact: !0,
                        path: '/',
                        children: Object(n.jsx)(On, {}),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        vc = function () {
          return Object(n.jsx)(l.a, {
            theme: xc,
            children: Object(n.jsx)(gc, {}),
          });
        },
        Ac = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 804))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  r = t.getFCP,
                  c = t.getLCP,
                  i = t.getTTFB;
                a(e), n(e), r(e), c(e), i(e);
              });
        },
        yc = a(99),
        _c = {},
        Cc = [],
        Sc = {
          isLoggedIn: !1,
          firstName: '',
          lastName: '',
          username: '',
          role: '',
          errors: [],
          loading: !1,
        },
        Nc = { count: 1, blogs: [] },
        Rc = { cars: [], count: 1, error: '', loading: !1 },
        Tc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Rc,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case O.GET_CARS:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { count: t.payload.count, cars: Object(er.a)(t.payload.cars) }
              );
            case O.CREATE_CAR:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                {
                  cars: [t.payload].concat(Object(er.a)(e.cars)),
                  count: e.count + 1,
                }
              );
            default:
              return e;
          }
        },
        Ic = { cars: [], loading: !1, error: null, open: !1 },
        kc = a(18),
        Gc = a(3),
        Dc = Gc.GET_CHART_DATA_SUCCESS,
        wc = Gc.GET_CHART_DATA_FAILED,
        Lc = Gc.CHART_DATA_CLEAR_ERROR,
        Pc = { profit: [], expenses: [], profitAndExpenses: [], error: '' },
        Uc = a(3),
        Mc = Uc.GET_CLIENTS,
        Bc = Uc.CLIENTS_ERROR,
        zc = Uc.CLEAR_CLIENTS_ERROR,
        Yc = Uc.GET_ACTIVE_CLIENT,
        Wc = Uc.CLEAR_ACTIVE_CLIENT,
        Fc = Uc.CLIENTS_LOADING,
        Kc = Uc.CLEAR_CLIENTS_LOADING,
        Vc = Uc.CREATE_CLIENT,
        Hc = Uc.SET_CLIENT_CAR_OWNERSHIP,
        Jc = {
          clients: [],
          activeClient: {},
          error: null,
          count: 0,
          loading: !1,
        },
        Xc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Jc,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Mc:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { clients: t.payload.clients, count: t.payload.count }
              );
            case Yc:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { activeClient: t.payload }
              );
            case Wc:
              return Object(S.a)(Object(S.a)({}, e), {}, { activeClient: {} });
            case Vc:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { client: [t.payload].concat(Object(er.a)(e.clients)) }
              );
            case Hc:
              var a = e.clients.map(function (e) {
                if (e.id !== t.payload.userId) return e;
                var a = Object(S.a)(
                    Object(S.a)({}, t.payload),
                    {},
                    { user: void 0, userId: void 0 }
                  ),
                  n = [].concat(Object(er.a)(e.cars), [a]);
                return Object(S.a)(Object(S.a)({}, e), {}, { cars: n });
              });
              return Object(S.a)(Object(S.a)({}, e), {}, { clients: a });
            case Fc:
              return Object(S.a)(Object(S.a)({}, e), {}, { loading: !0 });
            case Kc:
              return Object(S.a)(Object(S.a)({}, e), {}, { loading: !1 });
            case Bc:
              return Object(S.a)(Object(S.a)({}, e), {}, { error: t.payload });
            case zc:
              return Object(S.a)(Object(S.a)({}, e), {}, { error: '' });
            default:
              return e;
          }
        },
        qc = a(3),
        Zc = qc.GET_EXPENSES,
        $c = qc.CREATE_EXPENSE,
        Qc = qc.UPDATE_EXPENSE,
        ei = qc.DELETE_EXPENSE,
        ti = [{ id: '', createdAt: '', description: '', amount: null }],
        ai = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ti,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Zc:
              return Object(er.a)(t.payload);
            case $c:
              return ti;
            case Qc:
              var a = e.map(function (e) {
                return e.id === t.payload.id ? t.payload : e;
              });
              return a;
            case ei:
              var n = e.filter(function (e) {
                return e.id !== t.payload.id;
              });
              return Object(er.a)(n);
            default:
              return e;
          }
        },
        ni = { invoices: [], count: 1 },
        ri = a(3).GET_JOBCONCLUSIONS,
        ci = [],
        ii = [],
        oi = { messages: [], count: 1, unreadMessages: 0 },
        si = a(3),
        li = si.LOADING,
        ui = si.SUCCESS,
        di = si.CLEAR_LOADING,
        pi = si.CLEAR_SUCCESS,
        ji = si.UI_ERROR,
        bi = si.CLEAR_UI_ERROR,
        mi = si.MESSAGE_RECEIVED,
        Oi = si.CLEAR_MESSAGE_RECEIVED,
        hi = {
          loading: !1,
          successMessage: '',
          uiError: '',
          messageRecieved: '',
        },
        xi = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : hi,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case li:
              return Object(S.a)(Object(S.a)({}, e), {}, { loading: !0 });
            case di:
              return Object(S.a)(Object(S.a)({}, e), {}, { loading: !1 });
            case ui:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { successMessage: t.payload }
              );
            case pi:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { successMessage: '' }
              );
            case ji:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { uiError: t.payload }
              );
            case bi:
              return Object(S.a)(Object(S.a)({}, e), {}, { uiError: '' });
            case mi:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { messageRecieved: t.payload }
              );
            case Oi:
              return Object(S.a)(
                Object(S.a)({}, e),
                {},
                { messageRecieved: '' }
              );
            default:
              return e;
          }
        },
        fi = [],
        Ei = { carReception: null, carExam: null, jobTickets: [] },
        gi = { workOrders: [], loading: !1, error: '', count: 1 },
        vi = Object(yc.c)({
          admin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Sc,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.LOADING:
                return Object(S.a)(Object(S.a)({}, e), {}, { loading: !0 });
              case O.LOGIN_SUCCESS:
                return {
                  isLoggedIn: !0,
                  firstName: t.payload.firstName,
                  lastName: t.payload.lastName,
                  username: t.payload.username,
                  role: t.payload.role,
                  errors: [],
                  loading: !1,
                };
              case O.LOGIN_ERROR:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { loading: !1, errors: t.payload.errors }
                );
              case O.GET_CURRENT_ADMIN_SUCCESS:
                return {
                  isLoggedIn: !0,
                  firstName: t.payload.firstName,
                  lastName: t.payload.lastName,
                  username: t.payload.username,
                  role: t.payload.role,
                  errors: [],
                  loading: !1,
                };
              case O.GET_CURRENT_ADMIN_FAIL:
              case O.LOGOUT:
                return Sc;
              default:
                return e;
            }
          },
          chartData: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Pc,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Dc:
                var a = t.payload.profit.map(function (e) {
                    return (e.date = kc(e.date).format('DD-MM-YYYY')), e;
                  }),
                  n = t.payload.expenses.map(function (e) {
                    return (e.date = kc(e.date).format('DD-MM-YYYY')), e;
                  }),
                  r = t.payload.profitAndExpenses.map(function (e) {
                    return (e.date = kc(e.date).format('DD-MM-YYYY')), e;
                  });
                return { profit: a, expenses: n, profitAndExpenses: r };
              case wc:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { error: 'greska pri uzimanju podataka za grafike' }
                );
              case Lc:
                return Object(S.a)(Object(S.a)({}, e), {}, { error: '' });
              default:
                return e;
            }
          },
          expenses: ai,
          clients: Xc,
          jobConclusions: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ci,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ri:
                return Object(er.a)(t.payload);
              default:
                return e;
            }
          },
          UI: xi,
          carSuggestions: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ic,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_CAR_SUGGESTIONS:
                return Object(S.a)(Object(S.a)({}, e), {}, { cars: t.payload });
              case O.CAR_SUGGESTION_OPEN:
                return Object(S.a)(Object(S.a)({}, e), {}, { open: !0 });
              case O.CAR_SUGGESTION_CLOSE:
                return { cars: [], loading: !1, error: null, open: !1 };
              case O.CAR_SUGGESTION_LOADING:
                return Object(S.a)(Object(S.a)({}, e), {}, { loading: !0 });
              case O.CLEAR_CAR_SUGGESTION_LOADING:
                return Object(S.a)(Object(S.a)({}, e), {}, { loading: !1 });
              case O.CAR_SUGGESTION_ERROR:
                return Object(S.a)(
                  Object(S.a)({}, Ic),
                  {},
                  { error: t.payload }
                );
              case O.CLEAR_CAR_SUGGESTION_ERROR:
                return Object(S.a)(Object(S.a)({}, e), {}, { error: null });
              default:
                return e;
            }
          },
          workOrders: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : gi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.CREATE_WORK_ORDERS:
                var a = Object(S.a)(
                  Object(S.a)({}, t.payload),
                  {},
                  { jobTickets: [] }
                );
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { workOrders: [a].concat(Object(er.a)(e.workOrders)) }
                );
              case O.GET_WORK_ORDERS:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  {
                    workOrders: [].concat(
                      Object(er.a)(e.workOrders),
                      Object(er.a)(t.payload.workOrders)
                    ),
                    count: t.payload.count,
                  }
                );
              case O.SET_WORK_ORDERS_LOADING:
                return Object(S.a)(Object(S.a)({}, e), {}, { loading: !0 });
              case O.DELETE_WORK_ORDER:
                var n = e.workOrders.filter(function (e) {
                  return e.id !== t.payload.id;
                });
                return Object(S.a)(Object(S.a)({}, e), {}, { workOrders: n });
              case O.CLEAR_WORK_ORDERS_LOADING:
                return Object(S.a)(Object(S.a)({}, e), {}, { loading: !1 });
              case O.CLEAR_WORK_ORDERS:
                return Object(S.a)(Object(S.a)({}, e), {}, { workOrders: [] });
              default:
                return e;
            }
          },
          workOrder: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ei,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_WORK_ORDER:
                return Object(S.a)({}, t.payload);
              case O.CLEAR_WORK_ORDER:
                return {};
              case O.CREATE_CAR_RECEPTION:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { carReception: t.payload }
                );
              case O.CREATE_CAR_EXAM:
              case O.EDIT_CAR_EXAM:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { carExam: t.payload }
                );
              case O.CREATE_JOB_TICKET:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { jobTickets: [t.payload].concat(Object(er.a)(e.jobTickets)) }
                );
              case O.EDIT_JOB_TICKET:
                var a = e.jobTickets.map(function (e) {
                  return e.id !== t.payload.id ? e : t.payload;
                });
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { jobTickets: Object(er.a)(a) }
                );
              case O.CREATE_JOB_CONCLUSION:
              case O.EDIT_JOB_CONCLUSION:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { jobConclusion: t.payload }
                );
              default:
                return e;
            }
          },
          cars: Tc,
          activeCar: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : _c,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_ACTIVE_CAR:
                return t.payload;
              case O.CREATE_WARRANTY:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { warranties: [t.payload].concat(Object(er.a)(e.warranties)) }
                );
              case O.EDIT_WARRANTY:
                var a = e.warranties.map(function (e) {
                  return e.id === t.payload.id ? t.payload : e;
                });
                return Object(S.a)(Object(S.a)({}, e), {}, { warranties: a });
              case O.DELETE_WARRANTY:
                var n = e.warranties.filter(function (e) {
                  return e.id !== t.payload.id;
                });
                return Object(S.a)(Object(S.a)({}, e), {}, { warranties: n });
              default:
                return e;
            }
          },
          appointments: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Cc,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_APPOINTMENTS:
                return t.payload;
              case O.CREATE_APPOINTMENT:
                return [t.payload].concat(Object(er.a)(e));
              case O.EDIT_APPOINTMENT:
                var a = e.map(function (e) {
                  return e.id === t.payload.id ? t.payload : e;
                });
                return Object(er.a)(a);
              default:
                return e;
            }
          },
          jobTickets: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ii,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_JOB_TICKETS:
                return Object(er.a)(t.payload);
              case O.CREATE_JOB_TICKET:
                return [t.payload].concat(Object(er.a)(e));
              default:
                return e;
            }
          },
          warranties: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : fi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_WARRANTIES:
                return t.payload;
              case O.CREATE_WARRANTY:
                return [t.payload].concat(Object(er.a)(e));
              case O.EDIT_WARRANTY:
                var a = e.map(function (e) {
                  return e.id === t.payload.id ? t.payload : e;
                });
                return a;
              case O.DELETE_WARRANTY:
                var n = e.filter(function (e) {
                  return e.id !== t.payload.id;
                });
                return n;
              default:
                return e;
            }
          },
          blogs: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Nc,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_BLOGS:
                return {
                  count: t.payload.count || 1,
                  blogs: Object(er.a)(t.payload.blogs),
                };
              case O.CREATE_BLOG:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { blogs: [t.payload].concat(Object(er.a)(e.blogs)) }
                );
              case O.EDIT_BLOG:
                var a = e.blogs.map(function (e) {
                  return e.id === t.payload.id ? t.payload : e;
                });
                return Object(S.a)(Object(S.a)({}, e), {}, { blogs: a });
              case O.PUBLISH_BLOG:
                var n = e.blogs.map(function (e) {
                  return e.id === t.payload.id
                    ? Object(S.a)(
                        Object(S.a)({}, e),
                        {},
                        { published: t.payload.published }
                      )
                    : e;
                });
                return Object(S.a)(Object(S.a)({}, e), {}, { blogs: n });
              case O.DELETE_BLOG:
                var r = e.blogs.filter(function (e) {
                  return e.id !== t.payload.id;
                });
                return Object(S.a)(Object(S.a)({}, e), {}, { blogs: r });
              default:
                return e;
            }
          },
          activeBlog: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_ACTIVE_BLOG:
              case O.EDIT_BLOG:
                return t.payload;
              default:
                return e;
            }
          },
          invoices: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ni,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_INVOICES:
                return {
                  invoices: Object(er.a)(t.payload.invoices),
                  count: t.payload.count,
                };
              case O.CREATE_INVOICE:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { invoices: [t.payload].concat(Object(er.a)(e.invoices)) }
                );
              default:
                return e;
            }
          },
          messages: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : oi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.NEW_MESSAGE:
                return {
                  count: e.count,
                  messages: [t.payload].concat(Object(er.a)(e.messages)),
                  unreadMessages: e.unreadMessages + 1,
                };
              case O.GET_MESSAGES:
                return {
                  messages: t.payload.messages,
                  count: t.payload.count,
                  unreadMessages: e.unreadMessages,
                };
              case O.GET_UNREAD_MESSAGES_NUMBER:
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { unreadMessages: t.payload }
                );
              case O.UPDATE_MESSAGE_SEEN:
                var a = e.messages.map(function (e) {
                  return e.id === t.payload.id ? t.payload : e;
                });
                return Object(S.a)(
                  Object(S.a)({}, e),
                  {},
                  { messages: a, unreadMessages: e.unreadMessages - 1 }
                );
              default:
                return e;
            }
          },
          admins: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case O.GET_ADMINS:
                return t.payload;
              case O.CREATE_ADMIN:
                return [t.payload].concat(Object(er.a)(e));
              case O.UPDATE_ADMIN:
                var a = e.map(function (e) {
                  return e.id === t.payload.id ? t.payload : e;
                });
                return a;
              case O.DELETE_ADMIN:
                var n = e.filter(function (e) {
                  return e.id !== t.payload.id;
                });
                return n;
              default:
                return e;
            }
          },
        }),
        Ai = a(375),
        yi = a(5),
        _i = Oa.a.mark(wi),
        Ci = Oa.a.mark(Li),
        Si = Oa.a.mark(Pi),
        Ni = Oa.a.mark(Ui),
        Ri = Oa.a.mark(Mi),
        Ti = Oa.a.mark(Bi),
        Ii = Oa.a.mark(zi),
        ki = Oa.a.mark(Yi),
        Gi = Oa.a.mark(Wi),
        Di = Oa.a.mark(Fi);
      function wi(e) {
        var t;
        return Oa.a.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    '/api/v1/admin?',
                    (e.prev = 1),
                    (e.next = 4),
                    Object(yi.call)(function () {
                      return Ta.a.get('/api/v1/admin?');
                    })
                  );
                case 4:
                  return (
                    (t = e.sent),
                    (e.next = 7),
                    Object(yi.put)({ type: O.GET_ADMINS, payload: t.data.data })
                  );
                case 7:
                  e.next = 13;
                  break;
                case 9:
                  return (
                    (e.prev = 9),
                    (e.t0 = e.catch(1)),
                    (e.next = 13),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri preuzimanju administratora.. Poku\u0161ajte kasnije.',
                    })
                  );
                case 13:
                case 'end':
                  return e.stop();
              }
          },
          _i,
          null,
          [[1, 9]]
        );
      }
      function Li() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_ADMINS_SAGA, wi)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ci);
      }
      function Pi(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (n.prev = 3),
                    (n.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/admin/createAdmin', t);
                    })
                  );
                case 6:
                  return (
                    (a = n.sent),
                    (n.next = 9),
                    Object(yi.put)({
                      type: O.CREATE_ADMIN,
                      payload: a.data.data,
                    })
                  );
                case 9:
                  return (
                    (n.next = 11), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 11:
                  return (
                    (n.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no napravljen novi '.concat(
                        Le(a.data.data.role)
                      ),
                    })
                  );
                case 13:
                  n.next = 21;
                  break;
                case 15:
                  return (
                    (n.prev = 15),
                    (n.t0 = n.catch(3)),
                    (n.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (n.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Do\u0161lo je do gre\u0161ke pri kreiranju novog Administratora',
                    })
                  );
                case 21:
                case 'end':
                  return n.stop();
              }
          },
          Si,
          null,
          [[3, 15]]
        );
      }
      function Ui() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.CREATE_ADMIN_SAGA, Pi)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ni);
      }
      function Mi(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (n.prev = 3),
                    (n.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.patch('/api/v1/admin/'.concat(t.id), t);
                    })
                  );
                case 6:
                  return (
                    (a = n.sent),
                    (n.next = 9),
                    Object(yi.put)({
                      type: O.UPDATE_ADMIN,
                      payload: a.data.data,
                    })
                  );
                case 9:
                  return (
                    (n.next = 11), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 11:
                  return (
                    (n.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload:
                        'Uspe\u0161no napravljene izmena na Administratoru',
                    })
                  );
                case 13:
                  n.next = 21;
                  break;
                case 15:
                  return (
                    (n.prev = 15),
                    (n.t0 = n.catch(3)),
                    (n.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (n.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Do\u0161lo je do gre\u0161ke pri izmenama na Administratoru',
                    })
                  );
                case 21:
                case 'end':
                  return n.stop();
              }
          },
          Ri,
          null,
          [[3, 15]]
        );
      }
      function Bi() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.UPDATE_ADMIN_SAGA, Mi)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ti);
      }
      function zi(e) {
        var t, a, n, r, c;
        return Oa.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (i.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (a = t.id),
                    (n = t.password),
                    (r = t.passwordConfirm),
                    (i.prev = 3),
                    (i.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.patch(
                        '/api/v1/admin/'.concat(a, '/updatePassword'),
                        { password: n, passwordConfirm: r }
                      );
                    })
                  );
                case 6:
                  return (
                    (c = i.sent),
                    (i.next = 9),
                    Object(yi.put)({
                      type: O.UPDATE_ADMIN_PASSWORD,
                      payload: c.data.data,
                    })
                  );
                case 9:
                  return (
                    (i.next = 11), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 11:
                  return (
                    (i.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no izmenjena \u0161ifra.',
                    })
                  );
                case 13:
                  i.next = 21;
                  break;
                case 15:
                  return (
                    (i.prev = 15),
                    (i.t0 = i.catch(3)),
                    (i.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (i.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Do\u0161lo je do gre\u0161ke pri promeni \u0161ifre.',
                    })
                  );
                case 21:
                case 'end':
                  return i.stop();
              }
          },
          Ii,
          null,
          [[3, 15]]
        );
      }
      function Yi() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.UPDATE_ADMIN_PASSWORD_SAGA, zi)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ki);
      }
      function Wi(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload.id),
                    (a.prev = 3),
                    (a.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.delete('/api/v1/admin/'.concat(t));
                    })
                  );
                case 6:
                  return (
                    (a.next = 8),
                    Object(yi.put)({ type: O.DELETE_ADMIN, payload: { id: t } })
                  );
                case 8:
                  return (
                    (a.next = 10), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no obrisan Administrator.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(3)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Do\u0161lo je do gre\u0161ke pri brisanju Administratora.',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          Gi,
          null,
          [[3, 14]]
        );
      }
      function Fi() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.DELETE_ADMIN_SAGA, Wi)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Di);
      }
      var Ki = Oa.a.mark(Zi),
        Vi = Oa.a.mark($i),
        Hi = Oa.a.mark(Qi),
        Ji = Oa.a.mark(eo),
        Xi = Oa.a.mark(to),
        qi = Oa.a.mark(ao);
      function Zi(e) {
        var t, a, n, r;
        return Oa.a.wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = ut()(e.payload.fromDate).format('YYYY-MM-DD')),
                    (a = ut()(e.payload.toDate).format('YYYY-MM-DD')),
                    (n = '/api/v1/appointments/betweenDates?fromDate='
                      .concat(t, '&toDate=')
                      .concat(a)),
                    (c.prev = 5),
                    (c.next = 8),
                    Object(yi.call)(function () {
                      return Ta.a.get(n);
                    })
                  );
                case 8:
                  return (
                    (r = c.sent),
                    (c.next = 11),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 11:
                  return (
                    (c.next = 13),
                    Object(yi.put)({
                      type: O.GET_APPOINTMENTS,
                      payload: r.data.data,
                    })
                  );
                case 13:
                  c.next = 21;
                  break;
                case 15:
                  return (
                    (c.prev = 15),
                    (c.t0 = c.catch(5)),
                    (c.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (c.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri preuzimanju zakazanih termina.',
                    })
                  );
                case 21:
                case 'end':
                  return c.stop();
              }
          },
          Ki,
          null,
          [[5, 15]]
        );
      }
      function $i() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.GET_APPOINTMENTS_SAGA, Zi)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Vi);
      }
      function Qi(e) {
        var t, a, n, r, c, i, o;
        return Oa.a.wrap(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (a = t.name),
                    (n = t.car),
                    (r = t.phoneNumber),
                    (c = t.note),
                    (i = t.datetime),
                    (s.next = 3),
                    Object(yi.put)({ type: O.LOADING })
                  );
                case 3:
                  return (
                    (s.prev = 3),
                    (s.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/appointments', {
                        name: a,
                        car: n,
                        phoneNumber: r,
                        note: c,
                        datetime: i,
                      });
                    })
                  );
                case 6:
                  return (
                    (o = s.sent),
                    (s.next = 9),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (s.next = 11),
                    Object(yi.put)({
                      type: O.CREATE_APPOINTMENT,
                      payload: o.data.data,
                    })
                  );
                case 11:
                  return (
                    (s.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no zakazan terim.',
                    })
                  );
                case 13:
                  s.next = 21;
                  break;
                case 15:
                  return (
                    (s.prev = 15),
                    (s.t0 = s.catch(3)),
                    (s.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (s.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri zakazivanju termina.',
                    })
                  );
                case 21:
                case 'end':
                  return s.stop();
              }
          },
          Hi,
          null,
          [[3, 15]]
        );
      }
      function eo() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_APPOINTMENT_SAGA, Qi)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ji);
      }
      function to(e) {
        var t, a, n, r, c, i, o, s, l;
        return Oa.a.wrap(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (a = t.appointmentId),
                    (n = t.showedUp),
                    (r = t.name),
                    (c = t.car),
                    (i = t.phoneNumber),
                    (o = t.note),
                    (s = t.datetime),
                    (u.next = 3),
                    Object(yi.put)({ type: O.LOADING })
                  );
                case 3:
                  return (
                    (u.prev = 3),
                    (u.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.patch('/api/v1/appointments/'.concat(a), {
                        showedUp: n,
                        name: r,
                        car: c,
                        phoneNumber: i,
                        note: o,
                        datetime: s,
                      });
                    })
                  );
                case 6:
                  return (
                    (l = u.sent),
                    (u.next = 9),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (u.next = 11),
                    Object(yi.put)({
                      type: O.EDIT_APPOINTMENT,
                      payload: l.data.data,
                    })
                  );
                case 11:
                  return (
                    (u.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no.',
                    })
                  );
                case 13:
                  u.next = 21;
                  break;
                case 15:
                  return (
                    (u.prev = 15),
                    (u.t0 = u.catch(3)),
                    (u.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (u.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri izmeni termina.',
                    })
                  );
                case 21:
                case 'end':
                  return u.stop();
              }
          },
          Xi,
          null,
          [[3, 15]]
        );
      }
      function ao() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.EDIT_APPOINTMENT_SAGA, to)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, qi);
      }
      var no = Oa.a.mark(_o),
        ro = Oa.a.mark(Co),
        co = Oa.a.mark(So),
        io = Oa.a.mark(No),
        oo = Oa.a.mark(Ro),
        so = Oa.a.mark(To),
        lo = a(5),
        uo = lo.put,
        po = lo.call,
        jo = lo.takeEvery,
        bo = a(3),
        mo = bo.LOADING,
        Oo = bo.LOGIN_SAGA,
        ho = bo.LOGIN_SUCCESS,
        xo = bo.LOGIN_ERROR,
        fo = bo.GET_CURRENT_ADMIN_FAIL,
        Eo = bo.GET_CURRENT_ADMIN_SAGA,
        go = bo.GET_CURRENT_ADMIN_SUCCESS,
        vo = bo.LOGOUT_SAGA,
        Ao = bo.LOGOUT,
        yo = bo.CLEAR_LOADING;
      function _o(e) {
        var t, a, n, r, c, i, o;
        return Oa.a.wrap(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  return (s.next = 2), uo({ type: mo });
                case 2:
                  return (
                    (s.prev = 2),
                    (s.next = 5),
                    po(function () {
                      return Ta.a.post('/api/v1/admin/login', {
                        username: e.payload.username,
                        password: e.payload.password,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = s.sent),
                    (a = t.data.data.user),
                    (n = a.firstName),
                    (r = a.lastName),
                    (c = a.username),
                    (i = a.role),
                    (s.next = 9),
                    uo({
                      type: ho,
                      payload: {
                        firstName: n,
                        lastName: r,
                        username: c,
                        role: i,
                      },
                    })
                  );
                case 9:
                  s.next = 16;
                  break;
                case 11:
                  return (
                    (s.prev = 11),
                    (s.t0 = s.catch(2)),
                    (o = s.t0.response.data),
                    (s.next = 16),
                    uo({ type: xo, payload: [o] })
                  );
                case 16:
                case 'end':
                  return s.stop();
              }
          },
          no,
          null,
          [[2, 11]]
        );
      }
      function Co() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), jo(Oo, _o);
              case 2:
              case 'end':
                return e.stop();
            }
        }, ro);
      }
      function So() {
        var e, t, a, n, r, c;
        return Oa.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (i.next = 2), uo({ type: mo });
                case 2:
                  return (
                    (i.prev = 2),
                    (i.next = 5),
                    po(function () {
                      return Ta.a.get('/api/v1/admin/getCurrentAdmin');
                    })
                  );
                case 5:
                  return (
                    (e = i.sent),
                    (t = e.data.data),
                    (a = t.username),
                    (n = t.firstName),
                    (r = t.lastName),
                    (c = t.role),
                    (i.next = 9),
                    uo({
                      type: go,
                      payload: {
                        username: a,
                        firstName: n,
                        lastName: r,
                        role: c,
                      },
                    })
                  );
                case 9:
                  return (i.next = 11), uo({ type: yo });
                case 11:
                  i.next = 19;
                  break;
                case 13:
                  return (
                    (i.prev = 13),
                    (i.t0 = i.catch(2)),
                    (i.next = 17),
                    uo({ type: yo })
                  );
                case 17:
                  return (i.next = 19), uo({ type: fo });
                case 19:
                case 'end':
                  return i.stop();
              }
          },
          co,
          null,
          [[2, 13]]
        );
      }
      function No() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), jo(Eo, So);
              case 2:
              case 'end':
                return e.stop();
            }
        }, io);
      }
      function Ro() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), uo({ type: mo });
              case 2:
                return (
                  (e.next = 4),
                  po(function () {
                    return Ta.a.post('/api/v1/admin/logout');
                  })
                );
              case 4:
                return (e.next = 6), uo({ type: yo });
              case 6:
                return (e.next = 8), uo({ type: Ao });
              case 8:
              case 'end':
                return e.stop();
            }
        }, oo);
      }
      function To() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), jo(vo, Ro);
              case 2:
              case 'end':
                return e.stop();
            }
        }, so);
      }
      var Io = Oa.a.mark(zo),
        ko = Oa.a.mark(Yo),
        Go = Oa.a.mark(Wo),
        Do = Oa.a.mark(Fo),
        wo = Oa.a.mark(Ko),
        Lo = Oa.a.mark(Vo),
        Po = Oa.a.mark(Ho),
        Uo = Oa.a.mark(Jo),
        Mo = Oa.a.mark(Xo),
        Bo = Oa.a.mark(qo);
      function zo(e) {
        var t, a, n, r, c, i, o, s;
        return Oa.a.wrap(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  return (l.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (a = t.imageId),
                    (n = t.imageAlt),
                    (r = t.thumbnailId),
                    (c = t.thumbnailAlt),
                    (i = t.title),
                    (o = t.content),
                    (l.prev = 3),
                    (l.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/blog', {
                        imageId: a,
                        imageAlt: n,
                        thumbnailId: r,
                        thumbnailAlt: c,
                        title: i,
                        content: o,
                      });
                    })
                  );
                case 6:
                  return (
                    (s = l.sent),
                    (l.next = 9),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (l.next = 11),
                    Object(yi.put)({
                      type: O.CREATE_BLOG,
                      payload: s.data.data,
                    })
                  );
                case 11:
                  return (
                    (l.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no kreiran blog.',
                    })
                  );
                case 13:
                  l.next = 21;
                  break;
                case 15:
                  return (
                    (l.prev = 15),
                    (l.t0 = l.catch(3)),
                    (l.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (l.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri kreiranju bloga. ',
                    })
                  );
                case 21:
                case 'end':
                  return l.stop();
              }
          },
          Io,
          null,
          [[3, 15]]
        );
      }
      function Yo() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.CREATE_BLOG_SAGA, zo)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ko);
      }
      function Wo(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (t = '/api/v1/blog?'),
                    (n.next = 3),
                    Object(yi.put)({ type: O.LOADING })
                  );
                case 3:
                  return (
                    e.payload.search &&
                      (t += 'search='.concat(e.payload.search, '&')),
                    e.payload.page &&
                      (t += 'page='.concat(e.payload.page, '&')),
                    e.payload.limit &&
                      (t += 'limit='.concat(e.payload.limit, '&')),
                    (n.prev = 6),
                    (n.next = 9),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 9:
                  return (
                    (a = n.sent),
                    (n.next = 12),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 12:
                  return (
                    (n.next = 14),
                    Object(yi.put)({
                      type: O.GET_BLOGS,
                      payload: { count: a.data.count, blogs: a.data.data },
                    })
                  );
                case 14:
                  n.next = 22;
                  break;
                case 16:
                  return (
                    (n.prev = 16),
                    (n.t0 = n.catch(6)),
                    (n.next = 20),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 20:
                  return (
                    (n.next = 22),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri preuzimanju blogova.',
                    })
                  );
                case 22:
                case 'end':
                  return n.stop();
              }
          },
          Go,
          null,
          [[6, 16]]
        );
      }
      function Fo() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_BLOGS_SAGA, Wo)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Do);
      }
      function Ko(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.get('/api/v1/blog/'.concat(e.payload.id));
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({
                      type: O.GET_ACTIVE_BLOG,
                      payload: t.data.data,
                    })
                  );
                case 8:
                  return (
                    (a.next = 10), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 10:
                  a.next = 18;
                  break;
                case 12:
                  return (
                    (a.prev = 12),
                    (a.t0 = a.catch(2)),
                    (a.next = 16),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 16:
                  return (
                    (a.next = 18),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri preuzimanju bloga..',
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          wo,
          null,
          [[2, 12]]
        );
      }
      function Vo() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.GET_ACTIVE_BLOG_SAGA, Ko)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Lo);
      }
      function Ho(e) {
        var t, a, n, r, c, i, o, s, l, u;
        return Oa.a.wrap(
          function (d) {
            for (;;)
              switch ((d.prev = d.next)) {
                case 0:
                  return (d.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (a = t.blogId),
                    (n = t.imageId),
                    (r = t.imageAlt),
                    (c = t.thumbnailId),
                    (i = t.thumbnailAlt),
                    (o = t.title),
                    (s = t.content),
                    (l = t.synopsis),
                    (d.prev = 3),
                    (d.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.put('/api/v1/blog/'.concat(a), {
                        imageId: n,
                        imageAlt: r,
                        thumbnailId: c,
                        thumbnailAlt: i,
                        title: o,
                        content: s,
                        synopsis: l,
                      });
                    })
                  );
                case 6:
                  return (
                    (u = d.sent),
                    (d.next = 9),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (d.next = 11),
                    Object(yi.put)({ type: O.EDIT_BLOG, payload: u.data.data })
                  );
                case 11:
                  return (
                    (d.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no izmenjen blog.',
                    })
                  );
                case 13:
                  d.next = 21;
                  break;
                case 15:
                  return (
                    (d.prev = 15),
                    (d.t0 = d.catch(3)),
                    (d.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (d.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri \u010duvanju izmena bloga. ',
                    })
                  );
                case 21:
                case 'end':
                  return d.stop();
              }
          },
          Po,
          null,
          [[3, 15]]
        );
      }
      function Jo() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.EDIT_BLOG_SAGA, Ho)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Uo);
      }
      function Xo(e) {
        var t, a, n, r;
        return Oa.a.wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (a = t.blogId),
                    (n = t.published),
                    (c.prev = 3),
                    (c.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.patch('/api/v1/blog/'.concat(a, '/publish'), {
                        published: n,
                      });
                    })
                  );
                case 6:
                  return (
                    (r = c.sent),
                    (c.next = 9),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (c.next = 11),
                    Object(yi.put)({
                      type: O.PUBLISH_BLOG,
                      payload: r.data.data,
                    })
                  );
                case 11:
                  return (
                    (c.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no izmenjen blog.',
                    })
                  );
                case 13:
                  c.next = 21;
                  break;
                case 15:
                  return (
                    (c.prev = 15),
                    (c.t0 = c.catch(3)),
                    (c.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (c.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri objavi bloga. ',
                    })
                  );
                case 21:
                case 'end':
                  return c.stop();
              }
          },
          Mo,
          null,
          [[3, 15]]
        );
      }
      function qo() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.PUBLISH_BLOG_SAGA, Xo)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Bo);
      }
      var Zo = Oa.a.mark(Qo),
        $o = Oa.a.mark(es);
      function Qo(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/carExams', {
                        workOrderId: e.payload.workOrderId,
                        examConclusion: e.payload.examConclusion,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.CREATE_CAR_EXAM,
                      payload: t.data.data,
                    })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload:
                        'Uspe\u0161no unesen rezultat pregleda automobila.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri kreiranju pregleda automobila. ',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          Zo,
          null,
          [[2, 14]]
        );
      }
      function es() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_CAR_EXAM_SAGA, Qo)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, $o);
      }
      var ts = Oa.a.mark(ns),
        as = Oa.a.mark(rs);
      function ns(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/carReceptions', {
                        workOrderId: e.payload.workOrderId,
                        ownerRemarks: e.payload.ownerRemarks,
                        carDamage: e.payload.carDamage,
                        milage: e.payload.milage,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.CREATE_CAR_RECEPTION,
                      payload: t.data.data,
                    })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no odra\u0111en prijem automobila.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri kreiranju prijema automobila.',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          ts,
          null,
          [[2, 14]]
        );
      }
      function rs() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_CAR_RECEPTION_SAGA, ns)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, as);
      }
      var cs = Oa.a.mark(js),
        is = Oa.a.mark(bs),
        os = Oa.a.mark(ms),
        ss = Oa.a.mark(Os),
        ls = Oa.a.mark(hs),
        us = Oa.a.mark(xs),
        ds = Oa.a.mark(fs),
        ps = Oa.a.mark(Es);
      function js(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (n.next = 3),
                    Object(yi.put)({ type: O.LOADING })
                  );
                case 3:
                  return (
                    (n.prev = 3),
                    (n.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/cars', {
                        carBrand: t.carBrand,
                        carModel: t.carModel,
                        registration: t.registration,
                        engine: t.engine,
                        milage: t.milage,
                        productionYear: t.productionYear,
                      });
                    })
                  );
                case 6:
                  return (
                    (a = n.sent),
                    (n.next = 9),
                    Object(yi.put)({ type: O.CREATE_CAR, payload: a.data.data })
                  );
                case 9:
                  return (
                    (n.next = 11), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 11:
                  return (
                    (n.next = 13),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'uspesno dodat automobil',
                    })
                  );
                case 13:
                  n.next = 21;
                  break;
                case 15:
                  return (
                    (n.prev = 15),
                    (n.t0 = n.catch(3)),
                    (n.next = 19),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 19:
                  return (
                    (n.next = 21),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'doslo je do greske pri kreiranju novog automobila',
                    })
                  );
                case 21:
                case 'end':
                  return n.stop();
              }
          },
          cs,
          null,
          [[3, 15]]
        );
      }
      function bs() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.CREATE_CAR_SAGA, js)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, is);
      }
      function ms(e) {
        var t, a, n, r, c, i;
        return Oa.a.wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (o.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (o.prev = 3),
                    (o.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/cars', {
                        carBrand: t.carBrand,
                        carModel: t.carModel,
                        registration: t.registration,
                        engine: t.engine,
                        milage: t.milage,
                        productionYear: ut()(t.productionYear).format(
                          'YYYY-MM-DD'
                        ),
                      });
                    })
                  );
                case 6:
                  return (
                    (a = o.sent),
                    (o.next = 9),
                    Object(yi.call)(function () {
                      return Ta.a.patch(
                        '/api/v1/cars/'.concat(a.data.data.id, '/setOwner'),
                        { userId: t.userId }
                      );
                    })
                  );
                case 9:
                  return (
                    (n = o.sent),
                    (o.next = 12),
                    Object(yi.put)({ type: O.CREATE_CAR, payload: a.data.data })
                  );
                case 12:
                  return (
                    (o.next = 14),
                    Object(yi.put)({
                      type: O.SET_CLIENT_CAR_OWNERSHIP,
                      payload: n.data.data,
                    })
                  );
                case 14:
                  return (
                    (o.next = 16), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 16:
                  return (
                    (o.next = 18),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'uspesno dodat automobil',
                    })
                  );
                case 18:
                  o.next = 29;
                  break;
                case 20:
                  if (
                    ((o.prev = 20),
                    (o.t0 = o.catch(3)),
                    !(null === (r = a) ||
                    void 0 === r ||
                    null === (c = r.data) ||
                    void 0 === c ||
                    null === (i = c.data) ||
                    void 0 === i
                      ? void 0
                      : i.id))
                  ) {
                    o.next = 25;
                    break;
                  }
                  return (
                    (o.next = 25),
                    Object(yi.call)(function () {
                      return Ta.a.delete(
                        '/api/v1/cars/'.concat(a.data.data.id)
                      );
                    })
                  );
                case 25:
                  return (
                    (o.next = 27), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 27:
                  return (
                    (o.next = 29),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'doslo je do greske pri kreiranju novog automobila',
                    })
                  );
                case 29:
                case 'end':
                  return o.stop();
              }
          },
          os,
          null,
          [[3, 20]]
        );
      }
      function Os() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_CAR_AND_SET_OWNER_SAGA, ms)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ss);
      }
      function hs(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.next = 2), Object(yi.put)({ type: O.SET_CARS_LOADING })
                  );
                case 2:
                  return (
                    (t = '/api/v1/cars?'),
                    e.payload.search &&
                      (t += 'search='.concat(e.payload.search, '&')),
                    e.payload.page &&
                      (t += 'page='.concat(e.payload.page, '&')),
                    e.payload.limit &&
                      (t += 'limit='.concat(e.payload.limit, '&')),
                    (n.prev = 6),
                    (n.next = 9),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 9:
                  return (
                    (a = n.sent),
                    (n.next = 12),
                    Object(yi.put)({ type: O.CLEAR_CARS_LOADING })
                  );
                case 12:
                  return (
                    (n.next = 14),
                    Object(yi.put)({
                      type: O.GET_CARS,
                      payload: { count: a.data.count, cars: a.data.data },
                    })
                  );
                case 14:
                  n.next = 22;
                  break;
                case 16:
                  return (
                    (n.prev = 16),
                    (n.t0 = n.catch(6)),
                    (n.next = 20),
                    Object(yi.put)({ type: O.CLEAR_CARS_LOADING })
                  );
                case 20:
                  return (
                    (n.next = 22),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Greska pri preuzimanju automobila sa servera.',
                    })
                  );
                case 22:
                case 'end':
                  return n.stop();
              }
          },
          ls,
          null,
          [[6, 16]]
        );
      }
      function xs() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(yi.takeLatest)(O.GET_CARS_SAGA, hs);
              case 2:
              case 'end':
                return e.stop();
            }
        }, us);
      }
      function fs(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.get('/api/v1/cars/'.concat(e.payload.id));
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({
                      type: O.GET_ACTIVE_CAR,
                      payload: t.data.data,
                    })
                  );
                case 8:
                  return (
                    (a.next = 10), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 10:
                  a.next = 18;
                  break;
                case 12:
                  return (
                    (a.prev = 12),
                    (a.t0 = a.catch(2)),
                    (a.next = 16),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 16:
                  return (
                    (a.next = 18),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri automobila sa servera.',
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          ds,
          null,
          [[2, 12]]
        );
      }
      function Es() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_ACTIVE_CAR_SAGA, fs)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ps);
      }
      var gs = Oa.a.mark(As),
        vs = Oa.a.mark(ys);
      function As(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (t = '/api/v1/cars/suggestions?search='.concat(e.payload)),
                    (n.next = 3),
                    Object(yi.put)({ type: O.CAR_SUGGESTION_LOADING })
                  );
                case 3:
                  return (
                    (n.prev = 3),
                    (n.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 6:
                  return (
                    (a = n.sent),
                    (n.next = 9),
                    Object(yi.put)({ type: O.CLEAR_CAR_SUGGESTION_LOADING })
                  );
                case 9:
                  return (
                    (n.next = 11),
                    Object(yi.put)({
                      type: O.GET_CAR_SUGGESTIONS,
                      payload: a.data.data,
                    })
                  );
                case 11:
                  n.next = 19;
                  break;
                case 13:
                  return (
                    (n.prev = 13),
                    (n.t0 = n.catch(3)),
                    (n.next = 17),
                    Object(yi.put)({ type: O.CLEAR_CAR_SUGGESTION_LOADING })
                  );
                case 17:
                  return (
                    (n.next = 19),
                    Object(yi.put)({
                      type: O.CAR_SUGGESTION_ERROR,
                      payload:
                        'Greska pri pretrazi automobila sa tom registracijom',
                    })
                  );
                case 19:
                case 'end':
                  return n.stop();
              }
          },
          gs,
          null,
          [[3, 13]]
        );
      }
      function ys() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.GET_CAR_SUGGESTIONS_SAGA, As)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, vs);
      }
      var _s = Oa.a.mark(Ss),
        Cs = Oa.a.mark(Ns);
      function Ss(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (t = ''),
                    e.payload.queryFromDate &&
                      e.payload.queryToDate &&
                      (t += '?fromDate='
                        .concat(e.payload.queryFromDate, '&toDate=')
                        .concat(e.payload.queryToDate)),
                    (n.prev = 2),
                    (n.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.get(
                        '/api/v1/aggregations/expensesAndProfit'.concat(t)
                      );
                    })
                  );
                case 5:
                  return (
                    (a = n.sent),
                    (n.next = 8),
                    Object(yi.put)({
                      type: O.GET_CHART_DATA_SUCCESS,
                      payload: a.data.data,
                    })
                  );
                case 8:
                  n.next = 14;
                  break;
                case 10:
                  return (
                    (n.prev = 10),
                    (n.t0 = n.catch(2)),
                    (n.next = 14),
                    Object(yi.put)({ type: O.GET_CHART_DATA_FAILED })
                  );
                case 14:
                case 'end':
                  return n.stop();
              }
          },
          _s,
          null,
          [[2, 10]]
        );
      }
      function Ns() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_CHART_DATA_SAGA, Ss)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Cs);
      }
      var Rs = Oa.a.mark(ws),
        Ts = Oa.a.mark(Ls),
        Is = Oa.a.mark(Ps),
        ks = Oa.a.mark(Us),
        Gs = Oa.a.mark(Ms),
        Ds = Oa.a.mark(Bs);
      function ws(e) {
        var t, a, n, r, c;
        return Oa.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (t = e.payload.page || 1),
                    (a = e.payload.limit || 12),
                    (n = e.payload.search),
                    (r = '/api/v1/users?page='.concat(t, '&limit=').concat(a)),
                    n && (r += '&search='.concat(n)),
                    (i.next = 7),
                    Object(yi.put)({ type: O.CLIENTS_LOADING })
                  );
                case 7:
                  return (
                    (i.prev = 7),
                    (i.next = 10),
                    Object(yi.call)(function () {
                      return Ta.a.get(r);
                    })
                  );
                case 10:
                  return (
                    (c = i.sent),
                    (i.next = 13),
                    Object(yi.put)({ type: O.CLEAR_CLIENTS_LOADING })
                  );
                case 13:
                  return (
                    (i.next = 15),
                    Object(yi.put)({
                      type: O.GET_CLIENTS,
                      payload: {
                        clients: c.data.data,
                        count: c.data.countAllThatMatch,
                      },
                    })
                  );
                case 15:
                  i.next = 23;
                  break;
                case 17:
                  return (
                    (i.prev = 17),
                    (i.t0 = i.catch(7)),
                    (i.next = 21),
                    Object(yi.put)({ type: O.CLEAR_CLIENTS_LOADING })
                  );
                case 21:
                  return (
                    (i.next = 23),
                    Object(yi.put)({
                      type: O.CLIENTS_ERROR,
                      payload: 'Greska pri preuzimanju klijenata',
                    })
                  );
                case 23:
                case 'end':
                  return i.stop();
              }
          },
          Rs,
          null,
          [[7, 17]]
        );
      }
      function Ls() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_CLIENTS_SAGA, ws)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ts);
      }
      function Ps(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/users/', e.payload);
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({
                      type: O.CREATE_CLIENT,
                      payload: t.data.data,
                    })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no kreiran novi klijent',
                    })
                  );
                case 10:
                  return (
                    (a.next = 12), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'gre\u0161ka pri kreiranju novog klijenta',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          Is,
          null,
          [[2, 14]]
        );
      }
      function Us() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.CREATE_CLIENT_SAGA, Ps)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ks);
      }
      function Ms(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.patch('/api/v1/cars/setOwnerByReg', {
                        carReg: e.payload.carReg,
                        userId: e.payload.clientId,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({
                      type: O.SET_CLIENT_CAR_OWNERSHIP,
                      payload: t.data.data,
                    })
                  );
                case 8:
                  return (
                    (a.next = 10), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'uspesno stavljeno vlasnistvo automobila',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'greska pri postavljanju vlasnistva',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          Gs,
          null,
          [[2, 14]]
        );
      }
      function Bs() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeEvery)(O.SET_CLIENT_CAR_OWNERSHIP_SAGA, Ms)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ds);
      }
      var zs = Oa.a.mark(Xs),
        Ys = Oa.a.mark(qs),
        Ws = Oa.a.mark(Zs),
        Fs = Oa.a.mark($s),
        Ks = Oa.a.mark(Qs),
        Vs = Oa.a.mark(el),
        Hs = Oa.a.mark(tl),
        Js = Oa.a.mark(al);
      function Xs(e) {
        var t, a, n, r;
        return Oa.a.wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (
                    (t = ut()(e.payload.dateFrom).format('YYYY-MM-DD')),
                    (a = ut()(e.payload.dateTo).format('YYYY-MM-DD')),
                    (n = '/api/v1/expenses/betweenDates?dateFrom='
                      .concat(t, '&dateTo=')
                      .concat(a)),
                    (c.prev = 3),
                    (c.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.get(n);
                    })
                  );
                case 6:
                  return (
                    (r = c.sent),
                    (c.next = 9),
                    Object(yi.put)({
                      type: O.GET_EXPENSES,
                      payload: r.data.data,
                    })
                  );
                case 9:
                  c.next = 15;
                  break;
                case 11:
                  return (
                    (c.prev = 11),
                    (c.t0 = c.catch(3)),
                    (c.next = 15),
                    Object(yi.put)({ type: O.GET_EXPENSES_FAILED })
                  );
                case 15:
                case 'end':
                  return c.stop();
              }
          },
          zs,
          null,
          [[3, 11]]
        );
      }
      function qs() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_EXPENSES_SAGA, Xs)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ys);
      }
      function Zs(e) {
        return Oa.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    (t.next = 3),
                    Object(yi.call)(function () {
                      Ta.a.post('/api/v1/expenses', {
                        description: e.payload.description,
                        date: e.payload.date,
                        amount: e.payload.amount,
                      });
                    })
                  );
                case 3:
                  return (
                    (t.next = 5), Object(yi.put)({ type: O.CREATE_EXPENSE })
                  );
                case 5:
                  t.next = 11;
                  break;
                case 7:
                  return (
                    (t.prev = 7),
                    (t.t0 = t.catch(0)),
                    (t.next = 11),
                    Object(yi.put)({
                      type: O.EXPENSE_ERROR,
                      payload: 'gre\u0161ka pri kreiranju novog tro\u0161ka',
                    })
                  );
                case 11:
                case 'end':
                  return t.stop();
              }
          },
          Ws,
          null,
          [[0, 7]]
        );
      }
      function $s() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeEvery)(O.CREATE_EXPENSE_SAGA, Zs)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Fs);
      }
      function Qs(e) {
        var t, a, n, r, c, i;
        return Oa.a.wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (a = t.description),
                    (n = t.date),
                    (r = t.amount),
                    (c = t.id),
                    (o.prev = 1),
                    (o.next = 4),
                    Object(yi.call)(function () {
                      return Ta.a.patch('/api/v1/expenses/'.concat(c), {
                        description: a,
                        date: n,
                        amount: r,
                      });
                    })
                  );
                case 4:
                  return (
                    (i = o.sent),
                    (o.next = 7),
                    Object(yi.put)({
                      type: O.UPDATE_EXPENSE,
                      payload: Object(S.a)({}, i.data.data),
                    })
                  );
                case 7:
                  o.next = 13;
                  break;
                case 9:
                  return (
                    (o.prev = 9),
                    (o.t0 = o.catch(1)),
                    (o.next = 13),
                    Object(yi.put)({
                      type: O.EXPENSE_ERROR,
                      payload:
                        'gre\u0161ka pri poku\u0161aju izmena na tro\u0161kovima',
                    })
                  );
                case 13:
                case 'end':
                  return o.stop();
              }
          },
          Ks,
          null,
          [[1, 9]]
        );
      }
      function el() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.UPDATE_EXPENSE_SAGA, Qs)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Vs);
      }
      function tl(e) {
        return Oa.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    (t.next = 3),
                    Object(yi.call)(function () {
                      return Ta.a.delete(
                        '/api/v1/expenses/'.concat(e.payload.id)
                      );
                    })
                  );
                case 3:
                  return (
                    (t.next = 5),
                    Object(yi.put)({
                      type: O.DELETE_EXPENSE,
                      payload: { id: e.payload.id },
                    })
                  );
                case 5:
                  t.next = 11;
                  break;
                case 7:
                  return (
                    (t.prev = 7),
                    (t.t0 = t.catch(0)),
                    (t.next = 11),
                    Object(yi.put)({
                      type: O.EXPENSE_ERROR,
                      payload: 'gre\u0161ka pri brisanju tro\u0161ka',
                    })
                  );
                case 11:
                case 'end':
                  return t.stop();
              }
          },
          Hs,
          null,
          [[0, 7]]
        );
      }
      function al() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.DELETE_EXPENSE_SAGA, tl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Js);
      }
      var nl = Oa.a.mark(ol),
        rl = Oa.a.mark(sl),
        cl = Oa.a.mark(ll),
        il = Oa.a.mark(ul);
      function ol(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = '/api/v1/invoices?'),
                    e.payload.page &&
                      (t += 'page='.concat(e.payload.page, '&')),
                    e.payload.limit &&
                      (t += 'limit='.concat(e.payload.limit, '&')),
                    e.payload.search &&
                      (t += 'search='.concat(e.payload.search, '&')),
                    (n.prev = 6),
                    (n.next = 9),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 9:
                  return (
                    (a = n.sent),
                    (n.next = 12),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 12:
                  return (
                    (n.next = 14),
                    Object(yi.put)({
                      type: O.GET_INVOICES,
                      payload: { count: a.data.count, invoices: a.data.data },
                    })
                  );
                case 14:
                  n.next = 22;
                  break;
                case 16:
                  return (
                    (n.prev = 16),
                    (n.t0 = n.catch(6)),
                    (n.next = 20),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 20:
                  return (
                    (n.next = 22),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri preuzimanju ra\u010duna sa servera.',
                    })
                  );
                case 22:
                case 'end':
                  return n.stop();
              }
          },
          nl,
          null,
          [[6, 16]]
        );
      }
      function sl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_INVOICES_SAGA, ol)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, rl);
      }
      function ll(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = e.payload),
                    (n.prev = 3),
                    (n.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/invoices', t);
                    })
                  );
                case 6:
                  return (
                    (a = n.sent),
                    (n.next = 9),
                    Object(yi.put)({
                      type: O.CREATE_INVOICE,
                      payload: a.data.data.invoice,
                    })
                  );
                case 9:
                  return (
                    (n.next = 11),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no napravljena faktura.',
                    })
                  );
                case 11:
                  return (
                    (n.next = 13), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 13:
                  n.next = 21;
                  break;
                case 15:
                  return (
                    (n.prev = 15),
                    (n.t0 = n.catch(3)),
                    (n.next = 19),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Doslo je do gre\u0161ke pri kreiranju nove fakture.',
                    })
                  );
                case 19:
                  return (
                    (n.next = 21), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 21:
                case 'end':
                  return n.stop();
              }
          },
          cl,
          null,
          [[3, 15]]
        );
      }
      function ul() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.CREATE_INVOICE_SAGA, ll)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, il);
      }
      var dl = Oa.a.mark(hl),
        pl = Oa.a.mark(xl),
        jl = Oa.a.mark(fl),
        bl = Oa.a.mark(El),
        ml = Oa.a.mark(gl),
        Ol = Oa.a.mark(vl);
      function hl(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (t = '/api/v1/jobConclusion/betweenDates?dateFrom='
                      .concat(e.payload.fromDate, '&dateTo=')
                      .concat(e.payload.toDate)),
                    (n.prev = 1),
                    (n.next = 4),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 4:
                  return (
                    (a = n.sent),
                    (n.next = 7),
                    Object(yi.put)({
                      type: O.GET_JOBCONCLUSIONS,
                      payload: a.data.data,
                    })
                  );
                case 7:
                  n.next = 12;
                  break;
                case 9:
                  (n.prev = 9),
                    (n.t0 = n.catch(1)),
                    Object(yi.put)({
                      type: O.JOB_CONCLUSIONS_ERROR,
                      payload: 'greska pri uzimanju odradjenih poslova',
                    });
                case 12:
                case 'end':
                  return n.stop();
              }
          },
          dl,
          null,
          [[1, 9]]
        );
      }
      function xl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.GET_JOBCONCLUSIONS_SAGA, hl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, pl);
      }
      function fl(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/jobConclusion', {
                        workOrderId: e.payload.workOrderId,
                        workDone: e.payload.workDone,
                        note: e.payload.note,
                        charged: e.payload.charged,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.call)(function () {
                      return Ta.a.patch(
                        '/api/v1/workOrders/'.concat(
                          e.payload.workOrderId,
                          '/complete'
                        )
                      );
                    })
                  );
                case 8:
                  return (
                    (a.next = 10), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.CREATE_JOB_CONCLUSION,
                      payload: t.data.data,
                    })
                  );
                case 12:
                  return (
                    (a.next = 14),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no zaklju\u010den servisni nalog.',
                    })
                  );
                case 14:
                  a.next = 22;
                  break;
                case 16:
                  return (
                    (a.prev = 16),
                    (a.t0 = a.catch(2)),
                    (a.next = 20),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 20:
                  return (
                    (a.next = 22),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri zaklju\u010denju servisnog naloga. ',
                    })
                  );
                case 22:
                case 'end':
                  return a.stop();
              }
          },
          jl,
          null,
          [[2, 16]]
        );
      }
      function El() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_JOB_CONCLUSION_SAGA, fl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, bl);
      }
      function gl(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.patch(
                        '/api/v1/jobConclusion/'.concat(
                          e.payload.jobConclusionId
                        ),
                        {
                          workDone: e.payload.workDone,
                          note: e.payload.note,
                          charged: e.payload.charged,
                        }
                      );
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.CREATE_JOB_CONCLUSION,
                      payload: t.data.data,
                    })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no izmenjen servisni nalog.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri poku\u0161aju menjanja servisnog naloga.',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          ml,
          null,
          [[2, 14]]
        );
      }
      function vl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.EDIT_JOB_CONCLUSION_SAGA, gl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ol);
      }
      var Al = Oa.a.mark(Rl),
        yl = Oa.a.mark(Tl),
        _l = Oa.a.mark(Il),
        Cl = Oa.a.mark(kl),
        Sl = Oa.a.mark(Gl),
        Nl = Oa.a.mark(Dl);
      function Rl(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/jobTickets', {
                        workOrderId: e.payload.workOrderId,
                        ticket: e.payload.ticket,
                        status: e.payload.status,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.CREATE_JOB_TICKET,
                      payload: t.data.data,
                    })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no napravljen radni nalog.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri kreiranju radnog naloga. ',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          Al,
          null,
          [[2, 14]]
        );
      }
      function Tl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_JOB_TICKET_SAGA, Rl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, yl);
      }
      function Il(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.patch(
                        '/api/v1/jobTickets/'.concat(e.payload.jobTicketId),
                        { status: e.payload.status, ticket: e.payload.ticket }
                      );
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.EDIT_JOB_TICKET,
                      payload: t.data.data,
                    })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no izmenjen radni nalog.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri poka\u0161aju izmena radnog naloga. ',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          _l,
          null,
          [[2, 14]]
        );
      }
      function kl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.EDIT_JOB_TICKET_SAGA, Il)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Cl);
      }
      function Gl() {
        var e;
        return Oa.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    '/api/v1/jobTickets',
                    (t.prev = 3),
                    (t.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.get('/api/v1/jobTickets');
                    })
                  );
                case 6:
                  return (
                    (e = t.sent),
                    (t.next = 9),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (t.next = 11),
                    Object(yi.put)({
                      type: O.GET_JOB_TICKETS,
                      payload: e.data.data,
                    })
                  );
                case 11:
                  t.next = 19;
                  break;
                case 13:
                  return (
                    (t.prev = 13),
                    (t.t0 = t.catch(3)),
                    (t.next = 17),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 17:
                  return (
                    (t.next = 19),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri preuzimanju zakazanih termina.',
                    })
                  );
                case 19:
                case 'end':
                  return t.stop();
              }
          },
          Sl,
          null,
          [[3, 13]]
        );
      }
      function Dl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.GET_JOB_TICKETS_SAGA, Gl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Nl);
      }
      var wl = Oa.a.mark(Wl),
        Ll = Oa.a.mark(Fl),
        Pl = Oa.a.mark(Kl),
        Ul = Oa.a.mark(Vl),
        Ml = Oa.a.mark(Hl),
        Bl = Oa.a.mark(Jl),
        zl = Oa.a.mark(Xl),
        Yl = Oa.a.mark(ql);
      function Wl(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (t = '/api/v1/messages?'),
                    e.payload.search &&
                      (t += 'search='.concat(e.payload.search, '&')),
                    e.payload.page &&
                      (t += 'page='.concat(e.payload.page, '&')),
                    e.payload.limit &&
                      (t += 'limit='.concat(e.payload.limit, '&')),
                    (n.prev = 4),
                    (n.next = 7),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 7:
                  return (
                    (a = n.sent),
                    (n.next = 10),
                    Object(yi.put)({
                      type: O.GET_MESSAGES,
                      payload: a.data.data,
                    })
                  );
                case 10:
                  n.next = 16;
                  break;
                case 12:
                  return (
                    (n.prev = 12),
                    (n.t0 = n.catch(4)),
                    (n.next = 16),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri preuzimanju zakazanih termina.',
                    })
                  );
                case 16:
                case 'end':
                  return n.stop();
              }
          },
          wl,
          null,
          [[4, 12]]
        );
      }
      function Fl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_MESSAGES_SAGA, Wl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ll);
      }
      function Kl(e) {
        var t, a, n;
        return Oa.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = e.payload.id),
                    (a = '/api/v1/messages/'.concat(t)),
                    (r.prev = 2),
                    (r.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.patch(a, { seen: !0 });
                    })
                  );
                case 5:
                  return (
                    (n = r.sent),
                    (r.next = 8),
                    Object(yi.put)({
                      type: O.UPDATE_MESSAGE_SEEN,
                      payload: n.data.data,
                    })
                  );
                case 8:
                  r.next = 13;
                  break;
                case 10:
                  (r.prev = 10), (r.t0 = r.catch(2)), console.log(r.t0);
                case 13:
                case 'end':
                  return r.stop();
              }
          },
          Pl,
          null,
          [[2, 10]]
        );
      }
      function Vl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeEvery)(O.UPDATE_MESSAGE_SEEN_SAGA, Kl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ul);
      }
      function Hl() {
        var e;
        return Oa.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    '/api/v1/messages/notSeenNumber',
                    (t.prev = 1),
                    (t.next = 4),
                    Object(yi.call)(function () {
                      return Ta.a.get('/api/v1/messages/notSeenNumber');
                    })
                  );
                case 4:
                  return (
                    (e = t.sent),
                    (t.next = 7),
                    Object(yi.put)({
                      type: O.GET_UNREAD_MESSAGES_NUMBER,
                      payload: e.data.data,
                    })
                  );
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  (t.prev = 9), (t.t0 = t.catch(1)), console.log(t.t0);
                case 12:
                case 'end':
                  return t.stop();
              }
          },
          Ml,
          null,
          [[1, 9]]
        );
      }
      function Jl() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.GET_UNREAD_MESSAGES_NUMBER_SAGA, Hl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Bl);
      }
      function Xl(e) {
        return Oa.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  Object(yi.put)({ type: O.NEW_MESSAGE, payload: e.payload })
                );
              case 2:
                return (
                  (t.next = 4),
                  Object(yi.put)({
                    type: O.MESSAGE_RECEIVED,
                    payload: 'Nova Poruka!',
                  })
                );
              case 4:
              case 'end':
                return t.stop();
            }
        }, zl);
      }
      function ql() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeEvery)(O.NEW_MESSAGE_SAGA, Xl)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Yl);
      }
      var Zl = Oa.a.mark(cu),
        $l = Oa.a.mark(iu),
        Ql = Oa.a.mark(ou),
        eu = Oa.a.mark(su),
        tu = Oa.a.mark(lu),
        au = Oa.a.mark(uu),
        nu = Oa.a.mark(du),
        ru = Oa.a.mark(pu);
      function cu(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t = '/api/v1/warranties/forCar/'.concat(e.payload.carId)),
                    (n.prev = 3),
                    (n.next = 6),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 6:
                  return (
                    (a = n.sent),
                    (n.next = 9),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (n.next = 11),
                    Object(yi.put)({
                      type: O.GET_WARRANTIES,
                      payload: a.data.data,
                    })
                  );
                case 11:
                  n.next = 19;
                  break;
                case 13:
                  return (
                    (n.prev = 13),
                    (n.t0 = n.catch(3)),
                    (n.next = 17),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 17:
                  return (
                    (n.next = 19),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri preuzimanju garancija.',
                    })
                  );
                case 19:
                case 'end':
                  return n.stop();
              }
          },
          Zl,
          null,
          [[3, 13]]
        );
      }
      function iu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_WARRANTIES_SAGA, cu)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, $l);
      }
      function ou(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/warranties', {
                        carId: e.payload.carId,
                        warrantyConditionsTitle:
                          e.payload.warrantyConditionsTitle,
                        partsUnderWarranty: e.payload.partsUnderWarranty,
                        validUntil: e.payload.validUntil,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.CREATE_WARRANTY,
                      payload: t.data.data,
                    })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no registrovana garancija.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri kreiranju garancije. ',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          Ql,
          null,
          [[2, 14]]
        );
      }
      function su() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_WARRANTY_SAGA, ou)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, eu);
      }
      function lu(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.patch(
                        '/api/v1/warranties/'.concat(e.payload.warrantyId),
                        {
                          partsUnderWarranty: e.payload.partsUnderWarranty,
                          validUntil: e.payload.validUntil,
                        }
                      );
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 8:
                  return (
                    (a.next = 10),
                    Object(yi.put)({
                      type: O.EDIT_WARRANTY,
                      payload: t.data.data,
                    })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no izmenjena garancija.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri poka\u0161aju izmena garancije. ',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          tu,
          null,
          [[2, 14]]
        );
      }
      function uu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.EDIT_WARRANTY_SAGA, lu)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, au);
      }
      function du(e) {
        return Oa.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t.prev = 2),
                    (t.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.delete(
                        '/api/v1/warranties/'.concat(e.payload.warrantyId)
                      );
                    })
                  );
                case 5:
                  return (
                    (t.next = 7),
                    Object(yi.put)({
                      type: O.DELETE_WARRANTY,
                      payload: { id: e.payload.warrantyId },
                    })
                  );
                case 7:
                  return (
                    (t.next = 9), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (t.next = 11),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Upe\u0161no obrisana garancija.',
                    })
                  );
                case 11:
                  t.next = 19;
                  break;
                case 13:
                  return (
                    (t.prev = 13),
                    (t.t0 = t.catch(2)),
                    (t.next = 17),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 17:
                  return (
                    (t.next = 19),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri brisanju garancije.',
                    })
                  );
                case 19:
                case 'end':
                  return t.stop();
              }
          },
          nu,
          null,
          [[2, 13]]
        );
      }
      function pu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.DELETE_WARRANTY_SAGA, du)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ru);
      }
      var ju = Oa.a.mark(gu),
        bu = Oa.a.mark(vu),
        mu = Oa.a.mark(Au),
        Ou = Oa.a.mark(yu),
        hu = Oa.a.mark(_u),
        xu = Oa.a.mark(Cu),
        fu = Oa.a.mark(Su),
        Eu = Oa.a.mark(Nu);
      function gu(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.post('/api/v1/workOrders', {
                        carRegistration: e.payload.carRegistration,
                      });
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({
                      type: O.CREATE_WORK_ORDERS,
                      payload: t.data.data,
                    })
                  );
                case 8:
                  return (
                    (a.next = 10), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 10:
                  return (
                    (a.next = 12),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Uspe\u0161no otvoren servisni nalog.',
                    })
                  );
                case 12:
                  a.next = 20;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(2)),
                    (a.next = 18),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 18:
                  return (
                    (a.next = 20),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri kreiranju novog servisnog naloga.',
                    })
                  );
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          ju,
          null,
          [[2, 14]]
        );
      }
      function vu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.CREATE_WORK_ORDERS_SAGA, gu)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, bu);
      }
      function Au(e) {
        var t, a;
        return Oa.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.next = 2),
                    Object(yi.put)({ type: O.SET_WORK_ORDERS_LOADING })
                  );
                case 2:
                  return (
                    (t = '/api/v1/workOrders?'),
                    e.payload.page &&
                      (t += 'page='.concat(e.payload.page, '&')),
                    e.payload.limit &&
                      (t += 'limit='.concat(e.payload.limit, '&')),
                    e.payload.search &&
                      (t += 'search='.concat(e.payload.search, '&')),
                    e.payload.completed && (t += 'completed=1'),
                    (n.prev = 7),
                    (n.next = 10),
                    Object(yi.call)(function () {
                      return Ta.a.get(t);
                    })
                  );
                case 10:
                  return (
                    (a = n.sent),
                    (n.next = 13),
                    Object(yi.put)({ type: O.CLEAR_WORK_ORDERS_LOADING })
                  );
                case 13:
                  return (
                    (n.next = 15),
                    Object(yi.put)({
                      type: O.GET_WORK_ORDERS,
                      payload: { workOrders: a.data.data, count: a.data.count },
                    })
                  );
                case 15:
                  n.next = 23;
                  break;
                case 17:
                  return (
                    (n.prev = 17),
                    (n.t0 = n.catch(7)),
                    (n.next = 21),
                    Object(yi.put)({ type: O.CLEAR_WORK_ORDERS_LOADING })
                  );
                case 21:
                  return (
                    (n.next = 23),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Greska pri ucitavanju servisnih naloga',
                    })
                  );
                case 23:
                case 'end':
                  return n.stop();
              }
          },
          mu,
          null,
          [[7, 17]]
        );
      }
      function yu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.GET_WORK_ORDERS_SAGA, Au)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ou);
      }
      function _u(e) {
        var t;
        return Oa.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (a.prev = 2),
                    (a.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.get(
                        '/api/v1/workOrders/'.concat(e.payload.id)
                      );
                    })
                  );
                case 5:
                  return (
                    (t = a.sent),
                    (a.next = 8),
                    Object(yi.put)({
                      type: O.GET_WORK_ORDER,
                      payload: t.data.data,
                    })
                  );
                case 8:
                  return (
                    (a.next = 10), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 10:
                  a.next = 18;
                  break;
                case 12:
                  return (
                    (a.prev = 12),
                    (a.t0 = a.catch(2)),
                    (a.next = 16),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 16:
                  return (
                    (a.next = 18),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload:
                        'Gre\u0161ka pri preuzimanju servisnog naloga sa servera.',
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          hu,
          null,
          [[2, 12]]
        );
      }
      function Cu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(yi.takeLatest)(O.GET_WORK_ORDER_SAGA, _u)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, xu);
      }
      function Su(e) {
        return Oa.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), Object(yi.put)({ type: O.LOADING });
                case 2:
                  return (
                    (t.prev = 2),
                    (t.next = 5),
                    Object(yi.call)(function () {
                      return Ta.a.delete(
                        '/api/v1/workOrders/'.concat(e.payload.workOrderId)
                      );
                    })
                  );
                case 5:
                  return (
                    (t.next = 7),
                    Object(yi.put)({
                      type: O.DELETE_WORK_ORDER,
                      payload: { id: e.payload.workOrderId },
                    })
                  );
                case 7:
                  return (
                    (t.next = 9), Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 9:
                  return (
                    (t.next = 11),
                    Object(yi.put)({
                      type: O.SUCCESS,
                      payload: 'Upe\u0161no obrisan servisni nalog.',
                    })
                  );
                case 11:
                  t.next = 19;
                  break;
                case 13:
                  return (
                    (t.prev = 13),
                    (t.t0 = t.catch(2)),
                    (t.next = 17),
                    Object(yi.put)({ type: O.CLEAR_LOADING })
                  );
                case 17:
                  return (
                    (t.next = 19),
                    Object(yi.put)({
                      type: O.UI_ERROR,
                      payload: 'Gre\u0161ka pri brisanju servisnog naloga.',
                    })
                  );
                case 19:
                case 'end':
                  return t.stop();
              }
          },
          fu,
          null,
          [[2, 13]]
        );
      }
      function Nu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.takeLatest)(O.DELETE_WORK_ORDER_SAGA, Su)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Eu);
      }
      var Ru = Oa.a.mark(Tu);
      function Tu() {
        return Oa.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(yi.all)([
                    Co(),
                    No(),
                    To(),
                    Ns(),
                    qs(),
                    $s(),
                    el(),
                    al(),
                    xl(),
                    Ls(),
                    Us(),
                    ys(),
                    Bs(),
                    Os(),
                    bs(),
                    xs(),
                    vu(),
                    yu(),
                    Cu(),
                    rs(),
                    es(),
                    Tl(),
                    El(),
                    kl(),
                    vl(),
                    Nu(),
                    $i(),
                    eo(),
                    ao(),
                    Dl(),
                    Es(),
                    iu(),
                    su(),
                    uu(),
                    pu(),
                    Fo(),
                    Yo(),
                    Vo(),
                    Jo(),
                    qo(),
                    sl(),
                    ul(),
                    Fl(),
                    Vl(),
                    Jl(),
                    ql(),
                    Li(),
                    Ui(),
                    Bi(),
                    Yi(),
                    Fi(),
                  ])
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ru);
      }
      var Iu = Tu,
        ku = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function Gu(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function () {
                  'installed' === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          'New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.'
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log('Content is cached for offline use.'),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error('Error during service worker registration:', e);
          });
      }
      var Du = Object(Ai.a)(),
        wu = Object(yc.e)(vi, Object(yc.a)(Du));
      Du.run(Iu),
        o.a.render(
          Object(n.jsx)(d.a, { store: wu, children: Object(n.jsx)(vc, {}) }),
          document.getElementById('root')
        ),
        Ac(),
        (function (e) {
          if ('serviceWorker' in navigator) {
            if (
              new URL('', window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener('load', function () {
              var t = ''.concat('', '/service-worker.js');
              ku
                ? (!(function (e, t) {
                    fetch(e, { headers: { 'Service-Worker': 'script' } })
                      .then(function (a) {
                        var n = a.headers.get('content-type');
                        404 === a.status ||
                        (null != n && -1 === n.indexOf('javascript'))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : Gu(e, t);
                      })
                      .catch(function () {
                        console.log(
                          'No internet connection found. App is running in offline mode.'
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      'This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA'
                    );
                  }))
                : Gu(t, e);
            });
          }
        })();
    },
  },
  [[683, 1, 2]],
]);
//# sourceMappingURL=main.3d7fe044.chunk.js.map
