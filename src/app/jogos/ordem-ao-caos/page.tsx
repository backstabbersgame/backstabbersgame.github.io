import OrdemLayout from '../../../app/[locale]/jogos/ordem-ao-caos/layout';
import Ordem from '../../[locale]/jogos/ordem-ao-caos/page';

export default function OrdemPage() {
  return (
    <OrdemLayout params={Promise.resolve({ locale: 'pt-BR' })}>
      <Ordem params={{ locale: 'pt-BR' }} />
    </OrdemLayout>
  );
}
