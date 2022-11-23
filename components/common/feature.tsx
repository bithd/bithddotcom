import styled from "styled-components"
import { FeatureProps } from "../../model/model"
import { Content } from "./common"

const Container = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`

const FeatureContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 50%;

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin: 0 17px;
    width: 100%;
    min-height: 97px;
    border-bottom: ${({ theme }) => `1px solid ${theme.nav_border}`};

    :last-child {
      border-bottom: none;
    }
  }
`

const FeatureImg = styled.img`
  margin-right: 12px;
  width: 44px;

  @media (max-width: 768px) {
    width: 34px;
  }
`

const TextContent = styled.div`
  flex: 1;
`

const Title = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Subtitle = styled.p`
  margin: 10px 0 0 0;
  line-height: 1.6;
  font-size: 14px;
  color: ${({ theme }) => theme.black_666};

  @media (max-width: 768px) {
    margin: 8px 0 0 0;
    font-size: 12px;
  }
`

export function Feature({ features }: FeatureProps) {
  return (
    <Container>
      {features.map((item, index) => {
        return (
          <FeatureContent key={index}>
            <FeatureImg src={item.img} alt={`icon ${index}`} />
            <TextContent>
              <Title dangerouslySetInnerHTML={{ __html: item.title }} />
              <Subtitle dangerouslySetInnerHTML={{ __html: item.subtitle }} />
            </TextContent>
          </FeatureContent>
        )
      })}
    </Container>
  )
}
