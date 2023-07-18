import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
interface StackHeaderProps {
  navigation: DrawerNavigationProp<Record<string, object | undefined>, string>;
}
const StackHeader = ({ navigation }: StackHeaderProps) => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        // height: 50,
      }}
    // statusBarHeight={10}
    >

      <Appbar.Content
        title={
          <View style={styles.container}>
            <Image
              source={require('../img/Comuna-o-Nada-scaled-e1654199487274.jpg')}
              style={styles.img_title}

            />
          </View>
        }
      />
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
    </Appbar.Header>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  img_title: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});
