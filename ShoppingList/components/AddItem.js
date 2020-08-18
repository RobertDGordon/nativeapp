import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ item, deleteItem }) => {
  return (
      <View>
        <TextInput placeholder='Add Item...' style={styles.input} />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}><Icon name='plus' size={20} color='darkgreen' /></Text>
          </TouchableOpacity>
      </View>
    
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    padding: 8,
    fontSize: 16,
  },
  btn:{
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddItem;