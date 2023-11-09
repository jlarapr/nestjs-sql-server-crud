import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('users') // El nombre 'users' es el que se usará para la tabla en la base de datos
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  // add unique constraint
  @Column({ unique: true })
  email: string;

  @Column()
  age: number;
}
