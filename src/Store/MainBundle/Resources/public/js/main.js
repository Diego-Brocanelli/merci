var app = {
    init: function() {
        app.action.viewportUpdate();
        app.action.windowResize();
    },
    action: {
        windowResize: function() {
            $(window).resize(function() {
                app.action.viewportUpdate();
            });
        },
        viewportUpdate: function() {
            var windowWidth = $(window).width();
            var elemBody = $('body');

            if (windowWidth < 480) {
                elemBody.removeClass().addClass('smartphone');
            }

            if (windowWidth >= 480) {
                elemBody.removeClass().addClass('smartphone landscape');
            }

            if (windowWidth >= 768) {
                elemBody.removeClass().addClass('tablet');
            }

            if (windowWidth >= 1140) {
                elemBody.removeClass().addClass('desktop');
            }
        }
    }
};

$(function () {
    app.init();
});
