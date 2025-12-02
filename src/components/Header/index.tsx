import { HoraAgendamento } from '../HoraAgendamento';

export function Header() {
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
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Horários</p>
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-gray-300 text-sm">Manhã</span>
                <div className="grid grid-cols-4 gap-2">
                  <HoraAgendamento hora="09:00" status={true} />
                  <HoraAgendamento hora="10:00" status={true} />
                  <HoraAgendamento hora="11:00" status={false} />
                  <HoraAgendamento hora="12:00" status={true} />
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Tarde</span>
                <div className="grid grid-cols-4 gap-2">
                  <HoraAgendamento hora="13:00" status={true} />
                  <HoraAgendamento hora="14:00" status={true} />
                  <HoraAgendamento hora="15:00" status={true} />
                  <HoraAgendamento hora="16:00" status={false} />
                  <HoraAgendamento hora="17:00" status={true} />
                  <HoraAgendamento hora="18:00" status={true} />
                </div>
              </div>

              <div>
                <span className="text-gray-300 text-sm">Noite</span>
                <div className="flex grid-cols-4 gap-2">
                  <HoraAgendamento hora="19:00" status={true} />
                  <HoraAgendamento hora="20:00" status={false} />
                  <HoraAgendamento hora="21:00" status={true} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-title-md text-gray-200 font-bold mb-2">Cliente</p>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-yellow text-gray-900 rounded-lg p-[18px] font-bold text-title-sm cursor-pointer border-2 border-transparent hover:border-yellow-light">
          AGENDAR
        </button>
      </div>
    </div>
  );
}
