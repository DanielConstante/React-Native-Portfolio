import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact'
    }
    
    render() {
        return (
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                    <Text>
                    Aubrey 
                    </Text>
                    <Text>
                    TX 76227 
                    </Text>
                    <Text style={{marginBottom: 10}}>
                    U.S.A.
                    </Text>
                    <Text>
                    Phone: 1-469-703-5148  
                    </Text>
                    <Text>
                    Email: daniel_constante86@hotmail.com 
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;