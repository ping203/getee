import React, {Component} from 'react';
import {Image, Platform, AsyncStorage, TouchableHighlight, View, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Container, Text} from 'native-base';

class CashIn extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return (
            <Container style={{backgroundColor: '#2af146'}}>
                <Text>Trafer tab</Text>
            </Container>
        );
    }
}


const mapStateToProps = state => {
    const {loginInfo} = state.auth;
    return {}
};

export default connect(mapStateToProps)(CashIn);
