import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { isCN } from "../../utils/utils"
import Link from "next/link"
import { PCHeaderProps, Menu } from "../../model/model"
import { MenuList } from "../common/menu_list"
import React from "react"

const HeaderBox = styled.div`
  position: fixed;
  width: 1200px;
  height: 44px;
  background: ${({ theme }) => theme.nav_back};
  z-index: 90;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.nav_back};
  box-shadow: ${({ theme }) => `0px 5px 5px ${theme.nav_shadow}`};
  z-index: 100;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const HeaderCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 12px 0;
  width: 1100px;
  height: 44px;
  max-width: 1100px;
`

const Logo = styled.img`
  float: left;
  height: 26px;
`

const MenuContainer = styled.div`
  float: right;
`

const LanguageContainer = styled.div`
  float: right;
  position: relative;
  padding: 0 20px;
  height: 30px;
  border-radius: 30px;
  border: ${({ theme }) => `1px solid ${theme.lang_border}`};
  background: ${({ theme }) => theme.lang_back}; ;
`

const LanguageBtn = styled.button<{ isTransparent: boolean }>`
  margin: 4px 0;
  padding: 0;
  line-height: 20px;
  color: ${({ theme }) => theme.white_text};
  font-size: 12px;
  border: none;
  background: transparent;
  border-bottom: ${({ theme, isTransparent }) =>
    isTransparent ? "2px solid transparent" : `2px solid ${theme.white_back}`};

  &:first-child {
    margin-right: 5px;
  }

  &:hover {
    border-bottom: ${({ theme }) => `2px solid ${theme.white_back}`};
  }
`

export function PCHeader({ active }: PCHeaderProps) {
  const { t, i18n } = useTranslation()

  const getLogo = () => {
    return "/images/logo.svg"
  }

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const menus: Menu[] = [
    {
      link: {
        text: t("header.razor"),
        name: "razor",
        nofollow: false,
        link: "",
      },
      drop: [
        {
          text: t("header.razor_1"),
          name: "razor_1",
          nofollow: false,
          link: "/razor",
        },
        {
          text: t("header.razor_pro"),
          name: "razor_2",
          nofollow: false,
          link: "/razor2",
        },
      ],
    },
    {
      link: {
        text: t("header.bithd"),
        name: "bithd",
        nofollow: false,
        link: "",
      },
      drop: [
        {
          text: t("header.bithd_2"),
          name: "bithd_2",
          nofollow: false,
          link: "/watch2",
        },
      ],
    },
    {
      link: {
        text: t("header.frozen"),
        name: "frozen",
        nofollow: false,
        link: "",
      },
      drop: [
        {
          text: t("header.frozen_1"),
          name: "frozen_1",
          nofollow: false,
          link: "/armor",
        },
        {
          text: t("header.frozen_2"),
          name: "frozen_2",
          nofollow: false,
          link: "/armor2",
        },
      ],
    },
    {
      link: {
        text: t("header.doc"),
        name: "doc",
        nofollow: true,
        link: "http://docs.bithd.com/",
      },
      drop: [],
    },
  ]

  return (
    <>
      <HeaderBox>
        <Header id="header">
          <HeaderCotainer>
            <Link href="/">
              <Logo alt="logo" src={getLogo()} />
            </Link>
            <MenuContainer>
              <MenuList active={active} menus={menus} />
              <LanguageContainer>
                <LanguageBtn
                  isTransparent={isCN(i18n.language)}
                  onClick={() => changeLang("en")}
                >
                  EN
                </LanguageBtn>
                <LanguageBtn
                  isTransparent={!isCN(i18n.language)}
                  onClick={() => changeLang("zh-cn")}
                >
                  中文
                </LanguageBtn>
              </LanguageContainer>
            </MenuContainer>
          </HeaderCotainer>
        </Header>
      </HeaderBox>
    </>
  )
}
