import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

type CategoryCardProps = {
  imgUrl: string;
  title: string;
};

const CategoryCard = ({imgUrl, title}: CategoryCardProps) => {
  return (
    <TouchableOpacity style={{position: 'relative', marginRight: 10}}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  cardText: {
    position: 'absolute',
    bottom: 3,
    left: 5,
    color: '#fff',
    fontWeight: '700',
  },
});

export default CategoryCard;
