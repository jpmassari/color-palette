import React from 'react'

import ColorSlot from './ColorSlot/ColorSlot'
import ColorDisplay from './ColorDisplay/ColorDisplay';
import { useColorPalette } from '../../hooks/useColorPalette'

const PALETTE: string[] = [
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

  const { 
    previewColor, 
    selectedColor,
    inputColor, 
    paletteColors, 
    error, 
    handlePaletteClick, 
    handleColorPreview, 
    handleInputValidation 
  } = useColorPalette(PALETTE);

  return (
    <div className='flex flex-wrap flex-col items-center justify-center pt-16'>
      <ColorDisplay previewColor={previewColor} selectedColor={selectedColor} />
      <div className='flex flex-wrap mb-4'>
        {paletteColors.map((color, i) => (
          <ColorSlot key={i} color={color} index={i} onClick={(value) => handlePaletteClick(value)} colorPreview={(value) => handleColorPreview(value)}/>
        ))}
      </div>
      <div className=''>
        <label htmlFor='color-input' className='font-medium'>Enter hexadecimal color:</label>
        <form 
          // @ts-ignore
          onSubmit={handleInputValidation(inputColor)}
        >
          <input
            id='color-input'
            type='text'
            className='p-1 ml-2 text-gray-800 border font-normal'
            value={inputColor}
            // @ts-ignore
            onChange={handleInputValidation()}
          />
        </form>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default ColorPalette;
