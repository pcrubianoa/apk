import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, EvilIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { useFonts } from "expo-font";
import CustomDrawerContent from '@/components/CustomDrawerContent';

export default function _layout() {
  return(
    <Drawer
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -20
        }
       }}
       drawerContent={ CustomDrawerContent }>
      <Drawer.Screen
        name="pedidos"
        options={{
          drawerLabel: 'Pedidos',
          title: 'PEDIDOS',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          ),
         }}>
      </Drawer.Screen>
      <Drawer.Screen
        name="sincronizacion"
        options={{
          drawerLabel: 'Sincronizacion',
          title: 'SINCRONIZACIÓN',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="retweet" size={24} color="black" />
          ),
         }}>
      </Drawer.Screen>
    </Drawer>
  )
}

const styles = StyleSheet.create({
  profile:{
    margin: 20,
    flex: 1,
  },
  navItemLabel: {
    //marginLeft: -20,
    //fontSize: 18
  },
});