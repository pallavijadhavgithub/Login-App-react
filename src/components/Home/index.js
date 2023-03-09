// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {
    isStatus: true,
  }

  onClicking = () => {
    this.setState(prevState => ({isStatus: !prevState.isStatus}))
  }

  render() {
    const {isStatus} = this.state

    return (
      <div className="container">
        <div className="middle-container">
          <Message isStatus={isStatus} />
          {isStatus ? (
            <Login login={this.onClicking} />
          ) : (
            <Logout logout={this.onClicking} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
