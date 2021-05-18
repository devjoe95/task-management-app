import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/, {
    message:
      'password must have at least on uppercase letter, one lowercase letter, one number & one symbol',
  })
  password: string;
}
