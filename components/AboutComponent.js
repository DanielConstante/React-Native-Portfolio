import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Linking } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { PARTNERS } from '../shared/partners';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About'
    }

    render() {

        return (

            <ScrollView>
                <View style={styles.color}>
                    <View>
                        <Text style={styles.textTitle}>Web Developer & UI/UX Designer</Text>
                    </View>
                    <View>
                        <Image source={require('./images/dcabout.jpg')} style={styles.image} />
                    </View>
                    <Text style={styles.textContent}>
                        I’m a Front-End Developer located in Dallas/DFW Area. I have a serious passion for develop webs and UI effects,
                        animations and creating intuitive, dynamic user experiences. Well-organised person, problem solver, independent employee with high
                        attention to detail. Fan of video games, outdoor activities, TV series and Action movies. A family person and father of three kids,
                    </Text>
                    <Text style={styles.textContent}>
                        {'\u2022'}  <Text style={styles.textBold}>Birthday:</Text> August 20, 1986
                    </Text>
                    <Text style={styles.textContent}>
                        {'\u2022'}  <Text style={styles.textBold}>Age:</Text> 34
                    </Text>
                    <Text style={styles.textContent}>
                        {'\u2022'}  <Text style={styles.textBold}>City:</Text> New Jersey, USA
                    </Text>
                    <Text style={styles.textContent}
                        onPress={() => Linking.openURL('https://danielconstante.netlify.app/')}
                    >
                        {'\u2022'}  <Text style={styles.textBold}>Website:</Text> www.danielconstante.netlify.app/
                    </Text>
                    <Text style={styles.textContent}>
                        {'\u2022'}  <Text style={styles.textBold}>Email:</Text> daniel_constante@hotmail.com
                    </Text>
                    <Text style={styles.textContent} >
                        {'\u2022'}  <Text style={styles.textBold}>Phone:</Text> 469-703-5148
                    </Text>
                    <Text style={styles.textContent}>
                        {'\u2022'}  <Text style={styles.textBold}>Freelance:</Text> Available
                    </Text>
                    <Text style={styles.textContent}>
                        I help designers, small agencies and businesses bring their ideas to life.
                        Powered by VS Code, Wordpress or Bootstrap. Interested in the entire frontend spectrum
                        and working on ambitious projects with positive people.
                    </Text>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.cardTitle}>"N.J. Rubenking."</Text>
                        </View>
                        <View>
                            <Text style={styles.cardText}>
                                Writing the first 90 percent of a computer program takes 90 percent of the time.
                                The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time...
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8EAED"
    },
    color: {
        backgroundColor: 'black',
        height: 1200
    },
    textTitle: {
        color: '#fff',
        fontSize: 24,
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    textContent: {
        fontSize: 16,
        color: '#fff',
        alignContent: 'center',
        textAlign: 'left',
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 35,
    },
    textBold: {
        fontWeight: "bold"
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 350,
        borderRadius: 10,
        margin: 20,
        marginLeft: 75
    },
    card_template: {
        width: 360,
        height: 185,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#16f1d4',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 35
    },
    cardText: {
        fontSize: 16,
        color: '#fff',
        alignContent: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        marginTop: -10,
        //marginLeft: 35,  
    },
    cardTitle: {
        color: '#fff',
        fontSize: 24,
        alignContent: 'center',
        textAlign: 'center',
        //marginTop: 20,
       marginBottom: 20
    }

});
export default About;

