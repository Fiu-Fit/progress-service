import { GoalStatus } from '@prisma/client';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class GoalDTO {
  @IsString()
  @MaxLength(30)
  title: string;

  @IsString()
  @MaxLength(100)
  description: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  targetValue: number;

  @IsOptional()
  actualValue: number;

  @IsOptional()
  deadline: Date;

  @IsOptional()
  updatedAt: Date;

  @IsString()
  exerciseId: string;

  @IsEnum(GoalStatus)
  status: GoalStatus;
}