import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Alert,
} from "react-native";
import { styles } from "../../styles/globalStyles";
import { StyleSheet } from "react-native";
import { useState } from "react";
import theme from "../../styles/theme";
import { singUpWithEmail } from "../../firebaseApp/client";
const petTypes = {
  DOG: "Dog",
  CAT: "Cat",
  OTHER: "Other",
};
const Register = ({ route }) => {
  const [activePet, setActivePet] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState(null);

  const validatePassword = () => {
    if (password.length && confirmPassword != password) {
      setError({
        type: "password",
        message: "The password does not match",
      });
    } else {
      setError(null);
    }
  };

  const handleInputChange = (type) => {
    if (type == "email") {
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (!regex.test(email)) {
        setError({ type: "badEmail", message: "Invalid email address" });
        return;
      } else {
        setError("");
      }
    }
  };
  const handleSingUp = () => {
    if((email && password && activePet) && error == null ){
      try {
        singUpWithEmail(email, password, activePet);
      } catch (err) {
        Alert.alert('Opps', err.message);
      }
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={localStyles.container}>
        <Image source={require('../../assets/pandaReading.png')} style={localStyles.headerImage}/>
        <View>
          <View style={localStyles.item}>
            <Text style={localStyles.text}>Email</Text>
            <TextInput
              style={
                error?.type == "badEmail"
                  ? styles.textInputError
                  : styles.textInput
              }
              onChangeText={(text) => setEmail(text)}
              onBlur={() => handleInputChange("email")}
            />
            {error?.type == "badEmail" && (
              <Text style={styles.textError}>{error.message}</Text>
            )}
          </View>
          <View style={localStyles.item}>
            <Text style={localStyles.text}>Contaseña</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            >
              {route.params.email}
            </TextInput>
          </View>
          <View style={localStyles.item}>
            <Text style={localStyles.text}>Confirma tu contaseña</Text>
            <TextInput
              style={
                error?.type == "password"
                  ? styles.textInputError
                  : styles.textInput
              }
              onChangeText={(text) => setConfirmPassword(text)}
              onBlur={() => validatePassword()}
              secureTextEntry={true}
            >
              {route.params.email}
            </TextInput>
            {error?.type == "password" && (
              <Text style={styles.textError}>{error.message}</Text>
            )}
          </View>
        </View>
        <View style={localStyles.petSelectorContainer}>
          <Text style={localStyles.secontaryText}>¿Cual es tu peludo?</Text>
          <View style={localStyles.imagesContainer}>
            <TouchableOpacity onPress={() => setActivePet(petTypes.CAT)}>
              <View
                style={
                  activePet == "Cat"
                    ? localStyles.activePetContainer
                    : localStyles.petContainer
                }
              >
                <Image
                  source={require("../../assets/cat.png")}
                  style={localStyles.petsImage}
                />
              </View>
              <Text style={styles.centerText}>{petTypes.CAT}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActivePet(petTypes.DOG)}>
              <View
                style={
                  activePet == "Dog"
                    ? localStyles.activePetContainer
                    : localStyles.petContainer
                }
              >
                <Image
                  source={require("../../assets/dog.png")}
                  style={localStyles.petsImage}
                />
              </View>
                <Text style={styles.centerText}>{petTypes.DOG}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActivePet(petTypes.OTHER)}>
              <View
                style={
                  activePet == "Other"
                    ? localStyles.activePetContainer
                    : localStyles.petContainer
                }
              >
                <Image
                  source={require("../../assets/otherpet.png")}
                  style={localStyles.petsImage}
                />
              </View>
              <Text style={styles.centerText}>{petTypes.OTHER}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={localStyles.button} onPress={()=>handleSingUp()}>
            <Image
              source={require("../../assets/confirmImageWhite.png")}
              style={localStyles.buttonImage}
            ></Image>
            <Text style={localStyles.textConfirm}>¡Registrarse!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  item: {
    margin: 10,
    gap: 0,
  },
  text: {
    marginLeft: 10,
  },
  petsImage: {
    width: 60,
    height: 60,
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  petSelectorContainer: {
    gap: 20,
    marginTop: 20,
  },
  petContainer: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 99999,
    borderColor: theme.backgroundColor,
  },
  activePetContainer: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 99999,
    borderColor: theme.backgroundColor,
    backgroundColor: theme.backgroundColor,
  },
  secontaryText: {
    textAlign: "center",
  },
  buttonImage: {
    width: 40,
    height: 40,
    position: "relative",
    left:0
  },
  button : {
    display: "flex",
    flexDirection: "row",
    alignItems : "center",
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 20,
    borderColor : theme.backgroundColor,
    backgroundColor: theme.backgroundColor,
    borderRadius: 14,
    marginTop: 60
  },
  textConfirm : {
    color: theme.principalTextColor,
    fontWeight : 700,
    marginLeft: 10,
    fontSize : 16
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 45

  },
  headerImage : {
    width: 150,
    height: 150,
    marginBottom: 20,
  }

});
export default Register;
