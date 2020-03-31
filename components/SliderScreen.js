import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DATA } from './data';

export const SliderScreen = ({route, navigation})=> {
    const { itemId } = route.params
    const post = DATA.find(item=>item.id===itemId)
    return (
        <View>
            <Text>SliderScreen</Text>
            <Button title='11111' onPress={()=> console.log(post)}/>
        </View>
    )
}