import React, { useState } from 'react'

type Color = string;

const PALETTE: Color[] = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
  '#000000',
  '#FFFFFF',
  '#808080',
  '#C0C0C0',
  '#FFD700',
  '#000080',
  '#006400',
  '#A52A2A',
  '#800080',
  '#FFC0CB',
  '#FFA500',
  '#40E0D0',
  '#E6E6FA',
  '#F5F5DC',
];

const ColorPalette: React.FC = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-center mb-4'>
        {PALETTE.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className='w-4 h-4 hover:-translate-y-1 duration-100 ease-in-out cursor-pointer'
          />
        ))}
      </div>
      <div className=''>
        <label htmlFor='color-input' className='font-medium'>Enter hexadecimal color:</label>
        <input
          id='color-input'
          type='text'
          className='p-1 ml-2 text-gray-800 border font-normal'
        />
      </div>
    </div>
  );
};

export default ColorPalette;