import { createContext, useState, type ReactNode } from 'react';
import type { IScheduling } from '../interface/IScheduling';
import type { ISchedulingAvailable } from '../interface/ISchedulingAvailable';

interface HairDayContextType {
  schedulings: IScheduling[];
  schedulingsAvailable: ISchedulingAvailable[];
  onAdicionarSchedulings: (data: IScheduling) => void;
  onAdicionarSchedulingsAvailable: (data: ISchedulingAvailable) => void;
  onRemoverSchedulings: (id: number) => void;
}

export const HairDayContext = createContext({} as HairDayContextType);

interface HairDayContextProviderProps {
  children: ReactNode;
}

export function HairDayContextProvider({ children }: HairDayContextProviderProps) {
  const [schedulings, setSchedulings] = useState<IScheduling[]>([]);
  const [schedulingsAvailable, setSchedulingsAvailable] = useState<ISchedulingAvailable[]>([]);

  function onAdicionarSchedulings(data: IScheduling) {
    setSchedulings((state) => [...state, data]);
  }

  function onAdicionarSchedulingsAvailable(data: ISchedulingAvailable) {
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
