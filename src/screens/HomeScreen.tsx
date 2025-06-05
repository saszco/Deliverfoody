/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import ChevronDownIcon from '../icons/ChevronDownIcons';
import AdjustmentsIcon from '../icons/AdjustmentsIcon';
import SearchIcon from '../icons/SearchIcon';
import UserIcon from '../icons/UserIcon';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FEATURED_ROWS from '../data/featuredRows';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', paddingTop: 10}}>
      {/* {Header} */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 10,
          marginHorizontal: 10,
          gap: 7,
        }}>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          style={styles.image}
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: '600',
              color: '#6497b1',
            }}>
            Deliver now!
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 20,
                color: '#03396c',
              }}>
              Current Location
            </Text>
            <ChevronDownIcon size={20} color="#005b96" />
          </View>
        </View>
        <UserIcon size={28} color="#005b96" />
      </View>

      {/* {Search} */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          paddingBottom: 15,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 8,
            borderColor: '#b3cde0',
            gap: 8,
            flex: 1,
          }}>
          <SearchIcon size={24} color="#005b96" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={24} color="#005b96" />
      </View>

      {/* {Body} */}
      <ScrollView
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 10,
        }}
        contentContainerStyle={styles.container}>
        {/* {Categories} */}
        <View
          style={{
            backgroundColor: '#e4edf2',
            paddingLeft: 10,
            borderRadius: 14,
            marginTop: 2,
          }}>
          <Categories />
        </View>

        {/* {Featured row} */}
        <FlatList
          data={FEATURED_ROWS}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <FeaturedRow title={item.title} description={item.description} />
          )}
          style={styles.flatListStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    borderRadius: 28,
  },
  flatListStyle: {
    marginTop: 16,
  },
  container: {
    paddingBottom: 120,
  },
});
