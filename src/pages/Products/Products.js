import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {API_URL} from '@env';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = () => {
  const {loading, data, error} = useFetch(API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
