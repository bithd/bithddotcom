import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { useTranslation } from "react-i18next"
import { isCN } from "../utils/utils"
import { Buy } from "../components/common/buy"
import { BackImgContent, Content } from "../components/common/container"

const Container = styled.div`
  margin-top: 60px;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
`

const BannerContent = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;
`

const BannerImgContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  flex: 1;
  height: 100%;
  text-align: right;
`

const BannerImg = styled.img`
  width: 320px;
`

const BannerTextContent = styled.div`
  margin-left: 66px;
  flex: 1;
`

const Title = styled.p`
  font-family: "PingFangSC-Semibold";
  margin: 0;
  font-size: 40px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;
`

const Subtitle = styled.p`
  font-family: "PingFangSC-Semibold";
  margin: 30px 0 0;
  font-size: 50px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;
`

const PriceContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
`

const PriceText = styled.p`
  line-height: 50px;
  font-size: 36px;
  color: ${({ theme }) => theme.black_text};
`

const BuyContent = styled.div``

const BuyBtn = styled.button``

const BuyArrow = styled.img``

const USDT: NextPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <NextSeo
        title="USDT 矿工费代付功能"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "USDT 矿工费代付功能",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="razor_pro" />
        <MobiveHeader />
        <Container>
          <Buy name="razor_pro" title="BITHD Razor Pro" />
          <BackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <BannerImgContent>
                <BannerImg src="/images/razor_pro_banner1.png" alt="banner1" />
              </BannerImgContent>
              <BannerTextContent>
                <Title>{t("header.razor_pro")}</Title>
                <Subtitle>{t("razor_pro.banner_1_title")}</Subtitle>
                <PriceContent>
                  <PriceText>{t("common.price", { price: "¥699" })}</PriceText>
                  <BuyContent>
                    <BuyBtn>{t("common.buy")}</BuyBtn>
                    <BuyArrow src="/images/arrow_right.svg" alt="arrow" />
                  </BuyContent>
                </PriceContent>
              </BannerTextContent>
            </BannerContent>
          </BackImgContent>
        </Container>
        <Footer router="razor_pro" />
      </ClientOnly>
    </>
  )
}

export default USDT
