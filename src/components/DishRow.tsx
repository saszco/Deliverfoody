import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Currency from 'react-currency-formatter';
import MinusCircleIcon from '../icons/MinusCircleIcon';
import PlusCircleIcon from '../icons/PlusCircleIcon';

type DishRowProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  dishImgUrl: string;
};

const DishRow = ({id, name, description, price, dishImgUrl}: DishRowProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(prev => !prev)}
        style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>
            <Currency quantity={price} currency="UAH" />
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: dishImgUrl,
            }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={styles.addItemWrapper}>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity>
              <MinusCircleIcon size={42} color="#d5e2eb" />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={42} color="#03396c" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontSize: 18,
  },
  description: {
    color: '#6b7280',
  },
  price: {
    color: '#03396c',
    marginTop: 8,
    fontSize: 18,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#d5e2eb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
  },
  addItemWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default DishRow;
