import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RestaurantCardProps} from '../components/RestaurantCard';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantCardProps;
  Basket: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useNavigate = () => {
  return useNavigation<NavigationProp>();
};
