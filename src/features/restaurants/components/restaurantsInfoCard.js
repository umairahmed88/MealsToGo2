import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/Spacer/spacer";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  RestaurantsCard,
  RestaurantsCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./restaurantsInfoCard.styles";

export const RestaurantsInfoCard = ({ restaurants = {} }) => {
  const {
    name = "Some Restaurants",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://www.businesslist.pk/img/cats/restaurants.jpg"],
    address = "AR mobile mart",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurants;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantsCard elevation={5}>
      <RestaurantsCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantsCard>
  );
};
