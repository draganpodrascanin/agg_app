import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notification_subscriber')
class NotificationSubscriber {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 1000 })
  json: string;
}

export default NotificationSubscriber;
