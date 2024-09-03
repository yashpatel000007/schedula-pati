import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctors.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}

  findAll() {
    return this.doctorsRepository.find();
  }

  findOne(id: string) {
    return this.doctorsRepository.findOne({ where: { id } });
  }
}
