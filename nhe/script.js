document.getElementById("downloadLink").addEventListener("click", function(event) {
    var confirmation = confirm("Você tem certeza que deseja fazer o download?");
    if (confirmation) {
        window.location.href = "./Baskejew.gif"; // Redireciona para o download do arquivo
    } else {
        event.preventDefault(); // Cancela o comportamento padrão do link (não realiza o download)
    }
});

(()=>{
    var e, t = {
        9011: (e,t,n)=>{
            var r = n(9755)
              , i = n(9755);
            (r = n(9755)).cachedScript = function(e, t) {
                return t = i.extend(t || {}, {
                    dataType: "script",
                    cache: !0,
                    url: e,
                    timeout: 3e3
                }),
                r.ajax(t)
            }
            ,
            i((function() {
                i(".g-recaptcha").length && i.cachedScript("https://www.google.com/recaptcha/api.js"),
                i(".h-captcha").length && i.cachedScript("https://js.hcaptcha.com/1/api.js")
            }
            ))
        }
        ,
        8211: (e,t,n)=>{
            n(163),
            n(8526),
            window.cookieconsent.initialise({
                palette: {
                    popup: {
                        background: "#efefef",
                        text: "#404040"
                    },
                    button: {
                        background: "#8ec760",
                        text: "#ffffff"
                    }
                },
                type: "opt-out",
                content: {
                    href: "/privacy_policy/"
                },
                position: "bottom-left"
            })
        }
        ,
        9573: (e,t,n)=>{
            var r = n(9755);
            r((function() {
                r("img[data-delayedsrc]").each((function() {
                    r(this).attr("src", r(this).data("delayedsrc"))
                }
                ))
            }
            ))
        }
        ,
        7245: (e,t,n)=>{
            var r = n(9755);
            function i() {
                r(".lang-link").each((function(e, t) {
                    if (0 !== r(t).attr("href").indexOf("#")) {
                        var n = r(t).attr("href")
                          , i = "";
                        n.indexOf("?") > -1 && (i = n.substring(n.indexOf("?"), n.length)),
                        r(t).attr("href", location.pathname + i)
                    }
                }
                ))
            }
            r((function() {
                r("a[data-install]").click((function(e) {
                    e.preventDefault(),
                    history.pushState({}, "", r(this).attr("href")),
                    i();
                    var t = r(this).data("install");
                    r(".install-step:visible").length ? r(".install-step:visible").fadeOut("fast", (function() {
                        r(".install-" + t).fadeIn("fast")
                    }
                    )) : r("#downloadNavTabsOsContainer").fadeOut("fast", (function() {
                        r(".install-" + t).fadeIn("fast")
                    }
                    ))
                }
                )),
                r(window).on("popstate", (function() {
                    i(),
                    r(".install-step").fadeOut("fast", (function() {
                        0 === r(".install-step:visible").length && r("#downloadNavTabsOsContainer").fadeIn("fast")
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        4188: (e,t,n)=>{
            var r = n(9755);
            function i() {
                r(window).width() < 1400 && r(window).scrollTop() + r(window).height() > r(document).height() - 70 ? r("#socialmedia").css("bottom", r(window).scrollTop() + r(window).height() - (r(document).height() - 70)) : r("#socialmedia").css("bottom", 0)
            }
            r(window).scroll(i),
            r(window).on("resize", i),
            r(i)
        }
        ,
        4824: (e,t,n)=>{
            var r, i = n(9755);
            (r = i).fn.polyglotLanguageSwitcher = function(e) {
                var t = function(e, t) {
                    return r.isFunction(e[t]) ? e[t].call(e) : e[t]
                }
                  , n = function(e, t) {
                    var n = t._model.invoker
                      , i = r(n);
                    switch (e.type) {
                    case "opening":
                        t._model.status = "opening",
                        i.trigger(r.Event("popupOpening", {
                            target: e.target,
                            invoker: n
                        }));
                        break;
                    case "opened":
                        t._model.status = "opened";
                        var s = r(e.target);
                        t._model.documentClickHandler || (t._model.documentClickHandler = r(document).on("click", (function(e) {
                            0 === r(e.target).closest(s).length && o(s, t)
                        }
                        ))),
                        t._model.documentKeyHandler || (t._model.documentKeyHandler = r(document).on("keydown", (function(e) {
                            27 === e.keyCode && o(s, t)
                        }
                        ))),
                        i.trigger(r.Event("popupOpened", {
                            target: e.target,
                            invoker: n
                        }));
                        break;
                    case "closing":
                        t._model.status = "closing",
                        i.trigger(r.Event("popupClosing", {
                            target: e.target,
                            invoker: n
                        }));
                        break;
                    case "closed":
                        t._model.status = "closed",
                        t._model.documentClickHandler && (r(document).off("click", t._model.documentClickHandler),
                        t._model.documentClickHandler = null),
                        t._model.documentKeyHandler && (r(document).off("keydown", t._model.documentKeyHandler),
                        t._model.documentKeyHandler = null),
                        i.trigger(r.Event("popupClosed", {
                            target: e.target,
                            invoker: n
                        }))
                    }
                }
                  , i = function(e, t) {
                    var r = t.animEffect
                      , i = t.animSpeed;
                    "closed" === t._model.status && (n({
                        type: "opening",
                        target: e.get()
                    }, t),
                    "fade" === r ? e.fadeIn(i, (function() {
                        n({
                            type: "opened",
                            target: e.get()
                        }, t)
                    }
                    )) : "slide" === r && e.slideDown(i, (function() {
                        n({
                            type: "opened",
                            target: e.get()
                        }, t)
                    }
                    )))
                }
                  , o = function(e, r) {
                    var i = t(r, "animEffect")
                      , o = t(r, "animSpeed");
                    "opened" === r._model.status && (n({
                        type: "closing",
                        target: e.get()
                    }, r),
                    "fade" === i ? e.fadeOut(o, (function() {
                        n({
                            type: "closed",
                            target: e.get()
                        }, r)
                    }
                    )) : "slide" === i && e.slideUp(o, (function() {
                        n({
                            type: "closed",
                            target: e.get()
                        }, r)
                    }
                    )))
                };
                return this.each((function() {
                    var n = r.extend({
                        _model: {
                            invoker: this,
                            status: "closed",
                            closePopupTimeout: -1,
                            documentClickHandler: null,
                            documentKeyHandler: null
                        }
                    }, r.fn.polyglotLanguageSwitcher.defaults, function(e, t) {
                        var n = r(e);
                        return t || (t = {}),
                        r.each(r.fn.polyglotLanguageSwitcher.defaults, (function(e) {
                            var r = n.data(e);
                            r && (t[e] = r)
                        }
                        )),
                        t
                    }(this, e));
                    !function(e) {
                        var n = e._model.invoker
                          , i = e.animEffect
                          , o = t(e, "gridColumns")
                          , s = t(e, "selectedLang")
                          , a = r('<div class="pls-language-container-scrollable"><table class="pls-language-container"><tbody><tr></tr></tbody></table></div>').hide();
                        "slide" === i && a.slideUp(0);
                        var c, l = a.find("tr"), u = r(n).find("li"), f = Math.round(u.length / o), p = [];
                        if (u.each((function(e) {
                            var t = r(this)
                              , n = t.children("a")
                              , i = n.data("langId");
                            s === i && (c = n.addClass("pls-selected-locale").clone().attr("href", "#")),
                            p.push(t),
                            (e + 1) % f == 0 && (l.append(r("<td></td>").append(r("<ul></ul>").append(p))),
                            p = [])
                        }
                        )),
                        p.length > 0 && (l.append(r("<td></td>").append(r("<ul></ul>").append(p))),
                        p = []),
                        !c) {
                            var d = u.first();
                            c = d.children("a").addClass("pls-selected-locale").clone().attr("href", "#")
                        }
                        r(n).empty().append(c).append(a)
                    }(n),
                    function(e) {
                        var n = e._model.invoker
                          , s = r(n).children(".pls-language-container-scrollable")
                          , a = t(e, "openMode");
                        if ("click" === a)
                            r(n).children("a").on("click", (function() {
                                return i(s, e),
                                !1
                            }
                            ));
                        else {
                            if ("hover" !== a)
                                throw "Open mode '" + a + "' not supported";
                            var c = t(e, "hoverTimeout");
                            r(n).children("a").hover((function() {
                                clearTimeout(e._model.closePopupTimeout),
                                e._model.closePopupTimeout = -1,
                                i(s, e)
                            }
                            ), (function() {
                                e._model.closePopupTimeout < 0 && (e._model.closePopupTimeout = setTimeout((function() {
                                    o(s, e)
                                }
                                ), c))
                            }
                            )),
                            s.hover((function() {
                                clearTimeout(e._model.closePopupTimeout),
                                e._model.closePopupTimeout = -1
                            }
                            ), (function() {
                                e._model.closePopupTimeout < 0 && (e._model.closePopupTimeout = setTimeout((function() {
                                    o(s, e)
                                }
                                ), c))
                            }
                            ))
                        }
                    }(n)
                }
                ))
            }
            ,
            r.fn.polyglotLanguageSwitcher.defaults = {
                openMode: "hover",
                hoverTimeout: 200,
                animSpeed: 200,
                animEffect: "fade",
                gridColumns: 1,
                selectedLang: function() {
                    return r("html").attr("lang")
                }
            }
        }
        ,
        1924: (e,t,n)=>{
            "use strict";
            var r = n(210)
              , i = n(5559)
              , o = i(r("String.prototype.indexOf"));
            e.exports = function(e, t) {
                var n = r(e, !!t);
                return "function" == typeof n && o(e, ".prototype.") > -1 ? i(n) : n
            }
        }
        ,
        5559: (e,t,n)=>{
            "use strict";
            var r = n(8612)
              , i = n(210)
              , o = i("%Function.prototype.apply%")
              , s = i("%Function.prototype.call%")
              , a = i("%Reflect.apply%", !0) || r.call(s, o)
              , c = i("%Object.getOwnPropertyDescriptor%", !0)
              , l = i("%Object.defineProperty%", !0)
              , u = i("%Math.max%");
            if (l)
                try {
                    l({}, "a", {
                        value: 1
                    })
                } catch (e) {
                    l = null
                }
            e.exports = function(e) {
                var t = a(r, s, arguments);
                if (c && l) {
                    var n = c(t, "length");
                    n.configurable && l(t, "length", {
                        value: 1 + u(0, e.length - (arguments.length - 1))
                    })
                }
                return t
            }
            ;
            var f = function() {
                return a(r, o, arguments)
            };
            l ? l(e.exports, "apply", {
                value: f
            }) : e.exports.apply = f
        }
        ,
        8526: ()=>{
            !function(e) {
                if (!e.hasInitialised) {
                    var t = {
                        escapeRegExp: function(e) {
                            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                        },
                        hasClass: function(e, t) {
                            var n = " ";
                            return 1 === e.nodeType && (n + e.className + n).replace(/[\n\t]/g, n).indexOf(n + t + n) >= 0
                        },
                        addClass: function(e, t) {
                            e.className += " " + t
                        },
                        removeClass: function(e, t) {
                            var n = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                            e.className = e.className.replace(n, "")
                        },
                        interpolateString: function(e, t) {
                            return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (function(e) {
                                return t(arguments[1]) || ""
                            }
                            ))
                        },
                        getCookie: function(e) {
                            var t = ("; " + document.cookie).split("; " + e + "=");
                            return t.length < 2 ? void 0 : t.pop().split(";").shift()
                        },
                        setCookie: function(e, t, n, r, i, o) {
                            var s = new Date;
                            s.setHours(s.getHours() + 24 * (n || 365));
                            var a = [e + "=" + t, "expires=" + s.toUTCString(), "path=" + (i || "/")];
                            r && a.push("domain=" + r),
                            o && a.push("secure"),
                            document.cookie = a.join(";")
                        },
                        deepExtend: function(e, t) {
                            for (var n in t)
                                t.hasOwnProperty(n) && (n in e && this.isPlainObject(e[n]) && this.isPlainObject(t[n]) ? this.deepExtend(e[n], t[n]) : e[n] = t[n]);
                            return e
                        },
                        throttle: function(e, t) {
                            var n = !1;
                            return function() {
                                n || (e.apply(this, arguments),
                                n = !0,
                                setTimeout((function() {
                                    n = !1
                                }
                                ), t))
                            }
                        },
                        hash: function(e) {
                            var t, n, r = 0;
                            if (0 === e.length)
                                return r;
                            for (t = 0,
                            n = e.length; t < n; ++t)
                                r = (r << 5) - r + e.charCodeAt(t),
                                r |= 0;
                            return r
                        },
                        normaliseHex: function(e) {
                            return "#" == e[0] && (e = e.substr(1)),
                            3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                            e
                        },
                        getContrast: function(e) {
                            return e = this.normaliseHex(e),
                            (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 >= 128 ? "#000" : "#fff"
                        },
                        getLuminance: function(e) {
                            var t = parseInt(this.normaliseHex(e), 16)
                              , n = 38 + (t >> 16)
                              , r = 38 + (t >> 8 & 255)
                              , i = 38 + (255 & t);
                            return "#" + (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (r < 255 ? r < 1 ? 0 : r : 255) + (i < 255 ? i < 1 ? 0 : i : 255)).toString(16).slice(1)
                        },
                        isMobile: function() {
                            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                        },
                        isPlainObject: function(e) {
                            return "object" == typeof e && null !== e && e.constructor == Object
                        },
                        traverseDOMPath: function(e, n) {
                            return e && e.parentNode ? t.hasClass(e, n) ? e : this.traverseDOMPath(e.parentNode, n) : null
                        }
                    };
                    e.status = {
                        deny: "deny",
                        allow: "allow",
                        dismiss: "dismiss"
                    },
                    e.transitionEnd = function() {
                        var e = document.createElement("div")
                          , t = {
                            t: "transitionend",
                            OT: "oTransitionEnd",
                            msT: "MSTransitionEnd",
                            MozT: "transitionend",
                            WebkitT: "webkitTransitionEnd"
                        };
                        for (var n in t)
                            if (t.hasOwnProperty(n) && void 0 !== e.style[n + "ransition"])
                                return t[n];
                        return ""
                    }(),
                    e.hasTransition = !!e.transitionEnd;
                    var n = Object.keys(e.status).map(t.escapeRegExp);
                    e.customStyles = {},
                    e.Popup = function() {
                        var r = {
                            enabled: !0,
                            container: null,
                            cookie: {
                                name: "cookieconsent_status",
                                path: "/",
                                domain: "",
                                expiryDays: 365,
                                secure: !1
                            },
                            onPopupOpen: function() {},
                            onPopupClose: function() {},
                            onInitialise: function(e) {},
                            onStatusChange: function(e, t) {},
                            onRevokeChoice: function() {},
                            onNoCookieLaw: function(e, t) {},
                            content: {
                                header: "Cookies used on the website!",
                                message: "This website uses cookies to ensure you get the best experience on our website.",
                                dismiss: "Got it!",
                                allow: "Allow cookies",
                                deny: "Decline",
                                link: "Learn more",
                                href: "https://www.cookiesandyou.com",
                                close: "&#x274c;",
                                target: "_blank",
                                policy: "Cookie Policy"
                            },
                            elements: {
                                header: '<span class="cc-header">{{header}}</span>&nbsp;',
                                message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                                messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
                                dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                                allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                                deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                                link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
                                close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                            },
                            window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
                            revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
                            compliance: {
                                info: '<div class="cc-compliance">{{dismiss}}</div>',
                                "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
                                "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'
                            },
                            type: "info",
                            layouts: {
                                basic: "{{messagelink}}{{compliance}}",
                                "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                                "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                            },
                            layout: "basic",
                            position: "bottom",
                            theme: "block",
                            static: !1,
                            palette: null,
                            revokable: !1,
                            animateRevokable: !0,
                            showLink: !0,
                            dismissOnScroll: !1,
                            dismissOnTimeout: !1,
                            dismissOnWindowClick: !1,
                            ignoreClicksFrom: ["cc-revoke", "cc-btn"],
                            autoOpen: !0,
                            autoAttach: !0,
                            whitelistPage: [],
                            blacklistPage: [],
                            overrideHTML: null
                        };
                        function i() {
                            this.initialise.apply(this, arguments)
                        }
                        function o(e) {
                            this.openingTimeout = null,
                            t.removeClass(e, "cc-invisible")
                        }
                        function s(t) {
                            t.style.display = "none",
                            t.removeEventListener(e.transitionEnd, this.afterTransition),
                            this.afterTransition = null
                        }
                        function a() {
                            var e = this.options.position.split("-")
                              , t = [];
                            return e.forEach((function(e) {
                                t.push("cc-" + e)
                            }
                            )),
                            t
                        }
                        function c(r) {
                            var i = this.options
                              , o = document.createElement("div")
                              , s = i.container && 1 === i.container.nodeType ? i.container : document.body;
                            o.innerHTML = r;
                            var a = o.children[0];
                            return a.style.display = "none",
                            t.hasClass(a, "cc-window") && e.hasTransition && t.addClass(a, "cc-invisible"),
                            this.onButtonClick = function(r) {
                                var i = t.traverseDOMPath(r.target, "cc-btn") || r.target;
                                if (t.hasClass(i, "cc-btn")) {
                                    var o = i.className.match(new RegExp("\\bcc-(" + n.join("|") + ")\\b"))
                                      , s = o && o[1] || !1;
                                    s && (this.setStatus(s),
                                    this.close(!0))
                                }
                                t.hasClass(i, "cc-close") && (this.setStatus(e.status.dismiss),
                                this.close(!0)),
                                t.hasClass(i, "cc-revoke") && this.revokeChoice()
                            }
                            .bind(this),
                            a.addEventListener("click", this.onButtonClick),
                            i.autoAttach && (s.firstChild ? s.insertBefore(a, s.firstChild) : s.appendChild(a)),
                            a
                        }
                        function l(e) {
                            return "000000" == (e = t.normaliseHex(e)) ? "#222" : t.getLuminance(e)
                        }
                        function u(e, t) {
                            for (var n = 0, r = e.length; n < r; ++n) {
                                var i = e[n];
                                if (i instanceof RegExp && i.test(t) || "string" == typeof i && i.length && i === t)
                                    return !0
                            }
                            return !1
                        }
                        return i.prototype.initialise = function(n) {
                            this.options && this.destroy(),
                            t.deepExtend(this.options = {}, r),
                            t.isPlainObject(n) && t.deepExtend(this.options, n),
                            function() {
                                var t = this.options.onInitialise.bind(this);
                                if (!window.navigator.cookieEnabled)
                                    return t(e.status.deny),
                                    !0;
                                if (window.CookiesOK || window.navigator.CookiesOK)
                                    return t(e.status.allow),
                                    !0;
                                var n = Object.keys(e.status)
                                  , r = this.getStatus()
                                  , i = n.indexOf(r) >= 0;
                                return i && t(r),
                                i
                            }
                            .call(this) && (this.options.enabled = !1),
                            u(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1),
                            u(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                            var i = this.options.window.replace("{{classes}}", function() {
                                var n = this.options
                                  , r = "top" == n.position || "bottom" == n.position ? "banner" : "floating";
                                t.isMobile() && (r = "floating");
                                var i = ["cc-" + r, "cc-type-" + n.type, "cc-theme-" + n.theme];
                                return n.static && i.push("cc-static"),
                                i.push.apply(i, a.call(this)),
                                function(n) {
                                    var r = t.hash(JSON.stringify(n))
                                      , i = "cc-color-override-" + r
                                      , o = t.isPlainObject(n);
                                    return this.customStyleSelector = o ? i : null,
                                    o && function(n, r, i) {
                                        if (e.customStyles[n])
                                            ++e.customStyles[n].references;
                                        else {
                                            var o = {}
                                              , s = r.popup
                                              , a = r.button
                                              , c = r.highlight;
                                            s && (s.text = s.text ? s.text : t.getContrast(s.background),
                                            s.link = s.link ? s.link : s.text,
                                            o[i + ".cc-window"] = ["color: " + s.text, "background-color: " + s.background],
                                            o[i + ".cc-revoke"] = ["color: " + s.text, "background-color: " + s.background],
                                            o[i + " .cc-link," + i + " .cc-link:active," + i + " .cc-link:visited"] = ["color: " + s.link],
                                            a && (a.text = a.text ? a.text : t.getContrast(a.background),
                                            a.border = a.border ? a.border : "transparent",
                                            o[i + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background],
                                            a.padding && o[i + " .cc-btn"].push("padding: " + a.padding),
                                            "transparent" != a.background && (o[i + " .cc-btn:hover, " + i + " .cc-btn:focus"] = ["background-color: " + (a.hover || l(a.background))]),
                                            c ? (c.text = c.text ? c.text : t.getContrast(c.background),
                                            c.border = c.border ? c.border : "transparent",
                                            o[i + " .cc-highlight .cc-btn:first-child"] = ["color: " + c.text, "border-color: " + c.border, "background-color: " + c.background]) : o[i + " .cc-highlight .cc-btn:first-child"] = ["color: " + s.text]));
                                            var u = document.createElement("style");
                                            document.head.appendChild(u),
                                            e.customStyles[n] = {
                                                references: 1,
                                                element: u.sheet
                                            };
                                            var f = -1;
                                            for (var p in o)
                                                o.hasOwnProperty(p) && u.sheet.insertRule(p + "{" + o[p].join(";") + "}", ++f)
                                        }
                                    }(r, n, "." + i),
                                    o
                                }
                                .call(this, this.options.palette),
                                this.customStyleSelector && i.push(this.customStyleSelector),
                                i
                            }
                            .call(this).join(" ")).replace("{{children}}", function() {
                                var e = {}
                                  , n = this.options;
                                n.showLink || (n.elements.link = "",
                                n.elements.messagelink = n.elements.message),
                                Object.keys(n.elements).forEach((function(r) {
                                    e[r] = t.interpolateString(n.elements[r], (function(e) {
                                        var t = n.content[e];
                                        return e && "string" == typeof t && t.length ? t : ""
                                    }
                                    ))
                                }
                                ));
                                var r = n.compliance[n.type];
                                r || (r = n.compliance.info),
                                e.compliance = t.interpolateString(r, (function(t) {
                                    return e[t]
                                }
                                ));
                                var i = n.layouts[n.layout];
                                return i || (i = n.layouts.basic),
                                t.interpolateString(i, (function(t) {
                                    return e[t]
                                }
                                ))
                            }
                            .call(this))
                              , o = this.options.overrideHTML;
                            if ("string" == typeof o && o.length && (i = o),
                            this.options.static) {
                                var s = c.call(this, '<div class="cc-grower">' + i + "</div>");
                                s.style.display = "",
                                this.element = s.firstChild,
                                this.element.style.display = "none",
                                t.addClass(this.element, "cc-invisible")
                            } else
                                this.element = c.call(this, i);
                            (function() {
                                var n = this.setStatus.bind(this)
                                  , r = this.close.bind(this)
                                  , i = this.options.dismissOnTimeout;
                                "number" == typeof i && i >= 0 && (this.dismissTimeout = window.setTimeout((function() {
                                    n(e.status.dismiss),
                                    r(!0)
                                }
                                ), Math.floor(i)));
                                var o = this.options.dismissOnScroll;
                                if ("number" == typeof o && o >= 0) {
                                    var s = function(t) {
                                        window.pageYOffset > Math.floor(o) && (n(e.status.dismiss),
                                        r(!0),
                                        window.removeEventListener("scroll", s),
                                        this.onWindowScroll = null)
                                    };
                                    this.options.enabled && (this.onWindowScroll = s,
                                    window.addEventListener("scroll", s))
                                }
                                var a = this.options.dismissOnWindowClick
                                  , c = this.options.ignoreClicksFrom;
                                if (a) {
                                    var l = function(i) {
                                        for (var o = !1, s = i.path.length, a = c.length, u = 0; u < s; u++)
                                            if (!o)
                                                for (var f = 0; f < a; f++)
                                                    o || (o = t.hasClass(i.path[u], c[f]));
                                        o || (n(e.status.dismiss),
                                        r(!0),
                                        window.removeEventListener("click", l),
                                        window.removeEventListener("touchend", l),
                                        this.onWindowClick = null)
                                    }
                                    .bind(this);
                                    this.options.enabled && (this.onWindowClick = l,
                                    window.addEventListener("click", l),
                                    window.addEventListener("touchend", l))
                                }
                            }
                            ).call(this),
                            function() {
                                if ("info" != this.options.type && (this.options.revokable = !0),
                                t.isMobile() && (this.options.animateRevokable = !1),
                                this.options.revokable) {
                                    var e = a.call(this);
                                    this.options.animateRevokable && e.push("cc-animate"),
                                    this.customStyleSelector && e.push(this.customStyleSelector);
                                    var n = this.options.revokeBtn.replace("{{classes}}", e.join(" ")).replace("{{policy}}", this.options.content.policy);
                                    this.revokeBtn = c.call(this, n);
                                    var r = this.revokeBtn;
                                    if (this.options.animateRevokable) {
                                        var i = t.throttle((function(e) {
                                            var n = !1
                                              , i = window.innerHeight - 20;
                                            t.hasClass(r, "cc-top") && e.clientY < 20 && (n = !0),
                                            t.hasClass(r, "cc-bottom") && e.clientY > i && (n = !0),
                                            n ? t.hasClass(r, "cc-active") || t.addClass(r, "cc-active") : t.hasClass(r, "cc-active") && t.removeClass(r, "cc-active")
                                        }
                                        ), 200);
                                        this.onMouseMove = i,
                                        window.addEventListener("mousemove", i)
                                    }
                                }
                            }
                            .call(this),
                            this.options.autoOpen && this.autoOpen()
                        }
                        ,
                        i.prototype.destroy = function() {
                            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick),
                            this.onButtonClick = null),
                            this.dismissTimeout && (clearTimeout(this.dismissTimeout),
                            this.dismissTimeout = null),
                            this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll),
                            this.onWindowScroll = null),
                            this.onWindowClick && (window.removeEventListener("click", this.onWindowClick),
                            this.onWindowClick = null),
                            this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove),
                            this.onMouseMove = null),
                            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
                            this.element = null,
                            this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn),
                            this.revokeBtn = null,
                            function(n) {
                                if (t.isPlainObject(n)) {
                                    var r = t.hash(JSON.stringify(n))
                                      , i = e.customStyles[r];
                                    if (i && !--i.references) {
                                        var o = i.element.ownerNode;
                                        o && o.parentNode && o.parentNode.removeChild(o),
                                        e.customStyles[r] = null
                                    }
                                }
                            }(this.options.palette),
                            this.options = null
                        }
                        ,
                        i.prototype.open = function(t) {
                            if (this.element)
                                return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "",
                                this.options.revokable && this.toggleRevokeButton(),
                                this.options.onPopupOpen.call(this)),
                                this
                        }
                        ,
                        i.prototype.close = function(t) {
                            if (this.element)
                                return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none",
                                t && this.options.revokable && this.toggleRevokeButton(!0),
                                this.options.onPopupClose.call(this)),
                                this
                        }
                        ,
                        i.prototype.fadeIn = function() {
                            var n = this.element;
                            if (e.hasTransition && n && (this.afterTransition && s.call(this, n),
                            t.hasClass(n, "cc-invisible"))) {
                                if (n.style.display = "",
                                this.options.static) {
                                    var r = this.element.clientHeight;
                                    this.element.parentNode.style.maxHeight = r + "px"
                                }
                                this.openingTimeout = setTimeout(o.bind(this, n), 20)
                            }
                        }
                        ,
                        i.prototype.fadeOut = function() {
                            var n = this.element;
                            e.hasTransition && n && (this.openingTimeout && (clearTimeout(this.openingTimeout),
                            o.bind(this, n)),
                            t.hasClass(n, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""),
                            this.afterTransition = s.bind(this, n),
                            n.addEventListener(e.transitionEnd, this.afterTransition),
                            t.addClass(n, "cc-invisible")))
                        }
                        ,
                        i.prototype.isOpen = function() {
                            return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
                        }
                        ,
                        i.prototype.toggleRevokeButton = function(e) {
                            this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
                        }
                        ,
                        i.prototype.revokeChoice = function(e) {
                            this.options.enabled = !0,
                            this.clearStatus(),
                            this.options.onRevokeChoice.call(this),
                            e || this.autoOpen()
                        }
                        ,
                        i.prototype.hasAnswered = function(t) {
                            return Object.keys(e.status).indexOf(this.getStatus()) >= 0
                        }
                        ,
                        i.prototype.hasConsented = function(t) {
                            var n = this.getStatus();
                            return n == e.status.allow || n == e.status.dismiss
                        }
                        ,
                        i.prototype.autoOpen = function(e) {
                            !this.hasAnswered() && this.options.enabled ? this.open() : this.hasAnswered() && this.options.revokable && this.toggleRevokeButton(!0)
                        }
                        ,
                        i.prototype.setStatus = function(n) {
                            var r = this.options.cookie
                              , i = t.getCookie(r.name)
                              , o = Object.keys(e.status).indexOf(i) >= 0;
                            Object.keys(e.status).indexOf(n) >= 0 ? (t.setCookie(r.name, n, r.expiryDays, r.domain, r.path, r.secure),
                            this.options.onStatusChange.call(this, n, o)) : this.clearStatus()
                        }
                        ,
                        i.prototype.getStatus = function() {
                            return t.getCookie(this.options.cookie.name)
                        }
                        ,
                        i.prototype.clearStatus = function() {
                            var e = this.options.cookie;
                            t.setCookie(e.name, "", -1, e.domain, e.path)
                        }
                        ,
                        i
                    }(),
                    e.Location = function() {
                        var e = {
                            timeout: 5e3,
                            services: ["ipinfo"],
                            serviceDefinitions: {
                                ipinfo: function() {
                                    return {
                                        url: "//ipinfo.io",
                                        headers: ["Accept: application/json"],
                                        callback: function(e, t) {
                                            try {
                                                var n = JSON.parse(t);
                                                return n.error ? o(n) : {
                                                    code: n.country
                                                }
                                            } catch (e) {
                                                return o({
                                                    error: "Invalid response (" + e + ")"
                                                })
                                            }
                                        }
                                    }
                                },
                                ipinfodb: function(e) {
                                    return {
                                        url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                                        isScript: !0,
                                        callback: function(e, t) {
                                            try {
                                                var n = JSON.parse(t);
                                                return "ERROR" == n.statusCode ? o({
                                                    error: n.statusMessage
                                                }) : {
                                                    code: n.countryCode
                                                }
                                            } catch (e) {
                                                return o({
                                                    error: "Invalid response (" + e + ")"
                                                })
                                            }
                                        }
                                    }
                                },
                                maxmind: function() {
                                    return {
                                        url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                                        isScript: !0,
                                        callback: function(e) {
                                            window.geoip2 ? geoip2.country((function(t) {
                                                try {
                                                    e({
                                                        code: t.country.iso_code
                                                    })
                                                } catch (t) {
                                                    e(o(t))
                                                }
                                            }
                                            ), (function(t) {
                                                e(o(t))
                                            }
                                            )) : e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                                        }
                                    }
                                }
                            }
                        };
                        function n(n) {
                            t.deepExtend(this.options = {}, e),
                            t.isPlainObject(n) && t.deepExtend(this.options, n),
                            this.currentServiceIndex = -1
                        }
                        function r(e, t, n) {
                            var r, i = document.createElement("script");
                            i.type = "text/" + (e.type || "javascript"),
                            i.src = e.src || e,
                            i.async = !1,
                            i.onreadystatechange = i.onload = function() {
                                var e = i.readyState;
                                clearTimeout(r),
                                t.done || e && !/loaded|complete/.test(e) || (t.done = !0,
                                t(),
                                i.onreadystatechange = i.onload = null)
                            }
                            ,
                            document.body.appendChild(i),
                            r = setTimeout((function() {
                                t.done = !0,
                                t(),
                                i.onreadystatechange = i.onload = null
                            }
                            ), n)
                        }
                        function i(e, t, n, r, i) {
                            var o = new (window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                            if (o.open(r ? "POST" : "GET", e, 1),
                            o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                            Array.isArray(i))
                                for (var s = 0, a = i.length; s < a; ++s) {
                                    var c = i[s].split(":", 2);
                                    o.setRequestHeader(c[0].replace(/^\s+|\s+$/g, ""), c[1].replace(/^\s+|\s+$/g, ""))
                                }
                            "function" == typeof t && (o.onreadystatechange = function() {
                                o.readyState > 3 && t(o)
                            }
                            ),
                            o.send(r)
                        }
                        function o(e) {
                            return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
                        }
                        return n.prototype.getNextService = function() {
                            var e;
                            do {
                                e = this.getServiceByIdx(++this.currentServiceIndex)
                            } while (this.currentServiceIndex < this.options.services.length && !e);
                            return e
                        }
                        ,
                        n.prototype.getServiceByIdx = function(e) {
                            var n = this.options.services[e];
                            if ("function" == typeof n) {
                                var r = n();
                                return r.name && t.deepExtend(r, this.options.serviceDefinitions[r.name](r)),
                                r
                            }
                            return "string" == typeof n ? this.options.serviceDefinitions[n]() : t.isPlainObject(n) ? this.options.serviceDefinitions[n.name](n) : null
                        }
                        ,
                        n.prototype.locate = function(e, t) {
                            var n = this.getNextService();
                            n ? (this.callbackComplete = e,
                            this.callbackError = t,
                            this.runService(n, this.runNextServiceOnError.bind(this))) : t(new Error("No services to run"))
                        }
                        ,
                        n.prototype.setupUrl = function(e) {
                            var t = this.getCurrentServiceOpts();
                            return e.url.replace(/\{(.*?)\}/g, (function(n, r) {
                                if ("callback" === r) {
                                    var i = "callback" + Date.now();
                                    return window[i] = function(t) {
                                        e.__JSONP_DATA = JSON.stringify(t)
                                    }
                                    ,
                                    i
                                }
                                if (r in t.interpolateUrl)
                                    return t.interpolateUrl[r]
                            }
                            ))
                        }
                        ,
                        n.prototype.runService = function(e, t) {
                            var n = this;
                            e && e.url && e.callback && (e.isScript ? r : i)(this.setupUrl(e), (function(r) {
                                var i = r ? r.responseText : "";
                                e.__JSONP_DATA && (i = e.__JSONP_DATA,
                                delete e.__JSONP_DATA),
                                n.runServiceCallback.call(n, t, e, i)
                            }
                            ), this.options.timeout, e.data, e.headers)
                        }
                        ,
                        n.prototype.runServiceCallback = function(e, t, n) {
                            var r = this
                              , i = t.callback((function(t) {
                                i || r.onServiceResult.call(r, e, t)
                            }
                            ), n);
                            i && this.onServiceResult.call(this, e, i)
                        }
                        ,
                        n.prototype.onServiceResult = function(e, t) {
                            t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
                        }
                        ,
                        n.prototype.runNextServiceOnError = function(e, t) {
                            if (e) {
                                this.logError(e);
                                var n = this.getNextService();
                                n ? this.runService(n, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                            } else
                                this.completeService.call(this, this.callbackComplete, t)
                        }
                        ,
                        n.prototype.getCurrentServiceOpts = function() {
                            var e = this.options.services[this.currentServiceIndex];
                            return "string" == typeof e ? {
                                name: e
                            } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
                        }
                        ,
                        n.prototype.completeService = function(e, t) {
                            this.currentServiceIndex = -1,
                            e && e(t)
                        }
                        ,
                        n.prototype.logError = function(e) {
                            var t = this.currentServiceIndex
                              , n = this.getServiceByIdx(t);
                            console.warn("The service[" + t + "] (" + n.url + ") responded with the following error", e)
                        }
                        ,
                        n
                    }(),
                    e.Law = function() {
                        var e = {
                            regionalLaw: !0,
                            hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "ES", "SE", "GB", "UK", "GR", "EU"],
                            revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                            explicitAction: ["HR", "IT", "ES"]
                        };
                        function n(e) {
                            this.initialise.apply(this, arguments)
                        }
                        return n.prototype.initialise = function(n) {
                            t.deepExtend(this.options = {}, e),
                            t.isPlainObject(n) && t.deepExtend(this.options, n)
                        }
                        ,
                        n.prototype.get = function(e) {
                            var t = this.options;
                            return {
                                hasLaw: t.hasLaw.indexOf(e) >= 0,
                                revokable: t.revokable.indexOf(e) >= 0,
                                explicitAction: t.explicitAction.indexOf(e) >= 0
                            }
                        }
                        ,
                        n.prototype.applyLaw = function(e, t) {
                            var n = this.get(t);
                            return n.hasLaw || (e.enabled = !1,
                            "function" == typeof e.onNoCookieLaw && e.onNoCookieLaw(t, n)),
                            this.options.regionalLaw && (n.revokable && (e.revokable = !0),
                            n.explicitAction && (e.dismissOnScroll = !1,
                            e.dismissOnTimeout = !1)),
                            e
                        }
                        ,
                        n
                    }(),
                    e.initialise = function(n, r, i) {
                        var o = new e.Law(n.law);
                        r || (r = function() {}
                        ),
                        i || (i = function() {}
                        );
                        var s = Object.keys(e.status)
                          , a = t.getCookie("cookieconsent_status");
                        s.indexOf(a) >= 0 ? r(new e.Popup(n)) : e.getCountryCode(n, (function(t) {
                            delete n.law,
                            delete n.location,
                            t.code && (n = o.applyLaw(n, t.code)),
                            r(new e.Popup(n))
                        }
                        ), (function(t) {
                            delete n.law,
                            delete n.location,
                            i(t, new e.Popup(n))
                        }
                        ))
                    }
                    ,
                    e.getCountryCode = function(t, n, r) {
                        t.law && t.law.countryCode ? n({
                            code: t.law.countryCode
                        }) : t.location ? new e.Location(t.location).locate((function(e) {
                            n(e || {})
                        }
                        ), r) : n({})
                    }
                    ,
                    e.utils = t,
                    e.hasInitialised = !0,
                    window.cookieconsent = e
                }
            }(window.cookieconsent || {})
        }
        ,
        8249: function(e, t) {
            var n;
            e.exports = (n = n || function(e, t) {
                var n = Object.create || function() {
                    function e() {}
                    return function(t) {
                        var n;
                        return e.prototype = t,
                        n = new e,
                        e.prototype = null,
                        n
                    }
                }()
                  , r = {}
                  , i = r.lib = {}
                  , o = i.Base = {
                    extend: function(e) {
                        var t = n(this);
                        return e && t.mixIn(e),
                        t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }
                        ),
                        t.init.prototype = t,
                        t.$super = this,
                        t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments),
                        e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e)
                            e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }
                  , s = i.WordArray = o.extend({
                    init: function(e, n) {
                        e = this.words = e || [],
                        this.sigBytes = n != t ? n : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || c).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words
                          , n = e.words
                          , r = this.sigBytes
                          , i = e.sigBytes;
                        if (this.clamp(),
                        r % 4)
                            for (var o = 0; o < i; o++) {
                                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                            }
                        else
                            for (o = 0; o < i; o += 4)
                                t[r + o >>> 2] = n[o >>> 2];
                        return this.sigBytes += i,
                        this
                    },
                    clamp: function() {
                        var t = this.words
                          , n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                        t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0),
                        e
                    },
                    random: function(t) {
                        for (var n, r = [], i = function(t) {
                            t = t;
                            var n = 987654321
                              , r = 4294967295;
                            return function() {
                                var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                return i /= 4294967296,
                                (i += .5) * (e.random() > .5 ? 1 : -1)
                            }
                        }, o = 0; o < t; o += 4) {
                            var a = i(4294967296 * (n || e.random()));
                            n = 987654071 * a(),
                            r.push(4294967296 * a() | 0)
                        }
                        return new s.init(r,t)
                    }
                })
                  , a = r.enc = {}
                  , c = a.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((o >>> 4).toString(16)),
                            r.push((15 & o).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r += 2)
                            n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new s.init(n,t / 2)
                    }
                }
                  , l = a.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(o))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r++)
                            n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new s.init(n,t)
                    }
                }
                  , u = a.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(l.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return l.parse(unescape(encodeURIComponent(e)))
                    }
                }
                  , f = i.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new s.init,
                        this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = u.parse(e)),
                        this._data.concat(e),
                        this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data
                          , r = n.words
                          , i = n.sigBytes
                          , o = this.blockSize
                          , a = i / (4 * o)
                          , c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o
                          , l = e.min(4 * c, i);
                        if (c) {
                            for (var u = 0; u < c; u += o)
                                this._doProcessBlock(r, u);
                            var f = r.splice(0, c);
                            n.sigBytes -= l
                        }
                        return new s.init(f,l)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(),
                        e
                    },
                    _minBufferSize: 0
                })
                  , p = (i.Hasher = f.extend({
                    cfg: o.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e),
                        this.reset()
                    },
                    reset: function() {
                        f.reset.call(this),
                        this._doReset()
                    },
                    update: function(e) {
                        return this._append(e),
                        this._process(),
                        this
                    },
                    finalize: function(e) {
                        return e && this._append(e),
                        this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new p.HMAC.init(e,n).finalize(t)
                        }
                    }
                }),
                r.algo = {});
                return r
            }(Math),
            n)
        },
        2783: function(e, t, n) {
            var r, i, o, s, a, c, l, u;
            e.exports = (u = n(8249),
            i = (r = u).lib,
            o = i.WordArray,
            s = i.Hasher,
            a = r.algo,
            c = [],
            l = a.SHA1 = s.extend({
                _doReset: function() {
                    this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], l = 0; l < 80; l++) {
                        if (l < 16)
                            c[l] = 0 | e[t + l];
                        else {
                            var u = c[l - 3] ^ c[l - 8] ^ c[l - 14] ^ c[l - 16];
                            c[l] = u << 1 | u >>> 31
                        }
                        var f = (r << 5 | r >>> 27) + a + c[l];
                        f += l < 20 ? 1518500249 + (i & o | ~i & s) : l < 40 ? 1859775393 + (i ^ o ^ s) : l < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514,
                        a = s,
                        s = o,
                        o = i << 30 | i >>> 2,
                        i = r,
                        r = f
                    }
                    n[0] = n[0] + r | 0,
                    n[1] = n[1] + i | 0,
                    n[2] = n[2] + o | 0,
                    n[3] = n[3] + s | 0,
                    n[4] = n[4] + a | 0
                },
                _doFinalize: function() {
                    var e = this._data
                      , t = e.words
                      , n = 8 * this._nDataBytes
                      , r = 8 * e.sigBytes;
                    return t[r >>> 5] |= 128 << 24 - r % 32,
                    t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
                    t[15 + (r + 64 >>> 9 << 4)] = n,
                    e.sigBytes = 4 * t.length,
                    this._process(),
                    this._hash
                },
                clone: function() {
                    var e = s.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                }
            }),
            r.SHA1 = s._createHelper(l),
            r.HmacSHA1 = s._createHmacHelper(l),
            u.SHA1)
        },
        4289: (e,t,n)=>{
            "use strict";
            var r = n(2215)
              , i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo")
              , o = Object.prototype.toString
              , s = Array.prototype.concat
              , a = Object.defineProperty
              , c = a && function() {
                var e = {};
                try {
                    for (var t in a(e, "x", {
                        enumerable: !1,
                        value: e
                    }),
                    e)
                        return !1;
                    return e.x === e
                } catch (e) {
                    return !1
                }
            }()
              , l = function(e, t, n, r) {
                var i;
                (!(t in e) || "function" == typeof (i = r) && "[object Function]" === o.call(i) && r()) && (c ? a(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    value: n,
                    writable: !0
                }) : e[t] = n)
            }
              , u = function(e, t) {
                var n = arguments.length > 2 ? arguments[2] : {}
                  , o = r(t);
                i && (o = s.call(o, Object.getOwnPropertySymbols(t)));
                for (var a = 0; a < o.length; a += 1)
                    l(e, o[a], t[o[a]], n[o[a]])
            };
            u.supportsDescriptors = !!c,
            e.exports = u
        }
        ,
        1578: (e,t,n)=>{
            "use strict";
            e.exports = n(8631)
        }
        ,
        1360: (e,t,n)=>{
            "use strict";
            var r = n(7195)
              , i = n(1643);
            e.exports = function(e) {
                var t = i(e);
                return r(t)
            }
        }
        ,
        1643: (e,t,n)=>{
            "use strict";
            var r = n(210)
              , i = r("%TypeError%")
              , o = r("%Number%")
              , s = r("%RegExp%")
              , a = r("%parseInt%")
              , c = n(1924)
              , l = n(1652)
              , u = n(3126)
              , f = c("String.prototype.slice")
              , p = l(/^0b[01]+$/i)
              , d = l(/^0o[0-7]+$/i)
              , h = l(/^[-+]0x[0-9a-f]+$/i)
              , y = l(new s("[" + ["", "​", "￾"].join("") + "]","g"))
              , g = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join("")
              , m = new RegExp("(^[" + g + "]+)|([" + g + "]+$)","g")
              , v = c("String.prototype.replace")
              , b = n(1761);
            e.exports = function e(t) {
                var n = u(t) ? t : b(t, o);
                if ("symbol" == typeof n)
                    throw new i("Cannot convert a Symbol value to a number");
                if ("string" == typeof n) {
                    if (p(n))
                        return e(a(f(n, 2), 2));
                    if (d(n))
                        return e(a(f(n, 2), 8));
                    if (y(n) || h(n))
                        return NaN;
                    var r = function(e) {
                        return v(e, m, "")
                    }(n);
                    if (r !== n)
                        return e(r)
                }
                return o(n)
            }
        }
        ,
        1761: (e,t,n)=>{
            "use strict";
            var r = n(1503);
            e.exports = function(e) {
                return arguments.length > 1 ? r(e, arguments[1]) : r(e)
            }
        }
        ,
        9846: (e,t,n)=>{
            "use strict";
            var r = n(210)
              , i = r("%String%")
              , o = r("%TypeError%");
            e.exports = function(e) {
                if ("symbol" == typeof e)
                    throw new o("Cannot convert a Symbol value to a string");
                return i(e)
            }
        }
        ,
        8631: (e,t,n)=>{
            "use strict";
            var r = n(210)("%TypeError%");
            e.exports = function(e, t) {
                if (null == e)
                    throw new r(t || "Cannot call method on " + e);
                return e
            }
        }
        ,
        7195: (e,t,n)=>{
            "use strict";
            var r = n(2683)
              , i = n(9711)
              , o = n(7196)
              , s = n(1214)
              , a = n(3060)
              , c = n(4099);
            e.exports = function(e) {
                var t = o(e);
                return s(t) ? 0 : 0 !== t && a(t) ? c(t) * i(r(t)) : t
            }
        }
        ,
        7196: (e,t,n)=>{
            "use strict";
            var r = n(1318);
            e.exports = function(e) {
                var t = r(e, Number);
                if ("string" != typeof t)
                    return +t;
                var n = t.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
                return /^0[ob]|^[+-]0x/.test(n) ? NaN : +n
            }
        }
        ,
        1318: (e,t,n)=>{
            "use strict";
            e.exports = n(2116)
        }
        ,
        2683: (e,t,n)=>{
            "use strict";
            var r = n(210)("%Math.abs%");
            e.exports = function(e) {
                return r(e)
            }
        }
        ,
        9711: e=>{
            "use strict";
            var t = Math.floor;
            e.exports = function(e) {
                return t(e)
            }
        }
        ,
        4147: (e,t,n)=>{
            "use strict";
            e.exports = n(5559)
        }
        ,
        3060: e=>{
            "use strict";
            var t = Number.isNaN || function(e) {
                return e != e
            }
            ;
            e.exports = Number.isFinite || function(e) {
                return "number" == typeof e && !t(e) && e !== 1 / 0 && e !== -1 / 0
            }
        }
        ,
        1214: e=>{
            "use strict";
            e.exports = Number.isNaN || function(e) {
                return e != e
            }
        }
        ,
        3126: e=>{
            "use strict";
            e.exports = function(e) {
                return null === e || "function" != typeof e && "object" != typeof e
            }
        }
        ,
        1652: (e,t,n)=>{
            "use strict";
            var r = n(210)("RegExp.prototype.test")
              , i = n(5559);
            e.exports = function(e) {
                return i(r, e)
            }
        }
        ,
        4099: e=>{
            "use strict";
            e.exports = function(e) {
                return e >= 0 ? 1 : -1
            }
        }
        ,
        1503: (e,t,n)=>{
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              , i = n(4149)
              , o = n(5320)
              , s = n(8923)
              , a = n(2636)
              , c = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot call method on " + e);
                if ("string" != typeof t || "number" !== t && "string" !== t)
                    throw new TypeError('hint must be "string" or "number"');
                var n, r, s, a = "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"];
                for (s = 0; s < a.length; ++s)
                    if (n = e[a[s]],
                    o(n) && (r = n.call(e),
                    i(r)))
                        return r;
                throw new TypeError("No default value")
            }
              , l = function(e, t) {
                var n = e[t];
                if (null != n) {
                    if (!o(n))
                        throw new TypeError(n + " returned for property " + t + " of object " + e + " is not a function");
                    return n
                }
            };
            e.exports = function(e) {
                if (i(e))
                    return e;
                var t, n = "default";
                if (arguments.length > 1 && (arguments[1] === String ? n = "string" : arguments[1] === Number && (n = "number")),
                r && (Symbol.toPrimitive ? t = l(e, Symbol.toPrimitive) : a(e) && (t = Symbol.prototype.valueOf)),
                void 0 !== t) {
                    var o = t.call(e, n);
                    if (i(o))
                        return o;
                    throw new TypeError("unable to convert exotic object to primitive")
                }
                return "default" === n && (s(e) || a(e)) && (n = "string"),
                c(e, "default" === n ? "number" : n)
            }
        }
        ,
        2116: (e,t,n)=>{
            "use strict";
            var r = Object.prototype.toString
              , i = n(4149)
              , o = n(5320)
              , s = function(e) {
                var t;
                if ((t = arguments.length > 1 ? arguments[1] : "[object Date]" === r.call(e) ? String : Number) === String || t === Number) {
                    var n, s, a = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (s = 0; s < a.length; ++s)
                        if (o(e[a[s]]) && (n = e[a[s]](),
                        i(n)))
                            return n;
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            };
            e.exports = function(e) {
                return i(e) ? e : arguments.length > 1 ? s(e, arguments[1]) : s(e)
            }
        }
        ,
        4149: e=>{
            "use strict";
            e.exports = function(e) {
                return null === e || "function" != typeof e && "object" != typeof e
            }
        }
        ,
        7648: e=>{
            "use strict";
            var t = "Function.prototype.bind called on incompatible "
              , n = Array.prototype.slice
              , r = Object.prototype.toString
              , i = "[object Function]";
            e.exports = function(e) {
                var o = this;
                if ("function" != typeof o || r.call(o) !== i)
                    throw new TypeError(t + o);
                for (var s, a = n.call(arguments, 1), c = function() {
                    if (this instanceof s) {
                        var t = o.apply(this, a.concat(n.call(arguments)));
                        return Object(t) === t ? t : this
                    }
                    return o.apply(e, a.concat(n.call(arguments)))
                }, l = Math.max(0, o.length - a.length), u = [], f = 0; f < l; f++)
                    u.push("$" + f);
                if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(c),
                o.prototype) {
                    var p = function() {};
                    p.prototype = o.prototype,
                    s.prototype = new p,
                    p.prototype = null
                }
                return s
            }
        }
        ,
        8612: (e,t,n)=>{
            "use strict";
            var r = n(7648);
            e.exports = Function.prototype.bind || r
        }
        ,
        210: (e,t,n)=>{
            "use strict";
            var r, i = SyntaxError, o = Function, s = TypeError, a = function(e) {
                try {
                    return o('"use strict"; return (' + e + ").constructor;")()
                } catch (e) {}
            }, c = Object.getOwnPropertyDescriptor;
            if (c)
                try {
                    c({}, "")
                } catch (e) {
                    c = null
                }
            var l = function() {
                throw new s
            }
              , u = c ? function() {
                try {
                    return l
                } catch (e) {
                    try {
                        return c(arguments, "callee").get
                    } catch (e) {
                        return l
                    }
                }
            }() : l
              , f = n(1405)()
              , p = Object.getPrototypeOf || function(e) {
                return e.__proto__
            }
              , d = {}
              , h = "undefined" == typeof Uint8Array ? r : p(Uint8Array)
              , y = {
                "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
                "%AsyncFromSyncIteratorPrototype%": r,
                "%AsyncFunction%": d,
                "%AsyncGenerator%": d,
                "%AsyncGeneratorFunction%": d,
                "%AsyncIteratorPrototype%": d,
                "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                "%Boolean%": Boolean,
                "%DataView%": "undefined" == typeof DataView ? r : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                "%Function%": o,
                "%GeneratorFunction%": d,
                "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
                "%JSON%": "object" == typeof JSON ? JSON : r,
                "%Map%": "undefined" == typeof Map ? r : Map,
                "%MapIteratorPrototype%": "undefined" != typeof Map && f ? p((new Map)[Symbol.iterator]()) : r,
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" == typeof Promise ? r : Promise,
                "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                "%RegExp%": RegExp,
                "%Set%": "undefined" == typeof Set ? r : Set,
                "%SetIteratorPrototype%": "undefined" != typeof Set && f ? p((new Set)[Symbol.iterator]()) : r,
                "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : r,
                "%Symbol%": f ? Symbol : r,
                "%SyntaxError%": i,
                "%ThrowTypeError%": u,
                "%TypedArray%": h,
                "%TypeError%": s,
                "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
            }
              , g = function e(t) {
                var n;
                if ("%AsyncFunction%" === t)
                    n = a("async function () {}");
                else if ("%GeneratorFunction%" === t)
                    n = a("function* () {}");
                else if ("%AsyncGeneratorFunction%" === t)
                    n = a("async function* () {}");
                else if ("%AsyncGenerator%" === t) {
                    var r = e("%AsyncGeneratorFunction%");
                    r && (n = r.prototype)
                } else if ("%AsyncIteratorPrototype%" === t) {
                    var i = e("%AsyncGenerator%");
                    i && (n = p(i.prototype))
                }
                return y[t] = n,
                n
            }
              , m = {
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"]
            }
              , v = n(8612)
              , b = n(7642)
              , x = v.call(Function.call, Array.prototype.concat)
              , w = v.call(Function.apply, Array.prototype.splice)
              , S = v.call(Function.call, String.prototype.replace)
              , k = v.call(Function.call, String.prototype.slice)
              , T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
              , C = /\\(\\)?/g
              , A = function(e) {
                var t = k(e, 0, 1)
                  , n = k(e, -1);
                if ("%" === t && "%" !== n)
                    throw new i("invalid intrinsic syntax, expected closing `%`");
                if ("%" === n && "%" !== t)
                    throw new i("invalid intrinsic syntax, expected opening `%`");
                var r = [];
                return S(e, T, (function(e, t, n, i) {
                    r[r.length] = n ? S(i, C, "$1") : t || e
                }
                )),
                r
            }
              , O = function(e, t) {
                var n, r = e;
                if (b(m, r) && (r = "%" + (n = m[r])[0] + "%"),
                b(y, r)) {
                    var o = y[r];
                    if (o === d && (o = g(r)),
                    void 0 === o && !t)
                        throw new s("intrinsic " + e + " exists, but is not available. Please file an issue!");
                    return {
                        alias: n,
                        name: r,
                        value: o
                    }
                }
                throw new i("intrinsic " + e + " does not exist!")
            };
            e.exports = function(e, t) {
                if ("string" != typeof e || 0 === e.length)
                    throw new s("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof t)
                    throw new s('"allowMissing" argument must be a boolean');
                var n = A(e)
                  , r = n.length > 0 ? n[0] : ""
                  , o = O("%" + r + "%", t)
                  , a = o.name
                  , l = o.value
                  , u = !1
                  , f = o.alias;
                f && (r = f[0],
                w(n, x([0, 1], f)));
                for (var p = 1, d = !0; p < n.length; p += 1) {
                    var h = n[p]
                      , g = k(h, 0, 1)
                      , m = k(h, -1);
                    if (('"' === g || "'" === g || "`" === g || '"' === m || "'" === m || "`" === m) && g !== m)
                        throw new i("property names with quotes must have matching quotes");
                    if ("constructor" !== h && d || (u = !0),
                    b(y, a = "%" + (r += "." + h) + "%"))
                        l = y[a];
                    else if (null != l) {
                        if (!(h in l)) {
                            if (!t)
                                throw new s("base intrinsic for " + e + " exists, but the property is not available.");
                            return
                        }
                        if (c && p + 1 >= n.length) {
                            var v = c(l, h);
                            l = (d = !!v) && "get"in v && !("originalValue"in v.get) ? v.get : l[h]
                        } else
                            d = b(l, h),
                            l = l[h];
                        d && !u && (y[a] = l)
                    }
                }
                return l
            }
        }
        ,
        1405: (e,t,n)=>{
            "use strict";
            var r = "undefined" != typeof Symbol && Symbol
              , i = n(5419);
            e.exports = function() {
                return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && i())))
            }
        }
        ,
        5419: e=>{
            "use strict";
            e.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
                    return !1;
                if ("symbol" == typeof Symbol.iterator)
                    return !0;
                var e = {}
                  , t = Symbol("test")
                  , n = Object(t);
                if ("string" == typeof t)
                    return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(t))
                    return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(n))
                    return !1;
                for (t in e[t] = 42,
                e)
                    return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
                    return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)
                    return !1;
                var r = Object.getOwnPropertySymbols(e);
                if (1 !== r.length || r[0] !== t)
                    return !1;
                if (!Object.prototype.propertyIsEnumerable.call(e, t))
                    return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var i = Object.getOwnPropertyDescriptor(e, t);
                    if (42 !== i.value || !0 !== i.enumerable)
                        return !1
                }
                return !0
            }
        }
        ,
        7642: (e,t,n)=>{
            "use strict";
            var r = n(8612);
            e.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
        }
        ,
        5320: e=>{
            "use strict";
            var t, n, r = Function.prototype.toString, i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
            if ("function" == typeof i && "function" == typeof Object.defineProperty)
                try {
                    t = Object.defineProperty({}, "length", {
                        get: function() {
                            throw n
                        }
                    }),
                    n = {},
                    i((function() {
                        throw 42
                    }
                    ), null, t)
                } catch (e) {
                    e !== n && (i = null)
                }
            else
                i = null;
            var o = /^\s*class\b/
              , s = function(e) {
                try {
                    var t = r.call(e);
                    return o.test(t)
                } catch (e) {
                    return !1
                }
            }
              , a = Object.prototype.toString
              , c = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag
              , l = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
            e.exports = i ? function(e) {
                if (e === l)
                    return !0;
                if (!e)
                    return !1;
                if ("function" != typeof e && "object" != typeof e)
                    return !1;
                if ("function" == typeof e && !e.prototype)
                    return !0;
                try {
                    i(e, null, t)
                } catch (e) {
                    if (e !== n)
                        return !1
                }
                return !s(e)
            }
            : function(e) {
                if (e === l)
                    return !0;
                if (!e)
                    return !1;
                if ("function" != typeof e && "object" != typeof e)
                    return !1;
                if ("function" == typeof e && !e.prototype)
                    return !0;
                if (c)
                    return function(e) {
                        try {
                            return !s(e) && (r.call(e),
                            !0)
                        } catch (e) {
                            return !1
                        }
                    }(e);
                if (s(e))
                    return !1;
                var t = a.call(e);
                return "[object Function]" === t || "[object GeneratorFunction]" === t
            }
        }
        ,
        8923: e=>{
            "use strict";
            var t = Date.prototype.getDay
              , n = Object.prototype.toString
              , r = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
            e.exports = function(e) {
                return "object" == typeof e && null !== e && (r ? function(e) {
                    try {
                        return t.call(e),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(e) : "[object Date]" === n.call(e))
            }
        }
        ,
        2636: (e,t,n)=>{
            "use strict";
            var r = Object.prototype.toString;
            if (n(1405)()) {
                var i = Symbol.prototype.toString
                  , o = /^Symbol\(.*\)$/;
                e.exports = function(e) {
                    if ("symbol" == typeof e)
                        return !0;
                    if ("[object Symbol]" !== r.call(e))
                        return !1;
                    try {
                        return function(e) {
                            return "symbol" == typeof e.valueOf() && o.test(i.call(e))
                        }(e)
                    } catch (e) {
                        return !1
                    }
                }
            } else
                e.exports = function(e) {
                    return !1
                }
        }
        ,
        6647: (e,t,n)=>{
            var r, i, o;
            i = [n(9755)],
            void 0 === (o = "function" == typeof (r = function(e, t) {
                "use strict";
                var n = "3.0.3";
                function r(t) {
                    e.fn.cycle.debug && i(t)
                }
                function i() {
                    window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
                }
                function o(t, n, r) {
                    var i = e(t).data("cycle.opts");
                    if (i) {
                        var o = !!t.cyclePause;
                        o && i.paused ? i.paused(t, i, n, r) : !o && i.resumed && i.resumed(t, i, n, r)
                    }
                }
                function s(n, r, s) {
                    if (n.cycleStop === t && (n.cycleStop = 0),
                    r !== t && null !== r || (r = {}),
                    r.constructor == String) {
                        switch (r) {
                        case "destroy":
                        case "stop":
                            var a = e(n).data("cycle.opts");
                            return !!a && (n.cycleStop++,
                            n.cycleTimeout && clearTimeout(n.cycleTimeout),
                            n.cycleTimeout = 0,
                            a.elements && e(a.elements).stop(),
                            e(n).removeData("cycle.opts"),
                            "destroy" == r && c(n, a),
                            !1);
                        case "toggle":
                            return n.cyclePause = 1 === n.cyclePause ? 0 : 1,
                            u(n.cyclePause, s, n),
                            o(n),
                            !1;
                        case "pause":
                            return n.cyclePause = 1,
                            o(n),
                            !1;
                        case "resume":
                            return n.cyclePause = 0,
                            u(!1, s, n),
                            o(n),
                            !1;
                        case "prev":
                        case "next":
                            return (a = e(n).data("cycle.opts")) ? ("string" == typeof s && (a.oneTimeFx = s),
                            e.fn.cycle[r](a),
                            !1) : (i('options not found, "prev/next" ignored'),
                            !1);
                        default:
                            r = {
                                fx: r
                            }
                        }
                        return r
                    }
                    if (r.constructor == Number) {
                        var l = r;
                        return (r = e(n).data("cycle.opts")) ? l < 0 || l >= r.elements.length ? (i("invalid slide index: " + l),
                        !1) : (r.nextSlide = l,
                        n.cycleTimeout && (clearTimeout(n.cycleTimeout),
                        n.cycleTimeout = 0),
                        "string" == typeof s && (r.oneTimeFx = s),
                        d(r.elements, r, 1, l >= r.currSlide),
                        !1) : (i("options not found, can not advance slide"),
                        !1)
                    }
                    return r;
                    function u(t, n, r) {
                        if (!t && !0 === n) {
                            var o = e(r).data("cycle.opts");
                            if (!o)
                                return i("options not found, can not resume"),
                                !1;
                            r.cycleTimeout && (clearTimeout(r.cycleTimeout),
                            r.cycleTimeout = 0),
                            d(o.elements, o, 1, !o.backwards)
                        }
                    }
                }
                function a(t, n) {
                    if (!e.support.opacity && n.cleartype && t.style.filter)
                        try {
                            t.style.removeAttribute("filter")
                        } catch (e) {}
                }
                function c(t, n) {
                    n.next && e(n.next).unbind(n.prevNextEvent),
                    n.prev && e(n.prev).unbind(n.prevNextEvent),
                    (n.pager || n.pagerAnchorBuilder) && e.each(n.pagerAnchors || [], (function() {
                        this.unbind().remove()
                    }
                    )),
                    n.pagerAnchors = null,
                    e(t).unbind("mouseenter.cycle mouseleave.cycle"),
                    n.destroy && n.destroy(n)
                }
                function l(n, r, s, c, l) {
                    var h, v = e.extend({}, e.fn.cycle.defaults, c || {}, e.metadata ? n.metadata() : e.meta ? n.data() : {}), b = e.isFunction(n.data) ? n.data(v.metaAttr) : null;
                    b && (v = e.extend(v, b)),
                    v.autostop && (v.countdown = v.autostopCount || s.length);
                    var x = n[0];
                    if (n.data("cycle.opts", v),
                    v.$cont = n,
                    v.stopCount = x.cycleStop,
                    v.elements = s,
                    v.before = v.before ? [v.before] : [],
                    v.after = v.after ? [v.after] : [],
                    !e.support.opacity && v.cleartype && v.after.push((function() {
                        a(this, v)
                    }
                    )),
                    v.continuous && v.after.push((function() {
                        d(s, v, 0, !v.backwards)
                    }
                    )),
                    u(v),
                    e.support.opacity || !v.cleartype || v.cleartypeNoBg || m(r),
                    "static" == n.css("position") && n.css("position", "relative"),
                    v.width && n.width(v.width),
                    v.height && "auto" != v.height && n.height(v.height),
                    v.startingSlide !== t ? (v.startingSlide = parseInt(v.startingSlide, 10),
                    v.startingSlide >= s.length || v.startSlide < 0 ? v.startingSlide = 0 : h = !0) : v.backwards ? v.startingSlide = s.length - 1 : v.startingSlide = 0,
                    v.random) {
                        v.randomMap = [];
                        for (var w = 0; w < s.length; w++)
                            v.randomMap.push(w);
                        if (v.randomMap.sort((function(e, t) {
                            return Math.random() - .5
                        }
                        )),
                        h)
                            for (var S = 0; S < s.length; S++)
                                v.startingSlide == v.randomMap[S] && (v.randomIndex = S);
                        else
                            v.randomIndex = 1,
                            v.startingSlide = v.randomMap[1]
                    } else
                        v.startingSlide >= s.length && (v.startingSlide = 0);
                    v.currSlide = v.startingSlide || 0;
                    var k = v.startingSlide;
                    if (r.css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).hide().each((function(t) {
                        var n;
                        n = v.backwards ? k ? t <= k ? s.length + (t - k) : k - t : s.length - t : k ? t >= k ? s.length - (t - k) : k - t : s.length - t,
                        e(this).css("z-index", n)
                    }
                    )),
                    e(s[k]).css("opacity", 1).show(),
                    a(s[k], v),
                    v.fit && (v.aspect ? r.each((function() {
                        var t = e(this)
                          , n = !0 === v.aspect ? t.width() / t.height() : v.aspect;
                        v.width && t.width() != v.width && (t.width(v.width),
                        t.height(v.width / n)),
                        v.height && t.height() < v.height && (t.height(v.height),
                        t.width(v.height * n))
                    }
                    )) : (v.width && r.width(v.width),
                    v.height && "auto" != v.height && r.height(v.height))),
                    !v.center || v.fit && !v.aspect || r.each((function() {
                        var t = e(this);
                        t.css({
                            "margin-left": v.width ? (v.width - t.width()) / 2 + "px" : 0,
                            "margin-top": v.height ? (v.height - t.height()) / 2 + "px" : 0
                        })
                    }
                    )),
                    !v.center || v.fit || v.slideResize || r.each((function() {
                        var t = e(this);
                        t.css({
                            "margin-left": v.width ? (v.width - t.width()) / 2 + "px" : 0,
                            "margin-top": v.height ? (v.height - t.height()) / 2 + "px" : 0
                        })
                    }
                    )),
                    (v.containerResize || v.containerResizeHeight) && n.innerHeight() < 1) {
                        for (var T = 0, C = 0, A = 0; A < s.length; A++) {
                            var O = e(s[A])
                              , E = O[0]
                              , I = O.outerWidth()
                              , P = O.outerHeight();
                            I || (I = E.offsetWidth || E.width || O.attr("width")),
                            P || (P = E.offsetHeight || E.height || O.attr("height")),
                            T = I > T ? I : T,
                            C = P > C ? P : C
                        }
                        v.containerResize && T > 0 && C > 0 && n.css({
                            width: T + "px",
                            height: C + "px"
                        }),
                        v.containerResizeHeight && C > 0 && n.css({
                            height: C + "px"
                        })
                    }
                    var j = !1;
                    if (v.pause && n.bind("mouseenter.cycle", (function() {
                        j = !0,
                        this.cyclePause++,
                        o(x, !0)
                    }
                    )).bind("mouseleave.cycle", (function() {
                        j && this.cyclePause--,
                        o(x, !0)
                    }
                    )),
                    !1 === f(v))
                        return !1;
                    var N = !1;
                    if (c.requeueAttempts = c.requeueAttempts || 0,
                    r.each((function() {
                        var t = e(this);
                        if (this.cycleH = v.fit && v.height ? v.height : t.height() || this.offsetHeight || this.height || t.attr("height") || 0,
                        this.cycleW = v.fit && v.width ? v.width : t.width() || this.offsetWidth || this.width || t.attr("width") || 0,
                        t.is("img") && 0 === this.cycleH && 0 === this.cycleW && !this.complete) {
                            if (l.s && v.requeueOnImageNotLoaded && ++c.requeueAttempts < 100)
                                return i(c.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH),
                                setTimeout((function() {
                                    e(l.s, l.c).cycle(c)
                                }
                                ), v.requeueTimeout),
                                N = !0,
                                !1;
                            i("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
                        }
                        return !0
                    }
                    )),
                    N)
                        return !1;
                    if (v.cssBefore = v.cssBefore || {},
                    v.cssAfter = v.cssAfter || {},
                    v.cssFirst = v.cssFirst || {},
                    v.animIn = v.animIn || {},
                    v.animOut = v.animOut || {},
                    r.not(":eq(" + k + ")").css(v.cssBefore),
                    e(r[k]).css(v.cssFirst),
                    v.timeout) {
                        v.timeout = parseInt(v.timeout, 10),
                        v.speed.constructor == String && (v.speed = e.fx.speeds[v.speed] || parseInt(v.speed, 10)),
                        v.sync || (v.speed = v.speed / 2);
                        for (var B = "none" == v.fx ? 0 : "shuffle" == v.fx ? 500 : 250; v.timeout - v.speed < B; )
                            v.timeout += v.speed
                    }
                    if (v.easing && (v.easeIn = v.easeOut = v.easing),
                    v.speedIn || (v.speedIn = v.speed),
                    v.speedOut || (v.speedOut = v.speed),
                    v.slideCount = s.length,
                    v.currSlide = v.lastSlide = k,
                    v.random ? (++v.randomIndex == s.length && (v.randomIndex = 0),
                    v.nextSlide = v.randomMap[v.randomIndex]) : v.backwards ? v.nextSlide = 0 === v.startingSlide ? s.length - 1 : v.startingSlide - 1 : v.nextSlide = v.startingSlide >= s.length - 1 ? 0 : v.startingSlide + 1,
                    !v.multiFx) {
                        var D = e.fn.cycle.transitions[v.fx];
                        if (e.isFunction(D))
                            D(n, r, v);
                        else if ("custom" != v.fx && !v.multiFx)
                            return i("unknown transition: " + v.fx, "; slideshow terminating"),
                            !1
                    }
                    var L = r[k];
                    return v.skipInitializationCallbacks || (v.before.length && v.before[0].apply(L, [L, L, v, !0]),
                    v.after.length && v.after[0].apply(L, [L, L, v, !0])),
                    v.next && e(v.next).bind(v.prevNextEvent, (function() {
                        return y(v, 1)
                    }
                    )),
                    v.prev && e(v.prev).bind(v.prevNextEvent, (function() {
                        return y(v, 0)
                    }
                    )),
                    (v.pager || v.pagerAnchorBuilder) && g(s, v),
                    p(v, s),
                    v
                }
                function u(t) {
                    t.original = {
                        before: [],
                        after: []
                    },
                    t.original.cssBefore = e.extend({}, t.cssBefore),
                    t.original.cssAfter = e.extend({}, t.cssAfter),
                    t.original.animIn = e.extend({}, t.animIn),
                    t.original.animOut = e.extend({}, t.animOut),
                    e.each(t.before, (function() {
                        t.original.before.push(this)
                    }
                    )),
                    e.each(t.after, (function() {
                        t.original.after.push(this)
                    }
                    ))
                }
                function f(t) {
                    var n, o, s = e.fn.cycle.transitions;
                    if (t.fx.indexOf(",") > 0) {
                        for (t.multiFx = !0,
                        t.fxs = t.fx.replace(/\s*/g, "").split(","),
                        n = 0; n < t.fxs.length; n++) {
                            var a = t.fxs[n];
                            (o = s[a]) && s.hasOwnProperty(a) && e.isFunction(o) || (i("discarding unknown transition: ", a),
                            t.fxs.splice(n, 1),
                            n--)
                        }
                        if (!t.fxs.length)
                            return i("No valid transitions named; slideshow terminating."),
                            !1
                    } else if ("all" == t.fx)
                        for (var c in t.multiFx = !0,
                        t.fxs = [],
                        s)
                            s.hasOwnProperty(c) && (o = s[c],
                            s.hasOwnProperty(c) && e.isFunction(o) && t.fxs.push(c));
                    if (t.multiFx && t.randomizeEffects) {
                        var l = Math.floor(20 * Math.random()) + 30;
                        for (n = 0; n < l; n++) {
                            var u = Math.floor(Math.random() * t.fxs.length);
                            t.fxs.push(t.fxs.splice(u, 1)[0])
                        }
                        r("randomized fx sequence: ", t.fxs)
                    }
                    return !0
                }
                function p(t, n) {
                    t.addSlide = function(r, i) {
                        var o = e(r)
                          , s = o[0];
                        t.autostopCount || t.countdown++,
                        n[i ? "unshift" : "push"](s),
                        t.els && t.els[i ? "unshift" : "push"](s),
                        t.slideCount = n.length,
                        t.random && (t.randomMap.push(t.slideCount - 1),
                        t.randomMap.sort((function(e, t) {
                            return Math.random() - .5
                        }
                        ))),
                        o.css("position", "absolute"),
                        o[i ? "prependTo" : "appendTo"](t.$cont),
                        i && (t.currSlide++,
                        t.nextSlide++),
                        e.support.opacity || !t.cleartype || t.cleartypeNoBg || m(o),
                        t.fit && t.width && o.width(t.width),
                        t.fit && t.height && "auto" != t.height && o.height(t.height),
                        s.cycleH = t.fit && t.height ? t.height : o.height(),
                        s.cycleW = t.fit && t.width ? t.width : o.width(),
                        o.css(t.cssBefore),
                        (t.pager || t.pagerAnchorBuilder) && e.fn.cycle.createPagerAnchor(n.length - 1, s, e(t.pager), n, t),
                        e.isFunction(t.onAddSlide) ? t.onAddSlide(o) : o.hide()
                    }
                }
                function d(n, i, o, s) {
                    var a = i.$cont[0]
                      , c = n[i.currSlide]
                      , l = n[i.nextSlide];
                    if (o && i.busy && i.manualTrump && (r("manualTrump in go(), stopping active transition"),
                    e(n).stop(!0, !0),
                    i.busy = 0,
                    clearTimeout(a.cycleTimeout)),
                    i.busy)
                        r("transition active, ignoring new tx request");
                    else if (a.cycleStop == i.stopCount && (0 !== a.cycleTimeout || o))
                        if (o || a.cyclePause || i.bounce || !(i.autostop && --i.countdown <= 0 || i.nowrap && !i.random && i.nextSlide < i.currSlide)) {
                            var u, f = !1;
                            if (!o && a.cyclePause || i.nextSlide == i.currSlide)
                                g();
                            else {
                                f = !0;
                                var p = i.fx;
                                c.cycleH = c.cycleH || e(c).height(),
                                c.cycleW = c.cycleW || e(c).width(),
                                l.cycleH = l.cycleH || e(l).height(),
                                l.cycleW = l.cycleW || e(l).width(),
                                i.multiFx && (s && (i.lastFx === t || ++i.lastFx >= i.fxs.length) ? i.lastFx = 0 : !s && (i.lastFx === t || --i.lastFx < 0) && (i.lastFx = i.fxs.length - 1),
                                p = i.fxs[i.lastFx]),
                                i.oneTimeFx && (p = i.oneTimeFx,
                                i.oneTimeFx = null),
                                e.fn.cycle.resetState(i, p),
                                i.before.length && e.each(i.before, (function(e, t) {
                                    a.cycleStop == i.stopCount && t.apply(l, [c, l, i, s])
                                }
                                ));
                                var y = function() {
                                    i.busy = 0,
                                    e.each(i.after, (function(e, t) {
                                        a.cycleStop == i.stopCount && t.apply(l, [c, l, i, s])
                                    }
                                    )),
                                    a.cycleStop || g()
                                };
                                r("tx firing(" + p + "); currSlide: " + i.currSlide + "; nextSlide: " + i.nextSlide),
                                i.busy = 1,
                                i.fxFn ? i.fxFn(c, l, i, y, s, o && i.fastOnEvent) : e.isFunction(e.fn.cycle[i.fx]) ? e.fn.cycle[i.fx](c, l, i, y, s, o && i.fastOnEvent) : e.fn.cycle.custom(c, l, i, y, s, o && i.fastOnEvent)
                            }
                            (f || i.nextSlide == i.currSlide) && (i.lastSlide = i.currSlide,
                            i.random ? (i.currSlide = i.nextSlide,
                            ++i.randomIndex == n.length && (i.randomIndex = 0,
                            i.randomMap.sort((function(e, t) {
                                return Math.random() - .5
                            }
                            ))),
                            i.nextSlide = i.randomMap[i.randomIndex],
                            i.nextSlide == i.currSlide && (i.nextSlide = i.currSlide == i.slideCount - 1 ? 0 : i.currSlide + 1)) : i.backwards ? (u = i.nextSlide - 1 < 0) && i.bounce ? (i.backwards = !i.backwards,
                            i.nextSlide = 1,
                            i.currSlide = 0) : (i.nextSlide = u ? n.length - 1 : i.nextSlide - 1,
                            i.currSlide = u ? 0 : i.nextSlide + 1) : (u = i.nextSlide + 1 == n.length) && i.bounce ? (i.backwards = !i.backwards,
                            i.nextSlide = n.length - 2,
                            i.currSlide = n.length - 1) : (i.nextSlide = u ? 0 : i.nextSlide + 1,
                            i.currSlide = u ? n.length - 1 : i.nextSlide - 1)),
                            f && i.pager && i.updateActivePagerLink(i.pager, i.currSlide, i.activePagerClass)
                        } else
                            i.end && i.end(i);
                    function g() {
                        var e = 0;
                        i.timeout,
                        i.timeout && !i.continuous ? (e = h(n[i.currSlide], n[i.nextSlide], i, s),
                        "shuffle" == i.fx && (e -= i.speedOut)) : i.continuous && a.cyclePause && (e = 10),
                        e > 0 && (a.cycleTimeout = setTimeout((function() {
                            d(n, i, 0, !i.backwards)
                        }
                        ), e))
                    }
                }
                function h(e, t, n, i) {
                    if (n.timeoutFn) {
                        for (var o = n.timeoutFn.call(e, e, t, n, i); "none" != n.fx && o - n.speed < 250; )
                            o += n.speed;
                        if (r("calculated timeout: " + o + "; speed: " + n.speed),
                        !1 !== o)
                            return o
                    }
                    return n.timeout
                }
                function y(t, n) {
                    var r = n ? 1 : -1
                      , i = t.elements
                      , o = t.$cont[0]
                      , s = o.cycleTimeout;
                    if (s && (clearTimeout(s),
                    o.cycleTimeout = 0),
                    t.random && r < 0)
                        t.randomIndex--,
                        -2 == --t.randomIndex ? t.randomIndex = i.length - 2 : -1 == t.randomIndex && (t.randomIndex = i.length - 1),
                        t.nextSlide = t.randomMap[t.randomIndex];
                    else if (t.random)
                        t.nextSlide = t.randomMap[t.randomIndex];
                    else if (t.nextSlide = t.currSlide + r,
                    t.nextSlide < 0) {
                        if (t.nowrap)
                            return !1;
                        t.nextSlide = i.length - 1
                    } else if (t.nextSlide >= i.length) {
                        if (t.nowrap)
                            return !1;
                        t.nextSlide = 0
                    }
                    var a = t.onPrevNextEvent || t.prevNextClick;
                    return e.isFunction(a) && a(r > 0, t.nextSlide, i[t.nextSlide]),
                    d(i, t, 1, n),
                    !1
                }
                function g(t, n) {
                    var r = e(n.pager);
                    e.each(t, (function(i, o) {
                        e.fn.cycle.createPagerAnchor(i, o, r, t, n)
                    }
                    )),
                    n.updateActivePagerLink(n.pager, n.startingSlide, n.activePagerClass)
                }
                function m(t) {
                    function n(e) {
                        return (e = parseInt(e, 10).toString(16)).length < 2 ? "0" + e : e
                    }
                    function i(t) {
                        for (; t && "html" != t.nodeName.toLowerCase(); t = t.parentNode) {
                            var r = e.css(t, "background-color");
                            if (r && r.indexOf("rgb") >= 0) {
                                var i = r.match(/\d+/g);
                                return "#" + n(i[0]) + n(i[1]) + n(i[2])
                            }
                            if (r && "transparent" != r)
                                return r
                        }
                        return "#ffffff"
                    }
                    r("applying clearType background-color hack"),
                    t.each((function() {
                        e(this).css("background-color", i(this))
                    }
                    ))
                }
                e.expr[":"].paused = function(e) {
                    return e.cyclePause
                }
                ,
                e.fn.cycle = function(t, n) {
                    var o = {
                        s: this.selector,
                        c: this.context
                    };
                    return 0 === this.length && "stop" != t ? !e.isReady && o.s ? (i("DOM not ready, queuing slideshow"),
                    e((function() {
                        e(o.s, o.c).cycle(t, n)
                    }
                    )),
                    this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")),
                    this) : this.each((function() {
                        var a = s(this, t, n);
                        if (!1 !== a) {
                            a.updateActivePagerLink = a.updateActivePagerLink || e.fn.cycle.updateActivePagerLink,
                            this.cycleTimeout && clearTimeout(this.cycleTimeout),
                            this.cycleTimeout = this.cyclePause = 0,
                            this.cycleStop = 0;
                            var c = e(this)
                              , u = a.slideExpr ? e(a.slideExpr, this) : c.children()
                              , f = u.get();
                            if (f.length < 2)
                                i("terminating; too few slides: " + f.length);
                            else {
                                var p = l(c, u, f, a, o);
                                if (!1 !== p) {
                                    var y = p.continuous ? 10 : h(f[p.currSlide], f[p.nextSlide], p, !p.backwards);
                                    y && ((y += p.delay || 0) < 10 && (y = 10),
                                    r("first timeout: " + y),
                                    this.cycleTimeout = setTimeout((function() {
                                        d(f, p, 0, !a.backwards)
                                    }
                                    ), y))
                                }
                            }
                        }
                    }
                    ))
                }
                ,
                e.fn.cycle.resetState = function(t, n) {
                    n = n || t.fx,
                    t.before = [],
                    t.after = [],
                    t.cssBefore = e.extend({}, t.original.cssBefore),
                    t.cssAfter = e.extend({}, t.original.cssAfter),
                    t.animIn = e.extend({}, t.original.animIn),
                    t.animOut = e.extend({}, t.original.animOut),
                    t.fxFn = null,
                    e.each(t.original.before, (function() {
                        t.before.push(this)
                    }
                    )),
                    e.each(t.original.after, (function() {
                        t.after.push(this)
                    }
                    ));
                    var r = e.fn.cycle.transitions[n];
                    e.isFunction(r) && r(t.$cont, e(t.elements), t)
                }
                ,
                e.fn.cycle.updateActivePagerLink = function(t, n, r) {
                    e(t).each((function() {
                        e(this).children().removeClass(r).eq(n).addClass(r)
                    }
                    ))
                }
                ,
                e.fn.cycle.next = function(e) {
                    y(e, 1)
                }
                ,
                e.fn.cycle.prev = function(e) {
                    y(e, 0)
                }
                ,
                e.fn.cycle.createPagerAnchor = function(t, n, i, s, a) {
                    var c;
                    if (e.isFunction(a.pagerAnchorBuilder) ? (c = a.pagerAnchorBuilder(t, n),
                    r("pagerAnchorBuilder(" + t + ", el) returned: " + c)) : c = '<a href="#">' + (t + 1) + "</a>",
                    c) {
                        var l = e(c);
                        if (0 === l.parents("body").length) {
                            var u = [];
                            i.length > 1 ? (i.each((function() {
                                var t = l.clone(!0);
                                e(this).append(t),
                                u.push(t[0])
                            }
                            )),
                            l = e(u)) : l.appendTo(i)
                        }
                        a.pagerAnchors = a.pagerAnchors || [],
                        a.pagerAnchors.push(l);
                        var f = function(n) {
                            n.preventDefault(),
                            a.nextSlide = t;
                            var r = a.$cont[0]
                              , i = r.cycleTimeout;
                            i && (clearTimeout(i),
                            r.cycleTimeout = 0);
                            var o = a.onPagerEvent || a.pagerClick;
                            e.isFunction(o) && o(a.nextSlide, s[a.nextSlide]),
                            d(s, a, 1, a.currSlide < t)
                        };
                        /mouseenter|mouseover/i.test(a.pagerEvent) ? l.hover(f, (function() {}
                        )) : l.bind(a.pagerEvent, f),
                        /^click/.test(a.pagerEvent) || a.allowPagerClickBubble || l.bind("click.cycle", (function() {
                            return !1
                        }
                        ));
                        var p = a.$cont[0]
                          , h = !1;
                        a.pauseOnPagerHover && l.hover((function() {
                            h = !0,
                            p.cyclePause++,
                            o(p, !0, !0)
                        }
                        ), (function() {
                            h && p.cyclePause--,
                            o(p, !0, !0)
                        }
                        ))
                    }
                }
                ,
                e.fn.cycle.hopsFromLast = function(e, t) {
                    var n = e.lastSlide
                      , r = e.currSlide;
                    return t ? r > n ? r - n : e.slideCount - n : r < n ? n - r : n + e.slideCount - r
                }
                ,
                e.fn.cycle.commonReset = function(t, n, r, i, o, s) {
                    e(r.elements).not(t).hide(),
                    void 0 === r.cssBefore.opacity && (r.cssBefore.opacity = 1),
                    r.cssBefore.display = "block",
                    r.slideResize && !1 !== i && n.cycleW > 0 && (r.cssBefore.width = n.cycleW),
                    r.slideResize && !1 !== o && n.cycleH > 0 && (r.cssBefore.height = n.cycleH),
                    r.cssAfter = r.cssAfter || {},
                    r.cssAfter.display = "none",
                    e(t).css("zIndex", r.slideCount + (!0 === s ? 1 : 0)),
                    e(n).css("zIndex", r.slideCount + (!0 === s ? 0 : 1))
                }
                ,
                e.fn.cycle.custom = function(t, n, r, i, o, s) {
                    var a = e(t)
                      , c = e(n)
                      , l = r.speedIn
                      , u = r.speedOut
                      , f = r.easeIn
                      , p = r.easeOut
                      , d = r.animInDelay
                      , h = r.animOutDelay;
                    c.css(r.cssBefore),
                    s && (l = u = "number" == typeof s ? s : 1,
                    f = p = null);
                    var y = function() {
                        c.delay(d).animate(r.animIn, l, f, (function() {
                            i()
                        }
                        ))
                    };
                    a.delay(h).animate(r.animOut, u, p, (function() {
                        a.css(r.cssAfter),
                        r.sync || y()
                    }
                    )),
                    r.sync && y()
                }
                ,
                e.fn.cycle.transitions = {
                    fade: function(t, n, r) {
                        n.not(":eq(" + r.currSlide + ")").css("opacity", 0),
                        r.before.push((function(t, n, r) {
                            e.fn.cycle.commonReset(t, n, r),
                            r.cssBefore.opacity = 0
                        }
                        )),
                        r.animIn = {
                            opacity: 1
                        },
                        r.animOut = {
                            opacity: 0
                        },
                        r.cssBefore = {
                            top: 0,
                            left: 0
                        }
                    }
                },
                e.fn.cycle.ver = function() {
                    return n
                }
                ,
                e.fn.cycle.defaults = {
                    activePagerClass: "activeSlide",
                    after: null,
                    allowPagerClickBubble: !1,
                    animIn: null,
                    animInDelay: 0,
                    animOut: null,
                    animOutDelay: 0,
                    aspect: !1,
                    autostop: 0,
                    autostopCount: 0,
                    backwards: !1,
                    before: null,
                    center: null,
                    cleartype: !e.support.opacity,
                    cleartypeNoBg: !1,
                    containerResize: 1,
                    containerResizeHeight: 0,
                    continuous: 0,
                    cssAfter: null,
                    cssBefore: null,
                    delay: 0,
                    easeIn: null,
                    easeOut: null,
                    easing: null,
                    end: null,
                    fastOnEvent: 0,
                    fit: 0,
                    fx: "fade",
                    fxFn: null,
                    height: "auto",
                    manualTrump: !0,
                    metaAttr: "cycle",
                    next: null,
                    nowrap: 0,
                    onPagerEvent: null,
                    onPrevNextEvent: null,
                    pager: null,
                    pagerAnchorBuilder: null,
                    pagerEvent: "click.cycle",
                    pause: 0,
                    pauseOnPagerHover: 0,
                    prev: null,
                    prevNextEvent: "click.cycle",
                    random: 0,
                    randomizeEffects: 1,
                    requeueOnImageNotLoaded: !0,
                    requeueTimeout: 250,
                    rev: 0,
                    shuffle: null,
                    skipInitializationCallbacks: !1,
                    slideExpr: null,
                    slideResize: 1,
                    speed: 1e3,
                    speedIn: null,
                    speedOut: null,
                    startingSlide: t,
                    sync: 1,
                    timeout: 4e3,
                    timeoutFn: null,
                    updateActivePagerLink: null,
                    width: null
                },
                e.fn.cycle.transitions.none = function(t, n, r) {
                    r.fxFn = function(t, n, r, i) {
                        e(n).show(),
                        e(t).hide(),
                        i()
                    }
                }
                ,
                e.fn.cycle.transitions.fadeout = function(t, n, r) {
                    n.not(":eq(" + r.currSlide + ")").css({
                        display: "block",
                        opacity: 1
                    }),
                    r.before.push((function(t, n, r, i, o, s) {
                        e(t).css("zIndex", r.slideCount + (!0 !== s ? 1 : 0)),
                        e(n).css("zIndex", r.slideCount + (!0 !== s ? 0 : 1))
                    }
                    )),
                    r.animIn.opacity = 1,
                    r.animOut.opacity = 0,
                    r.cssBefore.opacity = 1,
                    r.cssBefore.display = "block",
                    r.cssAfter.zIndex = 0
                }
                ,
                e.fn.cycle.transitions.scrollUp = function(t, n, r) {
                    t.css("overflow", "hidden"),
                    r.before.push(e.fn.cycle.commonReset);
                    var i = t.height();
                    r.cssBefore.top = i,
                    r.cssBefore.left = 0,
                    r.cssFirst.top = 0,
                    r.animIn.top = 0,
                    r.animOut.top = -i
                }
                ,
                e.fn.cycle.transitions.scrollDown = function(t, n, r) {
                    t.css("overflow", "hidden"),
                    r.before.push(e.fn.cycle.commonReset);
                    var i = t.height();
                    r.cssFirst.top = 0,
                    r.cssBefore.top = -i,
                    r.cssBefore.left = 0,
                    r.animIn.top = 0,
                    r.animOut.top = i
                }
                ,
                e.fn.cycle.transitions.scrollLeft = function(t, n, r) {
                    t.css("overflow", "hidden"),
                    r.before.push(e.fn.cycle.commonReset);
                    var i = t.width();
                    r.cssFirst.left = 0,
                    r.cssBefore.left = i,
                    r.cssBefore.top = 0,
                    r.animIn.left = 0,
                    r.animOut.left = 0 - i
                }
                ,
                e.fn.cycle.transitions.scrollRight = function(t, n, r) {
                    t.css("overflow", "hidden"),
                    r.before.push(e.fn.cycle.commonReset);
                    var i = t.width();
                    r.cssFirst.left = 0,
                    r.cssBefore.left = -i,
                    r.cssBefore.top = 0,
                    r.animIn.left = 0,
                    r.animOut.left = i
                }
                ,
                e.fn.cycle.transitions.scrollHorz = function(t, n, r) {
                    t.css("overflow", "hidden").width(),
                    r.before.push((function(t, n, r, i) {
                        r.rev && (i = !i),
                        e.fn.cycle.commonReset(t, n, r),
                        r.cssBefore.left = i ? n.cycleW - 1 : 1 - n.cycleW,
                        r.animOut.left = i ? -t.cycleW : t.cycleW
                    }
                    )),
                    r.cssFirst.left = 0,
                    r.cssBefore.top = 0,
                    r.animIn.left = 0,
                    r.animOut.top = 0
                }
                ,
                e.fn.cycle.transitions.scrollVert = function(t, n, r) {
                    t.css("overflow", "hidden"),
                    r.before.push((function(t, n, r, i) {
                        r.rev && (i = !i),
                        e.fn.cycle.commonReset(t, n, r),
                        r.cssBefore.top = i ? 1 - n.cycleH : n.cycleH - 1,
                        r.animOut.top = i ? t.cycleH : -t.cycleH
                    }
                    )),
                    r.cssFirst.top = 0,
                    r.cssBefore.left = 0,
                    r.animIn.top = 0,
                    r.animOut.left = 0
                }
                ,
                e.fn.cycle.transitions.slideX = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e(r.elements).not(t).hide(),
                        e.fn.cycle.commonReset(t, n, r, !1, !0),
                        r.animIn.width = n.cycleW
                    }
                    )),
                    r.cssBefore.left = 0,
                    r.cssBefore.top = 0,
                    r.cssBefore.width = 0,
                    r.animIn.width = "show",
                    r.animOut.width = 0
                }
                ,
                e.fn.cycle.transitions.slideY = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e(r.elements).not(t).hide(),
                        e.fn.cycle.commonReset(t, n, r, !0, !1),
                        r.animIn.height = n.cycleH
                    }
                    )),
                    r.cssBefore.left = 0,
                    r.cssBefore.top = 0,
                    r.cssBefore.height = 0,
                    r.animIn.height = "show",
                    r.animOut.height = 0
                }
                ,
                e.fn.cycle.transitions.shuffle = function(t, n, r) {
                    var i, o = t.css("overflow", "visible").width();
                    for (n.css({
                        left: 0,
                        top: 0
                    }),
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !0, !0, !0)
                    }
                    )),
                    r.speedAdjusted || (r.speed = r.speed / 2,
                    r.speedAdjusted = !0),
                    r.random = 0,
                    r.shuffle = r.shuffle || {
                        left: -o,
                        top: 15
                    },
                    r.els = [],
                    i = 0; i < n.length; i++)
                        r.els.push(n[i]);
                    for (i = 0; i < r.currSlide; i++)
                        r.els.push(r.els.shift());
                    r.fxFn = function(t, n, r, i, o) {
                        r.rev && (o = !o);
                        var s = e(o ? t : n);
                        e(n).css(r.cssBefore);
                        var a = r.slideCount;
                        s.animate(r.shuffle, r.speedIn, r.easeIn, (function() {
                            for (var n = e.fn.cycle.hopsFromLast(r, o), c = 0; c < n; c++)
                                o ? r.els.push(r.els.shift()) : r.els.unshift(r.els.pop());
                            if (o)
                                for (var l = 0, u = r.els.length; l < u; l++)
                                    e(r.els[l]).css("z-index", u - l + a);
                            else {
                                var f = e(t).css("z-index");
                                s.css("z-index", parseInt(f, 10) + 1 + a)
                            }
                            s.animate({
                                left: 0,
                                top: 0
                            }, r.speedOut, r.easeOut, (function() {
                                e(o ? this : t).hide(),
                                i && i()
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    e.extend(r.cssBefore, {
                        display: "block",
                        opacity: 1,
                        top: 0,
                        left: 0
                    })
                }
                ,
                e.fn.cycle.transitions.turnUp = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !0, !1),
                        r.cssBefore.top = n.cycleH,
                        r.animIn.height = n.cycleH,
                        r.animOut.width = n.cycleW
                    }
                    )),
                    r.cssFirst.top = 0,
                    r.cssBefore.left = 0,
                    r.cssBefore.height = 0,
                    r.animIn.top = 0,
                    r.animOut.height = 0
                }
                ,
                e.fn.cycle.transitions.turnDown = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !0, !1),
                        r.animIn.height = n.cycleH,
                        r.animOut.top = t.cycleH
                    }
                    )),
                    r.cssFirst.top = 0,
                    r.cssBefore.left = 0,
                    r.cssBefore.top = 0,
                    r.cssBefore.height = 0,
                    r.animOut.height = 0
                }
                ,
                e.fn.cycle.transitions.turnLeft = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !1, !0),
                        r.cssBefore.left = n.cycleW,
                        r.animIn.width = n.cycleW
                    }
                    )),
                    r.cssBefore.top = 0,
                    r.cssBefore.width = 0,
                    r.animIn.left = 0,
                    r.animOut.width = 0
                }
                ,
                e.fn.cycle.transitions.turnRight = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !1, !0),
                        r.animIn.width = n.cycleW,
                        r.animOut.left = t.cycleW
                    }
                    )),
                    e.extend(r.cssBefore, {
                        top: 0,
                        left: 0,
                        width: 0
                    }),
                    r.animIn.left = 0,
                    r.animOut.width = 0
                }
                ,
                e.fn.cycle.transitions.zoom = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !1, !1, !0),
                        r.cssBefore.top = n.cycleH / 2,
                        r.cssBefore.left = n.cycleW / 2,
                        e.extend(r.animIn, {
                            top: 0,
                            left: 0,
                            width: n.cycleW,
                            height: n.cycleH
                        }),
                        e.extend(r.animOut, {
                            width: 0,
                            height: 0,
                            top: t.cycleH / 2,
                            left: t.cycleW / 2
                        })
                    }
                    )),
                    r.cssFirst.top = 0,
                    r.cssFirst.left = 0,
                    r.cssBefore.width = 0,
                    r.cssBefore.height = 0
                }
                ,
                e.fn.cycle.transitions.fadeZoom = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !1, !1),
                        r.cssBefore.left = n.cycleW / 2,
                        r.cssBefore.top = n.cycleH / 2,
                        e.extend(r.animIn, {
                            top: 0,
                            left: 0,
                            width: n.cycleW,
                            height: n.cycleH
                        })
                    }
                    )),
                    r.cssBefore.width = 0,
                    r.cssBefore.height = 0,
                    r.animOut.opacity = 0
                }
                ,
                e.fn.cycle.transitions.blindX = function(t, n, r) {
                    var i = t.css("overflow", "hidden").width();
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r),
                        r.animIn.width = n.cycleW,
                        r.animOut.left = t.cycleW
                    }
                    )),
                    r.cssBefore.left = i,
                    r.cssBefore.top = 0,
                    r.animIn.left = 0,
                    r.animOut.left = i
                }
                ,
                e.fn.cycle.transitions.blindY = function(t, n, r) {
                    var i = t.css("overflow", "hidden").height();
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r),
                        r.animIn.height = n.cycleH,
                        r.animOut.top = t.cycleH
                    }
                    )),
                    r.cssBefore.top = i,
                    r.cssBefore.left = 0,
                    r.animIn.top = 0,
                    r.animOut.top = i
                }
                ,
                e.fn.cycle.transitions.blindZ = function(t, n, r) {
                    var i = t.css("overflow", "hidden").height()
                      , o = t.width();
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r),
                        r.animIn.height = n.cycleH,
                        r.animOut.top = t.cycleH
                    }
                    )),
                    r.cssBefore.top = i,
                    r.cssBefore.left = o,
                    r.animIn.top = 0,
                    r.animIn.left = 0,
                    r.animOut.top = i,
                    r.animOut.left = o
                }
                ,
                e.fn.cycle.transitions.growX = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !1, !0),
                        r.cssBefore.left = this.cycleW / 2,
                        r.animIn.left = 0,
                        r.animIn.width = this.cycleW,
                        r.animOut.left = 0
                    }
                    )),
                    r.cssBefore.top = 0,
                    r.cssBefore.width = 0
                }
                ,
                e.fn.cycle.transitions.growY = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !0, !1),
                        r.cssBefore.top = this.cycleH / 2,
                        r.animIn.top = 0,
                        r.animIn.height = this.cycleH,
                        r.animOut.top = 0
                    }
                    )),
                    r.cssBefore.height = 0,
                    r.cssBefore.left = 0
                }
                ,
                e.fn.cycle.transitions.curtainX = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !1, !0, !0),
                        r.cssBefore.left = n.cycleW / 2,
                        r.animIn.left = 0,
                        r.animIn.width = this.cycleW,
                        r.animOut.left = t.cycleW / 2,
                        r.animOut.width = 0
                    }
                    )),
                    r.cssBefore.top = 0,
                    r.cssBefore.width = 0
                }
                ,
                e.fn.cycle.transitions.curtainY = function(t, n, r) {
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !0, !1, !0),
                        r.cssBefore.top = n.cycleH / 2,
                        r.animIn.top = 0,
                        r.animIn.height = n.cycleH,
                        r.animOut.top = t.cycleH / 2,
                        r.animOut.height = 0
                    }
                    )),
                    r.cssBefore.height = 0,
                    r.cssBefore.left = 0
                }
                ,
                e.fn.cycle.transitions.cover = function(t, n, r) {
                    var i = r.direction || "left"
                      , o = t.css("overflow", "hidden").width()
                      , s = t.height();
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r),
                        r.cssAfter.display = "",
                        "right" == i ? r.cssBefore.left = -o : "up" == i ? r.cssBefore.top = s : "down" == i ? r.cssBefore.top = -s : r.cssBefore.left = o
                    }
                    )),
                    r.animIn.left = 0,
                    r.animIn.top = 0,
                    r.cssBefore.top = 0,
                    r.cssBefore.left = 0
                }
                ,
                e.fn.cycle.transitions.uncover = function(t, n, r) {
                    var i = r.direction || "left"
                      , o = t.css("overflow", "hidden").width()
                      , s = t.height();
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !0, !0, !0),
                        "right" == i ? r.animOut.left = o : "up" == i ? r.animOut.top = -s : "down" == i ? r.animOut.top = s : r.animOut.left = -o
                    }
                    )),
                    r.animIn.left = 0,
                    r.animIn.top = 0,
                    r.cssBefore.top = 0,
                    r.cssBefore.left = 0
                }
                ,
                e.fn.cycle.transitions.toss = function(t, n, r) {
                    var i = t.css("overflow", "visible").width()
                      , o = t.height();
                    r.before.push((function(t, n, r) {
                        e.fn.cycle.commonReset(t, n, r, !0, !0, !0),
                        r.animOut.left || r.animOut.top ? r.animOut.opacity = 0 : e.extend(r.animOut, {
                            left: 2 * i,
                            top: -o / 2,
                            opacity: 0
                        })
                    }
                    )),
                    r.cssBefore.left = 0,
                    r.cssBefore.top = 0,
                    r.animIn.left = 0
                }
                ,
                e.fn.cycle.transitions.wipe = function(t, n, r) {
                    var i, o = t.css("overflow", "hidden").width(), s = t.height();
                    if (r.cssBefore = r.cssBefore || {},
                    r.clip)
                        if (/l2r/.test(r.clip))
                            i = "rect(0px 0px " + s + "px 0px)";
                        else if (/r2l/.test(r.clip))
                            i = "rect(0px " + o + "px " + s + "px " + o + "px)";
                        else if (/t2b/.test(r.clip))
                            i = "rect(0px " + o + "px 0px 0px)";
                        else if (/b2t/.test(r.clip))
                            i = "rect(" + s + "px " + o + "px " + s + "px 0px)";
                        else if (/zoom/.test(r.clip)) {
                            var a = parseInt(s / 2, 10)
                              , c = parseInt(o / 2, 10);
                            i = "rect(" + a + "px " + c + "px " + a + "px " + c + "px)"
                        }
                    r.cssBefore.clip = r.cssBefore.clip || i || "rect(0px 0px 0px 0px)";
                    var l = r.cssBefore.clip.match(/(\d+)/g)
                      , u = parseInt(l[0], 10)
                      , f = parseInt(l[1], 10)
                      , p = parseInt(l[2], 10)
                      , d = parseInt(l[3], 10);
                    r.before.push((function(t, n, r) {
                        if (t != n) {
                            var i = e(t)
                              , a = e(n);
                            e.fn.cycle.commonReset(t, n, r, !0, !0, !1),
                            r.cssAfter.display = "block";
                            var c = 1
                              , l = parseInt(r.speedIn / 13, 10) - 1;
                            !function e() {
                                var t = u ? u - parseInt(c * (u / l), 10) : 0
                                  , n = d ? d - parseInt(c * (d / l), 10) : 0
                                  , r = p < s ? p + parseInt(c * ((s - p) / l || 1), 10) : s
                                  , h = f < o ? f + parseInt(c * ((o - f) / l || 1), 10) : o;
                                a.css({
                                    clip: "rect(" + t + "px " + h + "px " + r + "px " + n + "px)"
                                }),
                                c++ <= l ? setTimeout(e, 13) : i.css("display", "none")
                            }()
                        }
                    }
                    )),
                    e.extend(r.cssBefore, {
                        display: "block",
                        opacity: 1,
                        top: 0,
                        left: 0
                    }),
                    r.animIn = {
                        left: 0
                    },
                    r.animOut = {
                        left: 0
                    }
                }
            }
            ) ? r.apply(t, i) : r) || (e.exports = o)
        }
        ,
        9755: function(e, t) {
            var n;
            !function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document)
                        throw new Error("jQuery requires a window with a document");
                    return n(e)
                }
                : n(t)
            }("undefined" != typeof window ? window : this, (function(r, i) {
                "use strict";
                var o = []
                  , s = Object.getPrototypeOf
                  , a = o.slice
                  , c = o.flat ? function(e) {
                    return o.flat.call(e)
                }
                : function(e) {
                    return o.concat.apply([], e)
                }
                  , l = o.push
                  , u = o.indexOf
                  , f = {}
                  , p = f.toString
                  , d = f.hasOwnProperty
                  , h = d.toString
                  , y = h.call(Object)
                  , g = {}
                  , m = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                }
                  , v = function(e) {
                    return null != e && e === e.window
                }
                  , b = r.document
                  , x = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function w(e, t, n) {
                    var r, i, o = (n = n || b).createElement("script");
                    if (o.text = e,
                    t)
                        for (r in x)
                            (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }
                function S(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
                }
                var k = "3.6.0"
                  , T = function(e, t) {
                    return new T.fn.init(e,t)
                };
                function C(e) {
                    var t = !!e && "length"in e && e.length
                      , n = S(e);
                    return !m(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                T.fn = T.prototype = {
                    jquery: k,
                    constructor: T,
                    length: 0,
                    toArray: function() {
                        return a.call(this)
                    },
                    get: function(e) {
                        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = T.merge(this.constructor(), e);
                        return t.prevObject = this,
                        t
                    },
                    each: function(e) {
                        return T.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(T.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(T.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        }
                        )))
                    },
                    odd: function() {
                        return this.pushStack(T.grep(this, (function(e, t) {
                            return t % 2
                        }
                        )))
                    },
                    eq: function(e) {
                        var t = this.length
                          , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: l,
                    sort: o.sort,
                    splice: o.splice
                },
                T.extend = T.fn.extend = function() {
                    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, c = arguments.length, l = !1;
                    for ("boolean" == typeof s && (l = s,
                    s = arguments[a] || {},
                    a++),
                    "object" == typeof s || m(s) || (s = {}),
                    a === c && (s = this,
                    a--); a < c; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                r = e[t],
                                "__proto__" !== t && s !== r && (l && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t],
                                o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {},
                                i = !1,
                                s[t] = T.extend(l, o, r)) : void 0 !== r && (s[t] = r));
                    return s
                }
                ,
                T.extend({
                    expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && h.call(n) === y)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (C(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                                ;
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r]))
                                    break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                        n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : u.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                            e[i++] = t[r];
                        return e.length = i,
                        e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                            !t(e[i], i) !== s && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0, s = [];
                        if (C(e))
                            for (r = e.length; o < r; o++)
                                null != (i = t(e[o], o, n)) && s.push(i);
                        else
                            for (o in e)
                                null != (i = t(e[o], o, n)) && s.push(i);
                        return c(s)
                    },
                    guid: 1,
                    support: g
                }),
                "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]),
                T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    f["[object " + t + "]"] = t.toLowerCase()
                }
                ));
                var A = function(e) {
                    var t, n, r, i, o, s, a, c, l, u, f, p, d, h, y, g, m, v, b, x = "sizzle" + 1 * new Date, w = e.document, S = 0, k = 0, T = ce(), C = ce(), A = ce(), O = ce(), E = function(e, t) {
                        return e === t && (f = !0),
                        0
                    }, I = {}.hasOwnProperty, P = [], j = P.pop, N = P.push, B = P.push, D = P.slice, L = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", $ = "\\[[\\x20\\t\\r\\n\\f]*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]", M = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", q = new RegExp(R + "+","g"), W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"), _ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), z = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), U = new RegExp(R + "|>"), G = new RegExp(M), X = new RegExp("^" + F + "$"), V = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F + "|[*])"),
                        ATTR: new RegExp("^" + $),
                        PSEUDO: new RegExp("^" + M),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),
                        bool: new RegExp("^(?:" + H + ")$","i"),
                        needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")
                    }, J = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, oe = function() {
                        p()
                    }, se = xe((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }
                    ), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        B.apply(P = D.call(w.childNodes), w.childNodes),
                        P[w.childNodes.length].nodeType
                    } catch (e) {
                        B = {
                            apply: P.length ? function(e, t) {
                                N.apply(e, D.call(t))
                            }
                            : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                    ;
                                e.length = n - 1
                            }
                        }
                    }
                    function ae(e, t, r, i) {
                        var o, a, l, u, f, h, m, v = t && t.ownerDocument, w = t ? t.nodeType : 9;
                        if (r = r || [],
                        "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                            return r;
                        if (!i && (p(t),
                        t = t || d,
                        y)) {
                            if (11 !== w && (f = Z.exec(e)))
                                if (o = f[1]) {
                                    if (9 === w) {
                                        if (!(l = t.getElementById(o)))
                                            return r;
                                        if (l.id === o)
                                            return r.push(l),
                                            r
                                    } else if (v && (l = v.getElementById(o)) && b(t, l) && l.id === o)
                                        return r.push(l),
                                        r
                                } else {
                                    if (f[2])
                                        return B.apply(r, t.getElementsByTagName(e)),
                                        r;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                        return B.apply(r, t.getElementsByClassName(o)),
                                        r
                                }
                            if (n.qsa && !O[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                if (m = e,
                                v = t,
                                1 === w && (U.test(e) || z.test(e))) {
                                    for ((v = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = x)),
                                    a = (h = s(e)).length; a--; )
                                        h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                                    m = h.join(",")
                                }
                                try {
                                    return B.apply(r, v.querySelectorAll(m)),
                                    r
                                } catch (t) {
                                    O(e, !0)
                                } finally {
                                    u === x && t.removeAttribute("id")
                                }
                            }
                        }
                        return c(e.replace(W, "$1"), t, r, i)
                    }
                    function ce() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                            t[n + " "] = i
                        }
                    }
                    function le(e) {
                        return e[x] = !0,
                        e
                    }
                    function ue(e) {
                        var t = d.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                            t = null
                        }
                    }
                    function fe(e, t) {
                        for (var n = e.split("|"), i = n.length; i--; )
                            r.attrHandle[n[i]] = t
                    }
                    function pe(e, t) {
                        var n = t && e
                          , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r)
                            return r;
                        if (n)
                            for (; n = n.nextSibling; )
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function de(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }
                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function ye(e) {
                        return function(t) {
                            return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label"in t && t.disabled === e
                        }
                    }
                    function ge(e) {
                        return le((function(t) {
                            return t = +t,
                            le((function(n, r) {
                                for (var i, o = e([], n.length, t), s = o.length; s--; )
                                    n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                            }
                            ))
                        }
                        ))
                    }
                    function me(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = ae.support = {},
                    o = ae.isXML = function(e) {
                        var t = e && e.namespaceURI
                          , n = e && (e.ownerDocument || e).documentElement;
                        return !J.test(t || n && n.nodeName || "HTML")
                    }
                    ,
                    p = ae.setDocument = function(e) {
                        var t, i, s = e ? e.ownerDocument || e : w;
                        return s != d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement,
                        y = !o(d),
                        w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                        n.scope = ue((function(e) {
                            return h.appendChild(e).appendChild(d.createElement("div")),
                            void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }
                        )),
                        n.attributes = ue((function(e) {
                            return e.className = "i",
                            !e.getAttribute("className")
                        }
                        )),
                        n.getElementsByTagName = ue((function(e) {
                            return e.appendChild(d.createComment("")),
                            !e.getElementsByTagName("*").length
                        }
                        )),
                        n.getElementsByClassName = Q.test(d.getElementsByClassName),
                        n.getById = ue((function(e) {
                            return h.appendChild(e).id = x,
                            !d.getElementsByName || !d.getElementsByName(x).length
                        }
                        )),
                        n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                        ,
                        r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && y) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                        ) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                        ,
                        r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && y) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o];
                                    for (i = t.getElementsByName(e),
                                    r = 0; o = i[r++]; )
                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                            return [o]
                                }
                                return []
                            }
                        }
                        ),
                        r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        }
                        : function(e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++]; )
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                        ,
                        r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && y)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        m = [],
                        g = [],
                        (n.qsa = Q.test(d.querySelectorAll)) && (ue((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")"),
                            e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="),
                            (t = d.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || g.push(":checked"),
                            e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            g.push("[\\r\\n\\f]")
                        }
                        )),
                        ue((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                            h.appendChild(e).disabled = !0,
                            2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            g.push(",.*:")
                        }
                        ))),
                        (n.matchesSelector = Q.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                            n.disconnectedMatch = v.call(e, "*"),
                            v.call(e, "[s!='']:x"),
                            m.push("!=", M)
                        }
                        )),
                        g = g.length && new RegExp(g.join("|")),
                        m = m.length && new RegExp(m.join("|")),
                        t = Q.test(h.compareDocumentPosition),
                        b = t || Q.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                              , r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                        ,
                        E = t ? function(e, t) {
                            if (e === t)
                                return f = !0,
                                0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && b(w, e) ? -1 : t == d || t.ownerDocument == w && b(w, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & r ? -1 : 1)
                        }
                        : function(e, t) {
                            if (e === t)
                                return f = !0,
                                0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], a = [t];
                            if (!i || !o)
                                return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                            if (i === o)
                                return pe(e, t);
                            for (n = e; n = n.parentNode; )
                                s.unshift(n);
                            for (n = t; n = n.parentNode; )
                                a.unshift(n);
                            for (; s[r] === a[r]; )
                                r++;
                            return r ? pe(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0
                        }
                        ,
                        d) : d
                    }
                    ,
                    ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }
                    ,
                    ae.matchesSelector = function(e, t) {
                        if (p(e),
                        n.matchesSelector && y && !O[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t)))
                            try {
                                var r = v.call(e, t);
                                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                    return r
                            } catch (e) {
                                O(t, !0)
                            }
                        return ae(t, d, null, [e]).length > 0
                    }
                    ,
                    ae.contains = function(e, t) {
                        return (e.ownerDocument || e) != d && p(e),
                        b(e, t)
                    }
                    ,
                    ae.attr = function(e, t) {
                        (e.ownerDocument || e) != d && p(e);
                        var i = r.attrHandle[t.toLowerCase()]
                          , o = i && I.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !y) : void 0;
                        return void 0 !== o ? o : n.attributes || !y ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }
                    ,
                    ae.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }
                    ,
                    ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    ae.uniqueSort = function(e) {
                        var t, r = [], i = 0, o = 0;
                        if (f = !n.detectDuplicates,
                        u = !n.sortStable && e.slice(0),
                        e.sort(E),
                        f) {
                            for (; t = e[o++]; )
                                t === e[o] && (i = r.push(o));
                            for (; i--; )
                                e.splice(r[i], 1)
                        }
                        return u = null,
                        e
                    }
                    ,
                    i = ae.getText = function(e) {
                        var t, n = "", r = 0, o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent)
                                    return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    n += i(e)
                            } else if (3 === o || 4 === o)
                                return e.nodeValue
                        } else
                            for (; t = e[r++]; )
                                n += i(t);
                        return n
                    }
                    ,
                    (r = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne),
                                e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                                e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                e[2] = n.slice(0, t)),
                                e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                }
                                : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = T[e + " "];
                                return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) && T(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }
                                ))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = ae.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "",
                                    "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3)
                                  , s = "last" !== e.slice(-4)
                                  , a = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                }
                                : function(t, n, c) {
                                    var l, u, f, p, d, h, y = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, m = a && t.nodeName.toLowerCase(), v = !c && !a, b = !1;
                                    if (g) {
                                        if (o) {
                                            for (; y; ) {
                                                for (p = t; p = p[y]; )
                                                    if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                                        return !1;
                                                h = y = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [s ? g.firstChild : g.lastChild],
                                        s && v) {
                                            for (b = (d = (l = (u = (f = (p = g)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === S && l[1]) && l[2],
                                            p = d && g.childNodes[d]; p = ++d && p && p[y] || (b = d = 0) || h.pop(); )
                                                if (1 === p.nodeType && ++b && p === t) {
                                                    u[e] = [S, d, b];
                                                    break
                                                }
                                        } else if (v && (b = d = (l = (u = (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === S && l[1]),
                                        !1 === b)
                                            for (; (p = ++d && p && p[y] || (b = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (v && ((u = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [S, b]),
                                            p !== t)); )
                                                ;
                                        return (b -= i) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                                r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                    for (var r, o = i(e, t), s = o.length; s--; )
                                        e[r = L(e, o[s])] = !(n[r] = o[s])
                                }
                                )) : function(e) {
                                    return i(e, 0, n)
                                }
                                ) : i
                            }
                        },
                        pseudos: {
                            not: le((function(e) {
                                var t = []
                                  , n = []
                                  , r = a(e.replace(W, "$1"));
                                return r[x] ? le((function(e, t, n, i) {
                                    for (var o, s = r(e, null, i, []), a = e.length; a--; )
                                        (o = s[a]) && (e[a] = !(t[a] = o))
                                }
                                )) : function(e, i, o) {
                                    return t[0] = e,
                                    r(t, null, o, n),
                                    t[0] = null,
                                    !n.pop()
                                }
                            }
                            )),
                            has: le((function(e) {
                                return function(t) {
                                    return ae(e, t).length > 0
                                }
                            }
                            )),
                            contains: le((function(e) {
                                return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                }
                            }
                            )),
                            lang: le((function(e) {
                                return X.test(e || "") || ae.error("unsupported lang: " + e),
                                e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }
                            )),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ye(!1),
                            disabled: ye(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Y.test(e.nodeName)
                            },
                            input: function(e) {
                                return K.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge((function() {
                                return [0]
                            }
                            )),
                            last: ge((function(e, t) {
                                return [t - 1]
                            }
                            )),
                            eq: ge((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }
                            )),
                            even: ge((function(e, t) {
                                for (var n = 0; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            odd: ge((function(e, t) {
                                for (var n = 1; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            lt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                                    e.push(r);
                                return e
                            }
                            )),
                            gt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; )
                                    e.push(r);
                                return e
                            }
                            ))
                        }
                    }).pseudos.nth = r.pseudos.eq,
                    {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        r.pseudos[t] = de(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        r.pseudos[t] = he(t);
                    function ve() {}
                    function be(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++)
                            r += e[t].value;
                        return r
                    }
                    function xe(e, t, n) {
                        var r = t.dir
                          , i = t.next
                          , o = i || r
                          , s = n && "parentNode" === o
                          , a = k++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[r]; )
                                if (1 === t.nodeType || s)
                                    return e(t, n, i);
                            return !1
                        }
                        : function(t, n, c) {
                            var l, u, f, p = [S, a];
                            if (c) {
                                for (; t = t[r]; )
                                    if ((1 === t.nodeType || s) && e(t, n, c))
                                        return !0
                            } else
                                for (; t = t[r]; )
                                    if (1 === t.nodeType || s)
                                        if (u = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                        i && i === t.nodeName.toLowerCase())
                                            t = t[r] || t;
                                        else {
                                            if ((l = u[o]) && l[0] === S && l[1] === a)
                                                return p[2] = l[2];
                                            if (u[o] = p,
                                            p[2] = e(t, n, c))
                                                return !0
                                        }
                            return !1
                        }
                    }
                    function we(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--; )
                                if (!e[i](t, n, r))
                                    return !1;
                            return !0
                        }
                        : e[0]
                    }
                    function Se(e, t, n, r, i) {
                        for (var o, s = [], a = 0, c = e.length, l = null != t; a < c; a++)
                            (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                            l && t.push(a)));
                        return s
                    }
                    function ke(e, t, n, r, i, o) {
                        return r && !r[x] && (r = ke(r)),
                        i && !i[x] && (i = ke(i, o)),
                        le((function(o, s, a, c) {
                            var l, u, f, p = [], d = [], h = s.length, y = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    ae(e, t[r], n);
                                return n
                            }(t || "*", a.nodeType ? [a] : a, []), g = !e || !o && t ? y : Se(y, p, e, a, c), m = n ? i || (o ? e : h || r) ? [] : s : g;
                            if (n && n(g, m, a, c),
                            r)
                                for (l = Se(m, d),
                                r(l, [], a, c),
                                u = l.length; u--; )
                                    (f = l[u]) && (m[d[u]] = !(g[d[u]] = f));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [],
                                        u = m.length; u--; )
                                            (f = m[u]) && l.push(g[u] = f);
                                        i(null, m = [], l, c)
                                    }
                                    for (u = m.length; u--; )
                                        (f = m[u]) && (l = i ? L(o, f) : p[u]) > -1 && (o[l] = !(s[l] = f))
                                }
                            } else
                                m = Se(m === s ? m.splice(h, m.length) : m),
                                i ? i(null, s, m, c) : B.apply(s, m)
                        }
                        ))
                    }
                    function Te(e) {
                        for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], c = s ? 1 : 0, u = xe((function(e) {
                            return e === t
                        }
                        ), a, !0), f = xe((function(e) {
                            return L(t, e) > -1
                        }
                        ), a, !0), p = [function(e, n, r) {
                            var i = !s && (r || n !== l) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
                            return t = null,
                            i
                        }
                        ]; c < o; c++)
                            if (n = r.relative[e[c].type])
                                p = [xe(we(p), n)];
                            else {
                                if ((n = r.filter[e[c].type].apply(null, e[c].matches))[x]) {
                                    for (i = ++c; i < o && !r.relative[e[i].type]; i++)
                                        ;
                                    return ke(c > 1 && we(p), c > 1 && be(e.slice(0, c - 1).concat({
                                        value: " " === e[c - 2].type ? "*" : ""
                                    })).replace(W, "$1"), n, c < i && Te(e.slice(c, i)), i < o && Te(e = e.slice(i)), i < o && be(e))
                                }
                                p.push(n)
                            }
                        return we(p)
                    }
                    return ve.prototype = r.filters = r.pseudos,
                    r.setFilters = new ve,
                    s = ae.tokenize = function(e, t) {
                        var n, i, o, s, a, c, l, u = C[e + " "];
                        if (u)
                            return t ? 0 : u.slice(0);
                        for (a = e,
                        c = [],
                        l = r.preFilter; a; ) {
                            for (s in n && !(i = _.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                            c.push(o = [])),
                            n = !1,
                            (i = z.exec(a)) && (n = i.shift(),
                            o.push({
                                value: n,
                                type: i[0].replace(W, " ")
                            }),
                            a = a.slice(n.length)),
                            r.filter)
                                !(i = V[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(),
                                o.push({
                                    value: n,
                                    type: s,
                                    matches: i
                                }),
                                a = a.slice(n.length));
                            if (!n)
                                break
                        }
                        return t ? a.length : a ? ae.error(e) : C(e, c).slice(0)
                    }
                    ,
                    a = ae.compile = function(e, t) {
                        var n, i = [], o = [], a = A[e + " "];
                        if (!a) {
                            for (t || (t = s(e)),
                            n = t.length; n--; )
                                (a = Te(t[n]))[x] ? i.push(a) : o.push(a);
                            (a = A(e, function(e, t) {
                                var n = t.length > 0
                                  , i = e.length > 0
                                  , o = function(o, s, a, c, u) {
                                    var f, h, g, m = 0, v = "0", b = o && [], x = [], w = l, k = o || i && r.find.TAG("*", u), T = S += null == w ? 1 : Math.random() || .1, C = k.length;
                                    for (u && (l = s == d || s || u); v !== C && null != (f = k[v]); v++) {
                                        if (i && f) {
                                            for (h = 0,
                                            s || f.ownerDocument == d || (p(f),
                                            a = !y); g = e[h++]; )
                                                if (g(f, s || d, a)) {
                                                    c.push(f);
                                                    break
                                                }
                                            u && (S = T)
                                        }
                                        n && ((f = !g && f) && m--,
                                        o && b.push(f))
                                    }
                                    if (m += v,
                                    n && v !== m) {
                                        for (h = 0; g = t[h++]; )
                                            g(b, x, s, a);
                                        if (o) {
                                            if (m > 0)
                                                for (; v--; )
                                                    b[v] || x[v] || (x[v] = j.call(c));
                                            x = Se(x)
                                        }
                                        B.apply(c, x),
                                        u && !o && x.length > 0 && m + t.length > 1 && ae.uniqueSort(c)
                                    }
                                    return u && (S = T,
                                    l = w),
                                    b
                                };
                                return n ? le(o) : o
                            }(o, i))).selector = e
                        }
                        return a
                    }
                    ,
                    c = ae.select = function(e, t, n, i) {
                        var o, c, l, u, f, p = "function" == typeof e && e, d = !i && s(e = p.selector || e);
                        if (n = n || [],
                        1 === d.length) {
                            if ((c = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && 9 === t.nodeType && y && r.relative[c[1].type]) {
                                if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                                    return n;
                                p && (t = t.parentNode),
                                e = e.slice(c.shift().value.length)
                            }
                            for (o = V.needsContext.test(e) ? 0 : c.length; o-- && (l = c[o],
                            !r.relative[u = l.type]); )
                                if ((f = r.find[u]) && (i = f(l.matches[0].replace(te, ne), ee.test(c[0].type) && me(t.parentNode) || t))) {
                                    if (c.splice(o, 1),
                                    !(e = i.length && be(c)))
                                        return B.apply(n, i),
                                        n;
                                    break
                                }
                        }
                        return (p || a(e, d))(i, t, !y, n, !t || ee.test(e) && me(t.parentNode) || t),
                        n
                    }
                    ,
                    n.sortStable = x.split("").sort(E).join("") === x,
                    n.detectDuplicates = !!f,
                    p(),
                    n.sortDetached = ue((function(e) {
                        return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                    }
                    )),
                    ue((function(e) {
                        return e.innerHTML = "<a href='#'></a>",
                        "#" === e.firstChild.getAttribute("href")
                    }
                    )) || fe("type|href|height|width", (function(e, t, n) {
                        if (!n)
                            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }
                    )),
                    n.attributes && ue((function(e) {
                        return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    }
                    )) || fe("value", (function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase())
                            return e.defaultValue
                    }
                    )),
                    ue((function(e) {
                        return null == e.getAttribute("disabled")
                    }
                    )) || fe(H, (function(e, t, n) {
                        var r;
                        if (!n)
                            return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                    )),
                    ae
                }(r);
                T.find = A,
                T.expr = A.selectors,
                T.expr[":"] = T.expr.pseudos,
                T.uniqueSort = T.unique = A.uniqueSort,
                T.text = A.getText,
                T.isXMLDoc = A.isXML,
                T.contains = A.contains,
                T.escapeSelector = A.escape;
                var O = function(e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && T(e).is(n))
                                break;
                            r.push(e)
                        }
                    return r
                }
                  , E = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                  , I = T.expr.match.needsContext;
                function P(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function N(e, t, n) {
                    return m(t) ? T.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n
                    }
                    )) : t.nodeType ? T.grep(e, (function(e) {
                        return e === t !== n
                    }
                    )) : "string" != typeof t ? T.grep(e, (function(e) {
                        return u.call(t, e) > -1 !== n
                    }
                    )) : T.filter(t, e, n)
                }
                T.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, (function(e) {
                        return 1 === e.nodeType
                    }
                    )))
                }
                ,
                T.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, i = this;
                        if ("string" != typeof e)
                            return this.pushStack(T(e).filter((function() {
                                for (t = 0; t < r; t++)
                                    if (T.contains(i[t], this))
                                        return !0
                            }
                            )));
                        for (n = this.pushStack([]),
                        t = 0; t < r; t++)
                            T.find(e, i[t], n);
                        return r > 1 ? T.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(N(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(N(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!N(this, "string" == typeof e && I.test(e) ? T(e) : e || [], !1).length
                    }
                });
                var B, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (T.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e)
                        return this;
                    if (n = n || B,
                    "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t)
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof T ? t[0] : t,
                            T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                            j.test(r[1]) && T.isPlainObject(t))
                                for (r in t)
                                    m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (i = b.getElementById(r[2])) && (this[0] = i,
                        this.length = 1),
                        this
                    }
                    return e.nodeType ? (this[0] = e,
                    this.length = 1,
                    this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
                }
                ).prototype = T.fn,
                B = T(b);
                var L = /^(?:parents|prev(?:Until|All))/
                  , H = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function R(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; )
                        ;
                    return e
                }
                T.fn.extend({
                    has: function(e) {
                        var t = T(e, this)
                          , n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (T.contains(this, t[e]))
                                    return !0
                        }
                        ))
                    },
                    closest: function(e, t) {
                        var n, r = 0, i = this.length, o = [], s = "string" != typeof e && T(e);
                        if (!I.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? u.call(T(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                T.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return O(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return O(e, "parentNode", n)
                    },
                    next: function(e) {
                        return R(e, "nextSibling")
                    },
                    prev: function(e) {
                        return R(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return O(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return O(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return O(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return O(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return E((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return E(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (P(e, "template") && (e = e.content || e),
                        T.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    T.fn[e] = function(n, r) {
                        var i = T.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = T.filter(r, i)),
                        this.length > 1 && (H[e] || T.uniqueSort(i),
                        L.test(e) && i.reverse()),
                        this.pushStack(i)
                    }
                }
                ));
                var F = /[^\x20\t\r\n\f]+/g;
                function $(e) {
                    return e
                }
                function M(e) {
                    throw e
                }
                function q(e, t, n, r) {
                    var i;
                    try {
                        e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                T.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return T.each(e.match(F) || [], (function(e, n) {
                            t[n] = !0
                        }
                        )),
                        t
                    }(e) : T.extend({}, e);
                    var t, n, r, i, o = [], s = [], a = -1, c = function() {
                        for (i = i || e.once,
                        r = t = !0; s.length; a = -1)
                            for (n = s.shift(); ++a < o.length; )
                                !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length,
                                n = !1);
                        e.memory || (n = !1),
                        t = !1,
                        i && (o = n ? [] : "")
                    }, l = {
                        add: function() {
                            return o && (n && !t && (a = o.length - 1,
                            s.push(n)),
                            function t(n) {
                                T.each(n, (function(n, r) {
                                    m(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== S(r) && t(r)
                                }
                                ))
                            }(arguments),
                            n && !t && c()),
                            this
                        },
                        remove: function() {
                            return T.each(arguments, (function(e, t) {
                                for (var n; (n = T.inArray(t, o, n)) > -1; )
                                    o.splice(n, 1),
                                    n <= a && a--
                            }
                            )),
                            this
                        },
                        has: function(e) {
                            return e ? T.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []),
                            this
                        },
                        disable: function() {
                            return i = s = [],
                            o = n = "",
                            this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = s = [],
                            n || t || (o = n = ""),
                            this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                            s.push(n),
                            t || c()),
                            this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                    return l
                }
                ,
                T.extend({
                    Deferred: function(e) {
                        var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
                          , n = "pending"
                          , i = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments),
                                this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return T.Deferred((function(n) {
                                    T.each(t, (function(t, r) {
                                        var i = m(e[r[4]]) && e[r[4]];
                                        o[r[1]]((function() {
                                            var e = i && i.apply(this, arguments);
                                            e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        }
                                        ))
                                    }
                                    )),
                                    e = null
                                }
                                )).promise()
                            },
                            then: function(e, n, i) {
                                var o = 0;
                                function s(e, t, n, i) {
                                    return function() {
                                        var a = this
                                          , c = arguments
                                          , l = function() {
                                            var r, l;
                                            if (!(e < o)) {
                                                if ((r = n.apply(a, c)) === t.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                l = r && ("object" == typeof r || "function" == typeof r) && r.then,
                                                m(l) ? i ? l.call(r, s(o, t, $, i), s(o, t, M, i)) : (o++,
                                                l.call(r, s(o, t, $, i), s(o, t, M, i), s(o, t, $, t.notifyWith))) : (n !== $ && (a = void 0,
                                                c = [r]),
                                                (i || t.resolveWith)(a, c))
                                            }
                                        }
                                          , u = i ? l : function() {
                                            try {
                                                l()
                                            } catch (r) {
                                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(r, u.stackTrace),
                                                e + 1 >= o && (n !== M && (a = void 0,
                                                c = [r]),
                                                t.rejectWith(a, c))
                                            }
                                        }
                                        ;
                                        e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()),
                                        r.setTimeout(u))
                                    }
                                }
                                return T.Deferred((function(r) {
                                    t[0][3].add(s(0, r, m(i) ? i : $, r.notifyWith)),
                                    t[1][3].add(s(0, r, m(e) ? e : $)),
                                    t[2][3].add(s(0, r, m(n) ? n : M))
                                }
                                )).promise()
                            },
                            promise: function(e) {
                                return null != e ? T.extend(e, i) : i
                            }
                        }
                          , o = {};
                        return T.each(t, (function(e, r) {
                            var s = r[2]
                              , a = r[5];
                            i[r[1]] = s.add,
                            a && s.add((function() {
                                n = a
                            }
                            ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                            s.add(r[3].fire),
                            o[r[0]] = function() {
                                return o[r[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                            }
                            ,
                            o[r[0] + "With"] = s.fireWith
                        }
                        )),
                        i.promise(o),
                        e && e.call(o, o),
                        o
                    },
                    when: function(e) {
                        var t = arguments.length
                          , n = t
                          , r = Array(n)
                          , i = a.call(arguments)
                          , o = T.Deferred()
                          , s = function(e) {
                            return function(n) {
                                r[e] = this,
                                i[e] = arguments.length > 1 ? a.call(arguments) : n,
                                --t || o.resolveWith(r, i)
                            }
                        };
                        if (t <= 1 && (q(e, o.done(s(n)).resolve, o.reject, !t),
                        "pending" === o.state() || m(i[n] && i[n].then)))
                            return o.then();
                        for (; n--; )
                            q(i[n], s(n), o.reject);
                        return o.promise()
                    }
                });
                var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                T.Deferred.exceptionHook = function(e, t) {
                    r.console && r.console.warn && e && W.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }
                ,
                T.readyException = function(e) {
                    r.setTimeout((function() {
                        throw e
                    }
                    ))
                }
                ;
                var _ = T.Deferred();
                function z() {
                    b.removeEventListener("DOMContentLoaded", z),
                    r.removeEventListener("load", z),
                    T.ready()
                }
                T.fn.ready = function(e) {
                    return _.then(e).catch((function(e) {
                        T.readyException(e)
                    }
                    )),
                    this
                }
                ,
                T.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0,
                        !0 !== e && --T.readyWait > 0 || _.resolveWith(b, [T]))
                    }
                }),
                T.ready.then = _.then,
                "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? r.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", z),
                r.addEventListener("load", z));
                var U = function(e, t, n, r, i, o, s) {
                    var a = 0
                      , c = e.length
                      , l = null == n;
                    if ("object" === S(n))
                        for (a in i = !0,
                        n)
                            U(e, t, a, n[a], !0, o, s);
                    else if (void 0 !== r && (i = !0,
                    m(r) || (s = !0),
                    l && (s ? (t.call(e, r),
                    t = null) : (l = t,
                    t = function(e, t, n) {
                        return l.call(T(e), n)
                    }
                    )),
                    t))
                        for (; a < c; a++)
                            t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                    return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
                }
                  , G = /^-ms-/
                  , X = /-([a-z])/g;
                function V(e, t) {
                    return t.toUpperCase()
                }
                function J(e) {
                    return e.replace(G, "ms-").replace(X, V)
                }
                var K = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
                function Y() {
                    this.expando = T.expando + Y.uid++
                }
                Y.uid = 1,
                Y.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {},
                        K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                        t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t)
                            i[J(t)] = n;
                        else
                            for (r in t)
                                i[J(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                        void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(J) : (t = J(t))in r ? [t] : t.match(F) || []).length;
                                for (; n--; )
                                    delete r[t[n]]
                            }
                            (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !T.isEmptyObject(t)
                    }
                };
                var Q = new Y
                  , Z = new Y
                  , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , te = /[A-Z]/g;
                function ne(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(te, "-$&").toLowerCase(),
                        "string" == typeof (n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (e) {}
                            Z.set(e, t, n)
                        } else
                            n = void 0;
                    return n
                }
                T.extend({
                    hasData: function(e) {
                        return Z.hasData(e) || Q.hasData(e)
                    },
                    data: function(e, t, n) {
                        return Z.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        Z.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return Q.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        Q.remove(e, t)
                    }
                }),
                T.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0], s = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = Z.get(o),
                            1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--; )
                                    s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = J(r.slice(5)),
                                    ne(o, r, i[r]));
                                Q.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each((function() {
                            Z.set(this, e)
                        }
                        )) : U(this, (function(t) {
                            var n;
                            if (o && void 0 === t)
                                return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                            this.each((function() {
                                Z.set(this, e, t)
                            }
                            ))
                        }
                        ), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            Z.remove(this, e)
                        }
                        ))
                    }
                }),
                T.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e)
                            return t = (t || "fx") + "queue",
                            r = Q.get(e, t),
                            n && (!r || Array.isArray(n) ? r = Q.access(e, t, T.makeArray(n)) : r.push(n)),
                            r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = T.queue(e, t)
                          , r = n.length
                          , i = n.shift()
                          , o = T._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(),
                        r--),
                        i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, (function() {
                            T.dequeue(e, t)
                        }
                        ), o)),
                        !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return Q.get(e, n) || Q.access(e, n, {
                            empty: T.Callbacks("once memory").add((function() {
                                Q.remove(e, [t + "queue", n])
                            }
                            ))
                        })
                    }
                }),
                T.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                        e = "fx",
                        n--),
                        arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = T.queue(this, e, t);
                            T._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                        }
                        ))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            T.dequeue(this, e)
                        }
                        ))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1, i = T.Deferred(), o = this, s = this.length, a = function() {
                            --r || i.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                        e = void 0),
                        e = e || "fx"; s--; )
                            (n = Q.get(o[s], e + "queueHooks")) && n.empty && (r++,
                            n.empty.add(a));
                        return a(),
                        i.promise(t)
                    }
                });
                var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
                  , oe = ["Top", "Right", "Bottom", "Left"]
                  , se = b.documentElement
                  , ae = function(e) {
                    return T.contains(e.ownerDocument, e)
                }
                  , ce = {
                    composed: !0
                };
                se.getRootNode && (ae = function(e) {
                    return T.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument
                }
                );
                var le = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === T.css(e, "display")
                };
                function ue(e, t, n, r) {
                    var i, o, s = 20, a = r ? function() {
                        return r.cur()
                    }
                    : function() {
                        return T.css(e, t, "")
                    }
                    , c = a(), l = n && n[3] || (T.cssNumber[t] ? "" : "px"), u = e.nodeType && (T.cssNumber[t] || "px" !== l && +c) && ie.exec(T.css(e, t));
                    if (u && u[3] !== l) {
                        for (c /= 2,
                        l = l || u[3],
                        u = +c || 1; s--; )
                            T.style(e, t, u + l),
                            (1 - o) * (1 - (o = a() / c || .5)) <= 0 && (s = 0),
                            u /= o;
                        u *= 2,
                        T.style(e, t, u + l),
                        n = n || []
                    }
                    return n && (u = +u || +c || 0,
                    i = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = l,
                    r.start = u,
                    r.end = i)),
                    i
                }
                var fe = {};
                function pe(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, i = fe[r];
                    return i || (t = n.body.appendChild(n.createElement(r)),
                    i = T.css(t, "display"),
                    t.parentNode.removeChild(t),
                    "none" === i && (i = "block"),
                    fe[r] = i,
                    i)
                }
                function de(e, t) {
                    for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
                        (r = e[o]).style && (n = r.style.display,
                        t ? ("none" === n && (i[o] = Q.get(r, "display") || null,
                        i[o] || (r.style.display = "")),
                        "" === r.style.display && le(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none",
                        Q.set(r, "display", n)));
                    for (o = 0; o < s; o++)
                        null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                T.fn.extend({
                    show: function() {
                        return de(this, !0)
                    },
                    hide: function() {
                        return de(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            le(this) ? T(this).show() : T(this).hide()
                        }
                        ))
                    }
                });
                var he, ye, ge = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ve = /^$|^module$|\/(?:java|ecma)script/i;
                he = b.createDocumentFragment().appendChild(b.createElement("div")),
                (ye = b.createElement("input")).setAttribute("type", "radio"),
                ye.setAttribute("checked", "checked"),
                ye.setAttribute("name", "t"),
                he.appendChild(ye),
                g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
                he.innerHTML = "<textarea>x</textarea>",
                g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue,
                he.innerHTML = "<option></option>",
                g.option = !!he.lastChild;
                var be = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                function xe(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                    void 0 === t || t && P(e, t) ? T.merge([e], n) : n
                }
                function we(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
                }
                be.tbody = be.tfoot = be.colgroup = be.caption = be.thead,
                be.th = be.td,
                g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Se = /<|&#?\w+;/;
                function ke(e, t, n, r, i) {
                    for (var o, s, a, c, l, u, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                        if ((o = e[d]) || 0 === o)
                            if ("object" === S(o))
                                T.merge(p, o.nodeType ? [o] : o);
                            else if (Se.test(o)) {
                                for (s = s || f.appendChild(t.createElement("div")),
                                a = (me.exec(o) || ["", ""])[1].toLowerCase(),
                                c = be[a] || be._default,
                                s.innerHTML = c[1] + T.htmlPrefilter(o) + c[2],
                                u = c[0]; u--; )
                                    s = s.lastChild;
                                T.merge(p, s.childNodes),
                                (s = f.firstChild).textContent = ""
                            } else
                                p.push(t.createTextNode(o));
                    for (f.textContent = "",
                    d = 0; o = p[d++]; )
                        if (r && T.inArray(o, r) > -1)
                            i && i.push(o);
                        else if (l = ae(o),
                        s = xe(f.appendChild(o), "script"),
                        l && we(s),
                        n)
                            for (u = 0; o = s[u++]; )
                                ve.test(o.type || "") && n.push(o);
                    return f
                }
                var Te = /^([^.]*)(?:\.(.+)|)/;
                function Ce() {
                    return !0
                }
                function Ae() {
                    return !1
                }
                function Oe(e, t) {
                    return e === function() {
                        try {
                            return b.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }
                function Ee(e, t, n, r, i, o) {
                    var s, a;
                    if ("object" == typeof t) {
                        for (a in "string" != typeof n && (r = r || n,
                        n = void 0),
                        t)
                            Ee(e, a, n, r, t[a], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n,
                    r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                    r = void 0) : (i = r,
                    r = n,
                    n = void 0)),
                    !1 === i)
                        i = Ae;
                    else if (!i)
                        return e;
                    return 1 === o && (s = i,
                    (i = function(e) {
                        return T().off(e),
                        s.apply(this, arguments)
                    }
                    ).guid = s.guid || (s.guid = T.guid++)),
                    e.each((function() {
                        T.event.add(this, t, i, r, n)
                    }
                    ))
                }
                function Ie(e, t, n) {
                    n ? (Q.set(e, t, !1),
                    T.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var r, i, o = Q.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (o.length)
                                    (T.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (o = a.call(arguments),
                                Q.set(this, t, o),
                                r = n(this, t),
                                this[t](),
                                o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {},
                                o !== i)
                                    return e.stopImmediatePropagation(),
                                    e.preventDefault(),
                                    i && i.value
                            } else
                                o.length && (Q.set(this, t, {
                                    value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
                                }),
                                e.stopImmediatePropagation())
                        }
                    })) : void 0 === Q.get(e, t) && T.event.add(e, t, Ce)
                }
                T.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, s, a, c, l, u, f, p, d, h, y, g = Q.get(e);
                        if (K(e))
                            for (n.handler && (n = (o = n).handler,
                            i = o.selector),
                            i && T.find.matchesSelector(se, i),
                            n.guid || (n.guid = T.guid++),
                            (c = g.events) || (c = g.events = Object.create(null)),
                            (s = g.handle) || (s = g.handle = function(t) {
                                return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            l = (t = (t || "").match(F) || [""]).length; l--; )
                                d = y = (a = Te.exec(t[l]) || [])[1],
                                h = (a[2] || "").split(".").sort(),
                                d && (f = T.event.special[d] || {},
                                d = (i ? f.delegateType : f.bindType) || d,
                                f = T.event.special[d] || {},
                                u = T.extend({
                                    type: d,
                                    origType: y,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && T.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, o),
                                (p = c[d]) || ((p = c[d] = []).delegateCount = 0,
                                f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)),
                                f.add && (f.add.call(e, u),
                                u.handler.guid || (u.handler.guid = n.guid)),
                                i ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                                T.event.global[d] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, s, a, c, l, u, f, p, d, h, y, g = Q.hasData(e) && Q.get(e);
                        if (g && (c = g.events)) {
                            for (l = (t = (t || "").match(F) || [""]).length; l--; )
                                if (d = y = (a = Te.exec(t[l]) || [])[1],
                                h = (a[2] || "").split(".").sort(),
                                d) {
                                    for (f = T.event.special[d] || {},
                                    p = c[d = (r ? f.delegateType : f.bindType) || d] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    s = o = p.length; o--; )
                                        u = p[o],
                                        !i && y !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(o, 1),
                                        u.selector && p.delegateCount--,
                                        f.remove && f.remove.call(e, u));
                                    s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || T.removeEvent(e, d, g.handle),
                                    delete c[d])
                                } else
                                    for (d in c)
                                        T.event.remove(e, d + t[l], n, r, !0);
                            T.isEmptyObject(c) && Q.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, s, a = new Array(arguments.length), c = T.event.fix(e), l = (Q.get(this, "events") || Object.create(null))[c.type] || [], u = T.event.special[c.type] || {};
                        for (a[0] = c,
                        t = 1; t < arguments.length; t++)
                            a[t] = arguments[t];
                        if (c.delegateTarget = this,
                        !u.preDispatch || !1 !== u.preDispatch.call(this, c)) {
                            for (s = T.event.handlers.call(this, c, l),
                            t = 0; (i = s[t++]) && !c.isPropagationStopped(); )
                                for (c.currentTarget = i.elem,
                                n = 0; (o = i.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                                    c.rnamespace && !1 !== o.namespace && !c.rnamespace.test(o.namespace) || (c.handleObj = o,
                                    c.data = o.data,
                                    void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (c.result = r) && (c.preventDefault(),
                                    c.stopPropagation()));
                            return u.postDispatch && u.postDispatch.call(this, c),
                            c.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, s, a = [], c = t.delegateCount, l = e.target;
                        if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (o = [],
                                    s = {},
                                    n = 0; n < c; n++)
                                        void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? T(i, this).index(l) > -1 : T.find(i, this, null, [l]).length),
                                        s[i] && o.push(r);
                                    o.length && a.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        return l = this,
                        c < t.length && a.push({
                            elem: l,
                            handlers: t.slice(c)
                        }),
                        a
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(T.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: m(t) ? function() {
                                if (this.originalEvent)
                                    return t(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[e]
                            }
                            ,
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[T.expando] ? e : new T.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && P(t, "input") && Ie(t, "click", Ce),
                                !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && P(t, "input") && Ie(t, "click"),
                                !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return ge.test(t.type) && t.click && P(t, "input") && Q.get(t, "click") || P(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                },
                T.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                T.Event = function(e, t) {
                    if (!(this instanceof T.Event))
                        return new T.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ae,
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && T.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[T.expando] = !0
                }
                ,
                T.Event.prototype = {
                    constructor: T.Event,
                    isDefaultPrevented: Ae,
                    isPropagationStopped: Ae,
                    isImmediatePropagationStopped: Ae,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ce,
                        e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ce,
                        e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ce,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                T.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, T.event.addProp),
                T.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    T.event.special[e] = {
                        setup: function() {
                            return Ie(this, e, Oe),
                            !1
                        },
                        trigger: function() {
                            return Ie(this, e),
                            !0
                        },
                        _default: function() {
                            return !0
                        },
                        delegateType: t
                    }
                }
                )),
                T.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    T.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this, i = e.relatedTarget, o = e.handleObj;
                            return i && (i === r || T.contains(r, i)) || (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                            n
                        }
                    }
                }
                )),
                T.fn.extend({
                    on: function(e, t, n, r) {
                        return Ee(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return Ee(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj)
                            return r = e.handleObj,
                            T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                            this;
                        if ("object" == typeof e) {
                            for (i in e)
                                this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = Ae),
                        this.each((function() {
                            T.event.remove(this, e, n, t)
                        }
                        ))
                    }
                });
                var Pe = /<script|<style|<link/i
                  , je = /checked\s*(?:[^=]|=\s*.checked.)/i
                  , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function Be(e, t) {
                    return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
                }
                function De(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
                }
                function Le(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                    e
                }
                function He(e, t) {
                    var n, r, i, o, s, a;
                    if (1 === t.nodeType) {
                        if (Q.hasData(e) && (a = Q.get(e).events))
                            for (i in Q.remove(t, "handle events"),
                            a)
                                for (n = 0,
                                r = a[i].length; n < r; n++)
                                    T.event.add(t, i, a[i][n]);
                        Z.hasData(e) && (o = Z.access(e),
                        s = T.extend({}, o),
                        Z.set(t, s))
                    }
                }
                function Re(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
                function Fe(e, t, n, r) {
                    t = c(t);
                    var i, o, s, a, l, u, f = 0, p = e.length, d = p - 1, h = t[0], y = m(h);
                    if (y || p > 1 && "string" == typeof h && !g.checkClone && je.test(h))
                        return e.each((function(i) {
                            var o = e.eq(i);
                            y && (t[0] = h.call(this, i, o.html())),
                            Fe(o, t, n, r)
                        }
                        ));
                    if (p && (o = (i = ke(t, e[0].ownerDocument, !1, e, r)).firstChild,
                    1 === i.childNodes.length && (i = o),
                    o || r)) {
                        for (a = (s = T.map(xe(i, "script"), De)).length; f < p; f++)
                            l = i,
                            f !== d && (l = T.clone(l, !0, !0),
                            a && T.merge(s, xe(l, "script"))),
                            n.call(e[f], l, f);
                        if (a)
                            for (u = s[s.length - 1].ownerDocument,
                            T.map(s, Le),
                            f = 0; f < a; f++)
                                l = s[f],
                                ve.test(l.type || "") && !Q.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                                    nonce: l.nonce || l.getAttribute("nonce")
                                }, u) : w(l.textContent.replace(Ne, ""), l, u))
                    }
                    return e
                }
                function $e(e, t, n) {
                    for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                        n || 1 !== r.nodeType || T.cleanData(xe(r)),
                        r.parentNode && (n && ae(r) && we(xe(r, "script")),
                        r.parentNode.removeChild(r));
                    return e
                }
                T.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, s, a = e.cloneNode(!0), c = ae(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                            for (s = xe(a),
                            r = 0,
                            i = (o = xe(e)).length; r < i; r++)
                                Re(o[r], s[r]);
                        if (t)
                            if (n)
                                for (o = o || xe(e),
                                s = s || xe(a),
                                r = 0,
                                i = o.length; r < i; r++)
                                    He(o[r], s[r]);
                            else
                                He(e, a);
                        return (s = xe(a, "script")).length > 0 && we(s, !c && xe(e, "script")),
                        a
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (K(n)) {
                                if (t = n[Q.expando]) {
                                    if (t.events)
                                        for (r in t.events)
                                            i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                                    n[Q.expando] = void 0
                                }
                                n[Z.expando] && (n[Z.expando] = void 0)
                            }
                    }
                }),
                T.fn.extend({
                    detach: function(e) {
                        return $e(this, e, !0)
                    },
                    remove: function(e) {
                        return $e(this, e)
                    },
                    text: function(e) {
                        return U(this, (function(e) {
                            return void 0 === e ? T.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }
                            ))
                        }
                        ), null, e, arguments.length)
                    },
                    append: function() {
                        return Fe(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Be(this, e).appendChild(e)
                        }
                        ))
                    },
                    prepend: function() {
                        return Fe(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Be(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }
                        ))
                    },
                    before: function() {
                        return Fe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }
                        ))
                    },
                    after: function() {
                        return Fe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }
                        ))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (T.cleanData(xe(e, !1)),
                            e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                        t = null == t ? e : t,
                        this.map((function() {
                            return T.clone(this, e, t)
                        }
                        ))
                    },
                    html: function(e) {
                        return U(this, (function(e) {
                            var t = this[0] || {}
                              , n = 0
                              , r = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Pe.test(e) && !be[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = T.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++)
                                        1 === (t = this[n] || {}).nodeType && (T.cleanData(xe(t, !1)),
                                        t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }
                        ), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return Fe(this, arguments, (function(t) {
                            var n = this.parentNode;
                            T.inArray(this, e) < 0 && (T.cleanData(xe(this)),
                            n && n.replaceChild(t, this))
                        }
                        ), e)
                    }
                }),
                T.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    T.fn[e] = function(e) {
                        for (var n, r = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++)
                            n = s === o ? this : this.clone(!0),
                            T(i[s])[t](n),
                            l.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }
                ));
                var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
                  , qe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = r),
                    t.getComputedStyle(e)
                }
                  , We = function(e, t, n) {
                    var r, i, o = {};
                    for (i in t)
                        o[i] = e.style[i],
                        e.style[i] = t[i];
                    for (i in r = n.call(e),
                    t)
                        e.style[i] = o[i];
                    return r
                }
                  , _e = new RegExp(oe.join("|"),"i");
                function ze(e, t, n) {
                    var r, i, o, s, a = e.style;
                    return (n = n || qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = T.style(e, t)),
                    !g.pixelBoxStyles() && Me.test(s) && _e.test(t) && (r = a.width,
                    i = a.minWidth,
                    o = a.maxWidth,
                    a.minWidth = a.maxWidth = a.width = s,
                    s = n.width,
                    a.width = r,
                    a.minWidth = i,
                    a.maxWidth = o)),
                    void 0 !== s ? s + "" : s
                }
                function Ue(e, t) {
                    return {
                        get: function() {
                            if (!e())
                                return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                !function() {
                    function e() {
                        if (u) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            se.appendChild(l).appendChild(u);
                            var e = r.getComputedStyle(u);
                            n = "1%" !== e.top,
                            c = 12 === t(e.marginLeft),
                            u.style.right = "60%",
                            s = 36 === t(e.right),
                            i = 36 === t(e.width),
                            u.style.position = "absolute",
                            o = 12 === t(u.offsetWidth / 3),
                            se.removeChild(l),
                            u = null
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var n, i, o, s, a, c, l = b.createElement("div"), u = b.createElement("div");
                    u.style && (u.style.backgroundClip = "content-box",
                    u.cloneNode(!0).style.backgroundClip = "",
                    g.clearCloneStyle = "content-box" === u.style.backgroundClip,
                    T.extend(g, {
                        boxSizingReliable: function() {
                            return e(),
                            i
                        },
                        pixelBoxStyles: function() {
                            return e(),
                            s
                        },
                        pixelPosition: function() {
                            return e(),
                            n
                        },
                        reliableMarginLeft: function() {
                            return e(),
                            c
                        },
                        scrollboxSize: function() {
                            return e(),
                            o
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, i;
                            return null == a && (e = b.createElement("table"),
                            t = b.createElement("tr"),
                            n = b.createElement("div"),
                            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                            t.style.cssText = "border:1px solid",
                            t.style.height = "1px",
                            n.style.height = "9px",
                            n.style.display = "block",
                            se.appendChild(e).appendChild(t).appendChild(n),
                            i = r.getComputedStyle(t),
                            a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight,
                            se.removeChild(e)),
                            a
                        }
                    }))
                }();
                var Ge = ["Webkit", "Moz", "ms"]
                  , Xe = b.createElement("div").style
                  , Ve = {};
                function Je(e) {
                    var t = T.cssProps[e] || Ve[e];
                    return t || (e in Xe ? e : Ve[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; )
                            if ((e = Ge[n] + t)in Xe)
                                return e
                    }(e) || e)
                }
                var Ke = /^(none|table(?!-c[ea]).+)/
                  , Ye = /^--/
                  , Qe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , Ze = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function et(e, t, n) {
                    var r = ie.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }
                function tt(e, t, n, r, i, o) {
                    var s = "width" === t ? 1 : 0
                      , a = 0
                      , c = 0;
                    if (n === (r ? "border" : "content"))
                        return 0;
                    for (; s < 4; s += 2)
                        "margin" === n && (c += T.css(e, n + oe[s], !0, i)),
                        r ? ("content" === n && (c -= T.css(e, "padding" + oe[s], !0, i)),
                        "margin" !== n && (c -= T.css(e, "border" + oe[s] + "Width", !0, i))) : (c += T.css(e, "padding" + oe[s], !0, i),
                        "padding" !== n ? c += T.css(e, "border" + oe[s] + "Width", !0, i) : a += T.css(e, "border" + oe[s] + "Width", !0, i));
                    return !r && o >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - a - .5)) || 0),
                    c
                }
                function nt(e, t, n) {
                    var r = qe(e)
                      , i = (!g.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r)
                      , o = i
                      , s = ze(e, t, r)
                      , a = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Me.test(s)) {
                        if (!n)
                            return s;
                        s = "auto"
                    }
                    return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && P(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r),
                    (o = a in e) && (s = e[a])),
                    (s = parseFloat(s) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
                }
                function rt(e, t, n, r, i) {
                    return new rt.prototype.init(e,t,n,r,i)
                }
                T.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = ze(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, s, a = J(t), c = Ye.test(t), l = e.style;
                            if (c || (t = Je(a)),
                            s = T.cssHooks[t] || T.cssHooks[a],
                            void 0 === n)
                                return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                            "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                            o = "number"),
                            null != n && n == n && ("number" !== o || c || (n += i && i[3] || (T.cssNumber[a] ? "" : "px")),
                            g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                            s && "set"in s && void 0 === (n = s.set(e, n, r)) || (c ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, s, a = J(t);
                        return Ye.test(t) || (t = Je(a)),
                        (s = T.cssHooks[t] || T.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
                        void 0 === i && (i = ze(e, t, r)),
                        "normal" === i && t in Ze && (i = Ze[t]),
                        "" === n || n ? (o = parseFloat(i),
                        !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }),
                T.each(["height", "width"], (function(e, t) {
                    T.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n)
                                return !Ke.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : We(e, Qe, (function() {
                                    return nt(e, t, r)
                                }
                                ))
                        },
                        set: function(e, n, r) {
                            var i, o = qe(e), s = !g.scrollboxSize() && "absolute" === o.position, a = (s || r) && "border-box" === T.css(e, "boxSizing", !1, o), c = r ? tt(e, t, r, a, o) : 0;
                            return a && s && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)),
                            c && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                            n = T.css(e, t)),
                            et(0, n, c)
                        }
                    }
                }
                )),
                T.cssHooks.marginLeft = Ue(g.reliableMarginLeft, (function(e, t) {
                    if (t)
                        return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }
                        ))) + "px"
                }
                )),
                T.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    T.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    },
                    "margin" !== e && (T.cssHooks[e + t].set = et)
                }
                )),
                T.fn.extend({
                    css: function(e, t) {
                        return U(this, (function(e, t, n) {
                            var r, i, o = {}, s = 0;
                            if (Array.isArray(t)) {
                                for (r = qe(e),
                                i = t.length; s < i; s++)
                                    o[t[s]] = T.css(e, t[s], !1, r);
                                return o
                            }
                            return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                        }
                        ), e, t, arguments.length > 1)
                    }
                }),
                T.Tween = rt,
                rt.prototype = {
                    constructor: rt,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e,
                        this.prop = n,
                        this.easing = i || T.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = r,
                        this.unit = o || (T.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = rt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = rt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                        this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                        this
                    }
                },
                rt.prototype.init.prototype = rt.prototype,
                rt.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                T.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                T.fx = rt.prototype.init,
                T.fx.step = {};
                var it, ot, st = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
                function ct() {
                    ot && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(ct) : r.setTimeout(ct, T.fx.interval),
                    T.fx.tick())
                }
                function lt() {
                    return r.setTimeout((function() {
                        it = void 0
                    }
                    )),
                    it = Date.now()
                }
                function ut(e, t) {
                    var n, r = 0, i = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        i["margin" + (n = oe[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e),
                    i
                }
                function ft(e, t, n) {
                    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                        if (r = i[o].call(n, t, e))
                            return r
                }
                function pt(e, t, n) {
                    var r, i, o = 0, s = pt.prefilters.length, a = T.Deferred().always((function() {
                        delete c.elem
                    }
                    )), c = function() {
                        if (i)
                            return !1;
                        for (var t = it || lt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++)
                            l.tweens[o].run(r);
                        return a.notifyWith(e, [l, r, n]),
                        r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]),
                        a.resolveWith(e, [l]),
                        !1)
                    }, l = a.promise({
                        elem: e,
                        props: T.extend({}, t),
                        opts: T.extend(!0, {
                            specialEasing: {},
                            easing: T.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: it || lt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r),
                            r
                        },
                        stop: function(t) {
                            var n = 0
                              , r = t ? l.tweens.length : 0;
                            if (i)
                                return this;
                            for (i = !0; n < r; n++)
                                l.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [l, 1, 0]),
                            a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                            this
                        }
                    }), u = l.props;
                    for (!function(e, t) {
                        var n, r, i, o, s;
                        for (n in e)
                            if (i = t[r = J(n)],
                            o = e[n],
                            Array.isArray(o) && (i = o[1],
                            o = e[n] = o[0]),
                            n !== r && (e[r] = o,
                            delete e[n]),
                            (s = T.cssHooks[r]) && "expand"in s)
                                for (n in o = s.expand(o),
                                delete e[r],
                                o)
                                    n in e || (e[n] = o[n],
                                    t[n] = i);
                            else
                                t[r] = i
                    }(u, l.opts.specialEasing); o < s; o++)
                        if (r = pt.prefilters[o].call(l, e, u, l.opts))
                            return m(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                            r;
                    return T.map(u, ft, l),
                    m(l.opts.start) && l.opts.start.call(e, l),
                    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                    T.fx.timer(T.extend(c, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })),
                    l
                }
                T.Animation = T.extend(pt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, ie.exec(t), n),
                            n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        m(e) ? (t = e,
                        e = ["*"]) : e = e.match(F);
                        for (var n, r = 0, i = e.length; r < i; r++)
                            n = e[r],
                            pt.tweeners[n] = pt.tweeners[n] || [],
                            pt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, s, a, c, l, u, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, y = e.nodeType && le(e), g = Q.get(e, "fxshow");
                        for (r in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                        a = s.empty.fire,
                        s.empty.fire = function() {
                            s.unqueued || a()
                        }
                        ),
                        s.unqueued++,
                        p.always((function() {
                            p.always((function() {
                                s.unqueued--,
                                T.queue(e, "fx").length || s.empty.fire()
                            }
                            ))
                        }
                        ))),
                        t)
                            if (i = t[r],
                            st.test(i)) {
                                if (delete t[r],
                                o = o || "toggle" === i,
                                i === (y ? "hide" : "show")) {
                                    if ("show" !== i || !g || void 0 === g[r])
                                        continue;
                                    y = !0
                                }
                                d[r] = g && g[r] || T.style(e, r)
                            }
                        if ((c = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
                            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                            null == (l = g && g.display) && (l = Q.get(e, "display")),
                            "none" === (u = T.css(e, "display")) && (l ? u = l : (de([e], !0),
                            l = e.style.display || l,
                            u = T.css(e, "display"),
                            de([e]))),
                            ("inline" === u || "inline-block" === u && null != l) && "none" === T.css(e, "float") && (c || (p.done((function() {
                                h.display = l
                            }
                            )),
                            null == l && (u = h.display,
                            l = "none" === u ? "" : u)),
                            h.display = "inline-block")),
                            n.overflow && (h.overflow = "hidden",
                            p.always((function() {
                                h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                            }
                            ))),
                            c = !1,
                            d)
                                c || (g ? "hidden"in g && (y = g.hidden) : g = Q.access(e, "fxshow", {
                                    display: l
                                }),
                                o && (g.hidden = !y),
                                y && de([e], !0),
                                p.done((function() {
                                    for (r in y || de([e]),
                                    Q.remove(e, "fxshow"),
                                    d)
                                        T.style(e, r, d[r])
                                }
                                ))),
                                c = ft(y ? g[r] : 0, r, p),
                                r in g || (g[r] = c.start,
                                y && (c.end = c.start,
                                c.start = 0))
                    }
                    ],
                    prefilter: function(e, t) {
                        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                    }
                }),
                T.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? T.extend({}, e) : {
                        complete: n || !n && t || m(e) && e,
                        duration: e,
                        easing: n && t || t && !m(t) && t
                    };
                    return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default),
                    null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                    r.old = r.complete,
                    r.complete = function() {
                        m(r.old) && r.old.call(this),
                        r.queue && T.dequeue(this, r.queue)
                    }
                    ,
                    r
                }
                ,
                T.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(le).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = T.isEmptyObject(e)
                          , o = T.speed(t, n, r)
                          , s = function() {
                            var t = pt(this, T.extend({}, e), o);
                            (i || Q.get(this, "finish")) && t.stop(!0)
                        };
                        return s.finish = s,
                        i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop,
                            t(n)
                        };
                        return "string" != typeof e && (n = t,
                        t = e,
                        e = void 0),
                        t && this.queue(e || "fx", []),
                        this.each((function() {
                            var t = !0
                              , i = null != e && e + "queueHooks"
                              , o = T.timers
                              , s = Q.get(this);
                            if (i)
                                s[i] && s[i].stop && r(s[i]);
                            else
                                for (i in s)
                                    s[i] && s[i].stop && at.test(i) && r(s[i]);
                            for (i = o.length; i--; )
                                o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                            !t && n || T.dequeue(this, e)
                        }
                        ))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"),
                        this.each((function() {
                            var t, n = Q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = T.timers, s = r ? r.length : 0;
                            for (n.finish = !0,
                            T.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length; t--; )
                                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                            for (t = 0; t < s; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        }
                        ))
                    }
                }),
                T.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = T.fn[t];
                    T.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
                    }
                }
                )),
                T.each({
                    slideDown: ut("show"),
                    slideUp: ut("hide"),
                    slideToggle: ut("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    T.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }
                )),
                T.timers = [],
                T.fx.tick = function() {
                    var e, t = 0, n = T.timers;
                    for (it = Date.now(); t < n.length; t++)
                        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || T.fx.stop(),
                    it = void 0
                }
                ,
                T.fx.timer = function(e) {
                    T.timers.push(e),
                    T.fx.start()
                }
                ,
                T.fx.interval = 13,
                T.fx.start = function() {
                    ot || (ot = !0,
                    ct())
                }
                ,
                T.fx.stop = function() {
                    ot = null
                }
                ,
                T.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                T.fn.delay = function(e, t) {
                    return e = T.fx && T.fx.speeds[e] || e,
                    t = t || "fx",
                    this.queue(t, (function(t, n) {
                        var i = r.setTimeout(t, e);
                        n.stop = function() {
                            r.clearTimeout(i)
                        }
                    }
                    ))
                }
                ,
                function() {
                    var e = b.createElement("input")
                      , t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox",
                    g.checkOn = "" !== e.value,
                    g.optSelected = t.selected,
                    (e = b.createElement("input")).value = "t",
                    e.type = "radio",
                    g.radioValue = "t" === e.value
                }();
                var dt, ht = T.expr.attrHandle;
                T.fn.extend({
                    attr: function(e, t) {
                        return U(this, T.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            T.removeAttr(this, e)
                        }
                        ))
                    }
                }),
                T.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? dt : void 0)),
                            void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && P(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0, i = t && t.match(F);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++]; )
                                e.removeAttribute(n)
                    }
                }),
                dt = {
                    set: function(e, t, n) {
                        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n),
                        n
                    }
                },
                T.each(T.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = ht[t] || T.find.attr;
                    ht[t] = function(e, t, r) {
                        var i, o, s = t.toLowerCase();
                        return r || (o = ht[s],
                        ht[s] = i,
                        i = null != n(e, t, r) ? s : null,
                        ht[s] = o),
                        i
                    }
                }
                ));
                var yt = /^(?:input|select|textarea|button)$/i
                  , gt = /^(?:a|area)$/i;
                function mt(e) {
                    return (e.match(F) || []).join(" ")
                }
                function vt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function bt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || []
                }
                T.fn.extend({
                    prop: function(e, t) {
                        return U(this, T.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[T.propFix[e] || e]
                        }
                        ))
                    }
                }),
                T.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t,
                            i = T.propHooks[t]),
                            void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = T.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : yt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                g.optSelected || (T.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                        null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    T.propFix[this.toLowerCase()] = this
                }
                )),
                T.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, s, a, c = 0;
                        if (m(e))
                            return this.each((function(t) {
                                T(this).addClass(e.call(this, t, vt(this)))
                            }
                            ));
                        if ((t = bt(e)).length)
                            for (; n = this[c++]; )
                                if (i = vt(n),
                                r = 1 === n.nodeType && " " + mt(i) + " ") {
                                    for (s = 0; o = t[s++]; )
                                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    i !== (a = mt(r)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, s, a, c = 0;
                        if (m(e))
                            return this.each((function(t) {
                                T(this).removeClass(e.call(this, t, vt(this)))
                            }
                            ));
                        if (!arguments.length)
                            return this.attr("class", "");
                        if ((t = bt(e)).length)
                            for (; n = this[c++]; )
                                if (i = vt(n),
                                r = 1 === n.nodeType && " " + mt(i) + " ") {
                                    for (s = 0; o = t[s++]; )
                                        for (; r.indexOf(" " + o + " ") > -1; )
                                            r = r.replace(" " + o + " ", " ");
                                    i !== (a = mt(r)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e
                          , r = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
                            T(this).toggleClass(e.call(this, n, vt(this), t), t)
                        }
                        )) : this.each((function() {
                            var t, i, o, s;
                            if (r)
                                for (i = 0,
                                o = T(this),
                                s = bt(e); t = s[i++]; )
                                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else
                                void 0 !== e && "boolean" !== n || ((t = vt(this)) && Q.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                        }
                        ))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; )
                            if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                });
                var xt = /\r/g;
                T.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = m(e),
                        this.each((function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, (function(e) {
                                return null == e ? "" : e + ""
                            }
                            ))),
                            (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        }
                        ))) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
                    }
                }),
                T.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = T.find.attr(e, "value");
                                return null != t ? t : mt(T.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], c = s ? o + 1 : i.length;
                                for (r = o < 0 ? c : s ? o : 0; r < c; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                                        if (t = T(n).val(),
                                        s)
                                            return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = T.makeArray(t), s = i.length; s--; )
                                    ((r = i[s]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                o
                            }
                        }
                    }
                }),
                T.each(["radio", "checkbox"], (function() {
                    T.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t))
                                return e.checked = T.inArray(T(e).val(), t) > -1
                        }
                    },
                    g.checkOn || (T.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                    )
                }
                )),
                g.focusin = "onfocusin"in r;
                var wt = /^(?:focusinfocus|focusoutblur)$/
                  , St = function(e) {
                    e.stopPropagation()
                };
                T.extend(T.event, {
                    trigger: function(e, t, n, i) {
                        var o, s, a, c, l, u, f, p, h = [n || b], y = d.call(e, "type") ? e.type : e, g = d.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = p = a = n = n || b,
                        3 !== n.nodeType && 8 !== n.nodeType && !wt.test(y + T.event.triggered) && (y.indexOf(".") > -1 && (g = y.split("."),
                        y = g.shift(),
                        g.sort()),
                        l = y.indexOf(":") < 0 && "on" + y,
                        (e = e[T.expando] ? e : new T.Event(y,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                        e.namespace = g.join("."),
                        e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                        e.target || (e.target = n),
                        t = null == t ? [e] : T.makeArray(t, [e]),
                        f = T.event.special[y] || {},
                        i || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                            if (!i && !f.noBubble && !v(n)) {
                                for (c = f.delegateType || y,
                                wt.test(c + y) || (s = s.parentNode); s; s = s.parentNode)
                                    h.push(s),
                                    a = s;
                                a === (n.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || r)
                            }
                            for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                                p = s,
                                e.type = o > 1 ? c : f.bindType || y,
                                (u = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && u.apply(s, t),
                                (u = l && s[l]) && u.apply && K(s) && (e.result = u.apply(s, t),
                                !1 === e.result && e.preventDefault());
                            return e.type = y,
                            i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !K(n) || l && m(n[y]) && !v(n) && ((a = n[l]) && (n[l] = null),
                            T.event.triggered = y,
                            e.isPropagationStopped() && p.addEventListener(y, St),
                            n[y](),
                            e.isPropagationStopped() && p.removeEventListener(y, St),
                            T.event.triggered = void 0,
                            a && (n[l] = a)),
                            e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = T.extend(new T.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        T.event.trigger(r, null, t)
                    }
                }),
                T.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            T.event.trigger(e, t, this)
                        }
                        ))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return T.event.trigger(e, t, n, !0)
                    }
                }),
                g.focusin || T.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    var n = function(e) {
                        T.event.simulate(t, e.target, T.event.fix(e))
                    };
                    T.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this
                              , i = Q.access(r, t);
                            i || r.addEventListener(e, n, !0),
                            Q.access(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this
                              , i = Q.access(r, t) - 1;
                            i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0),
                            Q.remove(r, t))
                        }
                    }
                }
                ));
                var kt = r.location
                  , Tt = {
                    guid: Date.now()
                }
                  , Ct = /\?/;
                T.parseXML = function(e) {
                    var t, n;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        t = (new r.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {}
                    return n = t && t.getElementsByTagName("parsererror")[0],
                    t && !n || T.error("Invalid XML: " + (n ? T.map(n.childNodes, (function(e) {
                        return e.textContent
                    }
                    )).join("\n") : e)),
                    t
                }
                ;
                var At = /\[\]$/
                  , Ot = /\r?\n/g
                  , Et = /^(?:submit|button|image|reset|file)$/i
                  , It = /^(?:input|select|textarea|keygen)/i;
                function Pt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t))
                        T.each(t, (function(t, i) {
                            n || At.test(e) ? r(e, i) : Pt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                        }
                        ));
                    else if (n || "object" !== S(t))
                        r(e, t);
                    else
                        for (i in t)
                            Pt(e + "[" + i + "]", t[i], n, r)
                }
                T.param = function(e, t) {
                    var n, r = [], i = function(e, t) {
                        var n = m(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == e)
                        return "";
                    if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
                        T.each(e, (function() {
                            i(this.name, this.value)
                        }
                        ));
                    else
                        for (n in e)
                            Pt(n, e[n], t, i);
                    return r.join("&")
                }
                ,
                T.fn.extend({
                    serialize: function() {
                        return T.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = T.prop(this, "elements");
                            return e ? T.makeArray(e) : this
                        }
                        )).filter((function() {
                            var e = this.type;
                            return this.name && !T(this).is(":disabled") && It.test(this.nodeName) && !Et.test(e) && (this.checked || !ge.test(e))
                        }
                        )).map((function(e, t) {
                            var n = T(this).val();
                            return null == n ? null : Array.isArray(n) ? T.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Ot, "\r\n")
                                }
                            }
                            )) : {
                                name: t.name,
                                value: n.replace(Ot, "\r\n")
                            }
                        }
                        )).get()
                    }
                });
                var jt = /%20/g
                  , Nt = /#.*$/
                  , Bt = /([?&])_=[^&]*/
                  , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
                  , Lt = /^(?:GET|HEAD)$/
                  , Ht = /^\/\//
                  , Rt = {}
                  , Ft = {}
                  , $t = "*/".concat("*")
                  , Mt = b.createElement("a");
                function qt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t,
                        t = "*");
                        var r, i = 0, o = t.toLowerCase().match(F) || [];
                        if (m(n))
                            for (; r = o[i++]; )
                                "+" === r[0] ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }
                function Wt(e, t, n, r) {
                    var i = {}
                      , o = e === Ft;
                    function s(a) {
                        var c;
                        return i[a] = !0,
                        T.each(e[a] || [], (function(e, a) {
                            var l = a(t, n, r);
                            return "string" != typeof l || o || i[l] ? o ? !(c = l) : void 0 : (t.dataTypes.unshift(l),
                            s(l),
                            !1)
                        }
                        )),
                        c
                    }
                    return s(t.dataTypes[0]) || !i["*"] && s("*")
                }
                function _t(e, t) {
                    var n, r, i = T.ajaxSettings.flatOptions || {};
                    for (n in t)
                        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && T.extend(!0, e, r),
                    e
                }
                Mt.href = kt.href,
                T.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: kt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": $t,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": T.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? _t(_t(e, T.ajaxSettings), t) : _t(T.ajaxSettings, e)
                    },
                    ajaxPrefilter: qt(Rt),
                    ajaxTransport: qt(Ft),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e,
                        e = void 0),
                        t = t || {};
                        var n, i, o, s, a, c, l, u, f, p, d = T.ajaxSetup({}, t), h = d.context || d, y = d.context && (h.nodeType || h.jquery) ? T(h) : T.event, g = T.Deferred(), m = T.Callbacks("once memory"), v = d.statusCode || {}, x = {}, w = {}, S = "canceled", k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!s)
                                        for (s = {}; t = Dt.exec(o); )
                                            s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return l ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                                x[e] = t),
                                this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (d.mimeType = e),
                                this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l)
                                        k.always(e[k.status]);
                                    else
                                        for (t in e)
                                            v[t] = [v[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || S;
                                return n && n.abort(t),
                                C(0, t),
                                this
                            }
                        };
                        if (g.promise(k),
                        d.url = ((e || d.url || kt.href) + "").replace(Ht, kt.protocol + "//"),
                        d.type = t.method || t.type || d.method || d.type,
                        d.dataTypes = (d.dataType || "*").toLowerCase().match(F) || [""],
                        null == d.crossDomain) {
                            c = b.createElement("a");
                            try {
                                c.href = d.url,
                                c.href = c.href,
                                d.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host
                            } catch (e) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = T.param(d.data, d.traditional)),
                        Wt(Rt, d, t, k),
                        l)
                            return k;
                        for (f in (u = T.event && d.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                        d.type = d.type.toUpperCase(),
                        d.hasContent = !Lt.test(d.type),
                        i = d.url.replace(Nt, ""),
                        d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(jt, "+")) : (p = d.url.slice(i.length),
                        d.data && (d.processData || "string" == typeof d.data) && (i += (Ct.test(i) ? "&" : "?") + d.data,
                        delete d.data),
                        !1 === d.cache && (i = i.replace(Bt, "$1"),
                        p = (Ct.test(i) ? "&" : "?") + "_=" + Tt.guid++ + p),
                        d.url = i + p),
                        d.ifModified && (T.lastModified[i] && k.setRequestHeader("If-Modified-Since", T.lastModified[i]),
                        T.etag[i] && k.setRequestHeader("If-None-Match", T.etag[i])),
                        (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && k.setRequestHeader("Content-Type", d.contentType),
                        k.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : d.accepts["*"]),
                        d.headers)
                            k.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(h, k, d) || l))
                            return k.abort();
                        if (S = "abort",
                        m.add(d.complete),
                        k.done(d.success),
                        k.fail(d.error),
                        n = Wt(Ft, d, t, k)) {
                            if (k.readyState = 1,
                            u && y.trigger("ajaxSend", [k, d]),
                            l)
                                return k;
                            d.async && d.timeout > 0 && (a = r.setTimeout((function() {
                                k.abort("timeout")
                            }
                            ), d.timeout));
                            try {
                                l = !1,
                                n.send(x, C)
                            } catch (e) {
                                if (l)
                                    throw e;
                                C(-1, e)
                            }
                        } else
                            C(-1, "No Transport");
                        function C(e, t, s, c) {
                            var f, p, b, x, w, S = t;
                            l || (l = !0,
                            a && r.clearTimeout(a),
                            n = void 0,
                            o = c || "",
                            k.readyState = e > 0 ? 4 : 0,
                            f = e >= 200 && e < 300 || 304 === e,
                            s && (x = function(e, t, n) {
                                for (var r, i, o, s, a = e.contents, c = e.dataTypes; "*" === c[0]; )
                                    c.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in a)
                                        if (a[i] && a[i].test(r)) {
                                            c.unshift(i);
                                            break
                                        }
                                if (c[0]in n)
                                    o = c[0];
                                else {
                                    for (i in n) {
                                        if (!c[0] || e.converters[i + " " + c[0]]) {
                                            o = i;
                                            break
                                        }
                                        s || (s = i)
                                    }
                                    o = o || s
                                }
                                if (o)
                                    return o !== c[0] && c.unshift(o),
                                    n[o]
                            }(d, k, s)),
                            !f && T.inArray("script", d.dataTypes) > -1 && T.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}
                            ),
                            x = function(e, t, n, r) {
                                var i, o, s, a, c, l = {}, u = e.dataTypes.slice();
                                if (u[1])
                                    for (s in e.converters)
                                        l[s.toLowerCase()] = e.converters[s];
                                for (o = u.shift(); o; )
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    c = o,
                                    o = u.shift())
                                        if ("*" === o)
                                            o = c;
                                        else if ("*" !== c && c !== o) {
                                            if (!(s = l[c + " " + o] || l["* " + o]))
                                                for (i in l)
                                                    if ((a = i.split(" "))[1] === o && (s = l[c + " " + a[0]] || l["* " + a[0]])) {
                                                        !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                                        u.unshift(a[1]));
                                                        break
                                                    }
                                            if (!0 !== s)
                                                if (s && e.throws)
                                                    t = s(t);
                                                else
                                                    try {
                                                        t = s(t)
                                                    } catch (e) {
                                                        return {
                                                            state: "parsererror",
                                                            error: s ? e : "No conversion from " + c + " to " + o
                                                        }
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(d, x, k, f),
                            f ? (d.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w),
                            (w = k.getResponseHeader("etag")) && (T.etag[i] = w)),
                            204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = x.state,
                            p = x.data,
                            f = !(b = x.error))) : (b = S,
                            !e && S || (S = "error",
                            e < 0 && (e = 0))),
                            k.status = e,
                            k.statusText = (t || S) + "",
                            f ? g.resolveWith(h, [p, S, k]) : g.rejectWith(h, [k, S, b]),
                            k.statusCode(v),
                            v = void 0,
                            u && y.trigger(f ? "ajaxSuccess" : "ajaxError", [k, d, f ? p : b]),
                            m.fireWith(h, [k, S]),
                            u && (y.trigger("ajaxComplete", [k, d]),
                            --T.active || T.event.trigger("ajaxStop")))
                        }
                        return k
                    },
                    getJSON: function(e, t, n) {
                        return T.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return T.get(e, void 0, t, "script")
                    }
                }),
                T.each(["get", "post"], (function(e, t) {
                    T[t] = function(e, n, r, i) {
                        return m(n) && (i = i || r,
                        r = n,
                        n = void 0),
                        T.ajax(T.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, T.isPlainObject(e) && e))
                    }
                }
                )),
                T.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers)
                        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                }
                )),
                T._evalUrl = function(e, t, n) {
                    return T.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            T.globalEval(e, t, n)
                        }
                    })
                }
                ,
                T.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (m(e) && (e = e.call(this[0])),
                        t = T(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map((function() {
                            for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                            return e
                        }
                        )).append(this)),
                        this
                    },
                    wrapInner: function(e) {
                        return m(e) ? this.each((function(t) {
                            T(this).wrapInner(e.call(this, t))
                        }
                        )) : this.each((function() {
                            var t = T(this)
                              , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }
                        ))
                    },
                    wrap: function(e) {
                        var t = m(e);
                        return this.each((function(n) {
                            T(this).wrapAll(t ? e.call(this, n) : e)
                        }
                        ))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            T(this).replaceWith(this.childNodes)
                        }
                        )),
                        this
                    }
                }),
                T.expr.pseudos.hidden = function(e) {
                    return !T.expr.pseudos.visible(e)
                }
                ,
                T.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                ,
                T.ajaxSettings.xhr = function() {
                    try {
                        return new r.XMLHttpRequest
                    } catch (e) {}
                }
                ;
                var zt = {
                    0: 200,
                    1223: 204
                }
                  , Ut = T.ajaxSettings.xhr();
                g.cors = !!Ut && "withCredentials"in Ut,
                g.ajax = Ut = !!Ut,
                T.ajaxTransport((function(e) {
                    var t, n;
                    if (g.cors || Ut && !e.crossDomain)
                        return {
                            send: function(i, o) {
                                var s, a = e.xhr();
                                if (a.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                    for (s in e.xhrFields)
                                        a[s] = e.xhrFields[s];
                                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                                i)
                                    a.setRequestHeader(s, i[s]);
                                t = function(e) {
                                    return function() {
                                        t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }
                                ,
                                a.onload = t(),
                                n = a.onerror = a.ontimeout = t("error"),
                                void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                    4 === a.readyState && r.setTimeout((function() {
                                        t && n()
                                    }
                                    ))
                                }
                                ,
                                t = t("abort");
                                try {
                                    a.send(e.hasContent && e.data || null)
                                } catch (e) {
                                    if (t)
                                        throw e
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                }
                )),
                T.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }
                )),
                T.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return T.globalEval(e),
                            e
                        }
                    }
                }),
                T.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET")
                }
                )),
                T.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function(r, i) {
                                t = T("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(),
                                    n = null,
                                    e && i("error" === e.type ? 404 : 200, e.type)
                                }
                                ),
                                b.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                }
                ));
                var Gt, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
                T.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Xt.pop() || T.expando + "_" + Tt.guid++;
                        return this[e] = !0,
                        e
                    }
                }),
                T.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var i, o, s, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0])
                        return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        a ? e[a] = e[a].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                        e.converters["script json"] = function() {
                            return s || T.error(i + " was not called"),
                            s[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = r[i],
                        r[i] = function() {
                            s = arguments
                        }
                        ,
                        n.always((function() {
                            void 0 === o ? T(r).removeProp(i) : r[i] = o,
                            e[i] && (e.jsonpCallback = t.jsonpCallback,
                            Xt.push(i)),
                            s && m(o) && o(s[0]),
                            s = o = void 0
                        }
                        )),
                        "script"
                }
                )),
                g.createHTMLDocument = ((Gt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                2 === Gt.childNodes.length),
                T.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                    t = !1),
                    t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                    t.head.appendChild(r)) : t = b),
                    o = !n && [],
                    (i = j.exec(e)) ? [t.createElement(i[1])] : (i = ke([e], t, o),
                    o && o.length && T(o).remove(),
                    T.merge([], i.childNodes)));
                    var r, i, o
                }
                ,
                T.fn.load = function(e, t, n) {
                    var r, i, o, s = this, a = e.indexOf(" ");
                    return a > -1 && (r = mt(e.slice(a)),
                    e = e.slice(0, a)),
                    m(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                    s.length > 0 && T.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        o = arguments,
                        s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
                    }
                    )).always(n && function(e, t) {
                        s.each((function() {
                            n.apply(this, o || [e.responseText, t, e])
                        }
                        ))
                    }
                    ),
                    this
                }
                ,
                T.expr.pseudos.animated = function(e) {
                    return T.grep(T.timers, (function(t) {
                        return e === t.elem
                    }
                    )).length
                }
                ,
                T.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, s, a, c, l = T.css(e, "position"), u = T(e), f = {};
                        "static" === l && (e.style.position = "relative"),
                        a = u.offset(),
                        o = T.css(e, "top"),
                        c = T.css(e, "left"),
                        ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1 ? (s = (r = u.position()).top,
                        i = r.left) : (s = parseFloat(o) || 0,
                        i = parseFloat(c) || 0),
                        m(t) && (t = t.call(e, n, T.extend({}, a))),
                        null != t.top && (f.top = t.top - a.top + s),
                        null != t.left && (f.left = t.left - a.left + i),
                        "using"in t ? t.using.call(e, f) : u.css(f)
                    }
                },
                T.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each((function(t) {
                                T.offset.setOffset(this, e, t)
                            }
                            ));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                        n = r.ownerDocument.defaultView,
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], i = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === T.css(r, "position"))
                                t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(),
                                n = r.ownerDocument,
                                e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); )
                                    e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0),
                                i.left += T.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - T.css(r, "marginTop", !0),
                                left: t.left - i.left - T.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === T.css(e, "position"); )
                                e = e.offsetParent;
                            return e || se
                        }
                        ))
                    }
                }),
                T.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    T.fn[e] = function(r) {
                        return U(this, (function(e, r, i) {
                            var o;
                            if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                            void 0 === i)
                                return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }
                        ), e, r, arguments.length)
                    }
                }
                )),
                T.each(["top", "left"], (function(e, t) {
                    T.cssHooks[t] = Ue(g.pixelPosition, (function(e, n) {
                        if (n)
                            return n = ze(e, t),
                            Me.test(n) ? T(e).position()[t] + "px" : n
                    }
                    ))
                }
                )),
                T.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    T.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        T.fn[r] = function(i, o) {
                            var s = arguments.length && (n || "boolean" != typeof i)
                              , a = n || (!0 === i || !0 === o ? "margin" : "border");
                            return U(this, (function(t, n, i) {
                                var o;
                                return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, a) : T.style(t, n, i, a)
                            }
                            ), t, s ? i : void 0, s)
                        }
                    }
                    ))
                }
                )),
                T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    T.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }
                )),
                T.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    T.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }
                ));
                var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                T.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    m(e))
                        return r = a.call(arguments, 2),
                        (i = function() {
                            return e.apply(t || this, r.concat(a.call(arguments)))
                        }
                        ).guid = e.guid = e.guid || T.guid++,
                        i
                }
                ,
                T.holdReady = function(e) {
                    e ? T.readyWait++ : T.ready(!0)
                }
                ,
                T.isArray = Array.isArray,
                T.parseJSON = JSON.parse,
                T.nodeName = P,
                T.isFunction = m,
                T.isWindow = v,
                T.camelCase = J,
                T.type = S,
                T.now = Date.now,
                T.isNumeric = function(e) {
                    var t = T.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }
                ,
                T.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Jt, "")
                }
                ,
                void 0 === (n = function() {
                    return T
                }
                .apply(t, [])) || (e.exports = n);
                var Kt = r.jQuery
                  , Yt = r.$;
                return T.noConflict = function(e) {
                    return r.$ === T && (r.$ = Yt),
                    e && r.jQuery === T && (r.jQuery = Kt),
                    T
                }
                ,
                void 0 === i && (r.jQuery = r.$ = T),
                T
            }
            ))
        },
        4349: function(e, t, n) {
            var r, i, o;
            i = [n(9755)],
            void 0 === (o = "function" == typeof (r = function(e) {
                function t(t) {
                    this.album = [],
                    this.currentImageIndex = void 0,
                    this.init(),
                    this.options = e.extend({}, this.constructor.defaults),
                    this.option(t)
                }
                return t.defaults = {
                    albumLabel: "Image %1 of %2",
                    alwaysShowNavOnTouchDevices: !1,
                    fadeDuration: 600,
                    fitImagesInViewport: !0,
                    imageFadeDuration: 600,
                    positionFromTop: 50,
                    resizeDuration: 700,
                    showImageNumberLabel: !0,
                    wrapAround: !1,
                    disableScrolling: !1,
                    sanitizeTitle: !1
                },
                t.prototype.option = function(t) {
                    e.extend(this.options, t)
                }
                ,
                t.prototype.imageCountLabel = function(e, t) {
                    return this.options.albumLabel.replace(/%1/g, e).replace(/%2/g, t)
                }
                ,
                t.prototype.init = function() {
                    var t = this;
                    e(document).ready((function() {
                        t.enable(),
                        t.build()
                    }
                    ))
                }
                ,
                t.prototype.enable = function() {
                    var t = this;
                    e("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", (function(n) {
                        return t.start(e(n.currentTarget)),
                        !1
                    }
                    ))
                }
                ,
                t.prototype.build = function() {
                    if (!(e("#lightbox").length > 0)) {
                        var t = this;
                        e('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(e("body")),
                        this.$lightbox = e("#lightbox"),
                        this.$overlay = e("#lightboxOverlay"),
                        this.$outerContainer = this.$lightbox.find(".lb-outerContainer"),
                        this.$container = this.$lightbox.find(".lb-container"),
                        this.$image = this.$lightbox.find(".lb-image"),
                        this.$nav = this.$lightbox.find(".lb-nav"),
                        this.containerPadding = {
                            top: parseInt(this.$container.css("padding-top"), 10),
                            right: parseInt(this.$container.css("padding-right"), 10),
                            bottom: parseInt(this.$container.css("padding-bottom"), 10),
                            left: parseInt(this.$container.css("padding-left"), 10)
                        },
                        this.imageBorderWidth = {
                            top: parseInt(this.$image.css("border-top-width"), 10),
                            right: parseInt(this.$image.css("border-right-width"), 10),
                            bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                            left: parseInt(this.$image.css("border-left-width"), 10)
                        },
                        this.$overlay.hide().on("click", (function() {
                            return t.end(),
                            !1
                        }
                        )),
                        this.$lightbox.hide().on("click", (function(n) {
                            "lightbox" === e(n.target).attr("id") && t.end()
                        }
                        )),
                        this.$outerContainer.on("click", (function(n) {
                            return "lightbox" === e(n.target).attr("id") && t.end(),
                            !1
                        }
                        )),
                        this.$lightbox.find(".lb-prev").on("click", (function() {
                            return 0 === t.currentImageIndex ? t.changeImage(t.album.length - 1) : t.changeImage(t.currentImageIndex - 1),
                            !1
                        }
                        )),
                        this.$lightbox.find(".lb-next").on("click", (function() {
                            return t.currentImageIndex === t.album.length - 1 ? t.changeImage(0) : t.changeImage(t.currentImageIndex + 1),
                            !1
                        }
                        )),
                        this.$nav.on("mousedown", (function(e) {
                            3 === e.which && (t.$nav.css("pointer-events", "none"),
                            t.$lightbox.one("contextmenu", (function() {
                                setTimeout(function() {
                                    this.$nav.css("pointer-events", "auto")
                                }
                                .bind(t), 0)
                            }
                            )))
                        }
                        )),
                        this.$lightbox.find(".lb-loader, .lb-close").on("click", (function() {
                            return t.end(),
                            !1
                        }
                        ))
                    }
                }
                ,
                t.prototype.start = function(t) {
                    var n = this
                      , r = e(window);
                    r.on("resize", e.proxy(this.sizeOverlay, this)),
                    this.sizeOverlay(),
                    this.album = [];
                    var i = 0;
                    function o(e) {
                        n.album.push({
                            alt: e.attr("data-alt"),
                            link: e.attr("href"),
                            title: e.attr("data-title") || e.attr("title")
                        })
                    }
                    var s, a = t.attr("data-lightbox");
                    if (a) {
                        s = e(t.prop("tagName") + '[data-lightbox="' + a + '"]');
                        for (var c = 0; c < s.length; c = ++c)
                            o(e(s[c])),
                            s[c] === t[0] && (i = c)
                    } else if ("lightbox" === t.attr("rel"))
                        o(t);
                    else {
                        s = e(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
                        for (var l = 0; l < s.length; l = ++l)
                            o(e(s[l])),
                            s[l] === t[0] && (i = l)
                    }
                    var u = r.scrollTop() + this.options.positionFromTop
                      , f = r.scrollLeft();
                    this.$lightbox.css({
                        top: u + "px",
                        left: f + "px"
                    }).fadeIn(this.options.fadeDuration),
                    this.options.disableScrolling && e("body").addClass("lb-disable-scrolling"),
                    this.changeImage(i)
                }
                ,
                t.prototype.changeImage = function(t) {
                    var n = this
                      , r = this.album[t].link
                      , i = r.split(".").slice(-1)[0]
                      , o = this.$lightbox.find(".lb-image");
                    this.disableKeyboardNav(),
                    this.$overlay.fadeIn(this.options.fadeDuration),
                    e(".lb-loader").fadeIn("slow"),
                    this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),
                    this.$outerContainer.addClass("animating");
                    var s = new Image;
                    s.onload = function() {
                        var a, c, l, u, f, p;
                        o.attr({
                            alt: n.album[t].alt,
                            src: r
                        }),
                        e(s),
                        o.width(s.width),
                        o.height(s.height),
                        p = e(window).width(),
                        f = e(window).height(),
                        u = p - n.containerPadding.left - n.containerPadding.right - n.imageBorderWidth.left - n.imageBorderWidth.right - 20,
                        l = f - n.containerPadding.top - n.containerPadding.bottom - n.imageBorderWidth.top - n.imageBorderWidth.bottom - n.options.positionFromTop - 70,
                        "svg" === i && (o.width(u),
                        o.height(l)),
                        n.options.fitImagesInViewport ? (n.options.maxWidth && n.options.maxWidth < u && (u = n.options.maxWidth),
                        n.options.maxHeight && n.options.maxHeight < l && (l = n.options.maxHeight)) : (u = n.options.maxWidth || s.width || u,
                        l = n.options.maxHeight || s.height || l),
                        (s.width > u || s.height > l) && (s.width / u > s.height / l ? (c = u,
                        a = parseInt(s.height / (s.width / c), 10),
                        o.width(c),
                        o.height(a)) : (a = l,
                        c = parseInt(s.width / (s.height / a), 10),
                        o.width(c),
                        o.height(a))),
                        n.sizeContainer(o.width(), o.height())
                    }
                    ,
                    s.src = this.album[t].link,
                    this.currentImageIndex = t
                }
                ,
                t.prototype.sizeOverlay = function() {
                    var t = this;
                    setTimeout((function() {
                        t.$overlay.width(e(document).width()).height(e(document).height())
                    }
                    ), 0)
                }
                ,
                t.prototype.sizeContainer = function(e, t) {
                    var n = this
                      , r = this.$outerContainer.outerWidth()
                      , i = this.$outerContainer.outerHeight()
                      , o = e + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right
                      , s = t + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
                    function a() {
                        n.$lightbox.find(".lb-dataContainer").width(o),
                        n.$lightbox.find(".lb-prevLink").height(s),
                        n.$lightbox.find(".lb-nextLink").height(s),
                        n.$overlay.focus(),
                        n.showImage()
                    }
                    r !== o || i !== s ? this.$outerContainer.animate({
                        width: o,
                        height: s
                    }, this.options.resizeDuration, "swing", (function() {
                        a()
                    }
                    )) : a()
                }
                ,
                t.prototype.showImage = function() {
                    this.$lightbox.find(".lb-loader").stop(!0).hide(),
                    this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),
                    this.updateNav(),
                    this.updateDetails(),
                    this.preloadNeighboringImages(),
                    this.enableKeyboardNav()
                }
                ,
                t.prototype.updateNav = function() {
                    var e = !1;
                    try {
                        document.createEvent("TouchEvent"),
                        e = !!this.options.alwaysShowNavOnTouchDevices
                    } catch (e) {}
                    this.$lightbox.find(".lb-nav").show(),
                    this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"),
                    this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(),
                    e && this.$lightbox.find(".lb-prev").css("opacity", "1")),
                    this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(),
                    e && this.$lightbox.find(".lb-next").css("opacity", "1"))))
                }
                ,
                t.prototype.updateDetails = function() {
                    var e = this;
                    if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
                        var t = this.$lightbox.find(".lb-caption");
                        this.options.sanitizeTitle ? t.text(this.album[this.currentImageIndex].title) : t.html(this.album[this.currentImageIndex].title),
                        t.fadeIn("fast")
                    }
                    if (this.album.length > 1 && this.options.showImageNumberLabel) {
                        var n = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
                        this.$lightbox.find(".lb-number").text(n).fadeIn("fast")
                    } else
                        this.$lightbox.find(".lb-number").hide();
                    this.$outerContainer.removeClass("animating"),
                    this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, (function() {
                        return e.sizeOverlay()
                    }
                    ))
                }
                ,
                t.prototype.preloadNeighboringImages = function() {
                    this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link),
                    this.currentImageIndex > 0 && ((new Image).src = this.album[this.currentImageIndex - 1].link)
                }
                ,
                t.prototype.enableKeyboardNav = function() {
                    this.$lightbox.on("keyup.keyboard", e.proxy(this.keyboardAction, this)),
                    this.$overlay.on("keyup.keyboard", e.proxy(this.keyboardAction, this))
                }
                ,
                t.prototype.disableKeyboardNav = function() {
                    this.$lightbox.off(".keyboard"),
                    this.$overlay.off(".keyboard")
                }
                ,
                t.prototype.keyboardAction = function(e) {
                    var t = 27
                      , n = 37
                      , r = 39
                      , i = e.keyCode;
                    i === t ? (e.stopPropagation(),
                    this.end()) : i === n ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : i === r && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
                }
                ,
                t.prototype.end = function() {
                    this.disableKeyboardNav(),
                    e(window).off("resize", this.sizeOverlay),
                    this.$lightbox.fadeOut(this.options.fadeDuration),
                    this.$overlay.fadeOut(this.options.fadeDuration),
                    this.options.disableScrolling && e("body").removeClass("lb-disable-scrolling")
                }
                ,
                new t
            }
            ) ? r.apply(t, i) : r) || (e.exports = o)
        },
        531: (e,t,n)=>{
            "use strict";
            n.r(t)
        }
        ,
        3283: (e,t,n)=>{
            "use strict";
            n.r(t)
        }
        ,
        9081: (e,t,n)=>{
            "use strict";
            n.r(t)
        }
        ,
        6656: (e,t,n)=>{
            "use strict";
            n.r(t)
        }
        ,
        163: (e,t,n)=>{
            "use strict";
            n.r(t)
        }
        ,
        3663: (e,t,n)=>{
            "use strict";
            n.r(t)
        }
        ,
        8987: (e,t,n)=>{
            "use strict";
            var r;
            if (!Object.keys) {
                var i = Object.prototype.hasOwnProperty
                  , o = Object.prototype.toString
                  , s = n(1414)
                  , a = Object.prototype.propertyIsEnumerable
                  , c = !a.call({
                    toString: null
                }, "toString")
                  , l = a.call((function() {}
                ), "prototype")
                  , u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
                  , f = function(e) {
                    var t = e.constructor;
                    return t && t.prototype === e
                }
                  , p = {
                    $applicationCache: !0,
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $onmozfullscreenchange: !0,
                    $onmozfullscreenerror: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                }
                  , d = function() {
                    if ("undefined" == typeof window)
                        return !1;
                    for (var e in window)
                        try {
                            if (!p["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e])
                                try {
                                    f(window[e])
                                } catch (e) {
                                    return !0
                                }
                        } catch (e) {
                            return !0
                        }
                    return !1
                }();
                r = function(e) {
                    var t = null !== e && "object" == typeof e
                      , n = "[object Function]" === o.call(e)
                      , r = s(e)
                      , a = t && "[object String]" === o.call(e)
                      , p = [];
                    if (!t && !n && !r)
                        throw new TypeError("Object.keys called on a non-object");
                    var h = l && n;
                    if (a && e.length > 0 && !i.call(e, 0))
                        for (var y = 0; y < e.length; ++y)
                            p.push(String(y));
                    if (r && e.length > 0)
                        for (var g = 0; g < e.length; ++g)
                            p.push(String(g));
                    else
                        for (var m in e)
                            h && "prototype" === m || !i.call(e, m) || p.push(String(m));
                    if (c)
                        for (var v = function(e) {
                            if ("undefined" == typeof window || !d)
                                return f(e);
                            try {
                                return f(e)
                            } catch (e) {
                                return !1
                            }
                        }(e), b = 0; b < u.length; ++b)
                            v && "constructor" === u[b] || !i.call(e, u[b]) || p.push(u[b]);
                    return p
                }
            }
            e.exports = r
        }
        ,
        2215: (e,t,n)=>{
            "use strict";
            var r = Array.prototype.slice
              , i = n(1414)
              , o = Object.keys
              , s = o ? function(e) {
                return o(e)
            }
            : n(8987)
              , a = Object.keys;
            s.shim = function() {
                Object.keys ? function() {
                    var e = Object.keys(arguments);
                    return e && e.length === arguments.length
                }(1, 2) || (Object.keys = function(e) {
                    return i(e) ? a(r.call(e)) : a(e)
                }
                ) : Object.keys = s;
                return Object.keys || s
            }
            ,
            e.exports = s
        }
        ,
        1414: e=>{
            "use strict";
            var t = Object.prototype.toString;
            e.exports = function(e) {
                var n = t.call(e)
                  , r = "[object Arguments]" === n;
                return r || (r = "[object Array]" !== n && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)),
                r
            }
        }
        ,
        4669: (e,t,n)=>{
            "use strict";
            var r = n(1578)
              , i = n(9846)
              , o = n(1360);
            e.exports = function(e) {
                var t = r(this)
                  , n = i(t)
                  , s = o(e);
                if (s < 0 || s == 1 / 0)
                    throw RangeError("String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity");
                for (var a = ""; s; )
                    s % 2 == 1 && (a += n),
                    s > 1 && (n += n),
                    s >>= 1;
                return a
            }
        }
        ,
        8460: (e,t,n)=>{
            "use strict";
            var r = n(4147)
              , i = n(4289)
              , o = n(4669)
              , s = n(6551)
              , a = n(2371)
              , c = r(s());
            i(c, {
                getPolyfill: s,
                implementation: o,
                shim: a
            }),
            e.exports = c
        }
        ,
        6551: (e,t,n)=>{
            "use strict";
            var r = n(4669);
            e.exports = function() {
                return String.prototype.repeat || r
            }
        }
        ,
        2371: (e,t,n)=>{
            "use strict";
            var r = n(4289)
              , i = n(6551);
            e.exports = function() {
                var e = i();
                return String.prototype.repeat !== e && r(String.prototype, {
                    repeat: e
                }),
                e
            }
        }
    }, n = {};
    function r(e) {
        var i = n[e];
        if (void 0 !== i)
            return i.exports;
        var o = n[e] = {
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r),
        o.exports
    }
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    e = r(9755),
    r.g.$ = r.g.jQuery = e,
    r(3283),
    r(531),
    r(9081),
    r(8460),
    r(6647),
    r(4349),
    r(3663),
    r(9011),
    r(8211),
    r(9573),
    r(7245),
    r(4188),
    r(4824),
    r(6656),
    e((function() {
        var t = r(2783);
        e(".hash_passwords").submit((function(n) {
            e(this).find("input[type=password]").each((function() {
                length = this.value.length,
                length > 0 && (clone = e(this).clone(),
                clone.attr("type", "password"),
                clone.removeAttr("name"),
                clone.removeAttr("id"),
                clone.val("*".repeat(length)),
                clone.prop("readonly", !0),
                e(this).val(t(this.value)),
                e(this).attr("type", "hidden"),
                e(clone).insertBefore(this))
            }
            )),
            e(this).find("input[name=hashed_passwords]").each((function() {
                this.value = "1"
            }
            ))
        }
        )),
        e(".check-email").change((function() {
            var t = this;
            t.validity.typeMismatch ? t.setCustomValidity("") : (t.setCustomValidity(""),
            e.post("/" + e("body").data("lang") + "/api/check_email/", {
                email: e(this).val(),
                new: e(this).data("new")
            }).done((function(e) {
                !e.valid && e.message ? t.setCustomValidity(e.message) : t.setCustomValidity("")
            }
            )))
        }
        )),
        e(".check-email").each((function() {
            this.value && e(this).change()
        }
        )),
        e("#trailer img").click((function() {
            e("#trailer img").hide();
            var t = e("#trailer").data("url")
              , n = e("<source/>").attr("src", t)
              , r = e("<video controls/>").attr("poster", e("#trailer .thumbnail").attr("src"));
            r.append(n),
            e("#trailer").append(r),
            e("#trailer video").trigger("play")
        }
        )),
        e("#screenshot-container").cycle({
            fx: "scrollHorz",
            delay: 1e3,
            height: "225px",
            width: "360px",
            pager: "#bullets-container",
            pagerAnchorBuilder: function(e, t) {
                return '<a href="#"></a>'
            }
        }),
        e(".polyglot-language-switcher").polyglotLanguageSwitcher({
            openMode: "hover",
            hoverTimeout: 100,
            animSpeed: 200,
            animEffect: "fade",
            gridColumns: 1,
            selectedLang: function() {
                return e("body").data("lang")
            }
        })
    }
    ))
}
)();
