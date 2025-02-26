import {  View, Text } from "react-native";
import React from "react";  
import { useSafeAreaInsets } from "react-native-safe-area-context";


 const ScreenWrapper = ({Children,bg}) => {
          // useSafeAreaInsets hook is used to get the safe area insets of the device
            // It returns an object with top, bottom, left and right properties
            // We are only interested in the top property, so we destructure it
     const {top} = useSafeAreaInsets();   
      // If the top inset is greater than 0, we add 5 to it and use it as the padding top value 
     const paddingTop = top>0? top+5:30;
   return (
     <View style={{flex:1 , paddingTop , backgroundColor: bg}}>
        { 
            Children
        }
     </View>
   )
 }

 export default ScreenWrapper;  