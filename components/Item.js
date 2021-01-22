import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Delete from 'react-native-vector-icons/AntDesign';
import Checkcircle from 'react-native-vector-icons/AntDesign';
import Circle from 'react-native-vector-icons/Entypo';

const Item = props => {
    return (
      <TouchableOpacity>
        <View style={styles.listItem}>
        {props.isCompleted ? 
            <Checkcircle name="checkcircle"  style={{fontSize:40, color:"#00FF00"}} onPress={() => props.onStatut(props.index)} />
           : <Circle name="circle"  style={{fontSize:40, color:"#F1F1F1"}} onPress={() => props.onStatut(props.index)}/>
          }
          <Text style={{ fontSize: 16, color: "#000000"}}>{props.title}</Text>
          <Delete name="delete" onPress={() => props.onDelete(props.index)} style={{fontSize:40, color:"#F1F1F1"}} />
        </View>
      </TouchableOpacity>
    ); 
  };
  
  const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  });
  
  
  export default Item;