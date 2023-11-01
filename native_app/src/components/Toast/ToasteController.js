import Toast from 'react-native-toast-message';

export function ToasteController(data, msg) {
  return Toast.show({
    type: data,
    text1: msg,
    // text2: 'This is some something 👋',
  });
}
