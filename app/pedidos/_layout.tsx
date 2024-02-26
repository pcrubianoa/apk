import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Feather, EvilIcons, SimpleLineIcons, MaterialIcons, AntDesign  } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function _layout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          },
     }}>
      <Tabs.Screen
        name="mesas"
        options={{
          title:"Mesas",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          )
         }}>
      </Tabs.Screen>
      <Tabs.Screen
        name="productos"
        options={{
          title:"Productos",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          )
         }}>
      </Tabs.Screen>
      <Tabs.Screen
        name="perfil"
        options={{
          title:"Perfil",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          )
         }}>
      </Tabs.Screen>
    </Tabs>
  );
}
