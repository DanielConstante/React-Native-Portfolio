import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
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

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About },
    },
    {
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

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact },
    },
    {
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

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#C5C6C7'
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

export default Main;