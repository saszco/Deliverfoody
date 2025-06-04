import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import RestaurantCard from './RestaurantCard';
import RESTAURANT_CARDS from '../data/restaurantCards';

type FeaturedRowProps = {
  title: string;
  description: string;
};

const FeaturedRow = ({title, description}: FeaturedRowProps) => {
  const filteredCards = RESTAURANT_CARDS.filter(
    card => card.featuredRowTitle === title,
  );

  return (
    <View>
      <View style={styles.textWrapper}>
        <Text style={styles.boldText}>{title}</Text>
        <ArrowRightIcon size={24} color="#03396c" />
      </View>

      <Text style={styles.descriptionText}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}>
        <FlatList
          data={filteredCards}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}) => (
            <RestaurantCard
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              genre={item.genre}
              address={item.address}
              short_description={item.short_description}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  boldText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#011f4b',
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 16,
    paddingHorizontal: 10,
  },
  descriptionText: {
    paddingHorizontal: 10,
    color: '#005b96',
    opacity: 0.5,
    fontSize: 12,
    marginBottom: 16,
  },
});

export default FeaturedRow;
