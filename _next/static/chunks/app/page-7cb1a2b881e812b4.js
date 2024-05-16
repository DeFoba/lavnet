(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        44687: function(a, e, t) {
            Promise.resolve().then(t.t.bind(t, 38173, 23)), Promise.resolve().then(t.bind(t, 40459)), Promise.resolve().then(t.bind(t, 41717)), Promise.resolve().then(t.bind(t, 80481)), Promise.resolve().then(t.bind(t, 13249)), Promise.resolve().then(t.bind(t, 77538))
        },
        80481: function(a, e, t) {
            "use strict";
            t.d(e, {
                default: function() {
                    return n
                }
            });
            var r = t(57437),
                o = {
                    src: "/_next/static/media/hero-bg.955503b1.png",
                    height: 900,
                    width: 1440,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUFBw4fByIXBh31oKuKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNggAFGRjDJBEIMDAxMYC4qAAABTgAMGFhiHwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                i = t(43061),
                l = t(66648);

            function n() {
                let {
                    width: a,
                    height: e
                } = (0, i.iP)();
                return (0, r.jsx)("div", {
                    className: "absolute inset-x-0 z-[-1] h-[100vh] w-[100vw]",
                    children: (0, r.jsx)(l.default, {
                        src: o,
                        alt: "hero-bg",
                        sizes: "100vw",
                        width: a || 0,
                        height: e || 0,
                        className: "absolute inset-0"
                    })
                })
            }
        },
        13249: function(a, e, t) {
            "use strict";
            t.d(e, {
                default: function() {
                    return z
                }
            });
            var r = t(57437),
                o = {
                    src: "/_next/static/media/Arrow.8a00c5df.svg",
                    height: 20,
                    width: 20,
                    blurWidth: 0,
                    blurHeight: 0
                },
                i = t(62076),
                l = t(66648),
                n = t(87138),
                s = t(2265),
                d = t(92274),
                m = {
                    src: "/_next/static/media/question-mark.a5085751.svg",
                    height: 20,
                    width: 21,
                    blurWidth: 0,
                    blurHeight: 0
                },
                p = t(89733),
                c = t(27071);
            let u = c.zt,
                g = c.fC,
                v = c.xz,
                f = s.forwardRef((a, e) => {
                    let {
                        className: t,
                        sideOffset: o = 4,
                        ...l
                    } = a;
                    return (0, r.jsx)(c.VY, {
                        ref: e,
                        sideOffset: o,
                        className: (0, i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                        ...l
                    })
                });
            f.displayName = c.VY.displayName;
            var _ = t(69379),
                h = t(93618),
                b = a => {
                    let {
                        title: e,
                        description: t
                    } = a;
                    return (0, r.jsx)(u, {
                        children: (0, r.jsxs)(g, {
                            children: [(0, r.jsx)(v, {
                                asChild: !0,
                                children: (0, r.jsx)(p.z, {
                                    variant: "link",
                                    size: "sm",
                                    className: "!p-0",
                                    children: (0, r.jsx)(l.default, {
                                        src: m,
                                        alt: "question mark",
                                        width: 20,
                                        height: 20
                                    })
                                })
                            }), (0, r.jsxs)(f, {
                                className: (0, i.cn)("bg-neutral-0 text-neutral-650 w-[250px] rounded-sm p-[20px]"),
                                children: [(0, r.jsx)(_.H4, {
                                    children: e
                                }), (0, r.jsx)(h.Z, {
                                    size: 16
                                }), (0, r.jsx)(_.YS, {
                                    className: (0, i.cn)("text-neutral-650"),
                                    children: t
                                })]
                            })]
                        })
                    })
                },
                w = t(48185),
                k = t(48906),
                x = t(97182),
                j = t(97741);
            let y = a => {
                let e = new Date(a),
                    t = e.getUTCDate().toString().padStart(2, "0"),
                    r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getUTCMonth()],
                    o = e.getUTCFullYear();
                return "".concat(t, " ").concat(r, " ").concat(o)
            };
            var N = () => {
                    let {
                        user: a,
                        isFetched: e
                    } = (0, d.b)({});
                    return e && a ? (0, r.jsxs)(j.Z, {
                        children: [(0, r.jsx)(l.default, {
                            src: a.avatar_url,
                            alt: "circle image",
                            className: "size-[48px] rounded-full",
                            width: 48,
                            height: 48
                        }), (0, r.jsx)(h.Z, {
                            size: 16
                        }), (0, r.jsxs)(k.Z, {
                            children: [(0, r.jsx)(_.t5, {
                                children: a.wallet_address
                            }), (0, r.jsxs)(_.YS, {
                                className: "text-neutral-200",
                                children: ["Since ", y(a.date_joined)]
                            })]
                        })]
                    }) : null
                },
                z = () => {
                    var a, e;
                    let {
                        user: t,
                        isFetched: m,
                        refetch: c
                    } = (0, d.b)({
                        refetchInterval: 36e5,
                        enabled: !1
                    });
                    return (0, s.useEffect)(() => {
                        c()
                    }, [c]), (0, r.jsx)("div", {
                        className: "flex w-full flex-col items-center justify-center p-c32",
                        children: !t && m ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(_.v4, {
                                className: "mb-c8 text-center text-[32px] font-medium leading-[44.80px] text-neutral-0 sm:w-full lg:w-[670px]",
                                style: {
                                    height: "45px",
                                    lineHeight: "44.8px"
                                },
                                children: "Introducing Magma: points on Lava"
                            }), (0, r.jsx)(_.P, {
                                className: "mb-c32 text-center text-h2 text-neutral-100 sm:w-full lg:w-[670px]",
                                style: {
                                    lineHeight: "2.8rem"
                                },
                                children: "Lava is the data access layer for the modular future. Connect your wallet to web3 using Lava and earn points"
                            }), (0, r.jsx)("div", {
                                className: "inline-flex w-full items-start justify-center gap-[19px] lg:w-[670px]",
                                children: (0, r.jsx)(p.z, {
                                    size: "lg",
                                    variant: "destructive",
                                    className: "w-full md:w-auto",
                                    asChild: !0,
                                    children: (0, r.jsxs)(n.default, {
                                        href: "/register",
                                        children: ["Join now", (0, r.jsx)(l.default, {
                                            src: o,
                                            alt: "arrow",
                                            className: "ml-2"
                                        })]
                                    })
                                })
                            })]
                        }) : (0, r.jsxs)(k.Z, {
                            className: "w-full px-c16 pt-c32 lg:w-[902px]",
                            children: [(0, r.jsx)(j.Z, {
                                className: (0, i.cn)("justify-between"),
                                children: (0, r.jsx)(N, {})
                            }), (0, r.jsx)(h.Z, {
                                size: 26
                            }), (0, r.jsxs)("div", {
                                className: (0, i.cn)("flex", "flex-col", "justify-stretch", "w-full", "md:flex-row", "grow"),
                                children: [(0, r.jsx)(w.Zb, {
                                    isLoading: !m,
                                    className: (0, i.cn)("border-gradient-fade-down !p-0 rounded-sm flex w-full"),
                                    children: (0, r.jsxs)(k.Z, {
                                        className: (0, i.cn)("p-c20 flex-grow justify-center items-center"),
                                        children: [(0, r.jsx)(_.Py, {
                                            className: (0, i.cn)("text-primary-300 text-center w-full"),
                                            children: "Total pts"
                                        }), (0, r.jsx)(h.Z, {
                                            size: 16
                                        }), (0, r.jsx)(x.Z, {
                                            value: null == t ? void 0 : t.stats.points.total_points
                                        })]
                                    })
                                }), (0, r.jsx)(h.Z, {
                                    size: 24
                                }), (0, r.jsx)(w.Zb, {
                                    isLoading: !m,
                                    className: (0, i.cn)("border-gradient-fade-down !p-0 rounded-sm flex w-full"),
                                    children: (0, r.jsxs)(k.Z, {
                                        className: (0, i.cn)("p-c20 flex-grow justify-center items-center"),
                                        children: [(0, r.jsx)(_.Py, {
                                            className: (0, i.cn)("text-primary-300 text-center w-full"),
                                            children: "Your rank"
                                        }), (0, r.jsx)(h.Z, {
                                            size: 16
                                        }), (0, r.jsx)(x.Z, {
                                            value: null == t ? void 0 : t.stats.rank,
                                            plusMinus: (null == t ? void 0 : null === (a = t.stats) || void 0 === a ? void 0 : a.rank) !== void 0 && (null == t ? void 0 : null === (e = t.stats) || void 0 === e ? void 0 : e.last_rank) !== void 0 ? t.stats.rank - t.stats.last_rank : void 0,
                                            layout: "horizontal",
                                            icon: null
                                        })]
                                    })
                                })]
                            }), (0, r.jsxs)(w.Zb, {
                                isLoading: !m,
                                className: (0, i.cn)("rounded-sm grid gap-4 grid-cols-2 md:grid-cols-4 my-c32"),
                                children: [(0, r.jsxs)(k.Z, {
                                    className: (0, i.cn)("items-center"),
                                    children: [(0, r.jsxs)(j.Z, {
                                        children: [(0, r.jsx)(_.Py, {
                                            className: "text-center text-neutral-200",
                                            children: "Wallet pts"
                                        }), (0, r.jsx)(h.Z, {
                                            size: 4
                                        }), (0, r.jsx)(b, {
                                            title: "Wallet points",
                                            description: "Swap out the endpoint in your wallet and proceed with your transactions"
                                        })]
                                    }), (0, r.jsx)(h.Z, {
                                        size: 8
                                    }), (0, r.jsx)(x.Z, {
                                        value: null == t ? void 0 : t.stats.points.wallet,
                                        icon: null,
                                        size: "sm"
                                    })]
                                }), (0, r.jsxs)(k.Z, {
                                    className: (0, i.cn)("items-center"),
                                    children: [(0, r.jsxs)(j.Z, {
                                        children: [(0, r.jsx)(_.Py, {
                                            className: "text-center text-neutral-200",
                                            children: "Consumer pts"
                                        }), (0, r.jsx)(h.Z, {
                                            size: 4
                                        }), (0, r.jsx)(b, {
                                            title: "Consumer points",
                                            description: "Use Lava Gateway or Lava SDK and earn points"
                                        })]
                                    }), (0, r.jsx)(h.Z, {
                                        size: 8
                                    }), (0, r.jsx)(x.Z, {
                                        value: null == t ? void 0 : t.stats.points.gateway,
                                        icon: null,
                                        size: "sm"
                                    })]
                                }), (0, r.jsxs)(k.Z, {
                                    className: (0, i.cn)("items-center"),
                                    children: [(0, r.jsxs)(j.Z, {
                                        children: [(0, r.jsx)(_.Py, {
                                            className: "text-center text-neutral-200",
                                            children: "Provider pts"
                                        }), (0, r.jsx)(h.Z, {
                                            size: 4
                                        }), (0, r.jsx)(b, {
                                            title: "Provider points",
                                            description: "Increase your earnings by providing quality RPC services and maintain a high level of loyalty."
                                        })]
                                    }), (0, r.jsx)(h.Z, {
                                        size: 8
                                    }), (0, r.jsx)(x.Z, {
                                        value: null == t ? void 0 : t.stats.points.provider,
                                        icon: null,
                                        size: "sm"
                                    })]
                                }), (0, r.jsxs)(k.Z, {
                                    className: (0, i.cn)("items-center"),
                                    children: [(0, r.jsxs)(j.Z, {
                                        children: [(0, r.jsx)(_.Py, {
                                            className: "text-center text-neutral-200",
                                            children: "Bonus pts"
                                        }), (0, r.jsx)(h.Z, {
                                            size: 4
                                        }), (0, r.jsx)(b, {
                                            title: "Bonus points",
                                            description: "Complete additional tasks from your profile Dashboard and get bonuses"
                                        })]
                                    }), (0, r.jsx)(h.Z, {
                                        size: 8
                                    }), (0, r.jsx)(x.Z, {
                                        value: null == t ? void 0 : t.stats.points.bonus,
                                        icon: null,
                                        size: "sm"
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        77538: function(a, e, t) {
            "use strict";
            t.d(e, {
                LeaderboardTable: function() {
                    return N
                }
            });
            var r = t(57437),
                o = t(62076),
                i = t(2265),
                l = t(89152);
            let n = i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("div", {
                    className: "relative w-full overflow-auto",
                    children: (0, r.jsx)("table", {
                        ref: e,
                        className: (0, o.cn)("w-full caption-bottom", t),
                        ...i
                    })
                })
            });
            n.displayName = "Table";
            let s = i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("thead", {
                    ref: e,
                    className: (0, o.cn)("[&_tr]:border-b text-h3-medium", t),
                    ...i
                })
            });
            s.displayName = "TableHeader";
            let d = i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("tbody", {
                    ref: e,
                    className: (0, o.cn)("[&_tr:last-child]:border-0", t),
                    ...i
                })
            });
            d.displayName = "TableBody", i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("tfoot", {
                    ref: e,
                    className: (0, o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t),
                    ...i
                })
            }).displayName = "TableFooter";
            let m = i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("tr", {
                    ref: e,
                    className: (0, o.cn)("border-b transition-colors hover:bg-muted/90 data-[state=selected]:bg-muted odd:bg-gray-950 even:bg-neutral-900 border-gray-800", t),
                    ...i
                })
            });
            m.displayName = "TableRow";
            let p = i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("th", {
                    ref: e,
                    className: (0, o.cn)("px-c16 py-c12 text-left align-middle text-neutral-100 [&:has([role=checkbox])]:pr-0", t),
                    ...i
                })
            });
            p.displayName = "TableHead";
            let c = i.forwardRef((a, e) => {
                let {
                    className: t,
                    isLoading: i,
                    children: n,
                    ...s
                } = a;
                return (0, r.jsx)("td", {
                    ref: e,
                    className: (0, o.cn)("align-middle [&:has([role=checkbox])]:pr-0 text-h2 px-c16 py-c19", t),
                    ...s,
                    ...i ? (0, r.jsx)(l.Z, {
                        count: 1,
                        height: 20
                    }) : {
                        children: n
                    }
                })
            });
            c.displayName = "TableCell", i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("caption", {
                    ref: e,
                    className: (0, o.cn)("mt-4 text-sm text-muted-foreground", t),
                    ...i
                })
            }).displayName = "TableCaption";
            var u = t(62699),
                g = t(40932);
            let v = async () => [{
                rank: 1,
                moniker: "BruthJannies",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1588712043607388161/YRbhR4tb.jpg",
                wallet: 12313646,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 12313646
            }, {
                rank: 2,
                moniker: "Araceli28214153",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1759866140426465280/vw_SS2gz.jpg",
                wallet: 5247027,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 5247027
            }, {
                rank: 3,
                moniker: "btclifetime",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1600015514314584064/xuKKUz3A.jpg",
                wallet: 5195231,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 5195231
            }, {
                rank: 4,
                moniker: "我那么爱你你却爱BTC",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1476398676667150336/-uz3KszQ.jpg",
                wallet: 5133485,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 5133485
            }, {
                rank: 5,
                moniker: "0x85d5...92d097",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=2d864f&color=fff&length=2&rounded=false&bold=true",
                wallet: 5122836,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 5122836
            }, {
                rank: 6,
                moniker: "web3AMC",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1719351102351835136/UDxeFNo4.jpg",
                wallet: 5121738,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 5121738
            }, {
                rank: 7,
                moniker: "0xd0a3...84cac9",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=3c3a78&color=fff&length=2&rounded=false&bold=true",
                wallet: 5105287,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 5105287
            }, {
                rank: 8,
                moniker: "crypto_pp1998",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1582575395081068544/RHAq6b7V.jpg",
                wallet: 5085452,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 5085452
            }, {
                rank: 9,
                moniker: "0x0_zero",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1684496103402799104/hCb6wRY0.jpg",
                wallet: 4708819,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 4708819
            }, {
                rank: 10,
                moniker: "user4126V",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=87c5c0&color=fff&length=2&rounded=false&bold=true",
                wallet: 4647924,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 4647924
            }, {
                rank: 11,
                moniker: "Cantmiranda",
                moniker_avatar_url: "http://abs.twimg.com/sticky/default_profile_images/default_profile.png",
                wallet: 4580675,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 4580675
            }, {
                rank: 12,
                moniker: "web3bai",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1675708708209438721/Lhs7AOW7.jpg",
                wallet: 4462368,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 4462368
            }, {
                rank: 13,
                moniker: "NgHongNhungv",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1588804041160544257/O-X8pOTN.jpg",
                wallet: 4415976,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 4415976
            }, {
                rank: 14,
                moniker: "CryptoAssassi18",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1593109652447039488/c4Xgmjh9.jpg",
                wallet: 4383709,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 4383709
            }, {
                rank: 15,
                moniker: "NguyenTranMy",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1586605691007270912/91y4Ls6W.jpg",
                wallet: 3949834,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3949834
            }, {
                rank: 16,
                moniker: "CaoCaotren",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1586604126783172608/s9qYwPO3.jpg",
                wallet: 3941724,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3941724
            }, {
                rank: 17,
                moniker: "DangDangbtc",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1586593931273572353/LRhC0VCU.png",
                wallet: 3920163,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3920163
            }, {
                rank: 18,
                moniker: "EthTusk",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1550688394585559040/ws0G_SeD.jpg",
                wallet: 3896140,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3896140
            }, {
                rank: 19,
                moniker: "0xb920...9115b4",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=d279ac&color=fff&length=2&rounded=false&bold=true",
                wallet: 3810599,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3810599
            }, {
                rank: 20,
                moniker: "0xcfa5...946ecf",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=3a7854&color=fff&length=2&rounded=false&bold=true",
                wallet: 3502375,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3502375
            }, {
                rank: 21,
                moniker: "m2kr6l",
                moniker_avatar_url: "http://abs.twimg.com/sticky/default_profile_images/default_profile.png",
                wallet: 3500976,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3500976
            }, {
                rank: 22,
                moniker: "0xda78...7463fb",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=bf4040&color=fff&length=2&rounded=false&bold=true",
                wallet: 3477744,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3477744
            }, {
                rank: 23,
                moniker: "annyx",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=annyx&size=128&background=e0c56c&color=fff&length=2&rounded=false&bold=true",
                wallet: 3326811,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3326811
            }, {
                rank: 24,
                moniker: "0x4fcd...da6125",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=cf79d2&color=fff&length=2&rounded=false&bold=true",
                wallet: 3316816,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3316816
            }, {
                rank: 25,
                moniker: "frantic69",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1754471796558962688/tTg4whRh.jpg",
                wallet: 3189589,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3189589
            }, {
                rank: 26,
                moniker: "0x2773...20d3cc",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=87e06c&color=fff&length=2&rounded=false&bold=true",
                wallet: 3148883,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3148883
            }, {
                rank: 27,
                moniker: "0x42f0...53f1dd",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=0x42f0...53f1dd&size=128&background=931f35&color=fff&length=2&rounded=false&bold=true",
                wallet: 3134862,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3134862
            }, {
                rank: 28,
                moniker: "megumii",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1740111875655057408/xlYAdj2x.png",
                wallet: 3111622,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3111622
            }, {
                rank: 29,
                moniker: "Kinaqu123",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1699037269116506112/xL0sUxa3.jpg",
                wallet: 3019023,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3019023
            }, {
                rank: 30,
                moniker: "0x5c8f...75dd9d",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=861f93&color=fff&length=2&rounded=false&bold=true",
                wallet: 3002271,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 3002271
            }, {
                rank: 31,
                moniker: "0x3e2f...143e65",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=931f69&color=fff&length=2&rounded=false&bold=true",
                wallet: 2962083,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2962083
            }, {
                rank: 32,
                moniker: "0x76da...ce481b",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=c5878f&color=fff&length=2&rounded=false&bold=true",
                wallet: 2903052,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2903052
            }, {
                rank: 33,
                moniker: "oldcar8",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=oldcar8&size=128&background=6d783a&color=fff&length=2&rounded=false&bold=true",
                wallet: 2843058,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2843058
            }, {
                rank: 34,
                moniker: "shitaotaocool",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1482018606343159809/Pty7X6tH.jpg",
                wallet: 2835695,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2835695
            }, {
                rank: 35,
                moniker: "0x421f...bd2d0d",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=c1c587&color=fff&length=2&rounded=false&bold=true",
                wallet: 2714110,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2714110
            }, {
                rank: 36,
                moniker: "wildpointer9527",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1585915662437752832/soiEhU0e.jpg",
                wallet: 2650803,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2650803
            }, {
                rank: 37,
                moniker: "0x90e4...dd448f",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=c5b487&color=fff&length=2&rounded=false&bold=true",
                wallet: 2586867,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2586867
            }, {
                rank: 38,
                moniker: "CbenL2694486",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1655281253296517120/QQrKCkIv.jpg",
                wallet: 2415044,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2415044
            }, {
                rank: 39,
                moniker: "Thienthien1305",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1627680789898076160/4RUZKZlB.jpg",
                wallet: 2412931,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2412931
            }, {
                rank: 40,
                moniker: "cuihang12",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1728995528451772416/WAB2MDKd.png",
                wallet: 2368081,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2368081
            }, {
                rank: 41,
                moniker: "Ilusha_psiholog",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1750006679037517824/WClbgiKN.jpg",
                wallet: 2348599,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2348599
            }, {
                rank: 42,
                moniker: "ericet",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1364305407775285250/edQxEtSd.jpg",
                wallet: 2317199,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2317199
            }, {
                rank: 43,
                moniker: "TrnCngB1",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1718178830651920384/A-kC2jzq.jpg",
                wallet: 2311092,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2311092
            }, {
                rank: 44,
                moniker: "TAKE-FLIGHT-TEAM",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1753688456772153344/6ZnC8lPS.jpg",
                wallet: 2291905,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2291905
            }, {
                rank: 45,
                moniker: "Dlinn_ETH",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1719338798704988160/_zjHVDDI.jpg",
                wallet: 2245357,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2245357
            }, {
                rank: 46,
                moniker: "0x1b52...37707a",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=3a7849&color=fff&length=2&rounded=false&bold=true",
                wallet: 2220197,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2220197
            }, {
                rank: 47,
                moniker: "0xfaf8...5bab0a",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=dce06c&color=fff&length=2&rounded=false&bold=true",
                wallet: 2214275,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2214275
            }, {
                rank: 48,
                moniker: "Memo040100",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1374369519372627969/5GcQZNeH.jpg",
                wallet: 2151446,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2151446
            }, {
                rank: 49,
                moniker: "Ukhagani",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1612925328170647555/HLHbfxcy.jpg",
                wallet: 2143009,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2143009
            }, {
                rank: 50,
                moniker: "NuNoyDeFi",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1717033782979825664/me0CPlQT.jpg",
                wallet: 2138595,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2138595
            }, {
                rank: 51,
                moniker: "JoinAladdin",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1576828269697331203/h4502bUl.jpg",
                wallet: 2078777,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2078777
            }, {
                rank: 52,
                moniker: "pingfengjj",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1532725782513995776/-mFG0gCL.jpg",
                wallet: 2077612,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2077612
            }, {
                rank: 53,
                moniker: "shitaotaocom",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1754204345846132736/ZaK8qEBq.jpg",
                wallet: 2051025,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2051025
            }, {
                rank: 54,
                moniker: "0xf52b...3ec977",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=c58793&color=fff&length=2&rounded=false&bold=true",
                wallet: 2043512,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2043512
            }, {
                rank: 55,
                moniker: "0x20df...f77465",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=40bf5b&color=fff&length=2&rounded=false&bold=true",
                wallet: 2043061,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2043061
            }, {
                rank: 56,
                moniker: "0x5656...901bb6",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=87c5bf&color=fff&length=2&rounded=false&bold=true",
                wallet: 2014284,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 2014284
            }, {
                rank: 57,
                moniker: "Rivrivcaca",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1598044126670364672/RjLk9H8O.jpg",
                wallet: 1995640,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1995640
            }, {
                rank: 58,
                moniker: "0xa254...636f7a",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=2d2d86&color=fff&length=2&rounded=false&bold=true",
                wallet: 1994641,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1994641
            }, {
                rank: 59,
                moniker: "qianxiaoer1",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1745737228608028672/TcdT0JPx.png",
                wallet: 1990349,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1990349
            }, {
                rank: 60,
                moniker: "crazygse",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1490112126865793025/yxZKYlTZ.jpg",
                wallet: 1985366,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1985366
            }, {
                rank: 61,
                moniker: "gorkayapiska",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1528460455592837122/n3-ygMQZ.jpg",
                wallet: 1985012,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1985012
            }, {
                rank: 62,
                moniker: "OsegStan",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1757577614821076992/b34803AO.jpg",
                wallet: 1962647,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1962647
            }, {
                rank: 63,
                moniker: "0x2622...d39916",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=79d2cc&color=fff&length=2&rounded=false&bold=true",
                wallet: 1951505,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1951505
            }, {
                rank: 64,
                moniker: "mundeejoe1",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1453459319601577990/z8GQu7JT.jpg",
                wallet: 1937837,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1937837
            }, {
                rank: 65,
                moniker: "chossopian",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1719318257604399104/Zxzq6Rsb.jpg",
                wallet: 1930298,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1930298
            }, {
                rank: 66,
                moniker: "0x39b1...4a27ab",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=87acc5&color=fff&length=2&rounded=false&bold=true",
                wallet: 1927258,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1927258
            }, {
                rank: 67,
                moniker: "ialphaDefi",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1750964189802233858/_ukaY3Ja.jpg",
                wallet: 1923339,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1923339
            }, {
                rank: 68,
                moniker: "niyuan1130",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1663432410602819588/2rZQUQKE.jpg",
                wallet: 1859756,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1859756
            }, {
                rank: 69,
                moniker: "Kaelvooooooon",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1555925298591711232/7Cm_LI-0.jpg",
                wallet: 1858761,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1858761
            }, {
                rank: 70,
                moniker: "3dmaxETH",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1692762138702700544/oiTUTKc0.jpg",
                wallet: 1847990,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1847990
            }, {
                rank: 71,
                moniker: "gamesta68964479",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1720220932462264320/jm_qBdgI.jpg",
                wallet: 1836046,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1836046
            }, {
                rank: 72,
                moniker: "Nirut_Pea",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1743579545461301248/_OcwICMu.jpg",
                wallet: 1823951,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1823951
            }, {
                rank: 73,
                moniker: "gIt17bbyal4Hvop",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1622255461985812481/jt77d6U5.jpg",
                wallet: 182e4,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 182e4
            }, {
                rank: 74,
                moniker: "lukii7a5",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1750440235836854272/PqBnCHLx.jpg",
                wallet: 1815763,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1815763
            }, {
                rank: 75,
                moniker: "DennisYao0306",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1552529623980064768/hGIiFscp.jpg",
                wallet: 1806002,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1806002
            }, {
                rank: 76,
                moniker: "Ruesandora0",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1518216484035735553/oKAvxoan.jpg",
                wallet: 1791523,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1791523
            }, {
                rank: 77,
                moniker: "da_paopaoo",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1668946627988717568/bzfVX4WJ.jpg",
                wallet: 1782306,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1782306
            }, {
                rank: 78,
                moniker: "kshift",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1466596335277133827/yJ1W2bsI.jpg",
                wallet: 1778203,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1778203
            }, {
                rank: 79,
                moniker: "PoR311",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1542948433232678912/1mBjJl_4.jpg",
                wallet: 1772493,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1772493
            }, {
                rank: 80,
                moniker: "MetaFatess",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1536934468165828613/spkERlHp.jpg",
                wallet: 1745388,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1745388
            }, {
                rank: 81,
                moniker: "simalu2",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1481435803733880834/fIAdI9mC.jpg",
                wallet: 1737117,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1737117
            }, {
                rank: 82,
                moniker: "0x4d11...d5f348",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=e0ac6c&color=fff&length=2&rounded=false&bold=true",
                wallet: 1736812,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1736812
            }, {
                rank: 83,
                moniker: "wngpng3",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1557962106989060097/49gmxsas.jpg",
                wallet: 1721258,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1721258
            }, {
                rank: 83,
                moniker: "keena",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1741359364277952512/A7iOH_oF.jpg",
                wallet: 1721258,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1721258
            }, {
                rank: 85,
                moniker: "0x0899...bd6010",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=4fbf40&color=fff&length=2&rounded=false&bold=true",
                wallet: 1714848,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1714848
            }, {
                rank: 86,
                moniker: "miralidogan",
                moniker_avatar_url: "http://abs.twimg.com/sticky/default_profile_images/default_profile.png",
                wallet: 171e4,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 171e4
            }, {
                rank: 87,
                moniker: "ruanchengren",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1751993902083764225/z5A68gGn.jpg",
                wallet: 1707116,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1707116
            }, {
                rank: 88,
                moniker: "0xe843...f4b89a",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=1f9352&color=fff&length=2&rounded=false&bold=true",
                wallet: 1706757,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1706757
            }, {
                rank: 89,
                moniker: "njrwt",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1719965011790135296/VWDkG07y.jpg",
                wallet: 1703281,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1703281
            }, {
                rank: 90,
                moniker: "0x988c...70fdc8",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=87a0c5&color=fff&length=2&rounded=false&bold=true",
                wallet: 1703166,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1703166
            }, {
                rank: 91,
                moniker: "0xda0f...56241f",
                moniker_avatar_url: "https://ui-avatars.com/api/?name=&size=128&background=86342d&color=fff&length=2&rounded=false&bold=true",
                wallet: 1703113,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1703113
            }, {
                rank: 92,
                moniker: "RoongPok",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1743624089305329664/tUjonb4Q.jpg",
                wallet: 1681960,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1681960
            }, {
                rank: 93,
                moniker: "elise175628877",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1476942376992010254/imD1uLLi.jpg",
                wallet: 1681087,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1681087
            }, {
                rank: 94,
                moniker: "hearttomoon",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1020116827307773952/zv9fFdkS.jpg",
                wallet: 1674019,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1674019
            }, {
                rank: 95,
                moniker: "slumbots",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1311600640544530433/_oFS6Kck.png",
                wallet: 1667e3,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1667e3
            }, {
                rank: 96,
                moniker: "yima",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1457509101546524678/cZmyRuHt.png",
                wallet: 1665457,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1665457
            }, {
                rank: 97,
                moniker: "Jinnie2222",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1734874617469427712/zM11xoam.jpg",
                wallet: 1665011,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1665011
            }, {
                rank: 98,
                moniker: "tommyto19891032",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1633014085213380610/sE3N1QDl.png",
                wallet: 1662518,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1662518
            }, {
                rank: 99,
                moniker: "saviola1999",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/1114678217/1.jpg",
                wallet: 1658053,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1658053
            }, {
                rank: 100,
                moniker: "hi_bitcoin",
                moniker_avatar_url: "http://pbs.twimg.com/profile_images/933000195951935488/8o2jiYoj.jpg",
                wallet: 1657615,
                gateway: 0,
                provider: 0,
                validator: 0,
                bonus: 0,
                total_points: 1657615
            }], f = a => {
                let {
                    data: e,
                    ...t
                } = (0, g.a)({
                    queryKey: [u.U.leaderboard],
                    queryFn: v,
                    ...a
                });
                return {
                    leaderboard: e,
                    ...t
                }
            };
            var _ = t(66648);
            let h = ["bg-info-225", "bg-magenta", "bg-coquelicot"],
                b = a => h[a.length % h.length];
            var w = a => {
                    let {
                        src: e,
                        moniker: t
                    } = a;
                    return (0, r.jsx)("div", {
                        className: (0, o.cn)("w-c28 h-c28 rounded-full overflow-hidden text-center text-h4 mr-3 flex items-center justify-center", !e && b(t)),
                        children: (0, r.jsx)(_.default, {
                            src: e,
                            alt: t + "_avatar",
                            width: 28,
                            height: 28
                        })
                    })
                },
                k = t(69379);
            let x = [{
                    src: "/_next/static/media/pixel-medal.7b3ebf35.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                }, {
                    src: "/_next/static/media/pixel-medal-2.df4280f1.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                }, {
                    src: "/_next/static/media/pixel-medal-3.d93f1791.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                }],
                j = ["text-secondaryKey-225", "text-neutral-100", "text-darkOrange"];
            var y = a => {
                let {
                    rank: e
                } = a, t = e > 3 ? k.H2 : a => {
                    let {
                        children: e
                    } = a;
                    return (0, r.jsx)(k.F5, {
                        className: (0, o.cn)("h-c22 w-c20 ml-2 text-right"),
                        children: e
                    })
                };
                return (0, r.jsxs)("div", {
                    className: (0, o.cn)("flex flex-row-reverse items-end"),
                    children: [(0, r.jsx)(t, {
                        className: (0, o.cn)("w-[20px] text-right text-h2", j[e - 1], e < 4 && "text-[1.6rem]"),
                        children: e
                    }), e < 4 && (0, r.jsx)(_.default, {
                        className: (0, o.cn)("mr-250"),
                        src: x[e - 1],
                        alt: "rank",
                        width: 20,
                        height: 20
                    })]
                })
            };
            let N = () => {
                let {
                    leaderboard: a,
                    isFetching: e
                } = f({
                    staleTime: 36e5
                });

                function t(a) {
                    if (null == a || "" === a) return "";
                    let e = a.toString().split("").reverse().join("").match(/.{1,3}/g);
                    return e ? e.join(",").split("").reverse().join("") : ""
                }
                return (0, r.jsx)("div", {
                    className: "w-full pb-10",
                    children: e ? (0, r.jsx)(l.Z, {
                        count: 4,
                        height: 30,
                        gapSize: 1
                    }) : (0, r.jsxs)(n, {
                        children: [(0, r.jsx)(s, {
                            children: (0, r.jsxs)(m, {
                                children: [(0, r.jsx)(p, {
                                    children: "Rank"
                                }), (0, r.jsx)(p, {
                                    children: "Moniker"
                                }), (0, r.jsx)(p, {
                                    children: "Total Points"
                                }), (0, r.jsx)(p, {
                                    className: (0, o.cn)("hidden", "md:table-cell"),
                                    children: "Wallet Points"
                                }), (0, r.jsx)(p, {
                                    className: (0, o.cn)("hidden", "md:table-cell"),
                                    children: "Developer Points"
                                }), (0, r.jsx)(p, {
                                    className: (0, o.cn)("hidden", "md:table-cell"),
                                    children: "Node Runner Points"
                                }), (0, r.jsx)(p, {
                                    className: (0, o.cn)("hidden", "md:table-cell"),
                                    children: "Bonus Points"
                                })]
                            })
                        }), (0, r.jsx)(d, {
                            children: null == a ? void 0 : a.map((a, e) => (0, r.jsxs)(m, {
                                children: [(0, r.jsx)(c, {
                                    children: (0, r.jsx)(y, {
                                        rank: a.rank
                                    })
                                }), (0, r.jsx)(c, {
                                    children: (0, r.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, r.jsx)(w, {
                                            moniker: a.moniker,
                                            src: a.moniker_avatar_url
                                        }), a.moniker]
                                    })
                                }), (0, r.jsx)(c, {
                                    children: t(a.total_points)
                                }), (0, r.jsx)(c, {
                                    className: (0, o.cn)("text-neutral-100", "hidden", "md:table-cell"),
                                    children: t(a.wallet)
                                }), (0, r.jsx)(c, {
                                    className: (0, o.cn)("text-neutral-100", "hidden", "md:table-cell"),
                                    children: t(a.gateway)
                                }), (0, r.jsx)(c, {
                                    className: (0, o.cn)("text-neutral-100", "hidden", "md:table-cell"),
                                    children: t(a.provider)
                                }), (0, r.jsx)(c, {
                                    className: (0, o.cn)("text-neutral-100", "hidden", "md:table-cell"),
                                    children: t(a.bonus)
                                })]
                            }, e))
                        })]
                    })
                })
            }
        },
        89152: function(a, e, t) {
            "use strict";
            var r = t(57437);
            t(2265);
            var o = t(26393);
            t(3436);
            var i = t(48906),
                l = t(93618);
            let n = a => {
                let {
                    gapSize: e,
                    children: t
                } = a;
                return (0, r.jsxs)(i.Z, {
                    children: [t, (0, r.jsx)(l.Z, {
                        size: e
                    })]
                })
            };
            e.Z = a => (0, r.jsx)(o.y, {
                baseColor: "#202020",
                highlightColor: "#444",
                children: (0, r.jsx)("div", {
                    className: "flex w-full",
                    children: (0, r.jsx)(o.Z, {
                        containerClassName: "flex-1 rounded-xs",
                        ...a.gapSize && {
                            wrapper: n
                        },
                        ...a
                    })
                })
            })
        },
        48185: function(a, e, t) {
            "use strict";
            t.d(e, {
                Zb: function() {
                    return s
                }
            });
            var r = t(57437),
                o = t(62076),
                i = t(2265),
                l = t(89152),
                n = t(69379);
            let s = i.forwardRef((a, e) => {
                let {
                    className: t,
                    children: i,
                    isLoading: n,
                    ...s
                } = a;
                return (0, r.jsx)("div", {
                    ref: e,
                    className: (0, o.cn)("relative rounded-lg border bg-card text-card-foreground shadow-sm p-c20", n && "!p-0 overflow-hidden !h-[100px]", t),
                    ...s,
                    children: n ? (0, r.jsx)(l.Z, {
                        containerClassName: "size-full -top-2 relative",
                        height: 102
                    }) : i
                })
            });
            s.displayName = "Card", i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("div", {
                    ref: e,
                    className: (0, o.cn)("flex flex-col space-y-1.5 p-6", t),
                    ...i
                })
            }).displayName = "CardHeader", i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("div", {
                    ref: e,
                    className: (0, o.cn)(t, "mb-c8"),
                    children: (0, r.jsx)(n.Et, {
                        children: i.children
                    })
                })
            }).displayName = "CardTitle", i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("p", {
                    ref: e,
                    className: (0, o.cn)("text-p2 text-neutral-100 mb-c24", t),
                    ...i
                })
            }).displayName = "CardDescription", i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("div", {
                    ref: e,
                    className: (0, o.cn)("p-6 pt-0", t),
                    ...i
                })
            }).displayName = "CardContent", i.forwardRef((a, e) => {
                let {
                    className: t,
                    ...i
                } = a;
                return (0, r.jsx)("div", {
                    ref: e,
                    className: (0, o.cn)("flex items-center p-6 pt-0", t),
                    ...i
                })
            }).displayName = "CardFooter"
        },
        48906: function(a, e, t) {
            "use strict";
            var r = t(57437),
                o = t(62076);
            e.Z = a => {
                let {
                    children: e,
                    className: t
                } = a;
                return (0, r.jsx)("div", {
                    className: (0, o.cn)("flex flex-col", t),
                    children: e
                })
            }
        },
        93618: function(a, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return l
                }
            });
            var r = t(57437),
                o = {
                    src: "/_next/static/media/spacer.webp",
                    height: 1,
                    width: 1,
                    blurWidth: 0,
                    blurHeight: 0
                },
                i = t(66648),
                l = a => {
                    let {
                        width: e = 8,
                        height: t = 8,
                        size: l
                    } = a;
                    return "grow" === l ? (0, r.jsx)("div", {
                        className: "grow"
                    }) : (0, r.jsx)(i.default, {
                        src: o,
                        alt: "spacer",
                        width: l || e,
                        height: l || t,
                        style: {
                            pointerEvents: "none",
                            userSelect: "none"
                        }
                    })
                }
        },
        97182: function(a, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return _
                }
            });
            var r = t(57437),
                o = t(62076),
                i = t(66648),
                l = {
                    src: "/_next/static/media/coin-icon.9dd80b11.svg",
                    height: 24,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                n = {
                    src: "/_next/static/media/green-arrow-down.613dd212.svg",
                    height: 12,
                    width: 25,
                    blurWidth: 0,
                    blurHeight: 0
                },
                s = {
                    src: "/_next/static/media/green-arrow.703a2b49.svg",
                    height: 12,
                    width: 25,
                    blurWidth: 0,
                    blurHeight: 0
                },
                d = t(69379),
                m = t(48906),
                p = t(93618),
                c = t(97741);
            let u = {
                    default: d.No,
                    sm: d.Et,
                    lg: d.v4
                },
                g = {
                    default: 32,
                    sm: 24,
                    lg: 48
                },
                v = a => {
                    let {
                        plusMinus: e,
                        layout: t
                    } = a;
                    if (!e) return null;
                    let l = m.Z;
                    return "horizontal" === t && (l = c.Z), (0, r.jsxs)(l, {
                        className: (0, o.cn)("items-center"),
                        children: [e > 0 && (0, r.jsx)(i.default, {
                            src: s,
                            alt: "green arrow",
                            width: 24,
                            height: 12
                        }), (0, r.jsx)(d.F5, {
                            className: (0, o.cn)(e > 0 ? "text-success-550" : "text-red"),
                            children: e
                        }), e < 0 && (0, r.jsx)(i.default, {
                            src: n,
                            alt: "green arrow",
                            width: 24,
                            height: 12
                        })]
                    })
                },
                f = a => void 0 === a ? " " : "".concat(a < 0 ? "-" : "").concat(a.toLocaleString(void 0, {}));
            var _ = a => {
                let {
                    value: e = 0,
                    plusMinus: t,
                    size: n = "default",
                    layout: s = "vertical",
                    icon: d = (0, r.jsx)(i.default, {
                        src: l,
                        alt: "pixel icon",
                        width: g[n],
                        height: g[n]
                    }),
                    extraTextClassNames: m = ""
                } = a, _ = u[n];
                return (0, r.jsxs)(c.Z, {
                    className: (0, o.cn)("items-center"),
                    children: [d, d && (0, r.jsx)(p.Z, {
                        size: 8
                    }), (0, r.jsx)(_, {
                        className: m,
                        children: f(e)
                    }), (0, r.jsx)(p.Z, {
                        size: 80
                    }), !t && (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(v, {
                            plusMinus: t,
                            layout: s
                        })
                    })]
                })
            }
        },
        97741: function(a, e, t) {
            "use strict";
            var r = t(57437),
                o = t(62076);
            e.Z = a => {
                let {
                    children: e,
                    isColSm: t,
                    className: i,
                    style: l
                } = a;
                return (0, r.jsx)("div", {
                    className: (0, o.cn)("flex lg:flex-row", t && "sm:flex-col", i),
                    style: l,
                    children: e
                })
            }
        },
        62699: function(a, e, t) {
            "use strict";
            t.d(e, {
                U: function() {
                    return r
                }
            });
            let r = {
                user: "user",
                invite: "invite",
                leaderboard: "leaderboard"
            }
        },
        92274: function(a, e, t) {
            "use strict";
            t.d(e, {
                b: function() {
                    return n
                },
                n: function() {
                    return s
                }
            });
            var r = t(62699),
                o = t(87685),
                i = t(40932),
                l = t(2265);
            let n = a => {
                    let {
                        isLoggedIn: e
                    } = s(), {
                        data: t,
                        ...l
                    } = (0, i.a)({
                        queryKey: [r.U.user],
                        queryFn: o.C,
                        ...{
                            enabled: e,
                            staleTime: 18e5,
                            ...a
                        }
                    });
                    return {
                        user: (null == t ? void 0 : t.detail) === "Unauthorized" ? null : t,
                        ...l
                    }
                },
                s = a => {
                    let [e, t] = (0, l.useState)(!1), {
                        isFetched: n,
                        ...s
                    } = (0, i.a)({
                        queryKey: [r.U.user],
                        queryFn: o.C,
                        ...a,
                        retry: e,
                        onError: function() {
                            for (var a = arguments.length, e = Array(a), r = 0; r < a; r++) e[r] = arguments[r];
                            console.log("User is not logged in", e), t(!1)
                        },
                        onSuccess: () => {
                            console.log("User is logged in"), t(!0)
                        }
                    });
                    return {
                        isLoggedIn: e && n,
                        ...s
                    }
                }
        },
        87685: function(a, e, t) {
            "use strict";
            t.d(e, {
                C: function() {
                    return o
                },
                G: function() {
                    return i
                }
            });
            var r = t(62076);
            let o = async () => {
                let a = await fetch((0, r.kG)("/users/me"), {
                    credentials: "include",
                    mode: "cors"
                });
                if (401 === a.status) throw Error("401");
                return a.json()
            }, i = async a => (await fetch((0, r.kG)("/users/me/nickname"), {
                method: "PUT",
                body: JSON.stringify({
                    nickname: a
                }),
                credentials: "include",
                mode: "cors"
            })).json()
        },
        40459: function(a, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "/_next/static/media/discord.a0488381.svg",
                height: 28,
                width: 28,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        41717: function(a, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "/_next/static/media/twitter.2d9492bb.svg",
                height: 28,
                width: 28,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(a) {
        a.O(0, [757, 141, 424, 319, 533, 61, 146, 974, 971, 23, 744], function() {
            return a(a.s = 44687)
        }), _N_E = a.O()
    }
]);