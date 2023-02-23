
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import { MainPage } from './pages/main-page';
import { ItemListReducer } from './reducers/item-reducer';
import { RootStackParamList } from './types';
import { rootSaga } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware()
const Stack = createNativeStackNavigator<RootStackParamList>();
const itemList = createStore(ItemListReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default function App() {
  return (
    <Provider store={itemList}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen
            name = "Main"
            component={MainPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


