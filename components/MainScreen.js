import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {DATA} from './data';
import { Post } from './post';

export const MainScreen = ({navigation})=> {
    const openPost =(post)=> {
        navigation.navigate('SliderScreen', {
          itemId: post.id
        })
      }
    return (
        <View>
    <FlatList data = {DATA} renderItem = {({item})=><Post post = {item} openPost={openPost} />} keyExtractor={item => item.id}/>
       </View>
    )
}