import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCampsite({campsite}) {
    if (campsite) {
        return (
            <Card 
                featuredTitle={campsite.name}
                image={require('./images/dev.png')}
            >
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function CampsiteInfo(props) {
    return <RenderCampsite campsite={props.campsite} />;
}

export default CampsiteInfo;