import { View, Text, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const List_news = () => {
  const news = [
    {
      id: 1,
      title: 'Thông tin về các loại rác thải và cách xử lý',
      name: 'Samule Doe',
      img: require('../storage/imgs/list_news/img1.jpg'),
      view: '4k',
    },
    {
      id: 2,
      title: 'Học về mô hình 3R',
      name: 'Samule Doe',
      img: require('../storage/imgs/list_news/img2.jpg'),
      view: '4k',
    },
    {
      id: 3,
      title: 'Các cách tái chế rác tại nhà cực đơn giản',
      name: 'Samule Doe',
      img: require('../storage/imgs/list_news/img3.jpg'),
      view: '4k',
    },
  ];
  return news.map((data, index) => {
    return (
      <View
        key={data.id}
        style={{
          width: 335,
          height: 92,
          marginHorizontal: '10%',
          flexDirection: 'row',
          marginBottom: 16,
        }}
      >
        <View>
          <Image source={data.img} style={{ width: 82, height: 92 }} />
        </View>
        <View style={{ marginLeft: 12 }}>
          <View style={{ width: 205, height: 60 }}>
            <Text>{data.title}</Text>
          </View>

          <Text>{data.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="user" />
            <Text> {data.view}</Text>
          </View>
        </View>
      </View>
    );
  });
};

export default List_news;