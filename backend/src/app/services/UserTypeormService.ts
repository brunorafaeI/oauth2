import { FindManyOptions, Repository } from 'typeorm'

import { Users } from '@infra/database/typeorm/models/user/Users'
import { dataSource } from '@infra/config/typeorm'
import { IRepositoryService } from '@app/services/contracts/IRepositoryService'
import { UserDTO } from '@infra/database/dtos/UserDTO'

export class UserTypeormService implements IRepositoryService<Users> {
  private _userRepository: Repository<Users>

  constructor() {
    this._userRepository = dataSource.getRepository(Users)
  }

  async findAll(): Promise<Users[]> {
    return await this._userRepository.find()
  }

  async findById(id: string): Promise<Users | null> {
    return await this._userRepository.findOneBy({ id })
  }

  async find(criteria: FindManyOptions): Promise<Users[] | null> {
    return await this._userRepository.find(criteria)
  }

  async save(user: UserDTO): Promise<Users | void> {
    const userFind = await this._userRepository.findOneBy({ email: user.email })

    if (userFind) {
      return await this._userRepository.save({
        ...user,
        id: userFind.id,
        updatedAt: new Date() 
      })
    }

    return await this._userRepository.save(user)
  }
}