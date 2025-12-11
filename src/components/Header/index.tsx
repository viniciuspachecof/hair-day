import { useContext, useEffect, useState, type FormEvent } from 'react';
import { containerHora } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { HairDayContext } from '../../contexts/HairDayContext';
import { startOfDay, isEqual } from 'date-fns';

const horariosAgendamento = {
  PeriodoManha: [9, 10, 11, 12],
  PeriodoTarde: [13, 14, 15, 16, 17, 18],
  PeriodoNoite: [19, 20, 21],
};

export function Header() {
  const [dateSelected, setDateSelected] = useState<Date>(startOfDay(new Date()));
  const [hourSelected, setHourSelected] = useState<number>(0);
  const [nameClient, setNameClient] = useState<string>('');

  const { schedulings, onAdicionarSchedulings } = useContext(HairDayContext);

  function handleScheduling(event: FormEvent) {
    event.preventDefault();

    if (!dateSelected) return;

    const id = Math.random();
    const formatData = startOfDay(dateSelected);

    formatData.setHours(hourSelected);

    onAdicionarSchedulings({ id, date_time: formatData, client_name: nameClient });

    setNameClient('');
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
              onChange={(date) => {
                if (!date) return;

                const dataLimpa = startOfDay(date);
                setDateSelected(dataLimpa);
                setHourSelected(0);
              }}
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
                  {horariosAgendamento.PeriodoManha.map((value, index) => {
                    const dataHorarioExibicao = dateSelected;
                    dataHorarioExibicao.setHours(value);

                    const statusHora = schedulings.find((scheduling) => {
                      return isEqual(dataHorarioExibicao, scheduling.date_time);
                    });

                    return (
                      <div className="grid" key={index}>
                        <input
                          className="hidden peer"
                          type="radio"
                          id={`manha${index}`}
                          name="my_choice"
                          value={value}
                          onChange={() => setHourSelected(value)}
                          disabled={!!statusHora}
                          checked={hourSelected === value}
                        ></input>
                        <label htmlFor={`manha${index}`} className={containerHora({ status: !statusHora })}>
                          {String(value).padStart(2, '0') + ':00'}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Tarde</span>
                <div className="grid grid-cols-4 gap-2">
                  {horariosAgendamento.PeriodoTarde.map((value, index) => {
                    const dataHorarioExibicao = dateSelected;
                    dataHorarioExibicao.setHours(value);

                    const statusHora = schedulings.find((scheduling) => {
                      return isEqual(dataHorarioExibicao, scheduling.date_time);
                    });

                    return (
                      <div className="grid" key={index}>
                        <input
                          className="hidden peer"
                          type="radio"
                          id={`tarde${index}`}
                          name="my_choice"
                          value={value}
                          onChange={() => setHourSelected(value)}
                          disabled={!!statusHora}
                          checked={hourSelected === value}
                        ></input>
                        <label htmlFor={`tarde${index}`} className={containerHora({ status: !statusHora })}>
                          {String(value).padStart(2, '0') + ':00'}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Noite</span>
                <div className="flex grid-cols-4 gap-2">
                  {horariosAgendamento.PeriodoNoite.map((value, index) => {
                    const dataHorarioExibicao = dateSelected;
                    dataHorarioExibicao.setHours(value);

                    const statusHora = schedulings.find((scheduling) => {
                      return isEqual(dataHorarioExibicao, scheduling.date_time);
                    });

                    return (
                      <div className="grid" key={index}>
                        <input
                          className="hidden peer"
                          type="radio"
                          id={`noite${index}`}
                          name="my_choice"
                          value={value}
                          onChange={() => setHourSelected(value)}
                          disabled={!!statusHora}
                          checked={hourSelected === value}
                        ></input>
                        <label htmlFor={`noite${index}`} className={containerHora({ status: !statusHora })}>
                          {String(value).padStart(2, '0') + ':00'}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Cliente</p>
            <input
              type="text"
              className="p-3 border rounded-lg border-gray-500 w-full"
              value={nameClient}
              onChange={(e) => setNameClient(e.target.value)}
              required
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
