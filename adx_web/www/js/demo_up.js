/* WebUploader 0.1.5 */
!
function(a, b) {
    var c, d = {},
    e = function(a, b) {
        var c, d, e;
        if ("string" == typeof a) return h(a);
        for (c = [], d = a.length, e = 0; d > e; e++) c.push(h(a[e]));
            return b.apply(null, c)
    },
    f = function(a, b, c) {
        2 === arguments.length && (c = b, b = null),
        e(b || [],
            function() {
                g(a, c, arguments)
            })
    },
    g = function(a, b, c) {
        var f, g = {
            exports: b
        };
        "function" == typeof b && (c.length || (c = [e, g.exports, g]), f = b.apply(null, c), void 0 !== f && (g.exports = f)),
        d[a] = g.exports
    },
    h = function(b) {
        var c = d[b] || a[b];
        if (!c) throw new Error("`" + b + "` is undefined");
        return c
    },
    i = function(a) {
        var b, c, e, f, g, h;
        h = function(a) {
            return a && a.charAt(0).toUpperCase() + a.substr(1)
        };
        for (b in d) if (c = a, d.hasOwnProperty(b)) {
            for (e = b.split("/"), g = h(e.pop()); f = h(e.shift());) c[f] = c[f] || {},
                c = c[f];
            c[g] = d[b]
        }
        return a
    },
    j = function(c) {
        return a.__dollar = c,
        i(b(a, f, e))
    };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = j() : "function" == typeof define && define.amd ? define(["jQuery"], j) : (c = a.WebUploader, a.WebUploader = j(), a.WebUploader.noConflict = function() {
        a.WebUploader = c
    })
} (window,
    function(a, b, c) {
        return b("dollar-third", [],
            function() {
                var b = a.__dollar || a.jQuery || a.Zepto;
                if (!b) throw new Error("jQuery or Zepto not found!");
                return b
            }),
        b("dollar", ["dollar-third"],
            function(a) {
                return a
            }),
        b("promise-third", ["dollar"],
            function(a) {
                return {
                    Deferred: a.Deferred,
                    when: a.when,
                    isPromise: function(a) {
                        return a && "function" == typeof a.then
                    }
                }
            }),
        b("promise", ["promise-third"],
            function(a) {
                return a
            }),
        b("base", ["dollar", "promise"],
            function(b, c) {
                function d(a) {
                    return function() {
                        return h.apply(a, arguments)
                    }
                }
                function e(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                }
                function f(a) {
                    var b;
                    return Object.create ? Object.create(a) : (b = function() {},
                        b.prototype = a, new b)
                }
                var g = function() {},
                h = Function.call;
                return {
                    version: "0.1.5",
                    $: b,
                    Deferred: c.Deferred,
                    isPromise: c.isPromise,
                    when: c.when,
                    browser: function(a) {
                        var b = {},
                        c = a.match(/WebKit\/([\d.]+)/),
                        d = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
                        e = a.match(/MSIE\s([\d\.]+)/) || a.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
                        f = a.match(/Firefox\/([\d.]+)/),
                        g = a.match(/Safari\/([\d.]+)/),
                        h = a.match(/OPR\/([\d.]+)/);
                        return c && (b.webkit = parseFloat(c[1])),
                        d && (b.chrome = parseFloat(d[1])),
                        e && (b.ie = parseFloat(e[1])),
                        f && (b.firefox = parseFloat(f[1])),
                        g && (b.safari = parseFloat(g[1])),
                        h && (b.opera = parseFloat(h[1])),
                        b
                    } (navigator.userAgent),
                    os: function(a) {
                        var b = {},
                        c = a.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                        d = a.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
                        return c && (b.android = parseFloat(c[1])),
                        d && (b.ios = parseFloat(d[1].replace(/_/g, "."))),
                        b
                    } (navigator.userAgent),
                    inherits: function(a, c, d) {
                        var e;
                        return "function" == typeof c ? (e = c, c = null) : e = c && c.hasOwnProperty("constructor") ? c.constructor: function() {
                            return a.apply(this, arguments)
                        },
                        b.extend(!0, e, a, d || {}),
                        e.__super__ = a.prototype,
                        e.prototype = f(a.prototype),
                        c && b.extend(!0, e.prototype, c),
                        e
                    },
                    noop: g,
                    bindFn: e,
                    log: function() {
                        return a.console ? e(console.log, console) : g
                    } (),
                    nextTick: function() {
                        return function(a) {
                            setTimeout(a, 1)
                        }
                    } (),
                    slice: d([].slice),
                    guid: function() {
                        var a = 0;
                        return function(b) {
                            for (var c = ( + new Date).toString(32), d = 0; 5 > d; d++) c += Math.floor(65535 * Math.random()).toString(32);
                                return (b || "wu_") + c + (a++).toString(32)
                        }
                    } (),
                    formatSize: function(a, b, c) {
                        var d;
                        for (c = c || ["B", "K", "M", "G", "TB"]; (d = c.shift()) && a > 1024;) a /= 1024;
                            return ("B" === d ? a: a.toFixed(b || 2)) + d
                    }
                }
            }),
        b("mediator", ["base"],
            function(a) {
                function b(a, b, c, d) {
                    return f.grep(a,
                        function(a) {
                            return ! (!a || b && a.e !== b || c && a.cb !== c && a.cb._cb !== c || d && a.ctx !== d)
                        })
                }
                function c(a, b, c) {
                    f.each((a || "").split(h),
                        function(a, d) {
                            c(d, b)
                        })
                }
                function d(a, b) {
                    for (var c, d = !1,
                        e = -1,
                        f = a.length; ++e < f;) if (c = a[e], c.cb.apply(c.ctx2, b) === !1) {
                        d = !0;
                    break
                }
                return ! d
            }
            var e, f = a.$,
            g = [].slice,
            h = /\s+/;
            return e = {
                on: function(a, b, d) {
                    var e, f = this;
                    return b ? (e = this._events || (this._events = []), c(a, b,
                        function(a, b) {
                            var c = {
                                e: a
                            };
                            c.cb = b,
                            c.ctx = d,
                            c.ctx2 = d || f,
                            c.id = e.length,
                            e.push(c)
                        }), this) : this
                },
                once: function(a, b, d) {
                    var e = this;
                    return b ? (c(a, b,
                        function(a, b) {
                            var c = function() {
                                return e.off(a, c),
                                b.apply(d || e, arguments)
                            };
                            c._cb = b,
                            e.on(a, c, d)
                        }), e) : e
                },
                off: function(a, d, e) {
                    var g = this._events;
                    return g ? a || d || e ? (c(a, d,
                        function(a, c) {
                            f.each(b(g, a, c, e),
                                function() {
                                    delete g[this.id]
                                })
                        }), this) : (this._events = [], this) : this
                },
                trigger: function(a) {
                    var c, e, f;
                    return this._events && a ? (c = g.call(arguments, 1), e = b(this._events, a), f = b(this._events, "all"), d(e, c) && d(f, arguments)) : this
                }
            },
            f.extend({
                installTo: function(a) {
                    return f.extend(a, e)
                }
            },
            e)
        }),
        b("uploader", ["base", "mediator"],
            function(a, b) {
                function c(a) {
                    this.options = d.extend(!0, {},
                        c.options, a),
                    this._init(this.options)
                }
                var d = a.$;
                return c.options = {},
                b.installTo(c.prototype),
                d.each({
                    upload: "start-upload",
                    stop: "stop-upload",
                    getFile: "get-file",
                    getFiles: "get-files",
                    addFile: "add-file",
                    addFiles: "add-file",
                    sort: "sort-files",
                    removeFile: "remove-file",
                    skipFile: "skip-file",
                    retry: "retry",
                    isInProgress: "is-in-progress",
                    makeThumb: "make-thumb",
                    md5File: "md5-file",
                    getDimension: "get-dimension",
                    addButton: "add-btn",
                    getRuntimeType: "get-runtime-type",
                    refresh: "refresh",
                    disable: "disable",
                    enable: "enable",
                    reset: "reset"
                },
                function(a, b) {
                    c.prototype[a] = function() {
                        return this.request(b, arguments)
                    }
                }),
                d.extend(c.prototype, {
                    state: "pending",
                    _init: function(a) {
                        var b = this;
                        b.request("init", a,
                            function() {
                                b.state = "ready",
                                b.trigger("ready")
                            })
                    },
                    option: function(a, b) {
                        var c = this.options;
                        return arguments.length > 1 ? void(d.isPlainObject(b) && d.isPlainObject(c[a]) ? d.extend(c[a], b) : c[a] = b) : a ? c[a] : c
                    },
                    getStats: function() {
                        var a = this.request("get-stats");
                        return {
                            successNum: a.numOfSuccess,
                            progressNum: a.numOfProgress,
                            cancelNum: a.numOfCancel,
                            invalidNum: a.numOfInvalid,
                            uploadFailNum: a.numOfUploadFailed,
                            queueNum: a.numOfQueue
                        }
                    },
                    trigger: function(a) {
                        var c = [].slice.call(arguments, 1),
                        e = this.options,
                        f = "on" + a.substring(0, 1).toUpperCase() + a.substring(1);
                        return b.trigger.apply(this, arguments) === !1 || d.isFunction(e[f]) && e[f].apply(this, c) === !1 || d.isFunction(this[f]) && this[f].apply(this, c) === !1 || b.trigger.apply(b, [this, a].concat(c)) === !1 ? !1 : !0
                    },
                    request: a.noop
                }),
                a.create = c.create = function(a) {
                    return new c(a)
                },
                a.Uploader = c,
                c
            }),
        b("runtime/runtime", ["base", "mediator"],
            function(a, b) {
                function c(b) {
                    this.options = d.extend({
                        container: document.body
                    },
                    b),
                    this.uid = a.guid("rt_")
                }
                var d = a.$,
                e = {},
                f = function(a) {
                    for (var b in a) if (a.hasOwnProperty(b)) return b;
                        return null
                };
                return d.extend(c.prototype, {
                    getContainer: function() {
                        var a, b, c = this.options;
                        return this._container ? this._container: (a = d(c.container || document.body), b = d(document.createElement("div")), b.attr("id", "rt_" + this.uid), b.css({
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden"
                        }), a.append(b), a.addClass("webuploader-container"), this._container = b, b)
                    },
                    init: a.noop,
                    exec: a.noop,
                    destroy: function() {
                        this._container && this._container.parentNode.removeChild(this.__container),
                        this.off()
                    }
                }),
                c.orders = "html5,flash",
                c.addRuntime = function(a, b) {
                    e[a] = b
                },
                c.hasRuntime = function(a) {
                    return !! (a ? e[a] : f(e))
                },
                c.create = function(a, b) {
                    var g, h;
                    if (b = b || c.orders, d.each(b.split(/\s*,\s*/g),
                        function() {
                            return e[this] ? (g = this, !1) : void 0
                        }), g = g || f(e), !g) throw new Error("Runtime Error");
                        return h = new e[g](a)
                },
                b.installTo(c.prototype),
                c
            }),
        b("runtime/client", ["base", "mediator", "runtime/runtime"],
            function(a, b, c) {
                function d(b, d) {
                    var f, g = a.Deferred();
                    this.uid = a.guid("client_"),
                    this.runtimeReady = function(a) {
                        return g.done(a)
                    },
                    this.connectRuntime = function(b, h) {
                        if (f) throw new Error("already connected!");
                        return g.done(h),
                        "string" == typeof b && e.get(b) && (f = e.get(b)),
                        f = f || e.get(null, d),
                        f ? (a.$.extend(f.options, b), f.__promise.then(g.resolve), f.__client++) : (f = c.create(b, b.runtimeOrder), f.__promise = g.promise(), f.once("ready", g.resolve), f.init(), e.add(f), f.__client = 1),
                        d && (f.__standalone = d),
                        f
                    },
                    this.getRuntime = function() {
                        return f
                    },
                    this.disconnectRuntime = function() {
                        f && (f.__client--, f.__client <= 0 && (e.remove(f), delete f.__promise, f.destroy()), f = null)
                    },
                    this.exec = function() {
                        if (f) {
                            var c = a.slice(arguments);
                            return b && c.unshift(b),
                            f.exec.apply(this, c)
                        }
                    },
                    this.getRuid = function() {
                        return f && f.uid
                    },
                    this.destroy = function(a) {
                        return function() {
                            a && a.apply(this, arguments),
                            this.trigger("destroy"),
                            this.off(),
                            this.exec("destroy"),
                            this.disconnectRuntime()
                        }
                    } (this.destroy)
                }
                var e;
                return e = function() {
                    var a = {};
                    return {
                        add: function(b) {
                            a[b.uid] = b
                        },
                        get: function(b, c) {
                            var d;
                            if (b) return a[b];
                            for (d in a) if (!c || !a[d].__standalone) return a[d];
                                return null
                        },
                        remove: function(b) {
                            delete a[b.uid]
                        }
                    }
                } (),
                b.installTo(d.prototype),
                d
            }),
        b("lib/dnd", ["base", "mediator", "runtime/client"],
            function(a, b, c) {
                function d(a) {
                    a = this.options = e.extend({},
                        d.options, a),
                    a.container = e(a.container),
                    a.container.length && c.call(this, "DragAndDrop")
                }
                var e = a.$;
                return d.options = {
                    accept: null,
                    disableGlobalDnd: !1
                },
                a.inherits(c, {
                    constructor: d,
                    init: function() {
                        var a = this;
                        a.connectRuntime(a.options,
                            function() {
                                a.exec("init"),
                                a.trigger("ready")
                            })
                    },
                    destroy: function() {
                        this.disconnectRuntime()
                    }
                }),
                b.installTo(d.prototype),
                d
            }),
        b("widgets/widget", ["base", "uploader"],
            function(a, b) {
                function c(a) {
                    if (!a) return ! 1;
                    var b = a.length,
                    c = e.type(a);
                    return 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && "string" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
                }
                function d(a) {
                    this.owner = a,
                    this.options = a.options
                }
                var e = a.$,
                f = b.prototype._init,
                g = {},
                h = [];
                return e.extend(d.prototype, {
                    init: a.noop,
                    invoke: function(a, b) {
                        var c = this.responseMap;
                        return c && a in c && c[a] in this && e.isFunction(this[c[a]]) ? this[c[a]].apply(this, b) : g
                    },
                    request: function() {
                        return this.owner.request.apply(this.owner, arguments)
                    }
                }),
                e.extend(b.prototype, {
                    _init: function() {
                        var a = this,
                        b = a._widgets = [];
                        return e.each(h,
                            function(c, d) {
                                b.push(new d(a))
                            }),
                        f.apply(a, arguments)
                    },
                    request: function(b, d, e) {
                        var f, h, i, j, k = 0,
                        l = this._widgets,
                        m = l.length,
                        n = [],
                        o = [];
                        for (d = c(d) ? d: [d]; m > k; k++) f = l[k],
                            h = f.invoke(b, d),
                        h !== g && (a.isPromise(h) ? o.push(h) : n.push(h));
                        return e || o.length ? (i = a.when.apply(a, o), j = i.pipe ? "pipe": "then", i[j](function() {
                            var b = a.Deferred(),
                            c = arguments;
                            return 1 === c.length && (c = c[0]),
                            setTimeout(function() {
                                b.resolve(c)
                            },
                            1),
                            b.promise()
                        })[e ? j: "done"](e || a.noop)) : n[0]
                    }
                }),
                b.register = d.register = function(b, c) {
                    var f, g = {
                        init: "init"
                    };
                    return 1 === arguments.length ? (c = b, c.responseMap = g) : c.responseMap = e.extend(g, b),
                    f = a.inherits(d, c),
                    h.push(f),
                    f
                },
                d
            }),
        b("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"],
            function(a, b, c) {
                var d = a.$;
                return b.options.dnd = "",
                b.register({
                    init: function(b) {
                        if (b.dnd && "html5" === this.request("predict-runtime-type")) {
                            var e, f = this,
                            g = a.Deferred(),
                            h = d.extend({},
                            {
                                disableGlobalDnd: b.disableGlobalDnd,
                                container: b.dnd,
                                accept: b.accept
                            });
                            return e = new c(h),
                            e.once("ready", g.resolve),
                            e.on("drop",
                                function(a) {
                                    f.request("add-file", [a])
                                }),
                            e.on("accept",
                                function(a) {
                                    return f.owner.trigger("dndAccept", a)
                                }),
                            e.init(),
                            g.promise()
                        }
                    }
                })
            }),
        b("lib/filepaste", ["base", "mediator", "runtime/client"],
            function(a, b, c) {
                function d(a) {
                    a = this.options = e.extend({},
                        a),
                    a.container = e(a.container || document.body),
                    c.call(this, "FilePaste")
                }
                var e = a.$;
                return a.inherits(c, {
                    constructor: d,
                    init: function() {
                        var a = this;
                        a.connectRuntime(a.options,
                            function() {
                                a.exec("init"),
                                a.trigger("ready")
                            })
                    },
                    destroy: function() {
                        this.exec("destroy"),
                        this.disconnectRuntime(),
                        this.off()
                    }
                }),
                b.installTo(d.prototype),
                d
            }),
        b("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"],
            function(a, b, c) {
                var d = a.$;
                return b.register({
                    init: function(b) {
                        if (b.paste && "html5" === this.request("predict-runtime-type")) {
                            var e, f = this,
                            g = a.Deferred(),
                            h = d.extend({},
                            {
                                container: b.paste,
                                accept: b.accept
                            });
                            return e = new c(h),
                            e.once("ready", g.resolve),
                            e.on("paste",
                                function(a) {
                                    f.owner.request("add-file", [a])
                                }),
                            e.init(),
                            g.promise()
                        }
                    }
                })
            }),
        b("lib/blob", ["base", "runtime/client"],
            function(a, b) {
                function c(a, c) {
                    var d = this;
                    d.source = c,
                    d.ruid = a,
                    this.size = c.size || 0,
                    this.type = !c.type && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? "image/" + ("jpg" === this.ext ? "jpeg": this.ext) : c.type || "application/octet-stream",
                    b.call(d, "Blob"),
                    this.uid = c.uid || this.uid,
                    a && d.connectRuntime(a)
                }
                return a.inherits(b, {
                    constructor: c,
                    slice: function(a, b) {
                        return this.exec("slice", a, b)
                    },
                    getSource: function() {
                        return this.source
                    }
                }),
                c
            }),
        b("lib/file", ["base", "lib/blob"],
            function(a, b) {
                function c(a, c) {
                    var f;
                    this.name = c.name || "untitled" + d++,
                    f = e.exec(c.name) ? RegExp.$1.toLowerCase() : "",
                    !f && c.type && (f = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(c.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + f),
                    this.ext = f,
                    this.lastModifiedDate = c.lastModifiedDate || (new Date).toLocaleString(),
                    b.apply(this, arguments)
                }
                var d = 1,
                e = /\.([^.]+)$/;
                return a.inherits(b, c)
            }),
        b("lib/filepicker", ["base", "runtime/client", "lib/file"],
            function(b, c, d) {
                function e(a) {
                    if (a = this.options = f.extend({},
                        e.options, a), a.container = f(a.id), !a.container.length) throw new Error("按钮指定错误");
                        a.innerHTML = a.innerHTML || a.label || a.container.html() || "",
                    a.button = f(a.button || document.createElement("div")),
                    a.button.html(a.innerHTML),
                    a.container.html(a.button),
                    c.call(this, "FilePicker", !0)
                }
                var f = b.$;
                return e.options = {
                    button: null,
                    container: null,
                    label: null,
                    innerHTML: null,
                    multiple: !0,
                    accept: null,
                    name: "file"
                },
                b.inherits(c, {
                    constructor: e,
                    init: function() {
                        var b = this,
                        c = b.options,
                        e = c.button;
                        e.addClass("webuploader-pick"),
                        b.on("all",
                            function(a) {
                                var g;
                                switch (a) {
                                    case "mouseenter":
                                    e.addClass("webuploader-pick-hover");
                                    break;
                                    case "mouseleave":
                                    e.removeClass("webuploader-pick-hover");
                                    break;
                                    case "change":
                                    g = b.exec("getFiles"),
                                    b.trigger("select", f.map(g,
                                        function(a) {
                                            return a = new d(b.getRuid(), a),
                                            a._refer = c.container,
                                            a
                                        }), c.container)
                                }
                            }),
                        b.connectRuntime(c,
                            function() {
                                b.refresh(),
                                b.exec("init", c),
                                b.trigger("ready")
                            }),
                        f(a).on("resize",
                            function() {
                                b.refresh()
                            })
                    },
                    refresh: function() {
                        var a = this.getRuntime().getContainer(),
                        b = this.options.button,
                        c = b.outerWidth ? b.outerWidth() : b.width(),
                        d = b.outerHeight ? b.outerHeight() : b.height(),
                        e = b.offset();
                        c && d && a.css({
                            bottom: "auto",
                            right: "auto",
                            width: c + "px",
                            height: d + "px"
                        }).offset(e)
                    },
                    enable: function() {
                        var a = this.options.button;
                        a.removeClass("webuploader-pick-disable"),
                        this.refresh()
                    },
                    disable: function() {
                        var a = this.options.button;
                        this.getRuntime().getContainer().css({
                            top: "-99999px"
                        }),
                        a.addClass("webuploader-pick-disable")
                    },
                    destroy: function() {
                        this.runtime && (this.exec("destroy"), this.disconnectRuntime())
                    }
                }),
                e
            }),
b("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"],
    function(a, b, c) {
        var d = a.$;
        return d.extend(b.options, {
            pick: null,
            accept: null
        }),
        b.register({
            "add-btn": "addButton",
            refresh: "refresh",
            disable: "disable",
            enable: "enable"
        },
        {
            init: function(a) {
                return this.pickers = [],
                a.pick && this.addButton(a.pick)
            },
            refresh: function() {
                d.each(this.pickers,
                    function() {
                        this.refresh()
                    })
            },
            addButton: function(b) {
                var e = this,
                f = e.options,
                g = f.accept,
                h = [];
                if (b) return d.isPlainObject(b) || (b = {
                    id: b
                }),
                    d(b.id).each(function() {
                        var i, j, k;
                        k = a.Deferred(),
                        i = d.extend({},
                            b, {
                                accept: d.isPlainObject(g) ? [g] : g,
                                swf: f.swf,
                                runtimeOrder: f.runtimeOrder,
                                id: this
                            }),
                        j = new c(i),
                        j.once("ready", k.resolve),
                        j.on("select",
                            function(a) {
                                e.owner.request("add-file", [a])
                            }),
                        j.init(),
                        e.pickers.push(j),
                        h.push(k.promise())
                    }),
                    a.when.apply(a, h)
                },
                disable: function() {
                    d.each(this.pickers,
                        function() {
                            this.disable()
                        })
                },
                enable: function() {
                    d.each(this.pickers,
                        function() {
                            this.enable()
                        })
                }
            })
    }),
