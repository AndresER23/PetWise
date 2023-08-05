import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

const UserStatus = () => {
  return (
    <TouchableOpacity>
      <View style={localStyles.container}>
        <Image
          style={localStyles.image}
          source={require("../assets/fingerprint.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  container: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 999999,
    padding: 5,
    marginTop: 0,
  },
});

export default UserStatus;
