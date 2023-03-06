import React, { memo } from 'react'

interface IColorSlot {
  index: number,
  color: string,
  onClick: (value: string) => void,
  colorPreview: (value: string) => void,
}

const ColorSlot: React.FC<IColorSlot> = ({
  index,
  color, 
  onClick = () => null,
  colorPreview = () => null,
}) => (
  <div
    className='w-4 h-4 cursor-pointer hover:translate-y-[1px] duration-100 ease-in-out'
    style={{ backgroundColor: color }}
    onClick={() => onClick(color)}
    onMouseOver={() => colorPreview(color)}
    onMouseOut={() => colorPreview("") }
  />
)
const arePropsEqual = (oldProps: IColorSlot, newProps:IColorSlot) => {
  return oldProps.color == newProps.color ? true : false
}

export default memo(ColorSlot, arePropsEqual)
