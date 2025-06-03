import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import RestaurantCard from './RestaurantCard';

type FeaturedRowProps = {
  title: string;
  description: string;
};

const FeaturedRow = ({title, description}: FeaturedRowProps) => {
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
        <RestaurantCard
          id="1"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyFUlccR5_HdpLvs9pLstFkXOS6YkwTJfbA&s"
          title="McDonald's"
          rating={4.8}
          genre="Fast Food"
          address="Vadyma Hetmana St, 1, Kyiv"
          short_description="Very good and tasty fast food!"
          dishes={[
            'BigMac',
            'BigTasty',
            'Double cheeseburger',
            'Royal cheeseburger',
          ]}
          long="longitude"
          lat="latitude"
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
