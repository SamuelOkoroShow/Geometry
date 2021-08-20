import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

var stabColors;


var records = {
  Amethyst: "#9b5de5",
  Magenta_Crayola: "#f15bb5",
  Minion_Yellow: "#fee440",
  Capri: "#00bbf9",
  Sea_Green_Crayola: "#00f5d4",
};

const recordsArr = [
  records.Minion_Yellow,
  records.Magenta_Crayola,
  records.Minion_Yellow,
  records.Capri,
  records.Sea_Green_Crayola,
];

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  flex: 1;
`;

stabColors = () => {
  var color = records.Amethyst;
  return color;
};

const Starbucks = () => {
  const [colors, setColors] = useState(records.Amethyst);

  useEffect(() => {
      var j = 0;
    setInterval(() => {
      setColors(recordsArr[j]);
      if(j < 4){
      j++;
    }else{
        j = 0
    }

    }, 1000 );
  }, []);

  return (
    <Container style={{ backgroundColor: colors }}>
      <Text style={{ color: "#fff" }}>Hello Starbucks!</Text>
    </Container>
  );
};

export default Starbucks;
