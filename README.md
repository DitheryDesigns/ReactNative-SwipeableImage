# ReactNative-SwipeableImage

Welcome to the ReactNative-SwipeableImage project! This React Native component provides swipeable image functionality, mimicking a Tinder-like image swiping experience. It's perfect for applications where image browsing should be intuitive and engaging.

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

## Contributing

Contributions to enhance ReactNative-SwipeableImage are welcome. Here’s how you can contribute:

- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes.
- Commit your changes (`git commit -am 'Add some feature'`).
- Push to the branch (`git push origin feature-branch`).
- Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
