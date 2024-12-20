import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button } from "@react-navigation/elements";
import "../../global.css";
import Title from "../components/Title";
import SubTitle from "../components/Subtitle";
import SubmitButton from "../components/SubmitButton";
import Exception from "../components/ExceptionAtention";
import ButtonNewTeam from "../components/ButtonNewTeam";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export default function CreateTeams() {
  const navigation = useNavigation();
  const EventAddPerson = () => {
    navigation.navigate("NameTeams");
  };
  return (
    <View className="bg-[#202024] flex-1 items-center justify-center">
      <View className="flex flex-row items-center gap-x-80 mt-12">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            className="w-[32px] h-[32px]"
            source={require("../../assets/goBack.png")}
          ></Image>
        </TouchableOpacity>
        <Image
          className="w-[46px] h-[55px]"
          source={require("../../assets/Logo.png")}
        ></Image>
      </View>
      <View className="flex-1 items-center mt-20">
        <Image
          className="w-[56px] h-[56px] mt-10"
          source={require("../../assets/groupNotFill.png")}
        ></Image>
        <Title nameTitle={"Nova Turma"} />
        <SubTitle SubTitle={"crie uma turma para adicionar pessoas"} />
        <View className="mt-10">
          <TextInput
            placeholder="Nome da turma"
            className="w-96 h-14 rounded-md bg-[#121214] text-[#7C7C8A] mb-5 pl-5"
            value="Nome da turma"
          />
          <SubmitButton
            type={"green"}
            name={"Criar"}
            onPress={EventAddPerson}
          />
        </View>
      </View>
    </View>
  );
}
