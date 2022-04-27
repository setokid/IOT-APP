import { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Modal } from "react-native";
import CustomDropdown from "../CustomDropdown";

function IconRight() {
  const [visible, setVisible] = useState(false);

  function menuHandler() {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.touchContainer}>
        <TouchableOpacity
          onPress={() => menuHandler()}
          style={{
            marginRight: "8%",
          }}
        >
          <Image
            source={{
              uri: "https://www.linkpicture.com/q/279113859_938299290174803_7504639283245067678_n.jpg",
            }}
            style={styles.image}
            resizeMode={"cover"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dropdownCntainer}>
        {visible ? <CustomDropdown menuHandler={menuHandler} /> : null}
      </View>
    </View>
  );
}

export default IconRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  touchContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 180,
  },
  dropdownCntainer: {
    position: "absolute",
    top: 43,
    right: "8%",
    backgroundColor: "blue",
  },
});
