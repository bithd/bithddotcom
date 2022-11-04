import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { FeatureProps } from "../../model/model"
import { Content } from "./common"

const Container = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 0;
`

const FeatureContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 50%;
`

const FeatureImg = styled.img`
  margin-right: 12px;
  width: 44px;
`

const TextContent = styled.div`
  flex: 1;
`

const Title = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 500;
`

const Subtitle = styled.p`
  margin: 10px 0 0 0;
  font-size: 12px;
  color: ${({ theme }) => theme.black_666};
`

export function Feature({ features }: FeatureProps) {
  return (
    <Container>
      {features.map((item, index) => {
        return (
          <FeatureContent key={index}>
            <FeatureImg src={item.img} alt={`icon ${index}`} />
            <TextContent>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
            </TextContent>
          </FeatureContent>
        )
      })}
    </Container>
  )
}
