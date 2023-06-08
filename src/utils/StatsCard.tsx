/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native-paper';

export const StatsCard = props => {
  const {usersRegistered = {}, usersAttended = {}, width = {}} = props;
  return (
    <View style={{backgroundColor: 'rgba(217, 30, 24, 0.7)', height: 200}}>
      <ImageBackground
        source={{
          uri: 'https://eq6emfrfhee.exactdn.com/wp-content/uploads/Simon-Bolivar-El-Libertador.jpg',
        }}
        imageStyle={{opacity: 0.5}}
        resizeMode="cover"
        style={{
          height: 200,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text
            variant="titleMedium"
            style={{color: 'white', fontWeight: 'bold'}}>
            Nuestra Plataforma
          </Text>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: width,
            }}>
            <View
              style={{
                width: width / 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
                {usersAttended}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Millones de personas atendidas de manera directa mensualmente
              </Text>
            </View>
            <View
              style={{
                width: width / 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
                {usersRegistered}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Millones de usuarios registrados desde enero del 2023
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
