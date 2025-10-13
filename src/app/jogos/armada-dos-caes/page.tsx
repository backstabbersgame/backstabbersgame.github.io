import ArmadaLayout from '../../../app/[locale]/jogos/armada-dos-caes/layout';
import Armada from '../../[locale]/jogos/armada-dos-caes/page';

export default function ArmadaPage() {
  return (
    <ArmadaLayout params={Promise.resolve({ locale: 'pt-BR' })}>
      <Armada params={{ locale: 'pt-BR' }} />
    </ArmadaLayout>
  );
}
