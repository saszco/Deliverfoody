import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import IIconProps from '../interfaces/IIconProps';

const ChevronDownIcon = ({size, color}: IIconProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    width={size}
    height={size}
    stroke={color}
    className="size-6">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </Svg>
);

export default ChevronDownIcon;
