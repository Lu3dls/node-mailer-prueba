"use strict";

function vermas(e, n) {
    "block" == document.getElementById(e).style.display ? (document.getElementById(e).style.display = "none", document.getElementById(n).innerHTML = "Ver Más") : (document.getElementById(e).style.display = "block", document.getElementById(n).innerHTML = "Ver Menos")
}
$(document).ready((function() {
    $(window).scroll((function() {
        this.scrollY > 20 ? $(".navbar").addClass("sticky") : $(".navbar").removeClass("sticky"), this.scrollY > 500 ? $(".scroll-up-btn").addClass("show") : $(".scroll-up-btn").removeClass("show")
    })), $(".scroll-up-btn").click((function() {
        $("html").animate({
            scrollTop: 0
        })
    })), $(".menu-btn").click((function() {
        $(".navbar .menu").toggleClass("active"), $(".menu-btn i").toggleClass("active")
    }))
})), $(document).ready((function() {
    new Typed(".mecanografia2", {
        strings: ["\n"],
        strings: ["Diseño de páginas web\n", "Aplicativos webs\n", "Analista de sistemas\n"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: !0,      
    })
})), $(document).ready((function() {
    $(".carrusel").owlCarousel({
        margin: 20,
        loop: !0,
        autoplayTiemeOut: 2e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1
            },
            600: {
                items: 2,
                nav: !1
            },
            1e3: {
                items: 3,
                nav: !1
            }
        }
    })
}));