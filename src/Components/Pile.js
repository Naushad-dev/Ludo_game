import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import {BackgroundImage} from '../helper/GetIcon';
import {Svg, Circle} from 'react-native-svg';

const Pile = ({color, player, pieceNo}) => {
  const pileImgae = BackgroundImage.GetImage(color);
  const rotateValue = useRef(new Animated.Value(0)).current;
  
  

  useEffect(() => {
    const rotationAnimation = () => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      );
    };
    rotationAnimation.start();
    return () => rotationAnimation.stop();
  }, [rotateValue]);
  const rotateInterpolate = useMemo(() => {
    rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  },[rotateValue]);
  return (
    <TouchableOpacity style={[styles.Pilecontainer]}>
      <View style={styles.hollowContainer}>
        <View style={styles.dashedCircleContainer}>
          <Animated.View
            style={[
              styles.dashedCircle,
              {transform: [{rotate: rotateInterpolate}]},
            ]}>
            <Svg height={'18'} width={'18'}>
              <Circle
                cy={'9'}
                cx={'9'}
                r={'8'}
                stroke={'white'}
                strokeWidth={'2'}
                strokeDasharray={'4 4'}
                strokeDashoffset={'0'}
                fill={'transparent'}
              />
            </Svg>
          </Animated.View>
        </View>
      </View>
      <Image
        source={pileImgae}
        style={{height: 32, width: 32, position: 'absolute', top: -16}}
      />
    </TouchableOpacity>
  );
};

export default Pile;

const styles = StyleSheet.create({
  Pilecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  hollowContainer: {
    height: 15,
    width: 15,
    position: 'absolute',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
