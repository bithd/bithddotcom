import styled from "styled-components"

export const Content = styled.div`
  margin: 0 auto;
  width: 1100px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FlexContent = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const FlexContentReverse = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
  }
`

export const BackImgContent = styled.div<{ url: string }>`
  position: relative;
  width: 100%;
  height: 560px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 60px 0;
    text-align: center;
    background-size: 100% auto;
  }
`

export const BackContent = styled.div<{ backColor: string }>`
  position: relative;
  width: 100%;
  height: 560px;
  background-color: ${({ backColor }) => backColor};

  @media (max-width: 768px) {
    height: auto;
    padding: 60px 0;
    text-align: center;
  }
`

export const FeatureContent = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.back_f6};
`

export const TechnicalContent = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  background-color: ${({ theme }) => theme.white_back};

  @media (max-width: 768px) {
    height: auto;
    padding: 60px 0;
  }
`

export const TechnicalSubtitle = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.black_text};

  @media (max-width: 768px) {
    display: none;
  }
`

export const BannerImgContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  flex: 1;
  height: 100%;

  @media (max-width: 768px) {
    flex-basis: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const BlankImgContent = styled(BannerImgContent)`
  text-align: right;

  @media (max-width: 768px) {
    display: block;
    display: none;
  }
`

export const BannerTextContent = styled.div`
  flex: 1;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

export const Title = styled.p<{ color: string }>`
  margin-bottom: 40px;
  font-size: 38px;
  color: ${({ color }) => color};
  font-weight: 600;

  @media (max-width: 768px) {
    margin-bottom: 22px;
    font-size: 32px;
    text-align: center;
  }
`

export const Subtitle = styled.p<{ color: string }>`
  line-height: 1.6;
  font-size: 22px;
  color: ${({ color }) => color};

  @media (max-width: 768px) {
    margin: 0 54px;
    font-size: 13px;
  }
`
