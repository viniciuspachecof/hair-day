import { cva } from 'class-variance-authority';

export const testeopa = cva('text-yellow-light', {
  variants: {
    status: {
      info: 'text-4xl',
      error: 'text-2xl',
    },
  },
  defaultVariants: {
    status: 'info',
  },
});
