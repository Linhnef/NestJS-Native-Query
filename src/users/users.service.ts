/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import User from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
    @InjectRepository(User)
    private userRepository: Repository<User>,

  ) { }

  async create({ ...params }: CreateUserDto) {
    return await this.userRepository.save({ ...params })
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
