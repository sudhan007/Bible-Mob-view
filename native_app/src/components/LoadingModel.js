import {useEffect, useState} from 'react';
import {
  BackHandler,
  Modal,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
export default function LoadingModel(props) {
  return (
    <Modal transparent={true} visible={props.loading} onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(207, 207, 207, 0.43)',
  },
});
