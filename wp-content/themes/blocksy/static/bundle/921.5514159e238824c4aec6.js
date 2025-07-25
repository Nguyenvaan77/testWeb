"use strict";
(self.blocksyJsonP = self.blocksyJsonP || []).push([
    [921, 142], {
        7142: function(t, e, n) {
            n.r(e), n.d(e, {
                mountMenuLevel: function() {
                    return m
                }
            });
            var i = n(3846),
                r = n(9257);
            const o = function() {
                    return "rtl" === document.querySelector("html").dir
                },
                s = function(t) {
                    return t.className.includes("animated-submenu") && (!t.parentNode.classList.contains("menu") || -1 === t.className.indexOf("ct-mega-menu") && t.parentNode.classList.contains("menu"))
                };
            const c = function(t, e) {
                    const n = [];
                    for (; t.parentNode !== e;) n.push(t.parentNode), t = t.parentNode;
                    return n
                },
                u = function(t) {
                    return o() ? "left" === t ? "right" : "right" === t ? "left" : t : t
                },
                a = function(t) {
                    let e = function(t, e) {
                        for (var n = []; t.parentNode;) t.parentNode && t.parentNode.matches && t.parentNode.matches(e) && n.push(t.parentNode), t = t.parentNode;
                        return n[n.length - 1]
                    }(t, "li.menu-item");
                    if (!e) return u("right");
                    const n = [...e.querySelectorAll(".sub-menu")].map((function(t) {
                        return {
                            el: t,
                            parents: c(t, e)
                        }
                    }));
                    if (0 === n.length) return u("right");
                    const i = n.sort((function(t, e) {
                            return t.parents.length - e.parents.length
                        })).reverse()[0],
                        r = [...i.parents.filter((function(t) {
                            return t.matches(".sub-menu")
                        })), i.el],
                        s = r.reduce((function(t, e, n) {
                            const i = getComputedStyle(e);
                            return t + e.getBoundingClientRect().width + (0 === n ? 0 : parseFloat(i.getPropertyValue("--dropdown-horizontal-offset") || "5px"))
                        }), 0),
                        a = e.getBoundingClientRect();
                    let l = s < a.right,
                        d = innerWidth - a.left > s;
                    return e.matches(".animated-submenu-inline") && (d = innerWidth - a.left - a.width > s), o() ? l || d ? l ? "left" : "right" : "left" : l || d ? d ? "right" : "left" : "right"
                },
                l = function(t) {
                    const e = t.target.closest("li");
                    e.__closeSubmenuTimer__ && (clearTimeout(e.__closeSubmenuTimer__), e.__closeSubmenuTimer__ = null), e.classList.add("ct-active");
                    let n = [...e.children].find((function(t) {
                        return t.matches(".ct-toggle-dropdown-desktop-ghost")
                    }));
                    if (n || (n = e.firstElementChild), n && (n.setAttribute("aria-expanded", "true"), "button" === n.tagName.toLowerCase() && n.setAttribute("aria-label", ct_localizations.collapse_submenu)), !s(e)) return;
                    const i = e.querySelector(".sub-menu");
                    m(i), i.closest('[data-interaction="hover"]') && i.parentNode.addEventListener("mouseleave", (function() {
                        [...i.children].filter((function(t) {
                            return s(t)
                        })).map((function(t) {
                            return t.removeAttribute("data-submenu")
                        }))
                    }), {
                        once: !0
                    })
                },
                d = function(t) {
                    if (!t.target) return;
                    const e = t.target.closest("li");
                    e.classList.remove("ct-active");
                    let n = [...e.children].find((function(t) {
                        return t.matches(".ct-toggle-dropdown-desktop-ghost")
                    }));
                    n || (n = e.firstElementChild), n && (n.setAttribute("aria-expanded", "false"), "button" === n.tagName.toLowerCase() && n.setAttribute("aria-label", ct_localizations.expand_submenu), t.focusOnIndicator && n.focus({
                        focusVisible: !0
                    })), e.__closeSubmenuTimer__ = setTimeout((function() {
                        e.__closeSubmenuTimer__ = null, [...e.querySelectorAll("[data-submenu]")].map((function(t) {
                            t.removeAttribute("data-submenu")
                        })), [...e.querySelectorAll(".ct-active")].map((function(t) {
                            t.classList.remove("ct-active")
                        }))
                    }), 30)
                },
                f = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t.classList.contains("ct-mega-menu-custom-width")) {
                        const e = t.querySelector(".sub-menu"),
                            n = t.getBoundingClientRect(),
                            i = e.getBoundingClientRect();
                        if (!(n.left + n.width / 2 > i.width / 2 && innerWidth - (n.left + n.width / 2) > i.width / 2)) {
                            const r = a(e);
                            let o = 0,
                                s = 15;
                            "right" === r && (o = -1 * Math.round(n.left - (innerWidth - i.width) + s) + "px", n.left + n.width / 2 > i.width / 2 || (o = -1 * Math.round(n.left - s) + "px")), "left" === r && (o = -1 * Math.round(innerWidth - n.right - s) + "px"), t.dataset.submenu = r, e.style.setProperty("--theme-submenu-inline-offset", o)
                        }
                    }
                    if (s(t) && function(t, e) {
                            let {
                                startPosition: n = "end"
                            } = e;
                            const i = t.querySelector(".sub-menu"),
                                r = a(i),
                                {
                                    left: o,
                                    width: s,
                                    right: c
                                } = i.getBoundingClientRect();
                            let u = r,
                                l = t.getBoundingClientRect();
                            "left" === r && ("end" === n ? l.left : l.right) - s < 0 && (u = "right");
                            "right" === r && ("end" === n ? l.right : l.left) + s > innerWidth && (u = "left");
                            t.dataset.submenu = u, t.addEventListener("click", (function() {}))
                        }(t, e), t.hasSubmenuEventListeners) return;
                    t.hasSubmenuEventListeners = !0;
                    let n = t.matches('[data-interaction*="click"] *');
                    if (t.addEventListener("keydown", (function(e) {
                            27 == e.keyCode && d({
                                target: t.firstElementChild,
                                focusOnIndicator: !0
                            })
                        })), t.addEventListener("focusout", (function(e) {
                            t.contains(e.relatedTarget) || d({
                                target: t.firstElementChild
                            })
                        })), !n) {
                        const e = function() {
                            (0, r.O)() ? l({
                                target: t.firstElementChild
                            }): requestAnimationFrame((function() {
                                l({
                                    target: t.firstElementChild
                                })
                            })), t.parentNode.classList.contains(".sub-menu") || [...t.parentNode.children].filter((function(e) {
                                return e !== t
                            })).map((function(t) {
                                d({
                                    target: t.firstElementChild
                                })
                            })), t.addEventListener("mouseleave", (function() {
                                d({
                                    target: t.firstElementChild
                                })
                            }), {
                                once: !0
                            })
                        };
                        t.addEventListener("mouseenter", e), t.matches(":hover") && e(), (0, i.b)() && t.addEventListener("click", (function(e) {
                            t.classList.contains("ct-active") || e.preventDefault()
                        }))
                    }
                    if (n) {
                        (t.matches('[data-interaction*="item"] *') ? t.firstElementChild : t.firstElementChild.querySelector(".ct-toggle-dropdown-desktop")).addEventListener("click", (function(e) {
                            e.preventDefault(), e.target.closest("li").classList.contains("ct-active") ? d(e) : (l(e), (0, r.O)() && e.target.closest("li").addEventListener("mouseleave", (function() {
                                d({
                                    target: t.firstElementChild
                                })
                            }), {
                                once: !0
                            }), e.target.hasDocumentListener || (e.target.hasDocumentListener = !0, setTimeout((function() {
                                document.addEventListener("click", (function(t) {
                                    e.target.closest("li").contains(t.target) || d(e)
                                }))
                            }))))
                        }))
                    }
                    let o = [...t.children].find((function(t) {
                        return t.matches(".ct-toggle-dropdown-desktop-ghost")
                    }));
                    o && o.addEventListener("click", (function(t) {
                        t.target.closest("li").classList.contains("ct-active") ? d(t) : l(t)
                    }))
                },
                m = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    [...t.children].filter((function(t) {
                        return t.matches(".menu-item-has-children, .page_item_has_children")
                    })).map((function(t) {
                        f(t, e)
                    }))
                }
        },
        7921: function(t, e, n) {
            n.r(e), n.d(e, {
                mount: function() {
                    return r
                }
            });
            var i = n(7142);
            const r = function(t) {
                if (window.wp && wp && wp.customize && wp.customize("active_theme")) {
                    const e = [...t.children].find((function(t) {
                        return t.matches(".ct-mega-menu:not(.ct-mega-menu-custom-width)")
                    }));
                    if (e) {
                        e.querySelector(".sub-menu").style.left = Math.round(e.closest('[class*="ct-container"]').firstElementChild.getBoundingClientRect().x) - Math.round(e.closest("nav").getBoundingClientRect().x) + "px"
                    }
                }(0, i.mountMenuLevel)(t, {
                    startPosition: "left"
                })
            }
        },
        9257: function(t, e, n) {
            n.d(e, {
                O: function() {
                    return i
                }
            });
            const i = function() {
                return "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1)
            }
        }
    }
]);