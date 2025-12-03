import { useState } from 'react';
import { containerHora } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

export function Header() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="p-3 h-dvh">
      <div className="bg-gray-700 p-20 h-full max-w-[500px] rounded-xl">
        <p className="text-title-lg font-bold">Agende um atendimento</p>
        <p className="text-sm text-gray-300 leading-5 mb-6">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>

        <div className="flex flex-col gap-8 mb-6">
          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Data</p>
            <DatePicker
              toggleCalendarOnIconClick
              selected={selectedDate}
              onChange={setSelectedDate}
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
                    .fill({ hora: '09:00', status: true })
                    .map((obj) => (
                      <span className={containerHora({ status: obj.status })}>{obj.hora}</span>
                    ))}
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Tarde</span>
                <div className="grid grid-cols-4 gap-2">
                  {Array(6)
                    .fill({ hora: '13:00', status: true })
                    .map((obj) => (
                      <span className={containerHora({ status: obj.status })}>{obj.hora}</span>
                    ))}
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Noite</span>
                <div className="flex grid-cols-4 gap-2">
                  {Array(3)
                    .fill({ hora: '19:00', status: true })
                    .map((obj) => (
                      <span className={containerHora({ status: obj.status })}>{obj.hora}</span>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Cliente</p>
            <input type="text" className="p-3 border rounded-lg border-gray-500 w-full" />
          </div>
        </div>

        <button className="w-full bg-yellow text-gray-900 rounded-lg p-[18px] font-bold text-title-sm cursor-pointer border-2 border-transparent hover:border-yellow-light">
          AGENDAR
        </button>
      </div>
    </div>
  );
}
