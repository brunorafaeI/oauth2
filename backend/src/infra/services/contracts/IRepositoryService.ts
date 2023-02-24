
export interface IRepositoryService<T> {
  findAll(): Promise<T[]>
  findById(id: string): Promise<T|null>
  find(criteria: any): Promise<T[]>
  save(data: any): Promise<T|void>
}
