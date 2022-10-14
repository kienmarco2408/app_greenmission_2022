import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartGift = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#F1F5E8", height: "100%" }}>
      <View>
        <View style={{ marginLeft: 20, marginTop: 51, flexDirection: "row" }}>
          <View>
            <AntDesign
              name="arrowleft"
              size={24}
              color="#13A49E"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 21.94,
                color: "white",
                marginLeft: 16,
                color: "#13A49E"
              }}
            >
              Giỏ quà
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "grey",
              fontWeight: "700",
              marginTop: 20,
              marginLeft: "5%"
            }}
          >
            Bạn đã nhận được
          </Text>
        </View>
        <View
          style={{
            marginLeft: "5%",
            width: 133.3,
            height: 159.56,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            marginTop: 21,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }}
        >
          <Image
            source={require("../storage/imgs/list_gift/gift1.png")}
            style={{
              width: 133.3,
              height: 120,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          />
          <Text>1 vé CGV</Text>
          <Text>500 xu</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartGift;
