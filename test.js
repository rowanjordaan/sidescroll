alert('Init');

$(document).ready(function(){

    // Init vars
    var $scroller = $('.s-scroller');
    var sideW = $('.s-side').width();
    var sideH = $('.s-side').height();
    var topW = $('.s-top').width();
    var topH = $('.s-top').height()
    var scrollbarHeight = parseFloat(topW + sideH);

    var scrollerX = 0;
    var scrollerY = 0;
    var scroll = 0;

    // Update dimensions and update variables
    var updateDimensions = function(){
        sideW = $('.s-side').width();
        sideH = $('.s-side').height();
        topW = $('.s-top').width();
        topH = $('.s-top').height();

        scrollbarHeight = parseFloat(topW + sideH);
        $('#s-dimensions').css({'height' : scrollbarHeight + 'px'});

        $scroller.css({'width' : topW + 'px', 'height' : sideH + 'px'})
    };

    // ScrollPosition
    var updateScrollPosition = function(){
        scrollerX = scroll >= topW ? topW : scroll;
        scrollerY = scroll >= topW ? scroll - topW : 0;
    };

    // Animate scroller to the correct position
    var animatePosition = function(){
        $scroller.css({'transform' : 'translateX(-'+ scrollerX +'px) translateY(-'+ scrollerY +'px)'});
    }

    $(window).on('scroll', function(){
        scroll = $(window).scrollTop();
        updateScrollPosition();
        animatePosition();
        console.log(scroll);
        
    });

    $(window).on('resize', function(){
        updateDimensions();
    });
    
    animatePosition();
    updateDimensions();

    console.log('sideH: '+ sideH);
    console.log('topW: ' + topW);
    console.log('scrollbarH: '+scrollbarHeight);
    console.log('windowheight: '+ $(window).height());
    console.log('--');
});