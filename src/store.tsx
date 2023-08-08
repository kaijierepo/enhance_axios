import { makeAutoObservable } from 'mobx'
import { User } from './user'

export class Store {
  readonly base = 5
  MCount = 0
  userList: any[] = []
  constructor() {
    makeAutoObservable(this)
  }
  addUser(user: User) {
    this.userList.push(user);
  }
  setMCount() {
    this.MCount++
  }
  get total() {
    return this.MCount * this.base
  }
}
export default new Store()
