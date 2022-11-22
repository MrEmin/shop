import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
//import Config from 'react-native-config';
import {API_URL, API_TOKEN} from '@env';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(`${API_URL}`);
    setData(productData);
  };

  const renderProduct = ({item}) => <Text>{item.title}</Text>;

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
