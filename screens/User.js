import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomCard from "../components/UI/CustomCard";
import { Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
function User() {
  return (
    <>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20%",
            paddingBottom: "5%",
          }}
        >
          <Avatar.Image
            size={200}
            source={{
              uri: "https://www.linkpicture.com/q/279113859_938299290174803_7504639283245067678_n.jpg",
            }}
            style={{
              borderRadius: 160,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
              backgroundColor: "white",
            }}
          />
        </View>
        <View style={{ padding: "5%" }}>
          <CustomCard>
            <TouchableOpacity
              style={{
                borderBottomWidth: 2,
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 5,
                paddingTop: 10,
              }}
            >
              <Text>Change Password</Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </CustomCard>

          <CustomCard>
            <TouchableOpacity
              style={{
                borderBottomWidth: 2,
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 5,
                paddingTop: 10,
              }}
            >
              <Text>Logout</Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </CustomCard>
        </View>
      </ScrollView>
    </>
  );
}

export default User;
