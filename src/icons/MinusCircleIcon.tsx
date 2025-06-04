import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import IIconProps from '../interfaces/IIconProps';

const MinusCircleIcon = ({size, color}: IIconProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    width={size}
    height={size}
    stroke={color}>
    <Path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);

export default MinusCircleIcon;
