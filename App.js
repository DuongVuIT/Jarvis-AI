import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationApp} from '@navigation/navigation';
import {apiCall} from '@api/openAi';
export default function App() {
  useEffect(() => {
    apiCall('create an image or a dog playing with cat');
  }, []);
  return <NavigationApp />;
}

const styles = StyleSheet.create({});
