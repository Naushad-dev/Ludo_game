import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import BG from '../assets/images/bg.jpg';
import {deviceHeight, deviceWidth} from '../constants/Scaling';
const Wrapper = ({children, style}) => {
  return (
    <ImageBackground
      style={styles.WrapperContainer}
      source={BG}
      resizeMode="cover">
      <SafeAreaView
        style={[styles.SafeAreaViewStyle, {...style}]}>
        {children}
        </SafeAreaView>
    </ImageBackground>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  WrapperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SafeAreaViewStyle: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
