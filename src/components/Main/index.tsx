import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TS, ReactJS, NextJS e Styled Components'
}) => (
  asdas
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo rosa, com React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um dev olhando para tela com código"
    />
  </S.Wrapper>
)

export default Main
