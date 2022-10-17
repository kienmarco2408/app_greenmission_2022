import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { Button } from "native-base";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import List_change_coin from "../screenComponent/List_change_coin";
import { useNavigation } from "@react-navigation/native";
import { gift } from "../data/listgift";

const ChangeCoin = ({ route }) => {
  const { img } = route.params;
  const { name } = route.params;
  const { content } = route.params;
  const { note } = route.params;
  const { coin } = route.params;
  const navigation = useNavigation();
  return gift.map((data, index) => {
    return (
      <SafeAreaView
        style={{ backgroundColor: "#F1F5E8", width: "100%" }}
        key={data.id}
      >
        <ScrollView>
          <View
            style={{
              backgroundColor: "#13A49E",
              width: "100%",
              height: 268,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 40,
              position: "absolute",
            }}
          >
            <View
              style={{ marginLeft: 20, marginTop: 40, flexDirection: "row" }}
            >
              <View>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="white"
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
                  }}
                >
                  Thử thách
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storage/imgs/avt.jpg")}
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 100,
                }}
              />
            </View>

            <Text
              style={{
                marginTop: 5,
                textAlign: "center",
                fontSize: 16,
                lineHeight: 22.4,
                letterSpacing: 0.2,
                fontWeight: "600",
                color: "white",
              }}
            >
              Gia Huy
            </Text>
          </View>

          <View
            style={{
              width: 334,
              height: 225,
              backgroundColor: "white",
              borderRadius: 25,
              marginHorizontal: "10%",
              marginTop: 209,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
              }}
            >
              <Text style={{ fontSize: 20, marginRight: 2 }}>{coin}</Text>
              <View
                style={{
                  backgroundColor: "#F3CC30",
                  width: 49,
                  height: 49,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="recycle" size={20} />
              </View>
            </View>
            <View
              style={{
                width: 305,
                height: 42,
                justifyContent: "center",
                marginHorizontal: 14,
              }}
            >
              <Text style={{ textAlign: "center" }}>{content}</Text>
              <Text style={{ textAlign: "center" }}>
                Thời hạn: 14/09 - 14/12/2022
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
                onPress={() =>
                  navigation.push("CodeGift", {
                    img: data.img,
                    name: data.name,
                    content: data.content,
                    note: data.note,
                    coin: data.coin,
                  })
                }
                colorScheme="#13A49E"
              >
                Đổi thưởng
              </Button>
            </View>
          </View>

          <View style={{ marginTop: "100%" }}></View>
        </ScrollView>
      </SafeAreaView>
    );
  });
};

export default ChangeCoin;
