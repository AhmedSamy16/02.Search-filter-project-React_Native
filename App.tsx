import { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import JSONDATA from "./assets/MOCK_DATA.json"

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNames = JSONDATA.filter(n => searchTerm === "" ? n : n.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput 
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          style={styles.input}
          placeholder='Search...'
        />
        <FlatList
          data={filteredNames}
          renderItem={({ item }) => (
            <View key={item.first_name + item.last_name}>
              <Text style={styles.text}>{item.first_name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.first_name + item.last_name}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: StatusBar.currentHeight
  },
  input: {
    marginVertical: 15,
    marginHorizontal: 0,
    width: 280,
    height: 40,
    paddingLeft: 10,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3
  },
  text: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center'
  }
});
