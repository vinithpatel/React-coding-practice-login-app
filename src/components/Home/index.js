import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickLogin = () => this.setState({isLoggedIn: true})

  onClickLogout = () => this.setState({isLoggedIn: false})

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        {!isLoggedIn && (
          <div className="info-container">
            <Message>Please Login</Message>
            <Login onClick={this.onClickLogin} />
          </div>
        )}
        {isLoggedIn && (
          <div className="info-container">
            <Message>Welcome User</Message>
            <Logout onClick={this.onClickLogout} />
          </div>
        )}
      </div>
    )
  }
}

export default Home
