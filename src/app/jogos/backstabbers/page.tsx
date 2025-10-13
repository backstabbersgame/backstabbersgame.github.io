import BackstabbersLayout from '../../../app/[locale]/jogos/backstabbers/layout';
import Backstabbers from '../../[locale]/jogos/backstabbers/page';

export default function BackstabbersPage() {
  return (
    <BackstabbersLayout params={Promise.resolve({ locale: 'pt-BR' })}>
      <Backstabbers params={{ locale: 'pt-BR' }} />;
    </BackstabbersLayout>
  );
}
