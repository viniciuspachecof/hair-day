function App() {
  return (
    <>
      <div className="flex gap">
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
                    <div className="flex grid-cols-4 gap-2">
                      <span>09:00</span>
                      <span>10:00</span>
                      <span>11:00</span>
                      <span>12:00</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-300 text-sm">Tarde</span>
                    <div className="flex grid-cols-4 gap-2">
                      <span>13:00</span>
                      <span>14:00</span>
                      <span>15:00</span>
                      <span>16:00</span>
                      <span>17:00</span>
                      <span>18:00</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-300 text-sm">Noite</span>
                    <div className="flex grid-cols-4 gap-2">
                      <span>19:00</span>
                      <span>20:00</span>
                      <span>21:00</span>
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

        <div className="p-20">conteudo</div>
      </div>
    </>
  );
}

export default App;
