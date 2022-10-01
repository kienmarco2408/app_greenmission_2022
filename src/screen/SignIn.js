import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StatusBar
} from "react-native";
import {
  Button,
  Checkbox,
  Icon,
  Input,
  NativeBaseProvider,
  Pressable
} from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar />
      <View>
        <View
          style={{
            width: 338,
            height: 550,
            backgroundColor: "#F1F5E8",
            marginHorizontal: "8%",
            marginTop: 132,
            position: "absolute",
            borderRadius: 30
          }}
        >
          <View>
            <Text
              style={{
                textTransform: "uppercase",
                marginTop: 99,
                textAlign: "center",
                fontSize: 18,
                lineHeight: 27
              }}
            >
              Đăng nhập
            </Text>
          </View>
          <View>
            <View
              style={{
                marginHorizontal: "5%",
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 18
              }}
            >
              <TextInput
                style={{
                  height: 49,
                  width: 310,
                  paddingLeft: 13
                }}
                placeholder="user name"
              />
            </View>
            <View
              style={{
                marginHorizontal: "5%",
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 23
              }}
            >
              <TextInput
                style={{
                  height: 49,
                  width: 310,
                  paddingLeft: 13
                }}
                secureTextEntry={true}
                placeholder="password"
              />
            </View>
          </View>
          <View style={{ marginTop: 29, marginLeft: 14 }}>
            <Checkbox isChecked={true} colorScheme="green">
              <Text style={{ fontSize: 14, lineHeight: 16.41 }}>
                {" "}
                Ghi nhớ tôi
              </Text>
            </Checkbox>
          </View>
          <View
            style={{
              width: 307,
              height: 49,
              marginTop: 10,
              backgroundColor: "#13A49E",
              marginHorizontal: "5%",
              borderRadius: 6,
              paddingTop: 5
            }}
          >
            <Button
              colorScheme="#13A49E"
              onPress={() => navigation.push("Bottom")}
            >
              Login
            </Button>
          </View>
          <View style={{ marginTop: 31 }}>
            <Text style={{ textAlign: "center" }}>hoặc tiếp tục với</Text>
          </View>
          <View
            style={{
              width: 301,
              height: 46,
              marginTop: 5,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                width: 140,
                height: 38,
                borderRadius: 6,
                backgroundColor: "#EEF1F4",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "5%"
              }}
            >
              <Image
                source={require("../storage/imgs/facebook_icon.png")}
                style={{ marginRight: 11.5 }}
              />
              <Text>Facebook</Text>
            </View>
            <View
              style={{
                width: 140,
                height: 38,
                borderRadius: 6,
                backgroundColor: "#EEF1F4",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 21
              }}
            >
              <Image
                source={require("../storage/imgs/google_icon.png")}
                style={{ marginRight: 11.5 }}
              />
              <Text>Google</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ textAlign: "center" }}>
              Bạn đã có tài khoản chưa?{" "}
              <Text style={{ color: "#5EA466" }}>Đăng ký</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 192,
            height: 192,
            borderRadius: 100,
            backgroundColor: "white",
            marginHorizontal: "27%",
            marginTop: 13,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image source={require("../storage/imgs/logo.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default () => {
  return <SignIn />;
};
