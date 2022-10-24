$(function () {
  var watch1_wd_address =
    "https://weidian.com/item.html?itemID=2266200056&spider_token=af9f&spider=seller.zx-shopdetail.5.1";
  var watch1_tb_address =
    "https://shop284054772.m.taobao.com/?refer=http%3A%2F%2F192.168.1.159%3A4000%2FBITHD-watch-1.html";
  var watch2_wd_address = "https://weidian.com/item.html?itemID=2685724274";
  var watch2_tb_address =
    "https://shop91729164.m.youzan.com/wscgoods/detail/366vweduonwvo";
  var watch2_amazon_address =
    "https://www.amazon.ca/BITHD-Cryptocurrency-Hardware-Companion-Anywhere/dp/B07QKTTDRQ/ref=sr_1_5?keywords=bithd+watch&qid=1666084421&sr=8-5";
  var watch2_ebay_address =
    "https://www.ebay.com/itm/BITHD-Watch-2-Cryptocurrency-Hardware-Wallet-Your-Companion-Anywhere-Anytime/283447813111";
  var razor_wd_address = "https://weidian.com/item.html?itemID=2713821031";
  var razor_tb_address =
    "https://shop91729164.m.youzan.com/wscgoods/detail/35y8sqa855po4";
  var razor_amazon_address =
    "https://www.amazon.com/BITHD-Cryptocurrency-Hardware-Wallet-Pocket/dp/B07QKF867S/ref=sr_1_4?m=A1Q5WMBAZ5F5MU&marketplaceID=ATVPDKIKX0DER&qid=1578887523&s=merchant-items&sr=1-4";
  var razor_ebay_address =
    "https://www.ebay.com/itm/BITHD-Razor-Your-Cryptocurrency-Hardware-Wallet-Right-in-Your-Pocket/283447805021";
  var armor_wd_address = "https://k.weidian.com/JmkQ54lp";
  var armor_tb_address =
    "https://shop91729164.m.youzan.com/wscgoods/detail/26vpo652v32kk";
  var armor_amazon_address =
    "https://www.amazon.ca/Presale-Frozen-Cryptocurrency-Blockchain-Mnemonics-Memorizer/dp/B07NKY1FMD/ref=sr_1_52?keywords=BITHD&qid=1666084493&sr=8-52";
  var armor_ebay_address =
    "https://www.ebay.com/itm/Frozen-Armor-BITHD-Crypto-Wallet-Private-keys-Seeds-Metal-Tablet-Memorizer/283535717738";

  var armor2_youzan_address = "https://j.youzan.com/mu3wT1";
  var armor2_wd_address = "https://k.youshop10.com/RMgNG8Dx";

  var razor2_youzan_address =
    "https://shop91729164.m.youzan.com/wscgoods/detail/36d2b34v2wj3o6t";
  var razor2_wd_address = "https://weidian.com/item.html?itemID=5696372394";

  function closeBuyBox() {
    $(".alert-buy-box").hide();
  }

  function openBuyBox() {
    $(".alert-buy-box").show();
  }
  $(".alert-buy-box").click(function (ev) {
    if ($(ev.target).hasClass("alert-buy-box")) {
      closeBuyBox();
    }
  });
  $(".close-btn").click(function () {
    closeBuyBox();
  });

  $(".open-buy").click(function () {
    if (new String($.i18n.browserLang()).indexOf("zh") > -1) {
      if ($(this).hasClass("not-open")) {
        alert("预售将于2022年4月28号开启开启");
        return false;
      }
    } else if (
      new String($.i18n.browserLang()).toLowerCase().indexOf("tw") > -1 ||
      new String($.i18n.browserLang()).toLowerCase().indexOf("hk") > -1
    ) {
      if ($(this).hasClass("not-open")) {
        alert("预售将于2022年4月28号开启");
        return false;
      }
    } else {
      if ($(this).hasClass("not-open")) {
        alert("The New Prodect Will Sell at 28th April. Stay Tuned!");
        return false;
      }
    }
    if ($(this).hasClass("buy-razor")) {
      $("#buy-wd").attr("href", razor_wd_address);
      $("#buy-tb").attr("href", razor_tb_address);
      $("#buy-amazon").attr("href", razor_amazon_address);
      $("#buy-ebay").attr("href", razor_ebay_address);
    }
    if ($(this).hasClass("buy-watch2")) {
      $(".buy-watch1-btn").css("display", "block");
      $("#buy-wd").attr("href", watch2_wd_address);
      $("#buy-tb").attr("href", watch2_tb_address);
      $("#buy-amazon").attr("href", watch2_amazon_address);
      $("#buy-ebay").attr("href", watch2_ebay_address);
    }
    if ($(this).hasClass("buy-watch1")) {
      $(".buy-watch1-btn").css("display", "none");
      $("#buy-wd").attr("href", watch1_wd_address);
      $("#buy-tb").css("display", "none");
    }
    if ($(this).hasClass("armor-buy")) {
      $("#buy-wd").attr("href", armor_wd_address);
      $("#buy-tb").attr("href", armor_tb_address);
      $("#buy-amazon").attr("href", armor_amazon_address);
      $("#buy-ebay").attr("href", armor_ebay_address);
    }
    if ($(this).hasClass("armor2-buy")) {
      $("#buy-wd").attr("href", armor2_wd_address);
      $("#buy-tb").attr("href", armor2_youzan_address);
      $("#buy-amazon").attr("href", armor_amazon_address);
      $("#buy-ebay").attr("href", armor_ebay_address);
    }
    if ($(this).hasClass("razor2-buy")) {
      $("#buy-wd").attr("href", razor2_wd_address);
      $("#buy-tb").attr("href", razor2_youzan_address);
      // $("#buy-amazon").attr("href", armor_amazon_address);
      // $("#buy-ebay").attr("href", armor_ebay_address);
    }
    openBuyBox();
  });
});
