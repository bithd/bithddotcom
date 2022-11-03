import { Component } from "react"
import { IZendeskProps } from "../model/model"

const canUseDOM = () => {
  if (
    typeof window === "undefined" ||
    !window.document ||
    !window.document.createElement
  ) {
    return false
  }
  return true
}

export const ZendeskAPI = ({...args} : IZendeskProps) => {
  if (canUseDOM() && (window as any).zE != null) {
    (window as any).zE.apply(null, args)
  } else {
    console.warn("Zendesk is not initialized yet")
  }
}

export default class Zendesk extends Component<IZendeskProps> {
  constructor(props: IZendeskProps) {
    super(props)
    this.insertScript = this.insertScript.bind(this)
  }


  insertScript(zendeskKey: string, defer: boolean) {
    const script = document.createElement("script")
    if (defer) {
      script.defer = true
    } else {
      script.async = true
    }
    script.id = "ze-snippet"
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`
    document.body.appendChild(script)
    const iframes = document.querySelectorAll("iframe")
    for (let i = 0; i < iframes.length; i++) {
      if (iframes[i].id == 'launcher') {
        iframes[i].style.display = 'block'
      }
    }
  }

  componentDidMount() {
    if (canUseDOM() && !(window as any).zE) {
      const { defer, zendeskKey } = this.props
      this.insertScript(zendeskKey, defer)
    }
  }

  componentWillUnmount() {
    if (!canUseDOM || !(window as any).zE) {
      return
    }
    const iframes = document.querySelectorAll("iframe")
    for (let i = 0; i < iframes.length; i++) {
      if (iframes[i].id == 'launcher') {
        iframes[i].style.display = 'none'
      }
    }
    delete (window as any).zE
    delete (window as any).zESettings
  }

  render() {
    return null
  }
}
