import { Locale } from '../../lib/i18n';
import Solara from './Solara';

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  return <Solara params={{ locale }} />;
}
