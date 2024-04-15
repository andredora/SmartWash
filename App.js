import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data] = useState([
    { id: 1, name: 'Aveiro' },
    { id: 2, name: 'Avenida 5 de Outubro' },
    { id: 3, name: 'Avenida Vasco Branco' },
    { id: 4, name: 'Avenida Santa Joana' },
  ]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.length >= 3) {
      setFilteredData(data);
    } else {
      setFilteredData([]);
    }
  };

  const handleOptionPress = (option) => {
    // Implemente a lógica para lidar com o pressionamento das opções

  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View backgroundColor='#f9f9f9'>
          <Image source={require('./assets/SmartWash.png')} style={styles.logo} />

          <Search_Bar handleSearch={handleSearch} searchQuery={searchQuery} filteredData={filteredData} />

          <Retangulos ></Retangulos>


        </View>
      </SafeAreaView>
      <Footer handleOptionPress={handleOptionPress} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  logo: {
    alignSelf: 'center',
    height: 80,
    width: 370,
    marginTop: '20%',
  },
  option: {
    backgroundColor: '#ffffff',
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e2e2e2',
    borderTopWidth: 1,
    fontSize: 30,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 287,
    position: 'relative',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    bottom: 0,
    position: 'fixed',
    marginTop: 85,
  },
  flatList: {
    position: 'absolute',
    top: 110,
    left: 40,
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 20,
    paddingLeft: 45,
  },
  Retangulo: {
    height: 180,
    marginHorizontal: 40,
    borderRadius: 20,
    marginTop: 60,
    position: 'relative',
    bottom: 10,
    overflow: 'hidden', // Para garantir que a imagem não ultrapasse os limites do retângulo
    shadowColor: '#000',
    elevation: 30,
  },

  textRetangulo: {
    marginLeft: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor semi-transparente para escurecer a imagem
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderColor: '#EBEAEA',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 35,
    marginTop: 50,
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    shadowColor: '#000',
    elevation: 30,
  },
  searchIcon: {
    marginRight: 20,

  },

  searchInput: {
    fontSize: 20,
  },

  icon: {
    color: '#303030',
  },

});


const Search_Bar = ({ handleSearch, searchQuery, filteredData }) => {
  return (
    <View>
      <View style={styles.searchBar}>
        <Icon name="search" size={30} color="#303030" style={styles.searchIcon} />
        <TextInput
          placeholder="Lavandaria ..."
          placeholderTextColor="#303030" // Altera a cor do placeholder
          onChangeText={handleSearch}
          value={searchQuery}
          style={styles.searchInput} // Adiciona este estilo para personalizar o tamanho da letra do placeholder
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const Retangulos = ({ }) => {
  return (
    <View>
      <View style={styles.Retangulo}>
        <ImageBackground source={require('./assets/EncontrarMaquinas.png')} style={styles.backgroundImage}>
          <View style={styles.overlay}></View>
          <Text style={styles.textRetangulo}>Encontrar      Lavandarias</Text>
        </ImageBackground>
      </View>
      <View style={styles.Retangulo}>
        <ImageBackground source={require('./assets/taxi.jpeg')} style={styles.backgroundImage}>
          <View style={styles.overlay}></View>
          <Text style={styles.textRetangulo}>Transportes</Text>
        </ImageBackground>
      </View>
    </View>
  )
}
const Footer = ({ handleOptionPress }) => {

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress("Opção 1")}>
        <Icon name="home" size={35} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('MapScreen')}>
        <Icon name="map" size={25} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress("Opção 3")}>
        <Icon name="list" size={25} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress("Opção 4")}>
        <Icon name="user" size={25} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
