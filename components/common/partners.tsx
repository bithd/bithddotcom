
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { ImgLink } from '../../model/model';
import { isCN } from '../../utils/utils';


const Container = styled.div`
  margin: 0 auto;
  padding: 60px 0;
  width: 1100px;
  overflow: hidden;
`

const Title = styled.p`
  margin: 0 0 60px 0;
  font-size: 36px;
  color: ${({ theme }) => theme.black_333};
  text-align: center;
`

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Img = styled.img`
  margin: 0 88px 30px 0;
  width: 110px;
  height: 38px;

  &:nth-child(6n + 6) {
    margin: 0 0 30px 0;
  }
`

export function Partners() {
  const { t, i18n } = useTranslation();

  const partners: ImgLink[] = [
    {
        img: isCN(i18n.language) ? '/images/8btc_cn.png' : '/images/8btc_en.png',
        link: 'https://www.8btc.com/'
    },{
        img: isCN(i18n.language) ? '/images/poolin_cn.png' : '/images/poolin_en.png',
        link: 'https://www.poolin.com/'
    },{
        img: isCN(i18n.language) ? '/images/tron_cn.png' : '/images/tron_en.png',
        link: 'https://tron.network/'
    },{
        img: isCN(i18n.language) ? '/images/chainnode_cn.png' : '/images/chainnode_en.png',
        link: 'https://www.chainnode.com/'
    },{
        img: isCN(i18n.language) ? '/images/whaleex_cn.png' : '/images/whaleex_en.png',
        link: 'https://www.whaleex.com/'
    },{
        img: isCN(i18n.language) ? '/images/coinbull_cn.png' : '/images/coinbull_en.png',
        link: 'https://www.coinbull.one/'
    },{
        img: isCN(i18n.language) ? '/images/randomnumber_cn.png' : '/images/randomnumber_en.png',
        link: ''
    },{
        img: isCN(i18n.language) ? '/images/dextop_cn.png' : '/images/dextop_en.png',
        link: 'https://dex.top/home'
    },{
        img: isCN(i18n.language) ? '/images/newdex_cn.png' : '/images/newdex_en.png',
        link: 'https://newdex.io/'
    },{
        img: isCN(i18n.language) ? '/images/imeos_cn.png' : '/images/imeos_en.png',
        link: 'https://imeos.one'
    }
  ]

  return (
      <>
        <Container>
          <Title>{t('common.partners')}</Title>
          <ImgContainer>
            <>
              {
                partners.map((item, index) => {
                  return <a key={index} href={item.link.length > 0 ? item.link : 'javascript:void(0)'} rel='nofollow noopener noreferrer' target={item.link.length > 0 ? '_blank' : ''} ><Img src={item.img} alt='partners' /></a>
                })
              }
            </>
          </ImgContainer>
        </Container>
      </>
    )
}
