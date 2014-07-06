var store = {
    init: function() {
        store.global.viewportUpdate();
        store.global.windowResize();

        if ($('body').hasClass('smartphone')) {
            store.mobile.toggleMenu();
        }
    },

    global: {
        windowResize: function() {
            $(window).resize(function() {
                store.global.viewportUpdate();
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
    },

    mobile: {
        toggleMenu: function() {
            $('header.menu .item.button').click(function() {
                $('.sidebar')
                    .sidebar({overlay: true})
                    .sidebar('toggle');
            });
        }
    }
};

$(function () {
    store.init();
});
