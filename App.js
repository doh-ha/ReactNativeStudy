import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = (props) => {
  {
    /* (2) props 받기  */
  }
  return <Text>{props.title}</Text>;
  {
    /* (3) props 사용  */
  }
};
const MyProfile = () => {
  return (
    <Profile
      name="지연"
      uri="https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg"
      profileSize={40}
    />
  );
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};
const FriendList = () => {
  return (
    <View>
      <Profile
        name="복숭아"
        uri="https://health.chosun.com/site/data/img_dir/2021/07/29/2021072901667_0.jpg"
        profileSize={30}
      />
      <Profile
        name="망고"
        uri="http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2017/08/09/20170809000372_0.jpg"
        profileSize={30}
      />
      <Profile
        name="오렌지"
        uri="https://www.sciencetimes.co.kr/wp-content/uploads/2014/06/AU0-00639.jpg"
        profileSize={30}
      />
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: props.uri,
        }}
        style={{ width: props.profileSize, height: props.profileSize }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      {/* (1) props 넘겨주기  */}
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
