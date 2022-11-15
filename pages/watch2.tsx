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
  BackContent,
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

const Banner2ImgContent = styled(BannerImgContent)`
  justify-content: flex-start;
`

const BannerImg = styled.img`
  height: 100%;
`

const Banner1Img = styled.img`
  height: 480px;
`

const Banner2Img = styled.img`
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

const Watch2: NextPage = () => {
  const { t, i18n } = useTranslation()
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const params: Params[] = [
    {
      title: t("bithd_2.params1_title"),
      content: t("bithd_2.params1_content"),
    },
    {
      title: t("bithd_2.params2_title"),
      content: t("bithd_2.params2_content"),
    },
    {
      title: t("bithd_2.params3_title"),
      content: t("bithd_2.params3_content"),
    },
    {
      title: t("bithd_2.params4_title"),
      content: t("bithd_2.params4_content"),
    },
    {
      title: t("bithd_2.params5_title"),
      content: t("bithd_2.params5_content"),
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
        title="USDT 矿工费代付功能"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "USDT 矿工费代付功能",
          },
        ]}
      />
      <ClientOnly>
        <PCHeader active="watch2" />
        <MobiveHeader />
        <Container>
          <Dialog
            type="watch2"
            isShow={showDialog}
            func={() => {
              setShowDialog(false)
            }}
          />
          <Buy func={buyClicked} title={t("bithd_2.title")} />

          <BackContent backColor={defaultTheme.white_back}>
            <BannerContent>
              <BannerTextContent>
                <Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_1_title"),
                  }}
                />
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_1_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <BannerImg
                  src="/images/watch2_banner1.png"
                  alt="watch2 banner1"
                />
              </BannerImgContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <BannerContent>
              <Banner2ImgContent>
                <Banner1Img
                  src="/images/watch2_banner2.png"
                  alt="watch2 banner2"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_2_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_2_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.white_back}>
            <BannerContent>
              <BannerTextContent>
                <Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_3_title"),
                  }}
                />
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_3_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <Banner1Img
                  src="/images/watch2_banner3.png"
                  alt="watch2 banner3"
                />
              </BannerImgContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <BannerContent>
              <Banner2ImgContent>
                <Banner1Img
                  src="/images/watch2_banner4.png"
                  alt="watch2 banner4"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_4_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_4_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.white_back}>
            <BannerContent>
              <BannerTextContent>
                <Title
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_5_title"),
                  }}
                />
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_5_subtitle"),
                  }}
                />
              </BannerTextContent>
              <BannerImgContent>
                <Banner1Img
                  src="/images/watch2_banner5.png"
                  alt="watch2 banner5"
                />
              </BannerImgContent>
            </BannerContent>
          </BackContent>

          <BackContent backColor={defaultTheme.back_fa}>
            <BannerContent>
              <Banner2ImgContent>
                <Banner1Img
                  src="/images/watch2_banner6.png"
                  alt="watch2 banner6"
                />
              </Banner2ImgContent>
              <BannerTextContent>
                <Title color={defaultTheme.black_333}>
                  {t("bithd_2.banner_6_title")}
                </Title>
                <Subtitle
                  color={defaultTheme.black_333}
                  dangerouslySetInnerHTML={{
                    __html: t("bithd_2.banner_6_subtitle"),
                  }}
                />
              </BannerTextContent>
            </BannerContent>
          </BackContent>

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
                  <Banner1Img
                    src="/images/watch2_banner7.png"
                    alt="watch2 banner7"
                  />
                  <Warn>{t("common.warn")}</Warn>
                </div>
              </TechnicalImgContent>
            </BannerContent>
          </TechnicalContent>
        </Container>
        <Footer router="watch2" />
      </ClientOnly>
    </>
  )
}

export default Watch2
