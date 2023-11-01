import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {BaseUrl} from '../config/common';

import Navbar from '../components/Navbar';
import LoadingModel from '../components/LoadingModel';
import otpimg from '../../assets/image/otp.jpg';
import bi2 from '../../assets/image/bi2.jpg';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [gridData, setGridData] = useState([1, 2, 3, 4, 5, 6]);

  const [data, setData] = useState();

  useEffect(() => {
    start();
  }, []);

  let start = async () => {

    // console.log( 'itemclicked');

    // return
    setLoading(true);
    let responce = await axios({
      method: 'get',
      url: BaseUrl + '/allbookcat',
    })
      .then(res => {
        console.log(res.data.data);
        setLoading(false);
        setData(res.data.data);
      }) 
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  let postClick = async (item) => {
    await AsyncStorage.setItem('key1', item._id);
    await AsyncStorage.setItem('key2', item._id);
    navigation.navigate('Detail');
  };

  const GridItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          postClick(item);
        }}
        style={styles.gridItem}>
        <View style={{margin: 5}}>
         
          <View
            style={{
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#eee',
              width: '100%',
              padding: 10,
            }}>
               <Image
            style={{
              width: '100%',
              height : 120,
              marginTop: 5,
              alignSelf: 'center',
            }}
            source={bi2}
          />
            <Text>{item.catname}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View>
        <Navbar />
        <View style={{margin: 10}}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Image
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 15,
                  width: '100%',
                  marginTop: 15,
                  alignSelf: 'center',
                }}
                source={otpimg}
              />
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 20,
                    marginBottom: 20,
                    fontWeight: '600',
                  }}>
                  Popular
                </Text>

                <View style={styles.container}>
                  <View style={styles.gridContainer}>
                    {data?.map((item, key) => (
                      <GridItem key={key} item={item} />
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <LoadingModel loading={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
  },
  gridContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  gridItem: {
    width: '50%', // Adjust the width as per your grid requirements
    aspectRatio: 1,
  },
  addButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
});

export default Home;
