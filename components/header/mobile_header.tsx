import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { isCN } from "../../utils/utils"
import Link from "next/link"
import { MobileMenu } from "../../model/model"
import React, { useState } from "react"
import { MobileMenuList } from "../common/mobile_menu_list"

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`

const HeaderCotainer = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.nav_back};
  box-shadow: ${({ theme }) => `0px 5px 5px ${theme.nav_shadow}`};
`

const Logo = styled.img`
  float: left;
  margin: 16px 0 0 20px;
  height: 28px;
`

const MenuContainer = styled.div<{ active: boolean }>`
  float: right;
  margin-right: 20px;
  padding: 15.5px 0;
  text-align: center;
  cursor: pointer;

  transition: ${({ active }) => (active ? "all 0.3s ease-in-out" : "")};
  transition-delay: ${({ active }) => (active ? "0.3s" : "")};
  transform: ${({ active }) => (active ? "rotate(45deg) scale(0.85)" : "")};
`

const Line = styled.p<{ active: boolean }>`
  display: block;
  margin: 5px auto;
  width: 24px;
  height: 3px;
  background-color: ${({ theme }) => theme.white_back};
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:last-child {
    width: 16px;
    margin-left: 0;
  }

  &:nth-child(1) {
    width: ${({ active }) => (active ? "24px" : "")};
    transition-delay: 0.2s;
    transform: ${({ active }) => (active ? "translateY(8px)" : "")};
  }
  &:nth-child(3) {
    width: ${({ active }) => (active ? "24px" : "")};
    transition-delay: 0.2s;
    transform: ${({ active }) =>
      active ? "translateY(-8px) rotate(90deg)" : ""};
  }
  &:nth-child(2) {
    width: ${({ active }) => (active ? "0" : "")};
  }
`

export function MobiveHeader() {
  const { t, i18n } = useTranslation()
  const [active, setActive] = useState<boolean>(false)

  const getLogo = () => {
    return "/images/logo.svg"
  }

  const menus: MobileMenu[] = [
    {
      link: {
        text: t("header.razor"),
        nofollow: false,
        link: "",
        changeLang: false,
      },
      isMark: false,
      drop: [
        {
          text: t("header.razor_1"),
          nofollow: false,
          link: "/razor",
          changeLang: false,
        },
        {
          text: t("header.razor_pro"),
          nofollow: false,
          link: "/razor2",
          changeLang: false,
        },
      ],
    },
    {
      link: {
        text: t("header.bithd"),
        nofollow: false,
        link: "",
        changeLang: false,
      },
      isMark: false,
      drop: [
        {
          text: t("header.bithd_2"),
          nofollow: false,
          link: "/watch2",
          changeLang: false,
        },
      ],
    },
    {
      link: {
        text: t("header.frozen"),
        nofollow: false,
        link: "",
        changeLang: false,
      },
      isMark: false,
      drop: [
        {
          text: t("header.frozen_1"),
          nofollow: false,
          link: "/armor",
          changeLang: false,
        },
        {
          text: t("header.frozen_2"),
          nofollow: false,
          link: "/armor2",
          changeLang: false,
        },
      ],
    },
    {
      link: {
        text: t("header.doc"),
        nofollow: true,
        link: "http://docs.bithd.com/",
        changeLang: false,
      },
      isMark: false,
      drop: [],
    },
    {
      link: {
        text: isCN(i18n.language) ? "中文" : "English",
        nofollow: false,
        link: "",
        changeLang: true,
      },
      isMark: false,
      drop: [
        {
          text: "中文",
          nofollow: false,
          link: "",
          changeLang: true,
        },
        {
          text: "English",
          nofollow: false,
          link: "",
          changeLang: true,
        },
      ],
    },
  ]

  const menuClick = () => {
    setActive(!active)
  }

  return (
    <>
      <Header>
        <HeaderCotainer>
          <Link href="/">
            <Logo alt="logo" src={getLogo()} />
          </Link>
          <MenuContainer active={active} onClick={menuClick}>
            <Line active={active} />
            <Line active={active} />
            <Line active={active} />
          </MenuContainer>
          <MobileMenuList
            active={active}
            menus={menus}
            menuClicked={menuClick}
          />
        </HeaderCotainer>
      </Header>
    </>
  )
}
