import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import IRestaurantCards from '../interfaces/IRestaurantCards';
import {useLayoutEffect} from 'react';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import StarIcon from '../icons/StarIcon';
import LocationMarkerIcon from '../icons/LocationMarkerIcon';
import QuestionMarkCircleIcon from '../icons/QuestionMarkCircleIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import DishRow from '../components/DishRow';

export default function RestaurantScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const restaurantData = route.params as IRestaurantCards;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function handleGoHomeScreen() {
    navigation.goBack();
  }

  return (
    <ScrollView>
      <View style={styles.viewMainContainer}>
        <Image
          source={{
            uri: restaurantData.imgUrl,
          }}
          style={styles.image}
        />

        <TouchableOpacity
          style={styles.touchableIconContainer}
          onPress={handleGoHomeScreen}>
          <ArrowLeftIcon size={20} color="#03396c" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentView}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{restaurantData.title}</Text>
          <View style={styles.shortInfoWrapper}>
            <View style={styles.iconWrapper}>
              <StarIcon color="green" size={22} opacity={0.6} />
              <Text style={styles.textWrapper}>
                <Text style={{color: '#4c8f00'}}>{restaurantData.rating}</Text>{' '}
                • {restaurantData.genre}
              </Text>
            </View>

            <View style={styles.iconWrapper}>
              <LocationMarkerIcon color="#03396c" size={22} opacity={0.4} />
              <Text style={{fontSize: 12, color: '#03396c'}}>
                {restaurantData.address}
              </Text>
            </View>
          </View>

          <Text style={styles.shortDescription}>
            {restaurantData.short_description}
          </Text>
        </View>

        <TouchableOpacity style={styles.questionMarkWrapper}>
          <QuestionMarkCircleIcon size={22} color="#005b96" />
          <Text style={styles.allergyTextWrapper}>Have a food allergy?</Text>
          <ChevronRightIcon size={22} color="#03396c" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.menuText}>Menu</Text>

        {/* {Dishrows} */}
        <FlatList
          data={restaurantData.dishes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DishRow
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              dishImgUrl={item.dishImgUrl}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 224,
  },
  viewMainContainer: {
    position: 'relative',
  },
  touchableIconContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 10,
    left: 20,
    top: 60,
    borderRadius: 100,
  },
  contentView: {
    backgroundColor: '#fff',
  },
  titleWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  shortInfoWrapper: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 4,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  textWrapper: {
    fontSize: 12,
  },
  shortDescription: {
    color: '#757575',
    marginTop: 6,
    paddingBottom: 16,
  },
  questionMarkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#d5e2eb',
    borderBottomWidth: 1,
    borderBottomColor: '#d5e2eb',
  },
  allergyTextWrapper: {
    paddingLeft: 8,
    flex: 1,
    color: '#4f4f4f',
    opacity: 0.8,
  },
  menuText: {
    paddingHorizontal: 16,
    paddingTop: 24,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: '600',
  },
});
