import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import IIconProps from '../interfaces/IIconProps';

const ArrowLeftIcon = ({size, color}: IIconProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    height={size}
    width={size}
    stroke={color}>
    <Path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </Svg>
);

export default ArrowLeftIcon;
