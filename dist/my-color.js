var Di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jo(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Wi = { exports: {} }, Lr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $f;
function a1() {
  if ($f) return Lr;
  $f = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function i(s, f, c) {
    var g = null;
    if (c !== void 0 && (g = "" + c), f.key !== void 0 && (g = "" + f.key), "key" in f) {
      c = {};
      for (var y in f)
        y !== "key" && (c[y] = f[y]);
    } else c = f;
    return f = c.ref, {
      $$typeof: r,
      type: s,
      key: g,
      ref: f !== void 0 ? f : null,
      props: c
    };
  }
  return Lr.Fragment = a, Lr.jsx = i, Lr.jsxs = i, Lr;
}
var Fr = {}, Ui = { exports: {} }, me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf;
function o1() {
  if (zf) return me;
  zf = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), g = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), k = Symbol.iterator;
  function F(l) {
    return l === null || typeof l != "object" ? null : (l = k && l[k] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var K = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ee = Object.assign, ne = {};
  function G(l, _, I) {
    this.props = l, this.context = _, this.refs = ne, this.updater = I || K;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(l, _) {
    if (typeof l != "object" && typeof l != "function" && l != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, l, _, "setState");
  }, G.prototype.forceUpdate = function(l) {
    this.updater.enqueueForceUpdate(this, l, "forceUpdate");
  };
  function se() {
  }
  se.prototype = G.prototype;
  function xe(l, _, I) {
    this.props = l, this.context = _, this.refs = ne, this.updater = I || K;
  }
  var Z = xe.prototype = new se();
  Z.constructor = xe, ee(Z, G.prototype), Z.isPureReactComponent = !0;
  var ce = Array.isArray, O = { H: null, A: null, T: null, S: null, V: null }, Ue = Object.prototype.hasOwnProperty;
  function Le(l, _, I, M, D, $) {
    return I = $.ref, {
      $$typeof: r,
      type: l,
      key: _,
      ref: I !== void 0 ? I : null,
      props: $
    };
  }
  function ue(l, _) {
    return Le(
      l.type,
      _,
      void 0,
      void 0,
      void 0,
      l.props
    );
  }
  function Re(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }
  function Ke(l) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + l.replace(/[=:]/g, function(I) {
      return _[I];
    });
  }
  var fe = /\/+/g;
  function Ve(l, _) {
    return typeof l == "object" && l !== null && l.key != null ? Ke("" + l.key) : _.toString(36);
  }
  function it() {
  }
  function De(l) {
    switch (l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw l.reason;
      default:
        switch (typeof l.status == "string" ? l.then(it, it) : (l.status = "pending", l.then(
          function(_) {
            l.status === "pending" && (l.status = "fulfilled", l.value = _);
          },
          function(_) {
            l.status === "pending" && (l.status = "rejected", l.reason = _);
          }
        )), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw l.reason;
        }
    }
    throw l;
  }
  function $e(l, _, I, M, D) {
    var $ = typeof l;
    ($ === "undefined" || $ === "boolean") && (l = null);
    var W = !1;
    if (l === null) W = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (l.$$typeof) {
            case r:
            case a:
              W = !0;
              break;
            case R:
              return W = l._init, $e(
                W(l._payload),
                _,
                I,
                M,
                D
              );
          }
      }
    if (W)
      return D = D(l), W = M === "" ? "." + Ve(l, 0) : M, ce(D) ? (I = "", W != null && (I = W.replace(fe, "$&/") + "/"), $e(D, _, I, "", function(ae) {
        return ae;
      })) : D != null && (Re(D) && (D = ue(
        D,
        I + (D.key == null || l && l.key === D.key ? "" : ("" + D.key).replace(
          fe,
          "$&/"
        ) + "/") + W
      )), _.push(D)), 1;
    W = 0;
    var J = M === "" ? "." : M + ":";
    if (ce(l))
      for (var j = 0; j < l.length; j++)
        M = l[j], $ = J + Ve(M, j), W += $e(
          M,
          _,
          I,
          $,
          D
        );
    else if (j = F(l), typeof j == "function")
      for (l = j.call(l), j = 0; !(M = l.next()).done; )
        M = M.value, $ = J + Ve(M, j++), W += $e(
          M,
          _,
          I,
          $,
          D
        );
    else if ($ === "object") {
      if (typeof l.then == "function")
        return $e(
          De(l),
          _,
          I,
          M,
          D
        );
      throw _ = String(l), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return W;
  }
  function ze(l, _, I) {
    if (l == null) return l;
    var M = [], D = 0;
    return $e(l, M, "", "", function($) {
      return _.call(I, $, D++);
    }), M;
  }
  function Ye(l) {
    if (l._status === -1) {
      var _ = l._result;
      _ = _(), _.then(
        function(I) {
          (l._status === 0 || l._status === -1) && (l._status = 1, l._result = I);
        },
        function(I) {
          (l._status === 0 || l._status === -1) && (l._status = 2, l._result = I);
        }
      ), l._status === -1 && (l._status = 0, l._result = _);
    }
    if (l._status === 1) return l._result.default;
    throw l._result;
  }
  var Xe = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function xt() {
  }
  return me.Children = {
    map: ze,
    forEach: function(l, _, I) {
      ze(
        l,
        function() {
          _.apply(this, arguments);
        },
        I
      );
    },
    count: function(l) {
      var _ = 0;
      return ze(l, function() {
        _++;
      }), _;
    },
    toArray: function(l) {
      return ze(l, function(_) {
        return _;
      }) || [];
    },
    only: function(l) {
      if (!Re(l))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return l;
    }
  }, me.Component = G, me.Fragment = i, me.Profiler = f, me.PureComponent = xe, me.StrictMode = s, me.Suspense = S, me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(l) {
      return O.H.useMemoCache(l);
    }
  }, me.cache = function(l) {
    return function() {
      return l.apply(null, arguments);
    };
  }, me.cloneElement = function(l, _, I) {
    if (l == null)
      throw Error(
        "The argument must be a React element, but you passed " + l + "."
      );
    var M = ee({}, l.props), D = l.key, $ = void 0;
    if (_ != null)
      for (W in _.ref !== void 0 && ($ = void 0), _.key !== void 0 && (D = "" + _.key), _)
        !Ue.call(_, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && _.ref === void 0 || (M[W] = _[W]);
    var W = arguments.length - 2;
    if (W === 1) M.children = I;
    else if (1 < W) {
      for (var J = Array(W), j = 0; j < W; j++)
        J[j] = arguments[j + 2];
      M.children = J;
    }
    return Le(l.type, D, void 0, void 0, $, M);
  }, me.createContext = function(l) {
    return l = {
      $$typeof: g,
      _currentValue: l,
      _currentValue2: l,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, l.Provider = l, l.Consumer = {
      $$typeof: c,
      _context: l
    }, l;
  }, me.createElement = function(l, _, I) {
    var M, D = {}, $ = null;
    if (_ != null)
      for (M in _.key !== void 0 && ($ = "" + _.key), _)
        Ue.call(_, M) && M !== "key" && M !== "__self" && M !== "__source" && (D[M] = _[M]);
    var W = arguments.length - 2;
    if (W === 1) D.children = I;
    else if (1 < W) {
      for (var J = Array(W), j = 0; j < W; j++)
        J[j] = arguments[j + 2];
      D.children = J;
    }
    if (l && l.defaultProps)
      for (M in W = l.defaultProps, W)
        D[M] === void 0 && (D[M] = W[M]);
    return Le(l, $, void 0, void 0, null, D);
  }, me.createRef = function() {
    return { current: null };
  }, me.forwardRef = function(l) {
    return { $$typeof: y, render: l };
  }, me.isValidElement = Re, me.lazy = function(l) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: l },
      _init: Ye
    };
  }, me.memo = function(l, _) {
    return {
      $$typeof: A,
      type: l,
      compare: _ === void 0 ? null : _
    };
  }, me.startTransition = function(l) {
    var _ = O.T, I = {};
    O.T = I;
    try {
      var M = l(), D = O.S;
      D !== null && D(I, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(xt, Xe);
    } catch ($) {
      Xe($);
    } finally {
      O.T = _;
    }
  }, me.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, me.use = function(l) {
    return O.H.use(l);
  }, me.useActionState = function(l, _, I) {
    return O.H.useActionState(l, _, I);
  }, me.useCallback = function(l, _) {
    return O.H.useCallback(l, _);
  }, me.useContext = function(l) {
    return O.H.useContext(l);
  }, me.useDebugValue = function() {
  }, me.useDeferredValue = function(l, _) {
    return O.H.useDeferredValue(l, _);
  }, me.useEffect = function(l, _, I) {
    var M = O.H;
    if (typeof I == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return M.useEffect(l, _);
  }, me.useId = function() {
    return O.H.useId();
  }, me.useImperativeHandle = function(l, _, I) {
    return O.H.useImperativeHandle(l, _, I);
  }, me.useInsertionEffect = function(l, _) {
    return O.H.useInsertionEffect(l, _);
  }, me.useLayoutEffect = function(l, _) {
    return O.H.useLayoutEffect(l, _);
  }, me.useMemo = function(l, _) {
    return O.H.useMemo(l, _);
  }, me.useOptimistic = function(l, _) {
    return O.H.useOptimistic(l, _);
  }, me.useReducer = function(l, _, I) {
    return O.H.useReducer(l, _, I);
  }, me.useRef = function(l) {
    return O.H.useRef(l);
  }, me.useState = function(l) {
    return O.H.useState(l);
  }, me.useSyncExternalStore = function(l, _, I) {
    return O.H.useSyncExternalStore(
      l,
      _,
      I
    );
  }, me.useTransition = function() {
    return O.H.useTransition();
  }, me.version = "19.1.0", me;
}
var Wr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Wr.exports;
var Yf;
function s1() {
  return Yf || (Yf = 1, function(r, a) {
    process.env.NODE_ENV !== "production" && function() {
      function i(d, x) {
        Object.defineProperty(c.prototype, d, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              x[0],
              x[1]
            );
          }
        });
      }
      function s(d) {
        return d === null || typeof d != "object" ? null : (d = Be && d[Be] || d["@@iterator"], typeof d == "function" ? d : null);
      }
      function f(d, x) {
        d = (d = d.constructor) && (d.displayName || d.name) || "ReactClass";
        var U = d + "." + x;
        H[U] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          x,
          d
        ), H[U] = !0);
      }
      function c(d, x, U) {
        this.props = d, this.context = x, this.refs = It, this.updater = U || ut;
      }
      function g() {
      }
      function y(d, x, U) {
        this.props = d, this.context = x, this.refs = It, this.updater = U || ut;
      }
      function S(d) {
        return "" + d;
      }
      function A(d) {
        try {
          S(d);
          var x = !1;
        } catch {
          x = !0;
        }
        if (x) {
          x = console;
          var U = x.error, Y = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
          return U.call(
            x,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            Y
          ), S(d);
        }
      }
      function R(d) {
        if (d == null) return null;
        if (typeof d == "function")
          return d.$$typeof === na ? null : d.displayName || d.name || null;
        if (typeof d == "string") return d;
        switch (d) {
          case l:
            return "Fragment";
          case I:
            return "Profiler";
          case _:
            return "StrictMode";
          case W:
            return "Suspense";
          case J:
            return "SuspenseList";
          case ve:
            return "Activity";
        }
        if (typeof d == "object")
          switch (typeof d.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), d.$$typeof) {
            case xt:
              return "Portal";
            case D:
              return (d.displayName || "Context") + ".Provider";
            case M:
              return (d._context.displayName || "Context") + ".Consumer";
            case $:
              var x = d.render;
              return d = d.displayName, d || (d = x.displayName || x.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
            case j:
              return x = d.displayName || null, x !== null ? x : R(d.type) || "Memo";
            case ae:
              x = d._payload, d = d._init;
              try {
                return R(d(x));
              } catch {
              }
          }
        return null;
      }
      function k(d) {
        if (d === l) return "<>";
        if (typeof d == "object" && d !== null && d.$$typeof === ae)
          return "<...>";
        try {
          var x = R(d);
          return x ? "<" + x + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function F() {
        var d = he.A;
        return d === null ? null : d.getOwner();
      }
      function K() {
        return Error("react-stack-top-frame");
      }
      function ee(d) {
        if (ft.call(d, "key")) {
          var x = Object.getOwnPropertyDescriptor(d, "key").get;
          if (x && x.isReactWarning) return !1;
        }
        return d.key !== void 0;
      }
      function ne(d, x) {
        function U() {
          Mn || (Mn = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            x
          ));
        }
        U.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: U,
          configurable: !0
        });
      }
      function G() {
        var d = R(this.type);
        return mn[d] || (mn[d] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), d = this.props.ref, d !== void 0 ? d : null;
      }
      function se(d, x, U, Y, Q, ye, pe, Oe) {
        return U = ye.ref, d = {
          $$typeof: Xe,
          type: d,
          key: x,
          props: ye,
          _owner: Q
        }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(d, "ref", {
          enumerable: !1,
          get: G
        }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(d, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(d, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: pe
        }), Object.defineProperty(d, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Oe
        }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
      }
      function xe(d, x) {
        return x = se(
          d.type,
          x,
          void 0,
          void 0,
          d._owner,
          d.props,
          d._debugStack,
          d._debugTask
        ), d._store && (x._store.validated = d._store.validated), x;
      }
      function Z(d) {
        return typeof d == "object" && d !== null && d.$$typeof === Xe;
      }
      function ce(d) {
        var x = { "=": "=0", ":": "=2" };
        return "$" + d.replace(/[=:]/g, function(U) {
          return x[U];
        });
      }
      function O(d, x) {
        return typeof d == "object" && d !== null && d.key != null ? (A(d.key), ce("" + d.key)) : x.toString(36);
      }
      function Ue() {
      }
      function Le(d) {
        switch (d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
          default:
            switch (typeof d.status == "string" ? d.then(Ue, Ue) : (d.status = "pending", d.then(
              function(x) {
                d.status === "pending" && (d.status = "fulfilled", d.value = x);
              },
              function(x) {
                d.status === "pending" && (d.status = "rejected", d.reason = x);
              }
            )), d.status) {
              case "fulfilled":
                return d.value;
              case "rejected":
                throw d.reason;
            }
        }
        throw d;
      }
      function ue(d, x, U, Y, Q) {
        var ye = typeof d;
        (ye === "undefined" || ye === "boolean") && (d = null);
        var pe = !1;
        if (d === null) pe = !0;
        else
          switch (ye) {
            case "bigint":
            case "string":
            case "number":
              pe = !0;
              break;
            case "object":
              switch (d.$$typeof) {
                case Xe:
                case xt:
                  pe = !0;
                  break;
                case ae:
                  return pe = d._init, ue(
                    pe(d._payload),
                    x,
                    U,
                    Y,
                    Q
                  );
              }
          }
        if (pe) {
          pe = d, Q = Q(pe);
          var Oe = Y === "" ? "." + O(pe, 0) : Y;
          return yr(Q) ? (U = "", Oe != null && (U = Oe.replace(Xn, "$&/") + "/"), ue(Q, x, U, "", function(qt) {
            return qt;
          })) : Q != null && (Z(Q) && (Q.key != null && (pe && pe.key === Q.key || A(Q.key)), U = xe(
            Q,
            U + (Q.key == null || pe && pe.key === Q.key ? "" : ("" + Q.key).replace(
              Xn,
              "$&/"
            ) + "/") + Oe
          ), Y !== "" && pe != null && Z(pe) && pe.key == null && pe._store && !pe._store.validated && (U._store.validated = 2), Q = U), x.push(Q)), 1;
        }
        if (pe = 0, Oe = Y === "" ? "." : Y + ":", yr(d))
          for (var be = 0; be < d.length; be++)
            Y = d[be], ye = Oe + O(Y, be), pe += ue(
              Y,
              x,
              U,
              ye,
              Q
            );
        else if (be = s(d), typeof be == "function")
          for (be === d.entries && (Jt || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Jt = !0), d = be.call(d), be = 0; !(Y = d.next()).done; )
            Y = Y.value, ye = Oe + O(Y, be++), pe += ue(
              Y,
              x,
              U,
              ye,
              Q
            );
        else if (ye === "object") {
          if (typeof d.then == "function")
            return ue(
              Le(d),
              x,
              U,
              Y,
              Q
            );
          throw x = String(d), Error(
            "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return pe;
      }
      function Re(d, x, U) {
        if (d == null) return d;
        var Y = [], Q = 0;
        return ue(d, Y, "", "", function(ye) {
          return x.call(U, ye, Q++);
        }), Y;
      }
      function Ke(d) {
        if (d._status === -1) {
          var x = d._result;
          x = x(), x.then(
            function(U) {
              (d._status === 0 || d._status === -1) && (d._status = 1, d._result = U);
            },
            function(U) {
              (d._status === 0 || d._status === -1) && (d._status = 2, d._result = U);
            }
          ), d._status === -1 && (d._status = 0, d._result = x);
        }
        if (d._status === 1)
          return x = d._result, x === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            x
          ), "default" in x || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            x
          ), x.default;
        throw d._result;
      }
      function fe() {
        var d = he.H;
        return d === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), d;
      }
      function Ve() {
      }
      function it(d) {
        if (vn === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7);
            vn = (r && r[x]).call(
              r,
              "timers"
            ).setImmediate;
          } catch {
            vn = function(Y) {
              Vn === !1 && (Vn = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var Q = new MessageChannel();
              Q.port1.onmessage = Y, Q.port2.postMessage(void 0);
            };
          }
        return vn(d);
      }
      function De(d) {
        return 1 < d.length && typeof AggregateError == "function" ? new AggregateError(d) : d[0];
      }
      function $e(d, x) {
        x !== _n - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), _n = x;
      }
      function ze(d, x, U) {
        var Y = he.actQueue;
        if (Y !== null)
          if (Y.length !== 0)
            try {
              Ye(Y), it(function() {
                return ze(d, x, U);
              });
              return;
            } catch (Q) {
              he.thrownErrors.push(Q);
            }
          else he.actQueue = null;
        0 < he.thrownErrors.length ? (Y = De(he.thrownErrors), he.thrownErrors.length = 0, U(Y)) : x(d);
      }
      function Ye(d) {
        if (!Ln) {
          Ln = !0;
          var x = 0;
          try {
            for (; x < d.length; x++) {
              var U = d[x];
              do {
                he.didUsePromise = !1;
                var Y = U(!1);
                if (Y !== null) {
                  if (he.didUsePromise) {
                    d[x] = U, d.splice(0, x);
                    return;
                  }
                  U = Y;
                } else break;
              } while (!0);
            }
            d.length = 0;
          } catch (Q) {
            d.splice(0, x + 1), he.thrownErrors.push(Q);
          } finally {
            Ln = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Xe = Symbol.for("react.transitional.element"), xt = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), D = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), ve = Symbol.for("react.activity"), Be = Symbol.iterator, H = {}, ut = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(d) {
          f(d, "forceUpdate");
        },
        enqueueReplaceState: function(d) {
          f(d, "replaceState");
        },
        enqueueSetState: function(d) {
          f(d, "setState");
        }
      }, tt = Object.assign, It = {};
      Object.freeze(It), c.prototype.isReactComponent = {}, c.prototype.setState = function(d, x) {
        if (typeof d != "object" && typeof d != "function" && d != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, d, x, "setState");
      }, c.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate");
      };
      var mt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, vt;
      for (vt in mt)
        mt.hasOwnProperty(vt) && i(vt, mt[vt]);
      g.prototype = c.prototype, mt = y.prototype = new g(), mt.constructor = y, tt(mt, c.prototype), mt.isPureReactComponent = !0;
      var yr = Array.isArray, na = Symbol.for("react.client.reference"), he = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, ft = Object.prototype.hasOwnProperty, gn = console.createTask ? console.createTask : function() {
        return null;
      };
      mt = {
        "react-stack-bottom-frame": function(d) {
          return d();
        }
      };
      var Mn, Kr, mn = {}, ra = mt["react-stack-bottom-frame"].bind(mt, K)(), Nn = gn(k(K)), Jt = !1, Xn = /\/+/g, Zn = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var x = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
            error: d
          });
          if (!window.dispatchEvent(x)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", d);
          return;
        }
        console.error(d);
      }, Vn = !1, vn = null, _n = 0, yn = !1, Ln = !1, Qn = typeof queueMicrotask == "function" ? function(d) {
        queueMicrotask(function() {
          return queueMicrotask(d);
        });
      } : it;
      mt = Object.freeze({
        __proto__: null,
        c: function(d) {
          return fe().useMemoCache(d);
        }
      }), a.Children = {
        map: Re,
        forEach: function(d, x, U) {
          Re(
            d,
            function() {
              x.apply(this, arguments);
            },
            U
          );
        },
        count: function(d) {
          var x = 0;
          return Re(d, function() {
            x++;
          }), x;
        },
        toArray: function(d) {
          return Re(d, function(x) {
            return x;
          }) || [];
        },
        only: function(d) {
          if (!Z(d))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return d;
        }
      }, a.Component = c, a.Fragment = l, a.Profiler = I, a.PureComponent = y, a.StrictMode = _, a.Suspense = W, a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = he, a.__COMPILER_RUNTIME = mt, a.act = function(d) {
        var x = he.actQueue, U = _n;
        _n++;
        var Y = he.actQueue = x !== null ? x : [], Q = !1;
        try {
          var ye = d();
        } catch (be) {
          he.thrownErrors.push(be);
        }
        if (0 < he.thrownErrors.length)
          throw $e(x, U), d = De(he.thrownErrors), he.thrownErrors.length = 0, d;
        if (ye !== null && typeof ye == "object" && typeof ye.then == "function") {
          var pe = ye;
          return Qn(function() {
            Q || yn || (yn = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(be, qt) {
              Q = !0, pe.then(
                function(en) {
                  if ($e(x, U), U === 0) {
                    try {
                      Ye(Y), it(function() {
                        return ze(
                          en,
                          be,
                          qt
                        );
                      });
                    } catch (aa) {
                      he.thrownErrors.push(aa);
                    }
                    if (0 < he.thrownErrors.length) {
                      var ia = De(
                        he.thrownErrors
                      );
                      he.thrownErrors.length = 0, qt(ia);
                    }
                  } else be(en);
                },
                function(en) {
                  $e(x, U), 0 < he.thrownErrors.length && (en = De(
                    he.thrownErrors
                  ), he.thrownErrors.length = 0), qt(en);
                }
              );
            }
          };
        }
        var Oe = ye;
        if ($e(x, U), U === 0 && (Ye(Y), Y.length !== 0 && Qn(function() {
          Q || yn || (yn = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), he.actQueue = null), 0 < he.thrownErrors.length)
          throw d = De(he.thrownErrors), he.thrownErrors.length = 0, d;
        return {
          then: function(be, qt) {
            Q = !0, U === 0 ? (he.actQueue = Y, it(function() {
              return ze(
                Oe,
                be,
                qt
              );
            })) : be(Oe);
          }
        };
      }, a.cache = function(d) {
        return function() {
          return d.apply(null, arguments);
        };
      }, a.captureOwnerStack = function() {
        var d = he.getCurrentStack;
        return d === null ? null : d();
      }, a.cloneElement = function(d, x, U) {
        if (d == null)
          throw Error(
            "The argument must be a React element, but you passed " + d + "."
          );
        var Y = tt({}, d.props), Q = d.key, ye = d._owner;
        if (x != null) {
          var pe;
          e: {
            if (ft.call(x, "ref") && (pe = Object.getOwnPropertyDescriptor(
              x,
              "ref"
            ).get) && pe.isReactWarning) {
              pe = !1;
              break e;
            }
            pe = x.ref !== void 0;
          }
          pe && (ye = F()), ee(x) && (A(x.key), Q = "" + x.key);
          for (Oe in x)
            !ft.call(x, Oe) || Oe === "key" || Oe === "__self" || Oe === "__source" || Oe === "ref" && x.ref === void 0 || (Y[Oe] = x[Oe]);
        }
        var Oe = arguments.length - 2;
        if (Oe === 1) Y.children = U;
        else if (1 < Oe) {
          pe = Array(Oe);
          for (var be = 0; be < Oe; be++)
            pe[be] = arguments[be + 2];
          Y.children = pe;
        }
        for (Y = se(
          d.type,
          Q,
          void 0,
          void 0,
          ye,
          Y,
          d._debugStack,
          d._debugTask
        ), Q = 2; Q < arguments.length; Q++)
          ye = arguments[Q], Z(ye) && ye._store && (ye._store.validated = 1);
        return Y;
      }, a.createContext = function(d) {
        return d = {
          $$typeof: D,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, d.Provider = d, d.Consumer = {
          $$typeof: M,
          _context: d
        }, d._currentRenderer = null, d._currentRenderer2 = null, d;
      }, a.createElement = function(d, x, U) {
        for (var Y = 2; Y < arguments.length; Y++) {
          var Q = arguments[Y];
          Z(Q) && Q._store && (Q._store.validated = 1);
        }
        if (Y = {}, Q = null, x != null)
          for (be in Kr || !("__self" in x) || "key" in x || (Kr = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), ee(x) && (A(x.key), Q = "" + x.key), x)
            ft.call(x, be) && be !== "key" && be !== "__self" && be !== "__source" && (Y[be] = x[be]);
        var ye = arguments.length - 2;
        if (ye === 1) Y.children = U;
        else if (1 < ye) {
          for (var pe = Array(ye), Oe = 0; Oe < ye; Oe++)
            pe[Oe] = arguments[Oe + 2];
          Object.freeze && Object.freeze(pe), Y.children = pe;
        }
        if (d && d.defaultProps)
          for (be in ye = d.defaultProps, ye)
            Y[be] === void 0 && (Y[be] = ye[be]);
        Q && ne(
          Y,
          typeof d == "function" ? d.displayName || d.name || "Unknown" : d
        );
        var be = 1e4 > he.recentlyCreatedOwnerStacks++;
        return se(
          d,
          Q,
          void 0,
          void 0,
          F(),
          Y,
          be ? Error("react-stack-top-frame") : ra,
          be ? gn(k(d)) : Nn
        );
      }, a.createRef = function() {
        var d = { current: null };
        return Object.seal(d), d;
      }, a.forwardRef = function(d) {
        d != null && d.$$typeof === j ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof d != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          d === null ? "null" : typeof d
        ) : d.length !== 0 && d.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          d.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), d != null && d.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var x = { $$typeof: $, render: d }, U;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return U;
          },
          set: function(Y) {
            U = Y, d.name || d.displayName || (Object.defineProperty(d, "name", { value: Y }), d.displayName = Y);
          }
        }), x;
      }, a.isValidElement = Z, a.lazy = function(d) {
        return {
          $$typeof: ae,
          _payload: { _status: -1, _result: d },
          _init: Ke
        };
      }, a.memo = function(d, x) {
        d == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          d === null ? "null" : typeof d
        ), x = {
          $$typeof: j,
          type: d,
          compare: x === void 0 ? null : x
        };
        var U;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return U;
          },
          set: function(Y) {
            U = Y, d.name || d.displayName || (Object.defineProperty(d, "name", { value: Y }), d.displayName = Y);
          }
        }), x;
      }, a.startTransition = function(d) {
        var x = he.T, U = {};
        he.T = U, U._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var Y = d(), Q = he.S;
          Q !== null && Q(U, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Ve, Zn);
        } catch (ye) {
          Zn(ye);
        } finally {
          x === null && U._updatedFibers && (d = U._updatedFibers.size, U._updatedFibers.clear(), 10 < d && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), he.T = x;
        }
      }, a.unstable_useCacheRefresh = function() {
        return fe().useCacheRefresh();
      }, a.use = function(d) {
        return fe().use(d);
      }, a.useActionState = function(d, x, U) {
        return fe().useActionState(
          d,
          x,
          U
        );
      }, a.useCallback = function(d, x) {
        return fe().useCallback(d, x);
      }, a.useContext = function(d) {
        var x = fe();
        return d.$$typeof === M && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), x.useContext(d);
      }, a.useDebugValue = function(d, x) {
        return fe().useDebugValue(d, x);
      }, a.useDeferredValue = function(d, x) {
        return fe().useDeferredValue(d, x);
      }, a.useEffect = function(d, x, U) {
        d == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var Y = fe();
        if (typeof U == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return Y.useEffect(d, x);
      }, a.useId = function() {
        return fe().useId();
      }, a.useImperativeHandle = function(d, x, U) {
        return fe().useImperativeHandle(d, x, U);
      }, a.useInsertionEffect = function(d, x) {
        return d == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), fe().useInsertionEffect(d, x);
      }, a.useLayoutEffect = function(d, x) {
        return d == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), fe().useLayoutEffect(d, x);
      }, a.useMemo = function(d, x) {
        return fe().useMemo(d, x);
      }, a.useOptimistic = function(d, x) {
        return fe().useOptimistic(d, x);
      }, a.useReducer = function(d, x, U) {
        return fe().useReducer(d, x, U);
      }, a.useRef = function(d) {
        return fe().useRef(d);
      }, a.useState = function(d) {
        return fe().useState(d);
      }, a.useSyncExternalStore = function(d, x, U) {
        return fe().useSyncExternalStore(
          d,
          x,
          U
        );
      }, a.useTransition = function() {
        return fe().useTransition();
      }, a.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Wr, Wr.exports)), Wr.exports;
}
var Bf;
function Yl() {
  return Bf || (Bf = 1, process.env.NODE_ENV === "production" ? Ui.exports = o1() : Ui.exports = s1()), Ui.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qf;
function u1() {
  return qf || (qf = 1, process.env.NODE_ENV !== "production" && function() {
    function r(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === Ke ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case ne:
          return "Fragment";
        case se:
          return "Profiler";
        case G:
          return "StrictMode";
        case O:
          return "Suspense";
        case Ue:
          return "SuspenseList";
        case Re:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case ee:
            return "Portal";
          case Z:
            return (l.displayName || "Context") + ".Provider";
          case xe:
            return (l._context.displayName || "Context") + ".Consumer";
          case ce:
            var _ = l.render;
            return l = l.displayName, l || (l = _.displayName || _.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case Le:
            return _ = l.displayName || null, _ !== null ? _ : r(l.type) || "Memo";
          case ue:
            _ = l._payload, l = l._init;
            try {
              return r(l(_));
            } catch {
            }
        }
      return null;
    }
    function a(l) {
      return "" + l;
    }
    function i(l) {
      try {
        a(l);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var I = _.error, M = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return I.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), a(l);
      }
    }
    function s(l) {
      if (l === ne) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === ue)
        return "<...>";
      try {
        var _ = r(l);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var l = fe.A;
      return l === null ? null : l.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function g(l) {
      if (Ve.call(l, "key")) {
        var _ = Object.getOwnPropertyDescriptor(l, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function y(l, _) {
      function I() {
        $e || ($e = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: I,
        configurable: !0
      });
    }
    function S() {
      var l = r(this.type);
      return ze[l] || (ze[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function A(l, _, I, M, D, $, W, J) {
      return I = $.ref, l = {
        $$typeof: K,
        type: l,
        key: _,
        props: $,
        _owner: D
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: S
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function R(l, _, I, M, D, $, W, J) {
      var j = _.children;
      if (j !== void 0)
        if (M)
          if (it(j)) {
            for (M = 0; M < j.length; M++)
              k(j[M]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(j);
      if (Ve.call(_, "key")) {
        j = r(l);
        var ae = Object.keys(_).filter(function(Be) {
          return Be !== "key";
        });
        M = 0 < ae.length ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}", xt[j + M] || (ae = 0 < ae.length ? "{" + ae.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          j,
          ae,
          j
        ), xt[j + M] = !0);
      }
      if (j = null, I !== void 0 && (i(I), j = "" + I), g(_) && (i(_.key), j = "" + _.key), "key" in _) {
        I = {};
        for (var ve in _)
          ve !== "key" && (I[ve] = _[ve]);
      } else I = _;
      return j && y(
        I,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), A(
        l,
        j,
        $,
        D,
        f(),
        I,
        W,
        J
      );
    }
    function k(l) {
      typeof l == "object" && l !== null && l.$$typeof === K && l._store && (l._store.validated = 1);
    }
    var F = Yl(), K = Symbol.for("react.transitional.element"), ee = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), xe = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Re = Symbol.for("react.activity"), Ke = Symbol.for("react.client.reference"), fe = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ve = Object.prototype.hasOwnProperty, it = Array.isArray, De = console.createTask ? console.createTask : function() {
      return null;
    };
    F = {
      "react-stack-bottom-frame": function(l) {
        return l();
      }
    };
    var $e, ze = {}, Ye = F["react-stack-bottom-frame"].bind(
      F,
      c
    )(), Xe = De(s(c)), xt = {};
    Fr.Fragment = ne, Fr.jsx = function(l, _, I, M, D) {
      var $ = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return R(
        l,
        _,
        I,
        !1,
        M,
        D,
        $ ? Error("react-stack-top-frame") : Ye,
        $ ? De(s(l)) : Xe
      );
    }, Fr.jsxs = function(l, _, I, M, D) {
      var $ = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return R(
        l,
        _,
        I,
        !0,
        M,
        D,
        $ ? Error("react-stack-top-frame") : Ye,
        $ ? De(s(l)) : Xe
      );
    };
  }()), Fr;
}
var Gf;
function f1() {
  return Gf || (Gf = 1, process.env.NODE_ENV === "production" ? Wi.exports = a1() : Wi.exports = u1()), Wi.exports;
}
var oe = f1(), Ne = Yl();
const Bl = /* @__PURE__ */ Jo(Ne);
function qi(r) {
  "@babel/helpers - typeof";
  return qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, qi(r);
}
var l1 = /^\s+/, c1 = /\s+$/;
function q(r, a) {
  if (r = r || "", a = a || {}, r instanceof q)
    return r;
  if (!(this instanceof q))
    return new q(r, a);
  var i = d1(r);
  this._originalInput = r, this._r = i.r, this._g = i.g, this._b = i.b, this._a = i.a, this._roundA = Math.round(100 * this._a) / 100, this._format = a.format || i.format, this._gradientType = a.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = i.ok;
}
q.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var a = this.toRgb();
    return (a.r * 299 + a.g * 587 + a.b * 114) / 1e3;
  },
  getLuminance: function() {
    var a = this.toRgb(), i, s, f, c, g, y;
    return i = a.r / 255, s = a.g / 255, f = a.b / 255, i <= 0.03928 ? c = i / 12.92 : c = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? g = s / 12.92 : g = Math.pow((s + 0.055) / 1.055, 2.4), f <= 0.03928 ? y = f / 12.92 : y = Math.pow((f + 0.055) / 1.055, 2.4), 0.2126 * c + 0.7152 * g + 0.0722 * y;
  },
  setAlpha: function(a) {
    return this._a = ql(a), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var a = Xf(this._r, this._g, this._b);
    return {
      h: a.h * 360,
      s: a.s,
      v: a.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var a = Xf(this._r, this._g, this._b), i = Math.round(a.h * 360), s = Math.round(a.s * 100), f = Math.round(a.v * 100);
    return this._a == 1 ? "hsv(" + i + ", " + s + "%, " + f + "%)" : "hsva(" + i + ", " + s + "%, " + f + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var a = Kf(this._r, this._g, this._b);
    return {
      h: a.h * 360,
      s: a.s,
      l: a.l,
      a: this._a
    };
  },
  toHslString: function() {
    var a = Kf(this._r, this._g, this._b), i = Math.round(a.h * 360), s = Math.round(a.s * 100), f = Math.round(a.l * 100);
    return this._a == 1 ? "hsl(" + i + ", " + s + "%, " + f + "%)" : "hsla(" + i + ", " + s + "%, " + f + "%, " + this._roundA + ")";
  },
  toHex: function(a) {
    return Zf(this._r, this._g, this._b, a);
  },
  toHexString: function(a) {
    return "#" + this.toHex(a);
  },
  toHex8: function(a) {
    return m1(this._r, this._g, this._b, this._a, a);
  },
  toHex8String: function(a) {
    return "#" + this.toHex8(a);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(Ge(this._r, 255) * 100) + "%",
      g: Math.round(Ge(this._g, 255) * 100) + "%",
      b: Math.round(Ge(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(Ge(this._r, 255) * 100) + "%, " + Math.round(Ge(this._g, 255) * 100) + "%, " + Math.round(Ge(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(Ge(this._r, 255) * 100) + "%, " + Math.round(Ge(this._g, 255) * 100) + "%, " + Math.round(Ge(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : O1[Zf(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(a) {
    var i = "#" + Vf(this._r, this._g, this._b, this._a), s = i, f = this._gradientType ? "GradientType = 1, " : "";
    if (a) {
      var c = q(a);
      s = "#" + Vf(c._r, c._g, c._b, c._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + f + "startColorstr=" + i + ",endColorstr=" + s + ")";
  },
  toString: function(a) {
    var i = !!a;
    a = a || this._format;
    var s = !1, f = this._a < 1 && this._a >= 0, c = !i && f && (a === "hex" || a === "hex6" || a === "hex3" || a === "hex4" || a === "hex8" || a === "name");
    return c ? a === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (a === "rgb" && (s = this.toRgbString()), a === "prgb" && (s = this.toPercentageRgbString()), (a === "hex" || a === "hex6") && (s = this.toHexString()), a === "hex3" && (s = this.toHexString(!0)), a === "hex4" && (s = this.toHex8String(!0)), a === "hex8" && (s = this.toHex8String()), a === "name" && (s = this.toName()), a === "hsl" && (s = this.toHslString()), a === "hsv" && (s = this.toHsvString()), s || this.toHexString());
  },
  clone: function() {
    return q(this.toString());
  },
  _applyModification: function(a, i) {
    var s = a.apply(null, [this].concat([].slice.call(i)));
    return this._r = s._r, this._g = s._g, this._b = s._b, this.setAlpha(s._a), this;
  },
  lighten: function() {
    return this._applyModification(b1, arguments);
  },
  brighten: function() {
    return this._applyModification(w1, arguments);
  },
  darken: function() {
    return this._applyModification(x1, arguments);
  },
  desaturate: function() {
    return this._applyModification(v1, arguments);
  },
  saturate: function() {
    return this._applyModification(_1, arguments);
  },
  greyscale: function() {
    return this._applyModification(y1, arguments);
  },
  spin: function() {
    return this._applyModification(E1, arguments);
  },
  _applyCombination: function(a, i) {
    return a.apply(null, [this].concat([].slice.call(i)));
  },
  analogous: function() {
    return this._applyCombination(T1, arguments);
  },
  complement: function() {
    return this._applyCombination(A1, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(R1, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(S1, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Qf, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Qf, [4]);
  }
};
q.fromRatio = function(r, a) {
  if (qi(r) == "object") {
    var i = {};
    for (var s in r)
      r.hasOwnProperty(s) && (s === "a" ? i[s] = r[s] : i[s] = Ur(r[s]));
    r = i;
  }
  return q(r, a);
};
function d1(r) {
  var a = {
    r: 0,
    g: 0,
    b: 0
  }, i = 1, s = null, f = null, c = null, g = !1, y = !1;
  return typeof r == "string" && (r = k1(r)), qi(r) == "object" && (cn(r.r) && cn(r.g) && cn(r.b) ? (a = h1(r.r, r.g, r.b), g = !0, y = String(r.r).substr(-1) === "%" ? "prgb" : "rgb") : cn(r.h) && cn(r.s) && cn(r.v) ? (s = Ur(r.s), f = Ur(r.v), a = g1(r.h, s, f), g = !0, y = "hsv") : cn(r.h) && cn(r.s) && cn(r.l) && (s = Ur(r.s), c = Ur(r.l), a = p1(r.h, s, c), g = !0, y = "hsl"), r.hasOwnProperty("a") && (i = r.a)), i = ql(i), {
    ok: g,
    format: r.format || y,
    r: Math.min(255, Math.max(a.r, 0)),
    g: Math.min(255, Math.max(a.g, 0)),
    b: Math.min(255, Math.max(a.b, 0)),
    a: i
  };
}
function h1(r, a, i) {
  return {
    r: Ge(r, 255) * 255,
    g: Ge(a, 255) * 255,
    b: Ge(i, 255) * 255
  };
}
function Kf(r, a, i) {
  r = Ge(r, 255), a = Ge(a, 255), i = Ge(i, 255);
  var s = Math.max(r, a, i), f = Math.min(r, a, i), c, g, y = (s + f) / 2;
  if (s == f)
    c = g = 0;
  else {
    var S = s - f;
    switch (g = y > 0.5 ? S / (2 - s - f) : S / (s + f), s) {
      case r:
        c = (a - i) / S + (a < i ? 6 : 0);
        break;
      case a:
        c = (i - r) / S + 2;
        break;
      case i:
        c = (r - a) / S + 4;
        break;
    }
    c /= 6;
  }
  return {
    h: c,
    s: g,
    l: y
  };
}
function p1(r, a, i) {
  var s, f, c;
  r = Ge(r, 360), a = Ge(a, 100), i = Ge(i, 100);
  function g(A, R, k) {
    return k < 0 && (k += 1), k > 1 && (k -= 1), k < 1 / 6 ? A + (R - A) * 6 * k : k < 1 / 2 ? R : k < 2 / 3 ? A + (R - A) * (2 / 3 - k) * 6 : A;
  }
  if (a === 0)
    s = f = c = i;
  else {
    var y = i < 0.5 ? i * (1 + a) : i + a - i * a, S = 2 * i - y;
    s = g(S, y, r + 1 / 3), f = g(S, y, r), c = g(S, y, r - 1 / 3);
  }
  return {
    r: s * 255,
    g: f * 255,
    b: c * 255
  };
}
function Xf(r, a, i) {
  r = Ge(r, 255), a = Ge(a, 255), i = Ge(i, 255);
  var s = Math.max(r, a, i), f = Math.min(r, a, i), c, g, y = s, S = s - f;
  if (g = s === 0 ? 0 : S / s, s == f)
    c = 0;
  else {
    switch (s) {
      case r:
        c = (a - i) / S + (a < i ? 6 : 0);
        break;
      case a:
        c = (i - r) / S + 2;
        break;
      case i:
        c = (r - a) / S + 4;
        break;
    }
    c /= 6;
  }
  return {
    h: c,
    s: g,
    v: y
  };
}
function g1(r, a, i) {
  r = Ge(r, 360) * 6, a = Ge(a, 100), i = Ge(i, 100);
  var s = Math.floor(r), f = r - s, c = i * (1 - a), g = i * (1 - f * a), y = i * (1 - (1 - f) * a), S = s % 6, A = [i, g, c, c, y, i][S], R = [y, i, i, g, c, c][S], k = [c, c, y, i, i, g][S];
  return {
    r: A * 255,
    g: R * 255,
    b: k * 255
  };
}
function Zf(r, a, i, s) {
  var f = [Bt(Math.round(r).toString(16)), Bt(Math.round(a).toString(16)), Bt(Math.round(i).toString(16))];
  return s && f[0].charAt(0) == f[0].charAt(1) && f[1].charAt(0) == f[1].charAt(1) && f[2].charAt(0) == f[2].charAt(1) ? f[0].charAt(0) + f[1].charAt(0) + f[2].charAt(0) : f.join("");
}
function m1(r, a, i, s, f) {
  var c = [Bt(Math.round(r).toString(16)), Bt(Math.round(a).toString(16)), Bt(Math.round(i).toString(16)), Bt(Gl(s))];
  return f && c[0].charAt(0) == c[0].charAt(1) && c[1].charAt(0) == c[1].charAt(1) && c[2].charAt(0) == c[2].charAt(1) && c[3].charAt(0) == c[3].charAt(1) ? c[0].charAt(0) + c[1].charAt(0) + c[2].charAt(0) + c[3].charAt(0) : c.join("");
}
function Vf(r, a, i, s) {
  var f = [Bt(Gl(s)), Bt(Math.round(r).toString(16)), Bt(Math.round(a).toString(16)), Bt(Math.round(i).toString(16))];
  return f.join("");
}
q.equals = function(r, a) {
  return !r || !a ? !1 : q(r).toRgbString() == q(a).toRgbString();
};
q.random = function() {
  return q.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function v1(r, a) {
  a = a === 0 ? 0 : a || 10;
  var i = q(r).toHsl();
  return i.s -= a / 100, i.s = Zi(i.s), q(i);
}
function _1(r, a) {
  a = a === 0 ? 0 : a || 10;
  var i = q(r).toHsl();
  return i.s += a / 100, i.s = Zi(i.s), q(i);
}
function y1(r) {
  return q(r).desaturate(100);
}
function b1(r, a) {
  a = a === 0 ? 0 : a || 10;
  var i = q(r).toHsl();
  return i.l += a / 100, i.l = Zi(i.l), q(i);
}
function w1(r, a) {
  a = a === 0 ? 0 : a || 10;
  var i = q(r).toRgb();
  return i.r = Math.max(0, Math.min(255, i.r - Math.round(255 * -(a / 100)))), i.g = Math.max(0, Math.min(255, i.g - Math.round(255 * -(a / 100)))), i.b = Math.max(0, Math.min(255, i.b - Math.round(255 * -(a / 100)))), q(i);
}
function x1(r, a) {
  a = a === 0 ? 0 : a || 10;
  var i = q(r).toHsl();
  return i.l -= a / 100, i.l = Zi(i.l), q(i);
}
function E1(r, a) {
  var i = q(r).toHsl(), s = (i.h + a) % 360;
  return i.h = s < 0 ? 360 + s : s, q(i);
}
function A1(r) {
  var a = q(r).toHsl();
  return a.h = (a.h + 180) % 360, q(a);
}
function Qf(r, a) {
  if (isNaN(a) || a <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var i = q(r).toHsl(), s = [q(r)], f = 360 / a, c = 1; c < a; c++)
    s.push(q({
      h: (i.h + c * f) % 360,
      s: i.s,
      l: i.l
    }));
  return s;
}
function S1(r) {
  var a = q(r).toHsl(), i = a.h;
  return [q(r), q({
    h: (i + 72) % 360,
    s: a.s,
    l: a.l
  }), q({
    h: (i + 216) % 360,
    s: a.s,
    l: a.l
  })];
}
function T1(r, a, i) {
  a = a || 6, i = i || 30;
  var s = q(r).toHsl(), f = 360 / i, c = [q(r)];
  for (s.h = (s.h - (f * a >> 1) + 720) % 360; --a; )
    s.h = (s.h + f) % 360, c.push(q(s));
  return c;
}
function R1(r, a) {
  a = a || 6;
  for (var i = q(r).toHsv(), s = i.h, f = i.s, c = i.v, g = [], y = 1 / a; a--; )
    g.push(q({
      h: s,
      s: f,
      v: c
    })), c = (c + y) % 1;
  return g;
}
q.mix = function(r, a, i) {
  i = i === 0 ? 0 : i || 50;
  var s = q(r).toRgb(), f = q(a).toRgb(), c = i / 100, g = {
    r: (f.r - s.r) * c + s.r,
    g: (f.g - s.g) * c + s.g,
    b: (f.b - s.b) * c + s.b,
    a: (f.a - s.a) * c + s.a
  };
  return q(g);
};
q.readability = function(r, a) {
  var i = q(r), s = q(a);
  return (Math.max(i.getLuminance(), s.getLuminance()) + 0.05) / (Math.min(i.getLuminance(), s.getLuminance()) + 0.05);
};
q.isReadable = function(r, a, i) {
  var s = q.readability(r, a), f, c;
  switch (c = !1, f = M1(i), f.level + f.size) {
    case "AAsmall":
    case "AAAlarge":
      c = s >= 4.5;
      break;
    case "AAlarge":
      c = s >= 3;
      break;
    case "AAAsmall":
      c = s >= 7;
      break;
  }
  return c;
};
q.mostReadable = function(r, a, i) {
  var s = null, f = 0, c, g, y, S;
  i = i || {}, g = i.includeFallbackColors, y = i.level, S = i.size;
  for (var A = 0; A < a.length; A++)
    c = q.readability(r, a[A]), c > f && (f = c, s = q(a[A]));
  return q.isReadable(r, s, {
    level: y,
    size: S
  }) || !g ? s : (i.includeFallbackColors = !1, q.mostReadable(r, ["#fff", "#000"], i));
};
var Mo = q.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, O1 = q.hexNames = C1(Mo);
function C1(r) {
  var a = {};
  for (var i in r)
    r.hasOwnProperty(i) && (a[r[i]] = i);
  return a;
}
function ql(r) {
  return r = parseFloat(r), (isNaN(r) || r < 0 || r > 1) && (r = 1), r;
}
function Ge(r, a) {
  P1(r) && (r = "100%");
  var i = I1(r);
  return r = Math.min(a, Math.max(0, parseFloat(r))), i && (r = parseInt(r * a, 10) / 100), Math.abs(r - a) < 1e-6 ? 1 : r % a / parseFloat(a);
}
function Zi(r) {
  return Math.min(1, Math.max(0, r));
}
function Ct(r) {
  return parseInt(r, 16);
}
function P1(r) {
  return typeof r == "string" && r.indexOf(".") != -1 && parseFloat(r) === 1;
}
function I1(r) {
  return typeof r == "string" && r.indexOf("%") != -1;
}
function Bt(r) {
  return r.length == 1 ? "0" + r : "" + r;
}
function Ur(r) {
  return r <= 1 && (r = r * 100 + "%"), r;
}
function Gl(r) {
  return Math.round(parseFloat(r) * 255).toString(16);
}
function Jf(r) {
  return Ct(r) / 255;
}
var Yt = function() {
  var r = "[-\\+]?\\d+%?", a = "[-\\+]?\\d*\\.\\d+%?", i = "(?:" + a + ")|(?:" + r + ")", s = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?", f = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(i),
    rgb: new RegExp("rgb" + s),
    rgba: new RegExp("rgba" + f),
    hsl: new RegExp("hsl" + s),
    hsla: new RegExp("hsla" + f),
    hsv: new RegExp("hsv" + s),
    hsva: new RegExp("hsva" + f),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function cn(r) {
  return !!Yt.CSS_UNIT.exec(r);
}
function k1(r) {
  r = r.replace(l1, "").replace(c1, "").toLowerCase();
  var a = !1;
  if (Mo[r])
    r = Mo[r], a = !0;
  else if (r == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var i;
  return (i = Yt.rgb.exec(r)) ? {
    r: i[1],
    g: i[2],
    b: i[3]
  } : (i = Yt.rgba.exec(r)) ? {
    r: i[1],
    g: i[2],
    b: i[3],
    a: i[4]
  } : (i = Yt.hsl.exec(r)) ? {
    h: i[1],
    s: i[2],
    l: i[3]
  } : (i = Yt.hsla.exec(r)) ? {
    h: i[1],
    s: i[2],
    l: i[3],
    a: i[4]
  } : (i = Yt.hsv.exec(r)) ? {
    h: i[1],
    s: i[2],
    v: i[3]
  } : (i = Yt.hsva.exec(r)) ? {
    h: i[1],
    s: i[2],
    v: i[3],
    a: i[4]
  } : (i = Yt.hex8.exec(r)) ? {
    r: Ct(i[1]),
    g: Ct(i[2]),
    b: Ct(i[3]),
    a: Jf(i[4]),
    format: a ? "name" : "hex8"
  } : (i = Yt.hex6.exec(r)) ? {
    r: Ct(i[1]),
    g: Ct(i[2]),
    b: Ct(i[3]),
    format: a ? "name" : "hex"
  } : (i = Yt.hex4.exec(r)) ? {
    r: Ct(i[1] + "" + i[1]),
    g: Ct(i[2] + "" + i[2]),
    b: Ct(i[3] + "" + i[3]),
    a: Jf(i[4] + "" + i[4]),
    format: a ? "name" : "hex8"
  } : (i = Yt.hex3.exec(r)) ? {
    r: Ct(i[1] + "" + i[1]),
    g: Ct(i[2] + "" + i[2]),
    b: Ct(i[3] + "" + i[3]),
    format: a ? "name" : "hex"
  } : !1;
}
function M1(r) {
  var a, i;
  return r = r || {
    level: "AA",
    size: "small"
  }, a = (r.level || "AA").toUpperCase(), i = (r.size || "small").toLowerCase(), a !== "AA" && a !== "AAA" && (a = "AA"), i !== "small" && i !== "large" && (i = "small"), {
    level: a,
    size: i
  };
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function N1(r, a, i) {
  return (a = F1(a)) in r ? Object.defineProperty(r, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = i, r;
}
function el(r, a) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    a && (s = s.filter(function(f) {
      return Object.getOwnPropertyDescriptor(r, f).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function L(r) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? el(Object(i), !0).forEach(function(s) {
      N1(r, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : el(Object(i)).forEach(function(s) {
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return r;
}
function L1(r, a) {
  if (typeof r != "object" || !r) return r;
  var i = r[Symbol.toPrimitive];
  if (i !== void 0) {
    var s = i.call(r, a);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(r);
}
function F1(r) {
  var a = L1(r, "string");
  return typeof a == "symbol" ? a : a + "";
}
const tl = () => {
};
let es = {}, Kl = {}, Xl = null, Zl = {
  mark: tl,
  measure: tl
};
try {
  typeof window < "u" && (es = window), typeof document < "u" && (Kl = document), typeof MutationObserver < "u" && (Xl = MutationObserver), typeof performance < "u" && (Zl = performance);
} catch {
}
const {
  userAgent: nl = ""
} = es.navigator || {}, Pn = es, He = Kl, rl = Xl, ji = Zl;
Pn.document;
const pn = !!He.documentElement && !!He.head && typeof He.addEventListener == "function" && typeof He.createElement == "function", Vl = ~nl.indexOf("MSIE") || ~nl.indexOf("Trident/");
var D1 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, W1 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ql = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, U1 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Jl = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], dt = "classic", Vi = "duotone", j1 = "sharp", H1 = "sharp-duotone", ec = [dt, Vi, j1, H1], $1 = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, z1 = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Y1 = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), B1 = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, q1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], il = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, G1 = ["kit"], K1 = {
  kit: {
    "fa-kit": "fak"
  }
}, X1 = ["fak", "fakd"], Z1 = {
  kit: {
    fak: "fa-kit"
  }
}, al = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Hi = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, V1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Q1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], J1 = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, e_ = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, t_ = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, No = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, n_ = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Lo = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...V1, ...n_], r_ = ["solid", "regular", "light", "thin", "duotone", "brands"], tc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], i_ = tc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), a_ = [...Object.keys(t_), ...r_, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Hi.GROUP, Hi.SWAP_OPACITY, Hi.PRIMARY, Hi.SECONDARY].concat(tc.map((r) => "".concat(r, "x"))).concat(i_.map((r) => "w-".concat(r))), o_ = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const dn = "___FONT_AWESOME___", Fo = 16, nc = "fa", rc = "svg-inline--fa", Gn = "data-fa-i2svg", Do = "data-fa-pseudo-element", s_ = "data-fa-pseudo-element-pending", ts = "data-prefix", ns = "data-icon", ol = "fontawesome-i2svg", u_ = "async", f_ = ["HTML", "HEAD", "STYLE", "SCRIPT"], ic = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function qr(r) {
  return new Proxy(r, {
    get(a, i) {
      return i in a ? a[i] : a[dt];
    }
  });
}
const ac = L({}, Ql);
ac[dt] = L(L(L(L({}, {
  "fa-duotone": "duotone"
}), Ql[dt]), il.kit), il["kit-duotone"]);
const l_ = qr(ac), Wo = L({}, B1);
Wo[dt] = L(L(L(L({}, {
  duotone: "fad"
}), Wo[dt]), al.kit), al["kit-duotone"]);
const sl = qr(Wo), Uo = L({}, No);
Uo[dt] = L(L({}, Uo[dt]), Z1.kit);
const rs = qr(Uo), jo = L({}, e_);
jo[dt] = L(L({}, jo[dt]), K1.kit);
qr(jo);
const c_ = D1, oc = "fa-layers-text", d_ = W1, h_ = L({}, $1);
qr(h_);
const p_ = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], yo = U1, g_ = [...G1, ...a_], $r = Pn.FontAwesomeConfig || {};
function m_(r) {
  var a = He.querySelector("script[" + r + "]");
  if (a)
    return a.getAttribute(r);
}
function v_(r) {
  return r === "" ? !0 : r === "false" ? !1 : r === "true" ? !0 : r;
}
He && typeof He.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((a) => {
  let [i, s] = a;
  const f = v_(m_(i));
  f != null && ($r[s] = f);
});
const sc = {
  styleDefault: "solid",
  familyDefault: dt,
  cssPrefix: nc,
  replacementClass: rc,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
$r.familyPrefix && ($r.cssPrefix = $r.familyPrefix);
const mr = L(L({}, sc), $r);
mr.autoReplaceSvg || (mr.observeMutations = !1);
const V = {};
Object.keys(sc).forEach((r) => {
  Object.defineProperty(V, r, {
    enumerable: !0,
    set: function(a) {
      mr[r] = a, zr.forEach((i) => i(V));
    },
    get: function() {
      return mr[r];
    }
  });
});
Object.defineProperty(V, "familyPrefix", {
  enumerable: !0,
  set: function(r) {
    mr.cssPrefix = r, zr.forEach((a) => a(V));
  },
  get: function() {
    return mr.cssPrefix;
  }
});
Pn.FontAwesomeConfig = V;
const zr = [];
function __(r) {
  return zr.push(r), () => {
    zr.splice(zr.indexOf(r), 1);
  };
}
const Cn = Fo, Vt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function y_(r) {
  if (!r || !pn)
    return;
  const a = He.createElement("style");
  a.setAttribute("type", "text/css"), a.innerHTML = r;
  const i = He.head.childNodes;
  let s = null;
  for (let f = i.length - 1; f > -1; f--) {
    const c = i[f], g = (c.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(g) > -1 && (s = c);
  }
  return He.head.insertBefore(a, s), r;
}
const b_ = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Yr() {
  let r = 12, a = "";
  for (; r-- > 0; )
    a += b_[Math.random() * 62 | 0];
  return a;
}
function vr(r) {
  const a = [];
  for (let i = (r || []).length >>> 0; i--; )
    a[i] = r[i];
  return a;
}
function is(r) {
  return r.classList ? vr(r.classList) : (r.getAttribute("class") || "").split(" ").filter((a) => a);
}
function uc(r) {
  return "".concat(r).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function w_(r) {
  return Object.keys(r || {}).reduce((a, i) => a + "".concat(i, '="').concat(uc(r[i]), '" '), "").trim();
}
function Qi(r) {
  return Object.keys(r || {}).reduce((a, i) => a + "".concat(i, ": ").concat(r[i].trim(), ";"), "");
}
function as(r) {
  return r.size !== Vt.size || r.x !== Vt.x || r.y !== Vt.y || r.rotate !== Vt.rotate || r.flipX || r.flipY;
}
function x_(r) {
  let {
    transform: a,
    containerWidth: i,
    iconWidth: s
  } = r;
  const f = {
    transform: "translate(".concat(i / 2, " 256)")
  }, c = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), g = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), y = "rotate(".concat(a.rotate, " 0 0)"), S = {
    transform: "".concat(c, " ").concat(g, " ").concat(y)
  }, A = {
    transform: "translate(".concat(s / 2 * -1, " -256)")
  };
  return {
    outer: f,
    inner: S,
    path: A
  };
}
function E_(r) {
  let {
    transform: a,
    width: i = Fo,
    height: s = Fo,
    startCentered: f = !1
  } = r, c = "";
  return f && Vl ? c += "translate(".concat(a.x / Cn - i / 2, "em, ").concat(a.y / Cn - s / 2, "em) ") : f ? c += "translate(calc(-50% + ".concat(a.x / Cn, "em), calc(-50% + ").concat(a.y / Cn, "em)) ") : c += "translate(".concat(a.x / Cn, "em, ").concat(a.y / Cn, "em) "), c += "scale(".concat(a.size / Cn * (a.flipX ? -1 : 1), ", ").concat(a.size / Cn * (a.flipY ? -1 : 1), ") "), c += "rotate(".concat(a.rotate, "deg) "), c;
}
var A_ = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function fc() {
  const r = nc, a = rc, i = V.cssPrefix, s = V.replacementClass;
  let f = A_;
  if (i !== r || s !== a) {
    const c = new RegExp("\\.".concat(r, "\\-"), "g"), g = new RegExp("\\--".concat(r, "\\-"), "g"), y = new RegExp("\\.".concat(a), "g");
    f = f.replace(c, ".".concat(i, "-")).replace(g, "--".concat(i, "-")).replace(y, ".".concat(s));
  }
  return f;
}
let ul = !1;
function bo() {
  V.autoAddCss && !ul && (y_(fc()), ul = !0);
}
var S_ = {
  mixout() {
    return {
      dom: {
        css: fc,
        insertCss: bo
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        bo();
      },
      beforeI2svg() {
        bo();
      }
    };
  }
};
const hn = Pn || {};
hn[dn] || (hn[dn] = {});
hn[dn].styles || (hn[dn].styles = {});
hn[dn].hooks || (hn[dn].hooks = {});
hn[dn].shims || (hn[dn].shims = []);
var Qt = hn[dn];
const lc = [], cc = function() {
  He.removeEventListener("DOMContentLoaded", cc), Gi = 1, lc.map((r) => r());
};
let Gi = !1;
pn && (Gi = (He.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(He.readyState), Gi || He.addEventListener("DOMContentLoaded", cc));
function T_(r) {
  pn && (Gi ? setTimeout(r, 0) : lc.push(r));
}
function Gr(r) {
  const {
    tag: a,
    attributes: i = {},
    children: s = []
  } = r;
  return typeof r == "string" ? uc(r) : "<".concat(a, " ").concat(w_(i), ">").concat(s.map(Gr).join(""), "</").concat(a, ">");
}
function fl(r, a, i) {
  if (r && r[a] && r[a][i])
    return {
      prefix: a,
      iconName: i,
      icon: r[a][i]
    };
}
var wo = function(a, i, s, f) {
  var c = Object.keys(a), g = c.length, y = i, S, A, R;
  for (s === void 0 ? (S = 1, R = a[c[0]]) : (S = 0, R = s); S < g; S++)
    A = c[S], R = y(R, a[A], A, a);
  return R;
};
function R_(r) {
  const a = [];
  let i = 0;
  const s = r.length;
  for (; i < s; ) {
    const f = r.charCodeAt(i++);
    if (f >= 55296 && f <= 56319 && i < s) {
      const c = r.charCodeAt(i++);
      (c & 64512) == 56320 ? a.push(((f & 1023) << 10) + (c & 1023) + 65536) : (a.push(f), i--);
    } else
      a.push(f);
  }
  return a;
}
function Ho(r) {
  const a = R_(r);
  return a.length === 1 ? a[0].toString(16) : null;
}
function O_(r, a) {
  const i = r.length;
  let s = r.charCodeAt(a), f;
  return s >= 55296 && s <= 56319 && i > a + 1 && (f = r.charCodeAt(a + 1), f >= 56320 && f <= 57343) ? (s - 55296) * 1024 + f - 56320 + 65536 : s;
}
function ll(r) {
  return Object.keys(r).reduce((a, i) => {
    const s = r[i];
    return !!s.icon ? a[s.iconName] = s.icon : a[i] = s, a;
  }, {});
}
function $o(r, a) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: s = !1
  } = i, f = ll(a);
  typeof Qt.hooks.addPack == "function" && !s ? Qt.hooks.addPack(r, ll(a)) : Qt.styles[r] = L(L({}, Qt.styles[r] || {}), f), r === "fas" && $o("fa", a);
}
const {
  styles: Br,
  shims: C_
} = Qt, dc = Object.keys(rs), P_ = dc.reduce((r, a) => (r[a] = Object.keys(rs[a]), r), {});
let os = null, hc = {}, pc = {}, gc = {}, mc = {}, vc = {};
function I_(r) {
  return ~g_.indexOf(r);
}
function k_(r, a) {
  const i = a.split("-"), s = i[0], f = i.slice(1).join("-");
  return s === r && f !== "" && !I_(f) ? f : null;
}
const _c = () => {
  const r = (s) => wo(Br, (f, c, g) => (f[g] = wo(c, s, {}), f), {});
  hc = r((s, f, c) => (f[3] && (s[f[3]] = c), f[2] && f[2].filter((y) => typeof y == "number").forEach((y) => {
    s[y.toString(16)] = c;
  }), s)), pc = r((s, f, c) => (s[c] = c, f[2] && f[2].filter((y) => typeof y == "string").forEach((y) => {
    s[y] = c;
  }), s)), vc = r((s, f, c) => {
    const g = f[2];
    return s[c] = c, g.forEach((y) => {
      s[y] = c;
    }), s;
  });
  const a = "far" in Br || V.autoFetchSvg, i = wo(C_, (s, f) => {
    const c = f[0];
    let g = f[1];
    const y = f[2];
    return g === "far" && !a && (g = "fas"), typeof c == "string" && (s.names[c] = {
      prefix: g,
      iconName: y
    }), typeof c == "number" && (s.unicodes[c.toString(16)] = {
      prefix: g,
      iconName: y
    }), s;
  }, {
    names: {},
    unicodes: {}
  });
  gc = i.names, mc = i.unicodes, os = Ji(V.styleDefault, {
    family: V.familyDefault
  });
};
__((r) => {
  os = Ji(r.styleDefault, {
    family: V.familyDefault
  });
});
_c();
function ss(r, a) {
  return (hc[r] || {})[a];
}
function M_(r, a) {
  return (pc[r] || {})[a];
}
function qn(r, a) {
  return (vc[r] || {})[a];
}
function yc(r) {
  return gc[r] || {
    prefix: null,
    iconName: null
  };
}
function N_(r) {
  const a = mc[r], i = ss("fas", r);
  return a || (i ? {
    prefix: "fas",
    iconName: i
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function In() {
  return os;
}
const bc = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function L_(r) {
  let a = dt;
  const i = dc.reduce((s, f) => (s[f] = "".concat(V.cssPrefix, "-").concat(f), s), {});
  return ec.forEach((s) => {
    (r.includes(i[s]) || r.some((f) => P_[s].includes(f))) && (a = s);
  }), a;
}
function Ji(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: i = dt
  } = a, s = l_[i][r];
  if (i === Vi && !r)
    return "fad";
  const f = sl[i][r] || sl[i][s], c = r in Qt.styles ? r : null;
  return f || c || null;
}
function F_(r) {
  let a = [], i = null;
  return r.forEach((s) => {
    const f = k_(V.cssPrefix, s);
    f ? i = f : s && a.push(s);
  }), {
    iconName: i,
    rest: a
  };
}
function cl(r) {
  return r.sort().filter((a, i, s) => s.indexOf(a) === i);
}
function ea(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: i = !1
  } = a;
  let s = null;
  const f = Lo.concat(Q1), c = cl(r.filter((k) => f.includes(k))), g = cl(r.filter((k) => !Lo.includes(k))), y = c.filter((k) => (s = k, !Jl.includes(k))), [S = null] = y, A = L_(c), R = L(L({}, F_(g)), {}, {
    prefix: Ji(S, {
      family: A
    })
  });
  return L(L(L({}, R), j_({
    values: r,
    family: A,
    styles: Br,
    config: V,
    canonical: R,
    givenPrefix: s
  })), D_(i, s, R));
}
function D_(r, a, i) {
  let {
    prefix: s,
    iconName: f
  } = i;
  if (r || !s || !f)
    return {
      prefix: s,
      iconName: f
    };
  const c = a === "fa" ? yc(f) : {}, g = qn(s, f);
  return f = c.iconName || g || f, s = c.prefix || s, s === "far" && !Br.far && Br.fas && !V.autoFetchSvg && (s = "fas"), {
    prefix: s,
    iconName: f
  };
}
const W_ = ec.filter((r) => r !== dt || r !== Vi), U_ = Object.keys(No).filter((r) => r !== dt).map((r) => Object.keys(No[r])).flat();
function j_(r) {
  const {
    values: a,
    family: i,
    canonical: s,
    givenPrefix: f = "",
    styles: c = {},
    config: g = {}
  } = r, y = i === Vi, S = a.includes("fa-duotone") || a.includes("fad"), A = g.familyDefault === "duotone", R = s.prefix === "fad" || s.prefix === "fa-duotone";
  if (!y && (S || A || R) && (s.prefix = "fad"), (a.includes("fa-brands") || a.includes("fab")) && (s.prefix = "fab"), !s.prefix && W_.includes(i) && (Object.keys(c).find((F) => U_.includes(F)) || g.autoFetchSvg)) {
    const F = Y1.get(i).defaultShortPrefixId;
    s.prefix = F, s.iconName = qn(s.prefix, s.iconName) || s.iconName;
  }
  return (s.prefix === "fa" || f === "fa") && (s.prefix = In() || "fas"), s;
}
class H_ {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    const f = i.reduce(this._pullDefinitions, {});
    Object.keys(f).forEach((c) => {
      this.definitions[c] = L(L({}, this.definitions[c] || {}), f[c]), $o(c, f[c]);
      const g = rs[dt][c];
      g && $o(g, f[c]), _c();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(a, i) {
    const s = i.prefix && i.iconName && i.icon ? {
      0: i
    } : i;
    return Object.keys(s).map((f) => {
      const {
        prefix: c,
        iconName: g,
        icon: y
      } = s[f], S = y[2];
      a[c] || (a[c] = {}), S.length > 0 && S.forEach((A) => {
        typeof A == "string" && (a[c][A] = y);
      }), a[c][g] = y;
    }), a;
  }
}
let dl = [], hr = {};
const gr = {}, $_ = Object.keys(gr);
function z_(r, a) {
  let {
    mixoutsTo: i
  } = a;
  return dl = r, hr = {}, Object.keys(gr).forEach((s) => {
    $_.indexOf(s) === -1 && delete gr[s];
  }), dl.forEach((s) => {
    const f = s.mixout ? s.mixout() : {};
    if (Object.keys(f).forEach((c) => {
      typeof f[c] == "function" && (i[c] = f[c]), typeof f[c] == "object" && Object.keys(f[c]).forEach((g) => {
        i[c] || (i[c] = {}), i[c][g] = f[c][g];
      });
    }), s.hooks) {
      const c = s.hooks();
      Object.keys(c).forEach((g) => {
        hr[g] || (hr[g] = []), hr[g].push(c[g]);
      });
    }
    s.provides && s.provides(gr);
  }), i;
}
function zo(r, a) {
  for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), f = 2; f < i; f++)
    s[f - 2] = arguments[f];
  return (hr[r] || []).forEach((g) => {
    a = g.apply(null, [a, ...s]);
  }), a;
}
function Kn(r) {
  for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
    i[s - 1] = arguments[s];
  (hr[r] || []).forEach((c) => {
    c.apply(null, i);
  });
}
function kn() {
  const r = arguments[0], a = Array.prototype.slice.call(arguments, 1);
  return gr[r] ? gr[r].apply(null, a) : void 0;
}
function Yo(r) {
  r.prefix === "fa" && (r.prefix = "fas");
  let {
    iconName: a
  } = r;
  const i = r.prefix || In();
  if (a)
    return a = qn(i, a) || a, fl(wc.definitions, i, a) || fl(Qt.styles, i, a);
}
const wc = new H_(), Y_ = () => {
  V.autoReplaceSvg = !1, V.observeMutations = !1, Kn("noAuto");
}, B_ = {
  i2svg: function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return pn ? (Kn("beforeI2svg", r), kn("pseudoElements2svg", r), kn("i2svg", r)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: a
    } = r;
    V.autoReplaceSvg === !1 && (V.autoReplaceSvg = !0), V.observeMutations = !0, T_(() => {
      G_({
        autoReplaceSvgRoot: a
      }), Kn("watch", r);
    });
  }
}, q_ = {
  icon: (r) => {
    if (r === null)
      return null;
    if (typeof r == "object" && r.prefix && r.iconName)
      return {
        prefix: r.prefix,
        iconName: qn(r.prefix, r.iconName) || r.iconName
      };
    if (Array.isArray(r) && r.length === 2) {
      const a = r[1].indexOf("fa-") === 0 ? r[1].slice(3) : r[1], i = Ji(r[0]);
      return {
        prefix: i,
        iconName: qn(i, a) || a
      };
    }
    if (typeof r == "string" && (r.indexOf("".concat(V.cssPrefix, "-")) > -1 || r.match(c_))) {
      const a = ea(r.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || In(),
        iconName: qn(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof r == "string") {
      const a = In();
      return {
        prefix: a,
        iconName: qn(a, r) || r
      };
    }
  }
}, Pt = {
  noAuto: Y_,
  config: V,
  dom: B_,
  parse: q_,
  library: wc,
  findIconDefinition: Yo,
  toHtml: Gr
}, G_ = function() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: a = He
  } = r;
  (Object.keys(Qt.styles).length > 0 || V.autoFetchSvg) && pn && V.autoReplaceSvg && Pt.dom.i2svg({
    node: a
  });
};
function ta(r, a) {
  return Object.defineProperty(r, "abstract", {
    get: a
  }), Object.defineProperty(r, "html", {
    get: function() {
      return r.abstract.map((i) => Gr(i));
    }
  }), Object.defineProperty(r, "node", {
    get: function() {
      if (!pn) return;
      const i = He.createElement("div");
      return i.innerHTML = r.html, i.children;
    }
  }), r;
}
function K_(r) {
  let {
    children: a,
    main: i,
    mask: s,
    attributes: f,
    styles: c,
    transform: g
  } = r;
  if (as(g) && i.found && !s.found) {
    const {
      width: y,
      height: S
    } = i, A = {
      x: y / S / 2,
      y: 0.5
    };
    f.style = Qi(L(L({}, c), {}, {
      "transform-origin": "".concat(A.x + g.x / 16, "em ").concat(A.y + g.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: f,
    children: a
  }];
}
function X_(r) {
  let {
    prefix: a,
    iconName: i,
    children: s,
    attributes: f,
    symbol: c
  } = r;
  const g = c === !0 ? "".concat(a, "-").concat(V.cssPrefix, "-").concat(i) : c;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: L(L({}, f), {}, {
        id: g
      }),
      children: s
    }]
  }];
}
function us(r) {
  const {
    icons: {
      main: a,
      mask: i
    },
    prefix: s,
    iconName: f,
    transform: c,
    symbol: g,
    title: y,
    maskId: S,
    titleId: A,
    extra: R,
    watchable: k = !1
  } = r, {
    width: F,
    height: K
  } = i.found ? i : a, ee = X1.includes(s), ne = [V.replacementClass, f ? "".concat(V.cssPrefix, "-").concat(f) : ""].filter((O) => R.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(R.classes).join(" ");
  let G = {
    children: [],
    attributes: L(L({}, R.attributes), {}, {
      "data-prefix": s,
      "data-icon": f,
      class: ne,
      role: R.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(F, " ").concat(K)
    })
  };
  const se = ee && !~R.classes.indexOf("fa-fw") ? {
    width: "".concat(F / K * 16 * 0.0625, "em")
  } : {};
  k && (G.attributes[Gn] = ""), y && (G.children.push({
    tag: "title",
    attributes: {
      id: G.attributes["aria-labelledby"] || "title-".concat(A || Yr())
    },
    children: [y]
  }), delete G.attributes.title);
  const xe = L(L({}, G), {}, {
    prefix: s,
    iconName: f,
    main: a,
    mask: i,
    maskId: S,
    transform: c,
    symbol: g,
    styles: L(L({}, se), R.styles)
  }), {
    children: Z,
    attributes: ce
  } = i.found && a.found ? kn("generateAbstractMask", xe) || {
    children: [],
    attributes: {}
  } : kn("generateAbstractIcon", xe) || {
    children: [],
    attributes: {}
  };
  return xe.children = Z, xe.attributes = ce, g ? X_(xe) : K_(xe);
}
function hl(r) {
  const {
    content: a,
    width: i,
    height: s,
    transform: f,
    title: c,
    extra: g,
    watchable: y = !1
  } = r, S = L(L(L({}, g.attributes), c ? {
    title: c
  } : {}), {}, {
    class: g.classes.join(" ")
  });
  y && (S[Gn] = "");
  const A = L({}, g.styles);
  as(f) && (A.transform = E_({
    transform: f,
    startCentered: !0,
    width: i,
    height: s
  }), A["-webkit-transform"] = A.transform);
  const R = Qi(A);
  R.length > 0 && (S.style = R);
  const k = [];
  return k.push({
    tag: "span",
    attributes: S,
    children: [a]
  }), c && k.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [c]
  }), k;
}
function Z_(r) {
  const {
    content: a,
    title: i,
    extra: s
  } = r, f = L(L(L({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  }), c = Qi(s.styles);
  c.length > 0 && (f.style = c);
  const g = [];
  return g.push({
    tag: "span",
    attributes: f,
    children: [a]
  }), i && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), g;
}
const {
  styles: xo
} = Qt;
function Bo(r) {
  const a = r[0], i = r[1], [s] = r.slice(4);
  let f = null;
  return Array.isArray(s) ? f = {
    tag: "g",
    attributes: {
      class: "".concat(V.cssPrefix, "-").concat(yo.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(yo.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(yo.PRIMARY),
        fill: "currentColor",
        d: s[1]
      }
    }]
  } : f = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: s
    }
  }, {
    found: !0,
    width: a,
    height: i,
    icon: f
  };
}
const V_ = {
  found: !1,
  width: 512,
  height: 512
};
function Q_(r, a) {
  !ic && !V.showMissingIcons && r && console.error('Icon with name "'.concat(r, '" and prefix "').concat(a, '" is missing.'));
}
function qo(r, a) {
  let i = a;
  return a === "fa" && V.styleDefault !== null && (a = In()), new Promise((s, f) => {
    if (i === "fa") {
      const c = yc(r) || {};
      r = c.iconName || r, a = c.prefix || a;
    }
    if (r && a && xo[a] && xo[a][r]) {
      const c = xo[a][r];
      return s(Bo(c));
    }
    Q_(r, a), s(L(L({}, V_), {}, {
      icon: V.showMissingIcons && r ? kn("missingIconAbstract") || {} : {}
    }));
  });
}
const pl = () => {
}, Go = V.measurePerformance && ji && ji.mark && ji.measure ? ji : {
  mark: pl,
  measure: pl
}, jr = 'FA "6.7.2"', J_ = (r) => (Go.mark("".concat(jr, " ").concat(r, " begins")), () => xc(r)), xc = (r) => {
  Go.mark("".concat(jr, " ").concat(r, " ends")), Go.measure("".concat(jr, " ").concat(r), "".concat(jr, " ").concat(r, " begins"), "".concat(jr, " ").concat(r, " ends"));
};
var fs = {
  begin: J_,
  end: xc
};
const Yi = () => {
};
function gl(r) {
  return typeof (r.getAttribute ? r.getAttribute(Gn) : null) == "string";
}
function ey(r) {
  const a = r.getAttribute ? r.getAttribute(ts) : null, i = r.getAttribute ? r.getAttribute(ns) : null;
  return a && i;
}
function ty(r) {
  return r && r.classList && r.classList.contains && r.classList.contains(V.replacementClass);
}
function ny() {
  return V.autoReplaceSvg === !0 ? Bi.replace : Bi[V.autoReplaceSvg] || Bi.replace;
}
function ry(r) {
  return He.createElementNS("http://www.w3.org/2000/svg", r);
}
function iy(r) {
  return He.createElement(r);
}
function Ec(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: i = r.tag === "svg" ? ry : iy
  } = a;
  if (typeof r == "string")
    return He.createTextNode(r);
  const s = i(r.tag);
  return Object.keys(r.attributes || []).forEach(function(c) {
    s.setAttribute(c, r.attributes[c]);
  }), (r.children || []).forEach(function(c) {
    s.appendChild(Ec(c, {
      ceFn: i
    }));
  }), s;
}
function ay(r) {
  let a = " ".concat(r.outerHTML, " ");
  return a = "".concat(a, "Font Awesome fontawesome.com "), a;
}
const Bi = {
  replace: function(r) {
    const a = r[0];
    if (a.parentNode)
      if (r[1].forEach((i) => {
        a.parentNode.insertBefore(Ec(i), a);
      }), a.getAttribute(Gn) === null && V.keepOriginalSource) {
        let i = He.createComment(ay(a));
        a.parentNode.replaceChild(i, a);
      } else
        a.remove();
  },
  nest: function(r) {
    const a = r[0], i = r[1];
    if (~is(a).indexOf(V.replacementClass))
      return Bi.replace(r);
    const s = new RegExp("".concat(V.cssPrefix, "-.*"));
    if (delete i[0].attributes.id, i[0].attributes.class) {
      const c = i[0].attributes.class.split(" ").reduce((g, y) => (y === V.replacementClass || y.match(s) ? g.toSvg.push(y) : g.toNode.push(y), g), {
        toNode: [],
        toSvg: []
      });
      i[0].attributes.class = c.toSvg.join(" "), c.toNode.length === 0 ? a.removeAttribute("class") : a.setAttribute("class", c.toNode.join(" "));
    }
    const f = i.map((c) => Gr(c)).join(`
`);
    a.setAttribute(Gn, ""), a.innerHTML = f;
  }
};
function ml(r) {
  r();
}
function Ac(r, a) {
  const i = typeof a == "function" ? a : Yi;
  if (r.length === 0)
    i();
  else {
    let s = ml;
    V.mutateApproach === u_ && (s = Pn.requestAnimationFrame || ml), s(() => {
      const f = ny(), c = fs.begin("mutate");
      r.map(f), c(), i();
    });
  }
}
let ls = !1;
function Sc() {
  ls = !0;
}
function Ko() {
  ls = !1;
}
let Ki = null;
function vl(r) {
  if (!rl || !V.observeMutations)
    return;
  const {
    treeCallback: a = Yi,
    nodeCallback: i = Yi,
    pseudoElementsCallback: s = Yi,
    observeMutationsRoot: f = He
  } = r;
  Ki = new rl((c) => {
    if (ls) return;
    const g = In();
    vr(c).forEach((y) => {
      if (y.type === "childList" && y.addedNodes.length > 0 && !gl(y.addedNodes[0]) && (V.searchPseudoElements && s(y.target), a(y.target)), y.type === "attributes" && y.target.parentNode && V.searchPseudoElements && s(y.target.parentNode), y.type === "attributes" && gl(y.target) && ~p_.indexOf(y.attributeName))
        if (y.attributeName === "class" && ey(y.target)) {
          const {
            prefix: S,
            iconName: A
          } = ea(is(y.target));
          y.target.setAttribute(ts, S || g), A && y.target.setAttribute(ns, A);
        } else ty(y.target) && i(y.target);
    });
  }), pn && Ki.observe(f, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function oy() {
  Ki && Ki.disconnect();
}
function sy(r) {
  const a = r.getAttribute("style");
  let i = [];
  return a && (i = a.split(";").reduce((s, f) => {
    const c = f.split(":"), g = c[0], y = c.slice(1);
    return g && y.length > 0 && (s[g] = y.join(":").trim()), s;
  }, {})), i;
}
function uy(r) {
  const a = r.getAttribute("data-prefix"), i = r.getAttribute("data-icon"), s = r.innerText !== void 0 ? r.innerText.trim() : "";
  let f = ea(is(r));
  return f.prefix || (f.prefix = In()), a && i && (f.prefix = a, f.iconName = i), f.iconName && f.prefix || (f.prefix && s.length > 0 && (f.iconName = M_(f.prefix, r.innerText) || ss(f.prefix, Ho(r.innerText))), !f.iconName && V.autoFetchSvg && r.firstChild && r.firstChild.nodeType === Node.TEXT_NODE && (f.iconName = r.firstChild.data)), f;
}
function fy(r) {
  const a = vr(r.attributes).reduce((f, c) => (f.name !== "class" && f.name !== "style" && (f[c.name] = c.value), f), {}), i = r.getAttribute("title"), s = r.getAttribute("data-fa-title-id");
  return V.autoA11y && (i ? a["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(s || Yr()) : (a["aria-hidden"] = "true", a.focusable = "false")), a;
}
function ly() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Vt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function _l(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: i,
    prefix: s,
    rest: f
  } = uy(r), c = fy(r), g = zo("parseNodeAttributes", {}, r);
  let y = a.styleParser ? sy(r) : [];
  return L({
    iconName: i,
    title: r.getAttribute("title"),
    titleId: r.getAttribute("data-fa-title-id"),
    prefix: s,
    transform: Vt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: f,
      styles: y,
      attributes: c
    }
  }, g);
}
const {
  styles: cy
} = Qt;
function Tc(r) {
  const a = V.autoReplaceSvg === "nest" ? _l(r, {
    styleParser: !1
  }) : _l(r);
  return ~a.extra.classes.indexOf(oc) ? kn("generateLayersText", r, a) : kn("generateSvgReplacementMutation", r, a);
}
function dy() {
  return [...q1, ...Lo];
}
function yl(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!pn) return Promise.resolve();
  const i = He.documentElement.classList, s = (R) => i.add("".concat(ol, "-").concat(R)), f = (R) => i.remove("".concat(ol, "-").concat(R)), c = V.autoFetchSvg ? dy() : Jl.concat(Object.keys(cy));
  c.includes("fa") || c.push("fa");
  const g = [".".concat(oc, ":not([").concat(Gn, "])")].concat(c.map((R) => ".".concat(R, ":not([").concat(Gn, "])"))).join(", ");
  if (g.length === 0)
    return Promise.resolve();
  let y = [];
  try {
    y = vr(r.querySelectorAll(g));
  } catch {
  }
  if (y.length > 0)
    s("pending"), f("complete");
  else
    return Promise.resolve();
  const S = fs.begin("onTree"), A = y.reduce((R, k) => {
    try {
      const F = Tc(k);
      F && R.push(F);
    } catch (F) {
      ic || F.name === "MissingIcon" && console.error(F);
    }
    return R;
  }, []);
  return new Promise((R, k) => {
    Promise.all(A).then((F) => {
      Ac(F, () => {
        s("active"), s("complete"), f("pending"), typeof a == "function" && a(), S(), R();
      });
    }).catch((F) => {
      S(), k(F);
    });
  });
}
function hy(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Tc(r).then((i) => {
    i && Ac([i], a);
  });
}
function py(r) {
  return function(a) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = (a || {}).icon ? a : Yo(a || {});
    let {
      mask: f
    } = i;
    return f && (f = (f || {}).icon ? f : Yo(f || {})), r(s, L(L({}, i), {}, {
      mask: f
    }));
  };
}
const gy = function(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: i = Vt,
    symbol: s = !1,
    mask: f = null,
    maskId: c = null,
    title: g = null,
    titleId: y = null,
    classes: S = [],
    attributes: A = {},
    styles: R = {}
  } = a;
  if (!r) return;
  const {
    prefix: k,
    iconName: F,
    icon: K
  } = r;
  return ta(L({
    type: "icon"
  }, r), () => (Kn("beforeDOMElementCreation", {
    iconDefinition: r,
    params: a
  }), V.autoA11y && (g ? A["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(y || Yr()) : (A["aria-hidden"] = "true", A.focusable = "false")), us({
    icons: {
      main: Bo(K),
      mask: f ? Bo(f.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: k,
    iconName: F,
    transform: L(L({}, Vt), i),
    symbol: s,
    title: g,
    maskId: c,
    titleId: y,
    extra: {
      attributes: A,
      styles: R,
      classes: S
    }
  })));
};
var my = {
  mixout() {
    return {
      icon: py(gy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(r) {
        return r.treeCallback = yl, r.nodeCallback = hy, r;
      }
    };
  },
  provides(r) {
    r.i2svg = function(a) {
      const {
        node: i = He,
        callback: s = () => {
        }
      } = a;
      return yl(i, s);
    }, r.generateSvgReplacementMutation = function(a, i) {
      const {
        iconName: s,
        title: f,
        titleId: c,
        prefix: g,
        transform: y,
        symbol: S,
        mask: A,
        maskId: R,
        extra: k
      } = i;
      return new Promise((F, K) => {
        Promise.all([qo(s, g), A.iconName ? qo(A.iconName, A.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((ee) => {
          let [ne, G] = ee;
          F([a, us({
            icons: {
              main: ne,
              mask: G
            },
            prefix: g,
            iconName: s,
            transform: y,
            symbol: S,
            maskId: R,
            title: f,
            titleId: c,
            extra: k,
            watchable: !0
          })]);
        }).catch(K);
      });
    }, r.generateAbstractIcon = function(a) {
      let {
        children: i,
        attributes: s,
        main: f,
        transform: c,
        styles: g
      } = a;
      const y = Qi(g);
      y.length > 0 && (s.style = y);
      let S;
      return as(c) && (S = kn("generateAbstractTransformGrouping", {
        main: f,
        transform: c,
        containerWidth: f.width,
        iconWidth: f.width
      })), i.push(S || f.icon), {
        children: i,
        attributes: s
      };
    };
  }
}, vy = {
  mixout() {
    return {
      layer(r) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: i = []
        } = a;
        return ta({
          type: "layer"
        }, () => {
          Kn("beforeDOMElementCreation", {
            assembler: r,
            params: a
          });
          let s = [];
          return r((f) => {
            Array.isArray(f) ? f.map((c) => {
              s = s.concat(c.abstract);
            }) : s = s.concat(f.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(V.cssPrefix, "-layers"), ...i].join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, _y = {
  mixout() {
    return {
      counter(r) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: i = null,
          classes: s = [],
          attributes: f = {},
          styles: c = {}
        } = a;
        return ta({
          type: "counter",
          content: r
        }, () => (Kn("beforeDOMElementCreation", {
          content: r,
          params: a
        }), Z_({
          content: r.toString(),
          title: i,
          extra: {
            attributes: f,
            styles: c,
            classes: ["".concat(V.cssPrefix, "-layers-counter"), ...s]
          }
        })));
      }
    };
  }
}, yy = {
  mixout() {
    return {
      text(r) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: i = Vt,
          title: s = null,
          classes: f = [],
          attributes: c = {},
          styles: g = {}
        } = a;
        return ta({
          type: "text",
          content: r
        }, () => (Kn("beforeDOMElementCreation", {
          content: r,
          params: a
        }), hl({
          content: r,
          transform: L(L({}, Vt), i),
          title: s,
          extra: {
            attributes: c,
            styles: g,
            classes: ["".concat(V.cssPrefix, "-layers-text"), ...f]
          }
        })));
      }
    };
  },
  provides(r) {
    r.generateLayersText = function(a, i) {
      const {
        title: s,
        transform: f,
        extra: c
      } = i;
      let g = null, y = null;
      if (Vl) {
        const S = parseInt(getComputedStyle(a).fontSize, 10), A = a.getBoundingClientRect();
        g = A.width / S, y = A.height / S;
      }
      return V.autoA11y && !s && (c.attributes["aria-hidden"] = "true"), Promise.resolve([a, hl({
        content: a.innerHTML,
        width: g,
        height: y,
        transform: f,
        title: s,
        extra: c,
        watchable: !0
      })]);
    };
  }
};
const by = new RegExp('"', "ug"), bl = [1105920, 1112319], wl = L(L(L(L({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), z1), o_), J1), Xo = Object.keys(wl).reduce((r, a) => (r[a.toLowerCase()] = wl[a], r), {}), wy = Object.keys(Xo).reduce((r, a) => {
  const i = Xo[a];
  return r[a] = i[900] || [...Object.entries(i)][0][1], r;
}, {});
function xy(r) {
  const a = r.replace(by, ""), i = O_(a, 0), s = i >= bl[0] && i <= bl[1], f = a.length === 2 ? a[0] === a[1] : !1;
  return {
    value: Ho(f ? a[0] : a),
    isSecondary: s || f
  };
}
function Ey(r, a) {
  const i = r.replace(/^['"]|['"]$/g, "").toLowerCase(), s = parseInt(a), f = isNaN(s) ? "normal" : s;
  return (Xo[i] || {})[f] || wy[i];
}
function xl(r, a) {
  const i = "".concat(s_).concat(a.replace(":", "-"));
  return new Promise((s, f) => {
    if (r.getAttribute(i) !== null)
      return s();
    const g = vr(r.children).filter((F) => F.getAttribute(Do) === a)[0], y = Pn.getComputedStyle(r, a), S = y.getPropertyValue("font-family"), A = S.match(d_), R = y.getPropertyValue("font-weight"), k = y.getPropertyValue("content");
    if (g && !A)
      return r.removeChild(g), s();
    if (A && k !== "none" && k !== "") {
      const F = y.getPropertyValue("content");
      let K = Ey(S, R);
      const {
        value: ee,
        isSecondary: ne
      } = xy(F), G = A[0].startsWith("FontAwesome");
      let se = ss(K, ee), xe = se;
      if (G) {
        const Z = N_(ee);
        Z.iconName && Z.prefix && (se = Z.iconName, K = Z.prefix);
      }
      if (se && !ne && (!g || g.getAttribute(ts) !== K || g.getAttribute(ns) !== xe)) {
        r.setAttribute(i, xe), g && r.removeChild(g);
        const Z = ly(), {
          extra: ce
        } = Z;
        ce.attributes[Do] = a, qo(se, K).then((O) => {
          const Ue = us(L(L({}, Z), {}, {
            icons: {
              main: O,
              mask: bc()
            },
            prefix: K,
            iconName: xe,
            extra: ce,
            watchable: !0
          })), Le = He.createElementNS("http://www.w3.org/2000/svg", "svg");
          a === "::before" ? r.insertBefore(Le, r.firstChild) : r.appendChild(Le), Le.outerHTML = Ue.map((ue) => Gr(ue)).join(`
`), r.removeAttribute(i), s();
        }).catch(f);
      } else
        s();
    } else
      s();
  });
}
function Ay(r) {
  return Promise.all([xl(r, "::before"), xl(r, "::after")]);
}
function Sy(r) {
  return r.parentNode !== document.head && !~f_.indexOf(r.tagName.toUpperCase()) && !r.getAttribute(Do) && (!r.parentNode || r.parentNode.tagName !== "svg");
}
function El(r) {
  if (pn)
    return new Promise((a, i) => {
      const s = vr(r.querySelectorAll("*")).filter(Sy).map(Ay), f = fs.begin("searchPseudoElements");
      Sc(), Promise.all(s).then(() => {
        f(), Ko(), a();
      }).catch(() => {
        f(), Ko(), i();
      });
    });
}
var Ty = {
  hooks() {
    return {
      mutationObserverCallbacks(r) {
        return r.pseudoElementsCallback = El, r;
      }
    };
  },
  provides(r) {
    r.pseudoElements2svg = function(a) {
      const {
        node: i = He
      } = a;
      V.searchPseudoElements && El(i);
    };
  }
};
let Al = !1;
var Ry = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Sc(), Al = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        vl(zo("mutationObserverCallbacks", {}));
      },
      noAuto() {
        oy();
      },
      watch(r) {
        const {
          observeMutationsRoot: a
        } = r;
        Al ? Ko() : vl(zo("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
};
const Sl = (r) => {
  let a = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return r.toLowerCase().split(" ").reduce((i, s) => {
    const f = s.toLowerCase().split("-"), c = f[0];
    let g = f.slice(1).join("-");
    if (c && g === "h")
      return i.flipX = !0, i;
    if (c && g === "v")
      return i.flipY = !0, i;
    if (g = parseFloat(g), isNaN(g))
      return i;
    switch (c) {
      case "grow":
        i.size = i.size + g;
        break;
      case "shrink":
        i.size = i.size - g;
        break;
      case "left":
        i.x = i.x - g;
        break;
      case "right":
        i.x = i.x + g;
        break;
      case "up":
        i.y = i.y - g;
        break;
      case "down":
        i.y = i.y + g;
        break;
      case "rotate":
        i.rotate = i.rotate + g;
        break;
    }
    return i;
  }, a);
};
var Oy = {
  mixout() {
    return {
      parse: {
        transform: (r) => Sl(r)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(r, a) {
        const i = a.getAttribute("data-fa-transform");
        return i && (r.transform = Sl(i)), r;
      }
    };
  },
  provides(r) {
    r.generateAbstractTransformGrouping = function(a) {
      let {
        main: i,
        transform: s,
        containerWidth: f,
        iconWidth: c
      } = a;
      const g = {
        transform: "translate(".concat(f / 2, " 256)")
      }, y = "translate(".concat(s.x * 32, ", ").concat(s.y * 32, ") "), S = "scale(".concat(s.size / 16 * (s.flipX ? -1 : 1), ", ").concat(s.size / 16 * (s.flipY ? -1 : 1), ") "), A = "rotate(".concat(s.rotate, " 0 0)"), R = {
        transform: "".concat(y, " ").concat(S, " ").concat(A)
      }, k = {
        transform: "translate(".concat(c / 2 * -1, " -256)")
      }, F = {
        outer: g,
        inner: R,
        path: k
      };
      return {
        tag: "g",
        attributes: L({}, F.outer),
        children: [{
          tag: "g",
          attributes: L({}, F.inner),
          children: [{
            tag: i.icon.tag,
            children: i.icon.children,
            attributes: L(L({}, i.icon.attributes), F.path)
          }]
        }]
      };
    };
  }
};
const Eo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Tl(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return r.attributes && (r.attributes.fill || a) && (r.attributes.fill = "black"), r;
}
function Cy(r) {
  return r.tag === "g" ? r.children : [r];
}
var Py = {
  hooks() {
    return {
      parseNodeAttributes(r, a) {
        const i = a.getAttribute("data-fa-mask"), s = i ? ea(i.split(" ").map((f) => f.trim())) : bc();
        return s.prefix || (s.prefix = In()), r.mask = s, r.maskId = a.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides(r) {
    r.generateAbstractMask = function(a) {
      let {
        children: i,
        attributes: s,
        main: f,
        mask: c,
        maskId: g,
        transform: y
      } = a;
      const {
        width: S,
        icon: A
      } = f, {
        width: R,
        icon: k
      } = c, F = x_({
        transform: y,
        containerWidth: R,
        iconWidth: S
      }), K = {
        tag: "rect",
        attributes: L(L({}, Eo), {}, {
          fill: "white"
        })
      }, ee = A.children ? {
        children: A.children.map(Tl)
      } : {}, ne = {
        tag: "g",
        attributes: L({}, F.inner),
        children: [Tl(L({
          tag: A.tag,
          attributes: L(L({}, A.attributes), F.path)
        }, ee))]
      }, G = {
        tag: "g",
        attributes: L({}, F.outer),
        children: [ne]
      }, se = "mask-".concat(g || Yr()), xe = "clip-".concat(g || Yr()), Z = {
        tag: "mask",
        attributes: L(L({}, Eo), {}, {
          id: se,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [K, G]
      }, ce = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: xe
          },
          children: Cy(k)
        }, Z]
      };
      return i.push(ce, {
        tag: "rect",
        attributes: L({
          fill: "currentColor",
          "clip-path": "url(#".concat(xe, ")"),
          mask: "url(#".concat(se, ")")
        }, Eo)
      }), {
        children: i,
        attributes: s
      };
    };
  }
}, Iy = {
  provides(r) {
    let a = !1;
    Pn.matchMedia && (a = Pn.matchMedia("(prefers-reduced-motion: reduce)").matches), r.missingIconAbstract = function() {
      const i = [], s = {
        fill: "currentColor"
      }, f = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      i.push({
        tag: "path",
        attributes: L(L({}, s), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const c = L(L({}, f), {}, {
        attributeName: "opacity"
      }), g = {
        tag: "circle",
        attributes: L(L({}, s), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return a || g.children.push({
        tag: "animate",
        attributes: L(L({}, f), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: L(L({}, c), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), i.push(g), i.push({
        tag: "path",
        attributes: L(L({}, s), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: a ? [] : [{
          tag: "animate",
          attributes: L(L({}, c), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), a || i.push({
        tag: "path",
        attributes: L(L({}, s), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: L(L({}, c), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: i
      };
    };
  }
}, ky = {
  hooks() {
    return {
      parseNodeAttributes(r, a) {
        const i = a.getAttribute("data-fa-symbol"), s = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = s, r;
      }
    };
  }
}, My = [S_, my, vy, _y, yy, Ty, Ry, Oy, Py, Iy, ky];
z_(My, {
  mixoutsTo: Pt
});
Pt.noAuto;
Pt.config;
Pt.library;
Pt.dom;
const Zo = Pt.parse;
Pt.findIconDefinition;
Pt.toHtml;
const Ny = Pt.icon;
Pt.layer;
Pt.text;
Pt.counter;
var $i = { exports: {} }, zi = { exports: {} }, Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl;
function Ly() {
  if (Rl) return Ie;
  Rl = 1;
  var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, f = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, S = r ? Symbol.for("react.async_mode") : 60111, A = r ? Symbol.for("react.concurrent_mode") : 60111, R = r ? Symbol.for("react.forward_ref") : 60112, k = r ? Symbol.for("react.suspense") : 60113, F = r ? Symbol.for("react.suspense_list") : 60120, K = r ? Symbol.for("react.memo") : 60115, ee = r ? Symbol.for("react.lazy") : 60116, ne = r ? Symbol.for("react.block") : 60121, G = r ? Symbol.for("react.fundamental") : 60117, se = r ? Symbol.for("react.responder") : 60118, xe = r ? Symbol.for("react.scope") : 60119;
  function Z(O) {
    if (typeof O == "object" && O !== null) {
      var Ue = O.$$typeof;
      switch (Ue) {
        case a:
          switch (O = O.type, O) {
            case S:
            case A:
            case s:
            case c:
            case f:
            case k:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case y:
                case R:
                case ee:
                case K:
                case g:
                  return O;
                default:
                  return Ue;
              }
          }
        case i:
          return Ue;
      }
    }
  }
  function ce(O) {
    return Z(O) === A;
  }
  return Ie.AsyncMode = S, Ie.ConcurrentMode = A, Ie.ContextConsumer = y, Ie.ContextProvider = g, Ie.Element = a, Ie.ForwardRef = R, Ie.Fragment = s, Ie.Lazy = ee, Ie.Memo = K, Ie.Portal = i, Ie.Profiler = c, Ie.StrictMode = f, Ie.Suspense = k, Ie.isAsyncMode = function(O) {
    return ce(O) || Z(O) === S;
  }, Ie.isConcurrentMode = ce, Ie.isContextConsumer = function(O) {
    return Z(O) === y;
  }, Ie.isContextProvider = function(O) {
    return Z(O) === g;
  }, Ie.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === a;
  }, Ie.isForwardRef = function(O) {
    return Z(O) === R;
  }, Ie.isFragment = function(O) {
    return Z(O) === s;
  }, Ie.isLazy = function(O) {
    return Z(O) === ee;
  }, Ie.isMemo = function(O) {
    return Z(O) === K;
  }, Ie.isPortal = function(O) {
    return Z(O) === i;
  }, Ie.isProfiler = function(O) {
    return Z(O) === c;
  }, Ie.isStrictMode = function(O) {
    return Z(O) === f;
  }, Ie.isSuspense = function(O) {
    return Z(O) === k;
  }, Ie.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === s || O === A || O === c || O === f || O === k || O === F || typeof O == "object" && O !== null && (O.$$typeof === ee || O.$$typeof === K || O.$$typeof === g || O.$$typeof === y || O.$$typeof === R || O.$$typeof === G || O.$$typeof === se || O.$$typeof === xe || O.$$typeof === ne);
  }, Ie.typeOf = Z, Ie;
}
var ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ol;
function Fy() {
  return Ol || (Ol = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, f = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, S = r ? Symbol.for("react.async_mode") : 60111, A = r ? Symbol.for("react.concurrent_mode") : 60111, R = r ? Symbol.for("react.forward_ref") : 60112, k = r ? Symbol.for("react.suspense") : 60113, F = r ? Symbol.for("react.suspense_list") : 60120, K = r ? Symbol.for("react.memo") : 60115, ee = r ? Symbol.for("react.lazy") : 60116, ne = r ? Symbol.for("react.block") : 60121, G = r ? Symbol.for("react.fundamental") : 60117, se = r ? Symbol.for("react.responder") : 60118, xe = r ? Symbol.for("react.scope") : 60119;
    function Z(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === s || H === A || H === c || H === f || H === k || H === F || typeof H == "object" && H !== null && (H.$$typeof === ee || H.$$typeof === K || H.$$typeof === g || H.$$typeof === y || H.$$typeof === R || H.$$typeof === G || H.$$typeof === se || H.$$typeof === xe || H.$$typeof === ne);
    }
    function ce(H) {
      if (typeof H == "object" && H !== null) {
        var ut = H.$$typeof;
        switch (ut) {
          case a:
            var tt = H.type;
            switch (tt) {
              case S:
              case A:
              case s:
              case c:
              case f:
              case k:
                return tt;
              default:
                var It = tt && tt.$$typeof;
                switch (It) {
                  case y:
                  case R:
                  case ee:
                  case K:
                  case g:
                    return It;
                  default:
                    return ut;
                }
            }
          case i:
            return ut;
        }
      }
    }
    var O = S, Ue = A, Le = y, ue = g, Re = a, Ke = R, fe = s, Ve = ee, it = K, De = i, $e = c, ze = f, Ye = k, Xe = !1;
    function xt(H) {
      return Xe || (Xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(H) || ce(H) === S;
    }
    function l(H) {
      return ce(H) === A;
    }
    function _(H) {
      return ce(H) === y;
    }
    function I(H) {
      return ce(H) === g;
    }
    function M(H) {
      return typeof H == "object" && H !== null && H.$$typeof === a;
    }
    function D(H) {
      return ce(H) === R;
    }
    function $(H) {
      return ce(H) === s;
    }
    function W(H) {
      return ce(H) === ee;
    }
    function J(H) {
      return ce(H) === K;
    }
    function j(H) {
      return ce(H) === i;
    }
    function ae(H) {
      return ce(H) === c;
    }
    function ve(H) {
      return ce(H) === f;
    }
    function Be(H) {
      return ce(H) === k;
    }
    ke.AsyncMode = O, ke.ConcurrentMode = Ue, ke.ContextConsumer = Le, ke.ContextProvider = ue, ke.Element = Re, ke.ForwardRef = Ke, ke.Fragment = fe, ke.Lazy = Ve, ke.Memo = it, ke.Portal = De, ke.Profiler = $e, ke.StrictMode = ze, ke.Suspense = Ye, ke.isAsyncMode = xt, ke.isConcurrentMode = l, ke.isContextConsumer = _, ke.isContextProvider = I, ke.isElement = M, ke.isForwardRef = D, ke.isFragment = $, ke.isLazy = W, ke.isMemo = J, ke.isPortal = j, ke.isProfiler = ae, ke.isStrictMode = ve, ke.isSuspense = Be, ke.isValidElementType = Z, ke.typeOf = ce;
  }()), ke;
}
var Cl;
function Rc() {
  return Cl || (Cl = 1, process.env.NODE_ENV === "production" ? zi.exports = Ly() : zi.exports = Fy()), zi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ao, Pl;
function Dy() {
  if (Pl) return Ao;
  Pl = 1;
  var r = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function s(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function f() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var g = {}, y = 0; y < 10; y++)
        g["_" + String.fromCharCode(y)] = y;
      var S = Object.getOwnPropertyNames(g).map(function(R) {
        return g[R];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(R) {
        A[R] = R;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ao = f() ? Object.assign : function(c, g) {
    for (var y, S = s(c), A, R = 1; R < arguments.length; R++) {
      y = Object(arguments[R]);
      for (var k in y)
        a.call(y, k) && (S[k] = y[k]);
      if (r) {
        A = r(y);
        for (var F = 0; F < A.length; F++)
          i.call(y, A[F]) && (S[A[F]] = y[A[F]]);
      }
    }
    return S;
  }, Ao;
}
var So, Il;
function cs() {
  if (Il) return So;
  Il = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return So = r, So;
}
var To, kl;
function Oc() {
  return kl || (kl = 1, To = Function.call.bind(Object.prototype.hasOwnProperty)), To;
}
var Ro, Ml;
function Wy() {
  if (Ml) return Ro;
  Ml = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = /* @__PURE__ */ cs(), i = {}, s = /* @__PURE__ */ Oc();
    r = function(c) {
      var g = "Warning: " + c;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function f(c, g, y, S, A) {
    if (process.env.NODE_ENV !== "production") {
      for (var R in c)
        if (s(c, R)) {
          var k;
          try {
            if (typeof c[R] != "function") {
              var F = Error(
                (S || "React class") + ": " + y + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw F.name = "Invariant Violation", F;
            }
            k = c[R](g, R, S, y, null, a);
          } catch (ee) {
            k = ee;
          }
          if (k && !(k instanceof Error) && r(
            (S || "React class") + ": type specification of " + y + " `" + R + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof k + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), k instanceof Error && !(k.message in i)) {
            i[k.message] = !0;
            var K = A ? A() : "";
            r(
              "Failed " + y + " type: " + k.message + (K ?? "")
            );
          }
        }
    }
  }
  return f.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Ro = f, Ro;
}
var Oo, Nl;
function Uy() {
  if (Nl) return Oo;
  Nl = 1;
  var r = Rc(), a = Dy(), i = /* @__PURE__ */ cs(), s = /* @__PURE__ */ Oc(), f = /* @__PURE__ */ Wy(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(y) {
    var S = "Warning: " + y;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return Oo = function(y, S) {
    var A = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator";
    function k(l) {
      var _ = l && (A && l[A] || l[R]);
      if (typeof _ == "function")
        return _;
    }
    var F = "<<anonymous>>", K = {
      array: se("array"),
      bigint: se("bigint"),
      bool: se("boolean"),
      func: se("function"),
      number: se("number"),
      object: se("object"),
      string: se("string"),
      symbol: se("symbol"),
      any: xe(),
      arrayOf: Z,
      element: ce(),
      elementType: O(),
      instanceOf: Ue,
      node: Ke(),
      objectOf: ue,
      oneOf: Le,
      oneOfType: Re,
      shape: Ve,
      exact: it
    };
    function ee(l, _) {
      return l === _ ? l !== 0 || 1 / l === 1 / _ : l !== l && _ !== _;
    }
    function ne(l, _) {
      this.message = l, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    ne.prototype = Error.prototype;
    function G(l) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, I = 0;
      function M($, W, J, j, ae, ve, Be) {
        if (j = j || F, ve = ve || J, Be !== i) {
          if (S) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ut = j + ":" + J;
            !_[ut] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + ve + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ut] = !0, I++);
          }
        }
        return W[J] == null ? $ ? W[J] === null ? new ne("The " + ae + " `" + ve + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new ne("The " + ae + " `" + ve + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : l(W, J, j, ae, ve);
      }
      var D = M.bind(null, !1);
      return D.isRequired = M.bind(null, !0), D;
    }
    function se(l) {
      function _(I, M, D, $, W, J) {
        var j = I[M], ae = ze(j);
        if (ae !== l) {
          var ve = Ye(j);
          return new ne(
            "Invalid " + $ + " `" + W + "` of type " + ("`" + ve + "` supplied to `" + D + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return G(_);
    }
    function xe() {
      return G(g);
    }
    function Z(l) {
      function _(I, M, D, $, W) {
        if (typeof l != "function")
          return new ne("Property `" + W + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var J = I[M];
        if (!Array.isArray(J)) {
          var j = ze(J);
          return new ne("Invalid " + $ + " `" + W + "` of type " + ("`" + j + "` supplied to `" + D + "`, expected an array."));
        }
        for (var ae = 0; ae < J.length; ae++) {
          var ve = l(J, ae, D, $, W + "[" + ae + "]", i);
          if (ve instanceof Error)
            return ve;
        }
        return null;
      }
      return G(_);
    }
    function ce() {
      function l(_, I, M, D, $) {
        var W = _[I];
        if (!y(W)) {
          var J = ze(W);
          return new ne("Invalid " + D + " `" + $ + "` of type " + ("`" + J + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return G(l);
    }
    function O() {
      function l(_, I, M, D, $) {
        var W = _[I];
        if (!r.isValidElementType(W)) {
          var J = ze(W);
          return new ne("Invalid " + D + " `" + $ + "` of type " + ("`" + J + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return G(l);
    }
    function Ue(l) {
      function _(I, M, D, $, W) {
        if (!(I[M] instanceof l)) {
          var J = l.name || F, j = xt(I[M]);
          return new ne("Invalid " + $ + " `" + W + "` of type " + ("`" + j + "` supplied to `" + D + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return G(_);
    }
    function Le(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), g;
      function _(I, M, D, $, W) {
        for (var J = I[M], j = 0; j < l.length; j++)
          if (ee(J, l[j]))
            return null;
        var ae = JSON.stringify(l, function(Be, H) {
          var ut = Ye(H);
          return ut === "symbol" ? String(H) : H;
        });
        return new ne("Invalid " + $ + " `" + W + "` of value `" + String(J) + "` " + ("supplied to `" + D + "`, expected one of " + ae + "."));
      }
      return G(_);
    }
    function ue(l) {
      function _(I, M, D, $, W) {
        if (typeof l != "function")
          return new ne("Property `" + W + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var J = I[M], j = ze(J);
        if (j !== "object")
          return new ne("Invalid " + $ + " `" + W + "` of type " + ("`" + j + "` supplied to `" + D + "`, expected an object."));
        for (var ae in J)
          if (s(J, ae)) {
            var ve = l(J, ae, D, $, W + "." + ae, i);
            if (ve instanceof Error)
              return ve;
          }
        return null;
      }
      return G(_);
    }
    function Re(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var _ = 0; _ < l.length; _++) {
        var I = l[_];
        if (typeof I != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Xe(I) + " at index " + _ + "."
          ), g;
      }
      function M(D, $, W, J, j) {
        for (var ae = [], ve = 0; ve < l.length; ve++) {
          var Be = l[ve], H = Be(D, $, W, J, j, i);
          if (H == null)
            return null;
          H.data && s(H.data, "expectedType") && ae.push(H.data.expectedType);
        }
        var ut = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new ne("Invalid " + J + " `" + j + "` supplied to " + ("`" + W + "`" + ut + "."));
      }
      return G(M);
    }
    function Ke() {
      function l(_, I, M, D, $) {
        return De(_[I]) ? null : new ne("Invalid " + D + " `" + $ + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return G(l);
    }
    function fe(l, _, I, M, D) {
      return new ne(
        (l || "React class") + ": " + _ + " type `" + I + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function Ve(l) {
      function _(I, M, D, $, W) {
        var J = I[M], j = ze(J);
        if (j !== "object")
          return new ne("Invalid " + $ + " `" + W + "` of type `" + j + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var ae in l) {
          var ve = l[ae];
          if (typeof ve != "function")
            return fe(D, $, W, ae, Ye(ve));
          var Be = ve(J, ae, D, $, W + "." + ae, i);
          if (Be)
            return Be;
        }
        return null;
      }
      return G(_);
    }
    function it(l) {
      function _(I, M, D, $, W) {
        var J = I[M], j = ze(J);
        if (j !== "object")
          return new ne("Invalid " + $ + " `" + W + "` of type `" + j + "` " + ("supplied to `" + D + "`, expected `object`."));
        var ae = a({}, I[M], l);
        for (var ve in ae) {
          var Be = l[ve];
          if (s(l, ve) && typeof Be != "function")
            return fe(D, $, W, ve, Ye(Be));
          if (!Be)
            return new ne(
              "Invalid " + $ + " `" + W + "` key `" + ve + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(I[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var H = Be(J, ve, D, $, W + "." + ve, i);
          if (H)
            return H;
        }
        return null;
      }
      return G(_);
    }
    function De(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(De);
          if (l === null || y(l))
            return !0;
          var _ = k(l);
          if (_) {
            var I = _.call(l), M;
            if (_ !== l.entries) {
              for (; !(M = I.next()).done; )
                if (!De(M.value))
                  return !1;
            } else
              for (; !(M = I.next()).done; ) {
                var D = M.value;
                if (D && !De(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $e(l, _) {
      return l === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ze(l) {
      var _ = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : $e(_, l) ? "symbol" : _;
    }
    function Ye(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var _ = ze(l);
      if (_ === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function Xe(l) {
      var _ = Ye(l);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function xt(l) {
      return !l.constructor || !l.constructor.name ? F : l.constructor.name;
    }
    return K.checkPropTypes = f, K.resetWarningCache = f.resetWarningCache, K.PropTypes = K, K;
  }, Oo;
}
var Co, Ll;
function jy() {
  if (Ll) return Co;
  Ll = 1;
  var r = /* @__PURE__ */ cs();
  function a() {
  }
  function i() {
  }
  return i.resetWarningCache = a, Co = function() {
    function s(g, y, S, A, R, k) {
      if (k !== r) {
        var F = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw F.name = "Invariant Violation", F;
      }
    }
    s.isRequired = s;
    function f() {
      return s;
    }
    var c = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: f,
      element: s,
      elementType: s,
      instanceOf: f,
      node: s,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: i,
      resetWarningCache: a
    };
    return c.PropTypes = c, c;
  }, Co;
}
var Fl;
function Hy() {
  if (Fl) return $i.exports;
  if (Fl = 1, process.env.NODE_ENV !== "production") {
    var r = Rc(), a = !0;
    $i.exports = /* @__PURE__ */ Uy()(r.isElement, a);
  } else
    $i.exports = /* @__PURE__ */ jy()();
  return $i.exports;
}
var $y = /* @__PURE__ */ Hy();
const Ae = /* @__PURE__ */ Jo($y);
function Dl(r, a) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    a && (s = s.filter(function(f) {
      return Object.getOwnPropertyDescriptor(r, f).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function Zt(r) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Dl(Object(i), !0).forEach(function(s) {
      pr(r, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Dl(Object(i)).forEach(function(s) {
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return r;
}
function Xi(r) {
  "@babel/helpers - typeof";
  return Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Xi(r);
}
function pr(r, a, i) {
  return a in r ? Object.defineProperty(r, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = i, r;
}
function zy(r, a) {
  if (r == null) return {};
  var i = {}, s = Object.keys(r), f, c;
  for (c = 0; c < s.length; c++)
    f = s[c], !(a.indexOf(f) >= 0) && (i[f] = r[f]);
  return i;
}
function Yy(r, a) {
  if (r == null) return {};
  var i = zy(r, a), s, f;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    for (f = 0; f < c.length; f++)
      s = c[f], !(a.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(r, s) && (i[s] = r[s]);
  }
  return i;
}
function Vo(r) {
  return By(r) || qy(r) || Gy(r) || Ky();
}
function By(r) {
  if (Array.isArray(r)) return Qo(r);
}
function qy(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Gy(r, a) {
  if (r) {
    if (typeof r == "string") return Qo(r, a);
    var i = Object.prototype.toString.call(r).slice(8, -1);
    if (i === "Object" && r.constructor && (i = r.constructor.name), i === "Map" || i === "Set") return Array.from(r);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Qo(r, a);
  }
}
function Qo(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var i = 0, s = new Array(a); i < a; i++) s[i] = r[i];
  return s;
}
function Ky() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xy(r) {
  var a, i = r.beat, s = r.fade, f = r.beatFade, c = r.bounce, g = r.shake, y = r.flash, S = r.spin, A = r.spinPulse, R = r.spinReverse, k = r.pulse, F = r.fixedWidth, K = r.inverse, ee = r.border, ne = r.listItem, G = r.flip, se = r.size, xe = r.rotation, Z = r.pull, ce = (a = {
    "fa-beat": i,
    "fa-fade": s,
    "fa-beat-fade": f,
    "fa-bounce": c,
    "fa-shake": g,
    "fa-flash": y,
    "fa-spin": S,
    "fa-spin-reverse": R,
    "fa-spin-pulse": A,
    "fa-pulse": k,
    "fa-fw": F,
    "fa-inverse": K,
    "fa-border": ee,
    "fa-li": ne,
    "fa-flip": G === !0,
    "fa-flip-horizontal": G === "horizontal" || G === "both",
    "fa-flip-vertical": G === "vertical" || G === "both"
  }, pr(a, "fa-".concat(se), typeof se < "u" && se !== null), pr(a, "fa-rotate-".concat(xe), typeof xe < "u" && xe !== null && xe !== 0), pr(a, "fa-pull-".concat(Z), typeof Z < "u" && Z !== null), pr(a, "fa-swap-opacity", r.swapOpacity), a);
  return Object.keys(ce).map(function(O) {
    return ce[O] ? O : null;
  }).filter(function(O) {
    return O;
  });
}
function Zy(r) {
  return r = r - 0, r === r;
}
function Cc(r) {
  return Zy(r) ? r : (r = r.replace(/[\-_\s]+(.)?/g, function(a, i) {
    return i ? i.toUpperCase() : "";
  }), r.substr(0, 1).toLowerCase() + r.substr(1));
}
var Vy = ["style"];
function Qy(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Jy(r) {
  return r.split(";").map(function(a) {
    return a.trim();
  }).filter(function(a) {
    return a;
  }).reduce(function(a, i) {
    var s = i.indexOf(":"), f = Cc(i.slice(0, s)), c = i.slice(s + 1).trim();
    return f.startsWith("webkit") ? a[Qy(f)] = c : a[f] = c, a;
  }, {});
}
function Pc(r, a) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof a == "string")
    return a;
  var s = (a.children || []).map(function(S) {
    return Pc(r, S);
  }), f = Object.keys(a.attributes || {}).reduce(function(S, A) {
    var R = a.attributes[A];
    switch (A) {
      case "class":
        S.attrs.className = R, delete a.attributes.class;
        break;
      case "style":
        S.attrs.style = Jy(R);
        break;
      default:
        A.indexOf("aria-") === 0 || A.indexOf("data-") === 0 ? S.attrs[A.toLowerCase()] = R : S.attrs[Cc(A)] = R;
    }
    return S;
  }, {
    attrs: {}
  }), c = i.style, g = c === void 0 ? {} : c, y = Yy(i, Vy);
  return f.attrs.style = Zt(Zt({}, f.attrs.style), g), r.apply(void 0, [a.tag, Zt(Zt({}, f.attrs), y)].concat(Vo(s)));
}
var Ic = !1;
try {
  Ic = process.env.NODE_ENV === "production";
} catch {
}
function eb() {
  if (!Ic && console && typeof console.error == "function") {
    var r;
    (r = console).error.apply(r, arguments);
  }
}
function Wl(r) {
  if (r && Xi(r) === "object" && r.prefix && r.iconName && r.icon)
    return r;
  if (Zo.icon)
    return Zo.icon(r);
  if (r === null)
    return null;
  if (r && Xi(r) === "object" && r.prefix && r.iconName)
    return r;
  if (Array.isArray(r) && r.length === 2)
    return {
      prefix: r[0],
      iconName: r[1]
    };
  if (typeof r == "string")
    return {
      prefix: "fas",
      iconName: r
    };
}
function Po(r, a) {
  return Array.isArray(a) && a.length > 0 || !Array.isArray(a) && a ? pr({}, r, a) : {};
}
var Ul = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, _r = /* @__PURE__ */ Bl.forwardRef(function(r, a) {
  var i = Zt(Zt({}, Ul), r), s = i.icon, f = i.mask, c = i.symbol, g = i.className, y = i.title, S = i.titleId, A = i.maskId, R = Wl(s), k = Po("classes", [].concat(Vo(Xy(i)), Vo((g || "").split(" ")))), F = Po("transform", typeof i.transform == "string" ? Zo.transform(i.transform) : i.transform), K = Po("mask", Wl(f)), ee = Ny(R, Zt(Zt(Zt(Zt({}, k), F), K), {}, {
    symbol: c,
    title: y,
    titleId: S,
    maskId: A
  }));
  if (!ee)
    return eb("Could not find icon", R), null;
  var ne = ee.abstract, G = {
    ref: a
  };
  return Object.keys(i).forEach(function(se) {
    Ul.hasOwnProperty(se) || (G[se] = i[se]);
  }), tb(ne[0], G);
});
_r.displayName = "FontAwesomeIcon";
_r.propTypes = {
  beat: Ae.bool,
  border: Ae.bool,
  beatFade: Ae.bool,
  bounce: Ae.bool,
  className: Ae.string,
  fade: Ae.bool,
  flash: Ae.bool,
  mask: Ae.oneOfType([Ae.object, Ae.array, Ae.string]),
  maskId: Ae.string,
  fixedWidth: Ae.bool,
  inverse: Ae.bool,
  flip: Ae.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Ae.oneOfType([Ae.object, Ae.array, Ae.string]),
  listItem: Ae.bool,
  pull: Ae.oneOf(["right", "left"]),
  pulse: Ae.bool,
  rotation: Ae.oneOf([0, 90, 180, 270]),
  shake: Ae.bool,
  size: Ae.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Ae.bool,
  spinPulse: Ae.bool,
  spinReverse: Ae.bool,
  symbol: Ae.oneOfType([Ae.bool, Ae.string]),
  title: Ae.string,
  titleId: Ae.string,
  transform: Ae.oneOfType([Ae.string, Ae.object]),
  swapOpacity: Ae.bool
};
var tb = Pc.bind(null, Bl.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const nb = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, rb = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, ib = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, ab = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
};
var Hr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var ob = Hr.exports, jl;
function sb() {
  return jl || (jl = 1, function(r, a) {
    (function() {
      var i, s = "4.17.21", f = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", y = "Invalid `variable` option passed into `_.template`", S = "__lodash_hash_undefined__", A = 500, R = "__lodash_placeholder__", k = 1, F = 2, K = 4, ee = 1, ne = 2, G = 1, se = 2, xe = 4, Z = 8, ce = 16, O = 32, Ue = 64, Le = 128, ue = 256, Re = 512, Ke = 30, fe = "...", Ve = 800, it = 16, De = 1, $e = 2, ze = 3, Ye = 1 / 0, Xe = 9007199254740991, xt = 17976931348623157e292, l = NaN, _ = 4294967295, I = _ - 1, M = _ >>> 1, D = [
        ["ary", Le],
        ["bind", G],
        ["bindKey", se],
        ["curry", Z],
        ["curryRight", ce],
        ["flip", Re],
        ["partial", O],
        ["partialRight", Ue],
        ["rearg", ue]
      ], $ = "[object Arguments]", W = "[object Array]", J = "[object AsyncFunction]", j = "[object Boolean]", ae = "[object Date]", ve = "[object DOMException]", Be = "[object Error]", H = "[object Function]", ut = "[object GeneratorFunction]", tt = "[object Map]", It = "[object Number]", mt = "[object Null]", vt = "[object Object]", yr = "[object Promise]", na = "[object Proxy]", he = "[object RegExp]", ft = "[object Set]", gn = "[object String]", Mn = "[object Symbol]", Kr = "[object Undefined]", mn = "[object WeakMap]", ra = "[object WeakSet]", Nn = "[object ArrayBuffer]", Jt = "[object DataView]", Xn = "[object Float32Array]", Zn = "[object Float64Array]", Vn = "[object Int8Array]", vn = "[object Int16Array]", _n = "[object Int32Array]", yn = "[object Uint8Array]", Ln = "[object Uint8ClampedArray]", Qn = "[object Uint16Array]", d = "[object Uint32Array]", x = /\b__p \+= '';/g, U = /\b(__p \+=) '' \+/g, Y = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Q = /&(?:amp|lt|gt|quot|#39);/g, ye = /[&<>"']/g, pe = RegExp(Q.source), Oe = RegExp(ye.source), be = /<%-([\s\S]+?)%>/g, qt = /<%([\s\S]+?)%>/g, en = /<%=([\s\S]+?)%>/g, ia = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, aa = /^\w*$/, Lc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, oa = /[\\^$.*+?()[\]{}|]/g, Fc = RegExp(oa.source), sa = /^\s+/, Dc = /\s/, Wc = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Uc = /\{\n\/\* \[wrapped with (.+)\] \*/, jc = /,? & /, Hc = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $c = /[()=,{}\[\]\/\s]/, zc = /\\(\\)?/g, Yc = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, gs = /\w*$/, Bc = /^[-+]0x[0-9a-f]+$/i, qc = /^0b[01]+$/i, Gc = /^\[object .+?Constructor\]$/, Kc = /^0o[0-7]+$/i, Xc = /^(?:0|[1-9]\d*)$/, Zc = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xr = /($^)/, Vc = /['\n\r\u2028\u2029\\]/g, Zr = "\\ud800-\\udfff", Qc = "\\u0300-\\u036f", Jc = "\\ufe20-\\ufe2f", ed = "\\u20d0-\\u20ff", ms = Qc + Jc + ed, vs = "\\u2700-\\u27bf", _s = "a-z\\xdf-\\xf6\\xf8-\\xff", td = "\\xac\\xb1\\xd7\\xf7", nd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rd = "\\u2000-\\u206f", id = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ys = "A-Z\\xc0-\\xd6\\xd8-\\xde", bs = "\\ufe0e\\ufe0f", ws = td + nd + rd + id, ua = "['’]", ad = "[" + Zr + "]", xs = "[" + ws + "]", Vr = "[" + ms + "]", Es = "\\d+", od = "[" + vs + "]", As = "[" + _s + "]", Ss = "[^" + Zr + ws + Es + vs + _s + ys + "]", fa = "\\ud83c[\\udffb-\\udfff]", sd = "(?:" + Vr + "|" + fa + ")", Ts = "[^" + Zr + "]", la = "(?:\\ud83c[\\udde6-\\uddff]){2}", ca = "[\\ud800-\\udbff][\\udc00-\\udfff]", Jn = "[" + ys + "]", Rs = "\\u200d", Os = "(?:" + As + "|" + Ss + ")", ud = "(?:" + Jn + "|" + Ss + ")", Cs = "(?:" + ua + "(?:d|ll|m|re|s|t|ve))?", Ps = "(?:" + ua + "(?:D|LL|M|RE|S|T|VE))?", Is = sd + "?", ks = "[" + bs + "]?", fd = "(?:" + Rs + "(?:" + [Ts, la, ca].join("|") + ")" + ks + Is + ")*", ld = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", cd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ms = ks + Is + fd, dd = "(?:" + [od, la, ca].join("|") + ")" + Ms, hd = "(?:" + [Ts + Vr + "?", Vr, la, ca, ad].join("|") + ")", pd = RegExp(ua, "g"), gd = RegExp(Vr, "g"), da = RegExp(fa + "(?=" + fa + ")|" + hd + Ms, "g"), md = RegExp([
        Jn + "?" + As + "+" + Cs + "(?=" + [xs, Jn, "$"].join("|") + ")",
        ud + "+" + Ps + "(?=" + [xs, Jn + Os, "$"].join("|") + ")",
        Jn + "?" + Os + "+" + Cs,
        Jn + "+" + Ps,
        cd,
        ld,
        Es,
        dd
      ].join("|"), "g"), vd = RegExp("[" + Rs + Zr + ms + bs + "]"), _d = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, yd = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], bd = -1, je = {};
      je[Xn] = je[Zn] = je[Vn] = je[vn] = je[_n] = je[yn] = je[Ln] = je[Qn] = je[d] = !0, je[$] = je[W] = je[Nn] = je[j] = je[Jt] = je[ae] = je[Be] = je[H] = je[tt] = je[It] = je[vt] = je[he] = je[ft] = je[gn] = je[mn] = !1;
      var We = {};
      We[$] = We[W] = We[Nn] = We[Jt] = We[j] = We[ae] = We[Xn] = We[Zn] = We[Vn] = We[vn] = We[_n] = We[tt] = We[It] = We[vt] = We[he] = We[ft] = We[gn] = We[Mn] = We[yn] = We[Ln] = We[Qn] = We[d] = !0, We[Be] = We[H] = We[mn] = !1;
      var wd = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, xd = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Ed = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Ad = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Sd = parseFloat, Td = parseInt, Ns = typeof Di == "object" && Di && Di.Object === Object && Di, Rd = typeof self == "object" && self && self.Object === Object && self, ot = Ns || Rd || Function("return this")(), ha = a && !a.nodeType && a, Fn = ha && !0 && r && !r.nodeType && r, Ls = Fn && Fn.exports === ha, pa = Ls && Ns.process, kt = function() {
        try {
          var b = Fn && Fn.require && Fn.require("util").types;
          return b || pa && pa.binding && pa.binding("util");
        } catch {
        }
      }(), Fs = kt && kt.isArrayBuffer, Ds = kt && kt.isDate, Ws = kt && kt.isMap, Us = kt && kt.isRegExp, js = kt && kt.isSet, Hs = kt && kt.isTypedArray;
      function Et(b, T, E) {
        switch (E.length) {
          case 0:
            return b.call(T);
          case 1:
            return b.call(T, E[0]);
          case 2:
            return b.call(T, E[0], E[1]);
          case 3:
            return b.call(T, E[0], E[1], E[2]);
        }
        return b.apply(T, E);
      }
      function Od(b, T, E, B) {
        for (var le = -1, Ce = b == null ? 0 : b.length; ++le < Ce; ) {
          var nt = b[le];
          T(B, nt, E(nt), b);
        }
        return B;
      }
      function Mt(b, T) {
        for (var E = -1, B = b == null ? 0 : b.length; ++E < B && T(b[E], E, b) !== !1; )
          ;
        return b;
      }
      function Cd(b, T) {
        for (var E = b == null ? 0 : b.length; E-- && T(b[E], E, b) !== !1; )
          ;
        return b;
      }
      function $s(b, T) {
        for (var E = -1, B = b == null ? 0 : b.length; ++E < B; )
          if (!T(b[E], E, b))
            return !1;
        return !0;
      }
      function bn(b, T) {
        for (var E = -1, B = b == null ? 0 : b.length, le = 0, Ce = []; ++E < B; ) {
          var nt = b[E];
          T(nt, E, b) && (Ce[le++] = nt);
        }
        return Ce;
      }
      function Qr(b, T) {
        var E = b == null ? 0 : b.length;
        return !!E && er(b, T, 0) > -1;
      }
      function ga(b, T, E) {
        for (var B = -1, le = b == null ? 0 : b.length; ++B < le; )
          if (E(T, b[B]))
            return !0;
        return !1;
      }
      function qe(b, T) {
        for (var E = -1, B = b == null ? 0 : b.length, le = Array(B); ++E < B; )
          le[E] = T(b[E], E, b);
        return le;
      }
      function wn(b, T) {
        for (var E = -1, B = T.length, le = b.length; ++E < B; )
          b[le + E] = T[E];
        return b;
      }
      function ma(b, T, E, B) {
        var le = -1, Ce = b == null ? 0 : b.length;
        for (B && Ce && (E = b[++le]); ++le < Ce; )
          E = T(E, b[le], le, b);
        return E;
      }
      function Pd(b, T, E, B) {
        var le = b == null ? 0 : b.length;
        for (B && le && (E = b[--le]); le--; )
          E = T(E, b[le], le, b);
        return E;
      }
      function va(b, T) {
        for (var E = -1, B = b == null ? 0 : b.length; ++E < B; )
          if (T(b[E], E, b))
            return !0;
        return !1;
      }
      var Id = _a("length");
      function kd(b) {
        return b.split("");
      }
      function Md(b) {
        return b.match(Hc) || [];
      }
      function zs(b, T, E) {
        var B;
        return E(b, function(le, Ce, nt) {
          if (T(le, Ce, nt))
            return B = Ce, !1;
        }), B;
      }
      function Jr(b, T, E, B) {
        for (var le = b.length, Ce = E + (B ? 1 : -1); B ? Ce-- : ++Ce < le; )
          if (T(b[Ce], Ce, b))
            return Ce;
        return -1;
      }
      function er(b, T, E) {
        return T === T ? Bd(b, T, E) : Jr(b, Ys, E);
      }
      function Nd(b, T, E, B) {
        for (var le = E - 1, Ce = b.length; ++le < Ce; )
          if (B(b[le], T))
            return le;
        return -1;
      }
      function Ys(b) {
        return b !== b;
      }
      function Bs(b, T) {
        var E = b == null ? 0 : b.length;
        return E ? ba(b, T) / E : l;
      }
      function _a(b) {
        return function(T) {
          return T == null ? i : T[b];
        };
      }
      function ya(b) {
        return function(T) {
          return b == null ? i : b[T];
        };
      }
      function qs(b, T, E, B, le) {
        return le(b, function(Ce, nt, Fe) {
          E = B ? (B = !1, Ce) : T(E, Ce, nt, Fe);
        }), E;
      }
      function Ld(b, T) {
        var E = b.length;
        for (b.sort(T); E--; )
          b[E] = b[E].value;
        return b;
      }
      function ba(b, T) {
        for (var E, B = -1, le = b.length; ++B < le; ) {
          var Ce = T(b[B]);
          Ce !== i && (E = E === i ? Ce : E + Ce);
        }
        return E;
      }
      function wa(b, T) {
        for (var E = -1, B = Array(b); ++E < b; )
          B[E] = T(E);
        return B;
      }
      function Fd(b, T) {
        return qe(T, function(E) {
          return [E, b[E]];
        });
      }
      function Gs(b) {
        return b && b.slice(0, Vs(b) + 1).replace(sa, "");
      }
      function At(b) {
        return function(T) {
          return b(T);
        };
      }
      function xa(b, T) {
        return qe(T, function(E) {
          return b[E];
        });
      }
      function br(b, T) {
        return b.has(T);
      }
      function Ks(b, T) {
        for (var E = -1, B = b.length; ++E < B && er(T, b[E], 0) > -1; )
          ;
        return E;
      }
      function Xs(b, T) {
        for (var E = b.length; E-- && er(T, b[E], 0) > -1; )
          ;
        return E;
      }
      function Dd(b, T) {
        for (var E = b.length, B = 0; E--; )
          b[E] === T && ++B;
        return B;
      }
      var Wd = ya(wd), Ud = ya(xd);
      function jd(b) {
        return "\\" + Ad[b];
      }
      function Hd(b, T) {
        return b == null ? i : b[T];
      }
      function tr(b) {
        return vd.test(b);
      }
      function $d(b) {
        return _d.test(b);
      }
      function zd(b) {
        for (var T, E = []; !(T = b.next()).done; )
          E.push(T.value);
        return E;
      }
      function Ea(b) {
        var T = -1, E = Array(b.size);
        return b.forEach(function(B, le) {
          E[++T] = [le, B];
        }), E;
      }
      function Zs(b, T) {
        return function(E) {
          return b(T(E));
        };
      }
      function xn(b, T) {
        for (var E = -1, B = b.length, le = 0, Ce = []; ++E < B; ) {
          var nt = b[E];
          (nt === T || nt === R) && (b[E] = R, Ce[le++] = E);
        }
        return Ce;
      }
      function ei(b) {
        var T = -1, E = Array(b.size);
        return b.forEach(function(B) {
          E[++T] = B;
        }), E;
      }
      function Yd(b) {
        var T = -1, E = Array(b.size);
        return b.forEach(function(B) {
          E[++T] = [B, B];
        }), E;
      }
      function Bd(b, T, E) {
        for (var B = E - 1, le = b.length; ++B < le; )
          if (b[B] === T)
            return B;
        return -1;
      }
      function qd(b, T, E) {
        for (var B = E + 1; B--; )
          if (b[B] === T)
            return B;
        return B;
      }
      function nr(b) {
        return tr(b) ? Kd(b) : Id(b);
      }
      function jt(b) {
        return tr(b) ? Xd(b) : kd(b);
      }
      function Vs(b) {
        for (var T = b.length; T-- && Dc.test(b.charAt(T)); )
          ;
        return T;
      }
      var Gd = ya(Ed);
      function Kd(b) {
        for (var T = da.lastIndex = 0; da.test(b); )
          ++T;
        return T;
      }
      function Xd(b) {
        return b.match(da) || [];
      }
      function Zd(b) {
        return b.match(md) || [];
      }
      var Vd = function b(T) {
        T = T == null ? ot : rr.defaults(ot.Object(), T, rr.pick(ot, yd));
        var E = T.Array, B = T.Date, le = T.Error, Ce = T.Function, nt = T.Math, Fe = T.Object, Aa = T.RegExp, Qd = T.String, Nt = T.TypeError, ti = E.prototype, Jd = Ce.prototype, ir = Fe.prototype, ni = T["__core-js_shared__"], ri = Jd.toString, Me = ir.hasOwnProperty, eh = 0, Qs = function() {
          var e = /[^.]+$/.exec(ni && ni.keys && ni.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        }(), ii = ir.toString, th = ri.call(Fe), nh = ot._, rh = Aa(
          "^" + ri.call(Me).replace(oa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), ai = Ls ? T.Buffer : i, En = T.Symbol, oi = T.Uint8Array, Js = ai ? ai.allocUnsafe : i, si = Zs(Fe.getPrototypeOf, Fe), eu = Fe.create, tu = ir.propertyIsEnumerable, ui = ti.splice, nu = En ? En.isConcatSpreadable : i, wr = En ? En.iterator : i, Dn = En ? En.toStringTag : i, fi = function() {
          try {
            var e = $n(Fe, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        }(), ih = T.clearTimeout !== ot.clearTimeout && T.clearTimeout, ah = B && B.now !== ot.Date.now && B.now, oh = T.setTimeout !== ot.setTimeout && T.setTimeout, li = nt.ceil, ci = nt.floor, Sa = Fe.getOwnPropertySymbols, sh = ai ? ai.isBuffer : i, ru = T.isFinite, uh = ti.join, fh = Zs(Fe.keys, Fe), rt = nt.max, lt = nt.min, lh = B.now, ch = T.parseInt, iu = nt.random, dh = ti.reverse, Ta = $n(T, "DataView"), xr = $n(T, "Map"), Ra = $n(T, "Promise"), ar = $n(T, "Set"), Er = $n(T, "WeakMap"), Ar = $n(Fe, "create"), di = Er && new Er(), or = {}, hh = zn(Ta), ph = zn(xr), gh = zn(Ra), mh = zn(ar), vh = zn(Er), hi = En ? En.prototype : i, Sr = hi ? hi.valueOf : i, au = hi ? hi.toString : i;
        function h(e) {
          if (Qe(e) && !de(e) && !(e instanceof Se)) {
            if (e instanceof Lt)
              return e;
            if (Me.call(e, "__wrapped__"))
              return sf(e);
          }
          return new Lt(e);
        }
        var sr = /* @__PURE__ */ function() {
          function e() {
          }
          return function(t) {
            if (!Ze(t))
              return {};
            if (eu)
              return eu(t);
            e.prototype = t;
            var n = new e();
            return e.prototype = i, n;
          };
        }();
        function pi() {
        }
        function Lt(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
        }
        h.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: be,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: qt,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: en,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: h
          }
        }, h.prototype = pi.prototype, h.prototype.constructor = h, Lt.prototype = sr(pi.prototype), Lt.prototype.constructor = Lt;
        function Se(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _, this.__views__ = [];
        }
        function _h() {
          var e = new Se(this.__wrapped__);
          return e.__actions__ = _t(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = _t(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = _t(this.__views__), e;
        }
        function yh() {
          if (this.__filtered__) {
            var e = new Se(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function bh() {
          var e = this.__wrapped__.value(), t = this.__dir__, n = de(e), o = t < 0, u = n ? e.length : 0, p = kp(0, u, this.__views__), m = p.start, v = p.end, w = v - m, C = o ? v : m - 1, P = this.__iteratees__, N = P.length, z = 0, X = lt(w, this.__takeCount__);
          if (!n || !o && u == w && X == w)
            return Cu(e, this.__actions__);
          var re = [];
          e:
            for (; w-- && z < X; ) {
              C += t;
              for (var _e = -1, ie = e[C]; ++_e < N; ) {
                var Ee = P[_e], Te = Ee.iteratee, Rt = Ee.type, gt = Te(ie);
                if (Rt == $e)
                  ie = gt;
                else if (!gt) {
                  if (Rt == De)
                    continue e;
                  break e;
                }
              }
              re[z++] = ie;
            }
          return re;
        }
        Se.prototype = sr(pi.prototype), Se.prototype.constructor = Se;
        function Wn(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var o = e[t];
            this.set(o[0], o[1]);
          }
        }
        function wh() {
          this.__data__ = Ar ? Ar(null) : {}, this.size = 0;
        }
        function xh(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function Eh(e) {
          var t = this.__data__;
          if (Ar) {
            var n = t[e];
            return n === S ? i : n;
          }
          return Me.call(t, e) ? t[e] : i;
        }
        function Ah(e) {
          var t = this.__data__;
          return Ar ? t[e] !== i : Me.call(t, e);
        }
        function Sh(e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = Ar && t === i ? S : t, this;
        }
        Wn.prototype.clear = wh, Wn.prototype.delete = xh, Wn.prototype.get = Eh, Wn.prototype.has = Ah, Wn.prototype.set = Sh;
        function tn(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var o = e[t];
            this.set(o[0], o[1]);
          }
        }
        function Th() {
          this.__data__ = [], this.size = 0;
        }
        function Rh(e) {
          var t = this.__data__, n = gi(t, e);
          if (n < 0)
            return !1;
          var o = t.length - 1;
          return n == o ? t.pop() : ui.call(t, n, 1), --this.size, !0;
        }
        function Oh(e) {
          var t = this.__data__, n = gi(t, e);
          return n < 0 ? i : t[n][1];
        }
        function Ch(e) {
          return gi(this.__data__, e) > -1;
        }
        function Ph(e, t) {
          var n = this.__data__, o = gi(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
        }
        tn.prototype.clear = Th, tn.prototype.delete = Rh, tn.prototype.get = Oh, tn.prototype.has = Ch, tn.prototype.set = Ph;
        function nn(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var o = e[t];
            this.set(o[0], o[1]);
          }
        }
        function Ih() {
          this.size = 0, this.__data__ = {
            hash: new Wn(),
            map: new (xr || tn)(),
            string: new Wn()
          };
        }
        function kh(e) {
          var t = Ri(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Mh(e) {
          return Ri(this, e).get(e);
        }
        function Nh(e) {
          return Ri(this, e).has(e);
        }
        function Lh(e, t) {
          var n = Ri(this, e), o = n.size;
          return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
        }
        nn.prototype.clear = Ih, nn.prototype.delete = kh, nn.prototype.get = Mh, nn.prototype.has = Nh, nn.prototype.set = Lh;
        function Un(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.__data__ = new nn(); ++t < n; )
            this.add(e[t]);
        }
        function Fh(e) {
          return this.__data__.set(e, S), this;
        }
        function Dh(e) {
          return this.__data__.has(e);
        }
        Un.prototype.add = Un.prototype.push = Fh, Un.prototype.has = Dh;
        function Ht(e) {
          var t = this.__data__ = new tn(e);
          this.size = t.size;
        }
        function Wh() {
          this.__data__ = new tn(), this.size = 0;
        }
        function Uh(e) {
          var t = this.__data__, n = t.delete(e);
          return this.size = t.size, n;
        }
        function jh(e) {
          return this.__data__.get(e);
        }
        function Hh(e) {
          return this.__data__.has(e);
        }
        function $h(e, t) {
          var n = this.__data__;
          if (n instanceof tn) {
            var o = n.__data__;
            if (!xr || o.length < f - 1)
              return o.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new nn(o);
          }
          return n.set(e, t), this.size = n.size, this;
        }
        Ht.prototype.clear = Wh, Ht.prototype.delete = Uh, Ht.prototype.get = jh, Ht.prototype.has = Hh, Ht.prototype.set = $h;
        function ou(e, t) {
          var n = de(e), o = !n && Yn(e), u = !n && !o && On(e), p = !n && !o && !u && cr(e), m = n || o || u || p, v = m ? wa(e.length, Qd) : [], w = v.length;
          for (var C in e)
            (t || Me.call(e, C)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
            (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            u && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            p && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
            sn(C, w))) && v.push(C);
          return v;
        }
        function su(e) {
          var t = e.length;
          return t ? e[Wa(0, t - 1)] : i;
        }
        function zh(e, t) {
          return Oi(_t(e), jn(t, 0, e.length));
        }
        function Yh(e) {
          return Oi(_t(e));
        }
        function Oa(e, t, n) {
          (n !== i && !$t(e[t], n) || n === i && !(t in e)) && rn(e, t, n);
        }
        function Tr(e, t, n) {
          var o = e[t];
          (!(Me.call(e, t) && $t(o, n)) || n === i && !(t in e)) && rn(e, t, n);
        }
        function gi(e, t) {
          for (var n = e.length; n--; )
            if ($t(e[n][0], t))
              return n;
          return -1;
        }
        function Bh(e, t, n, o) {
          return An(e, function(u, p, m) {
            t(o, u, n(u), m);
          }), o;
        }
        function uu(e, t) {
          return e && Kt(t, at(t), e);
        }
        function qh(e, t) {
          return e && Kt(t, bt(t), e);
        }
        function rn(e, t, n) {
          t == "__proto__" && fi ? fi(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : e[t] = n;
        }
        function Ca(e, t) {
          for (var n = -1, o = t.length, u = E(o), p = e == null; ++n < o; )
            u[n] = p ? i : fo(e, t[n]);
          return u;
        }
        function jn(e, t, n) {
          return e === e && (n !== i && (e = e <= n ? e : n), t !== i && (e = e >= t ? e : t)), e;
        }
        function Ft(e, t, n, o, u, p) {
          var m, v = t & k, w = t & F, C = t & K;
          if (n && (m = u ? n(e, o, u, p) : n(e)), m !== i)
            return m;
          if (!Ze(e))
            return e;
          var P = de(e);
          if (P) {
            if (m = Np(e), !v)
              return _t(e, m);
          } else {
            var N = ct(e), z = N == H || N == ut;
            if (On(e))
              return ku(e, v);
            if (N == vt || N == $ || z && !u) {
              if (m = w || z ? {} : Vu(e), !v)
                return w ? Ep(e, qh(m, e)) : xp(e, uu(m, e));
            } else {
              if (!We[N])
                return u ? e : {};
              m = Lp(e, N, v);
            }
          }
          p || (p = new Ht());
          var X = p.get(e);
          if (X)
            return X;
          p.set(e, m), Rf(e) ? e.forEach(function(ie) {
            m.add(Ft(ie, t, n, ie, e, p));
          }) : Sf(e) && e.forEach(function(ie, Ee) {
            m.set(Ee, Ft(ie, t, n, Ee, e, p));
          });
          var re = C ? w ? Xa : Ka : w ? bt : at, _e = P ? i : re(e);
          return Mt(_e || e, function(ie, Ee) {
            _e && (Ee = ie, ie = e[Ee]), Tr(m, Ee, Ft(ie, t, n, Ee, e, p));
          }), m;
        }
        function Gh(e) {
          var t = at(e);
          return function(n) {
            return fu(n, e, t);
          };
        }
        function fu(e, t, n) {
          var o = n.length;
          if (e == null)
            return !o;
          for (e = Fe(e); o--; ) {
            var u = n[o], p = t[u], m = e[u];
            if (m === i && !(u in e) || !p(m))
              return !1;
          }
          return !0;
        }
        function lu(e, t, n) {
          if (typeof e != "function")
            throw new Nt(g);
          return Mr(function() {
            e.apply(i, n);
          }, t);
        }
        function Rr(e, t, n, o) {
          var u = -1, p = Qr, m = !0, v = e.length, w = [], C = t.length;
          if (!v)
            return w;
          n && (t = qe(t, At(n))), o ? (p = ga, m = !1) : t.length >= f && (p = br, m = !1, t = new Un(t));
          e:
            for (; ++u < v; ) {
              var P = e[u], N = n == null ? P : n(P);
              if (P = o || P !== 0 ? P : 0, m && N === N) {
                for (var z = C; z--; )
                  if (t[z] === N)
                    continue e;
                w.push(P);
              } else p(t, N, o) || w.push(P);
            }
          return w;
        }
        var An = Du(Gt), cu = Du(Ia, !0);
        function Kh(e, t) {
          var n = !0;
          return An(e, function(o, u, p) {
            return n = !!t(o, u, p), n;
          }), n;
        }
        function mi(e, t, n) {
          for (var o = -1, u = e.length; ++o < u; ) {
            var p = e[o], m = t(p);
            if (m != null && (v === i ? m === m && !Tt(m) : n(m, v)))
              var v = m, w = p;
          }
          return w;
        }
        function Xh(e, t, n, o) {
          var u = e.length;
          for (n = ge(n), n < 0 && (n = -n > u ? 0 : u + n), o = o === i || o > u ? u : ge(o), o < 0 && (o += u), o = n > o ? 0 : Cf(o); n < o; )
            e[n++] = t;
          return e;
        }
        function du(e, t) {
          var n = [];
          return An(e, function(o, u, p) {
            t(o, u, p) && n.push(o);
          }), n;
        }
        function st(e, t, n, o, u) {
          var p = -1, m = e.length;
          for (n || (n = Dp), u || (u = []); ++p < m; ) {
            var v = e[p];
            t > 0 && n(v) ? t > 1 ? st(v, t - 1, n, o, u) : wn(u, v) : o || (u[u.length] = v);
          }
          return u;
        }
        var Pa = Wu(), hu = Wu(!0);
        function Gt(e, t) {
          return e && Pa(e, t, at);
        }
        function Ia(e, t) {
          return e && hu(e, t, at);
        }
        function vi(e, t) {
          return bn(t, function(n) {
            return un(e[n]);
          });
        }
        function Hn(e, t) {
          t = Tn(t, e);
          for (var n = 0, o = t.length; e != null && n < o; )
            e = e[Xt(t[n++])];
          return n && n == o ? e : i;
        }
        function pu(e, t, n) {
          var o = t(e);
          return de(e) ? o : wn(o, n(e));
        }
        function ht(e) {
          return e == null ? e === i ? Kr : mt : Dn && Dn in Fe(e) ? Ip(e) : Yp(e);
        }
        function ka(e, t) {
          return e > t;
        }
        function Zh(e, t) {
          return e != null && Me.call(e, t);
        }
        function Vh(e, t) {
          return e != null && t in Fe(e);
        }
        function Qh(e, t, n) {
          return e >= lt(t, n) && e < rt(t, n);
        }
        function Ma(e, t, n) {
          for (var o = n ? ga : Qr, u = e[0].length, p = e.length, m = p, v = E(p), w = 1 / 0, C = []; m--; ) {
            var P = e[m];
            m && t && (P = qe(P, At(t))), w = lt(P.length, w), v[m] = !n && (t || u >= 120 && P.length >= 120) ? new Un(m && P) : i;
          }
          P = e[0];
          var N = -1, z = v[0];
          e:
            for (; ++N < u && C.length < w; ) {
              var X = P[N], re = t ? t(X) : X;
              if (X = n || X !== 0 ? X : 0, !(z ? br(z, re) : o(C, re, n))) {
                for (m = p; --m; ) {
                  var _e = v[m];
                  if (!(_e ? br(_e, re) : o(e[m], re, n)))
                    continue e;
                }
                z && z.push(re), C.push(X);
              }
            }
          return C;
        }
        function Jh(e, t, n, o) {
          return Gt(e, function(u, p, m) {
            t(o, n(u), p, m);
          }), o;
        }
        function Or(e, t, n) {
          t = Tn(t, e), e = tf(e, t);
          var o = e == null ? e : e[Xt(Wt(t))];
          return o == null ? i : Et(o, e, n);
        }
        function gu(e) {
          return Qe(e) && ht(e) == $;
        }
        function ep(e) {
          return Qe(e) && ht(e) == Nn;
        }
        function tp(e) {
          return Qe(e) && ht(e) == ae;
        }
        function Cr(e, t, n, o, u) {
          return e === t ? !0 : e == null || t == null || !Qe(e) && !Qe(t) ? e !== e && t !== t : np(e, t, n, o, Cr, u);
        }
        function np(e, t, n, o, u, p) {
          var m = de(e), v = de(t), w = m ? W : ct(e), C = v ? W : ct(t);
          w = w == $ ? vt : w, C = C == $ ? vt : C;
          var P = w == vt, N = C == vt, z = w == C;
          if (z && On(e)) {
            if (!On(t))
              return !1;
            m = !0, P = !1;
          }
          if (z && !P)
            return p || (p = new Ht()), m || cr(e) ? Ku(e, t, n, o, u, p) : Cp(e, t, w, n, o, u, p);
          if (!(n & ee)) {
            var X = P && Me.call(e, "__wrapped__"), re = N && Me.call(t, "__wrapped__");
            if (X || re) {
              var _e = X ? e.value() : e, ie = re ? t.value() : t;
              return p || (p = new Ht()), u(_e, ie, n, o, p);
            }
          }
          return z ? (p || (p = new Ht()), Pp(e, t, n, o, u, p)) : !1;
        }
        function rp(e) {
          return Qe(e) && ct(e) == tt;
        }
        function Na(e, t, n, o) {
          var u = n.length, p = u, m = !o;
          if (e == null)
            return !p;
          for (e = Fe(e); u--; ) {
            var v = n[u];
            if (m && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
              return !1;
          }
          for (; ++u < p; ) {
            v = n[u];
            var w = v[0], C = e[w], P = v[1];
            if (m && v[2]) {
              if (C === i && !(w in e))
                return !1;
            } else {
              var N = new Ht();
              if (o)
                var z = o(C, P, w, e, t, N);
              if (!(z === i ? Cr(P, C, ee | ne, o, N) : z))
                return !1;
            }
          }
          return !0;
        }
        function mu(e) {
          if (!Ze(e) || Up(e))
            return !1;
          var t = un(e) ? rh : Gc;
          return t.test(zn(e));
        }
        function ip(e) {
          return Qe(e) && ht(e) == he;
        }
        function ap(e) {
          return Qe(e) && ct(e) == ft;
        }
        function op(e) {
          return Qe(e) && Ni(e.length) && !!je[ht(e)];
        }
        function vu(e) {
          return typeof e == "function" ? e : e == null ? wt : typeof e == "object" ? de(e) ? bu(e[0], e[1]) : yu(e) : jf(e);
        }
        function La(e) {
          if (!kr(e))
            return fh(e);
          var t = [];
          for (var n in Fe(e))
            Me.call(e, n) && n != "constructor" && t.push(n);
          return t;
        }
        function sp(e) {
          if (!Ze(e))
            return zp(e);
          var t = kr(e), n = [];
          for (var o in e)
            o == "constructor" && (t || !Me.call(e, o)) || n.push(o);
          return n;
        }
        function Fa(e, t) {
          return e < t;
        }
        function _u(e, t) {
          var n = -1, o = yt(e) ? E(e.length) : [];
          return An(e, function(u, p, m) {
            o[++n] = t(u, p, m);
          }), o;
        }
        function yu(e) {
          var t = Va(e);
          return t.length == 1 && t[0][2] ? Ju(t[0][0], t[0][1]) : function(n) {
            return n === e || Na(n, e, t);
          };
        }
        function bu(e, t) {
          return Ja(e) && Qu(t) ? Ju(Xt(e), t) : function(n) {
            var o = fo(n, e);
            return o === i && o === t ? lo(n, e) : Cr(t, o, ee | ne);
          };
        }
        function _i(e, t, n, o, u) {
          e !== t && Pa(t, function(p, m) {
            if (u || (u = new Ht()), Ze(p))
              up(e, t, m, n, _i, o, u);
            else {
              var v = o ? o(to(e, m), p, m + "", e, t, u) : i;
              v === i && (v = p), Oa(e, m, v);
            }
          }, bt);
        }
        function up(e, t, n, o, u, p, m) {
          var v = to(e, n), w = to(t, n), C = m.get(w);
          if (C) {
            Oa(e, n, C);
            return;
          }
          var P = p ? p(v, w, n + "", e, t, m) : i, N = P === i;
          if (N) {
            var z = de(w), X = !z && On(w), re = !z && !X && cr(w);
            P = w, z || X || re ? de(v) ? P = v : Je(v) ? P = _t(v) : X ? (N = !1, P = ku(w, !0)) : re ? (N = !1, P = Mu(w, !0)) : P = [] : Nr(w) || Yn(w) ? (P = v, Yn(v) ? P = Pf(v) : (!Ze(v) || un(v)) && (P = Vu(w))) : N = !1;
          }
          N && (m.set(w, P), u(P, w, o, p, m), m.delete(w)), Oa(e, n, P);
        }
        function wu(e, t) {
          var n = e.length;
          if (n)
            return t += t < 0 ? n : 0, sn(t, n) ? e[t] : i;
        }
        function xu(e, t, n) {
          t.length ? t = qe(t, function(p) {
            return de(p) ? function(m) {
              return Hn(m, p.length === 1 ? p[0] : p);
            } : p;
          }) : t = [wt];
          var o = -1;
          t = qe(t, At(te()));
          var u = _u(e, function(p, m, v) {
            var w = qe(t, function(C) {
              return C(p);
            });
            return { criteria: w, index: ++o, value: p };
          });
          return Ld(u, function(p, m) {
            return wp(p, m, n);
          });
        }
        function fp(e, t) {
          return Eu(e, t, function(n, o) {
            return lo(e, o);
          });
        }
        function Eu(e, t, n) {
          for (var o = -1, u = t.length, p = {}; ++o < u; ) {
            var m = t[o], v = Hn(e, m);
            n(v, m) && Pr(p, Tn(m, e), v);
          }
          return p;
        }
        function lp(e) {
          return function(t) {
            return Hn(t, e);
          };
        }
        function Da(e, t, n, o) {
          var u = o ? Nd : er, p = -1, m = t.length, v = e;
          for (e === t && (t = _t(t)), n && (v = qe(e, At(n))); ++p < m; )
            for (var w = 0, C = t[p], P = n ? n(C) : C; (w = u(v, P, w, o)) > -1; )
              v !== e && ui.call(v, w, 1), ui.call(e, w, 1);
          return e;
        }
        function Au(e, t) {
          for (var n = e ? t.length : 0, o = n - 1; n--; ) {
            var u = t[n];
            if (n == o || u !== p) {
              var p = u;
              sn(u) ? ui.call(e, u, 1) : Ha(e, u);
            }
          }
          return e;
        }
        function Wa(e, t) {
          return e + ci(iu() * (t - e + 1));
        }
        function cp(e, t, n, o) {
          for (var u = -1, p = rt(li((t - e) / (n || 1)), 0), m = E(p); p--; )
            m[o ? p : ++u] = e, e += n;
          return m;
        }
        function Ua(e, t) {
          var n = "";
          if (!e || t < 1 || t > Xe)
            return n;
          do
            t % 2 && (n += e), t = ci(t / 2), t && (e += e);
          while (t);
          return n;
        }
        function we(e, t) {
          return no(ef(e, t, wt), e + "");
        }
        function dp(e) {
          return su(dr(e));
        }
        function hp(e, t) {
          var n = dr(e);
          return Oi(n, jn(t, 0, n.length));
        }
        function Pr(e, t, n, o) {
          if (!Ze(e))
            return e;
          t = Tn(t, e);
          for (var u = -1, p = t.length, m = p - 1, v = e; v != null && ++u < p; ) {
            var w = Xt(t[u]), C = n;
            if (w === "__proto__" || w === "constructor" || w === "prototype")
              return e;
            if (u != m) {
              var P = v[w];
              C = o ? o(P, w, v) : i, C === i && (C = Ze(P) ? P : sn(t[u + 1]) ? [] : {});
            }
            Tr(v, w, C), v = v[w];
          }
          return e;
        }
        var Su = di ? function(e, t) {
          return di.set(e, t), e;
        } : wt, pp = fi ? function(e, t) {
          return fi(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ho(t),
            writable: !0
          });
        } : wt;
        function gp(e) {
          return Oi(dr(e));
        }
        function Dt(e, t, n) {
          var o = -1, u = e.length;
          t < 0 && (t = -t > u ? 0 : u + t), n = n > u ? u : n, n < 0 && (n += u), u = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var p = E(u); ++o < u; )
            p[o] = e[o + t];
          return p;
        }
        function mp(e, t) {
          var n;
          return An(e, function(o, u, p) {
            return n = t(o, u, p), !n;
          }), !!n;
        }
        function yi(e, t, n) {
          var o = 0, u = e == null ? o : e.length;
          if (typeof t == "number" && t === t && u <= M) {
            for (; o < u; ) {
              var p = o + u >>> 1, m = e[p];
              m !== null && !Tt(m) && (n ? m <= t : m < t) ? o = p + 1 : u = p;
            }
            return u;
          }
          return ja(e, t, wt, n);
        }
        function ja(e, t, n, o) {
          var u = 0, p = e == null ? 0 : e.length;
          if (p === 0)
            return 0;
          t = n(t);
          for (var m = t !== t, v = t === null, w = Tt(t), C = t === i; u < p; ) {
            var P = ci((u + p) / 2), N = n(e[P]), z = N !== i, X = N === null, re = N === N, _e = Tt(N);
            if (m)
              var ie = o || re;
            else C ? ie = re && (o || z) : v ? ie = re && z && (o || !X) : w ? ie = re && z && !X && (o || !_e) : X || _e ? ie = !1 : ie = o ? N <= t : N < t;
            ie ? u = P + 1 : p = P;
          }
          return lt(p, I);
        }
        function Tu(e, t) {
          for (var n = -1, o = e.length, u = 0, p = []; ++n < o; ) {
            var m = e[n], v = t ? t(m) : m;
            if (!n || !$t(v, w)) {
              var w = v;
              p[u++] = m === 0 ? 0 : m;
            }
          }
          return p;
        }
        function Ru(e) {
          return typeof e == "number" ? e : Tt(e) ? l : +e;
        }
        function St(e) {
          if (typeof e == "string")
            return e;
          if (de(e))
            return qe(e, St) + "";
          if (Tt(e))
            return au ? au.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -Ye ? "-0" : t;
        }
        function Sn(e, t, n) {
          var o = -1, u = Qr, p = e.length, m = !0, v = [], w = v;
          if (n)
            m = !1, u = ga;
          else if (p >= f) {
            var C = t ? null : Rp(e);
            if (C)
              return ei(C);
            m = !1, u = br, w = new Un();
          } else
            w = t ? [] : v;
          e:
            for (; ++o < p; ) {
              var P = e[o], N = t ? t(P) : P;
              if (P = n || P !== 0 ? P : 0, m && N === N) {
                for (var z = w.length; z--; )
                  if (w[z] === N)
                    continue e;
                t && w.push(N), v.push(P);
              } else u(w, N, n) || (w !== v && w.push(N), v.push(P));
            }
          return v;
        }
        function Ha(e, t) {
          return t = Tn(t, e), e = tf(e, t), e == null || delete e[Xt(Wt(t))];
        }
        function Ou(e, t, n, o) {
          return Pr(e, t, n(Hn(e, t)), o);
        }
        function bi(e, t, n, o) {
          for (var u = e.length, p = o ? u : -1; (o ? p-- : ++p < u) && t(e[p], p, e); )
            ;
          return n ? Dt(e, o ? 0 : p, o ? p + 1 : u) : Dt(e, o ? p + 1 : 0, o ? u : p);
        }
        function Cu(e, t) {
          var n = e;
          return n instanceof Se && (n = n.value()), ma(t, function(o, u) {
            return u.func.apply(u.thisArg, wn([o], u.args));
          }, n);
        }
        function $a(e, t, n) {
          var o = e.length;
          if (o < 2)
            return o ? Sn(e[0]) : [];
          for (var u = -1, p = E(o); ++u < o; )
            for (var m = e[u], v = -1; ++v < o; )
              v != u && (p[u] = Rr(p[u] || m, e[v], t, n));
          return Sn(st(p, 1), t, n);
        }
        function Pu(e, t, n) {
          for (var o = -1, u = e.length, p = t.length, m = {}; ++o < u; ) {
            var v = o < p ? t[o] : i;
            n(m, e[o], v);
          }
          return m;
        }
        function za(e) {
          return Je(e) ? e : [];
        }
        function Ya(e) {
          return typeof e == "function" ? e : wt;
        }
        function Tn(e, t) {
          return de(e) ? e : Ja(e, t) ? [e] : of(Pe(e));
        }
        var vp = we;
        function Rn(e, t, n) {
          var o = e.length;
          return n = n === i ? o : n, !t && n >= o ? e : Dt(e, t, n);
        }
        var Iu = ih || function(e) {
          return ot.clearTimeout(e);
        };
        function ku(e, t) {
          if (t)
            return e.slice();
          var n = e.length, o = Js ? Js(n) : new e.constructor(n);
          return e.copy(o), o;
        }
        function Ba(e) {
          var t = new e.constructor(e.byteLength);
          return new oi(t).set(new oi(e)), t;
        }
        function _p(e, t) {
          var n = t ? Ba(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function yp(e) {
          var t = new e.constructor(e.source, gs.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function bp(e) {
          return Sr ? Fe(Sr.call(e)) : {};
        }
        function Mu(e, t) {
          var n = t ? Ba(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function Nu(e, t) {
          if (e !== t) {
            var n = e !== i, o = e === null, u = e === e, p = Tt(e), m = t !== i, v = t === null, w = t === t, C = Tt(t);
            if (!v && !C && !p && e > t || p && m && w && !v && !C || o && m && w || !n && w || !u)
              return 1;
            if (!o && !p && !C && e < t || C && n && u && !o && !p || v && n && u || !m && u || !w)
              return -1;
          }
          return 0;
        }
        function wp(e, t, n) {
          for (var o = -1, u = e.criteria, p = t.criteria, m = u.length, v = n.length; ++o < m; ) {
            var w = Nu(u[o], p[o]);
            if (w) {
              if (o >= v)
                return w;
              var C = n[o];
              return w * (C == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function Lu(e, t, n, o) {
          for (var u = -1, p = e.length, m = n.length, v = -1, w = t.length, C = rt(p - m, 0), P = E(w + C), N = !o; ++v < w; )
            P[v] = t[v];
          for (; ++u < m; )
            (N || u < p) && (P[n[u]] = e[u]);
          for (; C--; )
            P[v++] = e[u++];
          return P;
        }
        function Fu(e, t, n, o) {
          for (var u = -1, p = e.length, m = -1, v = n.length, w = -1, C = t.length, P = rt(p - v, 0), N = E(P + C), z = !o; ++u < P; )
            N[u] = e[u];
          for (var X = u; ++w < C; )
            N[X + w] = t[w];
          for (; ++m < v; )
            (z || u < p) && (N[X + n[m]] = e[u++]);
          return N;
        }
        function _t(e, t) {
          var n = -1, o = e.length;
          for (t || (t = E(o)); ++n < o; )
            t[n] = e[n];
          return t;
        }
        function Kt(e, t, n, o) {
          var u = !n;
          n || (n = {});
          for (var p = -1, m = t.length; ++p < m; ) {
            var v = t[p], w = o ? o(n[v], e[v], v, n, e) : i;
            w === i && (w = e[v]), u ? rn(n, v, w) : Tr(n, v, w);
          }
          return n;
        }
        function xp(e, t) {
          return Kt(e, Qa(e), t);
        }
        function Ep(e, t) {
          return Kt(e, Xu(e), t);
        }
        function wi(e, t) {
          return function(n, o) {
            var u = de(n) ? Od : Bh, p = t ? t() : {};
            return u(n, e, te(o, 2), p);
          };
        }
        function ur(e) {
          return we(function(t, n) {
            var o = -1, u = n.length, p = u > 1 ? n[u - 1] : i, m = u > 2 ? n[2] : i;
            for (p = e.length > 3 && typeof p == "function" ? (u--, p) : i, m && pt(n[0], n[1], m) && (p = u < 3 ? i : p, u = 1), t = Fe(t); ++o < u; ) {
              var v = n[o];
              v && e(t, v, o, p);
            }
            return t;
          });
        }
        function Du(e, t) {
          return function(n, o) {
            if (n == null)
              return n;
            if (!yt(n))
              return e(n, o);
            for (var u = n.length, p = t ? u : -1, m = Fe(n); (t ? p-- : ++p < u) && o(m[p], p, m) !== !1; )
              ;
            return n;
          };
        }
        function Wu(e) {
          return function(t, n, o) {
            for (var u = -1, p = Fe(t), m = o(t), v = m.length; v--; ) {
              var w = m[e ? v : ++u];
              if (n(p[w], w, p) === !1)
                break;
            }
            return t;
          };
        }
        function Ap(e, t, n) {
          var o = t & G, u = Ir(e);
          function p() {
            var m = this && this !== ot && this instanceof p ? u : e;
            return m.apply(o ? n : this, arguments);
          }
          return p;
        }
        function Uu(e) {
          return function(t) {
            t = Pe(t);
            var n = tr(t) ? jt(t) : i, o = n ? n[0] : t.charAt(0), u = n ? Rn(n, 1).join("") : t.slice(1);
            return o[e]() + u;
          };
        }
        function fr(e) {
          return function(t) {
            return ma(Wf(Df(t).replace(pd, "")), e, "");
          };
        }
        function Ir(e) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var n = sr(e.prototype), o = e.apply(n, t);
            return Ze(o) ? o : n;
          };
        }
        function Sp(e, t, n) {
          var o = Ir(e);
          function u() {
            for (var p = arguments.length, m = E(p), v = p, w = lr(u); v--; )
              m[v] = arguments[v];
            var C = p < 3 && m[0] !== w && m[p - 1] !== w ? [] : xn(m, w);
            if (p -= C.length, p < n)
              return Yu(
                e,
                t,
                xi,
                u.placeholder,
                i,
                m,
                C,
                i,
                i,
                n - p
              );
            var P = this && this !== ot && this instanceof u ? o : e;
            return Et(P, this, m);
          }
          return u;
        }
        function ju(e) {
          return function(t, n, o) {
            var u = Fe(t);
            if (!yt(t)) {
              var p = te(n, 3);
              t = at(t), n = function(v) {
                return p(u[v], v, u);
              };
            }
            var m = e(t, n, o);
            return m > -1 ? u[p ? t[m] : m] : i;
          };
        }
        function Hu(e) {
          return on(function(t) {
            var n = t.length, o = n, u = Lt.prototype.thru;
            for (e && t.reverse(); o--; ) {
              var p = t[o];
              if (typeof p != "function")
                throw new Nt(g);
              if (u && !m && Ti(p) == "wrapper")
                var m = new Lt([], !0);
            }
            for (o = m ? o : n; ++o < n; ) {
              p = t[o];
              var v = Ti(p), w = v == "wrapper" ? Za(p) : i;
              w && eo(w[0]) && w[1] == (Le | Z | O | ue) && !w[4].length && w[9] == 1 ? m = m[Ti(w[0])].apply(m, w[3]) : m = p.length == 1 && eo(p) ? m[v]() : m.thru(p);
            }
            return function() {
              var C = arguments, P = C[0];
              if (m && C.length == 1 && de(P))
                return m.plant(P).value();
              for (var N = 0, z = n ? t[N].apply(this, C) : P; ++N < n; )
                z = t[N].call(this, z);
              return z;
            };
          });
        }
        function xi(e, t, n, o, u, p, m, v, w, C) {
          var P = t & Le, N = t & G, z = t & se, X = t & (Z | ce), re = t & Re, _e = z ? i : Ir(e);
          function ie() {
            for (var Ee = arguments.length, Te = E(Ee), Rt = Ee; Rt--; )
              Te[Rt] = arguments[Rt];
            if (X)
              var gt = lr(ie), Ot = Dd(Te, gt);
            if (o && (Te = Lu(Te, o, u, X)), p && (Te = Fu(Te, p, m, X)), Ee -= Ot, X && Ee < C) {
              var et = xn(Te, gt);
              return Yu(
                e,
                t,
                xi,
                ie.placeholder,
                n,
                Te,
                et,
                v,
                w,
                C - Ee
              );
            }
            var zt = N ? n : this, ln = z ? zt[e] : e;
            return Ee = Te.length, v ? Te = Bp(Te, v) : re && Ee > 1 && Te.reverse(), P && w < Ee && (Te.length = w), this && this !== ot && this instanceof ie && (ln = _e || Ir(ln)), ln.apply(zt, Te);
          }
          return ie;
        }
        function $u(e, t) {
          return function(n, o) {
            return Jh(n, e, t(o), {});
          };
        }
        function Ei(e, t) {
          return function(n, o) {
            var u;
            if (n === i && o === i)
              return t;
            if (n !== i && (u = n), o !== i) {
              if (u === i)
                return o;
              typeof n == "string" || typeof o == "string" ? (n = St(n), o = St(o)) : (n = Ru(n), o = Ru(o)), u = e(n, o);
            }
            return u;
          };
        }
        function qa(e) {
          return on(function(t) {
            return t = qe(t, At(te())), we(function(n) {
              var o = this;
              return e(t, function(u) {
                return Et(u, o, n);
              });
            });
          });
        }
        function Ai(e, t) {
          t = t === i ? " " : St(t);
          var n = t.length;
          if (n < 2)
            return n ? Ua(t, e) : t;
          var o = Ua(t, li(e / nr(t)));
          return tr(t) ? Rn(jt(o), 0, e).join("") : o.slice(0, e);
        }
        function Tp(e, t, n, o) {
          var u = t & G, p = Ir(e);
          function m() {
            for (var v = -1, w = arguments.length, C = -1, P = o.length, N = E(P + w), z = this && this !== ot && this instanceof m ? p : e; ++C < P; )
              N[C] = o[C];
            for (; w--; )
              N[C++] = arguments[++v];
            return Et(z, u ? n : this, N);
          }
          return m;
        }
        function zu(e) {
          return function(t, n, o) {
            return o && typeof o != "number" && pt(t, n, o) && (n = o = i), t = fn(t), n === i ? (n = t, t = 0) : n = fn(n), o = o === i ? t < n ? 1 : -1 : fn(o), cp(t, n, o, e);
          };
        }
        function Si(e) {
          return function(t, n) {
            return typeof t == "string" && typeof n == "string" || (t = Ut(t), n = Ut(n)), e(t, n);
          };
        }
        function Yu(e, t, n, o, u, p, m, v, w, C) {
          var P = t & Z, N = P ? m : i, z = P ? i : m, X = P ? p : i, re = P ? i : p;
          t |= P ? O : Ue, t &= ~(P ? Ue : O), t & xe || (t &= -4);
          var _e = [
            e,
            t,
            u,
            X,
            N,
            re,
            z,
            v,
            w,
            C
          ], ie = n.apply(i, _e);
          return eo(e) && nf(ie, _e), ie.placeholder = o, rf(ie, e, t);
        }
        function Ga(e) {
          var t = nt[e];
          return function(n, o) {
            if (n = Ut(n), o = o == null ? 0 : lt(ge(o), 292), o && ru(n)) {
              var u = (Pe(n) + "e").split("e"), p = t(u[0] + "e" + (+u[1] + o));
              return u = (Pe(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - o));
            }
            return t(n);
          };
        }
        var Rp = ar && 1 / ei(new ar([, -0]))[1] == Ye ? function(e) {
          return new ar(e);
        } : mo;
        function Bu(e) {
          return function(t) {
            var n = ct(t);
            return n == tt ? Ea(t) : n == ft ? Yd(t) : Fd(t, e(t));
          };
        }
        function an(e, t, n, o, u, p, m, v) {
          var w = t & se;
          if (!w && typeof e != "function")
            throw new Nt(g);
          var C = o ? o.length : 0;
          if (C || (t &= -97, o = u = i), m = m === i ? m : rt(ge(m), 0), v = v === i ? v : ge(v), C -= u ? u.length : 0, t & Ue) {
            var P = o, N = u;
            o = u = i;
          }
          var z = w ? i : Za(e), X = [
            e,
            t,
            n,
            o,
            u,
            P,
            N,
            p,
            m,
            v
          ];
          if (z && $p(X, z), e = X[0], t = X[1], n = X[2], o = X[3], u = X[4], v = X[9] = X[9] === i ? w ? 0 : e.length : rt(X[9] - C, 0), !v && t & (Z | ce) && (t &= -25), !t || t == G)
            var re = Ap(e, t, n);
          else t == Z || t == ce ? re = Sp(e, t, v) : (t == O || t == (G | O)) && !u.length ? re = Tp(e, t, n, o) : re = xi.apply(i, X);
          var _e = z ? Su : nf;
          return rf(_e(re, X), e, t);
        }
        function qu(e, t, n, o) {
          return e === i || $t(e, ir[n]) && !Me.call(o, n) ? t : e;
        }
        function Gu(e, t, n, o, u, p) {
          return Ze(e) && Ze(t) && (p.set(t, e), _i(e, t, i, Gu, p), p.delete(t)), e;
        }
        function Op(e) {
          return Nr(e) ? i : e;
        }
        function Ku(e, t, n, o, u, p) {
          var m = n & ee, v = e.length, w = t.length;
          if (v != w && !(m && w > v))
            return !1;
          var C = p.get(e), P = p.get(t);
          if (C && P)
            return C == t && P == e;
          var N = -1, z = !0, X = n & ne ? new Un() : i;
          for (p.set(e, t), p.set(t, e); ++N < v; ) {
            var re = e[N], _e = t[N];
            if (o)
              var ie = m ? o(_e, re, N, t, e, p) : o(re, _e, N, e, t, p);
            if (ie !== i) {
              if (ie)
                continue;
              z = !1;
              break;
            }
            if (X) {
              if (!va(t, function(Ee, Te) {
                if (!br(X, Te) && (re === Ee || u(re, Ee, n, o, p)))
                  return X.push(Te);
              })) {
                z = !1;
                break;
              }
            } else if (!(re === _e || u(re, _e, n, o, p))) {
              z = !1;
              break;
            }
          }
          return p.delete(e), p.delete(t), z;
        }
        function Cp(e, t, n, o, u, p, m) {
          switch (n) {
            case Jt:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case Nn:
              return !(e.byteLength != t.byteLength || !p(new oi(e), new oi(t)));
            case j:
            case ae:
            case It:
              return $t(+e, +t);
            case Be:
              return e.name == t.name && e.message == t.message;
            case he:
            case gn:
              return e == t + "";
            case tt:
              var v = Ea;
            case ft:
              var w = o & ee;
              if (v || (v = ei), e.size != t.size && !w)
                return !1;
              var C = m.get(e);
              if (C)
                return C == t;
              o |= ne, m.set(e, t);
              var P = Ku(v(e), v(t), o, u, p, m);
              return m.delete(e), P;
            case Mn:
              if (Sr)
                return Sr.call(e) == Sr.call(t);
          }
          return !1;
        }
        function Pp(e, t, n, o, u, p) {
          var m = n & ee, v = Ka(e), w = v.length, C = Ka(t), P = C.length;
          if (w != P && !m)
            return !1;
          for (var N = w; N--; ) {
            var z = v[N];
            if (!(m ? z in t : Me.call(t, z)))
              return !1;
          }
          var X = p.get(e), re = p.get(t);
          if (X && re)
            return X == t && re == e;
          var _e = !0;
          p.set(e, t), p.set(t, e);
          for (var ie = m; ++N < w; ) {
            z = v[N];
            var Ee = e[z], Te = t[z];
            if (o)
              var Rt = m ? o(Te, Ee, z, t, e, p) : o(Ee, Te, z, e, t, p);
            if (!(Rt === i ? Ee === Te || u(Ee, Te, n, o, p) : Rt)) {
              _e = !1;
              break;
            }
            ie || (ie = z == "constructor");
          }
          if (_e && !ie) {
            var gt = e.constructor, Ot = t.constructor;
            gt != Ot && "constructor" in e && "constructor" in t && !(typeof gt == "function" && gt instanceof gt && typeof Ot == "function" && Ot instanceof Ot) && (_e = !1);
          }
          return p.delete(e), p.delete(t), _e;
        }
        function on(e) {
          return no(ef(e, i, lf), e + "");
        }
        function Ka(e) {
          return pu(e, at, Qa);
        }
        function Xa(e) {
          return pu(e, bt, Xu);
        }
        var Za = di ? function(e) {
          return di.get(e);
        } : mo;
        function Ti(e) {
          for (var t = e.name + "", n = or[t], o = Me.call(or, t) ? n.length : 0; o--; ) {
            var u = n[o], p = u.func;
            if (p == null || p == e)
              return u.name;
          }
          return t;
        }
        function lr(e) {
          var t = Me.call(h, "placeholder") ? h : e;
          return t.placeholder;
        }
        function te() {
          var e = h.iteratee || po;
          return e = e === po ? vu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function Ri(e, t) {
          var n = e.__data__;
          return Wp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
        }
        function Va(e) {
          for (var t = at(e), n = t.length; n--; ) {
            var o = t[n], u = e[o];
            t[n] = [o, u, Qu(u)];
          }
          return t;
        }
        function $n(e, t) {
          var n = Hd(e, t);
          return mu(n) ? n : i;
        }
        function Ip(e) {
          var t = Me.call(e, Dn), n = e[Dn];
          try {
            e[Dn] = i;
            var o = !0;
          } catch {
          }
          var u = ii.call(e);
          return o && (t ? e[Dn] = n : delete e[Dn]), u;
        }
        var Qa = Sa ? function(e) {
          return e == null ? [] : (e = Fe(e), bn(Sa(e), function(t) {
            return tu.call(e, t);
          }));
        } : vo, Xu = Sa ? function(e) {
          for (var t = []; e; )
            wn(t, Qa(e)), e = si(e);
          return t;
        } : vo, ct = ht;
        (Ta && ct(new Ta(new ArrayBuffer(1))) != Jt || xr && ct(new xr()) != tt || Ra && ct(Ra.resolve()) != yr || ar && ct(new ar()) != ft || Er && ct(new Er()) != mn) && (ct = function(e) {
          var t = ht(e), n = t == vt ? e.constructor : i, o = n ? zn(n) : "";
          if (o)
            switch (o) {
              case hh:
                return Jt;
              case ph:
                return tt;
              case gh:
                return yr;
              case mh:
                return ft;
              case vh:
                return mn;
            }
          return t;
        });
        function kp(e, t, n) {
          for (var o = -1, u = n.length; ++o < u; ) {
            var p = n[o], m = p.size;
            switch (p.type) {
              case "drop":
                e += m;
                break;
              case "dropRight":
                t -= m;
                break;
              case "take":
                t = lt(t, e + m);
                break;
              case "takeRight":
                e = rt(e, t - m);
                break;
            }
          }
          return { start: e, end: t };
        }
        function Mp(e) {
          var t = e.match(Uc);
          return t ? t[1].split(jc) : [];
        }
        function Zu(e, t, n) {
          t = Tn(t, e);
          for (var o = -1, u = t.length, p = !1; ++o < u; ) {
            var m = Xt(t[o]);
            if (!(p = e != null && n(e, m)))
              break;
            e = e[m];
          }
          return p || ++o != u ? p : (u = e == null ? 0 : e.length, !!u && Ni(u) && sn(m, u) && (de(e) || Yn(e)));
        }
        function Np(e) {
          var t = e.length, n = new e.constructor(t);
          return t && typeof e[0] == "string" && Me.call(e, "index") && (n.index = e.index, n.input = e.input), n;
        }
        function Vu(e) {
          return typeof e.constructor == "function" && !kr(e) ? sr(si(e)) : {};
        }
        function Lp(e, t, n) {
          var o = e.constructor;
          switch (t) {
            case Nn:
              return Ba(e);
            case j:
            case ae:
              return new o(+e);
            case Jt:
              return _p(e, n);
            case Xn:
            case Zn:
            case Vn:
            case vn:
            case _n:
            case yn:
            case Ln:
            case Qn:
            case d:
              return Mu(e, n);
            case tt:
              return new o();
            case It:
            case gn:
              return new o(e);
            case he:
              return yp(e);
            case ft:
              return new o();
            case Mn:
              return bp(e);
          }
        }
        function Fp(e, t) {
          var n = t.length;
          if (!n)
            return e;
          var o = n - 1;
          return t[o] = (n > 1 ? "& " : "") + t[o], t = t.join(n > 2 ? ", " : " "), e.replace(Wc, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Dp(e) {
          return de(e) || Yn(e) || !!(nu && e && e[nu]);
        }
        function sn(e, t) {
          var n = typeof e;
          return t = t ?? Xe, !!t && (n == "number" || n != "symbol" && Xc.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function pt(e, t, n) {
          if (!Ze(n))
            return !1;
          var o = typeof t;
          return (o == "number" ? yt(n) && sn(t, n.length) : o == "string" && t in n) ? $t(n[t], e) : !1;
        }
        function Ja(e, t) {
          if (de(e))
            return !1;
          var n = typeof e;
          return n == "number" || n == "symbol" || n == "boolean" || e == null || Tt(e) ? !0 : aa.test(e) || !ia.test(e) || t != null && e in Fe(t);
        }
        function Wp(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function eo(e) {
          var t = Ti(e), n = h[t];
          if (typeof n != "function" || !(t in Se.prototype))
            return !1;
          if (e === n)
            return !0;
          var o = Za(n);
          return !!o && e === o[0];
        }
        function Up(e) {
          return !!Qs && Qs in e;
        }
        var jp = ni ? un : _o;
        function kr(e) {
          var t = e && e.constructor, n = typeof t == "function" && t.prototype || ir;
          return e === n;
        }
        function Qu(e) {
          return e === e && !Ze(e);
        }
        function Ju(e, t) {
          return function(n) {
            return n == null ? !1 : n[e] === t && (t !== i || e in Fe(n));
          };
        }
        function Hp(e) {
          var t = ki(e, function(o) {
            return n.size === A && n.clear(), o;
          }), n = t.cache;
          return t;
        }
        function $p(e, t) {
          var n = e[1], o = t[1], u = n | o, p = u < (G | se | Le), m = o == Le && n == Z || o == Le && n == ue && e[7].length <= t[8] || o == (Le | ue) && t[7].length <= t[8] && n == Z;
          if (!(p || m))
            return e;
          o & G && (e[2] = t[2], u |= n & G ? 0 : xe);
          var v = t[3];
          if (v) {
            var w = e[3];
            e[3] = w ? Lu(w, v, t[4]) : v, e[4] = w ? xn(e[3], R) : t[4];
          }
          return v = t[5], v && (w = e[5], e[5] = w ? Fu(w, v, t[6]) : v, e[6] = w ? xn(e[5], R) : t[6]), v = t[7], v && (e[7] = v), o & Le && (e[8] = e[8] == null ? t[8] : lt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
        }
        function zp(e) {
          var t = [];
          if (e != null)
            for (var n in Fe(e))
              t.push(n);
          return t;
        }
        function Yp(e) {
          return ii.call(e);
        }
        function ef(e, t, n) {
          return t = rt(t === i ? e.length - 1 : t, 0), function() {
            for (var o = arguments, u = -1, p = rt(o.length - t, 0), m = E(p); ++u < p; )
              m[u] = o[t + u];
            u = -1;
            for (var v = E(t + 1); ++u < t; )
              v[u] = o[u];
            return v[t] = n(m), Et(e, this, v);
          };
        }
        function tf(e, t) {
          return t.length < 2 ? e : Hn(e, Dt(t, 0, -1));
        }
        function Bp(e, t) {
          for (var n = e.length, o = lt(t.length, n), u = _t(e); o--; ) {
            var p = t[o];
            e[o] = sn(p, n) ? u[p] : i;
          }
          return e;
        }
        function to(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var nf = af(Su), Mr = oh || function(e, t) {
          return ot.setTimeout(e, t);
        }, no = af(pp);
        function rf(e, t, n) {
          var o = t + "";
          return no(e, Fp(o, qp(Mp(o), n)));
        }
        function af(e) {
          var t = 0, n = 0;
          return function() {
            var o = lh(), u = it - (o - n);
            if (n = o, u > 0) {
              if (++t >= Ve)
                return arguments[0];
            } else
              t = 0;
            return e.apply(i, arguments);
          };
        }
        function Oi(e, t) {
          var n = -1, o = e.length, u = o - 1;
          for (t = t === i ? o : t; ++n < t; ) {
            var p = Wa(n, u), m = e[p];
            e[p] = e[n], e[n] = m;
          }
          return e.length = t, e;
        }
        var of = Hp(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lc, function(n, o, u, p) {
            t.push(u ? p.replace(zc, "$1") : o || n);
          }), t;
        });
        function Xt(e) {
          if (typeof e == "string" || Tt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -Ye ? "-0" : t;
        }
        function zn(e) {
          if (e != null) {
            try {
              return ri.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function qp(e, t) {
          return Mt(D, function(n) {
            var o = "_." + n[0];
            t & n[1] && !Qr(e, o) && e.push(o);
          }), e.sort();
        }
        function sf(e) {
          if (e instanceof Se)
            return e.clone();
          var t = new Lt(e.__wrapped__, e.__chain__);
          return t.__actions__ = _t(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function Gp(e, t, n) {
          (n ? pt(e, t, n) : t === i) ? t = 1 : t = rt(ge(t), 0);
          var o = e == null ? 0 : e.length;
          if (!o || t < 1)
            return [];
          for (var u = 0, p = 0, m = E(li(o / t)); u < o; )
            m[p++] = Dt(e, u, u += t);
          return m;
        }
        function Kp(e) {
          for (var t = -1, n = e == null ? 0 : e.length, o = 0, u = []; ++t < n; ) {
            var p = e[t];
            p && (u[o++] = p);
          }
          return u;
        }
        function Xp() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = E(e - 1), n = arguments[0], o = e; o--; )
            t[o - 1] = arguments[o];
          return wn(de(n) ? _t(n) : [n], st(t, 1));
        }
        var Zp = we(function(e, t) {
          return Je(e) ? Rr(e, st(t, 1, Je, !0)) : [];
        }), Vp = we(function(e, t) {
          var n = Wt(t);
          return Je(n) && (n = i), Je(e) ? Rr(e, st(t, 1, Je, !0), te(n, 2)) : [];
        }), Qp = we(function(e, t) {
          var n = Wt(t);
          return Je(n) && (n = i), Je(e) ? Rr(e, st(t, 1, Je, !0), i, n) : [];
        });
        function Jp(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (t = n || t === i ? 1 : ge(t), Dt(e, t < 0 ? 0 : t, o)) : [];
        }
        function eg(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (t = n || t === i ? 1 : ge(t), t = o - t, Dt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function tg(e, t) {
          return e && e.length ? bi(e, te(t, 3), !0, !0) : [];
        }
        function ng(e, t) {
          return e && e.length ? bi(e, te(t, 3), !0) : [];
        }
        function rg(e, t, n, o) {
          var u = e == null ? 0 : e.length;
          return u ? (n && typeof n != "number" && pt(e, t, n) && (n = 0, o = u), Xh(e, t, n, o)) : [];
        }
        function uf(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var u = n == null ? 0 : ge(n);
          return u < 0 && (u = rt(o + u, 0)), Jr(e, te(t, 3), u);
        }
        function ff(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var u = o - 1;
          return n !== i && (u = ge(n), u = n < 0 ? rt(o + u, 0) : lt(u, o - 1)), Jr(e, te(t, 3), u, !0);
        }
        function lf(e) {
          var t = e == null ? 0 : e.length;
          return t ? st(e, 1) : [];
        }
        function ig(e) {
          var t = e == null ? 0 : e.length;
          return t ? st(e, Ye) : [];
        }
        function ag(e, t) {
          var n = e == null ? 0 : e.length;
          return n ? (t = t === i ? 1 : ge(t), st(e, t)) : [];
        }
        function og(e) {
          for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
            var u = e[t];
            o[u[0]] = u[1];
          }
          return o;
        }
        function cf(e) {
          return e && e.length ? e[0] : i;
        }
        function sg(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var u = n == null ? 0 : ge(n);
          return u < 0 && (u = rt(o + u, 0)), er(e, t, u);
        }
        function ug(e) {
          var t = e == null ? 0 : e.length;
          return t ? Dt(e, 0, -1) : [];
        }
        var fg = we(function(e) {
          var t = qe(e, za);
          return t.length && t[0] === e[0] ? Ma(t) : [];
        }), lg = we(function(e) {
          var t = Wt(e), n = qe(e, za);
          return t === Wt(n) ? t = i : n.pop(), n.length && n[0] === e[0] ? Ma(n, te(t, 2)) : [];
        }), cg = we(function(e) {
          var t = Wt(e), n = qe(e, za);
          return t = typeof t == "function" ? t : i, t && n.pop(), n.length && n[0] === e[0] ? Ma(n, i, t) : [];
        });
        function dg(e, t) {
          return e == null ? "" : uh.call(e, t);
        }
        function Wt(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : i;
        }
        function hg(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var u = o;
          return n !== i && (u = ge(n), u = u < 0 ? rt(o + u, 0) : lt(u, o - 1)), t === t ? qd(e, t, u) : Jr(e, Ys, u, !0);
        }
        function pg(e, t) {
          return e && e.length ? wu(e, ge(t)) : i;
        }
        var gg = we(df);
        function df(e, t) {
          return e && e.length && t && t.length ? Da(e, t) : e;
        }
        function mg(e, t, n) {
          return e && e.length && t && t.length ? Da(e, t, te(n, 2)) : e;
        }
        function vg(e, t, n) {
          return e && e.length && t && t.length ? Da(e, t, i, n) : e;
        }
        var _g = on(function(e, t) {
          var n = e == null ? 0 : e.length, o = Ca(e, t);
          return Au(e, qe(t, function(u) {
            return sn(u, n) ? +u : u;
          }).sort(Nu)), o;
        });
        function yg(e, t) {
          var n = [];
          if (!(e && e.length))
            return n;
          var o = -1, u = [], p = e.length;
          for (t = te(t, 3); ++o < p; ) {
            var m = e[o];
            t(m, o, e) && (n.push(m), u.push(o));
          }
          return Au(e, u), n;
        }
        function ro(e) {
          return e == null ? e : dh.call(e);
        }
        function bg(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (n && typeof n != "number" && pt(e, t, n) ? (t = 0, n = o) : (t = t == null ? 0 : ge(t), n = n === i ? o : ge(n)), Dt(e, t, n)) : [];
        }
        function wg(e, t) {
          return yi(e, t);
        }
        function xg(e, t, n) {
          return ja(e, t, te(n, 2));
        }
        function Eg(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var o = yi(e, t);
            if (o < n && $t(e[o], t))
              return o;
          }
          return -1;
        }
        function Ag(e, t) {
          return yi(e, t, !0);
        }
        function Sg(e, t, n) {
          return ja(e, t, te(n, 2), !0);
        }
        function Tg(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var o = yi(e, t, !0) - 1;
            if ($t(e[o], t))
              return o;
          }
          return -1;
        }
        function Rg(e) {
          return e && e.length ? Tu(e) : [];
        }
        function Og(e, t) {
          return e && e.length ? Tu(e, te(t, 2)) : [];
        }
        function Cg(e) {
          var t = e == null ? 0 : e.length;
          return t ? Dt(e, 1, t) : [];
        }
        function Pg(e, t, n) {
          return e && e.length ? (t = n || t === i ? 1 : ge(t), Dt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Ig(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (t = n || t === i ? 1 : ge(t), t = o - t, Dt(e, t < 0 ? 0 : t, o)) : [];
        }
        function kg(e, t) {
          return e && e.length ? bi(e, te(t, 3), !1, !0) : [];
        }
        function Mg(e, t) {
          return e && e.length ? bi(e, te(t, 3)) : [];
        }
        var Ng = we(function(e) {
          return Sn(st(e, 1, Je, !0));
        }), Lg = we(function(e) {
          var t = Wt(e);
          return Je(t) && (t = i), Sn(st(e, 1, Je, !0), te(t, 2));
        }), Fg = we(function(e) {
          var t = Wt(e);
          return t = typeof t == "function" ? t : i, Sn(st(e, 1, Je, !0), i, t);
        });
        function Dg(e) {
          return e && e.length ? Sn(e) : [];
        }
        function Wg(e, t) {
          return e && e.length ? Sn(e, te(t, 2)) : [];
        }
        function Ug(e, t) {
          return t = typeof t == "function" ? t : i, e && e.length ? Sn(e, i, t) : [];
        }
        function io(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = bn(e, function(n) {
            if (Je(n))
              return t = rt(n.length, t), !0;
          }), wa(t, function(n) {
            return qe(e, _a(n));
          });
        }
        function hf(e, t) {
          if (!(e && e.length))
            return [];
          var n = io(e);
          return t == null ? n : qe(n, function(o) {
            return Et(t, i, o);
          });
        }
        var jg = we(function(e, t) {
          return Je(e) ? Rr(e, t) : [];
        }), Hg = we(function(e) {
          return $a(bn(e, Je));
        }), $g = we(function(e) {
          var t = Wt(e);
          return Je(t) && (t = i), $a(bn(e, Je), te(t, 2));
        }), zg = we(function(e) {
          var t = Wt(e);
          return t = typeof t == "function" ? t : i, $a(bn(e, Je), i, t);
        }), Yg = we(io);
        function Bg(e, t) {
          return Pu(e || [], t || [], Tr);
        }
        function qg(e, t) {
          return Pu(e || [], t || [], Pr);
        }
        var Gg = we(function(e) {
          var t = e.length, n = t > 1 ? e[t - 1] : i;
          return n = typeof n == "function" ? (e.pop(), n) : i, hf(e, n);
        });
        function pf(e) {
          var t = h(e);
          return t.__chain__ = !0, t;
        }
        function Kg(e, t) {
          return t(e), e;
        }
        function Ci(e, t) {
          return t(e);
        }
        var Xg = on(function(e) {
          var t = e.length, n = t ? e[0] : 0, o = this.__wrapped__, u = function(p) {
            return Ca(p, e);
          };
          return t > 1 || this.__actions__.length || !(o instanceof Se) || !sn(n) ? this.thru(u) : (o = o.slice(n, +n + (t ? 1 : 0)), o.__actions__.push({
            func: Ci,
            args: [u],
            thisArg: i
          }), new Lt(o, this.__chain__).thru(function(p) {
            return t && !p.length && p.push(i), p;
          }));
        });
        function Zg() {
          return pf(this);
        }
        function Vg() {
          return new Lt(this.value(), this.__chain__);
        }
        function Qg() {
          this.__values__ === i && (this.__values__ = Of(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function Jg() {
          return this;
        }
        function e0(e) {
          for (var t, n = this; n instanceof pi; ) {
            var o = sf(n);
            o.__index__ = 0, o.__values__ = i, t ? u.__wrapped__ = o : t = o;
            var u = o;
            n = n.__wrapped__;
          }
          return u.__wrapped__ = e, t;
        }
        function t0() {
          var e = this.__wrapped__;
          if (e instanceof Se) {
            var t = e;
            return this.__actions__.length && (t = new Se(this)), t = t.reverse(), t.__actions__.push({
              func: Ci,
              args: [ro],
              thisArg: i
            }), new Lt(t, this.__chain__);
          }
          return this.thru(ro);
        }
        function n0() {
          return Cu(this.__wrapped__, this.__actions__);
        }
        var r0 = wi(function(e, t, n) {
          Me.call(e, n) ? ++e[n] : rn(e, n, 1);
        });
        function i0(e, t, n) {
          var o = de(e) ? $s : Kh;
          return n && pt(e, t, n) && (t = i), o(e, te(t, 3));
        }
        function a0(e, t) {
          var n = de(e) ? bn : du;
          return n(e, te(t, 3));
        }
        var o0 = ju(uf), s0 = ju(ff);
        function u0(e, t) {
          return st(Pi(e, t), 1);
        }
        function f0(e, t) {
          return st(Pi(e, t), Ye);
        }
        function l0(e, t, n) {
          return n = n === i ? 1 : ge(n), st(Pi(e, t), n);
        }
        function gf(e, t) {
          var n = de(e) ? Mt : An;
          return n(e, te(t, 3));
        }
        function mf(e, t) {
          var n = de(e) ? Cd : cu;
          return n(e, te(t, 3));
        }
        var c0 = wi(function(e, t, n) {
          Me.call(e, n) ? e[n].push(t) : rn(e, n, [t]);
        });
        function d0(e, t, n, o) {
          e = yt(e) ? e : dr(e), n = n && !o ? ge(n) : 0;
          var u = e.length;
          return n < 0 && (n = rt(u + n, 0)), Li(e) ? n <= u && e.indexOf(t, n) > -1 : !!u && er(e, t, n) > -1;
        }
        var h0 = we(function(e, t, n) {
          var o = -1, u = typeof t == "function", p = yt(e) ? E(e.length) : [];
          return An(e, function(m) {
            p[++o] = u ? Et(t, m, n) : Or(m, t, n);
          }), p;
        }), p0 = wi(function(e, t, n) {
          rn(e, n, t);
        });
        function Pi(e, t) {
          var n = de(e) ? qe : _u;
          return n(e, te(t, 3));
        }
        function g0(e, t, n, o) {
          return e == null ? [] : (de(t) || (t = t == null ? [] : [t]), n = o ? i : n, de(n) || (n = n == null ? [] : [n]), xu(e, t, n));
        }
        var m0 = wi(function(e, t, n) {
          e[n ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function v0(e, t, n) {
          var o = de(e) ? ma : qs, u = arguments.length < 3;
          return o(e, te(t, 4), n, u, An);
        }
        function _0(e, t, n) {
          var o = de(e) ? Pd : qs, u = arguments.length < 3;
          return o(e, te(t, 4), n, u, cu);
        }
        function y0(e, t) {
          var n = de(e) ? bn : du;
          return n(e, Mi(te(t, 3)));
        }
        function b0(e) {
          var t = de(e) ? su : dp;
          return t(e);
        }
        function w0(e, t, n) {
          (n ? pt(e, t, n) : t === i) ? t = 1 : t = ge(t);
          var o = de(e) ? zh : hp;
          return o(e, t);
        }
        function x0(e) {
          var t = de(e) ? Yh : gp;
          return t(e);
        }
        function E0(e) {
          if (e == null)
            return 0;
          if (yt(e))
            return Li(e) ? nr(e) : e.length;
          var t = ct(e);
          return t == tt || t == ft ? e.size : La(e).length;
        }
        function A0(e, t, n) {
          var o = de(e) ? va : mp;
          return n && pt(e, t, n) && (t = i), o(e, te(t, 3));
        }
        var S0 = we(function(e, t) {
          if (e == null)
            return [];
          var n = t.length;
          return n > 1 && pt(e, t[0], t[1]) ? t = [] : n > 2 && pt(t[0], t[1], t[2]) && (t = [t[0]]), xu(e, st(t, 1), []);
        }), Ii = ah || function() {
          return ot.Date.now();
        };
        function T0(e, t) {
          if (typeof t != "function")
            throw new Nt(g);
          return e = ge(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function vf(e, t, n) {
          return t = n ? i : t, t = e && t == null ? e.length : t, an(e, Le, i, i, i, i, t);
        }
        function _f(e, t) {
          var n;
          if (typeof t != "function")
            throw new Nt(g);
          return e = ge(e), function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = i), n;
          };
        }
        var ao = we(function(e, t, n) {
          var o = G;
          if (n.length) {
            var u = xn(n, lr(ao));
            o |= O;
          }
          return an(e, o, t, n, u);
        }), yf = we(function(e, t, n) {
          var o = G | se;
          if (n.length) {
            var u = xn(n, lr(yf));
            o |= O;
          }
          return an(t, o, e, n, u);
        });
        function bf(e, t, n) {
          t = n ? i : t;
          var o = an(e, Z, i, i, i, i, i, t);
          return o.placeholder = bf.placeholder, o;
        }
        function wf(e, t, n) {
          t = n ? i : t;
          var o = an(e, ce, i, i, i, i, i, t);
          return o.placeholder = wf.placeholder, o;
        }
        function xf(e, t, n) {
          var o, u, p, m, v, w, C = 0, P = !1, N = !1, z = !0;
          if (typeof e != "function")
            throw new Nt(g);
          t = Ut(t) || 0, Ze(n) && (P = !!n.leading, N = "maxWait" in n, p = N ? rt(Ut(n.maxWait) || 0, t) : p, z = "trailing" in n ? !!n.trailing : z);
          function X(et) {
            var zt = o, ln = u;
            return o = u = i, C = et, m = e.apply(ln, zt), m;
          }
          function re(et) {
            return C = et, v = Mr(Ee, t), P ? X(et) : m;
          }
          function _e(et) {
            var zt = et - w, ln = et - C, Hf = t - zt;
            return N ? lt(Hf, p - ln) : Hf;
          }
          function ie(et) {
            var zt = et - w, ln = et - C;
            return w === i || zt >= t || zt < 0 || N && ln >= p;
          }
          function Ee() {
            var et = Ii();
            if (ie(et))
              return Te(et);
            v = Mr(Ee, _e(et));
          }
          function Te(et) {
            return v = i, z && o ? X(et) : (o = u = i, m);
          }
          function Rt() {
            v !== i && Iu(v), C = 0, o = w = u = v = i;
          }
          function gt() {
            return v === i ? m : Te(Ii());
          }
          function Ot() {
            var et = Ii(), zt = ie(et);
            if (o = arguments, u = this, w = et, zt) {
              if (v === i)
                return re(w);
              if (N)
                return Iu(v), v = Mr(Ee, t), X(w);
            }
            return v === i && (v = Mr(Ee, t)), m;
          }
          return Ot.cancel = Rt, Ot.flush = gt, Ot;
        }
        var R0 = we(function(e, t) {
          return lu(e, 1, t);
        }), O0 = we(function(e, t, n) {
          return lu(e, Ut(t) || 0, n);
        });
        function C0(e) {
          return an(e, Re);
        }
        function ki(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new Nt(g);
          var n = function() {
            var o = arguments, u = t ? t.apply(this, o) : o[0], p = n.cache;
            if (p.has(u))
              return p.get(u);
            var m = e.apply(this, o);
            return n.cache = p.set(u, m) || p, m;
          };
          return n.cache = new (ki.Cache || nn)(), n;
        }
        ki.Cache = nn;
        function Mi(e) {
          if (typeof e != "function")
            throw new Nt(g);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        }
        function P0(e) {
          return _f(2, e);
        }
        var I0 = vp(function(e, t) {
          t = t.length == 1 && de(t[0]) ? qe(t[0], At(te())) : qe(st(t, 1), At(te()));
          var n = t.length;
          return we(function(o) {
            for (var u = -1, p = lt(o.length, n); ++u < p; )
              o[u] = t[u].call(this, o[u]);
            return Et(e, this, o);
          });
        }), oo = we(function(e, t) {
          var n = xn(t, lr(oo));
          return an(e, O, i, t, n);
        }), Ef = we(function(e, t) {
          var n = xn(t, lr(Ef));
          return an(e, Ue, i, t, n);
        }), k0 = on(function(e, t) {
          return an(e, ue, i, i, i, t);
        });
        function M0(e, t) {
          if (typeof e != "function")
            throw new Nt(g);
          return t = t === i ? t : ge(t), we(e, t);
        }
        function N0(e, t) {
          if (typeof e != "function")
            throw new Nt(g);
          return t = t == null ? 0 : rt(ge(t), 0), we(function(n) {
            var o = n[t], u = Rn(n, 0, t);
            return o && wn(u, o), Et(e, this, u);
          });
        }
        function L0(e, t, n) {
          var o = !0, u = !0;
          if (typeof e != "function")
            throw new Nt(g);
          return Ze(n) && (o = "leading" in n ? !!n.leading : o, u = "trailing" in n ? !!n.trailing : u), xf(e, t, {
            leading: o,
            maxWait: t,
            trailing: u
          });
        }
        function F0(e) {
          return vf(e, 1);
        }
        function D0(e, t) {
          return oo(Ya(t), e);
        }
        function W0() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return de(e) ? e : [e];
        }
        function U0(e) {
          return Ft(e, K);
        }
        function j0(e, t) {
          return t = typeof t == "function" ? t : i, Ft(e, K, t);
        }
        function H0(e) {
          return Ft(e, k | K);
        }
        function $0(e, t) {
          return t = typeof t == "function" ? t : i, Ft(e, k | K, t);
        }
        function z0(e, t) {
          return t == null || fu(e, t, at(t));
        }
        function $t(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Y0 = Si(ka), B0 = Si(function(e, t) {
          return e >= t;
        }), Yn = gu(/* @__PURE__ */ function() {
          return arguments;
        }()) ? gu : function(e) {
          return Qe(e) && Me.call(e, "callee") && !tu.call(e, "callee");
        }, de = E.isArray, q0 = Fs ? At(Fs) : ep;
        function yt(e) {
          return e != null && Ni(e.length) && !un(e);
        }
        function Je(e) {
          return Qe(e) && yt(e);
        }
        function G0(e) {
          return e === !0 || e === !1 || Qe(e) && ht(e) == j;
        }
        var On = sh || _o, K0 = Ds ? At(Ds) : tp;
        function X0(e) {
          return Qe(e) && e.nodeType === 1 && !Nr(e);
        }
        function Z0(e) {
          if (e == null)
            return !0;
          if (yt(e) && (de(e) || typeof e == "string" || typeof e.splice == "function" || On(e) || cr(e) || Yn(e)))
            return !e.length;
          var t = ct(e);
          if (t == tt || t == ft)
            return !e.size;
          if (kr(e))
            return !La(e).length;
          for (var n in e)
            if (Me.call(e, n))
              return !1;
          return !0;
        }
        function V0(e, t) {
          return Cr(e, t);
        }
        function Q0(e, t, n) {
          n = typeof n == "function" ? n : i;
          var o = n ? n(e, t) : i;
          return o === i ? Cr(e, t, i, n) : !!o;
        }
        function so(e) {
          if (!Qe(e))
            return !1;
          var t = ht(e);
          return t == Be || t == ve || typeof e.message == "string" && typeof e.name == "string" && !Nr(e);
        }
        function J0(e) {
          return typeof e == "number" && ru(e);
        }
        function un(e) {
          if (!Ze(e))
            return !1;
          var t = ht(e);
          return t == H || t == ut || t == J || t == na;
        }
        function Af(e) {
          return typeof e == "number" && e == ge(e);
        }
        function Ni(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xe;
        }
        function Ze(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function Qe(e) {
          return e != null && typeof e == "object";
        }
        var Sf = Ws ? At(Ws) : rp;
        function em(e, t) {
          return e === t || Na(e, t, Va(t));
        }
        function tm(e, t, n) {
          return n = typeof n == "function" ? n : i, Na(e, t, Va(t), n);
        }
        function nm(e) {
          return Tf(e) && e != +e;
        }
        function rm(e) {
          if (jp(e))
            throw new le(c);
          return mu(e);
        }
        function im(e) {
          return e === null;
        }
        function am(e) {
          return e == null;
        }
        function Tf(e) {
          return typeof e == "number" || Qe(e) && ht(e) == It;
        }
        function Nr(e) {
          if (!Qe(e) || ht(e) != vt)
            return !1;
          var t = si(e);
          if (t === null)
            return !0;
          var n = Me.call(t, "constructor") && t.constructor;
          return typeof n == "function" && n instanceof n && ri.call(n) == th;
        }
        var uo = Us ? At(Us) : ip;
        function om(e) {
          return Af(e) && e >= -Xe && e <= Xe;
        }
        var Rf = js ? At(js) : ap;
        function Li(e) {
          return typeof e == "string" || !de(e) && Qe(e) && ht(e) == gn;
        }
        function Tt(e) {
          return typeof e == "symbol" || Qe(e) && ht(e) == Mn;
        }
        var cr = Hs ? At(Hs) : op;
        function sm(e) {
          return e === i;
        }
        function um(e) {
          return Qe(e) && ct(e) == mn;
        }
        function fm(e) {
          return Qe(e) && ht(e) == ra;
        }
        var lm = Si(Fa), cm = Si(function(e, t) {
          return e <= t;
        });
        function Of(e) {
          if (!e)
            return [];
          if (yt(e))
            return Li(e) ? jt(e) : _t(e);
          if (wr && e[wr])
            return zd(e[wr]());
          var t = ct(e), n = t == tt ? Ea : t == ft ? ei : dr;
          return n(e);
        }
        function fn(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Ut(e), e === Ye || e === -Ye) {
            var t = e < 0 ? -1 : 1;
            return t * xt;
          }
          return e === e ? e : 0;
        }
        function ge(e) {
          var t = fn(e), n = t % 1;
          return t === t ? n ? t - n : t : 0;
        }
        function Cf(e) {
          return e ? jn(ge(e), 0, _) : 0;
        }
        function Ut(e) {
          if (typeof e == "number")
            return e;
          if (Tt(e))
            return l;
          if (Ze(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Ze(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Gs(e);
          var n = qc.test(e);
          return n || Kc.test(e) ? Td(e.slice(2), n ? 2 : 8) : Bc.test(e) ? l : +e;
        }
        function Pf(e) {
          return Kt(e, bt(e));
        }
        function dm(e) {
          return e ? jn(ge(e), -Xe, Xe) : e === 0 ? e : 0;
        }
        function Pe(e) {
          return e == null ? "" : St(e);
        }
        var hm = ur(function(e, t) {
          if (kr(t) || yt(t)) {
            Kt(t, at(t), e);
            return;
          }
          for (var n in t)
            Me.call(t, n) && Tr(e, n, t[n]);
        }), If = ur(function(e, t) {
          Kt(t, bt(t), e);
        }), Fi = ur(function(e, t, n, o) {
          Kt(t, bt(t), e, o);
        }), pm = ur(function(e, t, n, o) {
          Kt(t, at(t), e, o);
        }), gm = on(Ca);
        function mm(e, t) {
          var n = sr(e);
          return t == null ? n : uu(n, t);
        }
        var vm = we(function(e, t) {
          e = Fe(e);
          var n = -1, o = t.length, u = o > 2 ? t[2] : i;
          for (u && pt(t[0], t[1], u) && (o = 1); ++n < o; )
            for (var p = t[n], m = bt(p), v = -1, w = m.length; ++v < w; ) {
              var C = m[v], P = e[C];
              (P === i || $t(P, ir[C]) && !Me.call(e, C)) && (e[C] = p[C]);
            }
          return e;
        }), _m = we(function(e) {
          return e.push(i, Gu), Et(kf, i, e);
        });
        function ym(e, t) {
          return zs(e, te(t, 3), Gt);
        }
        function bm(e, t) {
          return zs(e, te(t, 3), Ia);
        }
        function wm(e, t) {
          return e == null ? e : Pa(e, te(t, 3), bt);
        }
        function xm(e, t) {
          return e == null ? e : hu(e, te(t, 3), bt);
        }
        function Em(e, t) {
          return e && Gt(e, te(t, 3));
        }
        function Am(e, t) {
          return e && Ia(e, te(t, 3));
        }
        function Sm(e) {
          return e == null ? [] : vi(e, at(e));
        }
        function Tm(e) {
          return e == null ? [] : vi(e, bt(e));
        }
        function fo(e, t, n) {
          var o = e == null ? i : Hn(e, t);
          return o === i ? n : o;
        }
        function Rm(e, t) {
          return e != null && Zu(e, t, Zh);
        }
        function lo(e, t) {
          return e != null && Zu(e, t, Vh);
        }
        var Om = $u(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = ii.call(t)), e[t] = n;
        }, ho(wt)), Cm = $u(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = ii.call(t)), Me.call(e, t) ? e[t].push(n) : e[t] = [n];
        }, te), Pm = we(Or);
        function at(e) {
          return yt(e) ? ou(e) : La(e);
        }
        function bt(e) {
          return yt(e) ? ou(e, !0) : sp(e);
        }
        function Im(e, t) {
          var n = {};
          return t = te(t, 3), Gt(e, function(o, u, p) {
            rn(n, t(o, u, p), o);
          }), n;
        }
        function km(e, t) {
          var n = {};
          return t = te(t, 3), Gt(e, function(o, u, p) {
            rn(n, u, t(o, u, p));
          }), n;
        }
        var Mm = ur(function(e, t, n) {
          _i(e, t, n);
        }), kf = ur(function(e, t, n, o) {
          _i(e, t, n, o);
        }), Nm = on(function(e, t) {
          var n = {};
          if (e == null)
            return n;
          var o = !1;
          t = qe(t, function(p) {
            return p = Tn(p, e), o || (o = p.length > 1), p;
          }), Kt(e, Xa(e), n), o && (n = Ft(n, k | F | K, Op));
          for (var u = t.length; u--; )
            Ha(n, t[u]);
          return n;
        });
        function Lm(e, t) {
          return Mf(e, Mi(te(t)));
        }
        var Fm = on(function(e, t) {
          return e == null ? {} : fp(e, t);
        });
        function Mf(e, t) {
          if (e == null)
            return {};
          var n = qe(Xa(e), function(o) {
            return [o];
          });
          return t = te(t), Eu(e, n, function(o, u) {
            return t(o, u[0]);
          });
        }
        function Dm(e, t, n) {
          t = Tn(t, e);
          var o = -1, u = t.length;
          for (u || (u = 1, e = i); ++o < u; ) {
            var p = e == null ? i : e[Xt(t[o])];
            p === i && (o = u, p = n), e = un(p) ? p.call(e) : p;
          }
          return e;
        }
        function Wm(e, t, n) {
          return e == null ? e : Pr(e, t, n);
        }
        function Um(e, t, n, o) {
          return o = typeof o == "function" ? o : i, e == null ? e : Pr(e, t, n, o);
        }
        var Nf = Bu(at), Lf = Bu(bt);
        function jm(e, t, n) {
          var o = de(e), u = o || On(e) || cr(e);
          if (t = te(t, 4), n == null) {
            var p = e && e.constructor;
            u ? n = o ? new p() : [] : Ze(e) ? n = un(p) ? sr(si(e)) : {} : n = {};
          }
          return (u ? Mt : Gt)(e, function(m, v, w) {
            return t(n, m, v, w);
          }), n;
        }
        function Hm(e, t) {
          return e == null ? !0 : Ha(e, t);
        }
        function $m(e, t, n) {
          return e == null ? e : Ou(e, t, Ya(n));
        }
        function zm(e, t, n, o) {
          return o = typeof o == "function" ? o : i, e == null ? e : Ou(e, t, Ya(n), o);
        }
        function dr(e) {
          return e == null ? [] : xa(e, at(e));
        }
        function Ym(e) {
          return e == null ? [] : xa(e, bt(e));
        }
        function Bm(e, t, n) {
          return n === i && (n = t, t = i), n !== i && (n = Ut(n), n = n === n ? n : 0), t !== i && (t = Ut(t), t = t === t ? t : 0), jn(Ut(e), t, n);
        }
        function qm(e, t, n) {
          return t = fn(t), n === i ? (n = t, t = 0) : n = fn(n), e = Ut(e), Qh(e, t, n);
        }
        function Gm(e, t, n) {
          if (n && typeof n != "boolean" && pt(e, t, n) && (t = n = i), n === i && (typeof t == "boolean" ? (n = t, t = i) : typeof e == "boolean" && (n = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = fn(e), t === i ? (t = e, e = 0) : t = fn(t)), e > t) {
            var o = e;
            e = t, t = o;
          }
          if (n || e % 1 || t % 1) {
            var u = iu();
            return lt(e + u * (t - e + Sd("1e-" + ((u + "").length - 1))), t);
          }
          return Wa(e, t);
        }
        var Km = fr(function(e, t, n) {
          return t = t.toLowerCase(), e + (n ? Ff(t) : t);
        });
        function Ff(e) {
          return co(Pe(e).toLowerCase());
        }
        function Df(e) {
          return e = Pe(e), e && e.replace(Zc, Wd).replace(gd, "");
        }
        function Xm(e, t, n) {
          e = Pe(e), t = St(t);
          var o = e.length;
          n = n === i ? o : jn(ge(n), 0, o);
          var u = n;
          return n -= t.length, n >= 0 && e.slice(n, u) == t;
        }
        function Zm(e) {
          return e = Pe(e), e && Oe.test(e) ? e.replace(ye, Ud) : e;
        }
        function Vm(e) {
          return e = Pe(e), e && Fc.test(e) ? e.replace(oa, "\\$&") : e;
        }
        var Qm = fr(function(e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }), Jm = fr(function(e, t, n) {
          return e + (n ? " " : "") + t.toLowerCase();
        }), ev = Uu("toLowerCase");
        function tv(e, t, n) {
          e = Pe(e), t = ge(t);
          var o = t ? nr(e) : 0;
          if (!t || o >= t)
            return e;
          var u = (t - o) / 2;
          return Ai(ci(u), n) + e + Ai(li(u), n);
        }
        function nv(e, t, n) {
          e = Pe(e), t = ge(t);
          var o = t ? nr(e) : 0;
          return t && o < t ? e + Ai(t - o, n) : e;
        }
        function rv(e, t, n) {
          e = Pe(e), t = ge(t);
          var o = t ? nr(e) : 0;
          return t && o < t ? Ai(t - o, n) + e : e;
        }
        function iv(e, t, n) {
          return n || t == null ? t = 0 : t && (t = +t), ch(Pe(e).replace(sa, ""), t || 0);
        }
        function av(e, t, n) {
          return (n ? pt(e, t, n) : t === i) ? t = 1 : t = ge(t), Ua(Pe(e), t);
        }
        function ov() {
          var e = arguments, t = Pe(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var sv = fr(function(e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        });
        function uv(e, t, n) {
          return n && typeof n != "number" && pt(e, t, n) && (t = n = i), n = n === i ? _ : n >>> 0, n ? (e = Pe(e), e && (typeof t == "string" || t != null && !uo(t)) && (t = St(t), !t && tr(e)) ? Rn(jt(e), 0, n) : e.split(t, n)) : [];
        }
        var fv = fr(function(e, t, n) {
          return e + (n ? " " : "") + co(t);
        });
        function lv(e, t, n) {
          return e = Pe(e), n = n == null ? 0 : jn(ge(n), 0, e.length), t = St(t), e.slice(n, n + t.length) == t;
        }
        function cv(e, t, n) {
          var o = h.templateSettings;
          n && pt(e, t, n) && (t = i), e = Pe(e), t = Fi({}, t, o, qu);
          var u = Fi({}, t.imports, o.imports, qu), p = at(u), m = xa(u, p), v, w, C = 0, P = t.interpolate || Xr, N = "__p += '", z = Aa(
            (t.escape || Xr).source + "|" + P.source + "|" + (P === en ? Yc : Xr).source + "|" + (t.evaluate || Xr).source + "|$",
            "g"
          ), X = "//# sourceURL=" + (Me.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++bd + "]") + `
`;
          e.replace(z, function(ie, Ee, Te, Rt, gt, Ot) {
            return Te || (Te = Rt), N += e.slice(C, Ot).replace(Vc, jd), Ee && (v = !0, N += `' +
__e(` + Ee + `) +
'`), gt && (w = !0, N += `';
` + gt + `;
__p += '`), Te && (N += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), C = Ot + ie.length, ie;
          }), N += `';
`;
          var re = Me.call(t, "variable") && t.variable;
          if (!re)
            N = `with (obj) {
` + N + `
}
`;
          else if ($c.test(re))
            throw new le(y);
          N = (w ? N.replace(x, "") : N).replace(U, "$1").replace(Y, "$1;"), N = "function(" + (re || "obj") + `) {
` + (re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + N + `return __p
}`;
          var _e = Uf(function() {
            return Ce(p, X + "return " + N).apply(i, m);
          });
          if (_e.source = N, so(_e))
            throw _e;
          return _e;
        }
        function dv(e) {
          return Pe(e).toLowerCase();
        }
        function hv(e) {
          return Pe(e).toUpperCase();
        }
        function pv(e, t, n) {
          if (e = Pe(e), e && (n || t === i))
            return Gs(e);
          if (!e || !(t = St(t)))
            return e;
          var o = jt(e), u = jt(t), p = Ks(o, u), m = Xs(o, u) + 1;
          return Rn(o, p, m).join("");
        }
        function gv(e, t, n) {
          if (e = Pe(e), e && (n || t === i))
            return e.slice(0, Vs(e) + 1);
          if (!e || !(t = St(t)))
            return e;
          var o = jt(e), u = Xs(o, jt(t)) + 1;
          return Rn(o, 0, u).join("");
        }
        function mv(e, t, n) {
          if (e = Pe(e), e && (n || t === i))
            return e.replace(sa, "");
          if (!e || !(t = St(t)))
            return e;
          var o = jt(e), u = Ks(o, jt(t));
          return Rn(o, u).join("");
        }
        function vv(e, t) {
          var n = Ke, o = fe;
          if (Ze(t)) {
            var u = "separator" in t ? t.separator : u;
            n = "length" in t ? ge(t.length) : n, o = "omission" in t ? St(t.omission) : o;
          }
          e = Pe(e);
          var p = e.length;
          if (tr(e)) {
            var m = jt(e);
            p = m.length;
          }
          if (n >= p)
            return e;
          var v = n - nr(o);
          if (v < 1)
            return o;
          var w = m ? Rn(m, 0, v).join("") : e.slice(0, v);
          if (u === i)
            return w + o;
          if (m && (v += w.length - v), uo(u)) {
            if (e.slice(v).search(u)) {
              var C, P = w;
              for (u.global || (u = Aa(u.source, Pe(gs.exec(u)) + "g")), u.lastIndex = 0; C = u.exec(P); )
                var N = C.index;
              w = w.slice(0, N === i ? v : N);
            }
          } else if (e.indexOf(St(u), v) != v) {
            var z = w.lastIndexOf(u);
            z > -1 && (w = w.slice(0, z));
          }
          return w + o;
        }
        function _v(e) {
          return e = Pe(e), e && pe.test(e) ? e.replace(Q, Gd) : e;
        }
        var yv = fr(function(e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }), co = Uu("toUpperCase");
        function Wf(e, t, n) {
          return e = Pe(e), t = n ? i : t, t === i ? $d(e) ? Zd(e) : Md(e) : e.match(t) || [];
        }
        var Uf = we(function(e, t) {
          try {
            return Et(e, i, t);
          } catch (n) {
            return so(n) ? n : new le(n);
          }
        }), bv = on(function(e, t) {
          return Mt(t, function(n) {
            n = Xt(n), rn(e, n, ao(e[n], e));
          }), e;
        });
        function wv(e) {
          var t = e == null ? 0 : e.length, n = te();
          return e = t ? qe(e, function(o) {
            if (typeof o[1] != "function")
              throw new Nt(g);
            return [n(o[0]), o[1]];
          }) : [], we(function(o) {
            for (var u = -1; ++u < t; ) {
              var p = e[u];
              if (Et(p[0], this, o))
                return Et(p[1], this, o);
            }
          });
        }
        function xv(e) {
          return Gh(Ft(e, k));
        }
        function ho(e) {
          return function() {
            return e;
          };
        }
        function Ev(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Av = Hu(), Sv = Hu(!0);
        function wt(e) {
          return e;
        }
        function po(e) {
          return vu(typeof e == "function" ? e : Ft(e, k));
        }
        function Tv(e) {
          return yu(Ft(e, k));
        }
        function Rv(e, t) {
          return bu(e, Ft(t, k));
        }
        var Ov = we(function(e, t) {
          return function(n) {
            return Or(n, e, t);
          };
        }), Cv = we(function(e, t) {
          return function(n) {
            return Or(e, n, t);
          };
        });
        function go(e, t, n) {
          var o = at(t), u = vi(t, o);
          n == null && !(Ze(t) && (u.length || !o.length)) && (n = t, t = e, e = this, u = vi(t, at(t)));
          var p = !(Ze(n) && "chain" in n) || !!n.chain, m = un(e);
          return Mt(u, function(v) {
            var w = t[v];
            e[v] = w, m && (e.prototype[v] = function() {
              var C = this.__chain__;
              if (p || C) {
                var P = e(this.__wrapped__), N = P.__actions__ = _t(this.__actions__);
                return N.push({ func: w, args: arguments, thisArg: e }), P.__chain__ = C, P;
              }
              return w.apply(e, wn([this.value()], arguments));
            });
          }), e;
        }
        function Pv() {
          return ot._ === this && (ot._ = nh), this;
        }
        function mo() {
        }
        function Iv(e) {
          return e = ge(e), we(function(t) {
            return wu(t, e);
          });
        }
        var kv = qa(qe), Mv = qa($s), Nv = qa(va);
        function jf(e) {
          return Ja(e) ? _a(Xt(e)) : lp(e);
        }
        function Lv(e) {
          return function(t) {
            return e == null ? i : Hn(e, t);
          };
        }
        var Fv = zu(), Dv = zu(!0);
        function vo() {
          return [];
        }
        function _o() {
          return !1;
        }
        function Wv() {
          return {};
        }
        function Uv() {
          return "";
        }
        function jv() {
          return !0;
        }
        function Hv(e, t) {
          if (e = ge(e), e < 1 || e > Xe)
            return [];
          var n = _, o = lt(e, _);
          t = te(t), e -= _;
          for (var u = wa(o, t); ++n < e; )
            t(n);
          return u;
        }
        function $v(e) {
          return de(e) ? qe(e, Xt) : Tt(e) ? [e] : _t(of(Pe(e)));
        }
        function zv(e) {
          var t = ++eh;
          return Pe(e) + t;
        }
        var Yv = Ei(function(e, t) {
          return e + t;
        }, 0), Bv = Ga("ceil"), qv = Ei(function(e, t) {
          return e / t;
        }, 1), Gv = Ga("floor");
        function Kv(e) {
          return e && e.length ? mi(e, wt, ka) : i;
        }
        function Xv(e, t) {
          return e && e.length ? mi(e, te(t, 2), ka) : i;
        }
        function Zv(e) {
          return Bs(e, wt);
        }
        function Vv(e, t) {
          return Bs(e, te(t, 2));
        }
        function Qv(e) {
          return e && e.length ? mi(e, wt, Fa) : i;
        }
        function Jv(e, t) {
          return e && e.length ? mi(e, te(t, 2), Fa) : i;
        }
        var e1 = Ei(function(e, t) {
          return e * t;
        }, 1), t1 = Ga("round"), n1 = Ei(function(e, t) {
          return e - t;
        }, 0);
        function r1(e) {
          return e && e.length ? ba(e, wt) : 0;
        }
        function i1(e, t) {
          return e && e.length ? ba(e, te(t, 2)) : 0;
        }
        return h.after = T0, h.ary = vf, h.assign = hm, h.assignIn = If, h.assignInWith = Fi, h.assignWith = pm, h.at = gm, h.before = _f, h.bind = ao, h.bindAll = bv, h.bindKey = yf, h.castArray = W0, h.chain = pf, h.chunk = Gp, h.compact = Kp, h.concat = Xp, h.cond = wv, h.conforms = xv, h.constant = ho, h.countBy = r0, h.create = mm, h.curry = bf, h.curryRight = wf, h.debounce = xf, h.defaults = vm, h.defaultsDeep = _m, h.defer = R0, h.delay = O0, h.difference = Zp, h.differenceBy = Vp, h.differenceWith = Qp, h.drop = Jp, h.dropRight = eg, h.dropRightWhile = tg, h.dropWhile = ng, h.fill = rg, h.filter = a0, h.flatMap = u0, h.flatMapDeep = f0, h.flatMapDepth = l0, h.flatten = lf, h.flattenDeep = ig, h.flattenDepth = ag, h.flip = C0, h.flow = Av, h.flowRight = Sv, h.fromPairs = og, h.functions = Sm, h.functionsIn = Tm, h.groupBy = c0, h.initial = ug, h.intersection = fg, h.intersectionBy = lg, h.intersectionWith = cg, h.invert = Om, h.invertBy = Cm, h.invokeMap = h0, h.iteratee = po, h.keyBy = p0, h.keys = at, h.keysIn = bt, h.map = Pi, h.mapKeys = Im, h.mapValues = km, h.matches = Tv, h.matchesProperty = Rv, h.memoize = ki, h.merge = Mm, h.mergeWith = kf, h.method = Ov, h.methodOf = Cv, h.mixin = go, h.negate = Mi, h.nthArg = Iv, h.omit = Nm, h.omitBy = Lm, h.once = P0, h.orderBy = g0, h.over = kv, h.overArgs = I0, h.overEvery = Mv, h.overSome = Nv, h.partial = oo, h.partialRight = Ef, h.partition = m0, h.pick = Fm, h.pickBy = Mf, h.property = jf, h.propertyOf = Lv, h.pull = gg, h.pullAll = df, h.pullAllBy = mg, h.pullAllWith = vg, h.pullAt = _g, h.range = Fv, h.rangeRight = Dv, h.rearg = k0, h.reject = y0, h.remove = yg, h.rest = M0, h.reverse = ro, h.sampleSize = w0, h.set = Wm, h.setWith = Um, h.shuffle = x0, h.slice = bg, h.sortBy = S0, h.sortedUniq = Rg, h.sortedUniqBy = Og, h.split = uv, h.spread = N0, h.tail = Cg, h.take = Pg, h.takeRight = Ig, h.takeRightWhile = kg, h.takeWhile = Mg, h.tap = Kg, h.throttle = L0, h.thru = Ci, h.toArray = Of, h.toPairs = Nf, h.toPairsIn = Lf, h.toPath = $v, h.toPlainObject = Pf, h.transform = jm, h.unary = F0, h.union = Ng, h.unionBy = Lg, h.unionWith = Fg, h.uniq = Dg, h.uniqBy = Wg, h.uniqWith = Ug, h.unset = Hm, h.unzip = io, h.unzipWith = hf, h.update = $m, h.updateWith = zm, h.values = dr, h.valuesIn = Ym, h.without = jg, h.words = Wf, h.wrap = D0, h.xor = Hg, h.xorBy = $g, h.xorWith = zg, h.zip = Yg, h.zipObject = Bg, h.zipObjectDeep = qg, h.zipWith = Gg, h.entries = Nf, h.entriesIn = Lf, h.extend = If, h.extendWith = Fi, go(h, h), h.add = Yv, h.attempt = Uf, h.camelCase = Km, h.capitalize = Ff, h.ceil = Bv, h.clamp = Bm, h.clone = U0, h.cloneDeep = H0, h.cloneDeepWith = $0, h.cloneWith = j0, h.conformsTo = z0, h.deburr = Df, h.defaultTo = Ev, h.divide = qv, h.endsWith = Xm, h.eq = $t, h.escape = Zm, h.escapeRegExp = Vm, h.every = i0, h.find = o0, h.findIndex = uf, h.findKey = ym, h.findLast = s0, h.findLastIndex = ff, h.findLastKey = bm, h.floor = Gv, h.forEach = gf, h.forEachRight = mf, h.forIn = wm, h.forInRight = xm, h.forOwn = Em, h.forOwnRight = Am, h.get = fo, h.gt = Y0, h.gte = B0, h.has = Rm, h.hasIn = lo, h.head = cf, h.identity = wt, h.includes = d0, h.indexOf = sg, h.inRange = qm, h.invoke = Pm, h.isArguments = Yn, h.isArray = de, h.isArrayBuffer = q0, h.isArrayLike = yt, h.isArrayLikeObject = Je, h.isBoolean = G0, h.isBuffer = On, h.isDate = K0, h.isElement = X0, h.isEmpty = Z0, h.isEqual = V0, h.isEqualWith = Q0, h.isError = so, h.isFinite = J0, h.isFunction = un, h.isInteger = Af, h.isLength = Ni, h.isMap = Sf, h.isMatch = em, h.isMatchWith = tm, h.isNaN = nm, h.isNative = rm, h.isNil = am, h.isNull = im, h.isNumber = Tf, h.isObject = Ze, h.isObjectLike = Qe, h.isPlainObject = Nr, h.isRegExp = uo, h.isSafeInteger = om, h.isSet = Rf, h.isString = Li, h.isSymbol = Tt, h.isTypedArray = cr, h.isUndefined = sm, h.isWeakMap = um, h.isWeakSet = fm, h.join = dg, h.kebabCase = Qm, h.last = Wt, h.lastIndexOf = hg, h.lowerCase = Jm, h.lowerFirst = ev, h.lt = lm, h.lte = cm, h.max = Kv, h.maxBy = Xv, h.mean = Zv, h.meanBy = Vv, h.min = Qv, h.minBy = Jv, h.stubArray = vo, h.stubFalse = _o, h.stubObject = Wv, h.stubString = Uv, h.stubTrue = jv, h.multiply = e1, h.nth = pg, h.noConflict = Pv, h.noop = mo, h.now = Ii, h.pad = tv, h.padEnd = nv, h.padStart = rv, h.parseInt = iv, h.random = Gm, h.reduce = v0, h.reduceRight = _0, h.repeat = av, h.replace = ov, h.result = Dm, h.round = t1, h.runInContext = b, h.sample = b0, h.size = E0, h.snakeCase = sv, h.some = A0, h.sortedIndex = wg, h.sortedIndexBy = xg, h.sortedIndexOf = Eg, h.sortedLastIndex = Ag, h.sortedLastIndexBy = Sg, h.sortedLastIndexOf = Tg, h.startCase = fv, h.startsWith = lv, h.subtract = n1, h.sum = r1, h.sumBy = i1, h.template = cv, h.times = Hv, h.toFinite = fn, h.toInteger = ge, h.toLength = Cf, h.toLower = dv, h.toNumber = Ut, h.toSafeInteger = dm, h.toString = Pe, h.toUpper = hv, h.trim = pv, h.trimEnd = gv, h.trimStart = mv, h.truncate = vv, h.unescape = _v, h.uniqueId = zv, h.upperCase = yv, h.upperFirst = co, h.each = gf, h.eachRight = mf, h.first = cf, go(h, function() {
          var e = {};
          return Gt(h, function(t, n) {
            Me.call(h.prototype, n) || (e[n] = t);
          }), e;
        }(), { chain: !1 }), h.VERSION = s, Mt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          h[e].placeholder = h;
        }), Mt(["drop", "take"], function(e, t) {
          Se.prototype[e] = function(n) {
            n = n === i ? 1 : rt(ge(n), 0);
            var o = this.__filtered__ && !t ? new Se(this) : this.clone();
            return o.__filtered__ ? o.__takeCount__ = lt(n, o.__takeCount__) : o.__views__.push({
              size: lt(n, _),
              type: e + (o.__dir__ < 0 ? "Right" : "")
            }), o;
          }, Se.prototype[e + "Right"] = function(n) {
            return this.reverse()[e](n).reverse();
          };
        }), Mt(["filter", "map", "takeWhile"], function(e, t) {
          var n = t + 1, o = n == De || n == ze;
          Se.prototype[e] = function(u) {
            var p = this.clone();
            return p.__iteratees__.push({
              iteratee: te(u, 3),
              type: n
            }), p.__filtered__ = p.__filtered__ || o, p;
          };
        }), Mt(["head", "last"], function(e, t) {
          var n = "take" + (t ? "Right" : "");
          Se.prototype[e] = function() {
            return this[n](1).value()[0];
          };
        }), Mt(["initial", "tail"], function(e, t) {
          var n = "drop" + (t ? "" : "Right");
          Se.prototype[e] = function() {
            return this.__filtered__ ? new Se(this) : this[n](1);
          };
        }), Se.prototype.compact = function() {
          return this.filter(wt);
        }, Se.prototype.find = function(e) {
          return this.filter(e).head();
        }, Se.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Se.prototype.invokeMap = we(function(e, t) {
          return typeof e == "function" ? new Se(this) : this.map(function(n) {
            return Or(n, e, t);
          });
        }), Se.prototype.reject = function(e) {
          return this.filter(Mi(te(e)));
        }, Se.prototype.slice = function(e, t) {
          e = ge(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0) ? new Se(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== i && (t = ge(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
        }, Se.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Se.prototype.toArray = function() {
          return this.take(_);
        }, Gt(Se.prototype, function(e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), u = h[o ? "take" + (t == "last" ? "Right" : "") : t], p = o || /^find/.test(t);
          u && (h.prototype[t] = function() {
            var m = this.__wrapped__, v = o ? [1] : arguments, w = m instanceof Se, C = v[0], P = w || de(m), N = function(Ee) {
              var Te = u.apply(h, wn([Ee], v));
              return o && z ? Te[0] : Te;
            };
            P && n && typeof C == "function" && C.length != 1 && (w = P = !1);
            var z = this.__chain__, X = !!this.__actions__.length, re = p && !z, _e = w && !X;
            if (!p && P) {
              m = _e ? m : new Se(this);
              var ie = e.apply(m, v);
              return ie.__actions__.push({ func: Ci, args: [N], thisArg: i }), new Lt(ie, z);
            }
            return re && _e ? e.apply(this, v) : (ie = this.thru(N), re ? o ? ie.value()[0] : ie.value() : ie);
          });
        }), Mt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = ti[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
          h.prototype[e] = function() {
            var u = arguments;
            if (o && !this.__chain__) {
              var p = this.value();
              return t.apply(de(p) ? p : [], u);
            }
            return this[n](function(m) {
              return t.apply(de(m) ? m : [], u);
            });
          };
        }), Gt(Se.prototype, function(e, t) {
          var n = h[t];
          if (n) {
            var o = n.name + "";
            Me.call(or, o) || (or[o] = []), or[o].push({ name: t, func: n });
          }
        }), or[xi(i, se).name] = [{
          name: "wrapper",
          func: i
        }], Se.prototype.clone = _h, Se.prototype.reverse = yh, Se.prototype.value = bh, h.prototype.at = Xg, h.prototype.chain = Zg, h.prototype.commit = Vg, h.prototype.next = Qg, h.prototype.plant = e0, h.prototype.reverse = t0, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = n0, h.prototype.first = h.prototype.head, wr && (h.prototype[wr] = Jg), h;
      }, rr = Vd();
      Fn ? ((Fn.exports = rr)._ = rr, ha._ = rr) : ot._ = rr;
    }).call(ob);
  }(Hr, Hr.exports)), Hr.exports;
}
var Io = sb();
const ub = ({ open: r, children: a }) => r ? /* @__PURE__ */ oe.jsx(
  "div",
  {
    className: "overlay-pane dialog ui-widget ui-widget-content ui-front",
    style: { border: "1px solid black", backgroundColor: "#ffffff" },
    tabIndex: "-1",
    role: "dialog",
    children: /* @__PURE__ */ oe.jsx("div", { className: "extaDialog", style: { height: "50vh" }, children: a })
  }
) : /* @__PURE__ */ oe.jsx(oe.Fragment, {}), kc = ({ children: r, onClick: a }) => {
  let s = `dialog-title-${Ne.useId()}`;
  return /* @__PURE__ */ oe.jsx("div", { className: "header", children: /* @__PURE__ */ oe.jsxs("div", { className: "header-common-menu", id: s, onClick: a, children: [
    /* @__PURE__ */ oe.jsx("div", { className: "header-text", children: r }),
    /* @__PURE__ */ oe.jsx("div", { id: "confirm-change-color", className: "header-confirm-button", children: /* @__PURE__ */ oe.jsx("span", { className: "ed-icon-check" }) })
  ] }) });
};
var ko = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Hl;
function fb() {
  return Hl || (Hl = 1, function(r) {
    (function() {
      var a = {}.hasOwnProperty;
      function i() {
        for (var c = "", g = 0; g < arguments.length; g++) {
          var y = arguments[g];
          y && (c = f(c, s(y)));
        }
        return c;
      }
      function s(c) {
        if (typeof c == "string" || typeof c == "number")
          return c;
        if (typeof c != "object")
          return "";
        if (Array.isArray(c))
          return i.apply(null, c);
        if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
          return c.toString();
        var g = "";
        for (var y in c)
          a.call(c, y) && c[y] && (g = f(g, y));
        return g;
      }
      function f(c, g) {
        return g ? c ? c + " " + g : c + g : c;
      }
      r.exports ? (i.default = i, r.exports = i) : window.classNames = i;
    })();
  }(ko)), ko.exports;
}
var lb = fb();
const ds = /* @__PURE__ */ Jo(lb), $l = "react-tabs__tab", Mc = ({
  children: r,
  className: a,
  disabled: i,
  disabledClassName: s,
  id: f,
  panelId: c,
  selected: g,
  selectedClassName: y,
  setSelected: S,
  hasInfo: A = !1
}) => {
  const R = () => {
    S(f);
  };
  return /* @__PURE__ */ oe.jsxs(
    "div",
    {
      className: ds(a, {
        [y]: g,
        [s]: i
      }),
      role: "tab",
      id: f,
      "aria-selected": g ? "true" : "false",
      "aria-disabled": i ? "true" : "false",
      "aria-controls": c,
      onClick: R,
      children: [
        r,
        A && /* @__PURE__ */ oe.jsx("span", { className: "foil-info ng-tns-c101-12", children: /* @__PURE__ */ oe.jsx(_r, { icon: rb, size: "xs" }) })
      ]
    }
  );
};
Mc.defaultProps = {
  className: $l,
  disabledClassName: `${$l}--disabled`,
  focus: !1,
  id: null,
  panelId: null,
  selected: !1,
  selectedClassName: "selected"
};
const cb = "react-tabs__tab-panel", hs = ({ children: r, className: a, id: i, selected: s, selectedClassName: f, tabId: c }) => {
  const g = c + "" + i;
  return /* @__PURE__ */ oe.jsx(
    "div",
    {
      className: ds(a, { [f]: s }),
      role: "tabpanel",
      id: g,
      "aria-labelledby": g,
      children: r
    }
  );
};
hs.defaultProps = {
  className: cb,
  selectedClassName: "selected"
};
hs.tabsRole = "TabPanel";
const db = ({
  color: r,
  folie: a,
  onClick: i,
  hex: s,
  selectedColor: f
}) => {
  const c = (F) => q(F).toPercentageRgbString(), g = () => {
    i(r, a);
  };
  let y = "", S = !1;
  f === r && (S = !0, y = /* @__PURE__ */ oe.jsx(_r, { icon: ab }));
  const A = {
    background: c(s),
    //cursor: 'pointer',
    //position: 'relative',
    //outline: 'none',
    //width: '15px',
    //height: '15px',
    //float: 'left',
    //borderRadius: '4px',
    //margin: '0 6px 6px 0',
    //"boxShadow": "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
    width: "35.2222px",
    height: "35.2222px"
  }, R = q(s), k = ds("color-list-item", {
    selected: S,
    "sp-thumb-dark": R.toHsl().l < 0.5,
    "sp-thumb-light": R.toHsl().l > 0.5
  });
  return /* @__PURE__ */ oe.jsx(
    "div",
    {
      title: r,
      className: k,
      tabIndex: 0,
      style: A,
      onClick: g,
      children: y
    }
  );
}, hb = (r) => {
  const a = r.getBoundingClientRect();
  return {
    width: a.width,
    height: a.height
  };
};
function ps() {
  const r = Ne.useRef(null), [a, i] = Ne.useState({ width: 1, height: 1 });
  Ne.useLayoutEffect(() => {
    const f = () => {
      r.current && i(hb(r.current));
    }, c = ([{ contentBoxSize: y }]) => {
      i({
        height: y[0].blockSize,
        width: y[0].inlineSize
      });
    };
    window.addEventListener("resize", f, !1);
    const g = new ResizeObserver(c);
    return r.current && g.observe(r.current), () => {
      window.removeEventListener("resize", f, !1), g.disconnect();
    };
  }, []);
  const s = Ne.useCallback(() => {
    var S;
    const { left: f = 1, right: c = 1, top: g = 1, bottom: y = 1 } = ((S = r.current) == null ? void 0 : S.getBoundingClientRect()) ?? {};
    return { left: f, right: c, top: g, bottom: y };
  }, []);
  return [r, a, s];
}
function zl(r, a, i) {
  return r < a ? a : r > i ? i : r;
}
function Bn(r) {
  return "touches" in r;
}
const Nc = Ne.memo(({ onCoordinateChange: r, children: a, disabled: i }) => {
  const [s, { width: f, height: c }, g] = ps(), y = Ne.useCallback((A, R = !1) => {
    const { left: k, top: F } = g(), K = zl(A.clientX - k, 0, f), ee = zl(A.clientY - F, 0, c);
    r(R, K, ee);
  }, [f, c, g, r]), S = Ne.useCallback((A) => {
    if (!Bn(A) && A.button !== 0) return;
    const R = (F) => {
      y(Bn(F) ? F.touches[0] : F);
    }, k = (F) => {
      y(Bn(F) ? F.changedTouches[0] : F, !0), document.removeEventListener(Bn(F) ? "touchmove" : "mousemove", R, !1), document.removeEventListener(Bn(F) ? "touchend" : "mouseup", k, !1);
    };
    R(A), document.addEventListener(Bn(A) ? "touchmove" : "mousemove", R, !1), document.addEventListener(Bn(A) ? "touchend" : "mouseup", k, !1);
  }, [y]);
  return /* @__PURE__ */ oe.jsx(
    "div",
    {
      ref: s,
      className: "rcp-interactive",
      onMouseDown: S,
      onTouchStart: S,
      "aria-disabled": i,
      children: a
    }
  );
}), pb = Ne.memo(({ height: r, color: a, disabled: i, onChange: s, onChangeComplete: f }) => {
  const [c, { width: g }] = ps(), y = Ne.useMemo(() => {
    const k = a.toHsv().s / 100 * g, F = (100 - a.toHsv().v) / 100 * r;
    return { x: k, y: F };
  }, [a, g, r]), S = Ne.useCallback((k, F, K) => {
    const ee = q.fromRatio({
      ...a.toHsv(),
      s: F / g * 100,
      v: 100 - K / r * 100
    });
    s(ee), k && (f == null || f(ee));
  }, [a, g, r, s, f]), A = Ne.useMemo(() => [a.toHsv().h, "100%", "50%"].join(" "), [a]), R = Ne.useMemo(() => [a.toRgb().r, a.toRgb().g, a.toRgb().b].join(" "), [a]);
  return /* @__PURE__ */ oe.jsx(Nc, { disabled: i, onCoordinateChange: S, children: /* @__PURE__ */ oe.jsx("div", { ref: c, style: { height: r, backgroundColor: `hsl(${A})` }, className: "rcp-saturation", children: /* @__PURE__ */ oe.jsx(
    "div",
    {
      style: { left: y.x, top: y.y, backgroundColor: `rgb(${R})` },
      className: "rcp-saturation-cursor"
    }
  ) }) });
}), gb = Ne.memo(({ color: r, disabled: a, onChange: i, onChangeComplete: s }) => {
  const [f, { width: c }] = ps(), g = Ne.useMemo(() => ({ x: r.toHsv().h / 360 * c }), [r, c]), y = Ne.useCallback((A, R) => {
    const k = q.fromRatio({
      ...r.toHsv(),
      h: R / c * 360
    });
    i(k), A && (s == null || s(k));
  }, [r, c, i, s]), S = Ne.useMemo(() => [r.toHsv().h, "100%", "50%"].join(" "), [r]);
  return /* @__PURE__ */ oe.jsx(Nc, { disabled: a, onCoordinateChange: y, children: /* @__PURE__ */ oe.jsx("div", { ref: f, className: "rcp-hue", children: /* @__PURE__ */ oe.jsx("div", { style: { left: g.x, backgroundColor: `hsl(${S})` }, className: "rcp-hue-cursor" }) }) });
}), mb = ({ onClick: r, onChange: a, initialColor: i = "#96458b" }) => {
  const [s, f] = Ne.useState(q(i));
  Ne.useEffect(() => {
    f(q(i));
  }, [i]);
  const c = (y) => {
    f(y), a(y);
  };
  console.log(s);
  const g = {
    backgroundColor: s.toHexString()
  };
  return /* @__PURE__ */ oe.jsxs("div", { children: [
    /* @__PURE__ */ oe.jsxs(kc, { onClick: r, children: [
      /* @__PURE__ */ oe.jsx(_r, { icon: nb }),
      /* @__PURE__ */ oe.jsx("span", { children: "Terug" })
    ] }),
    /* @__PURE__ */ oe.jsxs("div", { className: "custom-color", children: [
      /* @__PURE__ */ oe.jsx("div", { className: "custom-color-chip", style: g }),
      /* @__PURE__ */ oe.jsx("input", { maxLength: "7", required: "", className: "custom-color-input", value: s.toHexString(), placeholder: "#96458b" })
    ] }),
    /* @__PURE__ */ oe.jsxs("div", { children: [
      /* @__PURE__ */ oe.jsx(pb, { height: 300, color: s, onChange: c }),
      /* @__PURE__ */ oe.jsx(gb, { color: s, onChange: c })
    ] })
  ] });
}, Dr = {
  openSelectStyle: {
    touchAaction: "none",
    userSelect: "none"
  },
  color: "#000000",
  change: () => {
  }
}, vb = ({
  taps: r,
  change: a = Dr.change,
  openSelectStyle: i = Dr.openSelectStyle,
  color: s = Dr.color
}) => {
  let [f, c] = Ne.useState(!1), [g, y] = Ne.useState(s), [S, A] = Ne.useState(!1), [R, k] = Ne.useState(!1), [F, K] = Ne.useState(i), ee = Ne.useRef();
  Ne.useEffect(() => {
    y(s);
    let ue = {};
    if (!S)
      ue = {
        backgroundColor: s
      };
    else {
      var Re = q(s);
      ue = {
        backgroundImage: "linear-gradient(to right top, " + Re.toRgbString() + ", white)"
      };
    }
    let Ke = Object.assign({}, Dr.openSelectStyle, ue);
    K(Ke);
  }, [s, S]), Ne.useEffect(() => {
    const ue = (Re) => {
      ee.current && (ee.current.contains(Re.target) || c(!1));
    };
    return document.addEventListener("click", ue, !0), () => {
      document.removeEventListener("click", ue);
    };
  }, []);
  const ne = () => {
    c((ue) => !ue);
  }, G = () => {
    console.log("aa");
  }, se = () => {
    var ue = [], Re = 0;
    return Io.map(r, (Ke, fe) => {
      var Ve = !1;
      Re == 0 && (Ve = !0);
      const it = "panel-" + fe, De = "tap-" + fe, $e = "header-" + fe;
      ue.push(/* @__PURE__ */ oe.jsxs(Ne.Fragment, { children: [
        /* @__PURE__ */ oe.jsx(
          Mc,
          {
            id: fe,
            panelId: "react-tabs-{index}",
            setSelected: G,
            selected: Ve,
            hasInfo: Ke.hasInfo,
            className: "color-list-header",
            children: Ke.name
          },
          $e
        ),
        /* @__PURE__ */ oe.jsx(hs, { id: fe, tabId: "react-tabs-", selected: Ve, className: "color-list", children: ce(Ke) }, it)
      ] }, De)), Re++;
    }), ue;
  }, xe = (ue, Re) => {
    y(ue), A(Re), a(ue, Re);
    let Ke = {};
    if (!Re)
      Ke = {
        backgroundColor: ue
      };
    else {
      var fe = q(ue);
      Ke = {
        backgroundImage: "linear-gradient(to right top, " + fe.toRgbString() + ", white)"
      };
    }
    let Ve = Object.assign({}, Dr.openSelectStyle, Ke);
    K(Ve);
  }, Z = () => {
    k((ue) => !ue);
  }, ce = (ue) => {
    var Re = ue.palette, Ke = ue.folie;
    const fe = [];
    ue.custom && fe.push(/* @__PURE__ */ oe.jsxs(
      "button",
      {
        onClick: Z,
        className: "icon-square add-custom-color-button",
        style: { width: "35.2222px", height: "35.2222px" },
        children: [
          /* @__PURE__ */ oe.jsx("span", { children: /* @__PURE__ */ oe.jsx(_r, { icon: ib }) }),
          /* @__PURE__ */ oe.jsx("span", { className: "text", style: { marginLeft: "0px", marginRight: "0px" } })
        ]
      }
    ));
    const Ve = Io.map(Re, (De, $e) => /* @__PURE__ */ oe.jsx(
      db,
      {
        color: De,
        hex: De,
        onClick: xe,
        folie: Ke,
        selectedColor: g,
        custom: ue.custom
      },
      $e
    ));
    return Io.concat(fe, Ve);
  }, O = () => {
  }, Ue = () => /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
    /* @__PURE__ */ oe.jsx(kc, { children: /* @__PURE__ */ oe.jsx("span", { children: "Kleuren" }) }),
    /* @__PURE__ */ oe.jsx("div", { className: "menu color-menu", children: se() })
  ] }), Le = () => /* @__PURE__ */ oe.jsx(mb, { onClick: Z, onChange: O });
  return /* @__PURE__ */ oe.jsxs("div", { ref: ee, children: [
    /* @__PURE__ */ oe.jsx(
      "div",
      {
        className: "open-select",
        style: F,
        onClick: ne
      }
    ),
    /* @__PURE__ */ oe.jsx(ub, { open: f, children: R ? Le() : Ue() })
  ] });
};
export {
  vb as MyColor
};
