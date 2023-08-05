import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { windowWidth, windowHeight } from "../../commons/sizes";
const Home = () => {
  return (
   <View style={localStyle.container}>
     <Text>Hola desde Home</Text>
     <StatusBar hidden={true}></StatusBar>
   </View>
  );
}

const localStyle = StyleSheet.create({
  container : {
    height : windowHeight,
    width: windowWidth,
    flex: 1,
    alignItems: 'center',
  }
})
export default Home;