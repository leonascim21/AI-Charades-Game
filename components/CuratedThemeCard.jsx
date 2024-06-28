import React from "react";
import { Image, Button } from "react-native";

const CuratedThemeCard = ({ wordList, navigation, title, picture }) => {
  return (
    <>
      <Image
        source={{
          width: 100,
          height: 100,
          uri: picture,
        }}
      ></Image>
      <Button
        title={title}
        onPress={() => navigation.navigate("Game", { wordList })}
      />
    </>
  );
};

export default CuratedThemeCard;
