import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { gift } from "../data/listgift";

const List_change_coin = () => {
  const navigation = useNavigation();

  return gift.map((data, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChangeCoin", {
            img: data.img,
            name: data.name,
            content: data.content,
            note: data.note,
            coin: data.coin,
          })
        }
        key={data.id}
      >
        <View
          style={{
            width: 133.3,
            height: 159.56,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
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
      </TouchableOpacity>
    );
  });
};

export default List_change_coin;
