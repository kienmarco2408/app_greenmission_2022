import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Button } from "native-base";
import List_collection from "./List_collection";

const Done = ({ route }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 96,
            backgroundColor: "#13A49E",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: "row" }}>
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.navigate("Maps")}
              />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21.94,
                  color: "white",
                }}
              >
                Điểm gom
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: "5%",
          }}
        >
          <View style={{ marginTop: 23 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#13A49E",
              }}
            >
              Green Mission
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
            >
              Xác nhận Gia Huy đã tới điểm thu gom
            </Text>
          </View>

          <View
            style={{
              width: 156,
              height: 70,
              marginTop: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#13A49E", fontSize: 20, fontWeight: "bold" }}
              >
                0.5kg = +10
              </Text>
              <View
                style={{
                  backgroundColor: "#F3CC30",
                  width: 49,
                  height: 49,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 3,
                }}
              >
                <FontAwesome name="recycle" size={24} color="#13A49E " />
              </View>
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "400", color: "#757575", fontSize: 14 }}>
              4.5kg/5kg
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Image source={require("../storage/imgs/icon.png")} />
          </View>
          <View style={{ marginTop: 19 }}>
            <Text
              style={{ fontWeight: "700", fontSize: 20, lineHeight: 24.38 }}
            >
              Làm tốt lắm
            </Text>
          </View>
          <View style={{ width: 306, height: 96, marginTop: 8 }}>
            <Text
              style={{
                textAlign: "center",
                color: "#757575",
                lineHeight: 24,
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              Những vật bạn đem tới sẽ được tái chế thành những vật dụng hữu ích
              hơn. Cảm ơn hành động bảo vệ môi trường của bạn.
            </Text>
          </View>
          <View
            style={{
              width: 307,
              height: 49,
              marginTop: 10,
              backgroundColor: "#13A49E",
              marginHorizontal: "5%",
              borderRadius: 6,
              paddingTop: 5,
            }}
          >
            <Button
              onPress={() => navigation.push("Collection")}
              colorScheme="#13A49E"
            >
              Done
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Done;
