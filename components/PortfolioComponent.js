import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Animated, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';


class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Portfolio'
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.color}>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>Bootstrap Campsites Website</Text>
                        </View>
                        <Image source={require('./images/bootcamp.png')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                            This site was created with Bootstap framework and responsive design that makes use of flexible layouts, 
                            flexible images and cascading style sheet media queries. The goal of responsive design is to build web pages
                             that detect the visitor's screen size and orientation and change the layout accordingly.
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://nucampsitetx.netlify.app/')} 
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/git-test')}
                            />
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>Bootstrap Portfolio Website</Text>
                        </View>
                        <Image source={require('./images/bootstrap.png')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                                Bootstrap is a free and open-source CSS framework directed at responsive,
                                mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography,
                                forms, buttons, navigation, and other interface components.
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://danielconstante.netlify.app/')}
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/nucamp-portfolio-project')}
                            />
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>React Campsites Website</Text>
                        </View>
                        <Image source={require('./images/reactcamp.png')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                            React is a free and open-source front-end JavaScript library for building user interfaces or UI components. 
                            It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page 
                            or mobile applications. 
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://react-campsites.netlify.app/')}
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/react-campsites')}
                            />
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>React Portfolio Website</Text>
                        </View>
                        <Image source={require('./images/react.png')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                            Converting my bootstrap portfolio website to a single page application. React is the #1 Javascript library for building websites, this website also contains advanced aspects of JavaScript ES6, 
                            React Components and will develop React-Redux based applications.
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://danielconstantereact.netlify.app/')}
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/React-Portfolio')}
                            />
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>React-Native Campsites App</Text>
                        </View>
                        <Image source={require('./images/native.jpeg')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                            React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, 
                            iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React's framework along with native platform capabilities.
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('exp://exp.host/@danielconstante/nucampsite')}
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/React-Native-Campsites')}
                            />
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>React-Native Portfolio App</Text>
                        </View>
                        <Image source={require('./images/app.jpeg')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                            Converting my React portfolio project into REACT-NATIVER App. {'\n'} 
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://expo.dev/@danielconstante/portfolio')}
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/React-Native-Portfolio')}
                            />
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>JavaScript Text Animations</Text>
                        </View>
                        <Image source={require('./images/animation.png')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                            JavaScript animations are done by programming gradual changes in an element's style. 
                            The changes are called by a timer. When the timer interval is small, the animation looks continuous.
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://textanimations.netlify.app/')}
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/text-animations')}
                            />
                        </View>
                    </View>
                    <View style={styles.card_template}>
                        <View>
                            <Text style={styles.textTitle}>Google Page Clone</Text>
                        </View>
                        <Image source={require('./images/clone.png')} style={styles.card_image} />
                        <View>
                            <Text style={styles.text}>
                            Google Page Search Engine Clone, i was just trying to develop one of the most popular websites around the world and developing my skills.
                            </Text>
                        </View>
                        <View style={styles.fixToText}>
                            <Button
                                title="Website Link"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                //onPress=
                            />
                            <Button
                                title="Source Code"
                                buttonStyle={{ backgroundColor: '#16f1d4', paddingHorizontal: 15 }}
                                onPress={() => Linking.openURL('https://github.com/DanielConstante/google-clone')}
                            />
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
        height: 5200,
    },
    textTitle: {
        color: '#fff',
        fontSize: 24,
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: '#fff',
        textAlign: 'left',
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
        height: 595,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#16f1d4',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 25,
        marginRight: 15
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginRight: 35,
        marginLeft: 35
    },

});


export default Portfolio;

{/*       to do                  */}