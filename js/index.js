$(function(){
  var watch1_wd_address = 'https://weidian.com/item.html?itemID=2266200056&spider_token=af9f&spider=seller.zx-shopdetail.5.1'
  var watch1_tb_address = 'https://shop284054772.m.taobao.com/?refer=http%3A%2F%2F192.168.1.159%3A4000%2FBITHD-watch-1.html'
  var watch2_wd_address = 'https://weidian.com/item.html?itemID=2685724274'
  var watch2_tb_address = 'https://item.taobao.com/item.htm?id=586206342524'
  var razor_wd_address = 'https://weidian.com/item.html?itemID=2685724274'
  var razor_tb_address = 'https://item.taobao.com/item.htm?id=586206342524'
  function closeBuyBox(){
    $('.alert-buy-box').hide()
  }
  function openBuyBox(){
    $('.alert-buy-box').show()
  }
  $('.alert-buy-box').click(function(ev){
    if($(ev.target).hasClass('alert-buy-box')){
      closeBuyBox()
    }
  })
  $('.close-btn').click(function(){
    closeBuyBox()
  })
  $('.open-buy').click(function(){
    if (new String($.i18n.browserLang()).indexOf("zh")> -1) {
      if($(this).hasClass('not-open')){
        alert('工程机预售将于2018年3月8日中午12:00开启')
        return false
      }
    } else if ((new String($.i18n.browserLang()).toLowerCase()).indexOf("tw") > -1|| (new String($.i18n.browserLang()).toLowerCase()).indexOf("hk") > -1) {
      if($(this).hasClass('not-open')){
        alert('工程机预售将于2018年3月8日中午12:00开启')
        return false
      }
    } else {
      if($(this).hasClass('not-open')){
        alert('The New Prodect Will Sell at 12:00:00(UTC8) 8th March. Stay Tuned!')
        return false
      }
    }
    if($(this).hasClass('buy-razor')){
      $('#buy-wd').attr('href',razor_wd_address)
      $('#buy-tb').attr('href',razor_tb_address)
    }
    if($(this).hasClass('buy-watch2')){
      $('#buy-wd').attr('href',watch2_wd_address)
      $('#buy-tb').attr('href',watch2_tb_address)
    }
    if($(this).hasClass('buy-watch1')){
      $('#buy-wd').attr('href',watch1_wd_address)
      $('#buy-tb').attr('href',watch1_tb_address)
    }
    openBuyBox()
  })
})