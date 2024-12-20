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

export default function NameTeam() {
  const navigation = useNavigation();
  const EventAddPerson = () => {
    Alert.alert("Turma removida");
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
      <View className="flex-1 items-center mt-5">
        <Title nameTitle={"Nome da turma"} />
        <SubTitle SubTitle={"adicione a galera e separe os times"} />
        <View className="mt-10">
          <TextInput
            placeholder="Nome do participante"
            className="w-96 h-14 rounded-md bg-[#121214] text-[#7C7C8A] mb-5 pl-5"
            value="Nome do participante"
          />
          <Image
            className="w-[24px] h-[24px] bottom-[55px] left-[300px]"
            source={require("../../assets/add.png")}
          ></Image>
        </View>

        <View className="flex flex-row items-baseline justify-between w-[100%]">
          <View className="flex flex-row items-baseline ml-8">
            <TouchableOpacity className="w-[70px] h-[38px] rounded-md border-2 border-[#00B37E] py-[8px] px-[5px]">
              <Text className="text-white font-bold text-center">TIME A</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[70px] h-[38px] py-[8px] px-[5px]">
              <Text className="text-white font-bold text-center">TIME B</Text>
            </TouchableOpacity>
          </View>
          <View className="mr-10">
            <Text className="text-white font-bold text-[14px]">2</Text>
          </View>
        </View>
        <View className="mt-7">
          <TouchableOpacity
            className={`w-[340px] h-[54px]  mt-2 rounded-md bg-[#29292E] border-2/3  flex flex-row items-center
    }`}
          >
            <Image
              className="w-[20px] h-[20px] ml-5"
              source={require("../../assets/person.png")}
            ></Image>
            <Text className="text-[16px] text-center text-white ml-5">Rodrigo Gonçalves</Text>
            <Image
              className="w-[35px] h-[35px] left-[100px]"
              source={require("../../assets/close.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            className={`w-[340px] h-[54px]  mt-2 rounded-md bg-[#29292E] border-2/3  flex flex-row items-center
    }`}
          >
            <Image
              className="w-[20px] h-[20px] ml-5"
              source={require("../../assets/person.png")}
            ></Image>
            <Text className="text-[16px] text-center text-white ml-5">Diego Fernandes</Text>
            <Image
              className="w-[35px] h-[35px] left-[115px]"
              source={require("../../assets/close.png")}
            ></Image>
          </TouchableOpacity>
          
        </View>
      </View>
      <View className="mb-10">
        <SubmitButton
          type={"red"}
          name={"Remover turma"}
          onPress={EventAddPerson}
        />
      </View>
    </View>
  );
}
