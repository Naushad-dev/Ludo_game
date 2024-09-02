import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '../constants/Colors';

import Plot from './Plot';

const Pocket = memo(({player, color}) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <View style={styles.childFrame}>
        <View style={[styles.flexRow,{marginTop:10}]}>
          <Plot pieceNo={0} player={player} color={color} />
          <Plot pieceNo={0} player={player} color={color} />
        </View>
        <View style={[styles.flexRow,{marginTop:10}]}>
        <Plot pieceNo={0} player={player} color={color} />
        <Plot pieceNo={0} player={player} color={color} />
      </View>
      </View>
    </View>
  );
});

export default Pocket;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '40%',
    borderWidth: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  childFrame: {
    height: '70%',
    width: '70%',
    backgroundColor: 'white',
    borderWidth: 0.4,
    borderColor: Colors.borderColor,
    padding: 15,
  },
  flexRow: {
    height: '40%',
    width: '100%',
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
  },
});
