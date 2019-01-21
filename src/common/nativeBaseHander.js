import { Font } from 'expo';

export default () => Font.loadAsync({
  'Roboto': require('native-base/Fonts/Roboto.ttf'), //eslint-disable-line
  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'), //eslint-disable-line
  'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'), //eslint-disable-line
});
