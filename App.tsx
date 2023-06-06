import { Button, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [contador, setContador] = useState(0);

  function increment (){
    setContador(contador + 1);
  }
  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button title='Clique' onPress={()=>{increment();}}></Button>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
