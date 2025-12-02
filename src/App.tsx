import Agendamento from './components/Agendamento';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <div className="flex gap">
        <Header />
        <Agendamento />
      </div>
    </>
  );
}

export default App;
