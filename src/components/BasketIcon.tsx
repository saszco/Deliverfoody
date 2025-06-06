import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppSelector} from '../hooks/reduxHooks';
import {
  selectBasketTotalCount,
  selectBasketTotalPrice,
} from '../store/slices/basketSlice';
import Currency from 'react-currency-formatter';
import {useNavigate} from '../hooks/useNavigation';

const BasketIcon = () => {
  const navigation = useNavigate();
  const basketItemsCount = useAppSelector(selectBasketTotalCount);
  const basketTotalPrice = useAppSelector(selectBasketTotalPrice);

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        style={styles.basketWrapper}
        onPress={() => navigation.navigate('Basket')}>
        <Text style={styles.basketItemsCountWrapper}>{basketItemsCount}</Text>
        <Text style={styles.textWrapper}>View basket</Text>
        <Text style={styles.currencyTextWrapper}>
          <Currency quantity={basketTotalPrice} currency="UAH" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    zIndex: 1,
  },
  currencyTextWrapper: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  basketWrapper: {
    backgroundColor: '#005b96',
    marginHorizontal: 14,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  basketItemsCountWrapper: {
    color: '#6497b1',
    fontWeight: '700',
    fontSize: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
  },
  textWrapper: {
    flex: 1,
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BasketIcon;
