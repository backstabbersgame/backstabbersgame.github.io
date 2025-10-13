import RebeliaoLayout from '../../../app/[locale]/jogos/rebeliao-dos-gatos/layout';
import Rebeliao from '../../[locale]/jogos/rebeliao-dos-gatos/page';

export default function RebeliaoPage() {
  return (
    <RebeliaoLayout params={Promise.resolve({ locale: 'pt-BR' })}>
      <Rebeliao params={{ locale: 'pt-BR' }} />
    </RebeliaoLayout>
  );
}