b("lib/image", ["base", "runtime/client", "lib/blob"],
    function(a, b, c) {
        function d(a) {
            this.options = e.extend({},
                d.options, a),
            b.call(this, "Image"),
            this.on("load",
                function() {
                    this._info = this.exec("info"),
                    this._meta = this.exec("meta")
                })
        }
        var e = a.$;
        return d.options = {
            quality: 90,
            crop: !1,
            preserveHeaders: !1,
            allowMagnify: !1
        },
        a.inherits(b, {
            constructor: d,
            info: function(a) {
                return a ? (this._info = a, this) : this._info
            },
            meta: function(a) {
                return a ? (this._meta = a, this) : this._meta
            },
            loadFromBlob: function(a) {
                var b = this,
                c = a.getRuid();
                this.connectRuntime(c,
                    function() {
                        b.exec("init", b.options),
                        b.exec("loadFromBlob", a)
                    })
            },
            resize: function() {
                var b = a.slice(arguments);
                return this.exec.apply(this, ["resize"].concat(b))
            },
            crop: function() {
                var b = a.slice(arguments);
                return this.exec.apply(this, ["crop"].concat(b))
            },
            getAsDataUrl: function(a) {
                return this.exec("getAsDataUrl", a)
            },
            getAsBlob: function(a) {
                var b = this.exec("getAsBlob", a);
                return new c(this.getRuid(), b)
            }
        }),
        d
    }),
