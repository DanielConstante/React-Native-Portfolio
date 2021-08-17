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
        const RenderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/dcabout.jpg') }}
                />
            );
        };
        return (

            <ScrollView>
                    <Card title="Web Developer & UI/UX Designer"
                        wrapperStyle={{ margin: 20 }}
                        avatar={{ source: require('./images/dcabout.jpg') }}
                    >
                        <Image source={require('./images/dcabout.jpg')} style={styles.image} />
                        <Text style={styles.text}>
                            I’m a Front-End Developer located in Dallas/DFW Area. I have a serious passion for develop webs and UI effects,
                            animations and creating intuitive, dynamic user experiences. Well-organised person, problem solver, independent employee with high
                            attention to detail. Fan of video games, outdoor activities, TV series and Action movies. A family person and father of three kids,
                        </Text>
                        <Text style={styles.textSize}>
                            {'\u2022'}  <Text style={styles.textBold}>Birthday:</Text> August 20, 1986
                        </Text>
                        <Text style={styles.textSize}>
                            {'\u2022'}  <Text style={styles.textBold}>Age:</Text> 34
                        </Text>
                        <Text style={styles.textSize}>
                            {'\u2022'}  <Text style={styles.textBold}>City:</Text> New Jersey, USA
                        </Text>
                        <Text style={styles.textSize}
                            onPress={() => Linking.openURL('https://danielconstante.netlify.app/')}
                        >
                            {'\u2022'}  <Text style={styles.textBold}>Website:</Text> www.danielconstante.netlify.app/
                        </Text>
                        <Text style={styles.textSize}>
                            {'\u2022'}  <Text style={styles.textBold}>Email:</Text> daniel_constante@hotmail.com
                        </Text>
                        <Text style={styles.textSize} >
                            {'\u2022'}  <Text style={styles.textBold}>Phone:</Text> 469-703-5148
                        </Text>
                        <Text style={styles.textSize}>
                            {'\u2022'}  <Text style={styles.textBold}>Freelance:</Text> Available
                        </Text>
                        <Text style={styles.text}>
                            I help designers, small agencies and businesses bring their ideas to life.
                            Powered by VS Code, Wordpress or Bootstrap. Interested in the entire frontend spectrum
                            and working on ambitious projects with positive people.
                        </Text>
                    </Card>
                    <Mission />
            </ScrollView>
        );
    }
}

function Mission() {
    return (
        <Card title="N.J. Rubenking.">
            <Text style={{ margin: 10 }}>
                Writing the first 90 percent of a computer program takes 90 percent of the time.
                The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time...
            </Text>
        </Card>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8EAED"
    },
    card: {
        color: '#0B0C10'
    },
    image: {
        alignItems: 'center',
        flex: 1,
        width: 250,
        height: 350,
        borderRadius: 10,
        margin: 20,
        

    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 10
    },
    textBold: {
        fontWeight: "bold"
    },
    textSize: {
        fontSize: 15,
        marginBottom: 10
    }
});
export default About;