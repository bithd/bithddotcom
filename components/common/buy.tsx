import styled from "styled-components"
import { Content } from "./common"
import { useTranslation } from "react-i18next"
import { BuyProps } from "../../model/model"

const Container = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.back_f6};
`

const ContentDiv = styled(Content)`
  display: flex;
  align-items: center;
`

const Title = styled.p`
  flex: 1;
  margin: 0;
  line-height: 60px;
  font-size: 24px;
  color: ${({ theme }) => theme.black_333};
`

const BuyBtn = styled.button`
  width: 90px;
  height: 34px;
  line-height: 34px;
  font-size: 16px;
  color: ${({ theme }) => theme.white_text};
  background-color: ${({ theme }) => theme.back_buy_btn};
  border: none;
  border-radius: 8px;
`

export function Buy({ title, func }: BuyProps) {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <ContentDiv>
          <Title>{title}</Title>
          <BuyBtn
            onClick={() => {
              func()
            }}
          >
            {t("common.buy")}
          </BuyBtn>
        </ContentDiv>
      </Container>
    </>
  )
}
