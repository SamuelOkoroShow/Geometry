import React from 'react'
import { View, Text } from 'react-native'
import styled from "styled-components/native";
import projectile from "../assets/projectile.png";

var roadside;
var accessibility;
var coupe;
var possessions;
var sasuke;
var records = {
  Amethyst: "#9b5de5",
  Magenta_Crayola: "#f15bb5",
  Minion_Yellow: "#fee440",
  Capri: "#00bbf9",
  Sea_Green_Crayola: "#00f5d4",
};

const Container = styled.View`
  background-color: ${records.Capri};
  flex: 1;
`;
const Qb = styled.View`
  background-color: ${records.Magenta_Crayola};
  position: absolute;
  top:200px;
  width:50px;
  height: 50px;
  border-radius: 25px;
`;

const Ball = styled.Image`
    position: absolute;
    top: 210px;
    left: 35px;
    width: 15px;
    height: 15px;
`

const setup = () => {
    return (
        <Container>
            <Qb style={{left: 10}}/>
            <Ball source = {projectile} resizeMode="contain" />
            <Qb style={{right:10}} />
        </Container>
    )
}

export default setup
