import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Wrapper from '../Components/Wrapper';
import MenuIcon from '../assets/images/menu.png';
import {deviceHeight, deviceWidth} from '../constants/Scaling';
import Dice from '../Components/Dice';
import {Colors} from '../constants/Colors';
import Pocket from '../Components/Pocket';

const Ludo_boardScreen = () => {
  return (
    <Wrapper>
      <TouchableOpacity style={{position: 'absolute', top: 60, left: 20}}>
        <Image source={MenuIcon} style={{height: 35, width: 35}} />
      </TouchableOpacity>

      <View style={styles.LudoContainer}>
        <View style={styles.flexRow}>
          <Dice color={Colors.green} />
          <Dice color={Colors.blue} rotate />
        </View>

        <View style={styles.ludoboard}>
          <View style={styles.pocketContainer}>
          <Pocket color={Colors.green}/>
          </View>
        </View>

        <View style={styles.flexRow}>
          <Dice color={Colors.red} />
          <Dice color={Colors.yellow} rotate />
        </View>
      </View>
    </Wrapper>
  );
};

export default Ludo_boardScreen;

const styles = StyleSheet.create({
  LudoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: deviceHeight * 0.5,
    width: deviceWidth,
  },
  flexRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  ludoboard: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',

    alignSelf:"center",
    padding:10
  },
  pocketContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: '#ccc',
    flexDirection:"row",
    justifyContent:"space-between"
    
  },
});
