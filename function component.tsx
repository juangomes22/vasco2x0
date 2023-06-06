import { useState } from "react";
import { View ,Text, Button} from "react-native";

export default function FunctionComponets(){
    const [contador,setContador] = useState(0);
   
    function incremente (){
         setContador(contador + 1)

    }
    return(
        <View>
            <Text>{contador}</Text>
            <Button title="click" onPress={()=>{incremente()}}/>
        </View>
    );
}