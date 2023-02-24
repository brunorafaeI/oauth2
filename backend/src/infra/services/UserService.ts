import { UserDTO } from '@infra/database/models/user/dtos/UserDTO'
import { UserEntity } from '@infra/database/models/user/UserEntity'
import { IRepositoryService } from './contracts/IRepositoryService'

export class UserService implements IRepositoryService<UserEntity> {

  findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.')
  }

  findById(): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }

  find(criteria: []): Promise<UserEntity[]> {
    throw new Error('Method not implemented.')
  }
  
  save(data: UserDTO): Promise<UserEntity|void> {
    throw new Error('Method not implemented.')
  }
}