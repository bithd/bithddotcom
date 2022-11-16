import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { Content } from "../components/common/common"
import { useTranslation } from "react-i18next"
import { Products } from "../components/common/products"
import { Dialog } from "../components/common/dialog"
import { useState } from "react"
import Link from "next/link"

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

  @media (max-width: 768px) {
    font-size: 26px;
  }
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

  @media (max-width: 768px) {
    margin-right: 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const MoreContent = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  align-items: center;
  justify-content: left;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`

const MoreText = styled.p`
  display: inline-block;
  margin: 0;
  padding: 8px 4px 8px 16px;
  line-height: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.blue_text};
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 4px 8px 0px;
    font-size: 16px;
  }
`

const MoreArrow = styled.img`
  display: inline-block;
  height: 18px;
`

const AdImg = styled.img`
  margin: 50px 0;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Home: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [dialogType, setDialogType] = useState<string>("")

  const buyClicked = (type: string) => {
    setDialogType(type)
    setShowDialog(true)
  }

  return (
    <>
      <NextSeo
        title="比特派 护盾｜刀锋｜刀锋 Pro｜冰甲｜冰甲304"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "比特派,比特派护盾官网,bithd,bithd.com,比特派,护盾,刀锋,刀锋 Pro,冰甲,冰甲304",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="home" />
        <MobiveHeader />
        <HomeContent>
          <Dialog
            type={dialogType}
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />
          <AdContainer>
            <Content>
              <AdTextContainer>
                <AdTitle>{t("home.ad_title")}</AdTitle>
                <AdTitle>{t("home.ad_subtitle")}</AdTitle>
              </AdTextContainer>
              <BuyContainer>
                <BuyContent>
                  <BuyBtn
                    onClick={() => {
                      buyClicked("razor2")
                    }}
                  >
                    {t("common.buy")}
                  </BuyBtn>
                </BuyContent>
                <Link href="/razor2">
                  <MoreContent>
                    <MoreText>{t("common.more")}</MoreText>
                    <MoreArrow src="/images/arrow_right.svg" alt="arrow" />
                  </MoreContent>
                </Link>
              </BuyContainer>
              <AdImg src="/images/ad.png" alt="razor img" />
            </Content>
          </AdContainer>
          <Products func={buyClicked} />
        </HomeContent>
        <Footer router="home" />
      </ClientOnly>
    </>
  )
}

export default Home
