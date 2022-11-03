import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { Content } from "../components/common/container"
import { useTranslation } from "react-i18next"
import { Products } from "../components/common/products"
import { Partners } from "../components/common/partners"

const HomeContent = styled.div`
  margin-top: 60px;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
`

const AdContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
  background: url(../images/ad_back.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
`

const AdTextContainer = styled.div`
  margin: 50px 0 40px;
`

const AdTitle = styled.p`
  margin: 0;
  line-height: 1.6;
  font-size: 38px;
  color: ${({ theme }) => theme.white_text};
  text-align: center;
`

const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const BuyContent = styled.div`
  margin-right: 40px;
  flex: 1;
  text-align: right;
`

const BuyBtn = styled.button`
  padding: 8px 16px;
  line-height: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.white_text};
  border: none;
  border-radius: 26px;
  background: ${({ theme }) => theme.blue_back};
  cursor: pointer;
`

const MoreContent = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  align-items: center;
  justify-content: left;
`

const MoreText = styled.p`
  display: inline-block;
  margin: 0;
  padding: 8px 4px 8px 16px;
  line-height: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.blue_text};
  cursor: pointer;
`

const MoreArrow = styled.img`
  display: inline-block;
  height: 18px;
`

const AdImg = styled.img`
  margin: 50px 0;
  width: 500px;
`

const Home: NextPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <NextSeo
        title="Bitpie 全球领先多链钱包｜比特派｜Bitpie Wallet｜比特派钱包｜BTC钱包｜ETH钱包｜波场钱包｜以太坊钱包｜USDT钱包"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "比特派,比特派app,比特派官网,比特派下载,比特派钱包, 比特派钱包下载,bitpie,ETH钱包,BTC钱包,波场,以太坊,DeFi",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="home" />
        <MobiveHeader />
        <HomeContent>
          <AdContainer>
            <Content>
              <AdTextContainer>
                <AdTitle>{t("home.ad_title")}</AdTitle>
                <AdTitle>{t("home.ad_subtitle")}</AdTitle>
              </AdTextContainer>
              <BuyContainer>
                <BuyContent>
                  <BuyBtn>{t("common.buy")}</BuyBtn>
                </BuyContent>
                <MoreContent>
                  <MoreText>{t("common.more")}</MoreText>
                  <MoreArrow src="/images/arrow_right.svg" alt="arrow" />
                </MoreContent>
              </BuyContainer>
              <AdImg src="/images/ad.png" alt="razor img" />
            </Content>
          </AdContainer>
          <Products />
          <Partners />
        </HomeContent>
        <Footer router="home" />
      </ClientOnly>
    </>
  )
}

export default Home
