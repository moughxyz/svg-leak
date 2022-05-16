import { Component } from 'preact'
import { Model, PasswordString } from './Model'

import CloseIcon from './ic-close.svg'

type State = {
  password?: PasswordString
}

type Props = {
  model: Model
}

export class ModelView extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    props.model.addChangeObserver((password) => {
      this.setState({ password })
    })

    this.state = {
      password: props.model.password,
    }
  }

  changePassword = () => {
    this.props.model.changePassword()
  }

  render() {
    return (
      <div data-foo={this.state.password}>
        <label>Current Password: {this.state.password?.secretPassword}</label>

        <button onClick={this.changePassword}>Change Password</button>

        {this.state.password && <CloseIcon />}
      </div>
    )
  }
}
