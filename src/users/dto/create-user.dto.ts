import { IsInt, IsString, IsEmail, Min, Max } from 'class-validator';
export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @Min(0)
  @Max(100)
  readonly age: number;
}
