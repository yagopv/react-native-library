import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { View }  from 'react-native';

import reducers from './src/reducers';
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList';


export default class App extends Component {
  render() {  
    return (      
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="React Native Library" />
          <LibraryList></LibraryList>
        </View>
      </Provider>   
    );
  }
}