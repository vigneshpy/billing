import {createStackNavigator} from '@react-navigation/stack';
import React,{useEffect,useState} from 'react';
import StackNavWrapper from '../navigation/stackNavWrapper';
import Loader from '../forms/loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text,Button,StyleSheet,RefreshControl} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
const ListService = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState([]);
  useEffect(() => {
    loadService();
    const subscribe = navigation.addListener('focus', () => {
      loadService();
    });

    return subscribe;
  }, []);

  const loadService = async () => {
   
  };

  const renderList = (item) => {
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('service', {
            id: item.id,
          })
        }>
        <View key={item.id}>
          <Text>{item.serviceName}</Text>
          <Text>{item.serviceCharge}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  
    return (
      <SafeAreaView>
        <FlatList
          data={value}
          renderItem={({item}) => renderList(item)}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadService} />
          }
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    );
  
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  list: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  enappdWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  enappdIcon: {
    width: 100,
    height: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  itemText: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default ListService;


