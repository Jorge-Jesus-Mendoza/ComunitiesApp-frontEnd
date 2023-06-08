import React from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {CarouselCard} from './CarouselCard';

export const StyledCarousel = props => {
  const {cardData, width, date, onSnapToItem} = props;
  return (
    <View>
      <Carousel
        data={cardData.cardsList}
        renderItem={({item}: any) => (
          <CarouselCard item={item} width={width} date={date} />
        )}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={onSnapToItem}
        inactiveSlideOpacity={0.5}
      />
      <Pagination
        dotsLength={cardData.cardsList.length}
        activeDotIndex={cardData.activeSlide}
        // renderDots={renderPagination}
        // containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'red',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};
