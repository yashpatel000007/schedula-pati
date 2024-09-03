import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Doctor } from 'src/doctors/doctors.entity';
import { Patient } from 'src/patients/patient.entity';

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Doctor, doctor => doctor.id)
  doctor: Doctor;

  @ManyToOne(() => Patient, patient => patient.id)
  patient: Patient;

  @Column('jsonb')
  messages: Record<string, any>;
}
