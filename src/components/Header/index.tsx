import { useContext, useState } from 'react';
import { containerHora } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { HairDayContext } from '../../contexts/HairDayContext';

export function Header() {
  const [dateSelected, setDateSelected] = useState<Date | null>(new Date());
  const [hourSelected, setHourSelected] = useState<string>();
  const [name, setName] = useState<string>('');

  const { onAdicionarSchedulingsAvailable } = useContext(HairDayContext);

  function handleScheduling() {
    const id = Math.random();
    console.log(hourSelected);

    onAdicionarSchedulingsAvailable({ id, date_time: dateSelected });
  }

  return (
    <div className="p-3 h-dvh">
      <div className="bg-gray-700 p-20 h-full max-w-[500px] rounded-xl">
        <p className="text-title-lg font-bold">Agende um atendimento</p>
        <p className="text-sm text-gray-300 leading-5 mb-6">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>

        <form className="flex flex-col gap-8 mb-6" onSubmit={handleScheduling}>
          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Data</p>
            <DatePicker
              toggleCalendarOnIconClick
              selected={dateSelected}
              onChange={setDateSelected}
              locale={ptBR}
              dateFormat="dd/MM/yyyy"
              className="p-3 border rounded-lg border-gray-500"
            />
          </div>

          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Horários</p>
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-gray-300 text-sm">Manhã</span>
                <div className="grid grid-cols-4 gap-2">
                  {Array(4)
                    .fill({ hora: '13:00', status: true })
                    .map((obj, index) => (
                      <div className="grid">
                        <input
                          className="hidden peer"
                          type="radio"
                          id={`manha${index}`}
                          name="my_choice"
                          value={obj.hora}
                          onChange={() => setHourSelected(obj.hora)}
                        ></input>
                        <label htmlFor={`manha${index}`} className={containerHora({ status: obj.status })}>
                          {obj.hora}
                        </label>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Tarde</span>
                <div className="grid grid-cols-4 gap-2">
                  {Array(6)
                    .fill({ hora: '13:00', status: true })
                    .map((obj, index) => (
                      <div className="grid">
                        <input
                          className="hidden peer"
                          type="radio"
                          id={`tarde${index}`}
                          name="my_choice"
                          value={obj.hora}
                          onChange={() => setHourSelected(obj.hora)}
                        ></input>
                        <label htmlFor={`tarde${index}`} className={containerHora({ status: obj.status })}>
                          {obj.hora}
                        </label>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Noite</span>
                <div className="flex grid-cols-4 gap-2">
                  {Array(3)
                    .fill({ hora: '19:00', status: true })
                    .map((obj, index) => (
                      <div className="grid">
                        <input
                          className="hidden peer"
                          type="radio"
                          id={`noite${index}`}
                          name="my_choice"
                          value={obj.hora}
                          onChange={() => setHourSelected(obj.hora)}
                        ></input>
                        <label htmlFor={`noite${index}`} className={containerHora({ status: obj.status })}>
                          {obj.hora}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Cliente</p>
            <input
              type="text"
              className="p-3 border rounded-lg border-gray-500 w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow text-gray-900 rounded-lg p-[18px] font-bold text-title-sm cursor-pointer border-2 border-transparent hover:border-yellow-light"
          >
            AGENDAR
          </button>
        </form>
      </div>
    </div>
  );
}
