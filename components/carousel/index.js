import { useEffect, useState } from "react";
import { View, Text, useWindowDimensions, Image } from "react-native";
import CarouselSlider from "react-native-reanimated-carousel";

import styles from "./styles";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);

  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    setTimeout(() => setAutoplayEnabled(true), 2000);
  }, []);

  const carouselItems = [
    {
      index: 1,
      title: "Gain total control of your money",
      description: "Become your own money manager and make every cent count",
      image: require("../../assets/carousel-1.png"),
    },
    {
      index: 2,
      title: "Know where your money goes",
      description:
        "Track your transaction easily, with categories and financial report ",
      image: require("../../assets/carousel-2.png"),
    },
    {
      index: 3,
      title: "Planning ahead",
      description: "Setup your budget for each category so you in control",
      image: require("../../assets/carousel-3.png"),
    },
  ];

  const renderItem = ({ index }) => (
    <View style={styles.carouselContentContainer}>
      <Image source={carouselItems[index].image} />
      <Text style={styles.carouselTitle}>{carouselItems[index].title}</Text>
      <Text style={styles.carouselDescription}>
        {carouselItems[index].description}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <CarouselSlider
          loop
          width={windowWidth}
          autoPlay={autoplayEnabled}
          data={carouselItems}
          scrollAnimationDuration={1000}
          onSnapToItem={setCurrentIndex}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.sliderButtonsContainer}>
        <View
          style={currentIndex === 0 ? styles.selectedIndex : styles.otherIndex}
        />
        <View
          style={[
            { marginHorizontal: 16 },
            currentIndex === 1 ? styles.selectedIndex : styles.otherIndex,
          ]}
        />
        <View
          style={currentIndex === 2 ? styles.selectedIndex : styles.otherIndex}
        />
      </View>
    </View>
  );
};

export default Carousel;
