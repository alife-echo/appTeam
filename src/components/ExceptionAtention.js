import React from "react";
import {View,Text,StyleSheet,Button} from 'react-native'
import "../../global.css";


export default function Exception({name}){
  return(
     <Text className="text-[17px] mt-44 font-bold text-[#00875F]">{name}</Text>
  )
}
