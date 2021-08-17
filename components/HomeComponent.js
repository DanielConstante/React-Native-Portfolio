import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Animated } from 'react-native';
import { Card } from 'react-native-elements';
import Constants from 'expo-constants';


class Home extends Component {


    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Card title="Front End Development" style={styles.card_template}>
                        <Image source={require('./images/dev.png')} style={styles.card_image} />
                        <Text style={styles.text}>
                            Markup and web languages such as HTML, CSS and JavaScript,
                            specialized web editing software, image editing, accessibility,
                            cross-browser issues and search engine optimisation.
                        </Text>
                    </Card>
                    <Card title="Responsive User Interface" style={styles.card_template}>
                        <Image source={require('./images/res.jpg')} style={styles.card_image} />
                        <Text style={styles.text}>
                            Responsive websites built for an optimal user experience that achieves your business goals.
                        </Text>
                    </Card>
                    <Card title="Modern Websites" style={styles.card_template}>
                        <Image source={require('./images/content.jpeg')} style={styles.card_image} />
                        <Text style={styles.text}>
                            Manage your website using the web's most popular content management system.
                        </Text>
                    </Card>
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
    card_template: {
        width: 350,
        height: 350,
    },
    card_image: {
        width: 350,
        height: 350,
        borderRadius: 10,
        borderColor: '#0B0C10'
    },
    text: {
        fontFamily: 'AvenirNext-BoldItalic',
        fontWeight: 'bold',
        marginTop: 10
    }
});

export default Home;