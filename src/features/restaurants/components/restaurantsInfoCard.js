import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantsCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantsCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

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
    <RestaurantsCard elevation={5}>
      <RestaurantsCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantsCard>
  );
};
