import React, { useEffect, useState } from 'react';
import { View, Image, Button, StyleSheet, ScrollView, Text, SafeAreaView, TextInput } from 'react-native';
import { getCats } from './api';
import Card from './componentes';

function App() {
  const [cats, setCats] = useState<any[]>([]);
  const [catsRace, setCatsRace] = useState('');

  useEffect(() => {
    const getCatsLoad = async () => {
      if (cats.length === 0) {
        const newCats = await getCats();
        setCats(newCats);
      }
    };
    getCatsLoad();
  }, [cats]);

  const onAddNewCatsRace = () => {
    let newCats = [...cats];
    let newCat = {
      punchline: catsRace,
      url: "https://picsum.photos/200"
    };
    newCats.push(newCat);
    setCats(newCats);
    setCatsRace('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Pon una raza de gato"
          value={catsRace}
          onChangeText={(value: string) => {
            setCatsRace(value);
          }}
        />
        <Button title="Agregar nueva raza" onPress={onAddNewCatsRace} />
      </View>
      <ScrollView 
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{alignItems: 'center'}}>
        {cats.map((c, index) => (
          <Card key={index}>
            <Image style={styles.image} source={{ uri: c.url }} />
          </Card>
        ))}
        <View style={styles.buttonContainer}>
          <Button title="Ver otros gatos" onPress={() => setCats([])} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 2,
  },
  buttonContainer: {
    margin: 20,
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    marginBottom: 8,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    width: 250,
  },
});

export default App;