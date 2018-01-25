import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from 'native-base';




class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameRegister: '',
      passwordRegister: '',
      telephone: '',
      errorMessage: '',
      errorMessageRegister: '',
      onExp: false,
      isRegister: false
    };
  }

  render() {
    return (
      <Container style={{backgroundColor: '#2a3146'}}>
        Home Page
      </Container>
    );
  }
}
