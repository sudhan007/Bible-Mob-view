import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Image
} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {BaseUrl} from '../config/common';
import LoadingModel from '../components/LoadingModel';
import encrypts from '../components/encrypt';
import Buttons from '../components/Buttons';
import decrypts from '../components/decrypt';
import exit from '../../assets/image/delete.png';

//toast
import {ToasteController} from '../components/Toast/ToasteController';
import Toaste from '../components/Toast/Toaste';

const Address = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [allAddress, setAllAddress] = useState();
  const [modeladdress, setModelAddress] = useState(1);
  const [editnewAddress , setEditAddress] = useState()
  const [formValues, setFormValues] = useState({
    name: '',
    near_land: '',
    pincode: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    start();
  }, []);

  let start = async () => {
    let token = await AsyncStorage.getItem('token');

    if (token === null || token === undefined || token === '') {
      ToasteController('error', 'Login First');
      return;
    }
    setLoading(true);
    let respance = await axios({
      method: 'post',
      url: BaseUrl + '/address',
      data: {
        phone: token,
      },
    })
      .then(async res => {
        setLoading(false);
        if (res.data.ok === true) {
          let decryptdatajson = await decrypts(res.data.data);
          let JsonDt = JSON.parse(decryptdatajson);
          setAllAddress(JsonDt);
        } else {
          ToasteController('error', res.data.message);
        }
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
        ToasteController('error', err.message);
      });
  };
 
  let addAddress = async () => {

    if(formValues.name === '' || formValues.pincode === '' || formValues.address === ''){
      ToasteController('error', 'Please Fill All Fields');
      return;
    }
    let token = await AsyncStorage.getItem('token');

    if (token === null || token === undefined || token === '') {
      ToasteController('error', 'Login First');
      return;
    }
    setLoading(true);
    let encrptdata = await encrypts(formValues);
    let respance = await axios({
      method: 'post',
      url: BaseUrl + '/addaddress',
      data: {
        phone: encrptdata,
        token: token,
      },
    })
      .then(async res => {
        setLoading(false);
        setModalVisible(!modalVisible);
        if (res.data.ok === true) {

          setFormValues({
            name: '',
            near_land: '',
            pincode: '',
            address: '',
            phone: '',
          });
         
          let decryptdatajson = await decrypts(res.data.data);
          let JsonDt = JSON.parse(decryptdatajson)
          setAllAddress(JsonDt)
        } else {
          ToasteController('error', res.data.message);
        }
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
        ToasteController('error', err.message);
      });
  };

  let editAddress = async () => {
    
    if(formValues.name === '' || formValues.pincode === '' || formValues.address === ''){
      ToasteController('error', 'Please Fill All Fields');
      return;
    }
    let token = await AsyncStorage.getItem('token');

    if (token === null || token === undefined || token === '') {
      ToasteController('error', 'Login First');
      return;
    }
    setLoading(true);
    let newvlue = new Object
    newvlue['Phone'] = formValues
    newvlue['id'] = editnewAddress._id

    let encrptdata = await encrypts(newvlue);
    let respance = await axios({
      method: 'post',
      url: BaseUrl + '/editaddress',
      data: {
        phone: encrptdata,
        token: token,
      },
    })
      .then(async res => {
        setLoading(false);
        setModalVisible(!modalVisible);
        if (res.data.ok === true) {

          setFormValues({
            name: '',
            near_land: '',
            pincode: '',
            address: '',
            phone: '',
          });
          setEditAddress('')
          let decryptdatajson = await decrypts(res.data.data);
          let JsonDt = JSON.parse(decryptdatajson)
          setAllAddress(JsonDt)
        } else {
          ToasteController('error', res.data.message);
        }
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
        ToasteController('error', err.message);
      });
  }

  const handleChange = (name, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const deleteAddress = async () =>{
    let token = await AsyncStorage.getItem('token');

    if (token === null || token === undefined || token === '') {
      ToasteController('error', 'Login First');
      return;
    }
    setLoading(true);
    let newvlue = new Object
    newvlue['id'] = editnewAddress._id

    let encrptdata = await encrypts(newvlue);
    let respance = await axios({
      method: 'post',
      url: BaseUrl + '/deleteaddress',
      data: {
        phone: encrptdata,
        token: token,
      },
    })
      .then(async res => {
        setLoading(false);
        setModalVisible(!modalVisible);
        setEditAddress('')
        if (res.data.ok === true) {
          let decryptdatajson = await decrypts(res.data.data);
          let JsonDt = JSON.parse(decryptdatajson)
          setAllAddress(JsonDt)
        } else {
          ToasteController('error', res.data.message);
        }
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
        ToasteController('error', err.message);
      });
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{margin: 20}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{marginTop: 10}}>
            {
              allAddress?.map((data , index)=>{
                return(
                  <View>
                    <View
                      style={{
                        width: '100%',
                        padding: 10,
                        backgroundColor: '#15BE77',
                        borderRadius: 8,
                        flexDirection: 'row',
                        marginBottom: 10,
                      }}>
                      <View style={{flex: 3}}>
                        <Text style={{color: '#fff'}}>Name : { data.name }</Text>
                        <Text style={{color: '#fff'}}>Pin : {data.pincode}</Text>
                        <Text style={{color: '#fff'}}>Land Mark: {data.near_land}</Text>
                        <Text style={{color: '#fff'}}>Address : {data.address}</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <TouchableOpacity onPress={()=>{ 
                          setModelAddress(2)
                          setModalVisible(!modalVisible)
                          setFormValues({
                            name: data.name,
                            near_land: data.near_land,
                            pincode: data.pincode,
                            address: data.address,
                          });
                          setEditAddress(data)
                         }}>
                          <View
                            style={{
                              width: '100%',
                              padding: 3,
                              backgroundColor: '#fff',
                              borderRadius: 4,
                            }}>
                            <Text style={{textAlign: 'center'}}>Edit</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ 
                          setModelAddress(3)
                          setModalVisible(!modalVisible)
                          setEditAddress(data)
                         }}>
                          <View
                            style={{
                              width: '100%',
                              padding: 3,
                              backgroundColor: 'red',
                              borderRadius: 4,
                              marginTop: 20,
                            }}>
                            <Text style={{textAlign: 'center', color: '#fff'}}>
                              Delete
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )
              })
            }
            <TouchableOpacity
              onPress={() => {
                setModelAddress(1);
                setModalVisible(!modalVisible);
              }}>
              <View
                style={{
                  width: '100%',
                  padding: 10,
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderRadius: 5,
                  borderStyle: 'dashed',
                }}>
                <Text style={{textAlign: 'center'}}>Add Address</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 10,
              width: '90%',
            }}>
            <View>
              <ScrollView>
                {
                  modeladdress === 1 ?
                
                <View>
                  <Text style={{textAlign: 'center'}}>Add new Address</Text>
                  <TextInput
                    value={formValues.field1}
                    onChangeText={value => handleChange('name', value)}
                    placeholder="Address Name*"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <TextInput
                    value={formValues.field1}
                    onChangeText={value => handleChange('pincode', value)}
                    placeholder="PinCode"
                    keyboardType="numeric"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <TextInput
                    value={formValues.field1}
                    onChangeText={value => handleChange('near_land', value)}
                    placeholder="Near Landmark"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <TextInput
                    value={formValues.field1}
                    onChangeText={value => handleChange('address', value)}
                    placeholder="Address*"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <View style={{marginTop: 10}}>
                    <TouchableOpacity
                      onPress={() => {
                        addAddress();
                      }}>
                      <Buttons text="Submit" />
                    </TouchableOpacity>
                  </View>
                </View>
                : modeladdress === 2 ?

                <View>
                  <Text style={{textAlign: 'center'}}>Edit Address</Text>
                  <TextInput
                    value={formValues.name}
                    onChangeText={value => handleChange('name', value)}
                    placeholder="Address Name*"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <TextInput
                    value={formValues.pincode}
                    onChangeText={value => handleChange('pincode', value)}
                    placeholder="PinCode"
                    keyboardType="numeric"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <TextInput
                    value={formValues.near_land}
                    onChangeText={value => handleChange('near_land', value)}
                    placeholder="Near Landmark"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <TextInput
                    value={formValues.address}
                    onChangeText={value => handleChange('address', value)}
                    placeholder="Address*"
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      height: 40,
                    }}
                  />
                  <View style={{marginTop: 10}}>
                    <TouchableOpacity
                      onPress={() => {
                        editAddress();
                      }}>
                      <Buttons text="Edit Address" />
                    </TouchableOpacity>
                  </View>
                </View>

                : 

                <View>
                  <Text style={{textAlign: 'center'}}>Delete Address</Text>
                  <View style={{marginTop: 10}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{height: 100, width: 100, marginTop: 20}}
                      source={exit}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 20,
                      marginBottom: 20,
                    }}>
                    <View style={{flex: 1}}>
                      <TouchableOpacity
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}>
                        <View
                          style={{
                            width: '90%',
                            backgroundColor: '#15BE77',
                            borderRadius: 8,
                            padding: 10,
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 15,
                              textAlign: 'center',
                            }}>
                            NO
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                      <TouchableOpacity
                        onPress={() => {
                          deleteAddress()
                        }}>
                        <View
                          style={{
                            width: '90%',
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            padding: 10,
                          }}>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: 15,
                              textAlign: 'center',
                            }}>
                            Yes
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </View>
                </View>
                }
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
      <LoadingModel loading={loading} />
      <Toaste />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(207, 207, 207, 0.43)',
  },
});

export default Address;
