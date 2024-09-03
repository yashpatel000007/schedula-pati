import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Doctor } from 'src/doctors/doctors.entity';
import { Patient } from 'src/patients/patient.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Doctor, doctor => doctor.bookings)
  doctor: Doctor;

  @ManyToOne(() => Patient, patient => patient.id)
  patient: Patient;

  @Column('date')
  date: string;

  @Column('time')
  time: string;

  @Column({ type: 'enum', enum: ['confirmed', 'cancelled', 'rescheduled', 'completed'] })
  status: string;
}
