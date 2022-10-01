import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const Done = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: 96,
          backgroundColor: "#13A49E",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40
        }}
      >
        <View style={{ marginLeft: 20, marginTop: 40, flexDirection: "row" }}>
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
                color: "white"
              }}
            >
              Điểm gom
            </Text>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text>Green Mission</Text>
        </View>
        <View>
          <Text>Xác nhận Gia Huy đã tới điểm thu gom: Yên Hòa Sunshine</Text>
        </View>

        <View
          style={{
            width: 156,
            height: 70,
            marginTop: 7,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>0.5kg = +10</Text>
            <View
              style={{
                backgroundColor: "#F3CC30",
                width: 49,
                height: 49,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 3
              }}
            >
              <FontAwesome name="recycle" size={20} />
            </View>
          </View>
        </View>
        <View>
          <Text>4.5kg/5kg</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image source={require("../storage/imgs/icon.png")} />
        </View>
        <View>
          <Text>Làm tốt lắm</Text>
        </View>
        <View style={{ width: 306, height: 96 }}>
          <Text style={{ textAlign: "center" }}>
            Những vật bạn đem tới sẽ được tái chế thành những vật dụng hữu ích
            hơn. Cảm ơn hành động bảo vệ môi trường của bạn.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Done;
