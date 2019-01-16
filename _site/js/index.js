$(function(){
  var watch1_wd_address = 'https://weidian.com/item.html?itemID=2266200056&spider_token=af9f&spider=seller.zx-shopdetail.5.1'
  var watch1_tb_address = 'https://shop284054772.m.taobao.com/?refer=http%3A%2F%2F192.168.1.159%3A4000%2FBITHD-watch-1.html'
  var watch2_wd_address = '#'
  var watch2_tb_address = '#'
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
    if($(this).hasClass('not-open')){
      alert('工程机将于 2019年1月18日12:00:00 开售，总量100台，届时请前往购买')
      return false
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