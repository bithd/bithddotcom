import { createClient } from 'contentful';
import { AndroidVersion, Announcements, News, NewsMessage, Sha256Sums } from '../../model/model';

export const client = createClient({
  space: 'tggbl67mymsa',
  accessToken: '9ldHsXKRCjTMlX_BvZ59d0ueWnQdyED5YQlPD0SCqwI'
})

export const getNews = async (lang: string) => {
  try {
    const result = await client.getEntries({content_type: 'news', locale: lang})
    const news: News[] = []
    result.items.map((item) => {
      if (Object.keys(item.fields as any).length > 0) {
        const obj = (item.fields as any)
        news.push({ img: obj.img.fields.file, content: obj.content, title: obj.title, time: obj.time, url: obj.url })
      }
    })
    return news
  } catch (error) {
    console.log(error)
  }
}

export const getAnnouncements = async (lang: string) => {
  try {
    const query = {content_type: 'announcements', locale: lang}
    const result = await client.getEntries(query)
    const announcements: Announcements[] = []
    result.items.map((item) => {
      if (Object.keys(item.fields as any).length > 0) {
        const obj = (item.fields as any)
        announcements.push({ content: obj.content, title: obj.title, time: obj.time, id: obj.id, type: obj.type })
      }
    })
    return announcements
  } catch (error) {
    console.log(error)
  }
}

export const getAnnouncementEntry = async () => {
  try {
    const query = {content_type: 'announcement'}
    const result = await client.getEntries(query)
    const entryArr: string[] = []
    result.items.map((item) => {
      if (item.sys.id != null) {
        entryArr.push(item.sys.id)
      }
    })
    return entryArr
  } catch (error) {
    console.log(error)
  }
}

export const getNewsMessage = async (lang: string, id?: string) => {
  if (id == null || id.length <= 0) return 
  try {
    const result = await client.getEntry(id, { locale: lang })
    const message: NewsMessage = result.fields as any
    return message
  } catch (error) {
    console.log(error)
  }
}

export const getSha256Sums = async () => {
  try {
    const query = {content_type: 'sha256sums'}
    const result = await client.getEntries(query)
    const sums: Sha256Sums[] = []
    result.items.map((item) => {
      if (Object.keys(item.fields as any).length > 0) {
        const obj = (item.fields as any)
        sums.push({ sha256: obj.sha256, version: obj.version })
      }
    })
    return sums
  } catch (error) {
    console.log(error)
  }
}

export const getLocalNewsMessage = async (lang: string, id?: string) => {
  if (id == null || id.length <= 0) return 
  try {
    const dev = process.env.NODE_ENV !== 'production'
    const url = dev ? `http://localhost:8080/json/publics_${id}.json` : `https://bitpie.com/json/publics_${id}.json`
    const res = await fetch(url)
    const result = await res.json()
    const message: NewsMessage = lang == 'zh' ? (result as any).cn : (result as any).en != null ? (result as any).en : (result as any).cn
    return message
  } catch (error) {
    console.log(error)
  }
}

export const getAndroidVersion = async () => {
  try {
    const result = await client.getEntry('48HPfECVnLtgu3o3RUGsP0')
    const obj = (result.fields as any)
    const version: AndroidVersion = { version:  obj.version, time: obj.time }
    return version
  } catch (error) {
    console.log(error)
  }
}