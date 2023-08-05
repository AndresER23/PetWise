import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app/login/Home";
import MyPet from "../app/login/MyPet"
import theme from "../styles/theme";
import UserStatus from "../components/UserStatus";

const loginStack = createNativeStackNavigator()

const LoginStack = () => {
  return (
    <loginStack.Navigator initialRouteName="Home">
      <loginStack.Screen name="Home" component={Home} options={{
        headerStyle : {
          backgroundColor : theme.backgroundColor,
        },
        headerTintColor : theme.principalTextColor
        ,
        headerTitleStyle : {
          fontWeight : "bold"
        },
        headerRight : () => <UserStatus/>
        
      }}/>
      <loginStack.Screen name="MyPet" component={MyPet}/>
    </loginStack.Navigator>
  );
}
 
export default LoginStack;