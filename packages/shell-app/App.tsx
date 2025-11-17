import React from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';

export default function App() {
  const openMiniApp = () => {
    // placeholder: logic to check backend, download bundle and execute in Hermes
    alert('Would load mini-app bundle from backend here');
  };

  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:18, marginBottom:12}}>Mini-Apps Shell (demo)</Text>
      <Button title="Open Mini-App" onPress={openMiniApp} />
    </SafeAreaView>
  );
}
