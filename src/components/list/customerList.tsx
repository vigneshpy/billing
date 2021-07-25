import React, {useEffect, useState} from 'react';
import StackNavWrapper from '../navigation/stackNavWrapper';
import {
  View,
  Text,
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Loader from '../forms/loader';
import {SafeAreaView} from 'react-native-safe-area-context';

const ListCustomer = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState([]);
  useEffect(() => {
    loadCustomer();
    const subscribe = navigation.addListener('focus', () => {
      loadCustomer();
    });

    return subscribe;
  }, []);

  const loadCustomer = async () => {
    
  };

  const renderList = (item) => {
    return (
      <TouchableOpacity
        onPress={() =>
        navigation.navigate('customer', {
            id: item.id,
          })
        }>
        <View key={item.id}>
          <Text>{item.name}</Text>
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
            <RefreshControl refreshing={refreshing} onRefresh={loadCustomer} />
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

export default ListCustomer;
