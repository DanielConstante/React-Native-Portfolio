import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import {PARTNERS} from '../shared/partners';

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
                    leftAvatar={{source: require('./images/dcabout.jpg') }}
                />
            );
        };
        return (

            <ScrollView>
                <Card title="Web Developer & UI/UX Designer">
                    <FlatList 
                    data={this.state.partners}
                    renderItem={RenderPartner}
                    keyExtractor={item => item.id.toString()}
                    />
                </Card>
                <Mission />
            </ScrollView>
        );
    }
}

function Mission () {
    return(
        <Card title="N.J. Rubenking.">
            <Text style={{margin: 10}}>
            Writing the first 90 percent of a computer program takes 90 percent of the time. 
            The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time...
            </Text>
        </Card>
    );
}

export default About; 