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
  margin-top: 44px;
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
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const BuyContent = styled.div`
  margin-right: 40px;
  flex: 1;
  text-align: right;

  @media (max-width: 768px) {
    margin-right: 20px;
  }
`

const MobiveBuyContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MobiveBuyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Tips = styled.div`
  margin: 50px 0;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ContactButton = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 120px;
  height: 48px;
  background-color: #1f73b7;
  padding: 0.92857rem 1.57143rem;
  border-radius: 999rem;
  letter-spacing: 0.6;
  font-size: 1.07143rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
`

const ContactDiv = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 320px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`

const ContactHeader = styled.div`
  height: 44px;
  background: rgb(31, 115, 183) !important;
  color: rgb(255, 255, 255) !important;
  border-top: 8px;
  text-align: center;
  line-height: 44px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

const ContactBody = styled.div`
  height: 200px;
  background-color: white;
  overflow: hidden;
`

const ContactTitle = styled.p`
  margin: 8px 12px;
  font-size: 14px;
  color: black;
`

const ContactTextField = styled.input`
  margin: 8px 12px;
  font-size: 14px;
  color: black;
  border: none;
  border: 1px solid #000;
  border-radius: 5px;
  height: 44px;
  padding: 5px;
  width: 296px;
`

const ContactBottom = styled.div`
  height: 70px;
  border-top: 0.0785714rem solid rgb(233, 235, 237);
  box-shadow: rgb(0 0 0 / 8%) 0px -0.0714286rem 0.857143rem;

  background-color: white;
`

const ContactSend = styled.div`
  margin-top: 16px;
  width: 60px;
  height: 38px;
  float: right;
  margin-right: 12px;
  background-color: rgb(31, 115, 183) !important;
  color: rgb(255, 255, 255) !important;
  border-color: rgb(31, 115, 183) !important;
  line-height: 38px;
  text-align: center;
  border-radius: 8px;
`

const Home: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [showCDialog, setShowCDialog] = useState<boolean>(false)
  const [dialogType, setDialogType] = useState<string>("")

  const buyClicked = (type: string) => {
    setDialogType(type)
    setShowDialog(true)
  }

  const showContactDialog = () => {
    setShowCDialog(true)
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
          {/* <AdContainer>
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
              <MobiveBuyContainer>
                <MobiveBuyContent>
                  <BuyBtn
                    onClick={() => {
                      buyClicked("razor2")
                    }}
                  >
                    {t("common.buy")}
                  </BuyBtn>
                  <Link href="/razor2">
                    <MoreContent>
                      <MoreText>{t("common.more")}</MoreText>
                      <MoreArrow src="/images/arrow_right.svg" alt="arrow" />
                    </MoreContent>
                  </Link>
                </MobiveBuyContent>
              </MobiveBuyContainer>
              <AdImg src="/images/ad.png" alt="razor img" />
            </Content>
          </AdContainer> */}
          <Products func={buyClicked} />
          <Tips>护盾和刀锋现已停售，敬请期待下一代产品</Tips>

          <ContactButton
            isShow={!showCDialog}
            onClick={() => {
              showContactDialog()
            }}
          >
            帮助
          </ContactButton>

          <ContactDiv isShow={showCDialog}>
            <ContactHeader>给我们留言</ContactHeader>
            <ContactBody>
              <ContactTitle>电邮地址</ContactTitle>
              <ContactTextField />

              <ContactTitle>有什么我们可以帮忙的?</ContactTitle>
              <ContactTextField />
            </ContactBody>
            <ContactBottom>
              <ContactSend
                onClick={() => {
                  setShowCDialog(false)
                }}
              >
                发送
              </ContactSend>
            </ContactBottom>
          </ContactDiv>
        </HomeContent>
        {/* <Footer router="home" /> */}
      </ClientOnly>
    </>
  )
}

export default Home
