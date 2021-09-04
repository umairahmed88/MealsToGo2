import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantsInfoCard = ({ restaurants = {} }) => {
  const {
    name = "Some Restaurants",
    icon,
    photos = ["https://www.businesslist.pk/img/cats/restaurants.jpg"],
    address = "AR mobile mart",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurants;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
