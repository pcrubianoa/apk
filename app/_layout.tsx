import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, EvilIcons, SimpleLineIcons  } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { useFonts } from "expo-font";

const CustomDrawerContent = (props:any) => {
  const pathname = usePathname();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),

  });

  useEffect(() => {

  }, [pathname]);

  return(
    <DrawerContentScrollView {...props}>
      <View style={styles.profile}>
        <SimpleLineIcons name="user" size={24} color={ '#000' } />
        <Text>Foto de Perfil</Text>
      </View>
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="people" size={24} color={ pathname == '/two' ? '#fff' : '#000' } />
      )}
      label={'Clientes'}
      labelStyle={[styles.navItemLabel, {color: pathname == '/two' ? '#fff' : '#000'}]}
      style={{ backgroundColor: pathname == '/two' ? '#007bff' : '#fff' }}
      onPress={() => {
        router.push('/(drawer)/(tabs)/two');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons  name="tag" size={24} color={ pathname == '/two' ? '#fff' : '#000' }/>
      )}
      label={'Productos'}
      labelStyle={[styles.navItemLabel, {color: pathname == '/two' ? '#fff' : '#000'}]}
      style={{ backgroundColor: pathname == '/two' ? '#007bff' : '#fff' }}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="user" size={24} color={ pathname == '/two' ? '#fff' : '#000' }/>
      )}
      label={'Perfil'}
      labelStyle={[styles.navItemLabel, {color: pathname == '/two' ? '#fff' : '#000'}]}
      style={{ backgroundColor: pathname == '/two' ? '#007bff' : '#fff' }}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="info" size={24} color={ pathname == '/two' ? '#fff' : '#000' }/>
      )}
      label={'Cambios'}
      labelStyle={[styles.navItemLabel, {color: pathname == '/modal' ? '#fff' : '#000'}]}
      style={{ backgroundColor: pathname == '/modal' ? '#007bff' : '#fff' }}
      onPress={() => {
        router.push('/modal');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="support" size={24} color={ pathname == '/two' ? '#fff' : '#000' }/>
      )}
      label={'Términos de Servicio'}
      labelStyle={[styles.navItemLabel, {color: pathname == '/two' ? '#fff' : '#000'}]}
      style={{ backgroundColor: pathname == '/two' ? '#007bff' : '#fff' }}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <DrawerItem
      icon={(color, size) => (
        <SimpleLineIcons name="power" size={24} color={ pathname == '/two' ? '#fff' : '#000' }/>
      )}
      label={'Cerrar Sesión'}
      labelStyle={[styles.navItemLabel, {color: pathname == '/two' ? '#fff' : '#000'}]}
      style={{ backgroundColor: pathname == '/two' ? '#007bff' : '#fff' }}
      onPress={() => {
        router.push('/(drawer)/(tabs)/');
      }}
    />
    <View>
      <Text>Logis @ 2024</Text>
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
  profile:{
    margin: 20,
    flex: 1,
  },
  navItemLabel: {
    //marginLeft: -20,
    //fontSize: 18
  }
});