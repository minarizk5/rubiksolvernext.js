import { Color } from '@/types/cube';

interface ColorPickerProps {
  selectedColor: Color;
  onColorSelect: (color: Color) => void;
}

const COLORS: { color: Color; gradient: string }[] = [
  { color: 'W', gradient: 'bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200' },
  { color: 'Y', gradient: 'bg-gradient-to-br from-yellow-300 to-yellow-400' },
  { color: 'R', gradient: 'bg-gradient-to-br from-red-500 to-red-600' },
  { color: 'O', gradient: 'bg-gradient-to-br from-orange-400 to-orange-500' },
  { color: 'B', gradient: 'bg-gradient-to-br from-blue-500 to-blue-600' },
  { color: 'G', gradient: 'bg-gradient-to-br from-green-500 to-green-600' },
];

export default function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Color</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {COLORS.map(({ color, gradient }) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className={`
              w-16 h-16 rounded-xl transition-all duration-200 transform hover:-translate-y-1
              ${gradient}
              ${selectedColor === color ? 'ring-4 ring-indigo-500 ring-offset-2' : ''}
            `}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
}