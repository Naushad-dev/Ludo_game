import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pile from './Pile';
import { Colors } from '../constants/Colors';

const Plot = ({color,player, pieceNo}) => {
    return (
      <View style={[styles.plots,{backgroundColor:color}]}>
        <Pile color={color} player={player} pieceNo={pieceNo} />
      </View>
    );
  };

 


export default Plot

const styles = StyleSheet.create({

    plots:{
    
        width:"36%",
        height:"80%",
        borderRadius:120,

    }
})