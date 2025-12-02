import { SunHorizonIcon, TrashIcon } from '@phosphor-icons/react';

export default function Agendamento() {
  return (
    <div className="p-20 flex-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-title-lg font-bold">Agende um atendimento</p>
          <p className="text-sm text-gray-300 leading-5 mb-6">Consulte os seus cortes de cabelo agendados por dia</p>
        </div>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div className="border-1 border-gray-600 rounded-lg">
        <table className="w-full">
          <thead className="border-b border-gray-600">
            <tr>
              <th colSpan={2} className="py-3 px-5">
                <div className="flex gap-3">
                  <SunHorizonIcon className="text-yellow" size={20} />
                  <span className="text-left text-sm text-gray-300 font-medium leading-normal">Manhã</span>
                </div>
              </th>
              <th className="text-gray-400 text-sm">09h-12h</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center p-5 text-title-md text-gray-200 font-bold">11:00</td>
              <td className="text-md text-gray-200">Vinicius Pacheco</td>
              <td className="text-center">
                <TrashIcon className="text-yellow" size={20} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
