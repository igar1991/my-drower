import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const MainScreen = ({navigation})=> {
    return (
        <View>
            <Text>MainScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}