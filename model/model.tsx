import { ReactNode } from "react"

export interface ReactNodeChildren {
  children: ReactNode
}

export interface PCHeaderProps {
  active: string
}

export interface MenuListProps {
  active: string
  menus: Menu[] | []
}

export interface Menu {
  link: PieLink
  drop: PieLink[] | []
}

export interface MobileMenuListProps {
  active: boolean
  menus: MobileMenu[] | []
  menuClicked: () => void | null
}

export interface MobileMenu {
  link: MobileDropLink
  drop: MobileDropLink[] | []
  isMark: boolean
}

export interface MobileDropLink {
  text: string
  link: string
  nofollow: boolean
  changeLang: boolean
}

export interface PieLink {
  text: string
  name: string
  link: string
  nofollow: boolean
}

export interface FooterTabs {
  title: string
  tabs: FooterTab[] | []
}

export interface FooterTab {
  title: string
  link: string
  nofollow: boolean
}

export interface FooterProps {
  router: string
}

export interface DialogProps {
  isShow: boolean
  title: string
  linkTitle: string
  confirmTitle: string
  confirmFun: (isDone: boolean) => void
  cancelFun: () => void
}

export interface ProductsProps {
  title: string
  subtitle: string
  img: string
  link: string
  buy: string
}

export interface ImgLink {
  img: string
  link: string
}

export interface BuyProps {
  title: string
  name: string
}

export interface FeatureProps {
  features: Features[]
}

export interface Features {
  title: string
  subtitle: string
  img: string
}

export interface Params {
  title: string
  content: string
}
