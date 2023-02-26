import { IRepositoryService } from '@app/services/contracts/IRepositoryService'
import { prisma } from '@infra/database/prisma'
import { Prisma, Users } from '@prisma/client'
import { UserDTO } from '@infra/database/dtos/UserDTO'

export class UserPrismaService implements IRepositoryService<Users> {
  private _userRepository: Prisma.UsersDelegate<false>

  constructor() {
    this._userRepository = prisma.users
  }

  async findAll(): Promise<Users[]> {
    return await this._userRepository.findMany()
  }

  async findById(id: string): Promise<Users | null> {
    return await this._userRepository.findUnique({
      where: { id }
    })
  }

  async find(criteria: any): Promise<Users[] | null> {
    return await this._userRepository.findMany({
      where: criteria
    });
  }

  async save(user: UserDTO): Promise<Users | void> {
    const userFind = await this._userRepository.findFirst({
      where: { email: user.email }
    })

    if (userFind) {
      return await this._userRepository.update({
        where: {
          email: user.email
        },
        data: user
      })
    }

    return await this._userRepository.create({
      data: {
        name: user.name,
        email: user.email,
        token: user.token!,
        picture: user.picture,
      }
    })
  }
}