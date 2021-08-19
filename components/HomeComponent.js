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
                <View style={styles.color}>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle2}>Daniel Constante {'\n'} Front End Web Developer.</Text>
                        </View>
                        <Image source={require('./images/dc.png')} style={styles.card_image} />

                        <Text style={styles.textTitle3}>
                            Welcome
                        </Text>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>Front End Development</Text>
                        </View>
                        <Image source={require('./images/dev.png')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                                Markup and web languages such as HTML, CSS and JavaScript,
                                specialized web editing software, image editing, accessibility,
                                cross-browser issues and search engine optimisation.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>Responsive User Interface</Text>
                        </View>
                        <Image source={require('./images/res.jpg')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                                Responsive websites built for an optimal user experience that achieves your business goals.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>Modern Websites</Text>
                        </View>
                        <Image source={require('./images/content.jpeg')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                                Manage your website using the web's most popular content management system.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    color: {
        backgroundColor: 'black',
        height: 2100,
    },
    textTitle: {
        color: '#fff',
        fontSize: 24,
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    textTitle2: {
        color: '#16f1d4',
        fontSize: 30,
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 200,
        marginBottom: 10
    },
    textTitle3: {
        color: '#16f1d4',
        fontSize: 30,
        alignContent: 'center',
        textAlign: 'center',
        //marginTop: 20,
        marginBottom: 200
    },
    text: {
        color: '#fff',
        fontFamily: 'AvenirNext-BoldItalic',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5
    },
    card_image: {
        width: 355,
        height: 355,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        borderColor: '#0B0C10',
        //marginTop: 20
        marginLeft: 2
    },
    card_template: {
        width: 365,
        height: 495,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#16f1d4',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 25,
        marginRight: 15
    },
});

{/*                  Languages          
    
                    
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
 */}

export default Home;