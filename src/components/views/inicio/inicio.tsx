import { useTranslation } from 'react-i18next';

const Inicio = () => {
  const { t } = useTranslation();
  return (
    <h2>{t('pagina')}</h2>
  );
}        
export default Inicio;