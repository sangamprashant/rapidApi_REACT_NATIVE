import { Stack,} from "expo-router";
import React from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import { useRouter } from "expo-router";

const YourApp = () => {
  const navigation = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              onPress={() => navigation.openDrawer()} // Example: openDrawer function
              iconUrl={icons.menu}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              onPress={() => navigation.navigate("Profile")} // Example: Navigate to Profile screen
              iconUrl={images.profile}
              dimension="100%"
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourApp;
