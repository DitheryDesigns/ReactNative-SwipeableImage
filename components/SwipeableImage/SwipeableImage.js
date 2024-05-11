import { useState } from "react";
import { StyleSheet, useWindowDimensions, Image } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS
} from "react-native-reanimated";

const SwipeableImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useSharedValue(0);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const onSwipeComplete = (currentIndex, setCurrentIndex) => {
    setCurrentIndex(currentIndex + 1); // Update the index immediately

    // Delay resetting the position
    setTimeout(() => {
      position.value = withTiming(0, { duration: 0 }); // Reset the translation to show the new top image
    }, 500); // Delay of 50 milliseconds to wait for the new image to stabilize
  };

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      position.value = e.translationX; // Direct translation update
    })
    .onEnd((e) => {
      if (Math.abs(e.translationX) > 100) { // Swipe threshold
        position.value = withTiming(e.translationX > 0 ? windowWidth : -windowWidth, { duration: 300 }, () => {
          runOnJS(onSwipeComplete)(currentIndex, setCurrentIndex)
        });
      } else {
        position.value = withTiming(0, { duration: 300 }); // Return to center if not swiped far enough
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.imageContainer, { width: windowWidth, height: windowHeight }]}>
        {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <Animated.View
            key={currentIndex + index}
            style={[
              styles.imageWrapper,
              {
                zIndex: index === 0 ? 1 : 0, // Current image on top
                width: windowWidth,
                height: windowHeight,
              },
              index === 0 ? animatedStyle : {}, // Apply animation only to the top image
            ]}
          >
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
          </Animated.View>
        ))}
      </Animated.View>
    </GestureDetector>
  );
};

export default SwipeableImage;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden', // Keeps everything tidy
  },
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },
});
