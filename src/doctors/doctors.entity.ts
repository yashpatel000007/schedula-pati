import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from '../bookings/booking.entity'; // Adjust the path as necessary

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  specialty: string;

  @Column('text')
  profile: string;

  @Column('float')
  rating: number;

  @Column('jsonb')
  availability: Record<string, any>;

  @OneToMany(() => Booking, booking => booking.doctor)
  bookings: Booking[];
}
