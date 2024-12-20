import React from "react";
import {View,Text,StyleSheet,Button,Image, Alert} from 'react-native'
import "../../global.css"; 
import Title from "../components/Title";
import SubTitle from "../components/Subtitle";
import SubmitButton from "../components/SubmitButton";
import Exception from "../components/ExceptionAtention";
import ButtonNewTeam from "../components/ButtonNewTeam";
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

export default function Teams(){ 
  const navigation = useNavigation()
  const EventCreateTeam = () => {
      navigation.navigate('CreateTeams')
  }
  return(
      <View className="bg-[#202024] flex-1 items-center justify-between">
         <View className="flex-1 items-center">
         <Image className="w-[46px] h-[55px] mt-10" source={require("../../assets/Logo.png")}></Image>
          <Title nameTitle={"Turmas"}/>
          <SubTitle SubTitle={"jogue com a sua turma"}/>  
          <View className="mt-10">
            <ButtonNewTeam name={"Nome da turma"}/>
            <ButtonNewTeam name={"Nome da turma"}/>
          </View>
        
         </View>
         <View className="mb-10">
         <SubmitButton type={"green"} name={"Criar nova turma"} onPress={EventCreateTeam}/>          
         </View>

      </View>
  )
}

   