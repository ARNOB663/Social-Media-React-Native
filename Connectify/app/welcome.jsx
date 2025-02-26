import { View, Text , StyleSheet  } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import React from 'react'

const  Welcome = () => {
  return (
    <ScreenWrapper bg='white'>
       <StatusBar style="dark" />
       <View  style={styles.container}>
        </View>
    </ScreenWrapper>
  )
}

export default Welcome
const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around', 
    backgroundColor: 'white',
  },

})
