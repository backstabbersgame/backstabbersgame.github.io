import GalhosLayout from '../../../app/[locale]/jogos/galhos/layout';
import Galhos from '../../[locale]/jogos/galhos/page';

export default function DragPage() {
  return (
    <GalhosLayout params={Promise.resolve({ locale: 'pt-BR' })}>
      <Galhos params={{ locale: 'pt-BR' }} />
    </GalhosLayout>
  );
}
