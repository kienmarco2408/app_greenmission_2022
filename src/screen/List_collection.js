import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import List_location from '../screenComponent/List_location';
import List_maps from '../screenComponent/List_maps';

const List_collection = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            width: '100%',
            height: 96,
            backgroundColor: '#13A49E',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: 'row' }}>
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21.94,
                  color: 'white',
                }}
              >
                Danh sách điểm gom
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 26,
              marginBottom: 200,
            }}
          >
            <List_maps />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default List_collection;
