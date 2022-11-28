import React from 'react';
import {View, FlatList} from 'react-native';
import {API_URL} from '@env';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SearchBar from '../../components/SearchBar';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <SearchBar />
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
