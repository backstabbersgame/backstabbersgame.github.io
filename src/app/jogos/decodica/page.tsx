import DecodicaLayout from '../../../app/[locale]/jogos/decodica/layout';
import Decodica from '../../[locale]/jogos/decodica/page';

export default function OrdemPage() {
  return (
    <DecodicaLayout params={Promise.resolve({ locale: 'pt-BR' })}>
      <Decodica params={{ locale: 'pt-BR' }} />
    </DecodicaLayout>
  );
}
