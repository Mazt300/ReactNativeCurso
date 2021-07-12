import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Linking, StyleSheet, Text, View,Button } from 'react-native';

const App = () =>{

  // const [numero,setnumero] = useState(0)
  // const [veces,setveces] = useState(0)
  const [name, setName ]= useState('Marcos')
  const [session,setSession] = useState({numero: 6, title: 'state'})
  const [current,setcurrent] = useState(true)

  const onclickHandler = () =>{
    setName('Marcos Antonio Zuniga Tapia')
    setSession({numero : 7, title : 'style'})
    setcurrent(false)
  }

  // const onclickHandler = () =>{
  //   setnumero(numero + 5)
  //   setveces(veces + 1)    
  // }

  // const onclickHandler_Reduccion = () => {
  //   if (numero > 0 && veces > 0)
  //   {
  //     setnumero(numero - numero)
  //     setveces(veces - veces)  
  //   }
  //   else{
  //     alert('El valor de 0 no es mayor al mismo')
  //   }
  // }
  return (
    <View style={styles.body}>
      <Text style = {styles.text}>My name is {name}</Text>
      <Text style = {styles.text}>This is the session number {session.numero} and about {session.title}</Text>
      <Text style = {styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='actualiza el estado' onPress={onclickHandler}></Button>
    </View>
    // <View style={styles.body}>
    //   <Text style = {styles.text}>My name is {name}</Text>
    //   <Text style = {styles.text}>This is the session number {session.numero} and about {session.title}</Text>
    //   <Text style = {styles.text}>{current ? 'current session' : 'next session'}</Text>
    //   <Button title='actualiza el estado' onPress={onclickHandler}></Button>
    // </View>
    // <View style = {styles.body}>
    //   <Text style = {styles.text}>{numero}</Text>
    //   <Button title = 'Agregar' onPress = {onclickHandler}></Button>
    //   <Text style = {styles.text}>you clicked {veces} veces</Text>

    //   <Text style = {styles.text}>{numero}</Text>
    //   <Button title = 'Reducir' onPress = {onclickHandler_Reduccion}></Button>
    //   <Text style = {styles.text}>you clicked {veces} veces</Text>
    // </View>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin:10,
  }
});

export default App;