b("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"],
    function(a, b, c) {
        var d, e = a.$;
        return d = function(a) {
            var b = 0,
            c = [],
            d = function() {
                for (var d; c.length && a > b;) d = c.shift(),
                    b += d[0],
                d[1]()
            };
            return function(a, e, f) {
                c.push([e, f]),
                a.once("destroy",
                    function() {
                        b -= e,
                        setTimeout(d, 1)
                    }),
                setTimeout(d, 1)
            }
        } (5242880),
        e.extend(b.options, {
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: !0,
                crop: !0,
                preserveHeaders: !1,
                type: "image/jpeg"
            },
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: !1,
                crop: !1,
                preserveHeaders: !0
            }
        }),
        b.register({
            "make-thumb": "makeThumb",
            "before-send-file": "compressImage"
        },
        {
            makeThumb: function(a, b, f, g) {
                var h, i;
                return a = this.request("get-file", a),
                a.type.match(/^image/) ? (h = e.extend({},
                    this.options.thumb), e.isPlainObject(f) && (h = e.extend(h, f), f = null), f = f || h.width, g = g || h.height, i = new c(h), i.once("load",
                    function() {
                        a._info = a._info || i.info(),
                        a._meta = a._meta || i.meta(),
                        1 >= f && f > 0 && (f = a._info.width * f),
                        1 >= g && g > 0 && (g = a._info.height * g),
                        i.resize(f, g)
                    }), i.once("complete",
                    function() {
                        b(!1, i.getAsDataUrl(h.type)),
                        i.destroy()
                    }), i.once("error",
                    function(a) {
                        b(a || !0),
                        i.destroy()
                    }), void d(i, a.source.size,
                    function() {
                        a._info && i.info(a._info),
                        a._meta && i.meta(a._meta),
                        i.loadFromBlob(a.source)
                    })) : void b(!0)
            },
            compressImage: function(b) {
                var d, f, g = this.options.compress || this.options.resize,
                h = g && g.compressSize || 0,
                i = g && g.noCompressIfLarger || !1;
                return b = this.request("get-file", b),
                !g || !~"image/jpeg,image/jpg".indexOf(b.type) || b.size < h || b._compressed ? void 0 : (g = e.extend({},
                    g), f = a.Deferred(), d = new c(g), f.always(function() {
                        d.destroy(),
                        d = null
                    }), d.once("error", f.reject), d.once("load",
                    function() {
                        var a = g.width,
                        c = g.height;
                        b._info = b._info || d.info(),
                        b._meta = b._meta || d.meta(),
                        1 >= a && a > 0 && (a = b._info.width * a),
                        1 >= c && c > 0 && (c = b._info.height * c),
                        d.resize(a, c)
                    }), d.once("complete",
                    function() {
                        var a, c;
                        try {
                            a = d.getAsBlob(g.type),
                            c = b.size,
                            (!i || a.size < c) && (b.source = a, b.size = a.size, b.trigger("resize", a.size, c)),
                            b._compressed = !0,
                            f.resolve()
                        } catch(e) {
                            f.resolve()
                        }
                    }), b._info && d.info(b._info), b._meta && d.meta(b._meta), d.loadFromBlob(b.source), f.promise())
            }
        })
    }),
