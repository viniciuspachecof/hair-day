import { containerHora } from './style';

interface HoraAgendamentoProp {
  hora: string;
  status: boolean;
}

export function HoraAgendamento({ hora, status }: HoraAgendamentoProp) {
  return <span className={containerHora({ status: status })}>{hora}</span>;
}
