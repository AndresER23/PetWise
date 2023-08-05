import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../app/logout/Login";
import Register from "../app/logout/Register";
import theme from "../styles/theme";
const logoutStack = createNativeStackNavigator()

const LogoutStack = () => {
  return (
    <logoutStack.Navigator initialRouteName="Login">
      <logoutStack.Screen name="Login" component={Login} options= {{headerShown: false}}/>
      <logoutStack.Screen name="Register" component={Register} options={{presentation:"modal" , headerTitle: 'Regristrate', headerStyle : {
        backgroundColor : theme.backgroundColor,
      }}}/>
    </logoutStack.Navigator>
  );
}
 
export default LogoutStack;