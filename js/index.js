$(function() {
  var watch1_wd_address = 'https://weidian.com/item.html?itemID=2266200056&spider_token=af9f&spider=seller.zx-shopdetail.5.1'
  var watch1_tb_address = 'https://shop284054772.m.taobao.com/?refer=http%3A%2F%2F192.168.1.159%3A4000%2FBITHD-watch-1.html'
  var watch2_wd_address = 'https://weidian.com/item.html?itemID=2685724274'
  var watch2_tb_address = 'https://item.taobao.com/item.htm?id=586206342524'
  var watch2_amazon_address = 'https://www.amazon.com/dp/B07QKTTDRQ?ref=myi_title_dp'
  var watch2_ebay_address = 'https://www.ebay.com/itm/283447813111'
  var razor_wd_address = 'https://weidian.com/item.html?itemID=2685724274'
  var razor_tb_address = 'https://item.taobao.com/item.htm?id=586206342524'
  var razor_amazon_address = 'https://www.amazon.com/dp/B07QKF867S?ref=myi_title_dp'
  var razor_ebay_address = 'https://www.ebay.com/itm/283447805021'
  var armor_wd_address = 'https://www.amazon.com/dp/B07NHX34RK?ref=myi_title_dp&th=1'
  var armor_tb_address = 'https://www.indiegogo.com/projects/crypto-seed-cold-storage-frozen-armor-bithd#/'
  var armor_amazon_address = 'https://www.amazon.com/dp/B07NHX34RK?ref=myi_title_dp&th=1'
  var armor_ebay_address = 'https://www.ebay.com/itm/283467086393'

  function closeBuyBox() {
    $('.alert-buy-box').hide()
  }

  function openBuyBox() {
    $('.alert-buy-box').show()
  }
  $('.alert-buy-box').click(function(ev) {
    if($(ev.target).hasClass('alert-buy-box')) {
      closeBuyBox()
    }
  })
  $('.close-btn').click(function() {
    closeBuyBox()
  })
  $('.open-buy').click(function() {
    if(new String($.i18n.browserLang()).indexOf("zh") > -1) {
      if($(this).hasClass('not-open')) {
        alert('预售将于2018年3月15日中午12:00开启')
        return false
      }
    } else if((new String($.i18n.browserLang()).toLowerCase()).indexOf("tw") > -1 || (new String($.i18n.browserLang()).toLowerCase()).indexOf("hk") > -1) {
      if($(this).hasClass('not-open')) {
        alert('预售将于2018年3月15日中午12:00开启')
        return false
      }
    } else {
      if($(this).hasClass('not-open')) {
        alert('The New Prodect Will Sell at 12:00:00(UTC8) 15th March. Stay Tuned!')
        return false
      }
    }
    if($(this).hasClass('buy-razor')) {
      $('#buy-wd').attr('href', razor_wd_address)
      $('#buy-tb').attr('href', razor_tb_address)
      $('#buy-amazon').attr('href', razor_amazon_address)
      $('#buy-ebay').attr('href', razor_ebay_address)
    }
    if($(this).hasClass('buy-watch2')) {
      $('#buy-wd').attr('href', watch2_wd_address)
      $('#buy-tb').attr('href', watch2_tb_address)
      $('#buy-amazon').attr('href', watch2_amazon_address)
      $('#buy-ebay').attr('href', watch2_ebay_address)
    }
    if($(this).hasClass('buy-watch1')) {
      $('#buy-wd').attr('href', watch1_wd_address)
      $('#buy-tb').attr('href', watch1_tb_address)
    }
    if($(this).hasClass('armor-buy')) {
      $('#buy-wd').attr('href', armor_wd_address)
      $('#buy-tb').attr('href', armor_tb_address)
      $('#buy-amazon').attr('href', armor_amazon_address)
      $('#buy-ebay').attr('href', armor_ebay_address)
    }
    openBuyBox()
  })
})
