
export interface IRepositoryService<T> {
  findAll(): Promise<T[]>
  findById(): Promise<T>
  find(criteria: []): Promise<T[]>
  save(data: any): Promise<T|void>
}
