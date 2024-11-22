import './gesture-handler';
import 'react-native-reanimated'
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import '../global.css';
import MainRoutes from './routes/MainRoutes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <MainRoutes />
    </SafeAreaView>
  );
}

export default App;
