import DragLayout from '../../../app/[locale]/jogos/drag-slay/layout';
import DragSlay from '../../[locale]/jogos/drag-slay/page';

export default function DragPage() {
  return (
    <DragLayout params={Promise.resolve({ locale: 'pt-BR' })}>
      <DragSlay params={{ locale: 'pt-BR' }} />
    </DragLayout>
  );
}
