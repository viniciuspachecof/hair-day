import { cva } from 'class-variance-authority';

export const containerHora = cva('py-2 px-5 border rounded-lg', {
  variants: {
    status: {
      false: 'bg-gray-700 border-gray-600 text-gray-500 cursor-default',
      true: 'bg-gray-600 border-gray-500 text-gray-200 cursor-pointer hover:border-yellow hover:text-yellow peer-checked:border-yellow peer-checked:text-yellow',
    },
  },
  defaultVariants: {
    status: true,
  },
});
