import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';

import layout from '../../config/layout.json';

import images from '@/assets/images';
import {AppImage} from '@/components';
import {RootStackNavigationProps, Routes} from '@/navigation';
import {COLORS, SIZES} from '@/theme';

const SplashScreen = () => {
  const navigation: StackNavigationProp<RootStackNavigationProps> = useNavigation();
  const progress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress.current, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const navigationName = layout.menu === 'drawer' ? Routes.MAIN_DRAWER_ROOT : Routes.MAIN_TABS_ROOT;
      navigation.replace(navigationName);
    }, 2000);
  }, []);

  return (
    <View style={styles.view}>
      <AppImage resizeMode={'contain'} url={'https://docs.kariyer.net/job/jobtemplate/000/000/022/avatar/2299420181212012655000.jpeg'} width={200} height={100} borderRadius={SIZES.radius} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});

export default memo(SplashScreen);
