import { Locale } from '../lib/i18n';

/**
 * Carrega conteúdo localizado de qualquer jogo.
 *
 * @param gameName - Nome da pasta do jogo (ex: 'armada', 'backstabbers')
 * @param locale - Código de idioma (ex: 'en', 'pt-BR')
 * @param file - Nome do arquivo dentro da pasta do jogo (ex: 'cards')
 * @returns Conteúdo JSON correspondente
 */
export async function getLocalizedContent<T = any>(
  gameName: string,
  locale: Locale,
  file?: string
): Promise<T> {
  try {
    const content = await import(
      `./${gameName}/${file ? file : gameName}.${locale}.json`
    );
    return content.default;
  } catch (error) {
    console.error(
      `Erro ao carregar conteúdo de ${gameName} para o locale ${locale}:`,
      error
    );
    throw new Error(`Conteúdo não encontrado para ${gameName} (${locale})`);
  }
}

export async function getFooterContent<T = any>(
  file: string,
  locale: Locale
): Promise<T> {
  try {
    const content = await import(`./${file}.${locale}.json`);
    return content.default;
  } catch (error) {
    console.error(
      `Erro ao carregar conteúdo de ${file} para o locale ${locale}:`,
      error
    );
    throw new Error(`Conteúdo não encontrado para ${file} (${locale})`);
  }
}

export async function getLevelsContent<T = any>(
  file: string,
  locale: Locale
): Promise<T> {
  try {
    const content = await import(`./backstabbers/${file}.${locale}.ts`);

    const levels = {
      lvl1: content.lvl1,
      lvl2: content.lvl2,
      lvl3: content.lvl3,
      lvl4: content.lvl4,
      lvl5: content.lvl5,
      lvladv: content.lvladv,
      lvlcons: content.lvlcons,
    };

    return levels as T;
  } catch (error) {
    console.error(
      `Erro ao carregar conteúdo de ${file} para o locale ${locale}:`,
      error
    );
    throw new Error(`Conteúdo não encontrado para ${file} (${locale})`);
  }
}
