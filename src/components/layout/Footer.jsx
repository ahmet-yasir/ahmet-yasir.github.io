import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.copy')}</p>
      </div>
    </footer>
  );
}
