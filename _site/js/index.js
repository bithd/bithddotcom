$(function(){
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
      alert('尚未开放购买，敬请期待')
      return false
    }
    openBuyBox()
  })
  $(document).click(function(event){
    var _con = $('#divTop');   // 设置目标区域
    if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
      if ($("#menu-list").hasClass("mobile-hidden") == false) {
        $("#menu-list").addClass("mobile-hidden");
      }
      var display = $(".reports").css("display");
      if (display == "block") {
        $(".reports").css("display", "none");
      }
    }
  });
  ---------------------
})