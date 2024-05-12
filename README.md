# ReactNative-SwipeableImage

## Features

- Easy to integrate with any React Native project.
- Smooth and responsive swipe animations.
- Customizable swipe responses and thresholds.

## Installation

Follow these steps to integrate the swipeable image component into your React Native application:

```bash
# Install dependencies
npm install react-native-gesture-handler react-native-reanimated
# If using Expo
expo install react-native-gesture-handler react-native-reanimated
```

## Wrap your component in a GestureHandlerRootView

```javascript
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
        {/* Requires an array of images */}
        <SwipeableImage images={images} />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