b("file", ["base", "mediator"],
    function(a, b) {
        function c() {
            return f + g++
        }
        function d(a) {
            this.name = a.name || "Untitled",
            this.size = a.size || 0,
            this.type = a.type || "application",
            this.lastModifiedDate = a.lastModifiedDate || 1 * new Date,
            this.id = c(),
            this.ext = h.exec(this.name) ? RegExp.$1: "",
            this.statusText = "",
            i[this.id] = d.Status.INITED,
            this.source = a,
            this.loaded = 0,
            this.on("error",
                function(a) {
                    this.setStatus(d.Status.ERROR, a)
                })
        }
        var e = a.$,
        f = "WU_FILE_",
        g = 0,
        h = /\.([^.]+)$/,
        i = {};
        return e.extend(d.prototype, {
            setStatus: function(a, b) {
                var c = i[this.id];
                "undefined" != typeof b && (this.statusText = b),
                a !== c && (i[this.id] = a, this.trigger("statuschange", a, c))
            },
            getStatus: function() {
                return i[this.id]
            },
            getSource: function() {
                return this.source
            },
            destory: function() {
                delete i[this.id]
            }
        }),
        b.installTo(d.prototype),
        d.Status = {
            INITED: "inited",
            QUEUED: "queued",
            PROGRESS: "progress",
            ERROR: "error",
            COMPLETE: "complete",
            CANCELLED: "cancelled",
            INTERRUPT: "interrupt",
            INVALID: "invalid"
        },
        d
    }),
b("queue", ["base", "mediator", "file"],
    function(a, b, c) {
        function d() {
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0
            },
            this._queue = [],
            this._map = {}
        }
        var e = a.$,
        f = c.Status;
        return e.extend(d.prototype, {
            append: function(a) {
                return this._queue.push(a),
                this._fileAdded(a),
                this
            },
            prepend: function(a) {
                return this._queue.unshift(a),
                this._fileAdded(a),
                this
            },
            getFile: function(a) {
                return "string" != typeof a ? a: this._map[a]
            },
            fetch: function(a) {
                var b, c, d = this._queue.length;
                for (a = a || f.QUEUED, b = 0; d > b; b++) if (c = this._queue[b], a === c.getStatus()) return c;
                    return null
            },
            sort: function(a) {
                "function" == typeof a && this._queue.sort(a)
            },
            getFiles: function() {
                for (var a, b = [].slice.call(arguments, 0), c = [], d = 0, f = this._queue.length; f > d; d++) a = this._queue[d],
                    (!b.length || ~e.inArray(a.getStatus(), b)) && c.push(a);
                return c
            },
            _fileAdded: function(a) {
                var b = this,
                c = this._map[a.id];
                c || (this._map[a.id] = a, a.on("statuschange",
                    function(a, c) {
                        b._onFileStatusChange(a, c)
                    })),
                a.setStatus(f.QUEUED)
            },
            _onFileStatusChange: function(a, b) {
                var c = this.stats;
                switch (b) {
                    case f.PROGRESS:
                    c.numOfProgress--;
                    break;
                    case f.QUEUED:
                    c.numOfQueue--;
                    break;
                    case f.ERROR:
                    c.numOfUploadFailed--;
                    break;
                    case f.INVALID:
                    c.numOfInvalid--
                }
                switch (a) {
                    case f.QUEUED:
                    c.numOfQueue++;
                    break;
                    case f.PROGRESS:
                    c.numOfProgress++;
                    break;
                    case f.ERROR:
                    c.numOfUploadFailed++;
                    break;
                    case f.COMPLETE:
                    c.numOfSuccess++;
                    break;
                    case f.CANCELLED:
                    c.numOfCancel++;
                    break;
                    case f.INVALID:
                    c.numOfInvalid++
                }
            }
        }),
        b.installTo(d.prototype),
        d
    }),
b("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"],
    function(a, b, c, d, e, f) {
        var g = a.$,
        h = /\.\w+$/,
        i = d.Status;
        return b.register({
            "sort-files": "sortFiles",
            "add-file": "addFiles",
            "get-file": "getFile",
            "fetch-file": "fetchFile",
            "get-stats": "getStats",
            "get-files": "getFiles",
            "remove-file": "removeFile",
            retry: "retry",
            reset: "reset",
            "accept-file": "acceptFile"
        },
        {
            init: function(b) {
                var d, e, h, i, j, k, l, m = this;
                if (g.isPlainObject(b.accept) && (b.accept = [b.accept]), b.accept) {
                    for (j = [], h = 0, e = b.accept.length; e > h; h++) i = b.accept[h].extensions,
                        i && j.push(i);
                    j.length && (k = "\\." + j.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"),
                    m.accept = new RegExp(k, "i")
                }
                return m.queue = new c,
                m.stats = m.queue.stats,
                "html5" === this.request("predict-runtime-type") ? (d = a.Deferred(), l = new f("Placeholder"), l.connectRuntime({
                    runtimeOrder: "html5"
                },
                function() {
                    m._ruid = l.getRuid(),
                    d.resolve()
                }), d.promise()) : void 0
            },
            _wrapFile: function(a) {
                if (! (a instanceof d)) {
                    if (! (a instanceof e)) {
                        if (!this._ruid) throw new Error("Can't add external files.");
                        a = new e(this._ruid, a)
                    }
                    a = new d(a)
                }
                return a
            },
            acceptFile: function(a) {
                var b = !a || a.size < 6 || this.accept && h.exec(a.name) && !this.accept.test(a.name);
                return ! b
            },
            _addFile: function(a) {
                var b = this;
                return a = b._wrapFile(a),
                b.owner.trigger("beforeFileQueued", a) ? b.acceptFile(a) ? (b.queue.append(a), b.owner.trigger("fileQueued", a), a) : void b.owner.trigger("error", "Q_TYPE_DENIED", a) : void 0
            },
            getFile: function(a) {
                return this.queue.getFile(a)
            },
            addFiles: function(a) {
                var b = this;
                a.length || (a = [a]),
                a = g.map(a,
                    function(a) {
                        return b._addFile(a)
                    }),
                b.owner.trigger("filesQueued", a),
                b.options.auto && setTimeout(function() {
                    b.request("start-upload")
                },
                20)
            },
            getStats: function() {
                return this.stats
            },
            removeFile: function(a) {
                var b = this;
                a = a.id ? a: b.queue.getFile(a),
                a.setStatus(i.CANCELLED),
                b.owner.trigger("fileDequeued", a)
            },
            getFiles: function() {
                return this.queue.getFiles.apply(this.queue, arguments)
            },
            fetchFile: function() {
                return this.queue.fetch.apply(this.queue, arguments)
            },
            retry: function(a, b) {
                var c, d, e, f = this;
                if (a) return a = a.id ? a: f.queue.getFile(a),
                    a.setStatus(i.QUEUED),
                void(b || f.request("start-upload"));
                for (c = f.queue.getFiles(i.ERROR), d = 0, e = c.length; e > d; d++) a = c[d],
                    a.setStatus(i.QUEUED);
                f.request("start-upload")
            },
            sortFiles: function() {
                return this.queue.sort.apply(this.queue, arguments)
            },
            reset: function() {
                this.owner.trigger("reset"),
                this.queue = new c,
                this.stats = this.queue.stats
            }
        })
}),
b("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"],
    function(a, b) {
        return a.support = function() {
            return b.hasRuntime.apply(b, arguments)
        },
        a.register({
            "predict-runtime-type": "predictRuntmeType"
        },
        {
            init: function() {
                if (!this.predictRuntmeType()) throw Error("Runtime Error")
            },
        predictRuntmeType: function() {
            var a, c, d = this.options.runtimeOrder || b.orders,
            e = this.type;
            if (!e) for (d = d.split(/\s*,\s*/g), a = 0, c = d.length; c > a; a++) if (b.hasRuntime(d[a])) {
                this.type = e = d[a];
                break
            }
            return e
        }
    })
    }),
b("lib/transport", ["base", "runtime/client", "mediator"],
    function(a, b, c) {
        function d(a) {
            var c = this;
            a = c.options = e.extend(!0, {},
                d.options, a || {}),
            b.call(this, "Transport"),
            this._blob = null,
            this._formData = a.formData || {},
            this._headers = a.headers || {},
            this.on("progress", this._timeout),
            this.on("load error",
                function() {
                    c.trigger("progress", 1),
                    clearTimeout(c._timer)
                })
        }
        var e = a.$;
        return d.options = {
            server: "",
            method: "POST",
            withCredentials: !1,
            fileVal: "file",
            timeout: 12e4,
            formData: {},
            headers: {},
            sendAsBinary: !1
        },
        e.extend(d.prototype, {
            appendBlob: function(a, b, c) {
                var d = this,
                e = d.options;
                d.getRuid() && d.disconnectRuntime(),
                d.connectRuntime(b.ruid,
                    function() {
                        d.exec("init")
                    }),
                d._blob = b,
                e.fileVal = a || e.fileVal,
                e.filename = c || e.filename
            },
            append: function(a, b) {
                "object" == typeof a ? e.extend(this._formData, a) : this._formData[a] = b
            },
            setRequestHeader: function(a, b) {
                "object" == typeof a ? e.extend(this._headers, a) : this._headers[a] = b
            },
            send: function(a) {
                this.exec("send", a),
                this._timeout()
            },
            abort: function() {
                return clearTimeout(this._timer),
                this.exec("abort")
            },
            destroy: function() {
                this.trigger("destroy"),
                this.off(),
                this.exec("destroy"),
                this.disconnectRuntime()
            },
            getResponse: function() {
                return this.exec("getResponse")
            },
            getResponseAsJson: function() {
                return this.exec("getResponseAsJson")
            },
            getStatus: function() {
                return this.exec("getStatus")
            },
            _timeout: function() {
                var a = this,
                b = a.options.timeout;
                b && (clearTimeout(a._timer), a._timer = setTimeout(function() {
                    a.abort(),
                    a.trigger("error", "timeout")
                },
                b))
            }
        }),
        c.installTo(d.prototype),
        d
    }),
