import { FindManyOptions, Repository } from 'typeorm'

import { UserDTO } from '@infra/database/models/user/dtos/UserDTO'
import { UserEntity } from '@infra/database/models/user/UserEntity'
import { IRepositoryService } from '@infra/services/contracts/IRepositoryService'
import { dataSource } from '@infra/config/database'

export class UserService implements IRepositoryService<UserEntity> {
  private _userRepository: Repository<UserEntity>

  constructor() {
    this._userRepository = dataSource.getRepository(UserEntity)
  }

  async findAll(): Promise<UserEntity[]> {
    return await this._userRepository.find()
  }
  
  async findById(id: string): Promise<UserEntity|null> {
    return await this._userRepository.findOneBy({ id })
  }

  async find(criteria: FindManyOptions): Promise<UserEntity[]> {
    return await this._userRepository.find(criteria)
  }

  async save(data: UserDTO): Promise<UserEntity|void> {
    const userFind = await this._userRepository.findOneBy({ email: data.email })

    if (userFind) {
      userFind.updatedAt = new Date()
      return await this._userRepository.save(userFind)
    }

    return await this._userRepository.save(data)
  }

}