import React  from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';

const Date = props => {
    console.log(props);
    return(
        <View>
            <Text>{props.date}</Text>
        </View>
    )
}

export default Date;
