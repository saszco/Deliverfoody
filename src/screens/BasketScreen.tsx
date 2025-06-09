import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigate} from '../hooks/useNavigation';
import {useAppSelector} from '../hooks/reduxHooks';
import {selectBasketItems} from '../store/slices/basketSlice';
import restaurantCards from '../data/restaurantCards';
import IRestaurantCard from '../interfaces/IRestaurantCards';
import IBasket from '../interfaces/IBasket';

type groupedBasketItems = {
  restaurantId: string;
  items: Pick<IBasket, 'dishId' | 'quantity'>[];
};

const BasketScreen = () => {
  const navigation = useNavigate();
  const basketItems = useAppSelector(selectBasketItems);
  let groupedItems: groupedBasketItems[] = [];

  useEffect(() => {
    if (basketItems.length === 0) {
      console.error('No items in the basket');
    }

    for (const item of basketItems) {
      const existingRestaurantIndex = groupedItems.findIndex(
        groupedItem => groupedItem.restaurantId === item.restaurantId,
      );

      if (existingRestaurantIndex !== -1) {
        groupedItems[existingRestaurantIndex].items.push({
          dishId: item.dishId,
          quantity: item.quantity,
        });
      }

      if (existingRestaurantIndex === -1) {
        groupedItems.push({
          restaurantId: item.restaurantId,
          items: [
            {
              dishId: item.dishId,
              quantity: item.quantity,
            },
          ],
        });
      }
    }
  }, []);

  console.log('Grouped items:', groupedItems);

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
