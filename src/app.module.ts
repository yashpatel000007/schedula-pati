import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DoctorsModule } from './doctors/doctors.module';
import { BookingsModule } from './bookings/bookings.module';
import { PatientsModule } from './patients/patients.module';
import { ChatsModule } from './chats/chats.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'schedula',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    DoctorsModule,
    BookingsModule,
    PatientsModule,
    ChatsModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
