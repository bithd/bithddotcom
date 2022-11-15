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

const Banner1Img = styled.img`
  width: 320px;
`

const Banner1TextContent = styled(BannerTextContent)`
  margin-left: 66px;
`

const Banner1Title = styled.p`
  font-family: "PingFangSC-Semibold";
  font-size: 28px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;
`

const Banner1Subtitle = styled.p`
  font-family: "PingFangSC-Semibold";
  margin: 30px 0 0;
  font-size: 38px;
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
  font-size: 22px;
  color: ${({ theme }) => theme.black_text};
`

const BuyContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const BuyBtn = styled.button`
  font-size: 22px;
  color: ${({ theme }) => theme.blue_text};
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const BuyArrow = styled.img`
  height: 20px;
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
  text-align: center;
`

const Warn = styled.p`
  margin: 20px auto 0;
  font-size: 10px;
  color: ${({ theme }) => theme.text_ac};
`

const Razor2: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)

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
        <PCHeader active="razor2" />
        <MobiveHeader />
        <Container>
          <Dialog
            type="razor2"
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />
          <Buy func={buyClicked} title="BITHD Razor Pro" />
          <BackImgContent url="/images/razor_pro_back.jpg">
            <BannerContent>
              <Banner1ImgContent>
                <Banner1Img src="/images/razor_pro_banner1.png" alt="banner1" />
              </Banner1ImgContent>
              <Banner1TextContent>
                <Banner1Title>{t("header.razor_pro")}</Banner1Title>
                <Banner1Subtitle>
                  {t("razor_pro.banner_1_title")}
                </Banner1Subtitle>
                <PriceContent>
                  <PriceText>
                    {t("common.price", {
                      price: isCN(i18n.language) ? "¥699" : "$69.99",
                    })}
                  </PriceText>
                  <BuyContent onClick={buyClicked}>
                    <BuyBtn>{t("common.buy")}</BuyBtn>
                    <BuyArrow src="/images/arrow_right.svg" alt="arrow" />
                  </BuyContent>
                </PriceContent>
              </Banner1TextContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/razor_pro_back2.jpg">
            <BannerContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("razor_pro.banner_2_title")}
                </Title>
                <Subtitle color={defaultTheme.white_text}>
                  {t("razor_pro.banner_2_subtitle")}
                </Subtitle>
              </BannerTextContent>
            </BannerContent>
            <Banner2Img
              src="/images/razor_pro_banner2.png"
              alt="razor pro banner2"
            />
          </BackImgContent>

          <BackImgContent url="/images/razor_pro_back3.jpg">
            <BannerContent>
              <BannerImgContent>
                <Banner3Img
                  src="/images/razor_pro_banner3.png"
                  alt="razor pro banner3"
                />
              </BannerImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("razor_pro.banner_3_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("razor_pro.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackImgContent>

          <BackImgContent url="/images/razor_pro_back.jpg">
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
              <TechnicalImgContent>
                <div>
                  <Banner4Img
                    src="/images/razor_pro_banner5.png"
                    alt="razor pro banner5"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
            </BannerContent>
          </TechnicalContent>
        </Container>
        <Footer router="razor_pro" />
      </ClientOnly>
    </>
  )
}

export default Razor2
