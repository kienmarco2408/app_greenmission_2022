import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const List_news_nav = () => {
  const navigation = useNavigation();
  const news = [
    {
      id: 1,
      title: "Thông tin về các loại rác thải và cách xử lý",
      name: "Samule Doe",
      img: require("../storage/imgs/list_news/img1.jpg"),
      view: "4k"
    },
    {
      id: 2,
      title: "Học về mô hình 3R",
      name: "Samule Doe",
      img: require("../storage/imgs/list_news/img2.jpg"),
      view: "4k"
    },
    {
      id: 3,
      title: "Các cách tái chế rác tại nhà cực đơn giản",
      name: "Samule Doe",
      img: require("../storage/imgs/list_news/img3.jpg"),
      view: "4k"
    },
    {
      id: 4,
      title: "Các cách tái chế rác tại nhà cực đơn giản",
      name: "Samule Doe",
      img: require("../storage/imgs/list_news/img3.jpg"),
      view: "4k"
    },
    {
      id: 5,
      title: "Các cách tái chế rác tại nhà cực đơn giản",
      name: "Samule Doe",
      img: require("../storage/imgs/list_news/img3.jpg"),
      view: "4k"
    }
  ];
  return news.map((data, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail")}
        key={data.id}
      >
        <View
          key={data.id}
          style={{
            width: "90%",
            height: 95,
            marginHorizontal: "5%",
            flexDirection: "row",
            marginBottom: 16
          }}
        >
          <View>
            <Image source={data.img} style={{ width: 82, height: 90 }} />
          </View>
          <View style={{ marginLeft: 12 }}>
            <View style={{ width: "98%", height: 60 }}>
              <Text>{data.title}</Text>
            </View>

            <Text>{data.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="user" />
              <Text> {data.view}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default List_news_nav;
