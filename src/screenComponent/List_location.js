import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const List_location = () => {
  const navigation = useNavigation();
  const list_maps = [
    {
      id: 1,
      title: "Ngõ 17 Vũ Phạm Hàm, Yên Hoà",
      time: "2 phút",
      distance: "180m",
      img: require("../storage/imgs/list_maps/loca1.png"),
    },
    {
      id: 2,
      title: "Ngõ 260 Phố Đội Cấn, Liễu Giai",
      time: "12 phút",
      distance: "3.8km",
      img: require("../storage/imgs/list_maps/loca1.png"),
    },
    {
      id: 3,
      title: "French Quarter, Hoàn Kiếm",
      time: "31 phút",
      distance: "9.4km",
      img: require("../storage/imgs/list_maps/loca1.png"),
    },
  ];
  return list_maps.map((data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() =>
          navigation.push("Collect", {
            title: data.title,
            time: data.time,
            distance: data.distance,
            img: data.img,
          })
        }
      >
        <View
          style={{
            width: 251,
            height: 100,
            backgroundColor: "#F1F5E8",
            borderRadius: 20,
            marginRight: 12,

            flexDirection: "row",
          }}
        >
          <View>
            <Image source={data.img} />
          </View>
          <View style={{ marginTop: 31, marginLeft: 12 }}>
            <Text>
              {data.distance} | {data.time}
            </Text>
            <Text style={{ width: 135, marginTop: 5 }}>{data.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default List_location;
