import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'red',
          padding: 20,
        }}>
        <View style={{width: '100%', height: 'auto', flex: 1}}>
          <Icon name="book" size={16} color="#fff" />
        </View>
        <View style={{width: '100%', height: 'auto', flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            {/* <TouchableOpacity  >
            <Icon name="bell" size={16} color="#fff" />
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Navbar;
