import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Collect = ({ route }) => {
  const { title } = route.params;
  const { time } = route.params;
  const { distance } = route.params;
  const { img } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View style={{ marginLeft: "5%", marginTop: 30 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            marginTop: 60,
            width: 231,
            height: 48,
            marginHorizontal: "20%",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            Bạn đang ở điểm thu: {title}
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 22 }}>
          <Image
            style={{ width: 58, height: 58 }}
            source={require("../storage/imgs/mark/map_pin.png")}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.push("Done")}>
          <View
            style={{
              width: 251,
              height: 100,
              backgroundColor: "#F1F5E8",
              borderRadius: 20,
              marginRight: 12,
              shadowOpacity: 0.25,
              marginHorizontal: "20%",
              marginTop: 14,
              flexDirection: "row",
            }}
          >
            <View style={{ marginVertical: 5 }}>
              <Image source={img} />
            </View>
            <View style={{ marginTop: 31, marginLeft: 12 }}>
              <Text style={{ marginBottom: 6 }}>
                {distance} | {time}
              </Text>
              <Text style={{ width: 135, marginTop: 5 }}>{title}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 42, marginHorizontal: "25%" }}>
          <Image source={require("../storage/imgs/Frame.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Collect;
