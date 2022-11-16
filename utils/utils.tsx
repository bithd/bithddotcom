import { Buy } from "../model/model"
import {
  armor2LinkCn,
  armor2LinkEn,
  armorLinkCn,
  armorLinkEn,
  razor2LinkCn,
  razor2LinkEn,
  razorLinkCn,
  razorLinkEn,
  watch2LinkCn,
  watch2LinkEn,
} from "./buyLinks"

export function isCN(language: string): boolean {
  if (language == "zh-cn" || language == "zh-tw" || language == "zh-hk")
    return true
  return false
}

export function contentfulLang(language: string): string {
  if (language == "zh-cn" || language == "zh-tw" || language == "zh-hk")
    return "zh"
  return "en"
}

export function getMonth(time: string): string {
  if (time != null && time.length > 0) {
    const timeArr = time.split("-")
    if (
      timeArr[1] != null &&
      timeArr[1].length > 0 &&
      parseInt(timeArr[1]) >= 1 &&
      parseInt(timeArr[1]) <= 12
    ) {
      const monthArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      return monthArr[parseInt(timeArr[1]) - 1]
    }
  }
  return ""
}

export function getDay(time: string): string {
  if (time != null && time.length > 0) {
    const timeArr = time.split("-")
    if (
      timeArr[2] != null &&
      timeArr[2].length > 0 &&
      parseInt(timeArr[2]) >= 1 &&
      parseInt(timeArr[2]) <= 31
    ) {
      return timeArr[2]
    }
  }
  return ""
}

export function verifyHost(): boolean {
  if (typeof window !== "undefined") {
    const dev = process.env.NODE_ENV !== "production"
    return dev ? true : window.location.host != "bithd.com" ? true : false
  }
  return false
}

export function getBuyLinks(type: string, languageIsCn: boolean): Buy[] {
  if (type == "armor") return languageIsCn ? armorLinkCn : armorLinkEn
  if (type == "armor2") return languageIsCn ? armor2LinkCn : armor2LinkEn
  if (type == "razor") return languageIsCn ? razorLinkCn : razorLinkEn
  if (type == "razor2") return languageIsCn ? razor2LinkCn : razor2LinkEn
  if (type == "watch2") return languageIsCn ? watch2LinkCn : watch2LinkEn
  return []
}

export function deleteBr(str: string): string {
  if (
    typeof document !== "undefined" &&
    document.documentElement.clientWidth &&
    document.documentElement.clientWidth <= 768
  ) {
    console.log(str)
    return str.replace("<br/>", " ").replace("<br>", " ")
  }
  return str
}

export function isPc(): boolean {
  if (
    typeof document !== "undefined" &&
    document.documentElement.clientWidth &&
    document.documentElement.clientWidth <= 768
  ) {
    return false
  }
  return true
}

export function getClientWidth(): number {
  if (typeof document !== "undefined" && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth
  }
  return 0
}
