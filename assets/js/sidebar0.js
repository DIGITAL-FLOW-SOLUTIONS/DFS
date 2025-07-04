$(document).ready(function () {
    let $sidebar = $(".widget_privacy"); // Sidebar (Table of Contents)
    let $content = $(".blog_privacy"); // Blog content
    let $container = $sidebar.parent(); // The parent container of the sidebar

    let containerTop = $container.offset().top;
    let containerBottom = containerTop + $content.outerHeight(); // Match the height of the content
    let sidebarHeight = $sidebar.outerHeight();
    let offsetTop = 30; // Distance from the top when fixed

    $(window).scroll(function () {
        let scrollY = $(window).scrollTop();
        let windowHeight = $(window).height();
        
        let maxScroll = containerBottom - sidebarHeight; // Last point where sidebar should be fixed

        if (scrollY >= maxScroll) {
            // Sidebar stops moving and stays at the bottom of the content
            $sidebar.css({
                position: "static",
                top: "auto",
                left: "0",
                width: $sidebar.width()
            });
        } 
        else if (scrollY >= containerTop - offsetTop) {
            // Sidebar stays fixed when scrolling
            $sidebar.css({
                position: "fixed",
                top: offsetTop,
                left: $sidebar.offset().left, // Keep its position
                width: $sidebar.width()
            });
        } 
        else {
            // Reset sidebar to normal scrolling
            $sidebar.css({
                position: "static",
                width: "",
                left: ""
            });
        }
    });
});
