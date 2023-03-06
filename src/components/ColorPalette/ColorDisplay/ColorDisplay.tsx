import React from 'react';

interface IColorDisplay {
  previewColor: string,
  selectedColor: string,
}

const ColorDisplay: React.FC<IColorDisplay> = ({ previewColor, selectedColor }) => (
    <div className='flex flex-wrap flex-col items-center justify-center'>
        <div
          className='w-24 h-24 mb-4 border border-black'
          style={{ backgroundColor: previewColor || selectedColor }}
        />
      <div className='mb-2'>
        Selected color:
        <code className='ml-1'>{previewColor || selectedColor}</code>
      </div>
    </div>
  )

export default ColorDisplay
