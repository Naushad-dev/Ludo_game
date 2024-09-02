import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {BackgroundImage} from '../helper/GetIcon';
import LottieView from 'lottie-react-native';
import DiceRoll from '../assets/animation/diceroll.json';
import ArrowIcon from '../assets/images/arrow.png';

const Dice = memo(({color, rotate, player, data}) => {
  const diceNo = 3;
  const pileIcon = BackgroundImage.GetImage(color);
  const diceImage = BackgroundImage.GetImage(diceNo);
  const ArrowAnimeValue = useRef(new Animated.Value(0)).current;
  const [diceRolling, setdiceRolling] = useState(false);
  const ArrowAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(ArrowAnimeValue, {
          toValue: 10,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.timing(ArrowAnimeValue, {
          toValue: -10,
          duration: 600,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  useEffect(() => {
    ArrowAnimation();
  }, []);

  return (
    <View style={[styles.flexRow, {transform: [{scaleX: rotate ? -1 : 1}]}]}>
      <View style={styles.border1}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#0052be', '#5f9fcb', '#97c6c9']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.pileContainer}>
            <Image source={pileIcon} style={styles.pileIcon} />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.border2}>
        <LinearGradient
          // style={styles.diceGradient}
          colors={['#acc8ab', '#acc8ab', '#acc8ab']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.diceContainer}>
            <TouchableOpacity >
              <Image source={diceImage} style={styles.dice} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      {diceRolling &&<Animated.View style={{transform: [{translateX: ArrowAnimeValue}]}}>
        <Image source={ArrowIcon} style={{height: 30, width: 50}} />
      </Animated.View>}
     { diceRolling && <LottieView
        source={DiceRoll}
        style={styles.rollingDice}
        loop={false}
        autoPlay
        hardwareAccelerationAndroid={true}
        cacheComposition={true}
      />}
    </View>
  );
});

export default Dice;

const styles = StyleSheet.create({
  flexRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  border1: {
    borderWidth: 3,
    borderRadiusWidth: 3,
    borderColor: '#f0ce2c',
  },
  border2: {
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRadius: 10,
    padding: 1,
    backgroundColorColor: '#aac8ab',
    borderColor: '#aac8ab',
  },
  pileContainer: {
    paddingHorizontal: 3,
  },
  pileIcon: {
    height: 35,
    width: 35,
  },
  diceContainer: {
    backgroundColor: '#e8c0c1',
    borderWidth: 1,
    borderRadius: 5,
    height: 55,
    width: 55,
    paddingHorizontal: 8,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#f0ce2c',
  },
  dice: {
    height: 45,
    width: 45,
  },
  rollingDice: {
    height: 80,
    width: 80,
    zIndex: 99,
    top: -25,
    position: 'absolute',
  },
});
