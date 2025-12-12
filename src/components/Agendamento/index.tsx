import { CloudSunIcon, MoonStarsIcon, SunHorizonIcon, TrashIcon } from '@phosphor-icons/react';
import { ptBR } from 'date-fns/locale';
import { useContext, useState, type FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import { HairDayContext } from '../../contexts/HairDayContext';
import { format, isEqual, startOfDay } from 'date-fns';

export default function Agendamento() {
  const [dateSelected, setDateSelected] = useState<Date>(new Date());

  const { schedulings, onRemoverSchedulings } = useContext(HairDayContext);

  const schedulingInDay = schedulings.filter((scheduling) =>
    isEqual(startOfDay(scheduling.date_time), startOfDay(dateSelected))
  );
  const periodoManha = schedulingInDay.filter((scheduling) => {
    const h = scheduling.date_time.getHours();
    return h >= 6 && h <= 12;
  });
  const periodoTarde = schedulingInDay.filter((scheduling) => {
    const h = scheduling.date_time.getHours();
    return h >= 13 && h <= 18;
  });
  const periodoNoite = schedulingInDay.filter((scheduling) => {
    const h = scheduling.date_time.getHours();
    return h >= 19 && h <= 21;
  });

  function handleDeleteScheduling(event: FormEvent, id: number) {
    event.preventDefault();

    onRemoverSchedulings(id);
  }

  return (
    <div className="px-28 py-[92px] flex-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-title-lg font-bold">Agende um atendimento</p>
          <p className="text-sm text-gray-300 leading-5 mb-6">Consulte os seus cortes de cabelo agendados por dia</p>
        </div>
        <DatePicker
          toggleCalendarOnIconClick
          selected={dateSelected}
          onChange={(date) => {
            if (!date) return;

            const dataLimpa = startOfDay(date);
            setDateSelected(dataLimpa);
          }}
          locale={ptBR}
          dateFormat="dd/MM/yyyy"
          className="p-3 border rounded-lg border-gray-500"
        />
      </div>

      {!!periodoManha.length && (
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
              {periodoManha.map((periodo, index) => (
                <tr key={index}>
                  <td className="p-5 text-title-md text-gray-200 font-bold w-[10%]">
                    {format(periodo.date_time, 'HH:mm')}
                  </td>
                  <td className="text-md text-gray-200">{periodo.client_name}</td>
                  <td className="text-center w-[20%] p-5">
                    <button onClick={(event) => handleDeleteScheduling(event, periodo.id)} className="flex ml-auto">
                      <TrashIcon className="text-yellow ml-auto cursor-pointer hover:text-yellow-dark" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!!periodoTarde.length && (
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
              {periodoTarde.map((periodo, index) => (
                <tr key={index}>
                  <td className="p-5 text-title-md text-gray-200 font-bold w-[10%]">
                    {format(periodo.date_time, 'HH:mm')}
                  </td>
                  <td className="text-md text-gray-200">{periodo.client_name}</td>
                  <td className="w-[20%] p-5">
                    <button onClick={(event) => handleDeleteScheduling(event, periodo.id)} className="flex ml-auto">
                      <TrashIcon className="text-yellow ml-auto cursor-pointer hover:text-yellow-dark" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!!periodoNoite.length && (
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
              {periodoNoite.map((periodo, index) => (
                <tr key={index}>
                  <td className="p-5 text-title-md text-gray-200 font-bold w-[10%]">
                    {format(periodo.date_time, 'HH:mm')}
                  </td>
                  <td className="text-md text-gray-200">{periodo.client_name}</td>
                  <td className="text-center w-[20%] p-5">
                    <button onClick={(event) => handleDeleteScheduling(event, periodo.id)} className="flex ml-auto">
                      <TrashIcon className="text-yellow ml-auto cursor-pointer hover:text-yellow-dark" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!periodoManha.length && !periodoTarde.length && !periodoNoite.length && (
        <div className="flex h-full justify-center items-center">
          <p className="text-title-lg font-bold">Você não possui agendamento para esse dia</p>
        </div>
      )}
    </div>
  );
}
