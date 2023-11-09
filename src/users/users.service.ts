import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Ejemplo de método para crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  // Ejemplo de método para obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  // Ejemplo de método para obtener un usuario por su ID
  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id: id } });
  }
  async findName(name: string): Promise<User[]> {
    return this.usersRepository.find({ where: { name: Like(`%${name}%`) } });
  }

  // Ejemplo de método para actualizar un usuario
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOne({ where: { id: id } });
  }
  // Ejemplo de método para eliminar un usuario
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
