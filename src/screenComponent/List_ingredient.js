import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import PopupInfor from './PopupInfor';

const List_ingredient = () => {
  const list = [
    {
      id: 1,
      name: 'Nhựa',
      img: require('../storage/imgs/list_ingredient/plastic.png'),
    },
    {
      id: 2,
      name: 'Thủy tinh',
      img: require('../storage/imgs/list_ingredient/glass.png'),
    },
    {
      id: 3,
      name: 'Giấy',
      img: require('../storage/imgs/list_ingredient/paper.png'),
    },
    {
      id: 4,
      name: 'Kim loại',
      img: require('../storage/imgs/list_ingredient/metal.png'),
    },
  ];
  return list.map((data, index) => {
    return (
      <View>
        <TouchableOpacity key={data.id}>
          <View
            style={{
              width: 72,
              height: 106,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 16,
            }}
          >
            <Image source={data.img} />
            <Text style={{ textAlign: 'center' }}>{data.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
};

export default List_ingredient;
