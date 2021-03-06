import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import RegisterDto from 'src/authentication/dto/register.dto'
import { Repository } from 'typeorm'
import User from './user.entity'

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async getByEmail (email: string) {
    // const user = await this.usersRepository.findOne({ email });
    const user = await this.usersRepository.findOneBy({ email })
    if (user) {
      return user
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND)
  }

  async getById (id: number) {
    // const user = await this.usersRepository.findOne({ id });
    const user = await this.usersRepository.findOneBy({ id })
    if (user) {
      return user
    }
    throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND)
  }

  async create (userData: RegisterDto) {
    const newUser = await this.usersRepository.create(userData)
    await this.usersRepository.save(newUser)
    return newUser
  }
}
