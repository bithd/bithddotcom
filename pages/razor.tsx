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
  FeatureContent,
  TechnicalContent,
  TechnicalSubtitle,
} from "../components/common/common"
import { Features, Params } from "../model/model"
import { Feature } from "../components/common/feature"

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

const Banner1ImgContent = styled(BackImgContent)`
  height: auto;
  text-align: center;
  overflow: hidden;
`

const Banner1Img = styled.img`
  margin-bottom: 50px;
  height: 420px;
`

const Banner1TextContent = styled(BannerTextContent)`
  margin: 80px auto 50px;
`

const Banner1Title = styled.p`
  font-family: "PingFangSC-Semibold";
  font-size: 44px;
  color: ${({ theme }) => theme.white_text};
  font-weight: 600;
`

const Banner1Subtitle = styled.p`
  margin: 30px 0 0;
  line-height: 1.6;
  font-size: 22px;
  color: ${({ theme }) => theme.white_text};
`

const Banner2Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 280px;
`

const Banner3Img = styled.img`
  height: 480px;
`

const Banner4Img = styled.img`
  height: 420px;
`

const TechnicalImgContent = styled(BannerImgContent)`
  align-items: center;
  justify-content: flex-start;
`

const Banner2ImgContent = styled(BannerImgContent)`
  align-items: flex-end;
  justify-content: center;
`

const Razor: NextPage = () => {
  const { t, i18n } = useTranslation()

  const features: Features[] = [
    {
      title: t("razor_pro.feature1_title"),
      subtitle: t("razor_pro.feature1_subtitle"),
      img: "/images/icon_razor_pro_1.png",
    },
    {
      title: t("razor_pro.feature2_title"),
      subtitle: t("razor_pro.feature2_subtitle"),
      img: "/images/icon_razor_pro_2.png",
    },

    {
      title: t("razor_pro.feature3_title"),
      subtitle: t("razor_pro.feature3_subtitle"),
      img: "/images/icon_razor_pro_3.png",
    },
    {
      title: t("razor_pro.feature4_title"),
      subtitle: t("razor_pro.feature4_subtitle"),
      img: "/images/icon_razor_pro_4.png",
    },
    {
      title: t("razor_pro.feature5_title"),
      subtitle: t("razor_pro.feature5_subtitle"),
      img: "/images/icon_razor_pro_5.png",
    },
    {
      title: t("razor_pro.feature6_title"),
      subtitle: t("razor_pro.feature6_subtitle"),
      img: "/images/icon_razor_pro_6.png",
    },
  ]

  const getColon = () => {
    return isCN(i18n.language) ? "：" : ":"
  }

  const params: Params[] = [
    {
      title: t("razor_pro.params1_title"),
      content: t("razor_pro.params1_content"),
    },
    {
      title: t("razor_pro.params2_title"),
      content: t("razor_pro.params2_content"),
    },
    {
      title: t("razor_pro.params3_title"),
      content: t("razor_pro.params3_content"),
    },
    {
      title: t("razor_pro.params4_title"),
      content: t("razor_pro.params4_content"),
    },
    {
      title: t("razor_pro.params5_title"),
      content: t("razor_pro.params5_content"),
    },
    {
      title: t("razor_pro.params6_title"),
      content: t("razor_pro.params6_content"),
    },
    {
      title: t("razor_pro.params7_title"),
      content: t("razor_pro.params7_content"),
    },
  ]

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
        <PCHeader active="razor" />
        <MobiveHeader />
        <Container>
          <Buy name="razor" title="BITHD Razor" />
          <Banner1ImgContent url="/images/ad_back.jpg">
            <Banner1TextContent>
              <Banner1Title>{t("razor.banner_1_title")}</Banner1Title>
              <Banner1Subtitle
                dangerouslySetInnerHTML={{
                  __html: t("razor.banner_1_subtitle"),
                }}
              />
            </Banner1TextContent>
            <Banner1Img src="/images/razor_banner1.png" alt="banner1" />
          </Banner1ImgContent>

          <BackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <Banner2ImgContent>
                <Banner3Img
                  src="/images/razor_banner2.png"
                  alt="razor banner2"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("razor.banner_2_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("razor.banner_2_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/razor_banner3_back.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("razor_pro.banner_4_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("razor_pro.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <Banner4Img
                  src="/images/razor_pro_banner4.png"
                  alt="razor pro banner4"
                />
              </BannerImgContent>
            </BannerContent>
          </BackImgContent>

          <FeatureContent>
            <Feature features={features} />
          </FeatureContent>

          <TechnicalContent>
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("razor_pro.params_title")}
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
              <TechnicalImgContent>
                <Banner4Img
                  src="/images/razor_pro_banner5.png"
                  alt="razor pro banner5"
                />
              </TechnicalImgContent>
            </BannerContent>
          </TechnicalContent>
        </Container>
        <Footer router="razor_pro" />
      </ClientOnly>
    </>
  )
}

export default Razor
