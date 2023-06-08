import React from 'react';
import {styles} from '../theme/appTheme';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Appbar, Button, Divider, useTheme} from 'react-native-paper';

export const CarouselCard = props => {
  const {item = {}, date = {}, width = {}} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'center',
        overflow: 'visible',
        zIndex: 1,
      }}>
      <ImageBackground
        source={{
          uri: item.uri,
        }}
        imageStyle={{borderRadius: 10}}
        resizeMode="cover"
        style={{
          height: 210,
        }}>
        <Text style={styles.cardTile}>{item.cardTile}</Text>
        <Text style={styles.cardDate}>{date.format('LLL')}</Text>
        <Text style={styles.cardContent}>{item.cardContent}</Text>
        <View style={styles.cardFirmContainer}>
          <View style={styles.buttonContainer}>
            <Button
              icon="plus"
              mode="outlined"
              style={styles.showMoreButton}
              textColor="red"
              onPress={() => console.log('Pressed')}>
              <Text>Ver más esto solo está en la branch de jorge</Text>
            </Button>
          </View>
          <Image
            style={styles.img_title}
            source={require('../img/Firma_Josep_Irla.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
