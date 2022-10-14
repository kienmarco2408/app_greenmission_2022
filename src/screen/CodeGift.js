import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const CodeGift = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#F1F5E8" }}>
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
              Thử thách
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: "center", marginTop: 15 }}>
          <View>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
            >
              Bạn đã nhận được
            </Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Text style={{ textAlign: "center" }}>
              1 vé CGV trị giá 125k (suất phim bất kỳ)
            </Text>
            <Text style={{ textAlign: "center" }}>
              Thời hạn: 14/09 - 14/12/2022
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 21 }}>
            <Image
              source={require("../storage/imgs/list_gift/gift1.png")}
              style={{
                width: 164,
                height: 164,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 67 }}>
            <Image
              source={require("../storage/imgs/list_gift/qr.png")}
              style={{
                width: 198,
                height: 198,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
            />
          </View>
          <View style={{ width: 305, height: 42, marginTop: 12 }}>
            <Text style={{ textAlign: "center", fontSize: 14 }}>
              Đưa mã QR tới bất kỳ cơ sở của CGV để nhận thưởng.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CodeGift;
