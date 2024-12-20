import React from "react";
import {View,Text,StyleSheet,Button} from 'react-native'
import "../../global.css";


export default function SubTitle({SubTitle}){
  return(
     <Text className="text-[16px] mt-1 text-[#7C7C8A] ">{SubTitle}</Text>
  )
}
