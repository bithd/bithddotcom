import styled from "styled-components"
import { ProductsProps } from "../../model/model"
import { Content } from "./common"
import { useTranslation } from "react-i18next"

const Container = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`

const Item = styled.div`
  margin-bottom: 40px;
  padding: 25px 30px;
  width: calc((100% - 40px) / 2);
  text-align: center;
  background-color: ${({ theme }) => theme.back_fa};
  overflow: hidden;
`

const Title = styled.p`
  margin-bottom: 25px;
  font-size: 28px;
  color: ${({ theme }) => theme.black_333};
`

const Subtitle = styled.p`
  margin-bottom: 20px;
  height: 72px;
  line-height: 1.5em;
  font-size: 16px;
  color: ${({ theme }) => theme.black_333};
`

const OperateContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
`

const OperateContent = styled.div`
  display: flex;
  align-items: center;
  width: calc((100% - 30px) / 2);
`

const MoreContent = styled(OperateContent)`
  justify-content: right;
  text-align: right;
`

const BuyContent = styled(OperateContent)`
  text-align: left;
`

const Button = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.blue_text};
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const BuyBtn = styled(Button)``

const MoreBtn = styled(Button)``

const Arrow = styled.img`
  display: inline-block;
  height: 18px;
`

const Icon = styled.img`
  height: 340px;
`

export function Products() {
  const { t, i18n } = useTranslation()

  const products: ProductsProps[] = [
    {
      title: t("header.razor_pro"),
      subtitle: t("razor_pro.des"),
      img: "/images/icon_razor_pro.png",
      link: "",
      buy: "razor_pro",
    },
    {
      title: t("header.bithd_2"),
      subtitle: t("bithd_2.des"),
      img: "/images/icon_watch2.png",
      link: "",
      buy: "bithd2",
    },
    {
      title: t("header.frozen_2"),
      subtitle: t("frozen_304.des"),
      img: "/images/icon_forzen_304.png",
      link: "",
      buy: "frozen_2",
    },
    {
      title: t("header.frozen"),
      subtitle: t("frozen.des"),
      img: "/images/icon_forzen.png",
      link: "",
      buy: "forzen",
    },
  ]

  return (
    <>
      <Container>
        {products.map((item, index) => {
          return (
            <Item key={index}>
              <Title>{item.title}</Title>
              <Subtitle
                dangerouslySetInnerHTML={{ __html: item.subtitle }}
              ></Subtitle>
              <OperateContainer>
                <MoreContent>
                  <MoreBtn>{t("common.more")}</MoreBtn>
                  <Arrow src="/images/arrow_right.svg" alt="arrow" />
                </MoreContent>
                <BuyContent>
                  <BuyBtn>{t("common.buy")}</BuyBtn>
                  <Arrow src="/images/arrow_right.svg" alt="arrow" />
                </BuyContent>
              </OperateContainer>
              <Icon src={item.img} alt="icon" />
            </Item>
          )
        })}
      </Container>
    </>
  )
}
