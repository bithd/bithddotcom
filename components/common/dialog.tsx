import styled from "styled-components"
import { DialogProps } from "../../model/model"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { getBuyLinks, isCN } from "../../utils/utils"

const Container = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black_half};
  z-index: 300;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 64px auto 0;
  width: 100%;
  height: calc(100% - 64px);
  overflow: scroll;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`

const Content = styled.div`
  position: relative;
  margin: auto;
  width: 500px;
  height: 500px;
  text-align: center;
  background: ${({ theme }) => theme.white_back};
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`

const TextContent = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  max-width: 325px;
  text-align: center;
  background: ${({ theme }) => theme.white_back};
  border-radius: 8px;
  overflow: hidden;
`

const Title = styled.p`
  margin: 38px auto 70px;
  font-size: 30px;
  color: ${({ theme }) => theme.black};
  text-align: center;

  @media (max-width: 768px) {
    margin: 38px auto;
    font-size: 18px;
  }
`

const ContentText = styled.p`
  margin: 30px auto 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  text-align: center;
`

const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  line-height: 90px;
  font-size: 26px;
  color: ${({ theme }) => theme.cancel_color};
  border: none;
  background-color: ${({ theme }) => theme.back_f2};
  cursor: pointer;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 20px;
    height: 60px;
    line-height: 60px;
    font-size: 15px;
  }
`

const TextConfirmBtn = styled.button`
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: ${({ theme }) => theme.cancel_color};
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.back_f2};
  box-shadow: ${({ theme }) => `0 2px 5px 0 ${theme.dialog_btn_shadow}`};
`

const LinkContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 50px;
  padding-bottom: 25px;
  color: ${({ theme }) => theme.black_333};
  font-size: 24px;
  border-bottom: ${({ theme }) => `1px solid ${theme.ddd}`};
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    margin: 0 30px 30px;
    padding-bottom: 20px;
  }
`

const LinkText = styled.p`
  color: ${({ theme }) => theme.black_333};
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const LinkArrow = styled.img`
  height: 18px;

  @media (max-width: 768px) {
    height: 12px;
  }
`

export function Dialog({ type, isShow, func }: DialogProps) {
  const { t, i18n } = useTranslation()

  return (
    <>
      <Container isShow={isShow} onClick={func}>
        <Flex>
          {getBuyLinks(type, isCN(i18n.language)).length == 0 ? (
            <TextContent
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <ContentText>预售将于2022年4月28号开启</ContentText>
              <TextConfirmBtn onClick={func}>
                {t("common.cancel")}
              </TextConfirmBtn>
            </TextContent>
          ) : (
            <Content
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <Title>{t("common.buy_title")}</Title>
              {getBuyLinks(type, isCN(i18n.language)).map((item, index) => {
                return (
                  <LinkContainer
                    key={index}
                    href={item.link}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <LinkText>{item.title}</LinkText>
                    <LinkArrow src="/images/arrow_right.png" />
                  </LinkContainer>
                )
              })}
              <ConfirmBtn onClick={func}>{t("common.cancel")}</ConfirmBtn>
            </Content>
          )}
        </Flex>
      </Container>
    </>
  )
}
