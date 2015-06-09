(function() {
    //generate random number between min and max
    var rand = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var lt = new lightning({
        glow: false
    });
    var draw = false;

    setInterval(function() {
        if (draw) {
            lt.hide();
            var ob = randomSide();
            offset = $(".thor").offset();
            lt.show(ob.startX, ob.startY, offset.left + 112, offset.top + 32);
            num = rand(1, 5);
            $(".thor").parent().css("background-image", "url('/assets/images/boom-bg" + num + ".png')");
        }
    }, 100)


    // Thor / Trumpet animation
    $(document).on('mouseenter', ".after-party", function(e) {
        $(".thor").attr("src", "/assets/images/Bario-2.png")
        var ob = randomSide();
        offset = $(".thor").offset();
        lt.show(ob.startX, ob.startY, offset.left + 112, offset.top + 32);
        draw = true;
        num = rand(1, 5);
        $(".thor").parent().css("background-image", "url('/assets/images/boom-bg" + num + ".png')");
    });

    $(document).on('mouseleave', ".after-party", function() {
        $(".thor").attr("src", "/assets/images/Bario-1.png")
        draw = false;
        lt.hide();
        $(".thor").parent().css("background-image", "")
    });



    $('#splash nav a.normal, #header a.normal').each(function (i, el) {
        var $el = $(el);
        $(el).on('click', function (e) {
            e.preventDefault();
            var section = $($el.attr('href'));
            $('html, body').animate({
                scrollTop: section.offset().top
            }, 1000);
        })
    });

    $(window).load(function() {
         $('.stan-lee').raptorize();
    });

    // ----- show / hide header on scroll ----- //
    var showHideHeader = function () {
        var header = $('#header');
        var splash = $('#splash');

        if($(window).scrollTop() > splash.offset().top + splash.height()) {
            console.log("past splash");
            if (!header.is(':visible')) header.show(500);
        } else {
            if (header.is(':visible')) header.hide(500);
        }
    };
    $(window).on('scroll', function() {
        showHideHeader();
    });
    showHideHeader();
    // ----- //

    //get viewport dimensions
    var viewport = function() {
        var viewport = new Object();
        viewport.width = 0;
        viewport.height = 0;
        // the more standards compliant browsers (mozilla/netscape/opera/IE7)
        //use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
            viewport.width = window.innerWidth,
                viewport.height = window.innerHeight
        } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
            viewport.width = document.documentElement.clientWidth,
                viewport.height = document.documentElement.clientHeight
        } else {
            viewport.width = document.getElementsByTagName('body')[0].clientWidth,
                viewport.height = document.getElementsByTagName('body')[0].clientHeight
        }
        return viewport;
    };


    function randomSide() {
        var v = viewport();
        var startX;
        var startY;
        var side = Math.random();

        var top = window.pageYOffset
        var bottom = window.pageYOffset + $(window.top).height();
        // top
        if (side <= 0.25) {
            startX = (0, v.width);
            startY = 0
        }
        // bottom
        else if (side <= 0.5) {
            startX = rand(0, v.width);
            startY = bottom;
        }
        // left
        else if (side <= 0.75) {
            startX = 0;
            startY = rand(top, bottom);
        }

        // right
        else if (rand <= 1) {
            startX = v.width;
            startY = rand(top, bottom);
        }
        var ob = {};
        ob.startX = startX;
        ob.startY = startY;
        return ob;
    }

    $(document).on('click', function(e) {
        var cursorX = e.pageX;
        var cursorY = e.pageY;

        var randomImage = Math.floor(Math.random() * 6) + 1;
        var randomAngle = Math.floor(Math.random() * (41)) - 20;

        var powImage = $("<img>")
            .attr("src", "/assets/images/pow_" + randomImage + ".png")
            .attr("class", "pow-image")
            .attr("width", 300)
            .attr("height", 300)
            .css("top", cursorY - 150)
            .css("left", cursorX - 150)
            .css("opacity", 1)
            .css("transform", "rotate(" + randomAngle + "deg)")

        $("body").append(powImage);

        powImage.animate({
            top: "-=100"
        }, 200, function() {
            powImage.animate({
                opacity: "0"
            }, 100, function() {
                powImage.remove();
            });
        });


    });

}).call()
