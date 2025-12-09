import { CloudSunIcon, MoonStarsIcon, SunHorizonIcon, TrashIcon } from '@phosphor-icons/react';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="px-28 py-[92px] flex-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-title-lg font-bold">Agende um atendimento</p>
          <p className="text-sm text-gray-300 leading-5 mb-6">Consulte os seus cortes de cabelo agendados por dia</p>
        </div>
        <DatePicker
          toggleCalendarOnIconClick
          selected={selectedDate}
          onChange={setSelectedDate}
          locale={ptBR}
          dateFormat="dd/MM/yyyy"
          className="p-3 border rounded-lg border-gray-500"
        />
      </div>

      <div className="border border-gray-600 rounded-lg mb-3">
        <table className="w-full">
          <thead className="border-b border-gray-600">
            <tr>
              <th colSpan={2} className="py-3 px-5">
                <div className="flex gap-3">
                  <SunHorizonIcon className="text-yellow" size={20} />
                  <span className="text-left text-sm text-gray-300 font-medium leading-normal">Manhã</span>
                </div>
              </th>
              <th className="text-gray-400 text-sm text-right px-5">09h-12h</th>
            </tr>
          </thead>
          <tbody>
            {Array(3)
              .fill({ hora: '11:00', nome: 'Vinicius Pacheco' })
              .map((obj) => (
                <tr>
                  <td className="p-5 text-title-md text-gray-200 font-bold w-[10%]">{obj.hora}</td>
                  <td className="text-md text-gray-200">{obj.nome}</td>
                  <td className="text-center w-[20%] p-5">
                    <TrashIcon className="text-yellow ml-auto cursor-pointer hover:text-yellow-dark" size={20} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="border border-gray-600 rounded-lg mb-3">
        <table className="w-full">
          <thead className="border-b border-gray-600">
            <tr>
              <th colSpan={2} className="py-3 px-5">
                <div className="flex gap-3">
                  <CloudSunIcon className="text-yellow" size={20} />
                  <span className="text-left text-sm text-gray-300 font-medium leading-normal">Tarde</span>
                </div>
              </th>
              <th className="text-gray-400 text-sm text-right px-5">13h-18h</th>
            </tr>
          </thead>
          <tbody>
            {Array(2)
              .fill({ hora: '13:00', nome: 'Vinicius Pacheco' })
              .map((obj) => (
                <tr>
                  <td className="p-5 text-title-md text-gray-200 font-bold w-[10%]">{obj.hora}</td>
                  <td className="text-md text-gray-200">{obj.nome}</td>
                  <td className="text-center w-[20%] p-5 ">
                    <TrashIcon className="text-yellow ml-auto cursor-pointer hover:text-yellow-dark" size={20} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="border border-gray-600 rounded-lg">
        <table className="w-full">
          <thead className="border-b border-gray-600">
            <tr>
              <th colSpan={2} className="py-3 px-5">
                <div className="flex gap-3">
                  <MoonStarsIcon className="text-yellow" size={20} />
                  <span className="text-left text-sm text-gray-300 font-medium leading-normal">Noite</span>
                </div>
              </th>
              <th className="text-gray-400 text-sm text-right px-5">19h-21h</th>
            </tr>
          </thead>
          <tbody>
            {Array(3)
              .fill({ hora: '19:00', nome: 'Vinicius Pacheco' })
              .map((obj) => (
                <tr>
                  <td className="p-5 text-title-md text-gray-200 font-bold w-[10%]">{obj.hora}</td>
                  <td className="text-md text-gray-200">{obj.nome}</td>
                  <td className="text-center w-[20%] p-5">
                    <TrashIcon className="text-yellow ml-auto cursor-pointer hover:text-yellow-dark" size={20} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
