// src/bookings/bookings.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Doctor } from '../doctors/doctors.entity';
import { Patient } from '../patients/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Doctor, Patient])],
  providers: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
