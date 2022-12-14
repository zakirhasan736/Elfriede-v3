function SliderProject() {
    $(".slider-project .swiper-container").each(function (e) {
        new Swiper(this, {
            slidesPerView: "auto",
            spaceBetween: 60,
            navigation: {
                nextEl: $(this).parents(".slider-project").find(".slider-button-next"),
                prevEl: $(this).parents(".slider-project").find(".slider-button-prev")
            },
            pagination: {
                el: $(this).parents(".slider-project").find(".swiper-pagination"),
                type: "fraction"
            }
        })
    })
}

// function data_overlay() {
//     $("[data-overlay-color]").each(function (e) {
//         var t = $(this),
//             n = dsnGrid.removeAttr(t, "data-overlay-color");
//         t.addClass("dsn-overlay-" + e), $("body").append("<style>.dsn-overlay-" + e + "[data-overlay]:before{background: " + n + ";}</style>")
//     })
// }

// function background() {
//     $(".cover-bg, section , [data-image-src]").each(function () {
//         var e = $(this).attr("data-image-src");
//         void 0 !== e && !1 !== e && $(this).css("background-image", "url(" + e + ")")
//     })
// }

function slick_client(e) {
    var t = $(".client-curs");
    t.length > 0 && (t.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        infinite: !0,
        nextArrow: '<i class="fas fa-angle-right"></i>',
        prevArrow: '<i class="fas fa-angle-left"></i>',
        cssEase: "cubic-bezier(.9, .03, .41, .49)",
        speed: 700
    }), e.width() > 991 && (dsnGrid.parallaxMoveElemnt(t.find(".fas.fa-angle-right"), 25), dsnGrid.parallaxMoveElemnt(t.find(".fas.fa-angle-left"), 25)))
}


