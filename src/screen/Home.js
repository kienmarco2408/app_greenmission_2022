import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal
} from "react-native";
import React, { useState } from "react";
import { Button } from "native-base";
import List_ingredient from "../screenComponent/List_ingredient";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import List_location from "../screenComponent/List_location";
import List_news from "../screenComponent/List_news";
import { useNavigation } from "@react-navigation/native";
import PopupInfor from "../screenComponent/PopupInfor";

const Home = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 1050 }}>
          <View
            style={{
              width: "100%",
              height: 238,
              backgroundColor: "#F9BA19",
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              position: "absolute"
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 21 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Challenges")}
                style={{ marginLeft: "8%" }}
              >
                <View>
                  <Image
                    source={require("../storage/imgs/avt.jpg")}
                    style={{ width: 65, height: 65, borderRadius: 60 }}
                  />
                </View>
              </TouchableOpacity>

              <View
                style={{ marginLeft: 5, width: 176, height: 57, marginTop: 5 }}
              >
                <Text
                  style={{ fontSize: 15, lineHeight: 21, letterSpacing: -0.32 }}
                >
                  Chào Gia Huy
                </Text>
                <Text
                  style={{ fontSize: 12, lineHeight: 21, letterSpacing: -0.32 }}
                >
                  Đống Đa, Hà Nội, Việt Nam
                </Text>
                <Text
                  style={{ fontSize: 12, lineHeight: 21, letterSpacing: -0.32 }}
                >
                  Chúc bạn 1 ngày tốt lành!
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "85%",
                height: 180,
                backgroundColor: "#13A49E",
                marginHorizontal: "8%",
                marginTop: 11,
                borderRadius: 25,
                flexDirection: "row"
              }}
            >
              <View style={{ width: 154, height: 120, marginLeft: "10%" }}>
                <Text
                  style={{ fontSize: 48, lineHeight: 67, textAlign: "center" }}
                >
                  80%
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    lineHeight: 21,
                    letterSpacing: -0.32,
                    textAlign: "center"
                  }}
                >
                  Hoàn thành để nhận 20 xu
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    lineHeight: 21,
                    letterSpacing: -0.32
                  }}
                >
                  Thu gom 5kg vỏ nhựa
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    lineHeight: 21,
                    textAlign: "center",
                    letterSpacing: -0.32
                  }}
                >
                  (4/5kg)
                </Text>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Button
                    size="sm"
                    width="100"
                    onPress={() => navigation.navigate("Maps")}
                  >
                    Thu gom
                  </Button>
                </View>
              </View>
              <View style={{ marginLeft: 28, bottom: 55 }}>
                <Image source={require("../storage/imgs/banner.png")} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: "9%",
                marginTop: 22
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <List_ingredient />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 33,
                marginHorizontal: "8%",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 16 }}>Địa điểm thu gom gần bạn: </Text>
              <TouchableOpacity
                onPress={() => navigation.push("Collection")}
                style={{ marginLeft: "auto" }}
              >
                <Text style={{ fontSize: 12 }}>
                  Xem thêm <Entypo name="chevron-right" />
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginLeft: "8%",
                marginTop: 20
              }}
            >
              <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row" }}>
                  <List_location />
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 33,
                marginLeft: "10%",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 16 }}>Tin tức</Text>
              <TouchableOpacity
                onPress={() => navigation.push("News")}
                style={{ marginLeft: "auto", marginRight: "10%" }}
              >
                <Text
                  style={{
                    fontSize: 12
                  }}
                >
                  Xem thêm <Entypo name="chevron-right" />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <List_news />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
