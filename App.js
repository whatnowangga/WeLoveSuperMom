/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from "react";
 import type { Node } from "react";
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Button,
   Alert,
   TouchableOpacity
 } from "react-native";
 
 
 const App: () => Node = () => {
   const [inputText, onChangeInputText] = useState("hello world");
   const [capitalText, setAllCapital] = useState("");
   const [mixLowerAdnCapital, setmixLowerAdnCapital] = useState("");
   const [commaEachChar, setCommaEachChar] = useState("");
   const handleButton = async () => {
     setAllCapital(inputText.toUpperCase());
     setmixLowerAdnCapital(inputText.replace(/(.)(.)/g, (_,l,u) => l.toLowerCase() + u.toUpperCase()));
     setCommaEachChar(inputText.replace(/.{1}/g, '$&,'));

   }
   return (
     <SafeAreaView style={styles.container}>
       <StatusBar barStyle={"light-content"} />
       <ScrollView
       >
         <View>
           <TextInput
             style={styles.input}
             onChangeText={onChangeInputText}
             value={inputText}
             placeholder="Input String"
             placeholderTextColor={"#333"}
             
           />
           <TouchableOpacity onPress={handleButton} style={styles.buttonContainer}>
             <Text style={styles.buttonText}>Proceed</Text>
           </TouchableOpacity>
           <View style={styles.wrapperResult}>
             <Text style={styles.resultText}>{capitalText}</Text>
             <Text style={styles.resultText}>{mixLowerAdnCapital}</Text>
             <Text style={styles.resultText}>{commaEachChar}</Text>
           </View>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     padding: 20
   },
 
   input: {
     // height: 40,
     // margin: 12,
     // borderWidth: 1,
     // padding: 10,
     color: "#333",
     marginBottom: 20,
     backgroundColor: "#eee",
     borderRadius: 8
   },
   buttonContainer: {
     elevation: 8,
     backgroundColor: "#ee446d",
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12
   },
   buttonText: {
     fontSize: 18,
     color: "#fff",
     fontWeight: "bold",
     alignSelf: "center",
     textTransform: "uppercase"
   },
   wrapperResult: {
     marginTop: 20
   },
   resultText: {
     color: "#333",
     marginTop: 10
   }
 });
 
 export default App;
 