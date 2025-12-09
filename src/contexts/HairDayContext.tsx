import { createContext, useState, type ReactNode } from 'react';
import type { IScheduling } from '../interface/IScheduling';

interface HairDayContextType {
  schedulings: IScheduling[];
  onAdicionarSchedulings: (data: IScheduling) => void;
  onRemoverSchedulings: (id: number) => void;
}

export const HairDayContext = createContext({} as HairDayContextType);

interface HairDayContextProviderProps {
  children: ReactNode;
}

export function HairDayContextProvider({ children }: HairDayContextProviderProps) {
  const [schedulings, setSchedulings] = useState<IScheduling[]>([]);

  function onAdicionarSchedulings(data: IScheduling) {
    setSchedulings((state) => [...state, { ...data }]);
  }

  function onRemoverSchedulings(id: number) {
    const listaSchedulings = schedulings.filter((scheduling) => scheduling.id !== id);

    setSchedulings(listaSchedulings);
  }

  return (
    <HairDayContext.Provider
      value={{
        schedulings,
        onAdicionarSchedulings,
        onRemoverSchedulings,
      }}
    >
      {children}
    </HairDayContext.Provider>
  );
}
