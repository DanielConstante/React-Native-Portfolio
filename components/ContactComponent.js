import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact'
    }
    sendMail() {
        MailComposer.composeAsync({
            recipients: ['daniel_constante86@hotmail.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.color}>
                    <View style={styles.card_template}>
                        <View>
                             <Text style={styles.textTitle}>Contact Information</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>Aubrey  {'\n'}TX 76227 {'\n'}U.S.A. </Text>
                        </View>
                        <View>
                            <Text style={styles.text}>Phone: 1-469-703-5148</Text>
                        </View>
                        <View>
                            <Text style={styles.text} >Email: daniel_constante86@hotmail.com</Text>
                        </View>
                    </View>
                    <Button
                        title="Send Email"
                        buttonStyle={{ backgroundColor: '#16f1d4', margin: 40 }}
                        icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />}
                        onPress={() => this.sendMail()}
                    />
                </View>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    color: {
        backgroundColor: 'black',
        height: 900
    },
    text: {
        color: '#fff',
        fontSize: 16,
        alignContent: 'center',
        textAlign: 'left',
        marginBottom: 5,
        marginTop: 15,
        marginLeft: 15,
        flexDirection: 'row',
    },
    textTitle: {
        color: '#16f1d4',
        fontSize: 24,
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20
    },
    card_template: {
        width: 350,
        height: 350,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#16f1d4',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 30

    },
});
/*                  Languages           
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
}*/


export default Contact;