b("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"],
    function(a, b, c, d) {
        function e(a, b) {
            for (var c, d = [], e = a.source, f = e.size, g = b ? Math.ceil(f / b) : 1, h = 0, i = 0; g > i;) c = Math.min(b, f - h),
                d.push({
                    file: a,
                    start: h,
                    end: b ? h + c: f,
                    total: f,
                    chunks: g,
                    chunk: i++
                }),
            h += c;
            return a.blocks = d.concat(),
            a.remaning = d.length,
            {
                file: a,
                has: function() {
                    return !! d.length
                },
                fetch: function() {
                    return d.shift()
                }
            }
        }
        var f = a.$,
        g = a.isPromise,
        h = c.Status;
        f.extend(b.options, {
            prepareNextFile: !1,
            chunked: !1,
            chunkSize: 5242880,
            chunkRetry: 2,
            threads: 3,
            formData: null
        }),
        b.register({
            "start-upload": "start",
            "stop-upload": "stop",
            "skip-file": "skipFile",
            "is-in-progress": "isInProgress"
        },
        {
            init: function() {
                var b = this.owner;
                this.runing = !1,
                this.pool = [],
                this.pending = [],
                this.remaning = 0,
                this.__tick = a.bindFn(this._tick, this),
                b.on("uploadComplete",
                    function(a) {
                        a.blocks && f.each(a.blocks,
                            function(a, b) {
                                b.transport && (b.transport.abort(), b.transport.destroy()),
                                delete b.transport
                            }),
                        delete a.blocks,
                        delete a.remaning
                    })
            },
            start: function() {
                var b = this;
                f.each(b.request("get-files", h.INVALID),
                    function() {
                        b.request("remove-file", this)
                    }),
                b.runing || (b.runing = !0, f.each(b.pool,
                    function(a, c) {
                        var d = c.file;
                        d.getStatus() === h.INTERRUPT && (d.setStatus(h.PROGRESS), b._trigged = !1, c.transport && c.transport.send())
                    }), b._trigged = !1, b.owner.trigger("startUpload"), a.nextTick(b.__tick))
            },
            stop: function(a) {
                var b = this;
                b.runing !== !1 && (b.runing = !1, a && f.each(b.pool,
                    function(a, b) {
                        b.transport && b.transport.abort(),
                        b.file.setStatus(h.INTERRUPT)
                    }), b.owner.trigger("stopUpload"))
            },
            isInProgress: function() {
                return !! this.runing
            },
            getStats: function() {
                return this.request("get-stats")
            },
            skipFile: function(a, b) {
                a = this.request("get-file", a),
                a.setStatus(b || h.COMPLETE),
                a.skipped = !0,
                a.blocks && f.each(a.blocks,
                    function(a, b) {
                        var c = b.transport;
                        c && (c.abort(), c.destroy(), delete b.transport)
                    }),
                this.owner.trigger("uploadSkip", a)
            },
            _tick: function() {
                var b, c, d = this,
                e = d.options;
                return d._promise ? d._promise.always(d.__tick) : void(d.pool.length < e.threads && (c = d._nextBlock()) ? (d._trigged = !1, b = function(b) {
                    d._promise = null,
                    b && b.file && d._startSend(b),
                    a.nextTick(d.__tick)
                },
                d._promise = g(c) ? c.always(b) : b(c)) : d.remaning || d.getStats().numOfQueue || (d.runing = !1, d._trigged || a.nextTick(function() {
                    d.owner.trigger("uploadFinished")
                }), d._trigged = !0))
            },
            _nextBlock: function() {
                var a, b, c = this,
                d = c._act,
                f = c.options;
                return d && d.has() && d.file.getStatus() === h.PROGRESS ? (f.prepareNextFile && !c.pending.length && c._prepareNextFile(), d.fetch()) : c.runing ? (!c.pending.length && c.getStats().numOfQueue && c._prepareNextFile(), a = c.pending.shift(), b = function(a) {
                    return a ? (d = e(a, f.chunked ? f.chunkSize: 0), c._act = d, d.fetch()) : null
                },
                g(a) ? a[a.pipe ? "pipe": "then"](b) : b(a)) : void 0
            },
            _prepareNextFile: function() {
                var a, b = this,
                c = b.request("fetch-file"),
                d = b.pending;
                c && (a = b.request("before-send-file", c,
                    function() {
                        return c.getStatus() === h.QUEUED ? (b.owner.trigger("uploadStart", c), c.setStatus(h.PROGRESS), c) : b._finishFile(c)
                    }), a.done(function() {
                        var b = f.inArray(a, d);~b && d.splice(b, 1, c)
                    }), a.fail(function(a) {
                        c.setStatus(h.ERROR, a),
                        b.owner.trigger("uploadError", c, a),
                        b.owner.trigger("uploadComplete", c)
                    }), d.push(a))
            },
            _popBlock: function(a) {
                var b = f.inArray(a, this.pool);
                this.pool.splice(b, 1),
                a.file.remaning--,
                this.remaning--
            },
            _startSend: function(b) {
                var c, d = this,
                e = b.file;
                d.pool.push(b),
                d.remaning++,
                b.blob = 1 === b.chunks ? e.source: e.source.slice(b.start, b.end),
                c = d.request("before-send", b,
                    function() {
                        e.getStatus() === h.PROGRESS ? d._doSend(b) : (d._popBlock(b), a.nextTick(d.__tick))
                    }),
                c.fail(function() {
                    1 === e.remaning ? d._finishFile(e).always(function() {
                        b.percentage = 1,
                        d._popBlock(b),
                        d.owner.trigger("uploadComplete", e),
                        a.nextTick(d.__tick)
                    }) : (b.percentage = 1, d._popBlock(b), a.nextTick(d.__tick))
                })
            },
            _doSend: function(b) {
                var c, e, g = this,
                i = g.owner,
                j = g.options,
                k = b.file,
                l = new d(j),
                m = f.extend({},
                    j.formData),
                n = f.extend({},
                    j.headers);
                b.transport = l,
                l.on("destroy",
                    function() {
                        delete b.transport,
                        g._popBlock(b),
                        a.nextTick(g.__tick)
                    }),
                l.on("progress",
                    function(a) {
                        var c = 0,
                        d = 0;
                        c = b.percentage = a,
                        b.chunks > 1 && (f.each(k.blocks,
                            function(a, b) {
                                d += (b.percentage || 0) * (b.end - b.start)
                            }), c = d / k.size),
                        i.trigger("uploadProgress", k, c || 0)
                    }),
                c = function(a) {
                    var c;
                    return e = l.getResponseAsJson() || {},
                    e._raw = l.getResponse(),
                    c = function(b) {
                        a = b
                    },
                    i.trigger("uploadAccept", b, e, c) || (a = a || "server"),
                    a
                },
                l.on("error",
                    function(a, d) {
                        b.retried = b.retried || 0,
                        b.chunks > 1 && ~"http,abort".indexOf(a) && b.retried < j.chunkRetry ? (b.retried++, l.send()) : (d || "server" !== a || (a = c(a)), k.setStatus(h.ERROR, a), i.trigger("uploadError", k, a), i.trigger("uploadComplete", k))
                    }),
                l.on("load",
                    function() {
                        var a;
                        return (a = c()) ? void l.trigger("error", a, !0) : void(1 === k.remaning ? g._finishFile(k, e) : l.destroy())
                    }),
                m = f.extend(m, {
                    id: k.id,
                    name: k.name,
                    type: k.type,
                    lastModifiedDate: k.lastModifiedDate,
                    size: k.size
                }),
                b.chunks > 1 && f.extend(m, {
                    chunks: b.chunks,
                    chunk: b.chunk
                }),
                i.trigger("uploadBeforeSend", b, m, n),
                l.appendBlob(j.fileVal, b.blob, k.name),
                l.append(m),
                l.setRequestHeader(n),
                l.send()
            },
            _finishFile: function(a, b, c) {
                var d = this.owner;
                return d.request("after-send-file", arguments,
                    function() {
                        a.setStatus(h.COMPLETE),
                        d.trigger("uploadSuccess", a, b, c)
                    }).fail(function(b) {
                        a.getStatus() === h.PROGRESS && a.setStatus(h.ERROR, b),
                        d.trigger("uploadError", a, b)
                    }).always(function() {
                        d.trigger("uploadComplete", a)
                    })
                }
            })
}),
b("widgets/validator", ["base", "uploader", "file", "widgets/widget"],
    function(a, b, c) {
        var d, e = a.$,
        f = {};
        return d = {
            addValidator: function(a, b) {
                f[a] = b
            },
            removeValidator: function(a) {
                delete f[a]
            }
        },
        b.register({
            init: function() {
                var b = this;
                a.nextTick(function() {
                    e.each(f,
                        function() {
                            this.call(b.owner)
                        })
                })
            }
        }),
        d.addValidator("fileNumLimit",
            function() {
                var a = this,
                b = a.options,
                c = 0,
                d = parseInt(b.fileNumLimit, 10),
                e = !0;
                d && (a.on("beforeFileQueued",
                    function(a) {
                        return c >= d && e && (e = !1, this.trigger("error", "Q_EXCEED_NUM_LIMIT", d, a), setTimeout(function() {
                            e = !0
                        },
                        1)),
                        c >= d ? !1 : !0
                    }), a.on("fileQueued",
                    function() {
                        c++
                    }), a.on("fileDequeued",
                    function() {
                        c--
                    }), a.on("uploadFinished reset",
                    function() {
                        c = 0
                    }))
            }),
        d.addValidator("fileSizeLimit",
            function() {
                var a = this,
                b = a.options,
                c = 0,
                d = b.fileSizeLimit >> 0,
                e = !0;
                d && (a.on("beforeFileQueued",
                    function(a) {
                        var b = c + a.size > d;
                        return b && e && (e = !1, this.trigger("error", "Q_EXCEED_SIZE_LIMIT", d, a), setTimeout(function() {
                            e = !0
                        },
                        1)),
                        b ? !1 : !0
                    }), a.on("fileQueued",
                    function(a) {
                        c += a.size
                    }), a.on("fileDequeued",
                    function(a) {
                        c -= a.size
                    }), a.on("uploadFinished reset",
                    function() {
                        c = 0
                    }))
            }),
        d.addValidator("fileSingleSizeLimit",
            function() {
                var a = this,
                b = a.options,
                d = b.fileSingleSizeLimit;
                d && a.on("beforeFileQueued",
                    function(a) {
                        return a.size > d ? (a.setStatus(c.Status.INVALID, "exceed_size"), this.trigger("error", "F_EXCEED_SIZE", a), !1) : void 0
                    })
            }),
        d.addValidator("duplicate",
            function() {
                function a(a) {
                    for (var b, c = 0,
                        d = 0,
                        e = a.length; e > d; d++) b = a.charCodeAt(d),
                        c = b + (c << 6) + (c << 16) - c;
                    return c
                }
                var b = this,
                c = b.options,
                d = {};
                c.duplicate || (b.on("beforeFileQueued",
                    function(b) {
                        var c = b.__hash || (b.__hash = a(b.name + b.size + b.lastModifiedDate));
                        return d[c] ? (this.trigger("error", "F_DUPLICATE", b), !1) : void 0
                    }), b.on("fileQueued",
                    function(a) {
                        var b = a.__hash;
                        b && (d[b] = !0)
                    }), b.on("fileDequeued",
                    function(a) {
                        var b = a.__hash;
                        b && delete d[b]
                    }), b.on("reset",
                    function() {
                        d = {}
                    }))
            }),
        d
    }),
