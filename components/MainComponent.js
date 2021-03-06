import React, { Component } from 'react';
import Home from './HomeComponent';
import Portfolio from './PortfolioComponent';
import About from './AboutComponent';
import Resume from './ResumeComponent';
import Contact from './ContactComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Constants from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';



const PortfolioNavigator = createStackNavigator(
    {
        Portfolio: {
            screen: Portfolio,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='briefcase'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Portfolio',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0B0C10'
            },
            headerTintColor: '#16F1D4',
            headerTitleStyle: {
                color: '#16F1D4'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#0B0C10'
            },
            headerTintColor: '#16F1D4',
            headerTitleStyle: {
                color: '#16F1D4'
            },
            headerLeft: <Icon
                name='list'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#0B0C10'
            },
            headerTintColor: '#16F1D4',
            headerTitleStyle: {
                color: '#16F1D4'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const ResumeNavigator = createStackNavigator(
    {
        Resume: { screen: Resume }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#0B0C10'
            },
            headerTintColor: '#16F1D4',
            headerTitleStyle: {
                color: '#16F1D4'
            },
            headerLeft: <Icon
                name='file'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#0B0C10'
            },
            headerTintColor: '#16F1D4',
            headerTitleStyle: {
                color: '#16F1D4'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('./images/dc.png')}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={styles.drawerHeaderText}>DC Front End Web Developer</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Portfolio: {
            screen: PortfolioNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='briefcase'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Resume: {
            screen: ResumeNavigator,
            navigationOptions: {
                drawerLabel: 'Resume',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='file'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#A9A9A9',
        drawerLabelColor: '#16F1D4',
        contentComponent: CustomDrawerContentComponent

    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#A9A9A9',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    drawerImage: {
        margin: 20,
        height: 70,
        width: 70
    },
    stackIcon: {
        marginLeft: 10,
        color: '#16F1D4',
        fontSize: 24
    },
    drawerLabel: {
        color: '#16F1D4'
    }
});

export default Main;