import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import IIconProps from '../interfaces/IIconProps';

const ChevronRightIcon = ({size, color}: IIconProps) => (
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
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </Svg>
);

export default ChevronRightIcon;
