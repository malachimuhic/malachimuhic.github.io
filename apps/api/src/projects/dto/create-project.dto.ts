import { IsString, IsArray, IsUrl, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  description!: string;

  @IsArray()
  @IsString({ each: true })
  tags!: string[];

  @IsUrl()
  link!: string;
}
