import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/components/Loginpage'
import Homepage from '@/components/Homepage'
import Profilepage from '@/components/Profilepage'
import Demo from '@/components/Demo'
import Dmm from '@/components/Dmm'

export default function HomeScreen() {
  return (

    // <Login navigation={Homepage}></Login>
    // <Homepage navigation={Profilepage}></Homepage>
    <Profilepage></Profilepage>
    // <Demo></Demo>
    // <Dmm></Dmm>
    
  );
}

