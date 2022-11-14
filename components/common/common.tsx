import styled from "styled-components"

export const Content = styled.div`
  margin: 0 auto;
  width: 1100px;
  overflow: hidden;
`

export const BackImgContent = styled.div<{ url: string }>`
  position: relative;
  width: 100%;
  height: 560px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const BackContent = styled.div<{ backColor: string }>`
  position: relative;
  width: 100%;
  height: 560px;
  background-color: ${({ backColor }) => `url(${backColor})`};
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
`

export const TechnicalSubtitle = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.black_text};
`

export const BannerImgContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  flex: 1;
  height: 100%;
`

export const BannerTextContent = styled.div`
  flex: 1;
  margin-bottom: 64px;
`

export const Title = styled.p<{ color: string }>`
  margin-bottom: 40px;
  font-size: 38px;
  color: ${({ color }) => color};
  font-weight: 600;
`

export const Subtitle = styled.p<{ color: string }>`
  line-height: 1.6;
  font-size: 22px;
  color: ${({ color }) => color};
`
