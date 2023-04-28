/** DOM Manipulation on Title */
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "It Saddens Us to See You Go";
    } else {
        document.title = "Team Blueblood | Genie";
    }
});

/** Sticky Navigation */
function fixedNavbar() {
    const $wrapper = $('.wrapper');
    if ($wrapper.length) {
        let top_nav_offset = $wrapper.height() + 10;

        function handleScroll() {
            const scroll = $(window).scrollTop();
            if (scroll >= top_nav_offset) {
                $wrapper.find('.wrapper .main-menu').addClass('navbar_fixed');
            } else {
                $wrapper.find('.wrapper .main-menu').removeClass('navbar_fixed');
            }
        }

        $(window).on('scroll', _.debounce(handleScroll, 50));
        $(window).on('resize', _.debounce(() => {
            top_nav_offset = $wrapper.height() + 10;
            handleScroll();
        }, 50));
    }
}