import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import "../../global.css";

export default function SubmitButton({ type,name ,onPress}) {
  return (
    <TouchableOpacity className={`px-6 py-4 w-96 h-14 rounded-md ${
        type === "green" ? "bg-[#00875F]" : "bg-[#AA2834]"
      }`} onPress={onPress}>
      <Text className="font-bold text-[16px] text-center text-white">{name}</Text>
    </TouchableOpacity>
  ); 
}
   