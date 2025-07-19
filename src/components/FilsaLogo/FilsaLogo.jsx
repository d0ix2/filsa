import * as S from './FilsaLogo.style';
import theme from '../../styles/theme';

const FilsaLogo = () => {
  return (
    <S.MainTitle to="/" key={theme.name}>
      filsa
    </S.MainTitle>
  );
};

export default FilsaLogo;
