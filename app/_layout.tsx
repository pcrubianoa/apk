import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, EvilIcons, SimpleLineIcons  } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

const CustomDrawerContent = (props:any) => {
  const pathname = usePathname();

  useEffect(() => {

  }, [pathname]);

  return(
    <DrawerContentScrollView {...props}>
      <View>
        <Text>Perfil</Text>
      </View>
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="people" size={24} color={ pathname == '/two' ? '#fff' : '#000' } />
      )}
      label={'Clientes'}
      labelStyle={[styles.navItemLabel, {color: pathname == '/two' ? '#fff' : '#000'}]}
      style={{ backgroundColor: pathname == '/two' ? '#000' : '#fff' }}
      onPress={() => {
        router.push('/(drawer)/(tabs)/two');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons  name="tag" size={24} color={color}/>
      )}
      label={'Productos'}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="user" size={24} color={color}/>
      )}
      label={'Perfil'}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="info" size={24} color={color}/>
      )}
      label={'Cambios'}
      onPress={() => {
        router.push('/modal');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="support" size={24} color={color}/>
      )}
      label={'Términos de Servicio'}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="power" size={24} color={color}/>
      )}
      label={'Cerrar Sesión'}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <View>
      <Text>Logis</Text>
      <Text>2024</Text>
    </View>
    </DrawerContentScrollView>
  )

}

export default function Layout() {
  return(
    <Drawer drawerContent={(props:any) => <CustomDrawerContent {...props} />} />
  )
}

const styles = StyleSheet.create({
  navItemLabel: {
    //marginLeft: -20,
    //fontSize: 18
  }
});