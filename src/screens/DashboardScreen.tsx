import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {ScrollView, View, Image, useWindowDimensions} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export const DashboardScreen = () => {
  const {width, height} = useWindowDimensions();
  const {authState} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 20,
            alignItems: 'center',
            marginVertical: 15,
            borderRadius: 20,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1299/1299961.png',
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
            }}
          />
          <View style={{width: width * 0.8}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
              Bienvenido{'\n'}
              {authState.userName} {authState.lastName}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
