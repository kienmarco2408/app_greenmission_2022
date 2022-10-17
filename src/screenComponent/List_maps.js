import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const List_maps = () => {
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
    {
      id: 4,
      title: "Vincom Mega Mall Royal City",
      time: "11 phút",
      distance: "3.3km",
      img: require("../storage/imgs/list_maps/loca1.png"),
    },
    {
      id: 5,
      title: "Lotte Center",
      time: "10 phút",
      distance: "3.2km",
      img: require("../storage/imgs/list_maps/loca1.png"),
    },
    {
      id: 6,
      title: "Làng Việt kiều Châu Âu",
      time: "17 phút",
      distance: "6.6km",
      img: require("../storage/imgs/list_maps/loca1.png"),
    },
  ];
  return list_maps.map((data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() =>
          navigation.navigate("Collect", {
            title: data.title,
            time: data.time,
            distance: data.distance,
            img: data.img,
          })
        }
      >
        <View
          style={{
            width: 350,
            shadowOpacity: 0.5,
            height: 100,
            backgroundColor: "#F1F5E8",
            borderRadius: 20,
            flexDirection: "row",
            marginBottom: 12,
          }}
        >
          <View>
            <Image
              source={data.img}
              style={{ width: 120, height: 90, marginTop: 5 }}
            />
          </View>
          <View style={{ marginTop: 31, marginLeft: 20 }}>
            <Text>
              {data.distance} | {data.time}
            </Text>
            <Text>{data.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default List_maps;
