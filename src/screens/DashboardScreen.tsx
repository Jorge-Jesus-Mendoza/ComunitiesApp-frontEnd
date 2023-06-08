/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, useWindowDimensions, ScrollView} from 'react-native';
import {TestDataCarousel, TestDataNews} from '../api/TestData';

import moment from 'moment';
import {styles} from '../theme/appTheme';
import {Drawer, Text} from 'react-native-paper';
import {StyledCarousel} from '../utils/StyledCarousel';
import {LoginMenu} from '../utils/LoginMenu';
import {NewsCard} from '../utils/NewsCard';
import {StatsCard} from '../utils/StatsCard';

export const DashboardScreen = () => {
  const {width, height} = useWindowDimensions();

  const [cardData, setCardData] = useState({
    cardsList: TestDataCarousel,
    activeSlide: 0,
  });

  const date = moment();

  const onSnapToItem = index => {
    setCardData({...cardData, activeSlide: index});
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <StyledCarousel
            cardData={cardData}
            width={width}
            date={date}
            onSnapToItem={onSnapToItem}
          />
        </View>
        <LoginMenu width={width} />

        {TestDataNews.map(news => (
          <NewsCard title={news?.title} uri={news.uri} content={news.content} />
        ))}

        <StatsCard usersRegistered={22.7} usersAttended={5.8} width={width} />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            height: 150,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Comunities App
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