! function (e) {
    "use strict";


    function a() {
        const t = window.Scrollbar;
        var a = document.querySelector("#dsn-scrollbar");
        return {
            isMobile: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i))
            },
            isMobiles: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i) || i.width() <= 991)
            },
            isScroller: function (e) {
                e && (a = document.querySelector("#dsn-scrollbar"));
                let t = !o.hasClass("dsn-effect-scroll") || this.isMobile() || null === a;
                return t && e && o.addClass("dsn-mobile"), !t
            },
            locked: function () {
                if (o.addClass("locked-scroll"), this.isScroller()) {
                    let e = this.getScrollbar();
                    void 0 !== e && e.destroy()
                }
            },
            unlocked: function () {
                o.removeClass("locked-scroll"), this.start(), n(), l.allInt(), dsnGrid.progressCircle(r)
            },
            getScrollbar: function (e) {
                return void 0 === e ? t.get(a) : t.get(document.querySelector(e))
            },
            getListener: function (e) {
                if (void 0 !== e) {
                    var t = this;
                    t.isScroller(!0) ? t.getScrollbar().addListener(e) : i.on("scroll", e)
                }
            },
            start: function () {
                if (dsnGrid.scrollTop(0, 1), e(".scroll-to").on("click", function (t) {
                        t.preventDefault();
                        let n = i;
                        r.isScroller(!0) && (n = r.getScrollbar()), TweenLite.to(n, 1.5, {
                            scrollTo: e(".wrapper").offset().top,
                            ease: Expo.easeInOut
                        })
                    }), !this.isScroller(!0)) return;
                let n = .05;
                this.isMobiles() && (n = .02), t.init(a, {
                    damping: n
                }), this.workScroll()
            },
            sliderScroll: function () {
                t.init(document.querySelector(".slider .main-slider .slider-nav-list"), {
                    damping: .05
                })
            },
            menuScroll: function () {
                t.init(document.querySelector(".nav__content"), {
                    damping: .05
                })
            },
            commentScroll: function () {
                const e = document.querySelector(".comment-modal .comment-modal-container");
                null !== e && t.init(e, {
                    damping: .05
                })
            },
            sidebarScroll: function () {
                const e = document.querySelector(".dsn-sidebar .sidebar-single");
                null !== e && t.init(e, {
                    damping: .05
                })
            },
            workScroll: function () {
                const e = document.querySelector(".dsn-all-work .dsn-work-scrollbar");
                null !== e && t.init(e, {
                    damping: .05
                })
            }
        }
    }
    const i = e(window),
        o = e("body"),
        s = {
            animateTextAjax: '.headefr-fexid .project-title .title-text-header .cat ,[data-dsn-animate="ajax"] , footer, .next-project , .root-project'
        };
    (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i)) && e(".cursor").css("display", "none"),
        function () {
            var t = e(".preloader"),
                n = t.find(".preloader-block"),
                a = n.find(".percent"),
                r = t.find(".preloader-bar"),
                l = r.find(".preloader-progress"),
                u = dsnGrid.pageLoad(0, 100, 300, function (e) {
                    a.text(e), l.css("width", e + "%")
                });
            i.on("load", function () {
                clearInterval(u), TweenMax.fromTo(l, .5, {
                    width: "95%"
                }, {
                    width: "100%",
                    onUpdate: function () {
                        var e = l.width() / l.parent().width() * 100;
                        a.text(parseInt(e, 10))
                    },
                    onComplete: function () {
                  TweenMax.to(a, 1, {
                            autoAlpha: 0,
                            onComplete: function () {
                                t.addClass("hidden")
                            }
                        })
                    }
                })
            })
        }();
    var r = a(),
        l = function () {
            var t = new ScrollMagic.Controller;
            const n = '[data-dsn-header="project"]',
                a = '[data-dsn-footer="project"]';
            return {
                clearControl: function () {
                    t = new ScrollMagic.Controller
                },
                isElemntId: function (e) {
                    return null !== document.getElementById(e)
                },
                headerProject: function () {
                    if (e(n).length <= 0) return !1;
                    let a = e("#dsn-hero-parallax-img"),
                        i = e("#dsn-hero-parallax-title"),
                        s = e("#dsn-hero-parallax-fill-title"),
                        r = e("#descover-holder"),
                        l = 1.2;
                    a.hasClass("parallax-move-element") && dsnGrid.parallaxMoveElemnt({
                        target: e(n),
                        element: a.find(".cover-bg")
                    }, 5, 1);
                    var d = new TimelineMax;
                    if (a.length > 0) {
                        let e = a.hasClass("has-top-bottom") ? 1 : 1.08;
                        d.to(a, 1, {
                            force3D: !0,
                            y: "30%",
                            scale: e
                        }, 0)
                    }
                                
                    var c = new ScrollMagic.Scene({
                        triggerElement: n,
                        triggerHook: 0,
                        duration: "100%"
                    }).setTween(d).addTo(t);
                    let u = a.find("video");
                    return (u.length > 0 || o.hasClass("v-light")) && (c.on("enter", function () {
                        u.length > 0 && u.get(0).play(), o.hasClass("v-light") && !e(n).hasClass("header-hero-2") && o.removeClass("menu-light")
                    }), c.on("leave", function () {
                        u.length > 0 && u.get(0).pause(), o.hasClass("v-light") && !e(n).hasClass("header-hero-2") && o.addClass("menu-light")
                    })), c
                },
                nextProject: function () {
                    let n = e("#dsn-next-parallax-img"),
                        i = e("#dsn-next-parallax-title"),
                        s = !(n.length <= 0) && new ScrollMagic.Scene({
                            triggerElement: a,
                            triggerHook: 1,
                            duration: "100%"
                        }).setTween(TweenMax.to(n, 1, {
                            force3D: !0,
                            y: "30%",
                            scale: 1
                        }, 0)).addTo(t),
                        l = !(i.length <= 0) && new ScrollMagic.Scene({
                            triggerElement: a,
                            triggerHook: .5,
                            duration: "55%"
                        }).setTween(TweenMax.to(i, 1, {
                            force3D: !0,
                            top: "0%",
                            opacity: 1,
                            ease: Power0.easeNone
                        }, 0)).addTo(t);
                    r.getListener(function (e) {
                        !1 !== s && s.refresh(), !1 !== l && l.refresh()
                    }), !1 !== l && o.hasClass("v-light") && l.on("progress", function (e) {
                        e.progress > .8 ? o.removeClass("menu-light") : o.addClass("menu-light")
                    })
                },
                parallaxImg: function () {
                    e('[data-dsn-grid="move-up"]').each(function () {
                        let n = e(this);
                        n.attr("data-dsn-grid", "moveUp");
                        let a = n.find("img:not(.hidden) , video"),
                            i = dsnGrid.getUndefinedVal(n.data("dsn-triggerhook"), 1),
                            o = dsnGrid.getUndefinedVal(n.data("dsn-duration"), 1 !== i ? "100%" : "200%");
                        if (a.length > 0) {
                            var s;
                            if (a.hasClass("has-top-bottom")) {
                                let e = dsnGrid.getUndefinedVal(a.data("dsn-move"), "15%");
                                s = TweenMax.to(a, .8, {
                                    force3D: !0,
                                    y: e,
                                    ease: Power0.easeNone
                                })
                            } else {
                                let e = dsnGrid.getUndefinedVal(a.data("dsn-y"), "10%"),
                                    t = dsnGrid.getUndefinedVal(a.data("dsn-scale"), 1.1);
                                1 !== i ? (a.css("top", 0), s = TweenMax.to(a, 2, {
                                    force3D: !0,
                                    scale: t,
                                    y: e
                                })) : s = TweenMax.to(a, 1, {
                                    force3D: !0,
                                    scale: t,
                                    y: e,
                                    ease: Power0.easeNone
                                })
                            }
                            var l = new ScrollMagic.Scene({
                                triggerElement: this,
                                triggerHook: i,
                                duration: o
                            }).setTween(s).addTo(t);
                            r.getListener(function () {
                                l.refresh()
                            })
                        }
                    })
                },
                moveSection: function () {
                    e('[data-dsn-grid="move-section"]').each(function () {
                        let n = e(this);
                        n.removeAttr("data-dsn-grid"), n.addClass("dsn-move-section");
                        let a = dsnGrid.getUndefinedVal(n.data("dsn-move"), -100),
                            o = dsnGrid.getUndefinedVal(n.data("dsn-triggerhook"), 1),
                            s = dsnGrid.getUndefinedVal(n.data("dsn-opacity"), n.css("opacity")),
                            l = dsnGrid.getUndefinedVal(n.data("dsn-duration"), "150%");
                        if ("tablet" === n.data("dsn-responsive") && i.width() < 992) return;
                        let d = TweenMax.to(n, 2, {
                            y: a,
                            autoAlpha: s,
                            ease: Power0.easeNone
                        });
                        var c = new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: o,
                            duration: l
                        }).setTween(d).addTo(t);
                        r.getListener(function () {
                            c.refresh()
                        })
                    })
                },
                parallaxImgHover: function () {
                    const t = e('[data-dsn="parallax"]');
                    0 === t.length || i.width() < 992 || t.each(function () {
                        var t = e(this),
                            n = (dsnGrid.removeAttr(t, "data-dsn"), dsnGrid.removeAttr(t, "data-dsn-speed")),
                            a = dsnGrid.removeAttr(t, "data-dsn-move"),
                            i = !1;
                        t.hasClass("image-zoom") && (i = !0), dsnGrid.parallaxMoveElemnt(t, a, n, void 0, i)
                    })
                },

                animateText: function () {
                    e('[data-dsn-animate="text"] , [data-dsn-animate="up"]').each(function () {
                        let n = e(this),
                            a = 1;
                        "text" === n.data("dsn-animate") ? (dsnGrid.convertTextWord(n, n), n.attr("data-dsn-animate", "animate")) : a = .8;
                        var i = new ScrollMagic.Scene({
                            triggerElement: this,
                            reverse: !1,
                            triggerHook: a
                        }).setClassToggle(this, "dsn-active").addTo(t);
                        r.getListener(function () {
                            i.refresh()
                        })
                    })
                },
                headerBlog: function () {
                    const n = e('[data-dsn-header="blog"]');
                    if (!(n.length <= 0 || i.width() < 992)) {
                        var a = new ScrollMagic.Scene({
                            triggerElement: ".header-single-post",
                            triggerHook: 0,
                            duration: "100%"
                        }).setTween(TweenMax.fromTo(n, 1, {
                            width: "100%"
                        }, {
                            width: "80%"
                        })).addTo(t);
                        r.getListener(function () {
                            a.refresh()
                        })
                    }
                },
                allInt: function () {
                    this.clearControl();
                    let e = this.headerProject();
                    r.getListener(function (t) {
                        !1 !== e && e.refresh()
                    }), this.nextProject(), this.parallaxImgHover(), this.parallaxImg(), this.moveSection(), this.animateText()
                }
            }
        }();
    r.start(), l.allInt(),  i.on("popstate", function (n) {
        e("main.main-root").load(document.location + " main.main-root > *", function () {
            t(!0), a().unlocked()
        })
    })

}(jQuery);

$(document).ready(function() {
    $('.elfriede-navigation-bar').on('click', function(){
        $('.elfriede-navigation-wrapper').addClass('info-open');
      })
      $('.elfriede-trigger-close').on('click', function(){
        $('.elfriede-navigation-wrapper').removeClass('info-open');
      })
});