import React from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";

const YourApp = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Prashant Srivastav! 🎉</Text>
      </View>
    </ScrollView>
  );
};

export default YourApp;