b("runtime/compbase", [],
    function() {
        function a(a, b) {
            this.owner = a,
            this.options = a.options,
            this.getRuntime = function() {
                return b
            },
            this.getRuid = function() {
                return b.uid
            },
            this.trigger = function() {
                return a.trigger.apply(a, arguments)
            }
        }
        return a
    }),
b("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"],
    function(b, c, d) {
        function e() {
            var a = {},
            d = this,
            e = this.destory;
            c.apply(d, arguments),
            d.type = f,
            d.exec = function(c, e) {
                var f, h = this,
                i = h.uid,
                j = b.slice(arguments, 2);
                return g[c] && (f = a[i] = a[i] || new g[c](h, d), f[e]) ? f[e].apply(f, j) : void 0
            },
            d.destory = function() {
                return e && e.apply(this, arguments)
            }
        }
        var f = "html5",
        g = {};
        return b.inherits(c, {
            constructor: e,
            init: function() {
                var a = this;
                setTimeout(function() {
                    a.trigger("ready")
                },
                1)
            }
        }),
        e.register = function(a, c) {
            var e = g[a] = b.inherits(d, c);
            return e
        },
        a.Blob && a.FileReader && a.DataView && c.addRuntime(f, e),
        e
    }),
b("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"],
    function(a, b) {
        return a.register("Blob", {
            slice: function(a, c) {
                var d = this.owner.source,
                e = d.slice || d.webkitSlice || d.mozSlice;
                return d = e.call(d, a, c),
                new b(this.getRuid(), d)
            }
        })
    }),
b("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"],
    function(a, b, c) {
        var d = a.$,
        e = "webuploader-dnd-";
        return b.register("DragAndDrop", {
            init: function() {
                var b = this.elem = this.options.container;
                this.dragEnterHandler = a.bindFn(this._dragEnterHandler, this),
                this.dragOverHandler = a.bindFn(this._dragOverHandler, this),
                this.dragLeaveHandler = a.bindFn(this._dragLeaveHandler, this),
                this.dropHandler = a.bindFn(this._dropHandler, this),
                this.dndOver = !1,
                b.on("dragenter", this.dragEnterHandler),
                b.on("dragover", this.dragOverHandler),
                b.on("dragleave", this.dragLeaveHandler),
                b.on("drop", this.dropHandler),
                this.options.disableGlobalDnd && (d(document).on("dragover", this.dragOverHandler), d(document).on("drop", this.dropHandler))
            },
            _dragEnterHandler: function(a) {
                var b, c = this,
                d = c._denied || !1;
                return a = a.originalEvent || a,
                c.dndOver || (c.dndOver = !0, b = a.dataTransfer.items, b && b.length && (c._denied = d = !c.trigger("accept", b)), c.elem.addClass(e + "over"), c.elem[d ? "addClass": "removeClass"](e + "denied")),
                a.dataTransfer.dropEffect = d ? "none": "copy",
                !1
            },
            _dragOverHandler: function(a) {
                var b = this.elem.parent().get(0);
                return b && !d.contains(b, a.currentTarget) ? !1 : (clearTimeout(this._leaveTimer), this._dragEnterHandler.call(this, a), !1)
            },
            _dragLeaveHandler: function() {
                var a, b = this;
                return a = function() {
                    b.dndOver = !1,
                    b.elem.removeClass(e + "over " + e + "denied")
                },
                clearTimeout(b._leaveTimer),
                b._leaveTimer = setTimeout(a, 100),
                !1
            },
            _dropHandler: function(a) {
                var b, f, g = this,
                h = g.getRuid(),
                i = g.elem.parent().get(0);
                if (i && !d.contains(i, a.currentTarget)) return ! 1;
                a = a.originalEvent || a,
                b = a.dataTransfer;
                try {
                    f = b.getData("text/html")
                } catch(j) {}
                return f ? void 0 : (g._getTansferFiles(b,
                    function(a) {
                        g.trigger("drop", d.map(a,
                            function(a) {
                                return new c(h, a)
                            }))
                    }), g.dndOver = !1, g.elem.removeClass(e + "over"), !1)
            },
            _getTansferFiles: function(b, c) {
                var d, e, f, g, h, i, j, k = [],
                l = [];
                for (d = b.items, e = b.files, j = !(!d || !d[0].webkitGetAsEntry), h = 0, i = e.length; i > h; h++) f = e[h],
                    g = d && d[h],
                j && g.webkitGetAsEntry().isDirectory ? l.push(this._traverseDirectoryTree(g.webkitGetAsEntry(), k)) : k.push(f);
                a.when.apply(a, l).done(function() {
                    k.length && c(k)
                })
            },
            _traverseDirectoryTree: function(b, c) {
                var d = a.Deferred(),
                e = this;
                return b.isFile ? b.file(function(a) {
                    c.push(a),
                    d.resolve()
                }) : b.isDirectory && b.createReader().readEntries(function(b) {
                    var f, g = b.length,
                    h = [],
                    i = [];
                    for (f = 0; g > f; f++) h.push(e._traverseDirectoryTree(b[f], i));
                        a.when.apply(a, h).then(function() {
                            c.push.apply(c, i),
                            d.resolve()
                        },
                        d.reject)
                }),
                d.promise()
            },
            destroy: function() {
                var a = this.elem;
                a.off("dragenter", this.dragEnterHandler),
                a.off("dragover", this.dragEnterHandler),
                a.off("dragleave", this.dragLeaveHandler),
                a.off("drop", this.dropHandler),
                this.options.disableGlobalDnd && (d(document).off("dragover", this.dragOverHandler), d(document).off("drop", this.dropHandler))
            }
        })
}),
b("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"],
    function(a, b, c) {
        return b.register("FilePaste", {
            init: function() {
                var b, c, d, e, f = this.options,
                g = this.elem = f.container,
                h = ".*";
                if (f.accept) {
                    for (b = [], c = 0, d = f.accept.length; d > c; c++) e = f.accept[c].mimeTypes,
                        e && b.push(e);
                    b.length && (h = b.join(","), h = h.replace(/,/g, "|").replace(/\*/g, ".*"))
                }
                this.accept = h = new RegExp(h, "i"),
                this.hander = a.bindFn(this._pasteHander, this),
                g.on("paste", this.hander)
            },
            _pasteHander: function(a) {
                var b, d, e, f, g, h = [],
                i = this.getRuid();
                for (a = a.originalEvent || a, b = a.clipboardData.items, f = 0, g = b.length; g > f; f++) d = b[f],
                    "file" === d.kind && (e = d.getAsFile()) && h.push(new c(i, e));
                h.length && (a.preventDefault(), a.stopPropagation(), this.trigger("paste", h))
            },
            destroy: function() {
                this.elem.off("paste", this.hander)
            }
        })
    }),
