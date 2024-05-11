import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import SwipeableImage from "./components/SwipeableImage/SwipeableImage";

const images = [
  `https://fastly.picsum.photos/id/22/428/926.jpg?hmac=cO3y3vLEmYwq4sI_0GHWAEhjdId5baUwd3UR2Yn4RPA`,
  `https://fastly.picsum.photos/id/1073/428/926.jpg?hmac=rcRmwul7vymSMMAMUS7fYNWruiV8qpDX1rmDmCcrlrY`,
  `https://fastly.picsum.photos/id/80/428/926.jpg?hmac=_fEMeJ8oLNwl0ur1p8ZgZwiUl8cKE4Ea5v58ynIdwk0`,
  `https://fastly.picsum.photos/id/337/428/926.jpg?hmac=2qMOozwz3GTXSZ8kHEp6u83DlHvKNEbAQPG1WXHJUOE`,
];

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SwipeableImage images={images} />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
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
