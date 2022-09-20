import { View, Text, Image } from 'react-native';
import React from 'react';

const List_change_coin = () => {
  const gift = [
    {
      id: 1,
      img: require('../storage/imgs/list_gift/gift1.png'),
      name: '1 vé CGV',
      coin: '500 xu',
    },
    {
      id: 2,
      img: require('../storage/imgs/list_gift/gift2.jpg'),
      name: 'Khóa học Yoga',
      coin: '1000 xu',
    },
    {
      id: 3,
      img: require('../storage/imgs/list_gift/gift3.jpg'),
      name: 'Gongcha voucher',
      coin: '600 xu',
    },
    {
      id: 4,
      img: require('../storage/imgs/list_gift/gift4.jpg'),
      name: 'Terra juice',
      coin: '300 xu',
    },
    {
      id: 5,
      img: require('../storage/imgs/list_gift/gift5.jpg'),
      name: 'Gogi voucher',
      coin: '1000 xu',
    },
  ];
  return gift.map((data, index) => {
    return (
      <View
        key={data.id}
        style={{
          width: 133.3,
          height: 159.56,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          marginRight: 26.26,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Image
          source={data.img}
          style={{
            width: 133.3,
            height: 120,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <Text>{data.name}</Text>
        <Text>{data.coin}</Text>
      </View>
    );
  });
};

export default List_change_coin;
