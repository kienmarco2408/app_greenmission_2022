import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import List_change_coin from "../screenComponent/List_change_coin";
import { useNavigation } from "@react-navigation/native";

const Challenges = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
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
            style={{
              marginTop: 58,
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
            height: 151,
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
            <Text style={{ fontSize: 20, marginRight: 2 }}>100 xu</Text>
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
            <Text style={{ textAlign: "center" }}>
              S???p ho??n th??nh th??? th??ch thu th???p 5kg nh???a ????? nh???n th??m 100 xu
              (4.5/5kg)
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 335,
            height: "auto",
            backgroundColor: "#FFBB00",
            marginHorizontal: "10%",
            marginTop: 19,
            borderRadius: 11,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 34,
              height: 34,
              backgroundColor: "#5ED780",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 16,
              marginLeft: 10,
            }}
          >
            <FontAwesome name="check" size={20} color="white" />
          </View>
          <View
            style={{
              width: 184,
              height: 36,
              marginLeft: 12,
              marginVertical: 16,
            }}
          >
            <Text>Thu gom 5kg v??? chai th???y tinh trong 7 ng??y</Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: 15,
            }}
          >
            <Text style={{ fontSize: 12 }}>5/5kg</Text>
            <View
              style={{
                marginTop: 2,
              }}
            >
              <Button
                size="sm"
                width="60"
                height="30"
                backgroundColor="#F38015"
                borderRadius={9}
              >
                100 xu
              </Button>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 335,
            height: "auto",
            backgroundColor: "#13A49E",
            marginHorizontal: "10%",
            marginTop: 19,
            borderRadius: 11,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginVertical: 16,
              marginLeft: 10,
            }}
          >
            <FontAwesome name="recycle" size={34} color="white" />
          </View>
          <View
            style={{
              width: 184,
              height: 36,
              marginLeft: 12,
              marginVertical: 16,
            }}
          >
            <Text>Thu th???p 5kg nh???a trong 7 ng??y</Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: 15,
            }}
          >
            <Text style={{ fontSize: 12 }}>4.5/5kg</Text>
            <View
              style={{
                marginTop: 2,
              }}
            >
              <Button
                size="sm"
                width="60"
                height="30"
                backgroundColor="#D9D9D9"
                borderRadius={9}
              >
                100 xu
              </Button>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 335,
            height: "auto",
            backgroundColor: "#B8B8B8",
            marginHorizontal: "10%",
            marginTop: 19,
            borderRadius: 11,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginVertical: 16,
              marginLeft: 10,
            }}
          >
            <FontAwesome name="recycle" size={34} color="white" />
          </View>
          <View
            style={{
              width: 184,
              height: 36,
              marginLeft: 12,
              marginVertical: 16,
            }}
          >
            <Text>
              H??y t???o 1 s???n ph???m DIY b???ng ????? c?? kh??ng d??ng n???a trong gia ????nh
              b???n.
            </Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: 15,
            }}
          >
            <Text style={{ fontSize: 12 }}>ch??a xong</Text>
            <View
              style={{
                marginTop: 2,
              }}
            >
              <Button
                size="sm"
                width="60"
                height="30"
                backgroundColor="#D9D9D9"
                borderRadius={9}
              >
                200 xu
              </Button>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 335,
            height: "auto",
            backgroundColor: "#B8B8B8",
            marginHorizontal: "10%",
            marginTop: 19,
            borderRadius: 11,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginVertical: 16,
              marginLeft: 10,
            }}
          >
            <FontAwesome name="recycle" size={34} color="white" />
          </View>
          <View
            style={{
              width: 184,
              height: 36,
              marginLeft: 12,
              marginVertical: 16,
            }}
          >
            <Text style={{ width: 184, height: 40 }}>
              H??y tr???ng v?? ch??m s??c c??y xanh(ch???p ???nh c??y n???y m???m).
            </Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: 15,
            }}
          >
            <Text style={{ fontSize: 12 }}>ch??a xong</Text>
            <View
              style={{
                marginTop: 2,
              }}
            >
              <Button
                size="sm"
                width="60"
                height="30"
                backgroundColor="#D9D9D9"
                borderRadius={9}
              >
                200 xu
              </Button>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: "10%", marginTop: 22 }}>
          <Text>?????i xu</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <List_change_coin />
            </View>
          </ScrollView>
        </View>
        <View style={{ marginHorizontal: "10%", marginTop: 22 }}>
          <Text>Gi??? qu?? c???a b???n</Text>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate("CartGift")}>
              <View
                style={{
                  width: 133.3,
                  height: 159.56,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  marginRight: 26.26,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              >
                <Image
                  source={require("../storage/imgs/list_gift/gift1.png")}
                  style={{
                    width: 133.3,
                    height: 120,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Text>1 v?? CGV</Text>
                <Text>500 xu</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: "25%" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Challenges;
