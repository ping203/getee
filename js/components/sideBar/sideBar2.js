/**
 * Created by Admin on 1/25/2018.
 */
import React, {Component} from 'react';
import {Container, Text} from 'native-base';


export default class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={{backgroundColor: '#2a3146'}}>
                <Text>Side Bar</Text>
            </Container>
        );
    }
}