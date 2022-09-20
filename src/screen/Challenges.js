import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Challenges = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#13A49E',
          width: '100%',
          height: 268,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 40,
          position: 'absolute',
        }}
      >
        <View
          style={{
            marginTop: 58,
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../storage/imgs/avt.jpg')}
            style={{
              width: 110,
              height: 110,
              borderRadius: 100,
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 5,
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 22.4,
            letterSpacing: 0.2,
            fontWeight: '600',
            color: 'white',
          }}
        >
          Gia Huy
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 334,
            height: 151,
            backgroundColor: 'white',
            borderRadius: 25,
            marginHorizontal: '10%',
            marginTop: 209,
          }}
        >
          <Text style={{ fontSize: 20, marginRight: 2 }}>100 xu</Text>
          <View
            style={{
              backgroundColor: '#F3CC30',
              width: 49,
              height: 49,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesome name="recycle" size={20} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Challenges;
