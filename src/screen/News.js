import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import List_news_nav from "../screenComponent/List_news_nav";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const News = () => {
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
              Tin tức
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            width: "90%",
            height: 60,
            backgroundColor: "#F3F9FF",
            marginTop: 31,
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 8,
            flexDirection: "row"
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              width: "90%"
            }}
          />
          <Ionicons
            name="md-search-outline"
            size={24}
            color="grey"
            style={{ bottom: 3 }}
          />
        </View>
        <View style={{ marginLeft: "5%", marginTop: 22, marginBottom: 7 }}>
          <Text>Kết quả tìm kiếm của bạn</Text>
        </View>
        <View style={{ paddingBottom: "45%" }}>
          <List_news_nav />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
