import React from "react";
import {View,Text,StyleSheet,Button} from 'react-native'
import "../../global.css";


export default function Title({nameTitle}){
  return(
     <Text className="text-[24px] mt-10 font-bold text-white">{nameTitle}</Text>
  )
}
