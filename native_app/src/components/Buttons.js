import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const Buttons = (props, {navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#15BE77',
          borderRadius: 15,
          height: 57,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 16, color: '#fff', fontWeight: '800'}}>
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default Buttons;
