import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardType , StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'
export default function App() {
  const [height, set_weight] = useState('');
  const [base, set_base] = useState('');
  const [result,set_result] = useState('');


  const triangule_area = ()=>{
      if(height == 0 && base == 0){
        alert("valores não informados, favor inserir os valores ")
      }
      else{
          set_result((parseFloat(height) * (parseFloat(base) ) /2))

      }
  }
  return (
    <View style={styles.container}>
        <View style={styles.form}>
              <Text style={styles.title}> Área do triângulo</Text>
        <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Digite a base do triângulo" onChange={(e)=>set_weight(e.target.value)}></TextInput>
        </View>
        
        <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Digite a altura do triângulo"  onChange={(e)=>set_base(e.target.value)} keyboardType={"numeric"}></TextInput>
              <Button style={{width:30,height:30,backgroundColor: 'red'}} title="Calcular" onPress={()=>triangule_area()} keyboardType={"numeric"}></Button>
              <Text style={styles.result}>Área do triangulo: {result}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontStyle: 'italic'
  },
  input: {
    padding: 10,
    width: 250,
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80
  },
  inputWrapper: {
    padding: 12
  },
  result: {
    padding: 10,
    color: 'white',
    fontSize: 20
  }

});
