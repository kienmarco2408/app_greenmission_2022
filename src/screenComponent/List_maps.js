import { View, Text, Image } from 'react-native';
import React from 'react';

const List_maps = () => {
  const list_maps = [
    {
      id: 1,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750m',
      img: require('../storage/imgs/list_maps/loca1.png'),
    },
    {
      id: 2,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750m',
      img: require('../storage/imgs/list_maps/loca1.png'),
    },
    {
      id: 3,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750m',
      img: require('../storage/imgs/list_maps/loca1.png'),
    },
    {
      id: 4,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750m',
      img: require('../storage/imgs/list_maps/loca1.png'),
    },
    {
      id: 5,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750m',
      img: require('../storage/imgs/list_maps/loca1.png'),
    },
    {
      id: 6,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750m',
      img: require('../storage/imgs/list_maps/loca1.png'),
    },
  ];
  return list_maps.map((data, index) => {
    return (
      <View
        key={data.id}
        style={{
          width: '85%',
          height: 100,
          backgroundColor: '#F1F5E8',
          borderRadius: 20,
          flexDirection: 'row',
          marginBottom: 12,
        }}
      >
        <View>
          <Image source={data.img} style={{ width: 120, height: 90 }} />
        </View>
        <View style={{ marginTop: 31, marginLeft: 38 }}>
          <Text>
            {data.distance} | {data.time}
          </Text>
          <Text>{data.title}</Text>
        </View>
      </View>
    );
  });
};

export default List_maps;
