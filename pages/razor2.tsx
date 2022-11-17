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
  FlexContentReverse,
  FlexContent,
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

const Banner1ImgContent = styled(BannerImgContent)`
  text-align: right;

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 35px;
    text-align: center;
  }
`

const Banner2ImgContent = styled(BannerImgContent)`
  text-align: right;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`

const Banner1TextContent = styled(BannerTextContent)`
  margin-left: 66px;

  @media (max-width: 768px) {
    margin: 0 0 80px;
    text-align: center;
  }
`

const Banner2TextContent = styled(BannerTextContent)`
  margin-left: 66px;

  @media (max-width: 768px) {
    margin: 0 0 60px;
    text-align: center;
  }
`

const Banner1Title = styled.p`
  font-family: "PingFangSC-Semibold";
  font-size: 28px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;

  @media (max-width: 768px) {
    line-height: 42px;
    font-size: 32px;
  }
`

const Banner1Subtitle = styled.p`
  font-family: "PingFangSC-Semibold";
  margin: 30px 0 0;
  font-size: 38px;
  color: ${({ theme }) => theme.black_333};
  font-weight: 600;

  @media (max-width: 768px) {
    margin: 0;
    line-height: 42px;
    font-size: 32px;
  }
`

const PriceContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;

  @media (max-width: 768px) {
    display: none;
  }
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

const Banner1Img = styled.img`
  width: 320px;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 320px;
    height: auto;
  }
`

const Banner2Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 380px;
`

const Banner3Img = styled(Banner1Img)`
  width: auto;
  height: 480px;

  @media (max-width: 768px) {
    max-width: 260px;
    height: auto;
  }
`

const Banner4Img = styled(Banner1Img)`
  width: auto;
  height: 420px;

  @media (max-width: 768px) {
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

const PcBackImgContent = styled(BackImgContent)`
  @media (max-width: 768px) {
    display: none;
  }
`

const ZeroBottomBackImgContent = styled(BackImgContent)`
  @media (max-width: 768px) {
    padding: 60px 0 0;
    text-align: center;
  }
`

const MobileBackImgContent = styled(BackImgContent)`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
    background-size: 100% 100%;
  }
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
        title="刀锋 Pro | 极致简约，一体感设计"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "刀锋 Pro | 极致简约，一体感设计",
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
          <ZeroBottomBackImgContent url="/images/razor_pro_back.jpg">
            <FlexContentReverse>
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
            </FlexContentReverse>
          </ZeroBottomBackImgContent>

          <MobileBackImgContent url="/images/ad_back.jpg">
            <Banner2TextContent>
              <Title color={defaultTheme.white_text}>
                {t("razor_pro.banner_5_title")}
              </Title>
              <Subtitle
                color={defaultTheme.white_text}
                dangerouslySetInnerHTML={{
                  __html: t("razor_pro.banner_5_subtitle"),
                }}
              />
            </Banner2TextContent>
            <Banner2ImgContent>
              <Banner3Img src="/images/razor2_banner5.png" alt="banner5" />
            </Banner2ImgContent>
          </MobileBackImgContent>

          <PcBackImgContent url="/images/razor_pro_back2.jpg">
            <FlexContent>
              <BannerTextContent>
                <Title color={defaultTheme.white_text}>
                  {t("razor_pro.banner_2_title")}
                </Title>
                <Subtitle color={defaultTheme.white_text}>
                  {t("razor_pro.banner_2_subtitle")}
                </Subtitle>
              </BannerTextContent>
            </FlexContent>
            <Banner2Img
              src="/images/razor_pro_banner2.png"
              alt="razor pro banner2"
            />
          </PcBackImgContent>

          <PcBackImgContent url="/images/razor_pro_back3.jpg">
            <FlexContent>
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
            </FlexContent>
          </PcBackImgContent>

          <ZeroBottomBackImgContent url="/images/razor_pro_back.jpg">
            <FlexContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("razor_pro.banner_4_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: deleteBr(t("razor_pro.banner_4_subtitle")),
                  }}
                />
              </BannerTextContent>
              <Banner2ImgContent>
                <Banner4Img
                  src="/images/razor_pro_banner4.png"
                  alt="razor pro banner4"
                />
              </Banner2ImgContent>
            </FlexContent>
          </ZeroBottomBackImgContent>

          <FeatureContent>
            <Feature features={features} />
          </FeatureContent>

          <TechnicalContent>
            <FlexContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("common.params_title")}
                </Title>
                <Technical params={params} />
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
            </FlexContent>
          </TechnicalContent>
        </Container>
        <Footer router="razor_pro" />
      </ClientOnly>
    </>
  )
}

export default Razor2
