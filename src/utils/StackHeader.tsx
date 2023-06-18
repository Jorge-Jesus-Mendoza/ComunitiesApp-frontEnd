import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const StackHeader = props => {
  const {navigation, scene} = props;
  return (
    <Appbar.Header
      style={{
        backgroundColor: 'white',
      }}>
      {navigation.canGoBack() && (
        <Appbar.BackAction onPress={() => navigation.pop()} />
      )}
      <Appbar.Content
        title={
          <View style={styles.container}>
            <Image
              source={require('../img/patria_login_id.png')}
              style={styles.img_title}
            />
          </View>
        }
      />
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.toggleDrawer()}
      />
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
