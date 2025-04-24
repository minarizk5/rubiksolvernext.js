import { Color } from '@/types/cube';

interface ColorPickerProps {
  selectedColor: Color;
  onColorSelect: (color: Color) => void;
}

const COLORS: { color: Color; background: string; label: string }[] = [
  { color: 'W', background: 'bg-cube-white', label: 'White' },
  { color: 'Y', background: 'bg-cube-yellow', label: 'Yellow' },
  { color: 'R', background: 'bg-cube-red', label: 'Red' },
  { color: 'O', background: 'bg-cube-orange', label: 'Orange' },
  { color: 'B', background: 'bg-cube-blue', label: 'Blue' },
  { color: 'G', background: 'bg-cube-green', label: 'Green' },
];

export default function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
      <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="13.5" cy="6.5" r="2.5"/>
          <circle cx="17.5" cy="10.5" r="2.5"/>
          <circle cx="8.5" cy="7.5" r="2.5"/>
          <circle cx="6.5" cy="12.5" r="2.5"/>
        </svg>
        Select a Color
      </h3>
      
      <div className="grid grid-cols-3 gap-4">
        {COLORS.map(({ color, background, label }) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className="relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`Select ${label} color`}
          >
            <div
              className={`
                aspect-square rounded-lg transition-all duration-200 
                ${background} border-2 border-gray-800
                ${selectedColor === color 
                  ? 'ring-4 ring-primary ring-offset-4 scale-110 shadow-lg' 
                  : 'hover:scale-105 hover:shadow-md'}
              `}
              style={{width: '50px', height: '50px'}}
            >
              {selectedColor === color && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <span className="block text-sm font-medium text-center mt-2 text-white">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}