import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList
} from "react-native";
import React from "react";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Button, Center } from "native-base";
import { inlineStyles } from "react-native-svg";

const Separator = () => <View style={styles.separator} />;

const DetailNews = ({ navigation, route }) => {
  const { title } = route.params;
  const { img } = route.params;
  const { view } = route.params;
  const { content } = route.params;
  const { imgPost1 } = route.params;
  const { postTitle1 } = route.params;
  const { content1 } = route.params;
  const { imgPost2 } = route.params;
  const { content2 } = route.params;
  const { postTitle2 } = route.params;
  const { imgPost3 } = route.params;
  return (
    <SafeAreaView>
      <View style={{ height: "auto" }}>
        <View style={styles.topNav}>
          <View style={{ marginLeft: 20, marginTop: 30, flexDirection: "row" }}>
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View>
              <Text style={styles.topNavTitle}>{title}</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ height: "84%" }}>
          <View style={styles.pageCSS}>
            {/* all page */}
            <View>
              <Image source={img} style={styles.img} />
              <View style={styles.bannerInfo}>
                <Text style={styles.bannerTitle}>{title}</Text>
                <FontAwesome
                  name="bookmark-o"
                  size={28}
                  color="#447DB9"
                  style={{ marginLeft: "10%" }}
                />
              </View>
              <View style={styles.bannerView}>
                <MaterialIcons
                  name="people-outline"
                  size={24}
                  color="black"
                  style={{ marginLeft: 12 }}
                />
                <Text style={{ marginLeft: 12 }}>{view}</Text>
              </View>
              <Separator />
            </View>

            <Text style={styles.text}>{content}</Text>
            <Image source={imgPost1} style={styles.img} />
            <Text
              style={{ marginVertical: 20, fontSize: 16, fontWeight: "600" }}
            >
              {postTitle1}
            </Text>
            <Text style={styles.text}>{content1}</Text>
            <Image source={imgPost2} style={styles.img} />
            <Text
              style={{ marginVertical: 20, fontSize: 16, fontWeight: "600" }}
            >
              {postTitle2}
            </Text>
            <Text style={styles.text}>{content2}</Text>
            <Image source={imgPost3} style={styles.img} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pageCSS: {
    padding: 20
  },
  topNav: {
    width: "100%",
    height: 96,
    backgroundColor: "#13A49E",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  topNavTitle: {
    fontSize: 18,
    lineHeight: 21.94,
    color: "white",
    marginLeft: 16,
    width: 320
  },
  banner: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: 20
  },
  bannerInfo: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  bannerTitle: {
    fontSize: 16,
    letterSpacing: 1,
    width: "80%"
  },
  bannerView: {
    marginVertical: 4,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  category: {
    padding: 6,
    color: "#335EF7"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    fontSize: 14,
    marginVertical: 20
  },
  img: {
    width: null,
    flex: 1,
    height: 250
  }
});
export default DetailNews;
