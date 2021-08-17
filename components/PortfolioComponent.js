import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
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
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/dev.png') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
           
        );
    }
}


export default Portfolio;