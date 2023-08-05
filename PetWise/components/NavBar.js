import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../commons/sizes";

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#80ED99',
    width : windowWidth,
    height : 90,
    display : 'flex',
    justifyContent:  'center',
    alignItems : 'center',
    position : 'absolute',
    top: 0
  }
});
const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
}
 
export default NavBar;