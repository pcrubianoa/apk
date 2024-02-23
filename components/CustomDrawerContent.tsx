import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props:any) {
  return (
    <View style={{ flex:1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>

      <Pressable style={{ padding: 20 }}>
        <View style={{ padding: 20 }}>
          <Image style={styles.stretch} source={require('../assets/images/logo.png')}/>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 180,
    height: 80,
    resizeMode: 'stretch',
  },
});