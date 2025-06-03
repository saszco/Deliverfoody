import {ScrollView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import CATEGORIES from '../data/categories';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CategoryCard title={item.title} imgUrl={item.imgUrl} />
        )}
        horizontal
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    gap: 8,
  },
});

export default Categories;
