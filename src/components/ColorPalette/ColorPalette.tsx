import React, { useState } from 'react'

import ColorSlot from './ColorSlot/ColorSlot'

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
  const [ previewColor, setPreviewColor ] = useState<Color>("")
  const [ selectedColor, setSelectedColor ] = useState<Color>("#ffffff");
  const [ inputColor, setInputColor ] = useState<Color>("");
  const [ paletteColors, setPaletteColors ] = useState<Color[]>(PALETTE)
  const [error, setError] = useState<string | null>(null);

  const handlePaletteClick = (color: Color) => {
    setSelectedColor(color);
    setInputColor("");
  };
  const handleColorPreview = (color: Color) => {
    setPreviewColor(color)
  };

  type InputValidationFn = (test?: string) => ((event: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) => void) | void;

  const handleInputValidation: InputValidationFn = (inputValue?: string) => {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) => {
      event.preventDefault();
      if(inputValue) {     
        return (/^#[0-9A-F]{0,6}$/i.test(inputValue) && inputValue.length == 7 && !paletteColors.find(color => color == inputValue)
          ? setPaletteColors([...paletteColors, inputValue]) 
          : setError("Insert a valid color code")
        )
      }
      const input = event.target.value.trim().toUpperCase();
      if (input === "") {
        setInputColor("");
        setError(null);
      } else if (!/^#[0-9A-F]{0,6}$/i.test(input)) {
        setError("Invalid color code");
      } else {
        setInputColor(input);
        setError(null);
        setSelectedColor(input);
      }
    }
  };
  return (
    <div className='flex flex-wrap flex-col items-center justify-center pt-16'>
      <div
        className='w-24 h-24 mb-4 border border-black'
        style={{ backgroundColor: previewColor || selectedColor }}
      />
      <div className='mb-2'>
        Selected color:
        <code className='ml-1'>{previewColor || selectedColor}</code>
      </div>
      <div className='flex justify-center mb-4'>
        {paletteColors.map((color, i) => (
          <ColorSlot key={i} color={color} index={i} onClick={(value) => handlePaletteClick(value)} colorPreview={(value) => handleColorPreview(value)}/>
        ))}
      </div>
      <div className=''>
        <label htmlFor='color-input' className='font-medium'>Enter hexadecimal color:</label>
        <form onSubmit={handleInputValidation(inputColor)}>
          <input
            id='color-input'
            type='text'
            className='p-1 ml-2 text-gray-800 border font-normal'
            value={inputColor}
            onChange={handleInputValidation()}
          />
        </form>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default ColorPalette;