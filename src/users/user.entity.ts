import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  googleToken: string;

  @Column({ type: 'enum', enum: ['doctor', 'patient'] })
  role: string;

  @Column({ nullable: true }) // Add this field if you need to store a hashed password
  password?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
