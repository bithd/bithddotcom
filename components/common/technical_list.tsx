import styled from "styled-components"
import { ProductsProps } from "../../model/model"
import { TechnicalSubtitle } from "./common"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { deleteBr, isCN } from "../../utils/utils"
import { Params } from "../../_site/model/model"

const Container = styled.div``

const Content = styled.div`
  display: flex;
  margin: 0 20px 15px;
  height: 32px;

  @media (min-width: 768px) {
    display: none;
  }
`

const Title = styled.p`
  width: 80px;
  line-height: 32px;
  font-size: 15px;
  text-align: center;
  background-color: ${({ theme }) => theme.back_e9};
`

const Text = styled.p`
  flex: 1;
  padding-left: 20px;
  line-height: 32px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.back_f2};
`

export function Technical({ params }: { params: Params[] }) {
  const { t, i18n } = useTranslation()

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

  return (
    <>
      {params.map((item, index) => {
        return (
          <Container>
            <TechnicalSubtitle key={index}>
              {item.title}
              {getColon()}
              {item.content}
            </TechnicalSubtitle>
            <Content>
              <Title>{item.title}</Title>
              <Text>{item.content}</Text>
            </Content>
          </Container>
        )
      })}
    </>
  )
}
