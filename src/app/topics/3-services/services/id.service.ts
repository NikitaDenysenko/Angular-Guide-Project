export class IdService {
  id: number = -1

  getNewId (): number {
    this.id++
    return this.id
  }
}
