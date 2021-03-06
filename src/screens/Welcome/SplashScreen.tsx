/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import actions from '../../store/actions';
import { useNavigation } from '@react-navigation/native';

export function SplashScreen() : React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onStart = async () => {
    dispatch(
      actions.app.updateStatus('READY')
    );

  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./1984_cover.jpg')}
        style={{
          height: 200,
          resizeMode: 'contain',
          marginBottom: 8,
          marginTop: -40,
        }}
      />
      <Text h1>Welcome to BLU 1984!</Text>
      <Text h2>Twitter without censorship</Text>
      <Text h2>powered by Bluzelle</Text>
      <View style={styles.button}>
        <Button onPress={onStart} title={'Break the wall'} buttonStyle={styles.buttonS}/>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    paddingTop: 50,
  },


  buttonS: {
    borderRadius: 5,
    backgroundColor: '#82131d',
  },
});
