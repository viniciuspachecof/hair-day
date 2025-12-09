import Agendamento from './components/Agendamento';
import { Header } from './components/Header';
import { HairDayContextProvider } from './contexts/HairDayContext';

function App() {
  return (
    <HairDayContextProvider>
      <div className="flex gap">
        <Header />
        <Agendamento />
      </div>
    </HairDayContextProvider>
  );
}

export default App;
