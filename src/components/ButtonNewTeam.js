import React from "react";
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native'
import "../../global.css";


export default function ButtonNewTeam({name}){
  return(
    <TouchableOpacity className={`w-96 h-24  mt-2 rounded-md bg-[#29292E] border-2/3  flex flex-row items-center
    }`}>
    <Image className="w-[32px] h-[32px] ml-5" source={require("../../assets/groupFill.png")}></Image>
    <Text className="font-bold text-[16px] text-center text-white ml-5">{name}</Text>
  </TouchableOpacity>
  )
}
