(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [11], {
        89935: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 20117))
        },
        20117: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r = n(57437),
                s = n(32771),
                a = n(62076),
                l = n(69379),
                c = n(48906),
                i = n(93618),
                o = n(97741),
                u = () => (0, r.jsx)("div", {
                    className: (0, a.cn)("md:fixed bottom-0 -left-[32px] relative md:left-0"),
                    children: (0, r.jsx)("div", {
                        className: (0, a.cn)('btm-left-panel inline-flex items-center justify-start bg-[url("assets/border-right-gradient.svg")] rounded-tr-lg bg-cover pt-[1px] pr-[1px] sm:max-w-[592px]'),
                        children: (0, r.jsx)("div", {
                            className: "rounded-tr-lg pb-[4rem] pl-[37px] pr-c20  pt-c20",
                            children: (0, r.jsxs)(o.Z, {
                                children: [(0, r.jsxs)(c.Z, {
                                    children: [(0, r.jsx)(l.H2, {
                                        children: "35+ chains"
                                    }), (0, r.jsx)(i.Z, {
                                        size: 8
                                    }), (0, r.jsx)(l.P2, {
                                        children: "First incentivized Public RPC"
                                    })]
                                }), (0, r.jsx)(i.Z, {
                                    size: 24
                                }), (0, r.jsxs)(c.Z, {
                                    children: [(0, r.jsx)(l.H2, {
                                        children: "Lava SDK"
                                    }), (0, r.jsx)(i.Z, {
                                        size: 8
                                    }), (0, r.jsx)(l.P2, {
                                        children: "The most powerful web3 SDK"
                                    })]
                                }), (0, r.jsx)(i.Z, {
                                    size: 24
                                }), (0, r.jsxs)(c.Z, {
                                    children: [(0, r.jsx)(l.H2, {
                                        children: "Lava Network"
                                    }), (0, r.jsx)(i.Z, {
                                        size: 8
                                    }), (0, r.jsx)(l.P2, {
                                        children: "Modular data layer for web3"
                                    })]
                                })]
                            })
                        })
                    })
                }),
                d = n(2265),
                h = ["alpha", "numeric", "alphanumeric"],
                x = {
                    alpha: {
                        type: "text",
                        inputMode: "text",
                        pattern: "[a-zA-Z]{1}"
                    },
                    alphanumeric: {
                        type: "text",
                        inputMode: "text",
                        pattern: "[a-zA-Z0-9]{1}"
                    },
                    numeric: {
                        type: "tel",
                        inputMode: "numeric",
                        pattern: "[0-9]{1}",
                        min: "0",
                        max: "9"
                    }
                },
                f = (0, d.forwardRef)(function(e, t) {
                    var n = e.allowedCharacters,
                        r = void 0 === n ? "alphanumeric" : n,
                        s = e.ariaLabel,
                        a = e.autoFocus,
                        l = void 0 === a || a,
                        c = e.containerClassName,
                        i = e.disabled,
                        o = e.inputClassName,
                        u = e.isPassword,
                        f = void 0 !== u && u,
                        m = e.length,
                        p = void 0 === m ? 6 : m,
                        v = e.placeholder,
                        g = e.onChange;
                    if (isNaN(p) || p < 1) throw Error("Length should be a number and greater than 0");
                    if (!h.some(function(e) {
                            return e === r
                        })) throw Error("Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric");
                    var j = (0, d.useRef)([]),
                        b = x[r];
                    (0, d.useImperativeHandle)(t, function() {
                        return {
                            focus: function() {
                                j.current && j.current[0].focus()
                            },
                            clear: function() {
                                if (j.current) {
                                    for (var e = 0; e < j.current.length; e++) j.current[e].value = "";
                                    j.current[0].focus()
                                }
                                w()
                            }
                        }
                    }), (0, d.useEffect)(function() {
                        l && j.current[0].focus()
                    }, []);
                    for (var w = function() {
                            var e = j.current.map(function(e) {
                                return e.value
                            }).join("");
                            g && g(e)
                        }, N = function(e) {
                            var t = e.target,
                                n = t.value,
                                r = t.nextElementSibling;
                            n.length > 1 ? (e.target.value = n.charAt(0), null !== r && r.focus()) : n.match(b.pattern) ? null !== r && r.focus() : e.target.value = "", w()
                        }, Z = function(e) {
                            var t = e.key,
                                n = e.target;
                            if ("Backspace" === t) {
                                if ("" === n.value) {
                                    if (null !== n.previousElementSibling) {
                                        var r = n.previousElementSibling;
                                        r.value = "", r.focus(), e.preventDefault()
                                    }
                                } else n.value = "";
                                w()
                            }
                        }, y = function(e) {
                            e.target.select()
                        }, z = function(e) {
                            for (var t = e.clipboardData.getData("Text"), n = 0, r = 0; r < t.length; r++) {
                                var s = t.charAt(r),
                                    a = j.current[n].value;
                                s.match(b.pattern) && !a && (j.current[n].value = s, null !== j.current[n].nextElementSibling && (j.current[n].nextElementSibling.focus(), n++))
                            }
                            w(), e.preventDefault()
                        }, C = [], E = function(e) {
                            C.push(d.createElement("input", Object.assign({
                                key: e,
                                onChange: N,
                                onKeyDown: Z,
                                onFocus: y,
                                onPaste: z
                            }, b, {
                                type: f ? "password" : b.type,
                                ref: function(t) {
                                    j.current[e] = t
                                },
                                maxLength: 1,
                                className: o,
                                autoComplete: 0 === e ? "one-time-code" : "off",
                                "aria-label": s ? s + ". Character " + (e + 1) + "." : "Character " + (e + 1) + ".",
                                disabled: i,
                                placeholder: v
                            })))
                        }, P = 0; P < p; P++) E(P);
                    return d.createElement("div", {
                        className: c
                    }, C)
                }),
                m = e => {
                    let {
                        onChange: t,
                        renderTrigger: n,
                        value: s
                    } = e, [u, h] = (0, d.useState)(s), [x, m] = (0, d.useState)((null == u ? void 0 : u.length) === 5), p = (0, d.useRef)(), v = async e => {
                        h((e || "").toUpperCase()), m((null == e ? void 0 : e.length) === 5)
                    };
                    return (0, d.useEffect)(() => {
                        let e = async () => {
                            m(!0), (await (await fetch((0, a.kG)("/invites/".concat(u)))).json()).success ? (console.log("Invite code is valid"), m(!0), null == t || t(u || "")) : (console.log("Invite code is invalid"), m(!1))
                        };
                        (null == u ? void 0 : u.length) === 5 && e()
                    }, [t, u]), (0, d.useEffect)(() => {
                        p.current && s && document.getElementsByClassName("auth-input")[0].childNodes[0].childNodes.forEach((e, t) => {
                            e.value = s[t]
                        })
                    }, [s]), (0, r.jsxs)(c.Z, {
                        className: "w-full",
                        children: [(0, r.jsxs)("div", {
                            className: (0, a.cn)("flex", "flex-col", "md:flex-row", "md:items-end"),
                            children: [(0, r.jsxs)(c.Z, {
                                children: [(0, r.jsx)(l.__, {
                                    className: (0, a.cn)("text-h4 text-neutral-0"),
                                    children: "Enter invite code"
                                }), (0, r.jsx)(i.Z, {
                                    size: 8
                                }), (0, r.jsx)(c.Z, {
                                    className: (0, a.cn)("auth-input border-neutral-100 rounded-lg border py-[11px] px-[32px]"),
                                    children: (0, r.jsx)(f, {
                                        allowedCharacters: "alphanumeric",
                                        ariaLabel: "Enter invite code",
                                        containerClassName: "flex flex-row gap-c16 grow items-center justify-between w-full",
                                        inputClassName: (0, a.cn)("border-b border-neutral-200 bg-transparent text-center font-pixelated w-c24 focus-visible:outline-none focus-visible:border-white", l.wN.className),
                                        length: 5,
                                        onChange: v,
                                        ref: p
                                    })
                                })]
                            }), n({
                                isValid: x,
                                inviteCode: u || ""
                            })]
                        }), (null == u ? void 0 : u.length) === 5 && !x && (0, r.jsx)(o.Z, {
                            className: (0, a.cn)("pt-c8 text-destructive"),
                            children: (0, r.jsx)(l.P, {
                                children: "Invalid invite code"
                            })
                        })]
                    })
                },
                p = n(89733),
                v = n(3848),
                g = n(66648),
                j = n(87138);
            let b = () => (0, r.jsx)("div", {
                className: "flex min-w-full grow flex-col-reverse items-end pb-c32",
                children: (0, r.jsx)(o.Z, {
                    className: (0, a.cn)('bg-[url("assets/connection-progress-banner.svg")] bg-cover bg-no-repeat w-full h-[228px] py-[56px] px-c32'),
                    style: {
                        backgroundSize: "100%",
                        backgroundPosition: "center"
                    },
                    children: (0, r.jsxs)(c.Z, {
                        className: (0, a.cn)("flex items-end", "w-[541px]"),
                        children: [(0, r.jsx)(l.t5, {
                            className: (0, a.cn)("text-neutral-0"),
                            children: "Get bonus points for connecting via our Wallet Partners"
                        }), (0, r.jsx)(i.Z, {
                            size: 8
                        }), (0, r.jsx)(l.P, {
                            className: "text-h4 text-neutral-100",
                            children: "Use Leap, Sender Wallet, with our RPC endpoints for more points. More partners coming soon!."
                        })]
                    })
                })
            });
            var w = e => {
                let {
                    searchParams: t
                } = e, [n, d] = (0, v.Z)("inviteCode", ""), h = new URLSearchParams(window.location.search).get("code");
                return console.log("searchParams", t), console.log("searchParams", h), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: "flex w-full grow flex-row items-stretch gap-[13.0rem] pt-[1rem] lg:max-w-[1024px]",
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col items-start pt-[1rem]",
                            children: [(0, r.jsx)(i.Z, {
                                size: 2
                            }), (0, r.jsx)(l.TB, {
                                children: "Access Lava, access web3, earn points."
                            }), (0, r.jsx)(i.Z, {
                                size: 15
                            }), (0, r.jsx)(l.P, {
                                className: "text-neutral-100",
                                children: "Don't miss out the chance to explore, earn, and be part of the crypto community buzz. Register today and let the adventure begin!"
                            }), (0, r.jsx)(i.Z, {
                                size: 30
                            }), (0, r.jsx)(o.Z, {
                                className: (0, a.cn)("items-start", "w-full"),
                                children: (0, r.jsx)(m, {
                                    value: h || n,
                                    renderTrigger: e => {
                                        let {
                                            isValid: t,
                                            inviteCode: n
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(i.Z, {
                                                size: 16
                                            }), (0, r.jsx)(p.z, {
                                                variant: "destructive",
                                                size: "lg",
                                                className: "h-[4.8rem] px-c24 py-c12",
                                                disabled: !t,
                                                ...t && {
                                                    asChild: !0
                                                },
                                                children: t ? (0, r.jsx)(j.default, {
                                                    href: window.code_href,
                                                    onClick: () => d(n),
                                                    children: "Proceed"
                                                }) : "Proceed"
                                            })]
                                        })
                                    }
                                })
                            }), (0, r.jsx)(i.Z, {
                                size: 30
                            }), (0, r.jsx)(b, {}), (0, r.jsx)(i.Z, {
                                size: 30
                            }), (0, r.jsxs)(c.Z, {
                                children: [(0, r.jsx)(l.__, {
                                    children: "Powered by"
                                }), (0, r.jsx)(i.Z, {
                                    size: 16
                                }), (0, r.jsxs)(o.Z, {
                                    className: (0, a.cn)("items-end"),
                                    children: [(0, r.jsx)(g.default, {
                                        src: s.Z,
                                        width: 104,
                                        height: 28.2,
                                        alt: "lavanet logo"
                                    }), (0, r.jsx)(i.Z, {
                                        size: 10
                                    }), (0, r.jsx)(l.__, {
                                        className: (0, a.cn)("text-neutral-0"),
                                        children: "Network"
                                    })]
                                }), (0, r.jsx)(u, {}), (0, r.jsx)("div", {
                                    className: "hidden md:block",
                                    children: (0, r.jsx)(i.Z, {
                                        size: 120
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
        },
        48906: function(e, t, n) {
            "use strict";
            var r = n(57437),
                s = n(62076);
            t.Z = e => {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.cn)("flex flex-col", n),
                    children: t
                })
            }
        },
        93618: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(57437),
                s = {
                    src: "/_next/static/media/spacer.webp",
                    height: 1,
                    width: 1,
                    blurWidth: 0,
                    blurHeight: 0
                },
                a = n(66648),
                l = e => {
                    let {
                        width: t = 8,
                        height: n = 8,
                        size: l
                    } = e;
                    return "grow" === l ? (0, r.jsx)("div", {
                        className: "grow"
                    }) : (0, r.jsx)(a.default, {
                        src: s,
                        alt: "spacer",
                        width: l || t,
                        height: l || n,
                        style: {
                            pointerEvents: "none",
                            userSelect: "none"
                        }
                    })
                }
        },
        97741: function(e, t, n) {
            "use strict";
            var r = n(57437),
                s = n(62076);
            t.Z = e => {
                let {
                    children: t,
                    isColSm: n,
                    className: a,
                    style: l
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.cn)("flex lg:flex-row", n && "sm:flex-col", a),
                    style: l,
                    children: t
                })
            }
        },
        3848: function(e, t, n) {
            "use strict";
            var r = n(2265);
            t.Z = (e, t) => {
                let [n, s] = (0, r.useState)(() => {
                    try {
                        {
                            let n = window.localStorage.getItem(e);
                            return n ? JSON.parse(n) : t
                        }
                    } catch (e) {
                        console.log(e)
                    }
                });
                return [n, t => {
                    try {
                        {
                            let r = t instanceof Function ? t(n) : t;
                            window.localStorage.setItem(e, JSON.stringify(r))
                        }
                        s(t)
                    } catch (e) {
                        console.log(e)
                    }
                }]
            }
        },
        32771: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/logo.5edb16ae.svg",
                height: 30,
                width: 106,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [757, 141, 424, 974, 971, 23, 744], function() {
            return e(e.s = 89935)
        }), _N_E = e.O()
    }
]);