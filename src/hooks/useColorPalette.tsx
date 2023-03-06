import React, { useState } from 'react'


export const useColorPalette = (palette: string[]) => {

  const [ previewColor, setPreviewColor ] = useState<string>("")
  const [ selectedColor, setSelectedColor ] = useState<string>("#ffffff");
  const [ inputColor, setInputColor ] = useState<string>("");
  const [ paletteColors, setPaletteColors ] = useState<string[]>(palette)
  const [ error, setError ] = useState<string | null>(null);

  const handlePaletteClick = (color: string) => {
    setSelectedColor(color);
  };
  const handleColorPreview = (color: string) => {
    setPreviewColor(color)
  };

  type InputValidationFn = (test?: string) => ((event: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) => void) | void;

  const handleInputValidation: InputValidationFn = (inputValue?: string) => {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) => {
      event.preventDefault();
      if(inputValue) {     
        return (/^#[0-9A-F]{0,6}$/i.test(inputValue) && inputValue.length == 7 && !paletteColors.find(color => color == inputValue)
          ? (setPaletteColors([...paletteColors, inputValue]), setInputColor(""), setSelectedColor(inputValue))
          : setError("Insert a valid color code")
        )
      }
      const input = event.target.value.trim().toUpperCase();
      if (input === "") {
        setInputColor("");
        setError(null);
      } else if (!/^#[0-9A-F]{0,6}$/i.test(input)) {
        if(input.length == 8) {
          return;
        }
        setError("Invalid color code");
      } else {
        setInputColor(input);
        setError(null);
        setSelectedColor(input);
      }
    }
  };
  return {
    previewColor,
    selectedColor,
    inputColor,
    paletteColors,
    error,
    handlePaletteClick,
    handleColorPreview,
    handleInputValidation,
  };
};
