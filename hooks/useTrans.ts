import { useTranslation } from 'next-i18next';


const useTrans = () => {
    const { t } = useTranslation();
    return t;
};

export default useTrans;
