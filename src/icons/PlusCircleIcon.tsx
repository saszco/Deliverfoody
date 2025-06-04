import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import IIconProps from '../interfaces/IIconProps';

const PlusCircleIcon = ({size, color}: IIconProps) => (
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
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);

export default PlusCircleIcon;
