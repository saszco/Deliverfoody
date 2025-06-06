import {createSlice, original} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import IBasket from '../../interfaces/IBasket';
import {RootState} from '../store';
import restaurantCards from '../../data/restaurantCards';

const initialState = {
  items: <IBasket[]>[],
};

type itemPayloadAction = {
  restaurantId: string;
  dishId: string;
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket: (state, action: PayloadAction<itemPayloadAction>) => {
      const {restaurantId, dishId} = action.payload;

      const existingItemIndex = state.items.findIndex(
        item => item.dishId === dishId && item.restaurantId === restaurantId,
      );

      const existingItemQuantity = state.items?.[existingItemIndex]?.quantity;

      if (existingItemQuantity > 0) {
        state.items[existingItemIndex].quantity += 1;
      }

      if (existingItemIndex === -1) {
        state.items.push({
          restaurantId,
          dishId,
          quantity: 1,
        });
      }

      console.log('Basket items after addition:', original(state.items));
    },
    removeItemFromBasket: (state, action: PayloadAction<itemPayloadAction>) => {
      const {restaurantId, dishId} = action.payload;

      const existingItemIndex = state.items.findIndex(
        item => item.dishId === dishId && item.restaurantId === restaurantId,
      );

      const existingItemQuantity = state.items[existingItemIndex]?.quantity;

      if (existingItemQuantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else if (existingItemQuantity > 1) {
        state.items[existingItemIndex].quantity -= 1;
      }
    },
  },
});

const basketReducer = basketSlice.reducer;

export const {addItemToBasket, removeItemFromBasket} = basketSlice.actions;
export default basketReducer;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketTotalCount = (state: RootState) => {
  return state.basket.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectBasketTotalPrice = (state: RootState) => {
  return state.basket.items.reduce((total, item) => {
    const restaurant = restaurantCards.find(
      rest => rest.id === item.restaurantId,
    );

    if (!restaurant) {
      return total;
    }

    const dish = restaurant.dishes.find(product => product.id === item.dishId);

    if (!dish) {
      return total;
    }

    return total + dish.price * item.quantity;
  }, 0);
};
