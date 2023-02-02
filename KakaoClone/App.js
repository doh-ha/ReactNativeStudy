import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/Header";
import {
  getBottomSpace,
  getStatusBarHeight,
  ifIphoneX,
} from "react-native-iphone-x-helper";
import MyProfile from "./src/MyProfile";
import { myProfile } from "./src/data";
import Margin from "./src/Margin";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <Header />

        {/* 사이 간격 */}
        {/* <View style={{ height: 10 }} /> */}
        <Margin height={10} />

        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: statusBarHeight,
  },
});
