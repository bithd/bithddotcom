import type { NextPage } from "next"
import styled from "styled-components"
import { NextSeo } from "next-seo"
import { PCHeader } from "../components/header/pc_header"
import { Footer } from "../components/footer/footer"
import ClientOnly from "../utils/clientOnly"
import { MobiveHeader } from "../components/header/mobile_header"
import { useTranslation } from "react-i18next"
import { deleteBr, isCN } from "../utils/utils"
import { Buy } from "../components/common/buy"
import { defaultTheme } from "../styles/theming"
import {
  BackImgContent,
  Content,
  BannerImgContent,
  BannerTextContent,
  Title,
  Subtitle,
  FeatureContent,
  TechnicalContent,
  TechnicalSubtitle,
} from "../components/common/common"
import { Features, Params } from "../model/model"
import { Feature } from "../components/common/feature"
import { Dialog } from "../components/common/dialog"
import { useState } from "react"
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

const Banner1ImgContent = styled(BackImgContent)`
  height: auto;
  text-align: center;
  overflow: hidden;
`

const BannerContentReverse = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
    text-align: center;
  }
`

const ZeroBottomBackImgContent = styled(BackImgContent)`
  @media (max-width: 768px) {
    padding: 60px 0 0;
    text-align: center;
  }
`

const Banner1Img = styled.img`
  margin-bottom: 50px;
  height: 420px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    width: 80%;
    max-width: 320px;
    height: auto;
  }
`

const Banner1TextContent = styled(BannerTextContent)`
  margin: 80px auto 50px;

  @media (max-width: 768px) {
    margin: 0 12px 50px;
  }
`

const BlankContent = styled(BannerTextContent)`
  @media (max-width: 768px) {
    margin: 0;
  }
`

const TechnicalTextContent = styled(BannerTextContent)`
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`

const Banner1Title = styled.p`
  font-family: "PingFangSC-Semibold";
  font-size: 44px;
  color: ${({ theme }) => theme.white_text};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Banner1Subtitle = styled.p`
  margin: 30px 0 0;
  line-height: 1.6;
  font-size: 22px;
  color: ${({ theme }) => theme.white_text};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Banner2Img = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 380px;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
  }
`

const Banner3Img = styled.img`
  height: 480px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 200px;
    height: auto;
  }
`

const Banner4Img = styled.img`
  height: 480px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 320px;
    height: auto;
  }
`

const TechnicalImgContent = styled(BannerImgContent)`
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Warn = styled.p`
  margin: 20px auto 0;
  font-size: 10px;
  color: ${({ theme }) => theme.text_ac};
`

const Banner2ImgContent = styled(BannerImgContent)`
  align-items: flex-end;
  justify-content: center;
`

const Banner3ImgContent = styled(BannerImgContent)`
  align-items: center;
  justify-content: center;
`

const RazorTitle = styled(Title)`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const RazorSubtitle = styled(Subtitle)`
  @media (max-width: 768px) {
    margin: 0 12px;
    font-size: 16px;
  }
`

const Razor: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const features: Features[] = [
    {
      title: t("razor.feature1_title"),
      subtitle: t("razor.feature1_subtitle"),
      img: "/images/icon_razor_1.png",
    },
    {
      title: t("razor.feature2_title"),
      subtitle: t("razor.feature2_subtitle"),
      img: "/images/icon_razor_2.png",
    },

    {
      title: t("razor.feature3_title"),
      subtitle: t("razor.feature3_subtitle"),
      img: "/images/icon_razor_3.png",
    },
    {
      title: t("razor.feature4_title"),
      subtitle: t("razor.feature4_subtitle"),
      img: "/images/icon_razor_4.png",
    },
    {
      title: t("razor.feature5_title"),
      subtitle: t("razor.feature5_subtitle"),
      img: "/images/icon_razor_5.png",
    },
    {
      title: t("razor.feature6_title"),
      subtitle: t("razor.feature6_subtitle"),
      img: "/images/icon_razor_6.png",
    },
  ]

  const params: Params[] = [
    {
      title: t("razor.params1_title"),
      content: t("razor.params1_content"),
    },
    {
      title: t("razor.params2_title"),
      content: t("razor.params2_content"),
    },
    {
      title: t("razor.params3_title"),
      content: t("razor.params3_content"),
    },
    {
      title: t("razor.params4_title"),
      content: t("razor.params4_content"),
    },
    {
      title: t("razor.params5_title"),
      content: t("razor.params5_content"),
    },
    {
      title: t("razor.params6_title"),
      content: t("razor.params6_content"),
    },
    {
      title: t("razor.params7_title"),
      content: t("razor.params7_content"),
    },
    {
      title: t("razor.params8_title"),
      content: t("razor.params8_content"),
    },
  ]

  const buyClicked = () => {
    setShowDialog(true)
  }

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

  return (
    <>
      <NextSeo
        title="全新 刀锋 | 知您所需，想您所想"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "全新 刀锋 | 知您所需，想您所想",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="razor" />
        <MobiveHeader />
        <Container>
          <Dialog
            type="razor"
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />
          <Buy func={buyClicked} title="BITHD Razor" />
          <Banner1ImgContent url="/images/ad_back.jpg">
            <Banner1TextContent>
              <Banner1Title
                dangerouslySetInnerHTML={{
                  __html: t("razor.banner_1_title"),
                }}
              />
              <Banner1Subtitle
                dangerouslySetInnerHTML={{
                  __html: deleteBr(t("razor.banner_1_subtitle")),
                }}
              />
            </Banner1TextContent>
            <Banner1Img src="/images/razor_banner1.png" alt="banner1" />
          </Banner1ImgContent>

          <ZeroBottomBackImgContent url="/images/razor_pro_back.jpg">
            <BannerContentReverse>
              <Banner2ImgContent>
                <Banner3Img
                  src="/images/razor_banner2.png"
                  alt="razor banner2"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <RazorTitle color={defaultTheme.black_333}>
                  {t("razor.banner_2_title")}
                </RazorTitle>
                <RazorSubtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("razor.banner_2_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContentReverse>
          </ZeroBottomBackImgContent>

          <BackImgContent url="/images/razor_banner3_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <RazorTitle color={defaultTheme.white_text}>
                  {t("razor.banner_3_title")}
                </RazorTitle>
                <RazorSubtitle
                  color={defaultTheme.white_text}
                  dangerouslySetInnerHTML={{
                    __html: t("razor.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
              <Banner3ImgContent>
                <Banner4Img
                  src="/images/razor_banner3.png"
                  alt="razor banner3"
                />
              </Banner3ImgContent>
            </BannerContent>
          </BackImgContent>

          <ZeroBottomBackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <BlankContent></BlankContent>
              <BannerTextContent>
                <RazorTitle color={defaultTheme.black_333}>
                  {t("razor.banner_4_title")}
                </RazorTitle>
                <RazorSubtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("razor.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
            <Banner2Img src="/images/razor_banner4.png" alt="razor banner4" />
          </ZeroBottomBackImgContent>

          <FeatureContent>
            <Feature features={features} />
          </FeatureContent>

          <TechnicalContent>
            <BannerContent>
              <TechnicalTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("common.params_title")}
                </Title>
                <Technical params={params} />
              </TechnicalTextContent>
              <TechnicalImgContent>
                <div>
                  <Banner4Img
                    src="/images/razor_banner5.png"
                    alt="razor banner5"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
            </BannerContent>
          </TechnicalContent>
        </Container>
        <Footer router="razor" />
      </ClientOnly>
    </>
  )
}

export default Razor