b("runtime/html5/filepicker", ["base", "runtime/html5/runtime"],
    function(a, b) {
        var c = a.$;
        return b.register("FilePicker", {
            init: function() {
                var a, b, d, e, f = this.getRuntime().getContainer(),
                g = this,
                h = g.owner,
                i = g.options,
                j = c(document.createElement("label")),
                k = c(document.createElement("input"));
                if (k.attr("type", "file"), k.attr("name", i.name), k.addClass("webuploader-element-invisible"), j.on("click",
                    function() {
                        k.trigger("click")
                    }), j.css({
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                        cursor: "pointer",
                        background: "#ffffff"
                    }), i.multiple && k.attr("multiple", "multiple"), i.accept && i.accept.length > 0) {
                    for (a = [], b = 0, d = i.accept.length; d > b; b++) a.push(i.accept[b].mimeTypes);
                        k.attr("accept", a.join(","))
                }
                f.append(k),
                f.append(j),
                e = function(a) {
                    h.trigger(a.type)
                },
                k.on("change",
                    function(a) {
                        var b, d = arguments.callee;
                        g.files = a.target.files,
                        b = this.cloneNode(!0),
                        b.value = null,
                        this.parentNode.replaceChild(b, this),
                        k.off(),
                        k = c(b).on("change", d).on("mouseenter mouseleave", e),
                        h.trigger("change")
                    }),
                j.on("mouseenter mouseleave", e)
            },
            getFiles: function() {
                return this.files
            },
            destroy: function() {}
        })
    }),
b("runtime/html5/util", ["base"],
    function(b) {
        var c = a.createObjectURL && a || a.URL && URL.revokeObjectURL && URL || a.webkitURL,
        d = b.noop,
        e = d;
        return c && (d = function() {
            return c.createObjectURL.apply(c, arguments)
        },
        e = function() {
            return c.revokeObjectURL.apply(c, arguments)
        }),
        {
            createObjectURL: d,
            revokeObjectURL: e,
            dataURL2Blob: function(a) {
                var b, c, d, e, f, g;
                for (g = a.split(","), b = ~g[0].indexOf("base64") ? atob(g[1]) : decodeURIComponent(g[1]), d = new ArrayBuffer(b.length), c = new Uint8Array(d), e = 0; e < b.length; e++) c[e] = b.charCodeAt(e);
                    return f = g[0].split(":")[1].split(";")[0],
                this.arrayBufferToBlob(d, f)
            },
            dataURL2ArrayBuffer: function(a) {
                var b, c, d, e;
                for (e = a.split(","), b = ~e[0].indexOf("base64") ? atob(e[1]) : decodeURIComponent(e[1]), c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                    return c.buffer
            },
            arrayBufferToBlob: function(b, c) {
                var d, e = a.BlobBuilder || a.WebKitBlobBuilder;
                return e ? (d = new e, d.append(b), d.getBlob(c)) : new Blob([b], c ? {
                    type: c
                }: {})
            },
            canvasToDataUrl: function(a, b, c) {
                return a.toDataURL(b, c / 100)
            },
            parseMeta: function(a, b) {
                b(!1, {})
            },
            updateImageHead: function(a) {
                return a
            }
        }
    }),
b("runtime/html5/imagemeta", ["runtime/html5/util"],
    function(a) {
        var b;
        return b = {
            parsers: {
                65505 : []
            },
            maxMetaDataSize: 262144,
            parse: function(a, b) {
                var c = this,
                d = new FileReader;
                d.onload = function() {
                    b(!1, c._parse(this.result)),
                    d = d.onload = d.onerror = null
                },
                d.onerror = function(a) {
                    b(a.message),
                    d = d.onload = d.onerror = null
                },
                a = a.slice(0, c.maxMetaDataSize),
                d.readAsArrayBuffer(a.getSource())
            },
            _parse: function(a, c) {
                if (! (a.byteLength < 6)) {
                    var d, e, f, g, h = new DataView(a),
                    i = 2,
                    j = h.byteLength - 4,
                    k = i,
                    l = {};
                    if (65496 === h.getUint16(0)) {
                        for (; j > i && (d = h.getUint16(i), d >= 65504 && 65519 >= d || 65534 === d) && (e = h.getUint16(i + 2) + 2, !(i + e > h.byteLength));) {
                            if (f = b.parsers[d], !c && f) for (g = 0; g < f.length; g += 1) f[g].call(b, h, i, e, l);
                            i += e,
                            k = i
                        }
                        k > 6 && (l.imageHead = a.slice ? a.slice(2, k) : new Uint8Array(a).subarray(2, k))
                    }
                    return l
                }
            },
            updateImageHead: function(a, b) {
                var c, d, e, f = this._parse(a, !0);
                return e = 2,
                f.imageHead && (e = 2 + f.imageHead.byteLength),
                d = a.slice ? a.slice(e) : new Uint8Array(a).subarray(e),
                c = new Uint8Array(b.byteLength + 2 + d.byteLength),
                c[0] = 255,
                c[1] = 216,
                c.set(new Uint8Array(b), 2),
                c.set(new Uint8Array(d), b.byteLength + 2),
                c.buffer
            }
        },
        a.parseMeta = function() {
            return b.parse.apply(b, arguments)
        },
        a.updateImageHead = function() {
            return b.updateImageHead.apply(b, arguments)
        },
        b
    }),
b("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"],
    function(a, b) {
        var c = {};
        return c.ExifMap = function() {
            return this
        },
        c.ExifMap.prototype.map = {
            Orientation: 274
        },
        c.ExifMap.prototype.get = function(a) {
            return this[a] || this[this.map[a]]
        },
        c.exifTagTypes = {
            1 : {
                getValue: function(a, b) {
                    return a.getUint8(b)
                },
                size: 1
            },
            2 : {
                getValue: function(a, b) {
                    return String.fromCharCode(a.getUint8(b))
                },
                size: 1,
                ascii: !0
            },
            3 : {
                getValue: function(a, b, c) {
                    return a.getUint16(b, c)
                },
                size: 2
            },
            4 : {
                getValue: function(a, b, c) {
                    return a.getUint32(b, c)
                },
                size: 4
            },
            5 : {
                getValue: function(a, b, c) {
                    return a.getUint32(b, c) / a.getUint32(b + 4, c)
                },
                size: 8
            },
            9 : {
                getValue: function(a, b, c) {
                    return a.getInt32(b, c)
                },
                size: 4
            },
            10 : {
                getValue: function(a, b, c) {
                    return a.getInt32(b, c) / a.getInt32(b + 4, c)
                },
                size: 8
            }
        },
        c.exifTagTypes[7] = c.exifTagTypes[1],
        c.getExifValue = function(b, d, e, f, g, h) {
            var i, j, k, l, m, n, o = c.exifTagTypes[f];
            if (!o) return void a.log("Invalid Exif data: Invalid tag type.");
            if (i = o.size * g, j = i > 4 ? d + b.getUint32(e + 8, h) : e + 8, j + i > b.byteLength) return void a.log("Invalid Exif data: Invalid data offset.");
            if (1 === g) return o.getValue(b, j, h);
            for (k = [], l = 0; g > l; l += 1) k[l] = o.getValue(b, j + l * o.size, h);
                if (o.ascii) {
                    for (m = "", l = 0; l < k.length && (n = k[l], "\x00" !== n); l += 1) m += n;
                        return m
                }
                return k
            },
            c.parseExifTag = function(a, b, d, e, f) {
                var g = a.getUint16(d, e);
                f.exif[g] = c.getExifValue(a, b, d, a.getUint16(d + 2, e), a.getUint32(d + 4, e), e)
            },
            c.parseExifTags = function(b, c, d, e, f) {
                var g, h, i;
                if (d + 6 > b.byteLength) return void a.log("Invalid Exif data: Invalid directory offset.");
                if (g = b.getUint16(d, e), h = d + 2 + 12 * g, h + 4 > b.byteLength) return void a.log("Invalid Exif data: Invalid directory size.");
                for (i = 0; g > i; i += 1) this.parseExifTag(b, c, d + 2 + 12 * i, e, f);
                    return b.getUint32(h, e)
            },
            c.parseExifData = function(b, d, e, f) {
                var g, h, i = d + 10;
                if (1165519206 === b.getUint32(d + 4)) {
                    if (i + 8 > b.byteLength) return void a.log("Invalid Exif data: Invalid segment size.");
                    if (0 !== b.getUint16(d + 8)) return void a.log("Invalid Exif data: Missing byte alignment offset.");
                    switch (b.getUint16(i)) {
                        case 18761:
                        g = !0;
                        break;
                        case 19789:
                        g = !1;
                        break;
                        default:
                        return void a.log("Invalid Exif data: Invalid byte alignment marker.")
                    }
                    if (42 !== b.getUint16(i + 2, g)) return void a.log("Invalid Exif data: Missing TIFF marker.");
                    h = b.getUint32(i + 4, g),
                    f.exif = new c.ExifMap,
                    h = c.parseExifTags(b, i, i + h, g, f)
                }
            },
            b.parsers[65505].push(c.parseExifData),
            c
        }),
