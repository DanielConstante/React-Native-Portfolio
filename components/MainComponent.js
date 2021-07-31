import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Constants from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';


const DirectoryNavigator = createStackNavigator(
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#0B0C10'
            },
            headerTintColor: '#16F1D4',
            headerTitleStyle: {
                color: '#16F1D4'
            },
            headerLeft: <Icon
                name='home'
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
        defaultNavigationOptions: ({navigation}) => ({
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

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
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
                    <Text style={styles.drawerHeaderText}>DC Web Developer</Text>
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
            Directory: {
                screen: DirectoryNavigator,
                navigationOptions: {
                    drawerIcon: ({ tintColor }) => (
                        <Icon
                            name='list'
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
                    drawerLabel: 'About Us',
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
        drawerBackgroundColor: '#C5C6C7',
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
        backgroundColor: '#0B0C10',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#16F1D4',
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
    }
});

export default Main;