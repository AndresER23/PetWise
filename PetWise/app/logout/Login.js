import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { windowWidth } from '../../commons/sizes'
import { useState } from 'react';
import {loginWithEmail} from '../../firebaseApp/client.js'

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const handleInputChange = (type) => {
    if(type == 'email'){
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
      if(!regex.test(email)){
        setError({type:'badEmail'})
        return
      }else{
        setError("")
      }
    }
  }
  const handleLogin = async () => {
    setLoading(true)
    try{
      await loginWithEmail(email, password)
    }catch(err){
      if(err.message.includes('auth/user-not-found')){
        Alert.alert("Opps",'No se encontró el usuario especificado, por favor intente de nuevo.')
      }
    }finally{
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
          <Image source={require('../../assets/appLogo.png')} style={styles.logo}></Image>
          <Image source={require('../../assets/appTitle.png')} style={styles.appTitle}></Image>
          </View>
          <View style={styles.inputsContainer}>
            <View>
              <Text style={styles.text }>Nombre de usuario</Text>
              <TextInput
                style={!error ? styles.textInput : styles.textInputError}
                placeholder="Nombre de usuario"
                onChangeText={input => setEmail(input)}
                onBlur={() => handleInputChange('email')}
              ></TextInput>
              {error?.type == 'badEmail' && <Text style={styles.textError}>Debes proporcionar un correo valido.</Text>}
            </View>
            <View>
              <Text style={styles.text}>Contraseña</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={input => setPassword(input)}
              ></TextInput>
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>handleLogin()}
            >
            <View>
              <Text style={{ color: 'white', fontWeight: '700', textAlign: 'center', fontSize: 17 }}>
              Iniciar sesión
              </Text>
            </View>
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register', {email})}>
            <Text style={styles.secondaryText}>¿No esta registrado?</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" hidden={true} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginTop: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#57CC99',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#C7F9CC',
    height: 550,
    width: windowWidth - 70,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    width: windowWidth - 150,
    borderRadius: 13,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: '#eee',
    borderColor: '#57CC99'
  },
  textInputError:{
    borderWidth: 1,
    height: 40,
    width: windowWidth - 150,
    borderRadius: 13,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: '#eee',
    borderColor: '#ED6963'
  },
  text: {
    textAlign: 'center'
  },
  textError: {
    textAlign: 'center',
    fontWeight : 700,
    color: '#ED6963'
  },
  secondaryText: {
    color: '#6D6767',
    marginTop: 10
  },
  inputsContainer: {
    gap: 7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  button: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#080050',
    borderColor: '#080050',
    borderRadius: 14,
    marginTop: 20
  },
  appTitle: {
    width: 142,
    height: 32,
    alignSelf: 'center',
    marginTop: 7
  }

})
 
export default Login;