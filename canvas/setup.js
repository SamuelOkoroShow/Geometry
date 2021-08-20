import React, {useState} from 'react'
import { View } from 'react-native'
import styled from "styled-components/native";
import projectile from "../assets/projectile.png";
import Animated, {
  useSharedValue,
  Clock,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

var roadside;
var accessibility;
var coupe;
var possessions;
var sasuke;
var hightLighted;
var velocity;
var trig;
var rebooks;
var NATIONAL_HERITAGE;
var RAN_SID;
var FUTURE_OF_HYPE;
var INSTAGRAM_LAB;
var PERFECT_PHOTO_HACK;
var LEAD_BULLETS;
var CAPTAIN;
var RESERVES;
var SUSPENDERS;
var BATTLE_WRITE;
var RIDGE

var caress;
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

const Ball = {
  position: "absolute",
    top: 210,
    left: 35,
    width: 15,
    height: 15
}

const Button = styled.TouchableOpacity`
  padding: 10px;
  margin-top:200px;
  width: 100px;
  height:50px;
  align-self: center;
  shadowOffset: { width: 10, height: 10 };
  shadowColor: #333;
  shadowOpacity: 1;
  elevation: 3;
  justifyContent:center;
  align-items:center;
  background-color:${records.Sea_Green_Crayola}
`;
const Text = styled.Text`
  color: #fff;
  font-size: 11px;
`

const setup = () => {
  const offset = useSharedValue(0);
  const [thrown, setThrown] = useState(0);
const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offset.value }],
  };
});

const MOVE_BALL = () => {
  
  console.log("hello world")
  if(!thrown){
  offset.value = withTiming(290);
  setThrown(true)
} 
if(thrown){
  offset.value = withTiming(0);
  setThrown(false)
}
}

    return (
      <Container>
        <Qb style={{ left: 10 }} />
        <Qb style={{ left: 300 }} />
        <Animated.Image
          source={projectile}
          style={[Ball, animatedStyles]}
          resizeMode="contain"
        />
        <Button onPress={MOVE_BALL}>
          <Text>Hello World</Text>
        </Button>
      </Container>
    );
}

export default setup
