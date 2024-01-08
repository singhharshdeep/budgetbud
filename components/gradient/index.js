import React from "react";
import Svg, { LinearGradient, Stop } from "react-native-svg";

export default function Gradient() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 983.4 983.4"
    >
      <LinearGradient
        id="linear-gradient"
        gradientUnits="userSpaceOnUse"
        x1="1041.6901"
        y1="169.485"
        x2="1383.9301"
        y2="169.485"
        gradientTransform="matrix(1 0 0 -1 -761.14 398.97)"
      >
        <Stop offset="0.14" stop-color="#2f343b" stopOpacity="0" />
        <Stop offset="0.43" stop-color="#337082" stopOpacity="0.41" />
        <Stop offset="0.67" stop-color="#369fb9" stopOpacity="0.73" />
        <Stop offset="0.79" stop-color="#37b1cf" stopOpacity="0.85" />
      </LinearGradient>
    </Svg>
  );
}
