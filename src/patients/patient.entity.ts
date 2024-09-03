import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  age: number;

  @Column()
  gender: string;

  @Column()
  contactInfo: string;

  @ManyToOne(() => User, user => user.id)
  user: User;
}
