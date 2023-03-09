
export interface IRepository<T> {
  findAll(): Promise<T[]>
  findById(id: string): Promise<T | null>
  find(criteria: any): Promise<T[] | null>
  save(data: any): Promise<T | void>
}
