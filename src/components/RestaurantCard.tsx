import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LocationMarkerIcon from '../icons/LocationMarkerIcon';
import StarIcon from '../icons/StarIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import IDish from '../interfaces/IDish';

type RestaurantCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: IDish[];
  long: string;
  lat: string;
};

type RootStackParamList = {
  Restaurant: RestaurantCardProps;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RestaurantCard = (props: RestaurantCardProps) => {
  const navigation = useNavigation<NavigationProp>();

  function onRestaurantCardPress() {
    navigation.navigate('Restaurant', {...props});
  }

  return (
    <TouchableOpacity
      onPress={onRestaurantCardPress}
      style={[styles.card, styles.shadow]}>
      <Image
        source={{
          uri: props.imgUrl,
        }}
        style={styles.restaurantImage}
      />
      <View style={styles.titleTextWrapper}>
        <Text style={styles.title}>{props.title}</Text>

        <View style={styles.iconWrapper}>
          <StarIcon color="green" size={22} opacity={0.6} />
          <Text style={{fontSize: 12}}>
            <Text style={{color: '#4c8f00'}}>{props.rating}</Text> •{' '}
            {props.genre}
          </Text>
        </View>

        <View style={styles.iconWrapper}>
          <LocationMarkerIcon color="#03396c" size={22} opacity={0.4} />
          <Text style={{fontSize: 12}}>
            <Text style={{color: '#03396c'}}>Nearby</Text> • {props.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantImage: {
    height: 144,
    width: 256,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 6,
    marginBottom: 6,
  },
  titleTextWrapper: {
    paddingHorizontal: 10,
    paddingTop: 3,
    paddingBottom: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  card: {
    backgroundColor: '#fff',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#03396c',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default RestaurantCard;
