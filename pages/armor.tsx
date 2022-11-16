import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { useTranslation } from "react-i18next"
import { getClientWidth, isCN, isPc } from "../utils/utils"
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
import { useEffect, useState } from "react"
import { Technical } from "../components/common/technical_list"

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

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const BannerContentReverse = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
  }
`

const Banner1ImgContent = styled(BannerImgContent)`
  text-align: right;

  @media (max-width: 768px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const Banner1Price = styled.p`
  margin: 30px 0 0;
  font-size: 22px;
  color: ${({ theme }) => theme.blue_text};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const Banner2Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 360px;

  @media (max-width: 768px) {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
  }
`

const Banner5Img = styled(Banner2Img)`
  left: 0;
`

const Banner1Img = styled.img`
  height: 480px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 320px;
    height: auto;
  }
`

const Banner4Img = styled.img`
  height: 420px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 320px;
    height: auto;
  }
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

const ArmorSubtitle = styled(Subtitle)`
  @media (max-width: 768px) {
    margin: 0 12px;
    font-size: 18px;
  }
`

const ZeroBottomBackImgContent = styled(BackImgContent)`
  @media (max-width: 768px) {
    padding: 60px 0 0;
    text-align: center;
  }
`

const Banner1BackImgContent = styled(ZeroBottomBackImgContent)`
  background-size: 100% 100%;
`

const MobileBackImgContent = styled(BackImgContent)<{ height: number }>`
  @media (max-width: 768px) {
    padding: 60px 0 0;
    height: ${({ height }) => `${height}px`};
    text-align: center;
    background-size: 100% auto;
    background-position: left bottom;
  }
`

const MobileBannerContent = styled(BannerContent)`
  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: center;
  }
`

const BlankContent = styled(BannerTextContent)`
  @media (max-width: 768px) {
    display: none;
    margin: 0;
  }
`

const Armor: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [isPcSize, setIsPcSize] = useState<boolean>(true)
  const [clientWidth, setClientWidth] = useState<number>(0)

  const params: Params[] = [
    {
      title: t("frozen.params1_title"),
      content: t("frozen.params1_content"),
    },
    {
      title: t("frozen.params2_title"),
      content: t("frozen.params2_content"),
    },
    {
      title: t("frozen.params3_title"),
      content: t("frozen.params3_content"),
    },
    {
      title: t("frozen.params4_title"),
      content: t("frozen.params4_content"),
    },
  ]

  const handleResize = () => {
    setIsPcSize(
      parseInt(document.documentElement.clientWidth.toFixed()) > 768
        ? true
        : false
    )
    setClientWidth(parseInt(document.documentElement.clientWidth.toFixed()))
  }

  const getHeight = () => {
    if (getClientWidth() != 0 && clientWidth != 0) {
      return clientWidth > 500 ? clientWidth + 200 : 700
    }
    return getClientWidth() > 500 ? getClientWidth() + 200 : 700
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, true)
    return () => window.removeEventListener("resize", handleResize, false)
  }, [])

  const buyClicked = () => {
    setShowDialog(true)
  }

  return (
    <>
      <NextSeo
        title="冰甲 给予资产更安全的守护"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "冰甲 给予资产更安全的守护",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="frozen" />
        <MobiveHeader />
        <Container>
          <Dialog
            type="armor"
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />

          <Buy func={buyClicked} title="Frozen Armor" />
          <Banner1BackImgContent url="/images/razor_banner3_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("frozen.banner_1_title")}
                </Title>
                <ArmorSubtitle color={defaultTheme.white_text}>
                  {t("frozen.banner_1_subtitle")}
                </ArmorSubtitle>
                <Banner1Price>{t("frozen.banner_1_price")}</Banner1Price>
              </BannerTextContent>

              <Banner1ImgContent>
                <Banner1Img
                  src="/images/armor_banner1.png"
                  alt="razor pro banner3"
                />
              </Banner1ImgContent>
            </BannerContent>
          </Banner1BackImgContent>

          <ZeroBottomBackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen.banner_2_title")}
                </Title>
                <ArmorSubtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_2_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
            <Banner2Img src="/images/armor_banner2.png" alt="frozen banner2" />
          </ZeroBottomBackImgContent>

          <MobileBackImgContent
            height={getHeight()}
            url={
              isPcSize && isPc()
                ? "/images/armor_banner3_back.jpg"
                : "/images/armor_m_banner3_back.jpg"
            }
          >
            <MobileBannerContent>
              <BlankContent></BlankContent>
              <BannerTextContent>
                <Title
                  color={defaultTheme.white_text}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_3_title"),
                  }}
                />
                <ArmorSubtitle
                  color={defaultTheme.white_text}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
            </MobileBannerContent>
          </MobileBackImgContent>

          <MobileBackImgContent
            height={getHeight()}
            url={
              isPcSize && isPc()
                ? "/images/armor_banner4_back.jpg"
                : "/images/armor_m_banner4_back.jpg"
            }
          >
            <MobileBannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen.banner_4_title")}
                </Title>
                <ArmorSubtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BlankContent></BlankContent>
            </MobileBannerContent>
          </MobileBackImgContent>

          <BackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <BannerImgContent></BannerImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("frozen.banner_5_title")}
                </Title>
                <ArmorSubtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("frozen.banner_5_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
            <Banner5Img src="/images/armor_banner5.png" alt="frozen banner2" />
          </BackImgContent>

          <TechnicalContent>
            <BannerContentReverse>
              <TechnicalImgContent>
                <div>
                  <Banner4Img
                    src="/images/armor_banner6.png"
                    alt="armor 304 banner6"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("common.params_title")}
                </Title>
                <Technical params={params} />
              </BannerTextContent>
            </BannerContentReverse>
          </TechnicalContent>
        </Container>
        <Footer router="frozen" />
      </ClientOnly>
    </>
  )
}

export default Armor
