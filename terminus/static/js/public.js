$(document).ready(function() {
    /*var wrap = document.getElementById('wrap');
    var ht = document.getElementsByTagName('body');
    if (window.screen.width < 500) {
        $(ht).css({
            'transform': 'rotate(90deg)'
        });
    };*/
    var btn = $('.point-up');
    var btn2 = $('.page2-point-up');
    var win = $('.up-window');
    var close = $('.close');
    $(btn).click(function() {
        $(win).fadeIn();
        $(win).addClass('up-window-go');
    });
    $(close).click(function() {
        $(win).fadeOut('fast');
        $(win).removeClass('up-window-go');
        $(win).removeClass('page2-up-window-go');
    });
    $(btn2).click(function() {
        $(win).fadeIn();
        $(win).addClass('page2-up-window-go');
    });
    var page3_con = document.getElementById('con'),
        page3_ceng1 = document.getElementById('page3-ceng1'),
        page3_floor = document.getElementById('page3-floor'),
        page3_flower = document.getElementById('page3-flower'),
        page3_light = document.getElementById('page3-light'),
        page4_light1 = document.getElementById('page4-light1'),
        page4_floor1 = document.getElementById('page4-floor1'),
        page4_light2 = document.getElementById('page4-light2'),
        page4_light3 = document.getElementById('page4-light3'),
        page4_light4 = document.getElementById('page4-light4'),
        page4_poor = document.getElementById('page4-poor'),
        page4_door = document.getElementById('page4-door'),
        page4_door1 = document.getElementById('page4-door1'),
        page4_light5 = document.getElementById('page4-light5'),
        page4_bang1 = document.getElementById('page4-bang1'),
        page4_bang2 = document.getElementById('page4-bang2'),
        page4_bang1_copy = document.getElementById('page4-bang1-copy'),
        page4_bang2_copy = document.getElementById('page4-bang2-copy'),
        feiji = document.getElementById('feiji'),
        page5_tv = document.getElementById('page5-tv'),
        page5_door = document.getElementById('page5-door'),
        page5_door2 = document.getElementById('page5-door2'),
        page5_kaiguan = document.getElementById('page5-kaiguan'),
        page5_shou = document.getElementById('page5-shou'),
        page5_feng = document.getElementById('page5-feng'),
        page5_guang1 = document.getElementById('page5-guang1'),
        page5_guang2 = document.getElementById('page5-guang2'),
        page5_win1 = document.getElementById('page5-win1'),
        page5_win2 = document.getElementById('page5-win2'),
        page5_deng = document.getElementById('page5-deng'),
        building = document.getElementById('building'),
        line_base = document.getElementById('line_base'),
        line_base1 = document.getElementById('line_base1'),
        line_base2 = document.getElementById('line_base2');
    con(page3_con, 3.84);
    ceng(page3_ceng1);
    Bottom(page3_floor, 8.7176);
    Bottom(page3_flower, 1.35);
    LeftTop(page4_light1,4.173,9.5049);
    Top(page4_floor1,9.6);
    Top(page4_light2,8.2);
    Top(page4_light3,9.142);
    LeftTop(page4_light4,2.5945,7.9);
    LeftTop(page4_poor,2.34,8);
    Top(page4_door,7.384);
    LeftTop(page4_door1,3.9,3.4);
    LeftTop(page4_light5,5.88,7.8);
    LeftTop(page4_bang1,2.94,3.3);
    LeftTop(page4_bang1,2.94,3.3);
    LeftTop(page4_bang2,1.85,3.3);
    LeftTop(page4_bang1_copy,2.94,3.3);
    LeftTop(page4_bang2_copy,1.85,3.3);
    Top(feiji,12.99);
    LeftBottom(page5_tv,5.78,4.21);
    LeftBottom(page5_door,1.515,4.29);
    LeftBottom(page5_door2,1.515,4.29);
    LeftBottom(page5_kaiguan,1.61,2.959);
    LeftBottom(page5_feng,1.73,3.25);
    LeftBottom(page5_win1,1.266,2.91);
    LeftBottom(page5_win2,4.03,2.97);
    LeftBottom(page5_guang1,5.88,5.919);
    LeftBottom(page5_guang2,3.44,6.1);
    LeftBottom(page5_deng,6.75,2.8);
    /*Width(building,1.3588);
    Height(building,3.575);*/
    $(window).resize(function() {
        con(page3_con, 3.84);
        ceng(page3_ceng1);
        Bottom(page3_floor, 8.7176);
        Bottom(page3_flower, 1.35);
        LeftTop(page4_light1,4.173,9.5049);
        Top(page4_floor1,9.6);
        Top(page4_light2,8.2);
        Top(page4_light3,9.142);
        LeftTop(page4_light4,2.5945,7.9);
        LeftTop(page4_poor,2.34,8);
        Top(page4_door,7.384);
        LeftTop(page4_door1,3.9,3.4);
        LeftTop(page4_light5,5.88,7.8);
        LeftTop(page4_bang1,2.94,3.3);
        LeftTop(page4_bang2,1.85,3.3);
        LeftTop(page4_bang1_copy,2.94,3.3);
        LeftTop(page4_bang2_copy,1.85,3.3);
        Top(feiji,12.99);
        LeftBottom(page5_tv,5.78,4.21);
        LeftBottom(page5_door,1.515,4.29);
        LeftBottom(page5_door2,1.515,4.29);
        LeftBottom(page5_kaiguan,1.61,2.959);
        LeftBottom(page5_feng,1.73,3.25);
        LeftBottom(page5_win1,1.266,2.91);
        LeftBottom(page5_win2,4.03,2.97);
        LeftBottom(page5_guang1,5.88,5.919);
        LeftBottom(page5_guang2,3.44,6.1);
        LeftBottom(page5_deng,6.75,2.8);
        /*Height(building,3.575);
        Width(building,1.3588);*/
    });
    /*$(page3_light).hover(
        function() {
            $(page3_light).addClass('light-turn');
        },
        function() {
            $(page3_light).removeClass('light-turn');
        }
    )*/
});

function con(ele, num) {
    $(ele).height(function() {
        return $(window).width() / num;
    });
}

function ceng(ele) {
    $(ele).height(function() {
        return $(window).height();
    });
}
function Width(ele,num) {
    $(ele).width(function() {
        return $(window).width() / num;
    });
}
function Height(ele,num) {
    $(ele).height(function(){
        return $(window).width() / num;
    })
}
function Bottom(ele, num) {
    $(ele).css({
        'bottom': $(ele).width() / num
    });
}

function LeftBottom(ele,num,num1) {
    $(ele).css({
        'left' : $(window).width() / num,
        'bottom' : $(window).width() / num1
    })
}

function LeftTop(ele,num,num1) {
    $(ele).css({
        'left' : $(window).width() / num,
        'top' : $(window).width() / num1
    });
}

function Top(ele,num) {
    $(ele).css({
        'top' : $(window).width() / num
    });
}