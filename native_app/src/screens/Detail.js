import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseUrl} from '../config/common';
import axios from 'axios';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoadingModel from '../components/LoadingModel';
import RenderHtml from 'react-native-render-html';

const Detail = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loading, setLoading] = useState(false);
  
  const [isSidebar, setIsSidebar] = useState(true);
  const [bookcat, setBookcat] = useState(true);
  const [bookcatdata, setBookcatdata] = useState([]);
  const [preid, setPreid] = useState(0);

  const [search, setSearch] = useState('');
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
  const buttonRef = useRef(null);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showsearch, setShowsearch] = useState(false);
  let [pagecontent, setPagecontent] = useState('');

  const [data, setData] = useState(2);
  const [mocsearch, setMocsearch] = useState(false);
  const [ids, setIds] = useState('');
  const [alldata, setAlldata] = useState();
  const [fulldata, setFulldata] = useState();

  const [sliderValue, setSliderValue] = useState(22);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [ drawOpen , setDrowopen ] = useState(false)
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };


  let openControlPanel = () => {
    buttonRef.open();
  };

  useEffect(() => {
    // const {data} = route.params;
    // setData(data);
    start();
  }, []);

  let start = async () => {
    setLoading(true)
    const value = await AsyncStorage.getItem('key1');
    let responce = await axios({
      method: 'post',
      url: BaseUrl + '/booksubcatt',
      data: {
        id: value,
      },
    })
      .then(ree => {
        console.log(ree.data.book[0], 'ree.data.subcat ree.data.book[0]');
        if (ree.data.status === true) {
          setFulldata(ree.data);
          if (ree.data.subcat.length === 0) {
            setBookcat(true);

            setPagecontent(ree.data.book[0]);
            setIds(ree.data.book[0]._id);
            setBookcatdata(ree.data.booksub);
          } else {
            setBookcat(false);
            setAlldata(ree.data.subcat);
            setIds(ree.data.subcat[0]._id);
            setPagecontent(ree.data.book[0]);
          }
          setData(1);
          setLoading(false)
        }
      })
      .catch(err => {
        setLoading(false)
        console.log(err);
      });

    console.log(value, 'value');
  };

  let starts = async (value) => {
    setLoading(true)
    let responce = await axios({
      method: 'post',
      url: BaseUrl + '/booksubcatt',
      data: {
        id: value,
      },
    })
      .then(ree => {
        console.log(ree.data.subcat, 'ree.data.subcat');
        if (ree.data.status === true) {
          setFulldata(ree.data);
          if (ree.data.subcat.length === 0) {
            setBookcat(true);

            setPagecontent(ree.data.book[0]);
            setIds(ree.data.book[0]._id);
            setBookcatdata(ree.data.booksub);
          } else {
            setBookcat(false);
            setAlldata(ree.data.subcat);
            setIds(ree.data.subcat[0]._id);
            setPagecontent(ree.data.book[0]);
          }
          setData(1);
          setLoading(false)
        }
      })
      .catch(err => {
        setLoading(false)
        console.log(err);
      });

    console.log(value, 'value');
  };

  let clicksub = (dar , key) => {
    starts(dar._id)
    setIds(dar._id)
    // setPreid(key)
  }

  let subClickbook = async( id  , index , nu) =>{

    if( id === undefined){
      return
    }
    setPreid(index)
    setIds(id._id)
    let tt = await axios({
      method : 'post',
      url : BaseUrl + '/booksubonlydata',
      data : {
        id : nu === '0' ? id.book : id._id,
        nu :  nu === '0'? '0' : '1'
      }
    })
    .then((re)=>{
      console.log(re.data.data , 'dhfvsdhi')
      setPagecontent(re.data.data)
    })
    .catch((err)=>{
      console.log(err , 'err')
    })
  }

  let vsfv =() =>{
    console.log('touched', drawOpen)
    setDrowopen(!drawOpen)
  }



  const customClassStyles = {
    'ql-align-center': {
      textAlign: 'center', 
    },
  };

  return (
    <Drawer
      open={drawOpen}
      type="overlay"
      content={
        <ScrollView>
          <View style={{ padding : 10 }} >
            <View style={{ flexDirection : 'row' , justifyContent : 'space-between' , marginBottom : 10  , marginTop : 10 }} >
              <Text style={{ color : '#000' }}  >Menu</Text>
              <TouchableOpacity onPress={()=>{ setDrowopen(!drawOpen) }} > 
                <Icon name="bars" size={16} color="#000" />
              </TouchableOpacity>
            </View>
            
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
              onChangeText={handleInputChange}
              value={inputValue}
              placeholder="Search"
            />
            <View > 
              {
                 bookcat === false ? 
                  alldata?.map((dar , key)=>{
                    return(
                      <>
                        <TouchableOpacity onPress={()=>{ clicksub(dar , key )}}
                        style={  { width : '100%' , backgroundColor :  ids === dar._id ? 'green' : 'red'  , padding : 10 , borderRadius : 5 , marginBottom : 10 }} >
                          <View style={{ flexDirection : 'row' , justifyContent : 'space-between' }} >
                            <Text style={{ color : '#fff' }} >
                              { dar?.subcatname}
                            </Text>
                            <Text style={{ color : '#fff' }} >
                              { dar?.count}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </>
                    )
                  })
                :  showsearch === false ? 
                
                bookcatdata?.map((reed , index)=>{
                  return(
                    <>
                      <TouchableOpacity onPress={()=>{ subClickbook(reed , index , '1')  }}
                        style={  { width : '100%' , backgroundColor :  ids === reed._id ? 'green' : 'red'  , padding : 10 , borderRadius : 5 , marginBottom : 10 }} >
                          <View style={{ flexDirection : 'row' , justifyContent : 'space-between' }} >
                            <Text style={{ color : '#fff' }} >
                              { reed?.realbook.replace(/\.(txt|doc)/gi, '')}
                            </Text>
                          </View>
                        </TouchableOpacity>
                    </>
                  )
                })
                
                :''
              }
              
            </View>
          </View>
        </ScrollView>
      }
      tapToClose={true}
      openDrawerOffset={50} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={ratio => ({
        main: {opacity: (2 - ratio) / 2},
      })}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView style = {{padding : 10 }} contentInsetAdjustmentBehavior="automatic">
          <View style={{ flexDirection : 'row' , justifyContent : 'space-between' , flex : 1 }} >
            <View style={{ flex : 6 , flexDirection : 'row' }} >
              <TouchableOpacity onPress={()=>{ vsfv() }} >
              <Icon name="bars" size={16} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ navigation.navigate('Home');}} >
                <Icon style ={{ marginLeft : 10 , marginRight : 10 }} name="home" size={16} color="#000" />
              </TouchableOpacity>
              <Icon name="search" size={16} color="#000" />
            </View>
            <View style={{ flex : 6 , justifyContent : 'flex-end' , flexDirection : 'row' }} >
              <Icon style={{ marginRight : 10 }} name="headphones" size={16} color="#000" />
              <Icon  style ={{ marginLeft : 10 , marginRight : 10 }} name="gear" size={16} color="#000" />
              <Icon  style ={{ marginLeft : 10 , marginRight : 10 }} name="plus" size={16} color="#000" />
              <Icon name="minus" size={16} color="#000" />
            </View>
          </View>
         
            <View style={{ marginTop : 10 }} >
              {
                pagecontent === '' || pagecontent === undefined ? "" :
                <RenderHtml
                style={{lineHeight: 24}}
                contentWidth={500}
                source={{html:pagecontent?.bookDescription.replace(/\n/g, '<br />').replace(/<p>/g, '').replace(/<\/p>/g, '<br />')}}
             
                // classesStyles={customClassStyles}
              />
              }
            </View>
        </ScrollView>
        <LoadingModel loading={loading} />
      </SafeAreaView>
    </Drawer> 
  );
};

const drawerStyles = {
  drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 , backgroundColor: '#fff'},
  main: {paddingLeft: 3},
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Detail;
