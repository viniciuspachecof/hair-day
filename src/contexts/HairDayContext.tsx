import { createContext, useState, type ReactNode } from 'react';
import type { IScheduling } from '../interface/IScheduling';

interface HairDayContextType {
  schedulings: IScheduling[];
  schedulingsAvailable: Date[];
  onAdicionarSchedulings: (data: IScheduling) => void;
  onAdicionarSchedulingsAvailable: (data: Date) => void;
  onRemoverSchedulings: (id: number) => void;
}

export const HairDayContext = createContext({} as HairDayContextType);

interface HairDayContextProviderProps {
  children: ReactNode;
}

export function HairDayContextProvider({ children }: HairDayContextProviderProps) {
  const [schedulings, setSchedulings] = useState<IScheduling[]>([]);
  const [schedulingsAvailable, setSchedulingsAvailable] = useState<Date[]>([]);

  function onAdicionarSchedulings(data: IScheduling) {
    setSchedulings((state) => [...state, data]);
  }

  function onAdicionarSchedulingsAvailable(data: Date) {
    setSchedulingsAvailable((state) => [...state, data]);
  }

  function onRemoverSchedulings(id: number) {
    const listaSchedulings = schedulings.filter((scheduling) => scheduling.id !== id);

    setSchedulings(listaSchedulings);
  }

  return (
    <HairDayContext.Provider
      value={{
        schedulings,
        schedulingsAvailable,
        onAdicionarSchedulings,
        onRemoverSchedulings,
        onAdicionarSchedulingsAvailable,
      }}
    >
      {children}
    </HairDayContext.Provider>
  );
}
