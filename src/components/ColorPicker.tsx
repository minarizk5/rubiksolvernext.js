import { Color } from '@/types/cube';

interface ColorPickerProps {
  selectedColor: Color;
  onColorSelect: (color: Color) => void;
}

const COLORS: { color: Color; gradient: string; label: string }[] = [
  { color: 'W', gradient: 'bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200', label: 'White' },
  { color: 'Y', gradient: 'bg-gradient-to-br from-yellow-300 to-yellow-400', label: 'Yellow' },
  { color: 'R', gradient: 'bg-gradient-to-br from-red-500 to-red-600', label: 'Red' },
  { color: 'O', gradient: 'bg-gradient-to-br from-orange-400 to-orange-500', label: 'Orange' },
  { color: 'B', gradient: 'bg-gradient-to-br from-blue-500 to-blue-600', label: 'Blue' },
  { color: 'G', gradient: 'bg-gradient-to-br from-green-500 to-green-600', label: 'Green' },
];

export default function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-lg border border-border">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
        <span className="mr-2">🎨</span>
        Select Color
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {COLORS.map(({ color, gradient, label }) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className="group relative"
          >
            <div
              className={`
                w-16 h-16 rounded-xl transition-all duration-200
                ${gradient}
                ${selectedColor === color 
                  ? 'ring-4 ring-primary ring-offset-2 scale-105' 
                  : 'hover:scale-105 hover:ring-2 hover:ring-ring hover:ring-offset-1'
                }
              `}
            />
            <span className={`
              absolute -bottom-6 left-1/2 transform -translate-x-1/2
              text-sm font-medium transition-opacity duration-200
              ${selectedColor === color ? 'text-primary' : 'text-secondary-foreground'}
              opacity-0 group-hover:opacity-100
            `}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}