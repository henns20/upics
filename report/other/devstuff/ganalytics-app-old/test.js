/**
 * Created by john on 11/24/15.
 */
(function () {
  var h, k = this;

  function l(a) {
    return void 0 !== a
  }

  function aa(a) {
    var b = typeof a;
    if ("object" == b)if (a) {
      if (a instanceof Array)return"array";
      if (a instanceof Object)return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c)return"object";
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return"array";
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return"function"
    } else return"null";
    else if ("function" == b && "undefined" == typeof a.call)return"object";
    return b
  }

  function p(a) {
    return"array" == aa(a)
  }

  function ba(a) {
    var b = aa(a);
    return"array" == b || "object" == b && "number" == typeof a.length
  }

  function q(a) {
    return"string" == typeof a
  }

  function r(a) {
    return"number" == typeof a
  }

  function ca(a) {
    return"function" == aa(a)
  }

  function da(a) {
    var b = typeof a;
    return"object" == b && null != a || "function" == b
  }

  function ea(a) {
    return a[fa] || (a[fa] = ++ha)
  }

  var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;

  function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function ja(a, b, c) {
    if (!a)throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }

  function t(a, b, c) {
    t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return t.apply(null, arguments)
  }

  var ka = Date.now || function () {
    return+new Date
  };

  function la(a, b) {
    var c = a.split("."), d = k;
    c[0]in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)!c.length && l(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
  }

  function u(a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.base = function (a, c, f) {
      for (var g = Array(arguments.length - 2), n = 2; n < arguments.length; n++)g[n - 2] = arguments[n];
      return b.prototype[c].apply(a, g)
    }
  };
  var ma;
  var na = String.prototype.trim ? function (a) {
    return a.trim()
  } : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
  };

  function oa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  }

  function pa(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase()
    })
  }

  function qa(a) {
    var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
      return b + e.toUpperCase()
    })
  };
  var ra = Array.prototype.indexOf ? function (a, b, c) {
    return Array.prototype.indexOf.call(a, b, c)
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (q(a))return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return-1
  }, v = Array.prototype.forEach ? function (a, b, c) {
    Array.prototype.forEach.call(a, b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
  }, sa = Array.prototype.filter ? function (a, b, c) {
    return Array.prototype.filter.call(a,
      b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, n = 0; n < d; n++)if (n in g) {
      var m = g[n];
      b.call(c, m, n, a) && (e[f++] = m)
    }
    return e
  }, ta = Array.prototype.reduce ? function (a, b, c, d) {
    d && (b = t(b, d));
    return Array.prototype.reduce.call(a, b, c)
  } : function (a, b, c, d) {
    var e = c;
    v(a, function (c, g) {
      e = b.call(d, e, c, g, a)
    });
    return e
  };

  function ua(a, b) {
    return 0 <= ra(a, b)
  }

  function va(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
  }

  function xa(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
      return c
    }
    return[]
  }

  function ya(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
  };
  var w;
  a:{
    var za = k.navigator;
    if (za) {
      var Aa = za.userAgent;
      if (Aa) {
        w = Aa;
        break a
      }
    }
    w = ""
  }
  function x(a) {
    return-1 != w.indexOf(a)
  };
  function Ba(a, b, c) {
    for (var d in a)b.call(c, a[d], d, a)
  }

  function Ca(a, b) {
    for (var c in a)if (b.call(void 0, a[c], c, a))return!0;
    return!1
  }

  function Da(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
  }

  function Ea(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = d;
    return b
  }

  function Fa() {
    var a = y, b;
    for (b in a)return!1;
    return!0
  }

  var Ga = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function Ha(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)a[c] = d[c];
      for (var f = 0; f < Ga.length; f++)c = Ga[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  };
  var Ia = x("Opera") || x("OPR"), z = x("Trident") || x("MSIE"), Ja = x("Edge"), A = x("Gecko") && !(-1 != w.toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"), B = -1 != w.toLowerCase().indexOf("webkit") && !x("Edge"), Ka = B && x("Mobile"), La = x("Android"), Ma = x("iPad");

  function Na() {
    var a = w;
    if (A)return/rv\:([^\);]+)(\)|;)/.exec(a);
    if (Ja)return/Edge\/([\d\.]+)/.exec(a);
    if (z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (B)return/WebKit\/(\S+)/.exec(a)
  }

  function Oa() {
    var a = k.document;
    return a ? a.documentMode : void 0
  }

  var Pa = function () {
    if (Ia && k.opera) {
      var a;
      var b = k.opera.version;
      try {
        a = b()
      } catch (c) {
        a = b
      }
      return a
    }
    a = "";
    (b = Na()) && (a = b ? b[1] : "");
    return z && (b = Oa(), b > parseFloat(a)) ? String(b) : a
  }(), Qa = {};

  function C(a) {
    var b;
    if (!(b = Qa[a])) {
      b = 0;
      for (var c = na(String(Pa)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "", n = d[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), wa = RegExp("(\\d*)(\\D*)", "g");
        do {
          var W = m.exec(g) || ["", "", ""], X = wa.exec(n) || ["", "", ""];
          if (0 == W[0].length && 0 == X[0].length)break;
          b = oa(0 == W[1].length ? 0 : parseInt(W[1], 10), 0 == X[1].length ? 0 : parseInt(X[1], 10)) || oa(0 == W[2].length, 0 == X[2].length) || oa(W[2], X[2])
        } while (0 == b)
      }
      b = Qa[a] = 0 <= b
    }
    return b
  }

  var Ra = k.document, Sa = Ra && z ? Oa() || ("CSS1Compat" == Ra.compatMode ? parseInt(Pa, 10) : 5) : void 0;
  !A && !z || z && 9 <= Sa || A && C("1.9.1");
  z && C("9");
  function D(a, b) {
    this.x = l(a) ? a : 0;
    this.y = l(b) ? b : 0
  }

  h = D.prototype;
  h.clone = function () {
    return new D(this.x, this.y)
  };
  h.toString = function () {
    return"(" + this.x + ", " + this.y + ")"
  };
  h.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  };
  h.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  };
  h.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  };
  h.translate = function (a, b) {
    a instanceof D ? (this.x += a.x, this.y += a.y) : (this.x += a, r(b) && (this.y += b));
    return this
  };
  h.scale = function (a, b) {
    var c = r(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
  };
  function E(a, b) {
    this.width = a;
    this.height = b
  }

  h = E.prototype;
  h.clone = function () {
    return new E(this.width, this.height)
  };
  h.toString = function () {
    return"(" + this.width + " x " + this.height + ")"
  };
  h.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  h.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  h.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  h.scale = function (a, b) {
    var c = r(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
  };
  function Ta(a) {
    return a ? new F(Ua(a)) : ma || (ma = new F)
  }

  function Va(a) {
    var b = document;
    return q(a) ? b.getElementById(a) : a
  }

  function G(a) {
    var b = document;
    return b.querySelectorAll && b.querySelector ? b.querySelectorAll("." + a) : Wa("*", a, void 0)
  }

  function Wa(a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b))return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
      c = c.getElementsByClassName(b);
      if (a) {
        for (var d = {}, e = 0, f = 0, g; g = c[f]; f++)a == g.nodeName && (d[e++] = g);
        d.length = e;
        return d
      }
      return c
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
      d = {};
      for (f = e = 0; g = c[f]; f++)a = g.className, "function" == typeof a.split && ua(a.split(/\s+/), b) && (d[e++] = g);
      d.length = e;
      return d
    }
    return c
  }

  function Xa(a) {
    a = a.document;
    a = Ya(a) ? a.documentElement : a.body;
    return new E(a.clientWidth, a.clientHeight)
  }

  function Za(a) {
    var b = a.scrollingElement ? a.scrollingElement : !B && Ya(a) ? a.documentElement : a.body || a.documentElement;
    a = a.parentWindow || a.defaultView;
    return z && C("10") && a.pageYOffset != b.scrollTop ? new D(b.scrollLeft, b.scrollTop) : new D(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
  }

  function $a(a, b, c) {
    function d(c) {
      c && b.appendChild(q(c) ? a.createTextNode(c) : c)
    }

    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      !ba(f) || da(f) && 0 < f.nodeType ? d(f) : v(ab(f) ? xa(f) : f, d)
    }
  }

  function Ya(a) {
    return"CSS1Compat" == a.compatMode
  }

  function Ua(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }

  function ab(a) {
    if (a && "number" == typeof a.length) {
      if (da(a))return"function" == typeof a.item || "string" == typeof a.item;
      if (ca(a))return"function" == typeof a.item
    }
    return!1
  }

  function bb(a) {
    return cb(a, function (a) {
      return"A" == a.nodeName && q(a.className) && ua(a.className.split(/\s+/), "gweb-smoothscroll-control")
    })
  }

  function cb(a, b) {
    for (var c = 0; a;) {
      if (b(a))return a;
      a = a.parentNode;
      c++
    }
    return null
  }

  function F(a) {
    this.document_ = a || k.document || document
  }

  h = F.prototype;
  h.createElement = function (a) {
    return this.document_.createElement(a)
  };
  h.createTextNode = function (a) {
    return this.document_.createTextNode(String(a))
  };
  h.appendChild = function (a, b) {
    a.appendChild(b)
  };
  h.append = function (a, b) {
    $a(Ua(a), a, arguments)
  };
  h.canHaveChildren = function (a) {
    if (1 != a.nodeType)return!1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return!1
    }
    return!0
  };
  h.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  };
  h.isElement = function (a) {
    return da(a) && 1 == a.nodeType
  };
  h.contains = function (a, b) {
    if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)b = b.parentNode;
    return b == a
  };
  function db(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  }

  h = db.prototype;
  h.clone = function () {
    return new db(this.top, this.right, this.bottom, this.left)
  };
  h.toString = function () {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  };
  h.contains = function (a) {
    return this && a ? a instanceof db ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
  };
  h.expand = function (a, b, c, d) {
    da(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
  };
  h.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  h.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  h.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  h.translate = function (a, b) {
    a instanceof D ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, r(b) && (this.top += b, this.bottom += b));
    return this
  };
  h.scale = function (a, b) {
    var c = r(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
  };
  function H(a, b, c) {
    if (q(b))(b = eb(a, b)) && (a.style[b] = c); else for (var d in b) {
      c = a;
      var e = b[d], f = eb(c, d);
      f && (c.style[f] = e)
    }
  }

  var fb = {};

  function eb(a, b) {
    var c = fb[b];
    if (!c) {
      var d = pa(b), c = d;
      void 0 === a.style[d] && (d = (B ? "Webkit" : A ? "Moz" : z ? "ms" : Ia ? "O" : null) + qa(d), void 0 !== a.style[d] && (c = d));
      fb[b] = c
    }
    return c
  }

  function gb(a) {
    var b = a.style[pa("transition")];
    return"undefined" !== typeof b ? b : a.style[eb(a, "transition")] || ""
  }

  function hb(a) {
    var b;
    try {
      b = a.getBoundingClientRect()
    } catch (c) {
      return{left: 0, top: 0, right: 0, bottom: 0}
    }
    z && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
  }

  function ib(a) {
    var b = jb, c;
    a:{
      c = Ua(a);
      if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
        c = c.display || c.getPropertyValue("display") || "";
        break a
      }
      c = ""
    }
    if ("none" != (c || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display))return b(a);
    c = a.style;
    var d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
  }

  function jb(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = B && !b && !c;
    return l(b) && !d || !a.getBoundingClientRect ? new E(b, c) : (a = hb(a), new E(a.right - a.left, a.bottom - a.top))
  };
  function I() {
    0 != kb && (lb[ea(this)] = this);
    this.disposed_ = this.disposed_;
    this.onDisposeCallbacks_ = this.onDisposeCallbacks_
  }

  var kb = 0, lb = {};
  I.prototype.disposed_ = !1;
  function mb(a) {
    a.disposed_ || (a.disposed_ = !0, a.disposeInternal(), 0 != kb && (a = ea(a), delete lb[a]))
  }

  I.prototype.disposeInternal = function () {
    if (this.onDisposeCallbacks_)for (; this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()
  };
  function J(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.propagationStopped_ = !1;
    this.returnValue_ = !0
  }

  J.prototype.stopPropagation = function () {
    this.propagationStopped_ = !0
  };
  J.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.returnValue_ = !1
  };
  var nb = !z || 9 <= Sa, ob = z && !C("9");
  !B || C("528");
  A && C("1.9b") || z && C("8") || Ia && C("9.5") || B && C("528");
  A && !C("8") || z && C("9");
  function pb(a) {
    pb[" "](a);
    return a
  }

  pb[" "] = function () {
  };
  function K(a, b) {
    J.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.event_ = this.state = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      var e = a.relatedTarget;
      if (e) {
        if (A) {
          var f;
          a:{
            try {
              pb(e.nodeName);
              f = !0;
              break a
            } catch (g) {
            }
            f = !1
          }
          f || (e = null)
        }
      } else"mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
      this.relatedTarget = e;
      null === d ? (this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0);
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.state = a.state;
      this.event_ = a;
      a.defaultPrevented && this.preventDefault()
    }
  }

  u(K, J);
  K.prototype.stopPropagation = function () {
    K.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
  };
  K.prototype.preventDefault = function () {
    K.superClass_.preventDefault.call(this);
    var a = this.event_;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, ob)try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (b) {
    }
  };
  var qb = "closure_listenable_" + (1E6 * Math.random() | 0), rb = 0;

  function sb(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.handler = e;
    this.key = ++rb;
    this.removed = this.callOnce = !1
  }

  function tb(a) {
    a.removed = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.handler = null
  };
  function ub(a) {
    this.src = a;
    this.listeners = {};
    this.typeCount_ = 0
  }

  h = ub.prototype;
  h.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.listeners[f];
    a || (a = this.listeners[f] = [], this.typeCount_++);
    var g = vb(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.callOnce = !1)) : (b = new sb(b, this.src, f, !!d, e), b.callOnce = c, a.push(b));
    return b
  };
  h.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.listeners))return!1;
    var e = this.listeners[a];
    b = vb(e, b, c, d);
    return-1 < b ? (tb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.typeCount_--), !0) : !1
  };
  function wb(a, b) {
    var c = b.type;
    if (c in a.listeners) {
      var d = a.listeners[c], e = ra(d, b), f;
      (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f && (tb(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.typeCount_--))
    }
  }

  h.removeAll = function (a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.listeners)if (!a || c == a) {
      for (var d = this.listeners[c], e = 0; e < d.length; e++)++b, tb(d[e]);
      delete this.listeners[c];
      this.typeCount_--
    }
    return b
  };
  h.getListener = function (a, b, c, d) {
    a = this.listeners[a.toString()];
    var e = -1;
    a && (e = vb(a, b, c, d));
    return-1 < e ? a[e] : null
  };
  h.hasListener = function (a, b) {
    var c = l(a), d = c ? a.toString() : "", e = l(b);
    return Ca(this.listeners, function (a) {
      for (var g = 0; g < a.length; ++g)if (!(c && a[g].type != d || e && a[g].capture != b))return!0;
      return!1
    })
  };
  function vb(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.handler == d)return e
    }
    return-1
  };
  var xb = "closure_lm_" + (1E6 * Math.random() | 0), yb = {}, zb = 0;

  function L(a, b, c, d, e) {
    if (p(b)) {
      for (var f = 0; f < b.length; f++)L(a, b[f], c, d, e);
      return null
    }
    c = Ab(c);
    if (a && a[qb])a = a.listen(b, c, d, e); else {
      if (!b)throw Error("Invalid event type");
      var f = !!d, g = Bb(a);
      g || (a[xb] = g = new ub(a));
      c = g.add(b, c, !1, d, e);
      if (!c.proxy) {
        d = Cb();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)a.addEventListener(b.toString(), d, f); else if (a.attachEvent)a.attachEvent(Db(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
        zb++
      }
      a = c
    }
    return a
  }

  function Cb() {
    var a = Eb, b = nb ? function (c) {
      return a.call(b.src, b.listener, c)
    } : function (c) {
      c = a.call(b.src, b.listener, c);
      if (!c)return c
    };
    return b
  }

  function Fb(a, b, c, d, e) {
    if (p(b))for (var f = 0; f < b.length; f++)Fb(a, b[f], c, d, e); else c = Ab(c), a && a[qb] ? a.unlisten(b, c, d, e) : a && (a = Bb(a)) && (b = a.getListener(b, c, !!d, e)) && Gb(b)
  }

  function Gb(a) {
    if (!r(a) && a && !a.removed) {
      var b = a.src;
      if (b && b[qb])wb(b.eventTargetListeners_, a); else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Db(c), d);
        zb--;
        (c = Bb(b)) ? (wb(c, a), 0 == c.typeCount_ && (c.src = null, b[xb] = null)) : tb(a)
      }
    }
  }

  function Db(a) {
    return a in yb ? yb[a] : yb[a] = "on" + a
  }

  function Hb(a, b, c, d) {
    var e = !0;
    if (a = Bb(a))if (b = a.listeners[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
      var f = b[a];
      f && f.capture == c && !f.removed && (f = Ib(f, d), e = e && !1 !== f)
    }
    return e
  }

  function Ib(a, b) {
    var c = a.listener, d = a.handler || a.src;
    a.callOnce && Gb(a);
    return c.call(d, b)
  }

  function Eb(a, b) {
    if (a.removed)return!0;
    if (!nb) {
      var c;
      if (!(c = b))a:{
        c = ["window", "event"];
        for (var d = k, e; e = c.shift();)if (null != d[e])d = d[e]; else {
          c = null;
          break a
        }
        c = d
      }
      e = c;
      c = new K(e, this);
      d = !0;
      if (!(0 > e.keyCode || void 0 != e.returnValue)) {
        a:{
          var f = !1;
          if (0 == e.keyCode)try {
            e.keyCode = -1;
            break a
          } catch (m) {
            f = !0
          }
          if (f || void 0 == e.returnValue)e.returnValue = !0
        }
        e = [];
        for (f = c.currentTarget; f; f = f.parentNode)e.push(f);
        for (var f = a.type, g = e.length - 1; !c.propagationStopped_ && 0 <= g; g--) {
          c.currentTarget = e[g];
          var n = Hb(e[g], f, !0, c), d =
            d && n
        }
        for (g = 0; !c.propagationStopped_ && g < e.length; g++)c.currentTarget = e[g], n = Hb(e[g], f, !1, c), d = d && n
      }
      return d
    }
    return Ib(a, new K(b, this))
  }

  function Bb(a) {
    a = a[xb];
    return a instanceof ub ? a : null
  }

  var Jb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

  function Ab(a) {
    if (ca(a))return a;
    a[Jb] || (a[Jb] = function (b) {
      return a.handleEvent(b)
    });
    return a[Jb]
  };
  function Kb(a) {
    I.call(this);
    this.handler_ = a;
    this.keys_ = {}
  }

  u(Kb, I);
  var Lb = [];
  h = Kb.prototype;
  h.listen = function (a, b, c, d) {
    p(b) || (b && (Lb[0] = b.toString()), b = Lb);
    for (var e = 0; e < b.length; e++) {
      var f = L(a, b[e], c || this.handleEvent, d || !1, this.handler_ || this);
      if (!f)break;
      this.keys_[f.key] = f
    }
    return this
  };
  h.unlisten = function (a, b, c, d, e) {
    if (p(b))for (var f = 0; f < b.length; f++)this.unlisten(a, b[f], c, d, e); else c = c || this.handleEvent, e = e || this.handler_ || this, c = Ab(c), d = !!d, b = a && a[qb] ? a.getListener(b, c, d, e) : a ? (a = Bb(a)) ? a.getListener(b, c, d, e) : null : null, b && (Gb(b), delete this.keys_[b.key]);
    return this
  };
  h.removeAll = function () {
    Ba(this.keys_, function (a, b) {
      this.keys_.hasOwnProperty(b) && Gb(a)
    }, this);
    this.keys_ = {}
  };
  h.disposeInternal = function () {
    Kb.superClass_.disposeInternal.call(this);
    this.removeAll()
  };
  h.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function M() {
    I.call(this);
    this.eventTargetListeners_ = new ub(this);
    this.actualEventTarget_ = this;
    this.parentEventTarget_ = null
  }

  u(M, I);
  M.prototype[qb] = !0;
  h = M.prototype;
  h.addEventListener = function (a, b, c, d) {
    L(this, a, b, c, d)
  };
  h.removeEventListener = function (a, b, c, d) {
    Fb(this, a, b, c, d)
  };
  h.dispatchEvent = function (a) {
    var b, c = this.parentEventTarget_;
    if (c)for (b = []; c; c = c.parentEventTarget_)b.push(c);
    var c = this.actualEventTarget_, d = a.type || a;
    if (q(a))a = new J(a, c); else if (a instanceof J)a.target = a.target || c; else {
      var e = a;
      a = new J(d, c);
      Ha(a, e)
    }
    var e = !0, f;
    if (b)for (var g = b.length - 1; !a.propagationStopped_ && 0 <= g; g--)f = a.currentTarget = b[g], e = Mb(f, d, !0, a) && e;
    a.propagationStopped_ || (f = a.currentTarget = c, e = Mb(f, d, !0, a) && e, a.propagationStopped_ || (e = Mb(f, d, !1, a) && e));
    if (b)for (g = 0; !a.propagationStopped_ &&
      g < b.length; g++)f = a.currentTarget = b[g], e = Mb(f, d, !1, a) && e;
    return e
  };
  h.disposeInternal = function () {
    M.superClass_.disposeInternal.call(this);
    this.eventTargetListeners_ && this.eventTargetListeners_.removeAll(void 0);
    this.parentEventTarget_ = null
  };
  h.listen = function (a, b, c, d) {
    return this.eventTargetListeners_.add(String(a), b, !1, c, d)
  };
  h.unlisten = function (a, b, c, d) {
    return this.eventTargetListeners_.remove(String(a), b, c, d)
  };
  function Mb(a, b, c, d) {
    b = a.eventTargetListeners_.listeners[String(b)];
    if (!b)return!0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var n = g.listener, m = g.handler || g.src;
        g.callOnce && wb(a.eventTargetListeners_, g);
        e = !1 !== n.call(m, d) && e
      }
    }
    return e && 0 != d.returnValue_
  }

  h.getListener = function (a, b, c, d) {
    return this.eventTargetListeners_.getListener(String(a), b, c, d)
  };
  h.hasListener = function (a, b) {
    return this.eventTargetListeners_.hasListener(l(a) ? String(a) : void 0, b)
  };
  function Nb(a, b) {
    null != a && this.append.apply(this, arguments)
  }

  h = Nb.prototype;
  h.buffer_ = "";
  h.set = function (a) {
    this.buffer_ = "" + a
  };
  h.append = function (a, b, c) {
    this.buffer_ += a;
    if (null != b)for (var d = 1; d < arguments.length; d++)this.buffer_ += arguments[d];
    return this
  };
  h.clear = function () {
    this.buffer_ = ""
  };
  h.toString = function () {
    return this.buffer_
  };
  /*
   Portions of this code are from the google-caja project, received by
   Google under the Apache license (http://code.google.com/p/google-caja/).
   All other code is Copyright 2009 Google, Inc. All Rights Reserved.

   // Copyright (C) 2006 Google Inc.
   //
   // Licensed under the Apache License, Version 2.0 (the "License");
   // you may not use this file except in compliance with the License.
   // You may obtain a copy of the License at
   //
   //      http://www.apache.org/licenses/LICENSE-2.0
   //
   // Unless required by applicable law or agreed to in writing, software
   // distributed under the License is distributed on an "AS IS" BASIS,
   // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   // See the License for the specific language governing permissions and
   // limitations under the License.

   */
  function Ob() {
  }

  var Pb = {lt: "<", gt: ">", amp: "&", nbsp: "\u00a0", quot: '"', apos: "'"}, N = {a: 0, abbr: 0, acronym: 0, address: 0, applet: 16, area: 2, b: 0, base: 18, basefont: 18, bdo: 0, big: 0, blockquote: 0, body: 49, br: 2, button: 0, canvas: 0, caption: 0, center: 0, cite: 0, code: 0, col: 2, colgroup: 1, dd: 1, del: 0, dfn: 0, dir: 0, div: 0, dl: 0, dt: 1, em: 0, fieldset: 0, font: 0, form: 0, frame: 18, frameset: 16, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, head: 49, hr: 2, html: 49, i: 0, iframe: 20, img: 2, input: 2, ins: 0, isindex: 18, kbd: 0, label: 0, legend: 0, li: 1, link: 18, map: 0, menu: 0, meta: 18, noframes: 20, noscript: 20,
      object: 16, ol: 0, optgroup: 0, option: 1, p: 1, param: 18, pre: 0, q: 0, s: 0, samp: 0, script: 20, select: 0, small: 0, span: 0, strike: 0, strong: 0, style: 20, sub: 0, sup: 0, table: 0, tbody: 1, td: 1, textarea: 8, tfoot: 1, th: 1, thead: 1, title: 24, tr: 1, tt: 0, u: 0, ul: 0, "var": 0}, Qb = /&/g, Rb = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi, Sb = /</g, Tb = />/g, Ub = /\"/g, Vb = /=/g, Wb = /\0/g, Xb = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g, Yb = /^#(\d+)$/, Zb = /^#x([0-9A-Fa-f]+)$/, $b = /^\s*(?:(?:([a-z][a-z-]*)(\s*=\s*("[^"]*"|'[^']*'|(?=[a-z][a-z-]*\s*=)|[^>"'\s]*))?)|(\/?>)|[^a-z\s>]+)/i,
    ac = /^(?:&(\#[0-9]+|\#[x][0-9a-f]+|\w+);|<[!]--[\s\S]*?--\x3e|<!\w[^>]*>|<\?[^>*]*>|<(\/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))/i;
  Ob.prototype.parse = function (a, b) {
    var c = null, d = !1, e = [], f, g, n;
    a.stack_ = [];
    for (a.ignoring_ = !1; b;) {
      var m = b.match(d ? $b : ac);
      b = b.substring(m[0].length);
      if (d)if (m[1]) {
        var wa = m[1].toLowerCase();
        if (m[2]) {
          m = m[3];
          switch (m.charCodeAt(0)) {
            case 34:
            case 39:
              m = m.substring(1, m.length - 1)
          }
          m = bc(this, m.replace(Wb, ""))
        } else m = wa;
        e.push(wa, m)
      } else m[4] && (void 0 !== g && (n ? a.startTag && a.startTag(f, e) : a.endTag && a.endTag(f)), n && g & 12 && (c = null === c ? b.toLowerCase() : c.substring(c.length - b.length), d = c.indexOf("</" + f), 0 > d && (d = b.length),
          g & 4 ? a.cdata && a.cdata(b.substring(0, d)) : a.rcdata && a.rcdata(b.substring(0, d).replace(Rb, "&amp;$1").replace(Sb, "&lt;").replace(Tb, "&gt;")), b = b.substring(d)), f = g = n = void 0, e.length = 0, d = !1); else if (m[1])cc(a, m[0]); else if (m[3])n = !m[2], d = !0, f = m[3].toLowerCase(), g = N.hasOwnProperty(f) ? N[f] : void 0; else if (m[4])cc(a, m[4]); else if (m[5])switch (m[5]) {
        case "<":
          cc(a, "&lt;");
          break;
        case ">":
          cc(a, "&gt;");
          break;
        default:
          cc(a, "&amp;")
      }
    }
    for (c = a.stack_.length; 0 <= --c;)a.stringBuffer_.append("</", a.stack_[c], ">");
    a.stack_.length =
      0
  };
  function bc(a, b) {
    return b.replace(Xb, t(function (a, b) {
      var e;
      e = b.toLowerCase();
      if (Pb.hasOwnProperty(e))e = Pb[e]; else {
        var f = e.match(Yb);
        e = f ? String.fromCharCode(parseInt(f[1], 10)) : (f = e.match(Zb)) ? String.fromCharCode(parseInt(f[1], 16)) : ""
      }
      return e
    }, a))
  };
  function dc(a, b, c) {
    this.stringBuffer_ = a;
    this.stack_ = [];
    this.ignoring_ = !1;
    this.urlPolicy_ = b || null;
    this.nmTokenPolicy_ = c || null
  }

  var ec = {"*::class": 9, "*::dir": 0, "*::id": 4, "*::lang": 0, "*::onclick": 2, "*::ondblclick": 2, "*::onkeydown": 2, "*::onkeypress": 2, "*::onkeyup": 2, "*::onload": 2, "*::onmousedown": 2, "*::onmousemove": 2, "*::onmouseout": 2, "*::onmouseover": 2, "*::onmouseup": 2, "*::style": 3, "*::title": 0, "*::accesskey": 0, "*::tabindex": 0, "*::onfocus": 2, "*::onblur": 2, "a::coords": 0, "a::href": 1, "a::hreflang": 0, "a::name": 7, "a::onblur": 2, "a::rel": 0, "a::rev": 0, "a::shape": 0, "a::target": 10, "a::type": 0, "area::accesskey": 0, "area::alt": 0, "area::coords": 0,
    "area::href": 1, "area::nohref": 0, "area::onfocus": 2, "area::shape": 0, "area::tabindex": 0, "area::target": 10, "bdo::dir": 0, "blockquote::cite": 1, "br::clear": 0, "button::accesskey": 0, "button::disabled": 0, "button::name": 8, "button::onblur": 2, "button::onfocus": 2, "button::tabindex": 0, "button::type": 0, "button::value": 0, "caption::align": 0, "col::align": 0, "col::char": 0, "col::charoff": 0, "col::span": 0, "col::valign": 0, "col::width": 0, "colgroup::align": 0, "colgroup::char": 0, "colgroup::charoff": 0, "colgroup::span": 0, "colgroup::valign": 0,
    "colgroup::width": 0, "del::cite": 1, "del::datetime": 0, "dir::compact": 0, "div::align": 0, "dl::compact": 0, "font::color": 0, "font::face": 0, "font::size": 0, "form::accept": 0, "form::action": 1, "form::autocomplete": 0, "form::enctype": 0, "form::method": 0, "form::name": 7, "form::onreset": 2, "form::onsubmit": 2, "form::target": 10, "h1::align": 0, "h2::align": 0, "h3::align": 0, "h4::align": 0, "h5::align": 0, "h6::align": 0, "hr::align": 0, "hr::noshade": 0, "hr::size": 0, "hr::width": 0, "img::align": 0, "img::alt": 0, "img::border": 0, "img::height": 0,
    "img::hspace": 0, "img::ismap": 0, "img::longdesc": 1, "img::name": 7, "img::src": 1, "img::usemap": 11, "img::vspace": 0, "img::width": 0, "input::accept": 0, "input::accesskey": 0, "input::autocomplete": 0, "input::align": 0, "input::alt": 0, "input::checked": 0, "input::disabled": 0, "input::ismap": 0, "input::maxlength": 0, "input::name": 8, "input::onblur": 2, "input::onchange": 2, "input::onfocus": 2, "input::onselect": 2, "input::readonly": 0, "input::size": 0, "input::src": 1, "input::tabindex": 0, "input::type": 0, "input::usemap": 11, "input::value": 0,
    "ins::cite": 1, "ins::datetime": 0, "label::accesskey": 0, "label::for": 5, "label::onblur": 2, "label::onfocus": 2, "legend::accesskey": 0, "legend::align": 0, "li::type": 0, "li::value": 0, "map::name": 7, "menu::compact": 0, "ol::compact": 0, "ol::start": 0, "ol::type": 0, "optgroup::disabled": 0, "optgroup::label": 0, "option::disabled": 0, "option::label": 0, "option::selected": 0, "option::value": 0, "p::align": 0, "pre::width": 0, "q::cite": 1, "select::disabled": 0, "select::multiple": 0, "select::name": 8, "select::onblur": 2, "select::onchange": 2,
    "select::onfocus": 2, "select::size": 0, "select::tabindex": 0, "table::align": 0, "table::bgcolor": 0, "table::border": 0, "table::cellpadding": 0, "table::cellspacing": 0, "table::frame": 0, "table::rules": 0, "table::summary": 0, "table::width": 0, "tbody::align": 0, "tbody::char": 0, "tbody::charoff": 0, "tbody::valign": 0, "td::abbr": 0, "td::align": 0, "td::axis": 0, "td::bgcolor": 0, "td::char": 0, "td::charoff": 0, "td::colspan": 0, "td::headers": 6, "td::height": 0, "td::nowrap": 0, "td::rowspan": 0, "td::scope": 0, "td::valign": 0, "td::width": 0,
    "textarea::accesskey": 0, "textarea::cols": 0, "textarea::disabled": 0, "textarea::name": 8, "textarea::onblur": 2, "textarea::onchange": 2, "textarea::onfocus": 2, "textarea::onselect": 2, "textarea::readonly": 0, "textarea::rows": 0, "textarea::tabindex": 0, "tfoot::align": 0, "tfoot::char": 0, "tfoot::charoff": 0, "tfoot::valign": 0, "th::abbr": 0, "th::align": 0, "th::axis": 0, "th::bgcolor": 0, "th::char": 0, "th::charoff": 0, "th::colspan": 0, "th::headers": 6, "th::height": 0, "th::nowrap": 0, "th::rowspan": 0, "th::scope": 0, "th::valign": 0,
    "th::width": 0, "thead::align": 0, "thead::char": 0, "thead::charoff": 0, "thead::valign": 0, "tr::align": 0, "tr::bgcolor": 0, "tr::char": 0, "tr::charoff": 0, "tr::valign": 0, "ul::compact": 0, "ul::type": 0};
  dc.prototype.startTag = function (a, b) {
    if (!this.ignoring_ && N.hasOwnProperty(a)) {
      var c = N[a];
      if (!(c & 32))if (c & 16)this.ignoring_ = !(c & 2); else {
        for (var d = b, e = 0; e < d.length; e += 2) {
          var f = d[e], g = d[e + 1], n = null, m;
          if ((m = a + "::" + f, ec.hasOwnProperty(m)) || (m = "*::" + f, ec.hasOwnProperty(m)))n = ec[m];
          if (null !== n)switch (n) {
            case 0:
              break;
            case 2:
            case 3:
              g = null;
              break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
              g = this.nmTokenPolicy_ ? this.nmTokenPolicy_(g) : g;
              break;
            case 1:
              g = this.urlPolicy_ && this.urlPolicy_(g);
              break;
            case 11:
              g && "#" === g.charAt(0) ?
                (g = this.nmTokenPolicy_ ? this.nmTokenPolicy_(g) : g) && (g = "#" + g) : g = null;
              break;
            default:
              g = null
          } else g = null;
          d[e + 1] = g
        }
        if (b = d) {
          c & 2 || this.stack_.push(a);
          this.stringBuffer_.append("<", a);
          c = 0;
          for (d = b.length; c < d; c += 2)e = b[c], f = b[c + 1], null !== f && void 0 !== f && this.stringBuffer_.append(" ", e, '="', f.replace(Qb, "&amp;").replace(Sb, "&lt;").replace(Tb, "&gt;").replace(Ub, "&#34;").replace(Vb, "&#61;"), '"');
          this.stringBuffer_.append(">")
        }
      }
    }
  };
  dc.prototype.endTag = function (a) {
    if (this.ignoring_)this.ignoring_ = !1; else if (N.hasOwnProperty(a)) {
      var b = N[a];
      if (!(b & 50)) {
        if (b & 1)for (b = this.stack_.length; 0 <= --b;) {
          var c = this.stack_[b];
          if (c === a)break;
          if (!(N[c] & 1))return
        } else for (b = this.stack_.length; 0 <= --b && this.stack_[b] !== a;);
        if (!(0 > b)) {
          for (var d = this.stack_.length; --d > b;)c = this.stack_[d], N[c] & 1 || this.stringBuffer_.append("</", c, ">");
          this.stack_.length = b;
          this.stringBuffer_.append("</", a, ">")
        }
      }
    }
  };
  function cc(a, b) {
    a.ignoring_ || a.stringBuffer_.append(b)
  }

  dc.prototype.rcdata = function (a) {
    this.ignoring_ || this.stringBuffer_.append(a)
  };
  dc.prototype.cdata = function (a) {
    this.ignoring_ || this.stringBuffer_.append(a)
  };
  function fc(a) {
    if (a.classList)return a.classList;
    a = a.className;
    return q(a) && a.match(/\S+/g) || []
  }

  function gc(a, b) {
    return a.classList ? a.classList.contains(b) : ua(fc(a), b)
  }

  function hc(a, b) {
    a.classList ? a.classList.add(b) : gc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
  }

  function ic(a, b) {
    a.classList ? a.classList.remove(b) : gc(a, b) && (a.className = sa(fc(a), function (a) {
      return a != b
    }).join(" "))
  };
  function jc(a) {
    if (a.getValues && "function" == typeof a.getValues)return a.getValues();
    if (q(a))return a.split("");
    if (ba(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
      return b
    }
    return Da(a)
  }

  function kc(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach)a.forEach(b, c); else if (ba(a) || q(a))v(a, b, c); else {
      var d;
      if (a.getKeys && "function" == typeof a.getKeys)d = a.getKeys(); else if (a.getValues && "function" == typeof a.getValues)d = void 0; else if (ba(a) || q(a)) {
        d = [];
        for (var e = a.length, f = 0; f < e; f++)d.push(f)
      } else d = Ea(a);
      for (var e = jc(a), f = e.length, g = 0; g < f; g++)b.call(c, e[g], d && d[g], a)
    }
  };
  function lc(a, b) {
    this.map_ = {};
    this.keys_ = [];
    this.count_ = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2)throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
  }

  h = lc.prototype;
  h.getCount = function () {
    return this.count_
  };
  h.getValues = function () {
    mc(this);
    for (var a = [], b = 0; b < this.keys_.length; b++)a.push(this.map_[this.keys_[b]]);
    return a
  };
  h.getKeys = function () {
    mc(this);
    return this.keys_.concat()
  };
  h.containsKey = function (a) {
    return O(this.map_, a)
  };
  h.equals = function (a, b) {
    if (this === a)return!0;
    if (this.count_ != a.getCount())return!1;
    var c = b || nc;
    mc(this);
    for (var d, e = 0; d = this.keys_[e]; e++)if (!c(this.get(d), a.get(d)))return!1;
    return!0
  };
  function nc(a, b) {
    return a === b
  }

  h.clear = function () {
    this.map_ = {};
    this.count_ = this.keys_.length = 0
  };
  h.remove = function (a) {
    return O(this.map_, a) ? (delete this.map_[a], this.count_--, this.keys_.length > 2 * this.count_ && mc(this), !0) : !1
  };
  function mc(a) {
    if (a.count_ != a.keys_.length) {
      for (var b = 0, c = 0; b < a.keys_.length;) {
        var d = a.keys_[b];
        O(a.map_, d) && (a.keys_[c++] = d);
        b++
      }
      a.keys_.length = c
    }
    if (a.count_ != a.keys_.length) {
      for (var e = {}, c = b = 0; b < a.keys_.length;)d = a.keys_[b], O(e, d) || (a.keys_[c++] = d, e[d] = 1), b++;
      a.keys_.length = c
    }
  }

  h.get = function (a, b) {
    return O(this.map_, a) ? this.map_[a] : b
  };
  h.set = function (a, b) {
    O(this.map_, a) || (this.count_++, this.keys_.push(a));
    this.map_[a] = b
  };
  h.addAll = function (a) {
    var b;
    a instanceof lc ? (b = a.getKeys(), a = a.getValues()) : (b = Ea(a), a = Da(a));
    for (var c = 0; c < b.length; c++)this.set(b[c], a[c])
  };
  h.forEach = function (a, b) {
    for (var c = this.getKeys(), d = 0; d < c.length; d++) {
      var e = c[d], f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  h.clone = function () {
    return new lc(this)
  };
  function O(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var oc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

  function pc(a, b) {
    if (a)for (var c = a.split("&"), d = 0; d < c.length; d++) {
      var e = c[d].indexOf("="), f = null, g = null;
      0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
      b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  };
  function P(a, b) {
    this.domain_ = this.userInfo_ = this.scheme_ = "";
    this.port_ = null;
    this.fragment_ = this.path_ = "";
    this.ignoreCase_ = this.isReadOnly_ = !1;
    var c;
    if (a instanceof P)this.ignoreCase_ = l(b) ? b : a.ignoreCase_, qc(this, a.scheme_), c = a.userInfo_, Q(this), this.userInfo_ = c, c = a.domain_, Q(this), this.domain_ = c, rc(this, a.port_), c = a.path_, Q(this), this.path_ = c, sc(this, a.queryData_.clone()), c = a.fragment_, Q(this), this.fragment_ = c; else if (a && (c = String(a).match(oc))) {
      this.ignoreCase_ = !!b;
      qc(this, c[1] || "", !0);
      var d = c[2] ||
        "";
      Q(this);
      this.userInfo_ = R(d);
      d = c[3] || "";
      Q(this);
      this.domain_ = R(d, !0);
      rc(this, c[4]);
      d = c[5] || "";
      Q(this);
      this.path_ = R(d, !0);
      sc(this, c[6] || "", !0);
      c = c[7] || "";
      Q(this);
      this.fragment_ = R(c)
    } else this.ignoreCase_ = !!b, this.queryData_ = new tc(null, 0, this.ignoreCase_)
  }

  P.prototype.toString = function () {
    var a = [], b = this.scheme_;
    b && a.push(uc(b, vc, !0), ":");
    var c = this.domain_;
    if (c || "file" == b)a.push("//"), (b = this.userInfo_) && a.push(uc(b, vc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.port_, null != c && a.push(":", String(c));
    if (c = this.path_)this.domain_ && "/" != c.charAt(0) && a.push("/"), a.push(uc(c, "/" == c.charAt(0) ? wc : xc, !0));
    (c = this.queryData_.toString()) && a.push("?", c);
    (c = this.fragment_) && a.push("#", uc(c, yc));
    return a.join("")
  };
  P.prototype.resolve = function (a) {
    var b = this.clone(), c = !!a.scheme_;
    c ? qc(b, a.scheme_) : c = !!a.userInfo_;
    if (c) {
      var d = a.userInfo_;
      Q(b);
      b.userInfo_ = d
    } else c = !!a.domain_;
    c ? (d = a.domain_, Q(b), b.domain_ = d) : c = null != a.port_;
    d = a.path_;
    if (c)rc(b, a.port_); else if (c = !!a.path_) {
      if ("/" != d.charAt(0))if (this.domain_ && !this.path_)d = "/" + d; else {
        var e = b.path_.lastIndexOf("/");
        -1 != e && (d = b.path_.substr(0, e + 1) + d)
      }
      e = d;
      if (".." == e || "." == e)d = ""; else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        for (var d = 0 == e.lastIndexOf("/", 0), e =
          e.split("/"), f = [], g = 0; g < e.length;) {
          var n = e[g++];
          "." == n ? d && g == e.length && f.push("") : ".." == n ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(n), d = !0)
        }
        d = f.join("/")
      } else d = e
    }
    c ? (Q(b), b.path_ = d) : c = "" !== a.queryData_.toString();
    c ? sc(b, R(a.queryData_.toString())) : c = !!a.fragment_;
    c && (a = a.fragment_, Q(b), b.fragment_ = a);
    return b
  };
  P.prototype.clone = function () {
    return new P(this)
  };
  function qc(a, b, c) {
    Q(a);
    a.scheme_ = c ? R(b, !0) : b;
    a.scheme_ && (a.scheme_ = a.scheme_.replace(/:$/, ""))
  }

  function rc(a, b) {
    Q(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
      a.port_ = b
    } else a.port_ = null
  }

  function sc(a, b, c) {
    Q(a);
    b instanceof tc ? (a.queryData_ = b, a.queryData_.setIgnoreCase(a.ignoreCase_)) : (c || (b = uc(b, zc)), a.queryData_ = new tc(b, 0, a.ignoreCase_))
  }

  function Q(a) {
    if (a.isReadOnly_)throw Error("Tried to modify a read-only Uri");
  }

  P.prototype.setIgnoreCase = function (a) {
    this.ignoreCase_ = a;
    this.queryData_ && this.queryData_.setIgnoreCase(a);
    return this
  };
  function Ac(a) {
    return a instanceof P ? a.clone() : new P(a, void 0)
  }

  function R(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
  }

  function uc(a, b, c) {
    return q(a) ? (a = encodeURI(a).replace(b, Bc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
  }

  function Bc(a) {
    a = a.charCodeAt(0);
    return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }

  var vc = /[#\/\?@]/g, xc = /[\#\?:]/g, wc = /[\#\?]/g, zc = /[\#\?@]/g, yc = /#/g;

  function tc(a, b, c) {
    this.count_ = this.keyMap_ = null;
    this.encodedQuery_ = a || null;
    this.ignoreCase_ = !!c
  }

  function S(a) {
    a.keyMap_ || (a.keyMap_ = new lc, a.count_ = 0, a.encodedQuery_ && pc(a.encodedQuery_, function (b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
    }))
  }

  h = tc.prototype;
  h.getCount = function () {
    S(this);
    return this.count_
  };
  h.add = function (a, b) {
    S(this);
    this.encodedQuery_ = null;
    a = T(this, a);
    var c = this.keyMap_.get(a);
    c || this.keyMap_.set(a, c = []);
    c.push(b);
    this.count_++;
    return this
  };
  h.remove = function (a) {
    S(this);
    a = T(this, a);
    return this.keyMap_.containsKey(a) ? (this.encodedQuery_ = null, this.count_ -= this.keyMap_.get(a).length, this.keyMap_.remove(a)) : !1
  };
  h.clear = function () {
    this.keyMap_ = this.encodedQuery_ = null;
    this.count_ = 0
  };
  h.containsKey = function (a) {
    S(this);
    a = T(this, a);
    return this.keyMap_.containsKey(a)
  };
  h.getKeys = function () {
    S(this);
    for (var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
    return c
  };
  h.getValues = function (a) {
    S(this);
    var b = [];
    if (q(a))this.containsKey(a) && (b = va(b, this.keyMap_.get(T(this, a)))); else {
      a = this.keyMap_.getValues();
      for (var c = 0; c < a.length; c++)b = va(b, a[c])
    }
    return b
  };
  h.set = function (a, b) {
    S(this);
    this.encodedQuery_ = null;
    a = T(this, a);
    this.containsKey(a) && (this.count_ -= this.keyMap_.get(a).length);
    this.keyMap_.set(a, [b]);
    this.count_++;
    return this
  };
  h.get = function (a, b) {
    var c = a ? this.getValues(a) : [];
    return 0 < c.length ? String(c[0]) : b
  };
  h.toString = function () {
    if (this.encodedQuery_)return this.encodedQuery_;
    if (!this.keyMap_)return"";
    for (var a = [], b = this.keyMap_.getKeys(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.getValues(d), f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g)
    }
    return this.encodedQuery_ = a.join("&")
  };
  h.clone = function () {
    var a = new tc;
    a.encodedQuery_ = this.encodedQuery_;
    this.keyMap_ && (a.keyMap_ = this.keyMap_.clone(), a.count_ = this.count_);
    return a
  };
  function T(a, b) {
    var c = String(b);
    a.ignoreCase_ && (c = c.toLowerCase());
    return c
  }

  h.setIgnoreCase = function (a) {
    a && !this.ignoreCase_ && (S(this), this.encodedQuery_ = null, this.keyMap_.forEach(function (a, c) {
      var d = c.toLowerCase();
      c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.encodedQuery_ = null, this.keyMap_.set(T(this, d), xa(a)), this.count_ += a.length))
    }, this));
    this.ignoreCase_ = a
  };
  h.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)kc(arguments[b], function (a, b) {
      this.add(b, a)
    }, this)
  };
  function Cc() {
    M.call(this);
    this.state_ = Dc;
    this.endTime = this.startTime = null
  }

  u(Cc, M);
  var Dc = 0;
  Cc.prototype.dispatchAnimationEvent = function (a) {
    this.dispatchEvent(a)
  };
  function Ec(a, b, c) {
    I.call(this);
    this.listener_ = a;
    this.interval_ = b || 0;
    this.handler_ = c;
    this.callback_ = t(this.doAction_, this)
  }

  u(Ec, I);
  h = Ec.prototype;
  h.id_ = 0;
  h.disposeInternal = function () {
    Ec.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.listener_;
    delete this.handler_
  };
  h.start = function (a) {
    this.stop();
    var b = this.callback_;
    a = l(a) ? a : this.interval_;
    if (!ca(b))if (b && "function" == typeof b.handleEvent)b = t(b.handleEvent, b); else throw Error("Invalid listener argument");
    this.id_ = 2147483647 < a ? -1 : k.setTimeout(b, a || 0)
  };
  h.stop = function () {
    0 != this.id_ && k.clearTimeout(this.id_);
    this.id_ = 0
  };
  h.doAction_ = function () {
    this.id_ = 0;
    this.listener_ && this.listener_.call(this.handler_)
  };
  var y = {}, Fc = null;

  function Gc(a) {
    a = ea(a);
    delete y[a];
    Fa() && Fc && Fc.stop()
  }

  function Hc() {
    Fc || (Fc = new Ec(function () {
      Ic()
    }, 20));
    var a = Fc;
    0 != a.id_ || a.start()
  }

  function Ic() {
    var a = ka();
    Ba(y, function (b) {
      Jc(b, a)
    });
    Fa() || Hc()
  };
  function Kc(a, b, c, d) {
    Cc.call(this);
    if (!p(a) || !p(b))throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)throw Error("Start and end points must be the same length");
    this.startPoint = a;
    this.endPoint = b;
    this.duration = c;
    this.accel_ = d;
    this.coords = [];
    this.progress = 0
  }

  u(Kc, Cc);
  h = Kc.prototype;
  h.play = function (a) {
    if (a || this.state_ == Dc)this.progress = 0, this.coords = this.startPoint; else if (1 == this.state_)return!1;
    Gc(this);
    this.startTime = a = ka();
    -1 == this.state_ && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.progress || this.dispatchAnimationEvent("begin");
    this.dispatchAnimationEvent("play");
    -1 == this.state_ && this.dispatchAnimationEvent("resume");
    this.state_ = 1;
    var b = ea(this);
    b in y || (y[b] = this);
    Hc();
    Jc(this, a);
    return!0
  };
  h.stop = function (a) {
    Gc(this);
    this.state_ = Dc;
    a && (this.progress = 1);
    Lc(this, this.progress);
    this.dispatchAnimationEvent("stop");
    this.dispatchAnimationEvent("end")
  };
  h.pause = function () {
    1 == this.state_ && (Gc(this), this.state_ = -1, this.dispatchAnimationEvent("pause"))
  };
  h.disposeInternal = function () {
    this.state_ == Dc || this.stop(!1);
    this.dispatchAnimationEvent("destroy");
    Kc.superClass_.disposeInternal.call(this)
  };
  h.destroy = function () {
    mb(this)
  };
  function Jc(a, b) {
    a.progress = (b - a.startTime) / (a.endTime - a.startTime);
    1 <= a.progress && (a.progress = 1);
    Lc(a, a.progress);
    1 == a.progress ? (a.state_ = Dc, Gc(a), a.dispatchAnimationEvent("finish"), a.dispatchAnimationEvent("end")) : 1 == a.state_ && a.dispatchAnimationEvent("animate")
  }

  function Lc(a, b) {
    ca(a.accel_) && (b = a.accel_(b));
    a.coords = Array(a.startPoint.length);
    for (var c = 0; c < a.startPoint.length; c++)a.coords[c] = (a.endPoint[c] - a.startPoint[c]) * b + a.startPoint[c]
  }

  h.dispatchAnimationEvent = function (a) {
    this.dispatchEvent(new Mc(a, this))
  };
  function Mc(a, b) {
    J.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.state_
  }

  u(Mc, J);
  function Nc(a) {
    return 1 - Math.pow(1 - a, 3)
  };
  function Oc(a, b) {
    var c;
    c = a.className;
    for (var d = c = q(c) && c.match(/\S+/g) || [], e = ya(arguments, 1), f = 0; f < e.length; f++)ua(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ")
  };
  function Pc() {
  }

  "use strict";
  var Qc = angular.module("glueCommonMediaQuery", []);

  function U(a, b, c, d) {
    this.scope_ = a;
    this.window_ = b;
    this.timeout_ = c;
    this.categories_ = d;
    this.resultsCache_ = {}
  }

  la("glue.ng.common.MediaQuery.service", U);
  U.$inject = ["$rootScope", "$window", "$timeout", "glueMediaQueryCategories"];
  U.prototype.isMatching = function (a) {
    if (null != this.resultsCache_[a])return this.resultsCache_[a];
    var b = this.window_.matchMedia(this.categories_[a]);
    this.resultsCache_[a] = b.matches;
    b.addListener(angular.bind(this, function (b) {
      this.timeout_(angular.bind(this, function () {
        this.resultsCache_[a] = b.matches
      }))
    }));
    return b.matches
  };
  U.prototype.isMatching = U.prototype.isMatching;
  U.prototype.isNotMatching = function (a) {
    return!this.isMatching(a)
  };
  U.prototype.isNotMatching = U.prototype.isNotMatching;
  Qc.service("glueMediaQuery", U);
  Qc.value("glueMediaQueryCategories", {mobile: "screen and (max-width: 767px)", desktop: "screen and (min-width: 768px)"});
  "use strict";
  var Rc = angular.module("glueCommonBreakpoint", []);

  function Sc(a, b) {
    this.scope_ = a;
    this.window_ = b;
    this.elToCheck_ = document.body;
    this.breakpoint_ = "";
    this.regex_ = RegExp("[\"']", "g");
    angular.element(this.window_).bind("load", angular.bind(this, this.handleBreakpointChange_));
    angular.element(this.window_).bind("resize", angular.bind(this, this.handleBreakpointChange_));
    angular.element(this.window_).bind("orientationchange", angular.bind(this, this.handleBreakpointChange_))
  }

  la("glue.ng.common.Breakpoint.service", Sc);
  Sc.$inject = ["$rootScope", "$window"];
  Sc.prototype.handleBreakpointChange_ = function () {
    var a = "", a = this.window_.getComputedStyle(this.elToCheck_, ":after"), a = a.getPropertyValue("content").replace(this.regex_, "");
    a !== this.breakpoint_ && (this.breakpoint_ = a, this.scope_.$broadcast("glue.breakpoint.update", this.breakpoint_))
  };
  Rc.service("glueBreakpoint", Sc);
  "use strict";
  function V(a, b, c, d) {
    this.timeout_ = a;
    this.attrs_ = b;
    this.scope_ = c;
    this.sce_ = d;
    this.isAttached_ = !1;
    this.config_ = new Pc;
    this.containerChildrenWatcher = this.itemsContainer_ = this.element_ = null;
    this.items = [];
    this.itemsById_ = {};
    this.selectionHistory_ = [];
    this.scope_.$on("$destroy", angular.bind(this, this.unregisterWatchersAndEvents_))
  }

  la("glue.ng.tabcordion.TabcordionCtrl", V);
  V.$inject = ["$timeout", "$attrs", "$scope", "$sce"];
  function Tc(a, b, c) {
    return angular.isDefined(a.attrs_[b]) ? a.scope_.$eval(a.attrs_[b]) : c
  }

  V.prototype.detach = function () {
    this.isAttached_ && (this.setVisibility(!1), this.element_.removeClass(this.config_.cssClass), this.element_.removeClass("glue-tabcordion-hide-headers"), this.element_.removeClass("glue-tabcordion-horizontal"), this.element_.removeClass("glue-tabcordion-vertical"), H(this.itemsContainer_[0], "min-height", ""), this.unregisterWatchersAndEvents_())
  };
  function Uc(a) {
    a.containerChildrenWatcher = a.scope_.$watch(angular.bind(a, function () {
      return this.itemsContainer_.children().length
    }), angular.bind(a, a.onContainerChildrenChanged_));
    a.config_.areHeadersClickable && (a.itemsContainer_.on("click", angular.bind(a, a.onItemsContainerClicked_)), a.itemsContainer_.on("keypress", angular.bind(a, a.onItemsContainerKeyPressed_)))
  }

  V.prototype.unregisterWatchersAndEvents_ = function () {
    this.containerChildrenWatcher();
    this.containerChildrenWatcher = null;
    this.config_.areHeadersClickable && (this.itemsContainer_.off("click"), this.itemsContainer_.off("keypress"))
  };
  V.prototype.getItemHeaderHtml = function (a) {
    return this.sce_.trustAsHtml(a.children()[0].outerHTML)
  };
  V.prototype.getItemHeaderHtml = V.prototype.getItemHeaderHtml;
  V.prototype.getItemHeaderHtmlByIndex = function (a) {
    return this.getItemHeaderHtml(this.items[a])
  };
  V.prototype.getItemHeaderHtmlByIndex = V.prototype.getItemHeaderHtmlByIndex;
  V.prototype.onContainerChildrenChanged_ = function (a) {
    a != this.items.length && (this.setVisibility(!1), this.timeout_(angular.bind(this, function () {
      Vc(this);
      this.deselectAllItems();
      this.config_.isFirstItemOpenByDefault && this.selectItemByIndex(0);
      this.setVisibility(!0)
    })))
  };
  V.prototype.onItemsContainerClicked_ = function (a) {
    a = angular.element(a.target);
    a.hasClass("glue-tabcordion-item-header") && (a = angular.element(a.parent()), this.toggleItem(a))
  };
  V.prototype.onItemsContainerKeyPressed_ = function (a) {
    var b = a.which || a.keyCode;
    if (13 == b || 32 == b)this.onItemsContainerClicked_(a)
  };
  function Wc(a) {
    var b = ib(a.element_[0]).height, c = 0;
    v(a.items, function (a) {
      c = Math.max(c, ib(a[0]).height)
    });
    return Math.max(b, c)
  }

  function Vc(a) {
    a.items = [];
    a.itemsById_ = {};
    v(a.itemsContainer_.children(), function (a) {
      a = angular.element(a);
      a.addClass("glue-tabcordion-item");
      angular.element(a.children()[1]).addClass("glue-tabcordion-item-content");
      var c = angular.element(a.children()[0]);
      c.addClass("glue-tabcordion-item-header");
      this.config_.areHeadersClickable ? c.attr("tabindex", 0) : c.removeAttr("tabindex");
      (c = a.attr("id")) && (this.itemsById_[c] = a);
      this.items.push(a)
    }, a);
    a.config_.isVertical && a.config_.isCalculateHeight && a.timeout_(angular.bind(a,
      function () {
        H(this.itemsContainer_[0], "min-height", Wc(this) + "px")
      }))
  }

  V.prototype.getLastSelectedItem = function () {
    var a;
    do {
      a && this.selectionHistory_.shift();
      if (0 == this.selectionHistory_.length)return null;
      a = this.selectionHistory_[0]
    } while (!this.isItemSelected(a));
    return a
  };
  V.prototype.getLastSelectedItem = V.prototype.getLastSelectedItem;
  V.prototype.selectItem = function (a) {
    this.config_.isSingleItemOnly && this.getLastSelectedItem() && this.deselectItem(this.getLastSelectedItem());
    a.addClass("glue-tabcordion-item-active");
    this.config_.deepLinkEnabled && this.scope_.$broadcast("glue.tabcordion.stateUpdate", a);
    this.selectionHistory_.unshift(a)
  };
  V.prototype.selectItem = V.prototype.selectItem;
  V.prototype.selectItemByIndex = function (a) {
    0 <= a && a < this.items.length && this.selectItem(this.items[a])
  };
  V.prototype.selectItemByIndex = V.prototype.selectItemByIndex;
  V.prototype.selectItemById = function (a) {
    (a = this.itemsById_[a]) && this.selectItem(a)
  };
  V.prototype.selectItemById = V.prototype.selectItemById;
  V.prototype.deselectItem = function (a) {
    a.removeClass("glue-tabcordion-item-active");
    this.config_.deepLinkEnabled && this.scope_.$broadcast("glue.tabcordion.stateUpdate", null)
  };
  V.prototype.deselectItem = V.prototype.deselectItem;
  V.prototype.deselectItemByIndex = function (a) {
    0 <= a && a < this.items.length && this.deselectItem(this.items[a])
  };
  V.prototype.deselectItemByIndex = V.prototype.deselectItemByIndex;
  V.prototype.deselectItemById = function (a) {
    (a = this.itemsById_[a]) && this.deselectItem(a)
  };
  V.prototype.deselectItemById = V.prototype.deselectItemById;
  V.prototype.toggleItem = function (a) {
    this.isItemSelected(a) ? this.deselectItem(a) : this.selectItem(a)
  };
  V.prototype.toggleItem = V.prototype.toggleItem;
  V.prototype.deselectAllItems = function (a) {
    var b;
    a && (b = this.getLastSelectedItem());
    this.selectionHistory_ = [];
    v(this.items, function (a) {
      this.deselectItem(a)
    }, this);
    b && this.selectItem(b)
  };
  V.prototype.deselectAllItems = V.prototype.deselectAllItems;
  V.prototype.isItemSelected = function (a) {
    return a.hasClass("glue-tabcordion-item-active")
  };
  V.prototype.isItemSelected = V.prototype.isItemSelected;
  V.prototype.isItemIndexSelected = function (a) {
    return this.isItemSelected(this.items[a])
  };
  V.prototype.isItemIndexSelected = V.prototype.isItemIndexSelected;
  V.prototype.setVisibility = function (a) {
    this.element_.toggleClass("glue-component-visible", a)
  };
  V.prototype.setVisibility = V.prototype.setVisibility;
  function Xc(a) {
    a.startSymbol("{[");
    a.endSymbol("]}")
  }

  Xc.$inject = ["$interpolateProvider"];
  Xc.module = angular.module("glueCommonConfig", []);
  Xc.module.config(Xc);
  "use strict";
  angular.module("glueAccordion", []).directive("glueAccordion", function () {
    return{restrict: "C", controller: V, scope: !0, link: function (a, b, c, d) {
      a = new Pc;
      a.cssClass = "glue-accordion-appearance";
      a.areHeadersClickable = !0;
      a.areHeadersHidden = !1;
      a.isSingleItemOnly = Tc(d, "glueAccordionSingleItemOnly", !1);
      a.isFirstItemOpenByDefault = Tc(d, "glueAccordionOpenFirstItem", !1);
      a.isVertical = Tc(d, "glueAccordionVertical", !1);
      a.isCalculateHeight = Tc(d, "glueAccordionCalculateHeight", !0);
      c = d.attrs_;
      a.deepLinkEnabled = null !== c && "glueAccordionState"in
        c;
      c = !1;
      d.isAttached_ ? (d.detach(), a && a.isSingleItemOnly && !d.config_.isSingleItemOnly && d.deselectAllItems(!0)) : d.isAttached_ = !0;
      d.element_ = b;
      d.itemsContainer_ = b;
      d.config_ = angular.copy(a) || d.config_;
      a && a.deepLinkEnabled && (c = !0);
      d.element_.addClass(d.config_.cssClass);
      d.element_.toggleClass("glue-tabcordion-hide-headers", d.config_.areHeadersHidden);
      d.element_.toggleClass("glue-tabcordion-horizontal", !d.config_.isVertical);
      d.element_.toggleClass("glue-tabcordion-vertical", d.config_.isVertical);
      Vc(d);
      Uc(d);
      !d.config_.isFirstItemOpenByDefault || d.getLastSelectedItem() || c ? c && (d.selectionHistory_ = [], d.scope_.$broadcast("glue.tabcordion.deepLink", d.config_.isFirstItemOpenByDefault)) : (d.selectionHistory_ = [], d.selectItemByIndex(0));
      d.setVisibility(!0)
    }}
  });
  var Yc = angular.module("glueCommon", [Rc.name, Qc.name, Xc.module.name]);

  function Y(a) {
    M.call(this);
    this.el_ = a;
    this.handler_ = new Kb(this);
    this.elementIsVisible_ = !1;
    Za(document);
    this.elementBounds_ = this.viewportBox_ = null;
    this.handler_.listen(window, "resize", this.handleWindowResize_);
    this.handler_.listen(window, ["scroll", "load"], this.checkBounds);
    Zc(this);
    $c(this)
  }

  u(Y, M);
  Y.prototype.checkBounds = function () {
    Za(document);
    $c(this);
    var a;
    if (this.elementIsVisible_) {
      a = this.viewportBox_;
      var b = this.elementBounds_;
      a = a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    } else a = this.viewportBox_.contains(this.elementBounds_);
    a != this.elementIsVisible_ && (this.dispatchEvent(new ad(0, a ? "appeared" : "disappeared")), this.elementIsVisible_ = a)
  };
  Y.prototype.disposeInternal = function () {
    mb(this.handler_);
    Y.superClass_.disposeInternal.call(this)
  };
  function Zc(a) {
    var b;
    b = Xa(window);
    a.viewportBox_ = new db(0, b.width, b.height, 0);
    if (a.viewportScale_) {
      var c = a.viewportScale_;
      b = bd(a.viewportBox_);
      a.viewportBox_.scale(c.width, c.height);
      c = bd(a.viewportBox_);
      a.viewportBox_.translate(new D(b.x - c.x, b.y - c.y))
    }
  }

  function bd(a) {
    return new D((a.left + (a.right - a.left)) / 2, (a.top + (a.bottom - a.top)) / 2)
  }

  function $c(a) {
    var b, c = a.el_;
    b = c.getBoundingClientRect();
    z && (c = c.ownerDocument, b.left -= c.documentElement.clientLeft + c.body.clientLeft, b.top -= c.documentElement.clientTop + c.body.clientTop);
    b = new db(b.top, b.right, b.bottom, b.left);
    c = a.viewportBox_;
    b.left <= c.left && b.right >= c.right && (b.left = Math.max(c.left, b.left), b.right = Math.min(c.right, b.right));
    b.top <= c.top && b.bottom >= c.bottom && (b.top = Math.max(c.top, b.top), b.bottom = Math.min(c.bottom, b.bottom));
    a.elementBounds_ = b
  }

  Y.prototype.handleWindowResize_ = function () {
    Zc(this);
    this.checkBounds()
  };
  function ad(a, b) {
    J.call(this, b)
  }

  u(ad, J);
  function cd(a) {
    if (/^(https?:)?\/\//i.test(a))return a
  }

  var dd = angular.module("navigation", [Yc.name]);

  function ed(a, b) {
    this.scrollTimer_ = null;
    this.scrollDistance_ = 0;
    this.currentBreakpoint_ = "";
    this.doc_ = document.documentElement;
    this.body_ = document.body;
    this.hidden_ = this.sticky_ = !1;
    this.navElement_ = G("main-navigation")[0] || null;
    this.headerElement_ = G("header")[0];
    this.logoElement_ = G("product-logo")[0];
    this.toggleElement_ = G("nav-toggle-button")[0] || null;
    this.ctaElement_ = G("cta-main")[0] || null;
    this.navCtaElement_ = G("cta-signup")[0] || null;
    this.navCtaWrapper_ = G("cta-wrapper")[0] || null;
    this.navDropDown_ =
      G("nav-dropdown-wrapper")[0] || null;
    this.headerHeight_ = this.headerElement_.offsetHeight;
    this.logoHeight_ = this.logoElement_.offsetHeight;
    this.navHeight_ = 0;
    60 < this.headerHeight_ && H(this.headerElement_, "min-height", 0);
    this.navElement_ ? this.navHeight_ = this.navElement_.offsetHeight : hc(this.headerElement_, "no-nav");
    L(window, "scroll", t(this.scrollAway, this));
    L(window, "resize", t(function () {
      this.headerHeight_ = this.headerElement_.offsetHeight;
      this.navElement_ && (this.navHeight_ = this.navElement_.offsetHeight);
      fd(this);
      "xsmall" != this.currentBreakpoint_ && ic(this.doc_, "nav-open")
    }, this));
    this.toggleElement_ && L(this.body_, "click", t(this.toggleMobileNav, this));
    a.$on("glue.breakpoint.update", angular.bind(this, function (a, b) {
      this.currentBreakpoint_ = b;
      fd(this);
      this.scrollAway()
    }));
    b.handleBreakpointChange_()
  }

  ed.$inject = ["$scope", "glueBreakpoint"];
  function fd(a) {
    if (a.navElement_) {
      var b = a.navElement_.getElementsByTagName("ul")[0];
      "xsmall" == a.currentBreakpoint_ ? H(b, "padding-right", "0px") : (a.navCtaElement_ || a.navDropDown_) && H(b, "padding-right", (a.navCtaElement_ && a.navCtaElement_.offsetWidth || 0 + a.navDropDown_.offsetWidth || 0) + "px")
    }
  }

  ed.prototype.scrollAway = function () {
    var a = this.scrollDistance_;
    this.scrollDistance_ = this.doc_ && this.doc_.scrollTop || this.body_ && this.body_.scrollTop || 0;
    switch (this.currentBreakpoint_) {
      case "large":
      case "medium":
      case "small":
        ic(this.body_, "mobile-header-hide");
        if (this.scrollDistance_ >= this.headerHeight_)this.sticky_ || gd(this), hd(this) ? (null !== this.scrollTimer_ && clearTimeout(this.scrollTimer_), this.scrollTimer_ = setTimeout(t(function () {
          id(this);
          jd(this)
        }, this), 200)) : (null !== this.scrollTimer_ && clearTimeout(this.scrollTimer_),
          this.scrollTimer_ = setTimeout(t(function () {
            id(this);
            kd(this)
          }, this), 200)); else if (this.scrollDistance_ < this.logoHeight_ && this.navElement_ || this.scrollDistance_ < this.headerHeight_ && this.hidden_ || 0 == this.scrollDistance_)clearTimeout(this.scrollTimer_), ld(this);
        break;
      default:
        md(this), this.navCtaWrapper_ && H(this.navCtaWrapper_, "top", "auto"), this.navElement_ && H(this.navElement_, "transition", "opacity 400ms ease 0s"), this.scrollDistance_ > this.headerHeight_ && a < this.scrollDistance_ ? (id(this), kd(this)) : this.scrollDistance_ <=
          this.headerHeight_ && !this.sticky_ || 0 == this.scrollDistance_ ? ld(this) : (id(this), jd(this))
    }
  };
  function id(a) {
    a.sticky_ || (a.sticky_ = !0, a.navElement_ && "xsmall" != a.currentBreakpoint_ ? (a.navHeight_ = a.navElement_.offsetHeight, H(a.body_, "padding-top", a.navHeight_ + "px"), H(a.navElement_, "top", 0)) : (H(a.body_, "padding-top", a.headerHeight_ + "px"), H(a.headerElement_, "top", 0)), a.navDropDown_ && H(a.navDropDown_, "top", 0), hc(a.headerElement_, "fixed-nav"))
  }

  function kd(a) {
    a.hidden_ = !0;
    a.navElement_ && "xsmall" != a.currentBreakpoint_ ? (a.navHeight_ = a.navElement_.offsetHeight, H(a.navElement_, "top", "-" + (a.navHeight_ + 10) + "px")) : H(a.headerElement_, "top", "-" + (a.headerHeight_ + 10) + "px");
    gd(a)
  }

  function jd(a) {
    a.hidden_ = !1;
    var b = a.headerElement_;
    a.navElement_ && "xsmall" != a.currentBreakpoint_ && (b = a.navElement_);
    a.navCtaWrapper_ && "xsmall" != a.currentBreakpoint_ && (H(a.navCtaWrapper_, "top", "0px"), H(a.navCtaWrapper_, "opacity", "1"));
    -1 == gb(b).indexOf("top 400ms") ? (H(b, "top", "-" + (b.offsetHeight + 10) + "px"), setTimeout(t(function () {
      H(b, "transition", "top 400ms ease 0s, opacity 300ms ease 0s");
      H(b, "top", 0)
    }, a), 100)) : H(b, "top", 0);
    md(a)
  }

  function ld(a) {
    a.sticky_ = !1;
    a.hidden_ = !1;
    H(a.body_, "padding-top", 0);
    ic(a.headerElement_, "fixed-nav");
    a.navElement_ && "xsmall" != a.currentBreakpoint_ ? (H(a.navElement_, "transition", "top 0s ease 0s"), H(a.navElement_, "top", 0)) : (H(a.headerElement_, "transition", "top 0s ease 0s"), H(a.headerElement_, "top", 0));
    a.ctaElement_ ? gd(a) : md(a);
    a.navCtaWrapper_ && "xsmall" != a.currentBreakpoint_ && (H(a.navCtaWrapper_, "top", "-" + a.logoHeight_ + "px"), H(a.navCtaWrapper_, "transition", "opacity 300ms ease 0s"), H(a.navCtaWrapper_,
      "opacity", "1"));
    a.navDropDown_ && "xsmall" != a.currentBreakpoint_ && H(a.navDropDown_, "top", "-" + a.logoHeight_ + "px")
  }

  ed.prototype.toggleMobileNav = function (a) {
    var b = new F;
    a.target == this.toggleElement_ || b.contains(this.toggleElement_, a.target) ? (a = this.doc_, gc(a, "nav-open") ? ic(a, "nav-open") : hc(a, "nav-open")) : b.contains(this.headerElement_, a.target) || ic(this.doc_, "nav-open")
  };
  function gd(a) {
    var b = 0;
    a.navCtaWrapper_ && a.navCtaElement_ && ("xsmall" == a.currentBreakpoint_ ? H(a.navCtaWrapper_, "transform", "translate(0,0)") : (b = a.navCtaElement_.offsetWidth + 10, H(a.navCtaWrapper_, "transition", "top 0s ease 0s, opacity 300ms ease 0s"), H(a.navCtaWrapper_, "transform", "translate(" + b + "px,0)")));
    a.navCtaElement_ && a.navDropDown_ && H(a.navDropDown_, "transform", "translate(0,0)")
  }

  function md(a) {
    var b = 0;
    a.navCtaWrapper_ && (a.sticky_ ? H(a.navCtaWrapper_, "transition", "transform 300ms ease 500ms, opacity 300ms ease 0s") : H(a.navCtaWrapper_, "transition", "transform 0s ease 0s, opacity 300ms ease 0s"), H(a.navCtaWrapper_, "transform", "translate(0,0)"));
    a.navCtaElement_ && a.navDropDown_ && (b = -1 * a.navCtaElement_.offsetWidth + 10, H(a.navDropDown_, "transform", "translate(" + (b - 10) + "px,0)"))
  }

  function hd(a) {
    var b = 0, c = 0;
    return a.ctaElement_ && (b = a.ctaElement_.offsetTop, c = a.ctaElement_.offsetHeight, 0 > a.scrollDistance_ - b - c) ? !1 : !0
  }

  dd.controller("rs.navigation.NavCtrl", ed);
  angular.module("rs.accordion", []).directive("rsAccordionToggle", function () {
    return{restrict: "CA", require: "^glueAccordion", link: function (a, b, c, d) {
      function e() {
        f.toggleClass("accordion-toggle-item-hidden");
        g.toggleClass("accordion-toggle-item-hidden")
      }

      a = b.children();
      var f = angular.element(a[0]), g = angular.element(a[1]), n = d.toggleItem;
      d.toggleItem = function () {
        n.apply(d, arguments);
        var a, b = !0;
        for (a = 1; a < d.items.length; a++)b = b && d.isItemSelected(d.items[a]);
        b ? (g.removeClass("accordion-toggle-item-hidden"), f.addClass("accordion-toggle-item-hidden")) :
          (g.addClass("accordion-toggle-item-hidden"), f.removeClass("accordion-toggle-item-hidden"))
      };
      f.addClass("accordion-toggle-item");
      g.addClass("accordion-toggle-item");
      g.addClass("accordion-toggle-item-hidden");
      f.on("click keypress", function (a) {
        a.preventDefault();
        e();
        d.items.forEach(function (a) {
          d.isItemSelected(a) || d.selectItem(a)
        })
      });
      g.on("click keypress", function (a) {
        a.preventDefault();
        e();
        d.deselectAllItems()
      })
    }}
  });
  var nd = angular.module("rs.trigger", []);
  nd.directive("rsTrigger", function () {
    return{restrict: "A", scope: {trigger: "=?rsTrigger", triggerClass: "@", triggerPoll: "@rsTriggerPoll"}, link: function (a, b, c) {
      var d = new Y(b[0]), e = a.triggerClass || "rs-trigger-visible", f, g;
      L(d, "appeared", function () {
        b.addClass(e);
        c.rsTrigger && (a.trigger = !0, window.clearInterval(f), a.$apply())
      });
      c.rsTriggerUndo && L(d, "disappeared", function () {
        b.removeClass(e);
        c.rsTrigger && (a.trigger = !1, a.$apply())
      });
      a.triggerPoll && (g = window.parseInt(a.triggerPoll, 10), g = isFinite(g) && !isNaN(g) ? g :
        1E3, f = window.setInterval(function () {
        d.checkBounds()
      }, g))
    }}
  });
  "use strict";
  var od = angular.module("feed", [Yc.name]);

  function pd(a, b, c) {
    this.attrs_ = a;
    this.http_ = c;
    this.blogFeedUrl_ = this.attrs_.blogFeed || null;
    this.rawData_ = null;
    this.data = {};
    this.blogFeedUrl_ && (this.blogFeedUrl_ += "?alt=json&callback=JSON_CALLBACK");
    this.blogFeedUrl_ && this.getData_()
  }

  pd.$inject = ["$attrs", "$scope", "$http"];
  function qd(a) {
    a.rawData_ && (a.data.post = a.data.post || {}, a.data.post.href = ta(a.rawData_[0].link, function (a, c) {
      return a && "alternate" !== c.rel ? a : c.href
    }, ""))
  }

  pd.prototype.getData_ = function () {
    this.http_.jsonp(this.blogFeedUrl_).success(angular.bind(this, function (a) {
      if (this.rawData_ = a.feed.entry) {
        a = this.rawData_[0].content.$t.replace(/<[^>]+>/gm, "");
        var b = new Nb;
        (new Ob).parse(new dc(b, cd, void 0), a);
        a = b.toString();
        this.data.post = this.data.post || {};
        this.data.post.content = a.substring(0, 280)
      }
      qd(this)
    }))
  };
  function rd(a) {
    a.get("/ads/rosetta/templates/feed-template.html") || a.put("/ads/rosetta/templates/feed-template.html", "<div class=\"blog-feed-content\">  <p>    {[blogFeedCtrl.data['post']['content']]}...     <a href=\"{[blogFeedCtrl.data['post']['href']]}\"        target=\"_blank\">Read more</a>  </p></div>");
    return{restrict: "A", replace: !0, scope: {}, controller: pd, controllerAs: "blogFeedCtrl", templateUrl: "/ads/rosetta/templates/feed-template.html"}
  }

  rd.$inject = ["$templateCache"];
  od.directive("blogFeed", rd);
  "use strict";
  var sd = angular.module("gPlus", [Yc.name]);

  function td(a, b) {
    this.attrs_ = a;
    this.http_ = b;
    this.quantity_ = this.attrs_.optQuantity || 3;
    this.url_ = "https://www.googleapis.com/plus/v1/people/+" + this.attrs_.gPlus + "/activities/public?maxResults=" + this.quantity_ + "&key=AIzaSyCGIQnkaLNSAf4Da2elBLw94VJYtB32xm4&callback=JSON_CALLBACK";
    this.data = null;
    this.getData_()
  }

  td.$inject = ["$attrs", "$http", "$sce"];
  td.prototype.getData_ = function () {
    var a = this;
    a.http_.jsonp(this.url_).success(function (b) {
      a.data = b
    })
  };
  sd.directive("gPlus", function () {
    return{restrict: "A", replace: !0, scope: {}, controller: td, controllerAs: "gPlusCtrl", templateUrl: "gplus.html"}
  });
  function Z() {
    M.call(this);
    this.scrollDuration_ = 600;
    this.scrollSpeed_ = 1;
    this.scrollTimingFn_ = Nc;
    this.scrollOffset_ = new D(0, 0);
    this.currentCoord_ = Za(document);
    this.dom_ = new Ta;
    this.eventHandler_ = new Kb(this)
  }

  u(Z, M);
  h = Z.prototype;
  h.scrollTo = function (a, b) {
    this.currentCoord_ = Za(document);
    var c = b || this.scrollOffset_;
    a = new D(c.x + a.x, c.y + a.y);
    c = new Kc([this.currentCoord_.x, this.currentCoord_.y], [a.x, a.y], this.scrollSpeed_ * this.scrollDuration_, this.scrollTimingFn_);
    this.eventHandler_.listen(c, ["begin", "finish", "animate"], this.handleScrollEvent_);
    c.play()
  };
  h.handleScrollEvent_ = function (a) {
    switch (a.type) {
      case "begin":
        this.dispatchEvent("b");
        break;
      case "finish":
        window.scrollTo(a.x, a.y);
        this.dispatchEvent("a");
        break;
      case "animate":
        window.scrollTo(a.x, a.y)
    }
  };
  h.scrollToElement = function (a, b) {
    var c = Ua(a), d = new D(0, 0), e;
    e = c ? Ua(c) : document;
    var f;
    (f = !z || 9 <= Sa) || (f = Ta(e), f = Ya(f.document_));
    a != (f ? e.documentElement : e.body) && (e = hb(a), c = Ta(c), c = Za(c.document_), d.x = e.left + c.x, d.y = e.top + c.y);
    this.scrollTo(d, b)
  };
  h.scrollToPreset = function (a) {
    var b;
    switch (a) {
      case "top":
        b = new D(0, 0);
        break;
      case "bottom":
        var c;
        a = this.dom_.document_;
        c = a.parentWindow || a.defaultView;
        a:{
          var d = c.document;
          a = 0;
          if (d) {
            a = d.body;
            b = d.documentElement;
            if (!b || !a) {
              a = 0;
              break a
            }
            c = Xa(c).height;
            if (Ya(d) && b.scrollHeight)a = b.scrollHeight != c ? b.scrollHeight : b.offsetHeight; else {
              var d = b.scrollHeight, e = b.offsetHeight;
              b.clientHeight != e && (d = a.scrollHeight, e = a.offsetHeight);
              a = d > c ? d > e ? d : e : d < e ? d : e
            }
          }
        }
        b = new D(0, a)
    }
    this.scrollTo(b)
  };
  h.decorateControls = function (a) {
    if (a = Wa("a", "gweb-smoothscroll-control", a || null))for (var b = 0, c; c = a[b]; b++) {
      var d, e = Ac(c.href), f = e.domain_ + e.path_, g = Ac(window.location.hostname + window.location.pathname);
      f == g.domain_ + g.path_ && e.fragment_ && (d = c.href.match(/(#)(.*)/)[2], d = Va(d));
      d && this.eventHandler_.listen(c, "click", this.handleControlClick_)
    }
  };
  h.handleControlClick_ = function (a) {
    a.preventDefault();
    a = a.target;
    var b = bb(a);
    b && (a = b);
    a = a.href.match(/(#)(.*)/)[2];
    b = Va(a);
    ud(b, !0);
    this.scrollToElement(b);
    window.location.hash = a;
    ud(b, !1)
  };
  function ud(a, b) {
    var c = a.id.match("_temp");
    b != c && (a.id = b ? a.id + "_temp" : a.id.replace("_temp", ""))
  }

  la("gweb.ui.SmoothScroll", Z);
  Z.prototype.scrollTo = Z.prototype.scrollTo;
  Z.prototype.setScrollSpeed = Z.prototype.setScrollSpeed;
  Z.prototype.scrollToPreset = Z.prototype.scrollToPreset;
  Z.prototype.decorateControls = Z.prototype.decorateControls;
  Z.prototype.scrollToElement = Z.prototype.scrollToElement;
  var vd = new Z;
  vd.scrollOffset_ = new D(0, -59);
  vd.decorateControls();
  var wd = function (a) {
    var b = !1, c;
    return function () {
      b || (c = a(), b = !0);
      return c
    }
  }(function () {
    var a = window.Modernizr.cssanimations && window.Modernizr.csstransitions && window.Modernizr.flexbox && (Ma || !Ka) && !La, b = Wa("html", void 0, void 0)[0];
    Oc(b, a ? "animations" : "no-animations");
    return a
  });
  wd();
  var xd = angular.module("rs.triggerClass", ["ngAnimate"]);

  function yd(a, b, c, d) {
    this.$animate_ = a;
    this.$element_ = b;
    this.$q_ = d;
    this.$scope_ = c
  }

  yd.$inject = ["$animate", "$element", "$scope", "$q"];
  yd.prototype.play = function () {
    this.$scope_.active || (this.deferred_ = this.$q_.defer(), this.$scope_.active = !0);
    return this.deferred_.promise
  };
  yd.prototype.resolve_ = function () {
    this.deferred_ && this.deferred_.resolve()
  };
  yd.prototype.clear = function () {
    if (!wd()) {
      var a = this.$q_.defer();
      a.resolve();
      return a.promise
    }
    return this.$animate_.addClass(this.$element_, this.$scope_.className + "-start").then(t(function () {
      this.$scope_.active = !1;
      this.$scope_.$apply()
    }, this))
  };
  xd.directive("rsTriggerClass", function () {
    return{restrict: "A", scope: {animationName: "@rsTriggerClass", active: "=?rsActive", className: "@"}, controller: yd, require: ["rsTriggerClass", "^?rsAnimationRouter"], link: function (a, b, c, d) {
      var e = d[0];
      c = d[1];
      d = a.animationName || "rsTriggerClass";
      wd() && b.addClass(a.className + "-start");
      c && c.register(d, e);
      a.$watch("active", function (b) {
        wd() ? b && e.$animate_.removeClass(e.$element_, a.className + "-start").then(function () {
          a.active = !1;
          a.$apply();
          e.resolve_()
        }) : e.resolve_()
      })
    }}
  });
  var zd = angular.module("rs.popupmenu", []);

  function Ad(a) {
    return{restrict: "A", scope: !0, link: function (b) {
      var c = a.breakpoint_, d = document.querySelector(".nav-dropdown-wrapper"), e = document.querySelector(".nav-dropdown"), f = new F;
      b.dropdownExpanded = !1;
      b.$on("glue.breakpoint.update", angular.bind(this, function (a, b) {
        c = b;
        "xsmall" == c && (H(d, "top", "initial"), H(d, "transform", "translate(0px,0px)"))
      }));
      b.$watch("dropdownExpanded", function () {
        var a;
        "xsmall" == c && (a = b.dropdownExpanded ? -1 * e.getBoundingClientRect().height : 0, H(d, "transform", "translate(0, " + a + "px)"))
      });
      L(window, "scroll", function () {
        "xsmall" == c && (H(d, "top", "initial"), H(d, "transform", "translate(0px,0px)"))
      });
      angular.element(document.body).on("click", function (a) {
        b.dropdownExpanded && !f.contains(d, a.target) && (b.dropdownExpanded = !1, b.$apply())
      })
    }}
  }

  Ad.$inject = ["glueBreakpoint"];
  zd.directive("rsPopupmenu", Ad);
  angular.module("rs.analytics", [sd.name, dd.name, nd.name, zd.name, xd.name]);
}());