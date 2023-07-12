import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/title';
import { HomeScreenNavigationProp } from '../navigation/types/types';

const Home = ({navigation}: HomeScreenNavigationProp) => {
  return (
    <View>
        <Title />
        <View></View>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
            <Text>Start with demo</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Home;
