import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

// import { loginAction } from '../../store/actions/loginAction';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

//  this are single handlers for each input
// handleUsername = e => {
//     const username = e.target.value;
//     this.setState({
//       username
//     })
//   };
//
//   handlePassword = e => {
//     const password = e.target.value;
//     this.setState({
//       password
//     })
//   };

  // single handler for all inputs
  handleUserInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  login = e => {
    e.preventDefault();
    console.log(this.state)
    // this.props.dispatch(loginAction(this.state)).then(res => {
    //   if(res) {
    //     this.props.history.push('/feed');
    //   }
    // })
  };

  render() {
    return (
      <form onSubmit={ this.login }>
        <input
          type="text"
          value={ this.state.username }
          placeholder="Your username"
          name="username"
          onChange={ this.handleUserInput }

        />

        <input
          type="password"
          value={ this.state.password }
          placeholder="Your password"
          name="password"
          onChange={ this.handleUserInput }
        />
        <button onClick={ this.login}>Login</button>
      </form>
    );
  }
}

Login.propTypes = {
    username: PropTypes.bool.isRequired
};

export default connect()(Login);