b("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"],
    function(a, b, c) {
        var d = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        return b.register("Image", {
            modified: !1,
            init: function() {
                var a = this,
                b = new Image;
                b.onload = function() {
                    a._info = {
                        type: a.type,
                        width: this.width,
                        height: this.height
                    },
                    a._metas || "image/jpeg" !== a.type ? a.owner.trigger("load") : c.parseMeta(a._blob,
                        function(b, c) {
                            a._metas = c,
                            a.owner.trigger("load")
                        })
                },
                b.onerror = function() {
                    a.owner.trigger("error")
                },
                a._img = b
            },
            loadFromBlob: function(a) {
                var b = this,
                d = b._img;
                b._blob = a,
                b.type = a.type,
                d.src = c.createObjectURL(a.getSource()),
                b.owner.once("load",
                    function() {
                        c.revokeObjectURL(d.src)
                    })
            },
            resize: function(a, b) {
                var c = this._canvas || (this._canvas = document.createElement("canvas"));
                this._resize(this._img, c, a, b),
                this._blob = null,
                this.modified = !0,
                this.owner.trigger("complete", "resize")
            },
            crop: function(a, b, c, d, e) {
                var f = this._canvas || (this._canvas = document.createElement("canvas")),
                g = this.options,
                h = this._img,
                i = h.naturalWidth,
                j = h.naturalHeight,
                k = this.getOrientation();
                e = e || 1,
                f.width = c,
                f.height = d,
                g.preserveHeaders || this._rotate2Orientaion(f, k),
                this._renderImageToCanvas(f, h, -a, -b, i * e, j * e),
                this._blob = null,
                this.modified = !0,
                this.owner.trigger("complete", "crop")
            },
            getAsBlob: function(a) {
                var b, d = this._blob,
                e = this.options;
                if (a = a || this.type, this.modified || this.type !== a) {
                    if (b = this._canvas, "image/jpeg" === a) {
                        if (d = c.canvasToDataUrl(b, a, e.quality), e.preserveHeaders && this._metas && this._metas.imageHead) return d = c.dataURL2ArrayBuffer(d),
                            d = c.updateImageHead(d, this._metas.imageHead),
                        d = c.arrayBufferToBlob(d, a)
                    } else d = c.canvasToDataUrl(b, a);
                    d = c.dataURL2Blob(d)
                }
                return d
            },
            getAsDataUrl: function(a) {
                var b = this.options;
                return a = a || this.type,
                "image/jpeg" === a ? c.canvasToDataUrl(this._canvas, a, b.quality) : this._canvas.toDataURL(a)
            },
            getOrientation: function() {
                return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
            },
            info: function(a) {
                return a ? (this._info = a, this) : this._info
            },
            meta: function(a) {
                return a ? (this._meta = a, this) : this._meta
            },
            destroy: function() {
                var a = this._canvas;
                this._img.onload = null,
                a && (a.getContext("2d").clearRect(0, 0, a.width, a.height), a.width = a.height = 0, this._canvas = null),
                this._img.src = d,
                this._img = this._blob = null
            },
            _resize: function(a, b, c, d) {
                var e, f, g, h, i, j = this.options,
                k = a.width,
                l = a.height,
                m = this.getOrientation();~ [5, 6, 7, 8].indexOf(m) && (c ^= d, d ^= c, c ^= d),
                e = Math[j.crop ? "max": "min"](c / k, d / l),
                j.allowMagnify || (e = Math.min(1, e)),
                f = k * e,
                g = l * e,
                j.crop ? (b.width = c, b.height = d) : (b.width = f, b.height = g),
                h = (b.width - f) / 2,
                i = (b.height - g) / 2,
                j.preserveHeaders || this._rotate2Orientaion(b, m),
                this._renderImageToCanvas(b, a, h, i, f, g)
            },
            _rotate2Orientaion: function(a, b) {
                var c = a.width,
                d = a.height,
                e = a.getContext("2d");
                switch (b) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    a.width = d,
                    a.height = c
                }
                switch (b) {
                    case 2:
                    e.translate(c, 0),
                    e.scale( - 1, 1);
                    break;
                    case 3:
                    e.translate(c, d),
                    e.rotate(Math.PI);
                    break;
                    case 4:
                    e.translate(0, d),
                    e.scale(1, -1);
                    break;
                    case 5:
                    e.rotate(.5 * Math.PI),
                    e.scale(1, -1);
                    break;
                    case 6:
                    e.rotate(.5 * Math.PI),
                    e.translate(0, -d);
                    break;
                    case 7:
                    e.rotate(.5 * Math.PI),
                    e.translate(c, -d),
                    e.scale( - 1, 1);
                    break;
                    case 8:
                    e.rotate( - .5 * Math.PI),
                    e.translate( - c, 0)
                }
            },
            _renderImageToCanvas: function() {
                function b(a, b, c) {
                    var d, e, f, g = document.createElement("canvas"),
                    h = g.getContext("2d"),
                    i = 0,
                    j = c,
                    k = c;
                    for (g.width = 1, g.height = c, h.drawImage(a, 0, 0), d = h.getImageData(0, 0, 1, c).data; k > i;) e = d[4 * (k - 1) + 3],
                        0 === e ? j = k: i = k,
                    k = j + i >> 1;
                    return f = k / c,
                    0 === f ? 1 : f
                }
                function c(a) {
                    var b, c, d = a.naturalWidth,
                    e = a.naturalHeight;
                    return d * e > 1048576 ? (b = document.createElement("canvas"), b.width = b.height = 1, c = b.getContext("2d"), c.drawImage(a, -d + 1, 0), 0 === c.getImageData(0, 0, 1, 1).data[3]) : !1
                }
                return a.os.ios ? a.os.ios >= 7 ?
                function(a, c, d, e, f, g) {
                    var h = c.naturalWidth,
                    i = c.naturalHeight,
                    j = b(c, h, i);
                    return a.getContext("2d").drawImage(c, 0, 0, h * j, i * j, d, e, f, g)
                }: function(a, d, e, f, g, h) {
                    var i, j, k, l, m, n, o, p = d.naturalWidth,
                    q = d.naturalHeight,
                    r = a.getContext("2d"),
                    s = c(d),
                    t = "image/jpeg" === this.type,
                    u = 1024,
                    v = 0,
                    w = 0;
                    for (s && (p /= 2, q /= 2), r.save(), i = document.createElement("canvas"), i.width = i.height = u, j = i.getContext("2d"), k = t ? b(d, p, q) : 1, l = Math.ceil(u * g / p), m = Math.ceil(u * h / q / k); q > v;) {
                        for (n = 0, o = 0; p > n;) j.clearRect(0, 0, u, u),
                            j.drawImage(d, -n, -v),
                        r.drawImage(i, 0, 0, u, u, e + o, f + w, l, m),
                        n += u,
                        o += l;
                        v += u,
                        w += m
                    }
                    r.restore(),
                    i = j = null
                }: function(b) {
                    var c = a.slice(arguments, 1),
                    d = b.getContext("2d");
                    d.drawImage.apply(d, c)
                }
            } ()
        })
}),
b("runtime/html5/transport", ["base", "runtime/html5/runtime"],
    function(a, b) {
        var c = a.noop,
        d = a.$;
        return b.register("Transport", {
            init: function() {
                this._status = 0,
                this._response = null
            },
            send: function() {
                var b, c, e, f = this.owner,
                g = this.options,
                h = this._initAjax(),
                i = f._blob,
                j = g.server;
                g.sendAsBinary ? (j += (/\?/.test(j) ? "&": "?") + d.param(f._formData), c = i.getSource()) : (b = new FormData, d.each(f._formData,
                    function(a, c) {
                        b.append(a, c)
                    }), b.append(g.fileVal, i.getSource(), g.filename || f._formData.name || "")),
                g.withCredentials && "withCredentials" in h ? (h.open(g.method, j, !0), h.withCredentials = !0) : h.open(g.method, j),
                this._setRequestHeader(h, g.headers),
                c ? (h.overrideMimeType("application/octet-stream"), a.os.android ? (e = new FileReader, e.onload = function() {
                    h.send(this.result),
                    e = e.onload = null
                },
                e.readAsArrayBuffer(c)) : h.send(c)) : h.send(b)
            },
            getResponse: function() {
                return this._response
            },
            getResponseAsJson: function() {
                return this._parseJson(this._response)
            },
            getStatus: function() {
                return this._status
            },
            abort: function() {
                var a = this._xhr;
                a && (a.upload.onprogress = c, a.onreadystatechange = c, a.abort(), this._xhr = a = null)
            },
            destroy: function() {
                this.abort()
            },
            _initAjax: function() {
                var a = this,
                b = new XMLHttpRequest,
                d = this.options;
                return ! d.withCredentials || "withCredentials" in b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest),
                b.upload.onprogress = function(b) {
                    var c = 0;
                    return b.lengthComputable && (c = b.loaded / b.total),
                    a.trigger("progress", c)
                },
                b.onreadystatechange = function() {
                    return 4 === b.readyState ? (b.upload.onprogress = c, b.onreadystatechange = c, a._xhr = null, a._status = b.status, b.status >= 200 && b.status < 300 ? (a._response = b.responseText, a.trigger("load")) : b.status >= 500 && b.status < 600 ? (a._response = b.responseText, a.trigger("error", "server")) : a.trigger("error", a._status ? "http": "abort")) : void 0
                },
                a._xhr = b,
                b
            },
            _setRequestHeader: function(a, b) {
                d.each(b,
                    function(b, c) {
                        a.setRequestHeader(b, c)
                    })
            },
            _parseJson: function(a) {
                var b;
                try {
                    b = JSON.parse(a)
                } catch(c) {
                    b = {}
                }
                return b
            }
        })
    }),
b("preset/html5only", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/image", "runtime/html5/transport"],
    function(a) {
        return a
    }),
b("webuploader", ["preset/html5only"],
    function(a) {
        return a
    }),
c("webuploader")
});