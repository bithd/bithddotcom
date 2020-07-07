$(function() {
    var watch1_wd_address = 'https://weidian.com/item.html?itemID=2266200056&spider_token=af9f&spider=seller.zx-shopdetail.5.1'
    var watch1_tb_address = 'https://shop284054772.m.taobao.com/?refer=http%3A%2F%2F192.168.1.159%3A4000%2FBITHD-watch-1.html'
    var watch2_wd_address = 'https://weidian.com/item.html?itemID=2685724274'
    var watch2_tb_address = 'https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.25911deb4Ubtzq&ft=t&id=612475945660'
    var watch2_amazon_address = 'https://www.amazon.com/BITHD-Cryptocurrency-Hardware-Companion-Anywhere/dp/B07QKTTDRQ/ref=sr_1_3?m=A1Q5WMBAZ5F5MU&marketplaceID=ATVPDKIKX0DER&qid=1578887523&s=merchant-items&sr=1-3'
    var watch2_ebay_address = 'https://www.ebay.com/itm/BITHD-Watch-2-Cryptocurrency-Hardware-Wallet-Your-Companion-Anywhere-Anytime/283447813111'
    var razor_wd_address = 'https://weidian.com/item.html?itemID=2713821031'
    var razor_tb_address = 'https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.25911debz9Ebts&ft=t&id=612343689320'
    var razor_amazon_address = 'https://www.amazon.com/BITHD-Cryptocurrency-Hardware-Wallet-Pocket/dp/B07QKF867S/ref=sr_1_4?m=A1Q5WMBAZ5F5MU&marketplaceID=ATVPDKIKX0DER&qid=1578887523&s=merchant-items&sr=1-4'
    var razor_ebay_address = 'https://www.ebay.com/itm/BITHD-Razor-Your-Cryptocurrency-Hardware-Wallet-Right-in-Your-Pocket/283447805021'
    var armor_wd_address = 'https://k.weidian.com/JmkQ54lp'
    var armor_tb_address = 'https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.25911debz9Ebts&ft=t&id=613210527772'
    var armor_amazon_address = 'https://www.amazon.com/Frozen-Armor-BITHD-Mnemonics-Storage-Memorizer/dp/B07PW5JXVV/ref=sr_1_1?m=A1Q5WMBAZ5F5MU&marketplaceID=ATVPDKIKX0DER&qid=1578887523&s=merchant-items&sr=1-1'
    var armor_ebay_address = 'https://www.ebay.com/itm/Frozen-Armor-BITHD-Crypto-Wallet-Private-keys-Seeds-Metal-Tablet-Memorizer/283535717738'

    function closeBuyBox() {
        $('.alert-buy-box').hide()
    }

    function openBuyBox() {
        $('.alert-buy-box').show()
    }
    $('.alert-buy-box').click(function(ev) {
        if ($(ev.target).hasClass('alert-buy-box')) {
            closeBuyBox()
        }
    })
    $('.close-btn').click(function() {
        closeBuyBox()
    })
    $('.open-buy').click(function() {
        if (new String($.i18n.browserLang()).indexOf("zh") > -1) {
            if ($(this).hasClass('not-open')) {
                alert('预售将于2018年3月15日中午12:00开启')
                return false
            }
        } else if ((new String($.i18n.browserLang()).toLowerCase()).indexOf("tw") > -1 || (new String($.i18n.browserLang()).toLowerCase()).indexOf("hk") > -1) {
            if ($(this).hasClass('not-open')) {
                alert('预售将于2018年3月15日中午12:00开启')
                return false
            }
        } else {
            if ($(this).hasClass('not-open')) {
                alert('The New Prodect Will Sell at 12:00:00(UTC8) 15th March. Stay Tuned!')
                return false
            }
        }
        if ($(this).hasClass('buy-razor')) {
            $('#buy-wd').attr('href', razor_wd_address)
            $('#buy-tb').attr('href', razor_tb_address)
            $('#buy-amazon').attr('href', razor_amazon_address)
            $('#buy-ebay').attr('href', razor_ebay_address)
        }
        if ($(this).hasClass('buy-watch2')) {
            $('.buy-watch1-btn').css('display', 'block');
            $('#buy-wd').attr('href', watch2_wd_address)
            $('#buy-tb').attr('href', watch2_tb_address)
            $('#buy-amazon').attr('href', watch2_amazon_address)
            $('#buy-ebay').attr('href', watch2_ebay_address)
        }
        if ($(this).hasClass('buy-watch1')) {
            $('.buy-watch1-btn').css('display', 'none');
            $('#buy-wd').attr('href', watch1_wd_address)
            $('#buy-tb').attr('href', watch1_tb_address)
        }
        if ($(this).hasClass('armor-buy')) {
            $('#buy-wd').attr('href', armor_wd_address)
            $('#buy-tb').attr('href', armor_tb_address)
            $('#buy-amazon').attr('href', armor_amazon_address)
            $('#buy-ebay').attr('href', armor_ebay_address)
        }
        openBuyBox()
    })
})