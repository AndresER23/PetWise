import { StyleSheet } from "react-native";
import { windowWidth } from '../commons/sizes'

export const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
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
  textError: {
    textAlign: 'center',
    fontWeight : 700,
    color: '#ED6963',
    marginTop: 7
  },
  centerText : {
    textAlign: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#02e1a8',
    fontFamily: 'Geogia'

  }
})