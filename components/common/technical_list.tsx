import styled from "styled-components"
import { ProductsProps } from "../../model/model"
import { TechnicalSubtitle } from "./common"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { deleteBr, isCN } from "../../utils/utils"
import { Params } from "../../_site/model/model"

const Container = styled.div``

const Content = styled.div<{ multiLine: boolean }>`
  display: flex;
  margin: 0 20px 15px;
  height: ${({ multiLine }) => (multiLine ? "64px" : "32px")};
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 100%;
  background-color: ${({ theme }) => theme.back_e9};
`

const TextContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.back_f2};
`

const Title = styled.p`
  width: 100%;
  line-height: 1.6;
  font-size: 15px;
  text-align: center;
`

const Text = styled.p`
  width: 100%;
  padding-left: 20px;
  line-height: 1.6;
  font-size: 15px;
`

export function Technical({ params }: { params: Params[] }) {
  const { t, i18n } = useTranslation()

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

  const getLength = (str1: string, str2: string) => {
    return str1.length >= 13 || str2.length > 20 ? true : false
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
            <Content multiLine={getLength(item.title, item.content)}>
              <TitleContent>
                <Title>{item.title}</Title>
              </TitleContent>

              <TextContent>
                <Text>{item.content}</Text>
              </TextContent>
            </Content>
          </Container>
        )
      })}
    </>
  )
}
