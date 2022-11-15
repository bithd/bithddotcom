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
import { defaultTheme } from "../styles/theming"
import {
  BackImgContent,
  Content,
  BannerImgContent,
  BannerTextContent,
  Title,
  Subtitle,
  TechnicalContent,
  TechnicalSubtitle,
} from "../components/common/common"
import { Params } from "../model/model"
import { Dialog } from "../components/common/dialog"
import { useState } from "react"

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

const Banner1ImgContent = styled(BannerImgContent)`
  text-align: right;
`

const Banner1TextContent = styled(BannerTextContent)`
  margin-left: 66px;
`

const Banner1Title = styled.p<{ mark: string }>`
  position: relative;
  font-family: "PingFangSC-Semibold";
  font-size: 38px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;

  &::after {
    font-family: "PingFangSC-Medium";
    content: ${(props) => `"${props.mark ? props.mark : ""}"`};
    position: absolute;
    margin-left: 12px;
    padding: 2px 12px;
    font-size: 22px;
    border: ${({ theme }) => `2.5px solid ${theme.border_f5}`};
    border-radius: 11px;
    font-weight: 500;
  }
`

const Banner1Subtitle = styled.p`
  font-family: "PingFangSC-Semibold";
  margin: 30px 0 0;
  font-size: 50px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;
`

const PriceContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`

const PriceText = styled.p`
  line-height: 50px;
  font-size: 28px;
  color: ${({ theme }) => theme.black_text};
`

const BuyContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const BuyBtn = styled.button`
  font-size: 28px;
  color: ${({ theme }) => theme.blue_text};
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const BuyArrow = styled.img`
  height: 26px;
`

const Banner4Img = styled.img`
  height: 420px;
`

const TechnicalImgContent = styled(BannerImgContent)`
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Warn = styled.p`
  margin: 20px auto 0;
  font-size: 10px;
  color: ${({ theme }) => theme.text_ac};
`

const Armor2: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const params: Params[] = [
    {
      title: t("frozen_304.params1_title"),
      content: t("frozen_304.params1_content"),
    },
    {
      title: t("frozen_304.params2_title"),
      content: t("frozen_304.params2_content"),
    },
    {
      title: t("frozen_304.params3_title"),
      content: t("frozen_304.params3_content"),
    },
    {
      title: t("frozen_304.params4_title"),
      content: t("frozen_304.params4_content"),
    },
    {
      title: t("frozen_304.params5_title"),
      content: t("frozen_304.params5_content"),
    },
  ]

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

  const buyClicked = () => {
    setShowDialog(true)
  }

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
        <PCHeader active="frozen_304" />
        <MobiveHeader />
        <Container>
          <Dialog
            type="armor2"
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />
          <Buy func={buyClicked} title="Frozen Armor 304" />
          <BackImgContent url="/images/armor2_banner1_back.jpg">
            <BannerContent>
              <Banner1ImgContent></Banner1ImgContent>
              <Banner1TextContent>
                <Banner1Title mark={t("frozen_304.banner_1_mark")}>
                  {t("frozen_304.banner_1_title")}
                </Banner1Title>
                <Banner1Subtitle>
                  {t("frozen_304.banner_1_subtitle")}
                </Banner1Subtitle>
                <PriceContent>
                  <PriceText>{t("common.price", { price: "¥699" })}</PriceText>
                  <BuyContent onClick={buyClicked}>
                    <BuyBtn>{t("common.buy")}</BuyBtn>
                    <BuyArrow src="/images/arrow_right.svg" alt="arrow" />
                  </BuyContent>
                </PriceContent>
              </Banner1TextContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/armor2_banner2_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("frozen_304.banner_2_title")}
                </Title>
                <Subtitle color={defaultTheme.white_text}>
                  {t("frozen_304.banner_2_subtitle")}
                </Subtitle>
              </BannerTextContent>
              <Banner1ImgContent></Banner1ImgContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/armor2_banner3_back.jpg">
            <BannerContent>
              <BannerImgContent></BannerImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen_304.banner_3_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen_304.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/armor2_banner4_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("frozen_304.banner_4_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.white_text}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen_304.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
              <Banner1ImgContent></Banner1ImgContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/armor2_banner5_back.jpg">
            <BannerContent>
              <BannerImgContent></BannerImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen_304.banner_5_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen_304.banner_5_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackImgContent>

          <TechnicalContent>
            <BannerContent>
              <TechnicalImgContent>
                <div>
                  <Banner4Img
                    src="/images/armor2_banner6.jpg"
                    alt="armor 304 banner6"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("common.params_title")}
                </Title>
                {params.map((item, index) => {
                  return (
                    <TechnicalSubtitle key={index}>
                      {item.title}
                      {getColon()}
                      {item.content}
                    </TechnicalSubtitle>
                  )
                })}
              </BannerTextContent>
            </BannerContent>
          </TechnicalContent>
        </Container>
        <Footer router="frozen_304" />
      </ClientOnly>
    </>
  )
}

export default Armor2
