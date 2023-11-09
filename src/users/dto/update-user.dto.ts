import {
  IsInt,
  IsString,
  IsEmail,
  IsOptional,
  Min,
  Max,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsInt()
  @Min(0)
  @Max(100)
  @IsOptional()
  readonly age?: number;
}
