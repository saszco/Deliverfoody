import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

type RestaurantCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: string;
  lat: string;
};

const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: props.imgUrl,
        }}
        style={styles.restaurantImage}
      />
      <View style={styles.titleTextWrapper}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantImage: {
    height: 144,
    width: 256,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 6,
  },
  titleTextWrapper: {
    paddingHorizontal: 6,
    paddingTop: 3,
    paddingBottom: 6,
  },
});

export default RestaurantCard;
