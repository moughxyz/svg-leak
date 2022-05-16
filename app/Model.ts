type Observer = (password: PasswordString) => void

export class Model {
  observers: Observer[] = []
  password = new PasswordString(String(Math.random()))

  changePassword() {
    this.password = new PasswordString(String(Math.random()))
    this.notifyObservers()
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer(this.password)
    }
  }

  addChangeObserver(callback: Observer) {
    this.observers.push(callback)
  }
}

export class PasswordString {
  constructor(public secretPassword: string) {}
}
