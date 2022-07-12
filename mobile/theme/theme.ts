import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const { height } = Dimensions.get('screen');

export const colors = {
  white: '#fff',
  lightgreen: 'lightgreen',
  primary: '#3498db',
  accent: '#f1c40f',
};

export const spacings = {
  s8: 8,
  s16: 16,
  s40: 40,
};

export const radius = {
  r8: 8,
  r2: 2,
};

export const size = {
  z90: '90%',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidSafeArea: {
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: height,
  },
  containerStyle: {
    backgroundColor: colors.white,
    padding: spacings.s40,
  },
  centeredRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  spaciousRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const theme = {
  ...DefaultTheme,
  roundness: radius.r2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
  },
};
