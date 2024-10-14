(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const o of i)
			if (o.type === "childList")
				for (const s of o.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function nm(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hi = {},
	rm = {
		get exports() {
			return Hi;
		},
		set exports(e) {
			Hi = e;
		},
	},
	Co = {},
	M = {},
	im = {
		get exports() {
			return M;
		},
		set exports(e) {
			M = e;
		},
	},
	z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
	om = Symbol.for("react.portal"),
	sm = Symbol.for("react.fragment"),
	lm = Symbol.for("react.strict_mode"),
	am = Symbol.for("react.profiler"),
	um = Symbol.for("react.provider"),
	cm = Symbol.for("react.context"),
	fm = Symbol.for("react.forward_ref"),
	dm = Symbol.for("react.suspense"),
	pm = Symbol.for("react.memo"),
	hm = Symbol.for("react.lazy"),
	cu = Symbol.iterator;
function mm(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (cu && e[cu]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Vf = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Mf = Object.assign,
	Df = {};
function qn(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Df), (this.updater = n || Vf);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nf() {}
Nf.prototype = qn.prototype;
function Ql(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Df), (this.updater = n || Vf);
}
var Yl = (Ql.prototype = new Nf());
Yl.constructor = Ql;
Mf(Yl, qn.prototype);
Yl.isPureReactComponent = !0;
var fu = Array.isArray,
	Af = Object.prototype.hasOwnProperty,
	Xl = { current: null },
	Rf = { key: !0, ref: !0, __self: !0, __source: !0 };
function _f(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t))
			Af.call(t, r) && !Rf.hasOwnProperty(r) && (i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
		i.children = a;
	}
	if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return { $$typeof: br, type: e, key: o, ref: s, props: i, _owner: Xl.current };
}
function gm(e, t) {
	return { $$typeof: br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zl(e) {
	return typeof e == "object" && e !== null && e.$$typeof === br;
}
function ym(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var du = /\/+/g;
function Yo(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? ym("" + e.key) : t.toString(36);
}
function Di(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (o) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case br:
					case om:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === "" ? "." + Yo(s, 0) : r),
			fu(i)
				? ((n = ""),
				  e != null && (n = e.replace(du, "$&/") + "/"),
				  Di(i, t, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (Zl(i) &&
						(i = gm(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ""
									: ("" + i.key).replace(du, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), fu(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var a = r + Yo(o, l);
			s += Di(o, t, n, a, i);
		}
	else if (((a = mm(e)), typeof a == "function"))
		for (e = a.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value), (a = r + Yo(o, l++)), (s += Di(o, t, n, a, i));
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return s;
}
function ui(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Di(e, r, "", "", function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function vm(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var we = { current: null },
	Ni = { transition: null },
	wm = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: Ni, ReactCurrentOwner: Xl };
z.Children = {
	map: ui,
	forEach: function (e, t, n) {
		ui(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			ui(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			ui(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Zl(e))
			throw Error("React.Children.only expected to receive a single React element child.");
		return e;
	},
};
z.Component = qn;
z.Fragment = sm;
z.Profiler = am;
z.PureComponent = Ql;
z.StrictMode = lm;
z.Suspense = dm;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
z.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = Mf({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = Xl.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (a in t)
			Af.call(t, a) &&
				!Rf.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: br, type: e.type, key: i, ref: o, props: r, _owner: s };
};
z.createContext = function (e) {
	return (
		(e = {
			$$typeof: cm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: um, _context: e }),
		(e.Consumer = e)
	);
};
z.createElement = _f;
z.createFactory = function (e) {
	var t = _f.bind(null, e);
	return (t.type = e), t;
};
z.createRef = function () {
	return { current: null };
};
z.forwardRef = function (e) {
	return { $$typeof: fm, render: e };
};
z.isValidElement = Zl;
z.lazy = function (e) {
	return { $$typeof: hm, _payload: { _status: -1, _result: e }, _init: vm };
};
z.memo = function (e, t) {
	return { $$typeof: pm, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
	var t = Ni.transition;
	Ni.transition = {};
	try {
		e();
	} finally {
		Ni.transition = t;
	}
};
z.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
	return we.current.useCallback(e, t);
};
z.useContext = function (e) {
	return we.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
	return we.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
	return we.current.useEffect(e, t);
};
z.useId = function () {
	return we.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
	return we.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
	return we.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
	return we.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
	return we.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
	return we.current.useReducer(e, t, n);
};
z.useRef = function (e) {
	return we.current.useRef(e);
};
z.useState = function (e) {
	return we.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
	return we.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
	return we.current.useTransition();
};
z.version = "18.2.0";
(function (e) {
	e.exports = z;
})(im);
const rt = nm(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xm = M,
	Sm = Symbol.for("react.element"),
	km = Symbol.for("react.fragment"),
	Pm = Object.prototype.hasOwnProperty,
	Cm = xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Tm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Of(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) Pm.call(t, r) && !Tm.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return { $$typeof: Sm, type: e, key: o, ref: s, props: i, _owner: Cm.current };
}
Co.Fragment = km;
Co.jsx = Of;
Co.jsxs = Of;
(function (e) {
	e.exports = Co;
})(rm);
const V = Hi.jsx,
	$ = Hi.jsxs;
var _s = {},
	Os = {},
	Em = {
		get exports() {
			return Os;
		},
		set exports(e) {
			Os = e;
		},
	},
	_e = {},
	zs = {},
	Lm = {
		get exports() {
			return zs;
		},
		set exports(e) {
			zs = e;
		},
	},
	zf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(E, A) {
		var R = E.length;
		E.push(A);
		e: for (; 0 < R; ) {
			var _ = (R - 1) >>> 1,
				W = E[_];
			if (0 < i(W, A)) (E[_] = A), (E[R] = W), (R = _);
			else break e;
		}
	}
	function n(E) {
		return E.length === 0 ? null : E[0];
	}
	function r(E) {
		if (E.length === 0) return null;
		var A = E[0],
			R = E.pop();
		if (R !== A) {
			E[0] = R;
			e: for (var _ = 0, W = E.length, Xt = W >>> 1; _ < Xt; ) {
				var Ve = 2 * (_ + 1) - 1,
					Sn = E[Ve],
					lt = Ve + 1,
					xt = E[lt];
				if (0 > i(Sn, R))
					lt < W && 0 > i(xt, Sn)
						? ((E[_] = xt), (E[lt] = R), (_ = lt))
						: ((E[_] = Sn), (E[Ve] = R), (_ = Ve));
				else if (lt < W && 0 > i(xt, R)) (E[_] = xt), (E[lt] = R), (_ = lt);
				else break e;
			}
		}
		return A;
	}
	function i(E, A) {
		var R = E.sortIndex - A.sortIndex;
		return R !== 0 ? R : E.id - A.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function () {
			return s.now() - l;
		};
	}
	var a = [],
		u = [],
		c = 1,
		f = null,
		d = 3,
		m = !1,
		y = !1,
		v = !1,
		P = typeof setTimeout == "function" ? setTimeout : null,
		g = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function h(E) {
		for (var A = n(u); A !== null; ) {
			if (A.callback === null) r(u);
			else if (A.startTime <= E) r(u), (A.sortIndex = A.expirationTime), t(a, A);
			else break;
			A = n(u);
		}
	}
	function w(E) {
		if (((v = !1), h(E), !y))
			if (n(a) !== null) (y = !0), Fe(x);
			else {
				var A = n(u);
				A !== null && qe(w, A.startTime - E);
			}
	}
	function x(E, A) {
		(y = !1), v && ((v = !1), g(k), (k = -1)), (m = !0);
		var R = d;
		try {
			for (h(A), f = n(a); f !== null && (!(f.expirationTime > A) || (E && !J())); ) {
				var _ = f.callback;
				if (typeof _ == "function") {
					(f.callback = null), (d = f.priorityLevel);
					var W = _(f.expirationTime <= A);
					(A = e.unstable_now()),
						typeof W == "function" ? (f.callback = W) : f === n(a) && r(a),
						h(A);
				} else r(a);
				f = n(a);
			}
			if (f !== null) var Xt = !0;
			else {
				var Ve = n(u);
				Ve !== null && qe(w, Ve.startTime - A), (Xt = !1);
			}
			return Xt;
		} finally {
			(f = null), (d = R), (m = !1);
		}
	}
	var T = !1,
		C = null,
		k = -1,
		O = 5,
		N = -1;
	function J() {
		return !(e.unstable_now() - N < O);
	}
	function Se() {
		if (C !== null) {
			var E = e.unstable_now();
			N = E;
			var A = !0;
			try {
				A = C(!0, E);
			} finally {
				A ? ze() : ((T = !1), (C = null));
			}
		} else T = !1;
	}
	var ze;
	if (typeof p == "function")
		ze = function () {
			p(Se);
		};
	else if (typeof MessageChannel < "u") {
		var q = new MessageChannel(),
			b = q.port2;
		(q.port1.onmessage = Se),
			(ze = function () {
				b.postMessage(null);
			});
	} else
		ze = function () {
			P(Se, 0);
		};
	function Fe(E) {
		(C = E), T || ((T = !0), ze());
	}
	function qe(E, A) {
		k = P(function () {
			E(e.unstable_now());
		}, A);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (E) {
			E.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			y || m || ((y = !0), Fe(x));
		}),
		(e.unstable_forceFrameRate = function (E) {
			0 > E || 125 < E
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (O = 0 < E ? Math.floor(1e3 / E) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return d;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (E) {
			switch (d) {
				case 1:
				case 2:
				case 3:
					var A = 3;
					break;
				default:
					A = d;
			}
			var R = d;
			d = A;
			try {
				return E();
			} finally {
				d = R;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (E, A) {
			switch (E) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					E = 3;
			}
			var R = d;
			d = E;
			try {
				return A();
			} finally {
				d = R;
			}
		}),
		(e.unstable_scheduleCallback = function (E, A, R) {
			var _ = e.unstable_now();
			switch (
				(typeof R == "object" && R !== null
					? ((R = R.delay), (R = typeof R == "number" && 0 < R ? _ + R : _))
					: (R = _),
				E)
			) {
				case 1:
					var W = -1;
					break;
				case 2:
					W = 250;
					break;
				case 5:
					W = 1073741823;
					break;
				case 4:
					W = 1e4;
					break;
				default:
					W = 5e3;
			}
			return (
				(W = R + W),
				(E = {
					id: c++,
					callback: A,
					priorityLevel: E,
					startTime: R,
					expirationTime: W,
					sortIndex: -1,
				}),
				R > _
					? ((E.sortIndex = R),
					  t(u, E),
					  n(a) === null &&
							E === n(u) &&
							(v ? (g(k), (k = -1)) : (v = !0), qe(w, R - _)))
					: ((E.sortIndex = W), t(a, E), y || m || ((y = !0), Fe(x))),
				E
			);
		}),
		(e.unstable_shouldYield = J),
		(e.unstable_wrapCallback = function (E) {
			var A = d;
			return function () {
				var R = d;
				d = A;
				try {
					return E.apply(this, arguments);
				} finally {
					d = R;
				}
			};
		});
})(zf);
(function (e) {
	e.exports = zf;
})(Lm);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff = M,
	Ae = zs;
function S(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var jf = new Set(),
	Nr = {};
function gn(e, t) {
	Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
	for (Nr[e] = t, e = 0; e < t.length; e++) jf.add(t[e]);
}
var mt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Fs = Object.prototype.hasOwnProperty,
	Vm =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	pu = {},
	hu = {};
function Mm(e) {
	return Fs.call(hu, e)
		? !0
		: Fs.call(pu, e)
		? !1
		: Vm.test(e)
		? (hu[e] = !0)
		: ((pu[e] = !0), !1);
}
function Dm(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function Nm(e, t, n, r) {
	if (t === null || typeof t > "u" || Dm(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function xe(e, t, n, r, i, o, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ce[e] = new xe(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	ce[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ce[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
	ce[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ce[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ce[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	ce[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	ce[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	ce[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jl = /[\-:]([a-z])/g;
function ql(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Jl, ql);
		ce[t] = new xe(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Jl, ql);
		ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Jl, ql);
	ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
	ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bl(e, t, n, r) {
	var i = ce.hasOwnProperty(t) ? ce[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(Nm(t, n, i, r) && (n = null),
		r || i === null
			? Mm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ci = Symbol.for("react.element"),
	Pn = Symbol.for("react.portal"),
	Cn = Symbol.for("react.fragment"),
	ea = Symbol.for("react.strict_mode"),
	js = Symbol.for("react.profiler"),
	If = Symbol.for("react.provider"),
	Bf = Symbol.for("react.context"),
	ta = Symbol.for("react.forward_ref"),
	Is = Symbol.for("react.suspense"),
	Bs = Symbol.for("react.suspense_list"),
	na = Symbol.for("react.memo"),
	Pt = Symbol.for("react.lazy"),
	Uf = Symbol.for("react.offscreen"),
	mu = Symbol.iterator;
function tr(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (mu && e[mu]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var X = Object.assign,
	Xo;
function fr(e) {
	if (Xo === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Xo = (t && t[1]) || "";
		}
	return (
		`
` +
		Xo +
		e
	);
}
var Zo = !1;
function Jo(e, t) {
	if (!e || Zo) return "";
	Zo = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					l = o.length - 1;
				1 <= s && 0 <= l && i[s] !== o[l];

			)
				l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (i[s] !== o[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || i[s] !== o[l])) {
								var a =
									`
` + i[s].replace(" at new ", " at ");
								return (
									e.displayName &&
										a.includes("<anonymous>") &&
										(a = a.replace("<anonymous>", e.displayName)),
									a
								);
							}
						while (1 <= s && 0 <= l);
					break;
				}
		}
	} finally {
		(Zo = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Am(e) {
	switch (e.tag) {
		case 5:
			return fr(e.type);
		case 16:
			return fr("Lazy");
		case 13:
			return fr("Suspense");
		case 19:
			return fr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Jo(e.type, !1)), e;
		case 11:
			return (e = Jo(e.type.render, !1)), e;
		case 1:
			return (e = Jo(e.type, !0)), e;
		default:
			return "";
	}
}
function Us(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Cn:
			return "Fragment";
		case Pn:
			return "Portal";
		case js:
			return "Profiler";
		case ea:
			return "StrictMode";
		case Is:
			return "Suspense";
		case Bs:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Bf:
				return (e.displayName || "Context") + ".Consumer";
			case If:
				return (e._context.displayName || "Context") + ".Provider";
			case ta:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case na:
				return (t = e.displayName || null), t !== null ? t : Us(e.type) || "Memo";
			case Pt:
				(t = e._payload), (e = e._init);
				try {
					return Us(e(t));
				} catch {}
		}
	return null;
}
function Rm(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Us(t);
		case 8:
			return t === ea ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function Ut(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function $f(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function _m(e) {
	var t = $f(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = "" + s), o.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function fi(e) {
	e._valueTracker || (e._valueTracker = _m(e));
}
function Hf(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = $f(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Wi(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function $s(e, t) {
	var n = t.checked;
	return X({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function gu(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Ut(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
		});
}
function Wf(e, t) {
	(t = t.checked), t != null && bl(e, "checked", t, !1);
}
function Hs(e, t) {
	Wf(e, t);
	var n = Ut(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? Ws(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Ws(e, t.type, Ut(t.defaultValue)),
		t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null)))
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function Ws(e, t, n) {
	(t !== "number" || Wi(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var dr = Array.isArray;
function jn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Gs(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
	return X({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function vu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(S(92));
			if (dr(n)) {
				if (1 < n.length) throw Error(S(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Ut(n) };
}
function Gf(e, t) {
	var n = Ut(t.value),
		r = Ut(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function wu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kf(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Ks(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Kf(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var di,
	Qf = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
		else {
			for (
				di = di || document.createElement("div"),
					di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = di.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Ar(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var gr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Om = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function (e) {
	Om.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gr[t] = gr[e]);
	});
});
function Yf(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (gr.hasOwnProperty(e) && gr[e])
		? ("" + t).trim()
		: t + "px";
}
function Xf(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Yf(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var zm = X(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function Qs(e, t) {
	if (t) {
		if (zm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(S(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(S(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(S(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(S(62));
	}
}
function Ys(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var Xs = null;
function ra(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Zs = null,
	In = null,
	Bn = null;
function xu(e) {
	if ((e = ni(e))) {
		if (typeof Zs != "function") throw Error(S(280));
		var t = e.stateNode;
		t && ((t = Mo(t)), Zs(e.stateNode, e.type, t));
	}
}
function Zf(e) {
	In ? (Bn ? Bn.push(e) : (Bn = [e])) : (In = e);
}
function Jf() {
	if (In) {
		var e = In,
			t = Bn;
		if (((Bn = In = null), xu(e), t)) for (e = 0; e < t.length; e++) xu(t[e]);
	}
}
function qf(e, t) {
	return e(t);
}
function bf() {}
var qo = !1;
function ed(e, t, n) {
	if (qo) return e(t, n);
	qo = !0;
	try {
		return qf(e, t, n);
	} finally {
		(qo = !1), (In !== null || Bn !== null) && (bf(), Jf());
	}
}
function Rr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Mo(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(S(231, t, typeof n));
	return n;
}
var Js = !1;
if (mt)
	try {
		var nr = {};
		Object.defineProperty(nr, "passive", {
			get: function () {
				Js = !0;
			},
		}),
			window.addEventListener("test", nr, nr),
			window.removeEventListener("test", nr, nr);
	} catch {
		Js = !1;
	}
function Fm(e, t, n, r, i, o, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var yr = !1,
	Gi = null,
	Ki = !1,
	qs = null,
	jm = {
		onError: function (e) {
			(yr = !0), (Gi = e);
		},
	};
function Im(e, t, n, r, i, o, s, l, a) {
	(yr = !1), (Gi = null), Fm.apply(jm, arguments);
}
function Bm(e, t, n, r, i, o, s, l, a) {
	if ((Im.apply(this, arguments), yr)) {
		if (yr) {
			var u = Gi;
			(yr = !1), (Gi = null);
		} else throw Error(S(198));
		Ki || ((Ki = !0), (qs = u));
	}
}
function yn(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function td(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
			return t.dehydrated;
	}
	return null;
}
function Su(e) {
	if (yn(e) !== e) throw Error(S(188));
}
function Um(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = yn(e)), t === null)) throw Error(S(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Su(i), e;
				if (o === r) return Su(i), t;
				o = o.sibling;
			}
			throw Error(S(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, l = i.child; l; ) {
				if (l === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (l === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				l = l.sibling;
			}
			if (!s) {
				for (l = o.child; l; ) {
					if (l === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (l === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					l = l.sibling;
				}
				if (!s) throw Error(S(189));
			}
		}
		if (n.alternate !== r) throw Error(S(190));
	}
	if (n.tag !== 3) throw Error(S(188));
	return n.stateNode.current === n ? e : t;
}
function nd(e) {
	return (e = Um(e)), e !== null ? rd(e) : null;
}
function rd(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = rd(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var id = Ae.unstable_scheduleCallback,
	ku = Ae.unstable_cancelCallback,
	$m = Ae.unstable_shouldYield,
	Hm = Ae.unstable_requestPaint,
	ee = Ae.unstable_now,
	Wm = Ae.unstable_getCurrentPriorityLevel,
	ia = Ae.unstable_ImmediatePriority,
	od = Ae.unstable_UserBlockingPriority,
	Qi = Ae.unstable_NormalPriority,
	Gm = Ae.unstable_LowPriority,
	sd = Ae.unstable_IdlePriority,
	To = null,
	it = null;
function Km(e) {
	if (it && typeof it.onCommitFiberRoot == "function")
		try {
			it.onCommitFiberRoot(To, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Xm,
	Qm = Math.log,
	Ym = Math.LN2;
function Xm(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Qm(e) / Ym) | 0)) | 0;
}
var pi = 64,
	hi = 4194304;
function pr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Yi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~i;
		l !== 0 ? (r = pr(l)) : ((o &= s), o !== 0 && (r = pr(o)));
	} else (s = n & ~i), s !== 0 ? (r = pr(s)) : o !== 0 && (r = pr(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function Zm(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function Jm(e, t) {
	for (
		var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - Xe(o),
			l = 1 << s,
			a = i[s];
		a === -1 ? (!(l & n) || l & r) && (i[s] = Zm(l, t)) : a <= t && (e.expiredLanes |= l),
			(o &= ~l);
	}
}
function bs(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ld() {
	var e = pi;
	return (pi <<= 1), !(pi & 4194240) && (pi = 64), e;
}
function bo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function ei(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Xe(t)),
		(e[t] = n);
}
function qm(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Xe(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function oa(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Xe(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var j = 0;
function ad(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ud,
	sa,
	cd,
	fd,
	dd,
	el = !1,
	mi = [],
	Dt = null,
	Nt = null,
	At = null,
	_r = new Map(),
	Or = new Map(),
	Et = [],
	bm =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Pu(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Dt = null;
			break;
		case "dragenter":
		case "dragleave":
			Nt = null;
			break;
		case "mouseover":
		case "mouseout":
			At = null;
			break;
		case "pointerover":
		case "pointerout":
			_r.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Or.delete(t.pointerId);
	}
}
function rr(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = ni(t)), t !== null && sa(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function e0(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (Dt = rr(Dt, e, t, n, r, i)), !0;
		case "dragenter":
			return (Nt = rr(Nt, e, t, n, r, i)), !0;
		case "mouseover":
			return (At = rr(At, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return _r.set(o, rr(_r.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (o = i.pointerId), Or.set(o, rr(Or.get(o) || null, e, t, n, r, i)), !0;
	}
	return !1;
}
function pd(e) {
	var t = nn(e.target);
	if (t !== null) {
		var n = yn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = td(n)), t !== null)) {
					(e.blockedOn = t),
						dd(e.priority, function () {
							cd(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ai(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Xs = r), n.target.dispatchEvent(r), (Xs = null);
		} else return (t = ni(n)), t !== null && sa(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Cu(e, t, n) {
	Ai(e) && n.delete(t);
}
function t0() {
	(el = !1),
		Dt !== null && Ai(Dt) && (Dt = null),
		Nt !== null && Ai(Nt) && (Nt = null),
		At !== null && Ai(At) && (At = null),
		_r.forEach(Cu),
		Or.forEach(Cu);
}
function ir(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		el || ((el = !0), Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, t0)));
}
function zr(e) {
	function t(i) {
		return ir(i, e);
	}
	if (0 < mi.length) {
		ir(mi[0], e);
		for (var n = 1; n < mi.length; n++) {
			var r = mi[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Dt !== null && ir(Dt, e),
			Nt !== null && ir(Nt, e),
			At !== null && ir(At, e),
			_r.forEach(t),
			Or.forEach(t),
			n = 0;
		n < Et.length;
		n++
	)
		(r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
		pd(n), n.blockedOn === null && Et.shift();
}
var Un = wt.ReactCurrentBatchConfig,
	Xi = !0;
function n0(e, t, n, r) {
	var i = j,
		o = Un.transition;
	Un.transition = null;
	try {
		(j = 1), la(e, t, n, r);
	} finally {
		(j = i), (Un.transition = o);
	}
}
function r0(e, t, n, r) {
	var i = j,
		o = Un.transition;
	Un.transition = null;
	try {
		(j = 4), la(e, t, n, r);
	} finally {
		(j = i), (Un.transition = o);
	}
}
function la(e, t, n, r) {
	if (Xi) {
		var i = tl(e, t, n, r);
		if (i === null) us(e, t, r, Zi, n), Pu(e, r);
		else if (e0(i, e, t, n, r)) r.stopPropagation();
		else if ((Pu(e, r), t & 4 && -1 < bm.indexOf(e))) {
			for (; i !== null; ) {
				var o = ni(i);
				if (
					(o !== null && ud(o),
					(o = tl(e, t, n, r)),
					o === null && us(e, t, r, Zi, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else us(e, t, r, null, n);
	}
}
var Zi = null;
function tl(e, t, n, r) {
	if (((Zi = null), (e = ra(r)), (e = nn(e)), e !== null))
		if (((t = yn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = td(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Zi = e), null;
}
function hd(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (Wm()) {
				case ia:
					return 1;
				case od:
					return 4;
				case Qi:
				case Gm:
					return 16;
				case sd:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Vt = null,
	aa = null,
	Ri = null;
function md() {
	if (Ri) return Ri;
	var e,
		t = aa,
		n = t.length,
		r,
		i = "value" in Vt ? Vt.value : Vt.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return (Ri = i.slice(e, 1 < r ? 1 - r : void 0));
}
function _i(e) {
	var t = e.keyCode;
	return (
		"charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function gi() {
	return !0;
}
function Tu() {
	return !1;
}
function Oe(e) {
	function t(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? gi
				: Tu),
			(this.isPropagationStopped = Tu),
			this
		);
	}
	return (
		X(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = gi));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = gi));
			},
			persist: function () {},
			isPersistent: gi,
		}),
		t
	);
}
var bn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ua = Oe(bn),
	ti = X({}, bn, { view: 0, detail: 0 }),
	i0 = Oe(ti),
	es,
	ts,
	or,
	Eo = X({}, ti, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ca,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== or &&
						(or && e.type === "mousemove"
							? ((es = e.screenX - or.screenX), (ts = e.screenY - or.screenY))
							: (ts = es = 0),
						(or = e)),
				  es);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : ts;
		},
	}),
	Eu = Oe(Eo),
	o0 = X({}, Eo, { dataTransfer: 0 }),
	s0 = Oe(o0),
	l0 = X({}, ti, { relatedTarget: 0 }),
	ns = Oe(l0),
	a0 = X({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	u0 = Oe(a0),
	c0 = X({}, bn, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	f0 = Oe(c0),
	d0 = X({}, bn, { data: 0 }),
	Lu = Oe(d0),
	p0 = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	h0 = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	m0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function g0(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = m0[e]) ? !!t[e] : !1;
}
function ca() {
	return g0;
}
var y0 = X({}, ti, {
		key: function (e) {
			if (e.key) {
				var t = p0[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = _i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? h0[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ca,
		charCode: function (e) {
			return e.type === "keypress" ? _i(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? _i(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	v0 = Oe(y0),
	w0 = X({}, Eo, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Vu = Oe(w0),
	x0 = X({}, ti, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ca,
	}),
	S0 = Oe(x0),
	k0 = X({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	P0 = Oe(k0),
	C0 = X({}, Eo, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	T0 = Oe(C0),
	E0 = [9, 13, 27, 32],
	fa = mt && "CompositionEvent" in window,
	vr = null;
mt && "documentMode" in document && (vr = document.documentMode);
var L0 = mt && "TextEvent" in window && !vr,
	gd = mt && (!fa || (vr && 8 < vr && 11 >= vr)),
	Mu = String.fromCharCode(32),
	Du = !1;
function yd(e, t) {
	switch (e) {
		case "keyup":
			return E0.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function vd(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function V0(e, t) {
	switch (e) {
		case "compositionend":
			return vd(t);
		case "keypress":
			return t.which !== 32 ? null : ((Du = !0), Mu);
		case "textInput":
			return (e = t.data), e === Mu && Du ? null : e;
		default:
			return null;
	}
}
function M0(e, t) {
	if (Tn)
		return e === "compositionend" || (!fa && yd(e, t))
			? ((e = md()), (Ri = aa = Vt = null), (Tn = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return gd && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var D0 = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Nu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!D0[e.type] : t === "textarea";
}
function wd(e, t, n, r) {
	Zf(r),
		(t = Ji(t, "onChange")),
		0 < t.length &&
			((n = new ua("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var wr = null,
	Fr = null;
function N0(e) {
	Dd(e, 0);
}
function Lo(e) {
	var t = Vn(e);
	if (Hf(t)) return e;
}
function A0(e, t) {
	if (e === "change") return t;
}
var xd = !1;
if (mt) {
	var rs;
	if (mt) {
		var is = "oninput" in document;
		if (!is) {
			var Au = document.createElement("div");
			Au.setAttribute("oninput", "return;"), (is = typeof Au.oninput == "function");
		}
		rs = is;
	} else rs = !1;
	xd = rs && (!document.documentMode || 9 < document.documentMode);
}
function Ru() {
	wr && (wr.detachEvent("onpropertychange", Sd), (Fr = wr = null));
}
function Sd(e) {
	if (e.propertyName === "value" && Lo(Fr)) {
		var t = [];
		wd(t, Fr, e, ra(e)), ed(N0, t);
	}
}
function R0(e, t, n) {
	e === "focusin"
		? (Ru(), (wr = t), (Fr = n), wr.attachEvent("onpropertychange", Sd))
		: e === "focusout" && Ru();
}
function _0(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return Lo(Fr);
}
function O0(e, t) {
	if (e === "click") return Lo(t);
}
function z0(e, t) {
	if (e === "input" || e === "change") return Lo(t);
}
function F0(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : F0;
function jr(e, t) {
	if (Je(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Fs.call(t, i) || !Je(e[i], t[i])) return !1;
	}
	return !0;
}
function _u(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Ou(e, t) {
	var n = _u(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = _u(n);
	}
}
function kd(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? kd(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Pd() {
	for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Wi(e.document);
	}
	return t;
}
function da(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function j0(e) {
	var t = Pd(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && kd(n.ownerDocument.documentElement, n)) {
		if (r !== null && da(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = Ou(n, o));
				var s = Ou(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
	}
}
var I0 = mt && "documentMode" in document && 11 >= document.documentMode,
	En = null,
	nl = null,
	xr = null,
	rl = !1;
function zu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	rl ||
		En == null ||
		En !== Wi(r) ||
		((r = En),
		"selectionStart" in r && da(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(xr && jr(xr, r)) ||
			((xr = r),
			(r = Ji(nl, "onSelect")),
			0 < r.length &&
				((t = new ua("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = En))));
}
function yi(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Ln = {
		animationend: yi("Animation", "AnimationEnd"),
		animationiteration: yi("Animation", "AnimationIteration"),
		animationstart: yi("Animation", "AnimationStart"),
		transitionend: yi("Transition", "TransitionEnd"),
	},
	os = {},
	Cd = {};
mt &&
	((Cd = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Ln.animationend.animation,
		delete Ln.animationiteration.animation,
		delete Ln.animationstart.animation),
	"TransitionEvent" in window || delete Ln.transitionend.transition);
function Vo(e) {
	if (os[e]) return os[e];
	if (!Ln[e]) return e;
	var t = Ln[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Cd) return (os[e] = t[n]);
	return e;
}
var Td = Vo("animationend"),
	Ed = Vo("animationiteration"),
	Ld = Vo("animationstart"),
	Vd = Vo("transitionend"),
	Md = new Map(),
	Fu =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Gt(e, t) {
	Md.set(e, t), gn(t, [e]);
}
for (var ss = 0; ss < Fu.length; ss++) {
	var ls = Fu[ss],
		B0 = ls.toLowerCase(),
		U0 = ls[0].toUpperCase() + ls.slice(1);
	Gt(B0, "on" + U0);
}
Gt(Td, "onAnimationEnd");
Gt(Ed, "onAnimationIteration");
Gt(Ld, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Vd, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	$0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function ju(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), Bm(r, t, void 0, e), (e.currentTarget = null);
}
function Dd(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
					ju(i, l, u), (o = a);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== o && i.isPropagationStopped())
					)
						break e;
					ju(i, l, u), (o = a);
				}
		}
	}
	if (Ki) throw ((e = qs), (Ki = !1), (qs = null), e);
}
function B(e, t) {
	var n = t[al];
	n === void 0 && (n = t[al] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Nd(t, e, 2, !1), n.add(r));
}
function as(e, t, n) {
	var r = 0;
	t && (r |= 4), Nd(n, e, r, t);
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
	if (!e[vi]) {
		(e[vi] = !0),
			jf.forEach(function (n) {
				n !== "selectionchange" && ($0.has(n) || as(n, !1, e), as(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[vi] || ((t[vi] = !0), as("selectionchange", !1, t));
	}
}
function Nd(e, t, n, r) {
	switch (hd(t)) {
		case 1:
			var i = n0;
			break;
		case 4:
			i = r0;
			break;
		default:
			i = la;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Js || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function us(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo;
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var a = s.tag;
						if (
							(a === 3 || a === 4) &&
							((a = s.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; l !== null; ) {
					if (((s = nn(l)), s === null)) return;
					if (((a = s.tag), a === 5 || a === 6)) {
						r = o = s;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	ed(function () {
		var u = o,
			c = ra(n),
			f = [];
		e: {
			var d = Md.get(e);
			if (d !== void 0) {
				var m = ua,
					y = e;
				switch (e) {
					case "keypress":
						if (_i(n) === 0) break e;
					case "keydown":
					case "keyup":
						m = v0;
						break;
					case "focusin":
						(y = "focus"), (m = ns);
						break;
					case "focusout":
						(y = "blur"), (m = ns);
						break;
					case "beforeblur":
					case "afterblur":
						m = ns;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						m = Eu;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						m = s0;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						m = S0;
						break;
					case Td:
					case Ed:
					case Ld:
						m = u0;
						break;
					case Vd:
						m = P0;
						break;
					case "scroll":
						m = i0;
						break;
					case "wheel":
						m = T0;
						break;
					case "copy":
					case "cut":
					case "paste":
						m = f0;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						m = Vu;
				}
				var v = (t & 4) !== 0,
					P = !v && e === "scroll",
					g = v ? (d !== null ? d + "Capture" : null) : d;
				v = [];
				for (var p = u, h; p !== null; ) {
					h = p;
					var w = h.stateNode;
					if (
						(h.tag === 5 &&
							w !== null &&
							((h = w),
							g !== null && ((w = Rr(p, g)), w != null && v.push(Br(p, w, h)))),
						P)
					)
						break;
					p = p.return;
				}
				0 < v.length && ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((d = e === "mouseover" || e === "pointerover"),
					(m = e === "mouseout" || e === "pointerout"),
					d && n !== Xs && (y = n.relatedTarget || n.fromElement) && (nn(y) || y[gt]))
				)
					break e;
				if (
					(m || d) &&
					((d =
						c.window === c
							? c
							: (d = c.ownerDocument)
							? d.defaultView || d.parentWindow
							: window),
					m
						? ((y = n.relatedTarget || n.toElement),
						  (m = u),
						  (y = y ? nn(y) : null),
						  y !== null &&
								((P = yn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((m = null), (y = u)),
					m !== y)
				) {
					if (
						((v = Eu),
						(w = "onMouseLeave"),
						(g = "onMouseEnter"),
						(p = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((v = Vu),
							(w = "onPointerLeave"),
							(g = "onPointerEnter"),
							(p = "pointer")),
						(P = m == null ? d : Vn(m)),
						(h = y == null ? d : Vn(y)),
						(d = new v(w, p + "leave", m, n, c)),
						(d.target = P),
						(d.relatedTarget = h),
						(w = null),
						nn(c) === u &&
							((v = new v(g, p + "enter", y, n, c)),
							(v.target = h),
							(v.relatedTarget = P),
							(w = v)),
						(P = w),
						m && y)
					)
						t: {
							for (v = m, g = y, p = 0, h = v; h; h = kn(h)) p++;
							for (h = 0, w = g; w; w = kn(w)) h++;
							for (; 0 < p - h; ) (v = kn(v)), p--;
							for (; 0 < h - p; ) (g = kn(g)), h--;
							for (; p--; ) {
								if (v === g || (g !== null && v === g.alternate)) break t;
								(v = kn(v)), (g = kn(g));
							}
							v = null;
						}
					else v = null;
					m !== null && Iu(f, d, m, v, !1),
						y !== null && P !== null && Iu(f, P, y, v, !0);
				}
			}
			e: {
				if (
					((d = u ? Vn(u) : window),
					(m = d.nodeName && d.nodeName.toLowerCase()),
					m === "select" || (m === "input" && d.type === "file"))
				)
					var x = A0;
				else if (Nu(d))
					if (xd) x = z0;
					else {
						x = _0;
						var T = R0;
					}
				else
					(m = d.nodeName) &&
						m.toLowerCase() === "input" &&
						(d.type === "checkbox" || d.type === "radio") &&
						(x = O0);
				if (x && (x = x(e, u))) {
					wd(f, x, n, c);
					break e;
				}
				T && T(e, d, u),
					e === "focusout" &&
						(T = d._wrapperState) &&
						T.controlled &&
						d.type === "number" &&
						Ws(d, "number", d.value);
			}
			switch (((T = u ? Vn(u) : window), e)) {
				case "focusin":
					(Nu(T) || T.contentEditable === "true") && ((En = T), (nl = u), (xr = null));
					break;
				case "focusout":
					xr = nl = En = null;
					break;
				case "mousedown":
					rl = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(rl = !1), zu(f, n, c);
					break;
				case "selectionchange":
					if (I0) break;
				case "keydown":
				case "keyup":
					zu(f, n, c);
			}
			var C;
			if (fa)
				e: {
					switch (e) {
						case "compositionstart":
							var k = "onCompositionStart";
							break e;
						case "compositionend":
							k = "onCompositionEnd";
							break e;
						case "compositionupdate":
							k = "onCompositionUpdate";
							break e;
					}
					k = void 0;
				}
			else
				Tn
					? yd(e, n) && (k = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
			k &&
				(gd &&
					n.locale !== "ko" &&
					(Tn || k !== "onCompositionStart"
						? k === "onCompositionEnd" && Tn && (C = md())
						: ((Vt = c), (aa = "value" in Vt ? Vt.value : Vt.textContent), (Tn = !0))),
				(T = Ji(u, k)),
				0 < T.length &&
					((k = new Lu(k, e, null, n, c)),
					f.push({ event: k, listeners: T }),
					C ? (k.data = C) : ((C = vd(n)), C !== null && (k.data = C)))),
				(C = L0 ? V0(e, n) : M0(e, n)) &&
					((u = Ji(u, "onBeforeInput")),
					0 < u.length &&
						((c = new Lu("onBeforeInput", "beforeinput", null, n, c)),
						f.push({ event: c, listeners: u }),
						(c.data = C)));
		}
		Dd(f, t);
	});
}
function Br(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Ji(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = Rr(e, n)),
			o != null && r.unshift(Br(e, o, i)),
			(o = Rr(e, t)),
			o != null && r.push(Br(e, o, i))),
			(e = e.return);
	}
	return r;
}
function kn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Iu(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode;
		if (a !== null && a === r) break;
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((a = Rr(n, o)), a != null && s.unshift(Br(n, a, l)))
				: i || ((a = Rr(n, o)), a != null && s.push(Br(n, a, l)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var H0 = /\r\n?/g,
	W0 = /\u0000|\uFFFD/g;
function Bu(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			H0,
			`
`
		)
		.replace(W0, "");
}
function wi(e, t, n) {
	if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(S(425));
}
function qi() {}
var il = null,
	ol = null;
function sl(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var ll = typeof setTimeout == "function" ? setTimeout : void 0,
	G0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Uu = typeof Promise == "function" ? Promise : void 0,
	K0 =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof Uu < "u"
			? function (e) {
					return Uu.resolve(null).then(e).catch(Q0);
			  }
			: ll;
function Q0(e) {
	setTimeout(function () {
		throw e;
	});
}
function cs(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), zr(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	zr(t);
}
function Rt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function $u(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var er = Math.random().toString(36).slice(2),
	nt = "__reactFiber$" + er,
	Ur = "__reactProps$" + er,
	gt = "__reactContainer$" + er,
	al = "__reactEvents$" + er,
	Y0 = "__reactListeners$" + er,
	X0 = "__reactHandles$" + er;
function nn(e) {
	var t = e[nt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[gt] || n[nt])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = $u(e); e !== null; ) {
					if ((n = e[nt])) return n;
					e = $u(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ni(e) {
	return (
		(e = e[nt] || e[gt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Vn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(S(33));
}
function Mo(e) {
	return e[Ur] || null;
}
var ul = [],
	Mn = -1;
function Kt(e) {
	return { current: e };
}
function U(e) {
	0 > Mn || ((e.current = ul[Mn]), (ul[Mn] = null), Mn--);
}
function I(e, t) {
	Mn++, (ul[Mn] = e.current), (e.current = t);
}
var $t = {},
	me = Kt($t),
	Ce = Kt(!1),
	un = $t;
function Gn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return $t;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function Te(e) {
	return (e = e.childContextTypes), e != null;
}
function bi() {
	U(Ce), U(me);
}
function Hu(e, t, n) {
	if (me.current !== $t) throw Error(S(168));
	I(me, t), I(Ce, n);
}
function Ad(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(S(108, Rm(e) || "Unknown", i));
	return X({}, n, r);
}
function eo(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
		(un = me.current),
		I(me, e),
		I(Ce, Ce.current),
		!0
	);
}
function Wu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(S(169));
	n
		? ((e = Ad(e, t, un)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  U(Ce),
		  U(me),
		  I(me, e))
		: U(Ce),
		I(Ce, n);
}
var ut = null,
	Do = !1,
	fs = !1;
function Rd(e) {
	ut === null ? (ut = [e]) : ut.push(e);
}
function Z0(e) {
	(Do = !0), Rd(e);
}
function Qt() {
	if (!fs && ut !== null) {
		fs = !0;
		var e = 0,
			t = j;
		try {
			var n = ut;
			for (j = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(ut = null), (Do = !1);
		} catch (i) {
			throw (ut !== null && (ut = ut.slice(e + 1)), id(ia, Qt), i);
		} finally {
			(j = t), (fs = !1);
		}
	}
	return null;
}
var Dn = [],
	Nn = 0,
	to = null,
	no = 0,
	Ie = [],
	Be = 0,
	cn = null,
	ct = 1,
	ft = "";
function qt(e, t) {
	(Dn[Nn++] = no), (Dn[Nn++] = to), (to = e), (no = t);
}
function _d(e, t, n) {
	(Ie[Be++] = ct), (Ie[Be++] = ft), (Ie[Be++] = cn), (cn = e);
	var r = ct;
	e = ft;
	var i = 32 - Xe(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Xe(t) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(ct = (1 << (32 - Xe(t) + i)) | (n << i) | r),
			(ft = o + e);
	} else (ct = (1 << o) | (n << i) | r), (ft = e);
}
function pa(e) {
	e.return !== null && (qt(e, 1), _d(e, 1, 0));
}
function ha(e) {
	for (; e === to; ) (to = Dn[--Nn]), (Dn[Nn] = null), (no = Dn[--Nn]), (Dn[Nn] = null);
	for (; e === cn; )
		(cn = Ie[--Be]),
			(Ie[Be] = null),
			(ft = Ie[--Be]),
			(Ie[Be] = null),
			(ct = Ie[--Be]),
			(Ie[Be] = null);
}
var Ne = null,
	De = null,
	H = !1,
	Ye = null;
function Od(e, t) {
	var n = Ue(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
				t !== null ? ((e.stateNode = t), (Ne = e), (De = Rt(t.firstChild)), !0) : !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Ne = e), (De = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = cn !== null ? { id: ct, overflow: ft } : null),
					  (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
					  (n = Ue(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Ne = e),
					  (De = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function cl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fl(e) {
	if (H) {
		var t = De;
		if (t) {
			var n = t;
			if (!Gu(e, t)) {
				if (cl(e)) throw Error(S(418));
				t = Rt(n.nextSibling);
				var r = Ne;
				t && Gu(e, t) ? Od(r, n) : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e));
			}
		} else {
			if (cl(e)) throw Error(S(418));
			(e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e);
		}
	}
}
function Ku(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
	Ne = e;
}
function xi(e) {
	if (e !== Ne) return !1;
	if (!H) return Ku(e), (H = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type), (t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps))),
		t && (t = De))
	) {
		if (cl(e)) throw (zd(), Error(S(418)));
		for (; t; ) Od(e, t), (t = Rt(t.nextSibling));
	}
	if ((Ku(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(S(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							De = Rt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			De = null;
		}
	} else De = Ne ? Rt(e.stateNode.nextSibling) : null;
	return !0;
}
function zd() {
	for (var e = De; e; ) e = Rt(e.nextSibling);
}
function Kn() {
	(De = Ne = null), (H = !1);
}
function ma(e) {
	Ye === null ? (Ye = [e]) : Ye.push(e);
}
var J0 = wt.ReactCurrentBatchConfig;
function Ke(e, t) {
	if (e && e.defaultProps) {
		(t = X({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var ro = Kt(null),
	io = null,
	An = null,
	ga = null;
function ya() {
	ga = An = io = null;
}
function va(e) {
	var t = ro.current;
	U(ro), (e._currentValue = t);
}
function dl(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function $n(e, t) {
	(io = e),
		(ga = An = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function He(e) {
	var t = e._currentValue;
	if (ga !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
			if (io === null) throw Error(S(308));
			(An = e), (io.dependencies = { lanes: 0, firstContext: e });
		} else An = An.next = e;
	return t;
}
var rn = null;
function wa(e) {
	rn === null ? (rn = [e]) : rn.push(e);
}
function Fd(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), wa(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		yt(e, r)
	);
}
function yt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function xa(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function jd(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function pt(e, t) {
	return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _t(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), F & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), yt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), wa(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		yt(e, n)
	);
}
function Oi(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), oa(e, n);
	}
}
function Qu(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function oo(e, t, n, r) {
	var i = e.updateQueue;
	Ct = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var a = l,
			u = a.next;
		(a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== s &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
	}
	if (o !== null) {
		var f = i.baseState;
		(s = 0), (c = u = a = null), (l = o);
		do {
			var d = l.lane,
				m = l.eventTime;
			if ((r & d) === d) {
				c !== null &&
					(c = c.next =
						{
							eventTime: m,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var y = e,
						v = l;
					switch (((d = t), (m = n), v.tag)) {
						case 1:
							if (((y = v.payload), typeof y == "function")) {
								f = y.call(m, f, d);
								break e;
							}
							f = y;
							break e;
						case 3:
							y.flags = (y.flags & -65537) | 128;
						case 0:
							if (
								((y = v.payload),
								(d = typeof y == "function" ? y.call(m, f, d) : y),
								d == null)
							)
								break e;
							f = X({}, f, d);
							break e;
						case 2:
							Ct = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [l]) : d.push(l));
			} else
				(m = {
					eventTime: m,
					lane: d,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
					(s |= d);
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break;
				(d = l),
					(l = d.next),
					(d.next = null),
					(i.lastBaseUpdate = d),
					(i.shared.pending = null);
			}
		} while (1);
		if (
			(c === null && (a = f),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(dn |= s), (e.lanes = s), (e.memoizedState = f);
	}
}
function Yu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function")) throw Error(S(191, i));
				i.call(r);
			}
		}
}
var Id = new Ff.Component().refs;
function pl(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : X({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? yn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = ve(),
			i = zt(e),
			o = pt(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = _t(e, o, i)),
			t !== null && (Ze(t, e, i, r), Oi(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = ve(),
			i = zt(e),
			o = pt(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = _t(e, o, i)),
			t !== null && (Ze(t, e, i, r), Oi(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = ve(),
			r = zt(e),
			i = pt(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = _t(e, i, r)),
			t !== null && (Ze(t, e, r, n), Oi(t, e, r));
	},
};
function Xu(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !jr(n, r) || !jr(i, o)
			: !0
	);
}
function Bd(e, t, n) {
	var r = !1,
		i = $t,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = He(o))
			: ((i = Te(t) ? un : me.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? Gn(e, i) : $t)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = No),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Zu(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function hl(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = Id), xa(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = He(o))
		: ((o = Te(t) ? un : me.current), (i.context = Gn(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (pl(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
			t !== i.state && No.enqueueReplaceState(i, i.state, null),
			oo(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function sr(e, t, n) {
	if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(S(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(S(147, e));
			var i = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var l = i.refs;
						l === Id && (l = i.refs = {}), s === null ? delete l[o] : (l[o] = s);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(S(284));
		if (!n._owner) throw Error(S(290, e));
	}
	return e;
}
function Si(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			S(
				31,
				e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
			)
		))
	);
}
function Ju(e) {
	var t = e._init;
	return t(e._payload);
}
function Ud(e) {
	function t(g, p) {
		if (e) {
			var h = g.deletions;
			h === null ? ((g.deletions = [p]), (g.flags |= 16)) : h.push(p);
		}
	}
	function n(g, p) {
		if (!e) return null;
		for (; p !== null; ) t(g, p), (p = p.sibling);
		return null;
	}
	function r(g, p) {
		for (g = new Map(); p !== null; )
			p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
		return g;
	}
	function i(g, p) {
		return (g = Ft(g, p)), (g.index = 0), (g.sibling = null), g;
	}
	function o(g, p, h) {
		return (
			(g.index = h),
			e
				? ((h = g.alternate),
				  h !== null
						? ((h = h.index), h < p ? ((g.flags |= 2), p) : h)
						: ((g.flags |= 2), p))
				: ((g.flags |= 1048576), p)
		);
	}
	function s(g) {
		return e && g.alternate === null && (g.flags |= 2), g;
	}
	function l(g, p, h, w) {
		return p === null || p.tag !== 6
			? ((p = vs(h, g.mode, w)), (p.return = g), p)
			: ((p = i(p, h)), (p.return = g), p);
	}
	function a(g, p, h, w) {
		var x = h.type;
		return x === Cn
			? c(g, p, h.props.children, w, h.key)
			: p !== null &&
			  (p.elementType === x ||
					(typeof x == "object" && x !== null && x.$$typeof === Pt && Ju(x) === p.type))
			? ((w = i(p, h.props)), (w.ref = sr(g, p, h)), (w.return = g), w)
			: ((w = Ui(h.type, h.key, h.props, null, g.mode, w)),
			  (w.ref = sr(g, p, h)),
			  (w.return = g),
			  w);
	}
	function u(g, p, h, w) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== h.containerInfo ||
			p.stateNode.implementation !== h.implementation
			? ((p = ws(h, g.mode, w)), (p.return = g), p)
			: ((p = i(p, h.children || [])), (p.return = g), p);
	}
	function c(g, p, h, w, x) {
		return p === null || p.tag !== 7
			? ((p = an(h, g.mode, w, x)), (p.return = g), p)
			: ((p = i(p, h)), (p.return = g), p);
	}
	function f(g, p, h) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return (p = vs("" + p, g.mode, h)), (p.return = g), p;
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case ci:
					return (
						(h = Ui(p.type, p.key, p.props, null, g.mode, h)),
						(h.ref = sr(g, null, p)),
						(h.return = g),
						h
					);
				case Pn:
					return (p = ws(p, g.mode, h)), (p.return = g), p;
				case Pt:
					var w = p._init;
					return f(g, w(p._payload), h);
			}
			if (dr(p) || tr(p)) return (p = an(p, g.mode, h, null)), (p.return = g), p;
			Si(g, p);
		}
		return null;
	}
	function d(g, p, h, w) {
		var x = p !== null ? p.key : null;
		if ((typeof h == "string" && h !== "") || typeof h == "number")
			return x !== null ? null : l(g, p, "" + h, w);
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case ci:
					return h.key === x ? a(g, p, h, w) : null;
				case Pn:
					return h.key === x ? u(g, p, h, w) : null;
				case Pt:
					return (x = h._init), d(g, p, x(h._payload), w);
			}
			if (dr(h) || tr(h)) return x !== null ? null : c(g, p, h, w, null);
			Si(g, h);
		}
		return null;
	}
	function m(g, p, h, w, x) {
		if ((typeof w == "string" && w !== "") || typeof w == "number")
			return (g = g.get(h) || null), l(p, g, "" + w, x);
		if (typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case ci:
					return (g = g.get(w.key === null ? h : w.key) || null), a(p, g, w, x);
				case Pn:
					return (g = g.get(w.key === null ? h : w.key) || null), u(p, g, w, x);
				case Pt:
					var T = w._init;
					return m(g, p, h, T(w._payload), x);
			}
			if (dr(w) || tr(w)) return (g = g.get(h) || null), c(p, g, w, x, null);
			Si(p, w);
		}
		return null;
	}
	function y(g, p, h, w) {
		for (
			var x = null, T = null, C = p, k = (p = 0), O = null;
			C !== null && k < h.length;
			k++
		) {
			C.index > k ? ((O = C), (C = null)) : (O = C.sibling);
			var N = d(g, C, h[k], w);
			if (N === null) {
				C === null && (C = O);
				break;
			}
			e && C && N.alternate === null && t(g, C),
				(p = o(N, p, k)),
				T === null ? (x = N) : (T.sibling = N),
				(T = N),
				(C = O);
		}
		if (k === h.length) return n(g, C), H && qt(g, k), x;
		if (C === null) {
			for (; k < h.length; k++)
				(C = f(g, h[k], w)),
					C !== null &&
						((p = o(C, p, k)), T === null ? (x = C) : (T.sibling = C), (T = C));
			return H && qt(g, k), x;
		}
		for (C = r(g, C); k < h.length; k++)
			(O = m(C, g, k, h[k], w)),
				O !== null &&
					(e && O.alternate !== null && C.delete(O.key === null ? k : O.key),
					(p = o(O, p, k)),
					T === null ? (x = O) : (T.sibling = O),
					(T = O));
		return (
			e &&
				C.forEach(function (J) {
					return t(g, J);
				}),
			H && qt(g, k),
			x
		);
	}
	function v(g, p, h, w) {
		var x = tr(h);
		if (typeof x != "function") throw Error(S(150));
		if (((h = x.call(h)), h == null)) throw Error(S(151));
		for (
			var T = (x = null), C = p, k = (p = 0), O = null, N = h.next();
			C !== null && !N.done;
			k++, N = h.next()
		) {
			C.index > k ? ((O = C), (C = null)) : (O = C.sibling);
			var J = d(g, C, N.value, w);
			if (J === null) {
				C === null && (C = O);
				break;
			}
			e && C && J.alternate === null && t(g, C),
				(p = o(J, p, k)),
				T === null ? (x = J) : (T.sibling = J),
				(T = J),
				(C = O);
		}
		if (N.done) return n(g, C), H && qt(g, k), x;
		if (C === null) {
			for (; !N.done; k++, N = h.next())
				(N = f(g, N.value, w)),
					N !== null &&
						((p = o(N, p, k)), T === null ? (x = N) : (T.sibling = N), (T = N));
			return H && qt(g, k), x;
		}
		for (C = r(g, C); !N.done; k++, N = h.next())
			(N = m(C, g, k, N.value, w)),
				N !== null &&
					(e && N.alternate !== null && C.delete(N.key === null ? k : N.key),
					(p = o(N, p, k)),
					T === null ? (x = N) : (T.sibling = N),
					(T = N));
		return (
			e &&
				C.forEach(function (Se) {
					return t(g, Se);
				}),
			H && qt(g, k),
			x
		);
	}
	function P(g, p, h, w) {
		if (
			(typeof h == "object" &&
				h !== null &&
				h.type === Cn &&
				h.key === null &&
				(h = h.props.children),
			typeof h == "object" && h !== null)
		) {
			switch (h.$$typeof) {
				case ci:
					e: {
						for (var x = h.key, T = p; T !== null; ) {
							if (T.key === x) {
								if (((x = h.type), x === Cn)) {
									if (T.tag === 7) {
										n(g, T.sibling),
											(p = i(T, h.props.children)),
											(p.return = g),
											(g = p);
										break e;
									}
								} else if (
									T.elementType === x ||
									(typeof x == "object" &&
										x !== null &&
										x.$$typeof === Pt &&
										Ju(x) === T.type)
								) {
									n(g, T.sibling),
										(p = i(T, h.props)),
										(p.ref = sr(g, T, h)),
										(p.return = g),
										(g = p);
									break e;
								}
								n(g, T);
								break;
							} else t(g, T);
							T = T.sibling;
						}
						h.type === Cn
							? ((p = an(h.props.children, g.mode, w, h.key)),
							  (p.return = g),
							  (g = p))
							: ((w = Ui(h.type, h.key, h.props, null, g.mode, w)),
							  (w.ref = sr(g, p, h)),
							  (w.return = g),
							  (g = w));
					}
					return s(g);
				case Pn:
					e: {
						for (T = h.key; p !== null; ) {
							if (p.key === T)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === h.containerInfo &&
									p.stateNode.implementation === h.implementation
								) {
									n(g, p.sibling),
										(p = i(p, h.children || [])),
										(p.return = g),
										(g = p);
									break e;
								} else {
									n(g, p);
									break;
								}
							else t(g, p);
							p = p.sibling;
						}
						(p = ws(h, g.mode, w)), (p.return = g), (g = p);
					}
					return s(g);
				case Pt:
					return (T = h._init), P(g, p, T(h._payload), w);
			}
			if (dr(h)) return y(g, p, h, w);
			if (tr(h)) return v(g, p, h, w);
			Si(g, h);
		}
		return (typeof h == "string" && h !== "") || typeof h == "number"
			? ((h = "" + h),
			  p !== null && p.tag === 6
					? (n(g, p.sibling), (p = i(p, h)), (p.return = g), (g = p))
					: (n(g, p), (p = vs(h, g.mode, w)), (p.return = g), (g = p)),
			  s(g))
			: n(g, p);
	}
	return P;
}
var Qn = Ud(!0),
	$d = Ud(!1),
	ri = {},
	ot = Kt(ri),
	$r = Kt(ri),
	Hr = Kt(ri);
function on(e) {
	if (e === ri) throw Error(S(174));
	return e;
}
function Sa(e, t) {
	switch ((I(Hr, t), I($r, e), I(ot, ri), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ks(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Ks(t, e));
	}
	U(ot), I(ot, t);
}
function Yn() {
	U(ot), U($r), U(Hr);
}
function Hd(e) {
	on(Hr.current);
	var t = on(ot.current),
		n = Ks(t, e.type);
	t !== n && (I($r, e), I(ot, n));
}
function ka(e) {
	$r.current === e && (U(ot), U($r));
}
var G = Kt(0);
function so(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var ds = [];
function Pa() {
	for (var e = 0; e < ds.length; e++) ds[e]._workInProgressVersionPrimary = null;
	ds.length = 0;
}
var zi = wt.ReactCurrentDispatcher,
	ps = wt.ReactCurrentBatchConfig,
	fn = 0,
	Y = null,
	re = null,
	oe = null,
	lo = !1,
	Sr = !1,
	Wr = 0,
	q0 = 0;
function fe() {
	throw Error(S(321));
}
function Ca(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
	return !0;
}
function Ta(e, t, n, r, i, o) {
	if (
		((fn = o),
		(Y = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(zi.current = e === null || e.memoizedState === null ? ng : rg),
		(e = n(r, i)),
		Sr)
	) {
		o = 0;
		do {
			if (((Sr = !1), (Wr = 0), 25 <= o)) throw Error(S(301));
			(o += 1), (oe = re = null), (t.updateQueue = null), (zi.current = ig), (e = n(r, i));
		} while (Sr);
	}
	if (
		((zi.current = ao),
		(t = re !== null && re.next !== null),
		(fn = 0),
		(oe = re = Y = null),
		(lo = !1),
		t)
	)
		throw Error(S(300));
	return e;
}
function Ea() {
	var e = Wr !== 0;
	return (Wr = 0), e;
}
function et() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
	return oe === null ? (Y.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function We() {
	if (re === null) {
		var e = Y.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = re.next;
	var t = oe === null ? Y.memoizedState : oe.next;
	if (t !== null) (oe = t), (re = e);
	else {
		if (e === null) throw Error(S(310));
		(re = e),
			(e = {
				memoizedState: re.memoizedState,
				baseState: re.baseState,
				baseQueue: re.baseQueue,
				queue: re.queue,
				next: null,
			}),
			oe === null ? (Y.memoizedState = oe = e) : (oe = oe.next = e);
	}
	return oe;
}
function Gr(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function hs(e) {
	var t = We(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = re,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var l = (s = null),
			a = null,
			u = o;
		do {
			var c = u.lane;
			if ((fn & c) === c)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				a === null ? ((l = a = f), (s = r)) : (a = a.next = f), (Y.lanes |= c), (dn |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		a === null ? (s = r) : (a.next = l),
			Je(r, t.memoizedState) || (Pe = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = a),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (Y.lanes |= o), (dn |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ms(e) {
	var t = We(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = e(o, s.action)), (s = s.next);
		while (s !== i);
		Je(o, t.memoizedState) || (Pe = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function Wd() {}
function Gd(e, t) {
	var n = Y,
		r = We(),
		i = t(),
		o = !Je(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (Pe = !0)),
		(r = r.queue),
		La(Yd.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
	) {
		if (((n.flags |= 2048), Kr(9, Qd.bind(null, n, r, i, t), void 0, null), le === null))
			throw Error(S(349));
		fn & 30 || Kd(n, t, i);
	}
	return i;
}
function Kd(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Y.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qd(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Xd(t) && Zd(e);
}
function Yd(e, t, n) {
	return n(function () {
		Xd(t) && Zd(e);
	});
}
function Xd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Je(e, n);
	} catch {
		return !0;
	}
}
function Zd(e) {
	var t = yt(e, 1);
	t !== null && Ze(t, e, 1, -1);
}
function qu(e) {
	var t = et();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Gr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = tg.bind(null, Y, e)),
		[t.memoizedState, e]
	);
}
function Kr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Y.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Y.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Jd() {
	return We().memoizedState;
}
function Fi(e, t, n, r) {
	var i = et();
	(Y.flags |= e), (i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ao(e, t, n, r) {
	var i = We();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (re !== null) {
		var s = re.memoizedState;
		if (((o = s.destroy), r !== null && Ca(r, s.deps))) {
			i.memoizedState = Kr(t, n, o, r);
			return;
		}
	}
	(Y.flags |= e), (i.memoizedState = Kr(1 | t, n, o, r));
}
function bu(e, t) {
	return Fi(8390656, 8, e, t);
}
function La(e, t) {
	return Ao(2048, 8, e, t);
}
function qd(e, t) {
	return Ao(4, 2, e, t);
}
function bd(e, t) {
	return Ao(4, 4, e, t);
}
function ep(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function tp(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), Ao(4, 4, ep.bind(null, t, e), n);
}
function Va() {}
function np(e, t) {
	var n = We();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ca(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function rp(e, t) {
	var n = We();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ca(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function ip(e, t, n) {
	return fn & 21
		? (Je(n, t) || ((n = ld()), (Y.lanes |= n), (dn |= n), (e.baseState = !0)), t)
		: (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function b0(e, t) {
	var n = j;
	(j = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = ps.transition;
	ps.transition = {};
	try {
		e(!1), t();
	} finally {
		(j = n), (ps.transition = r);
	}
}
function op() {
	return We().memoizedState;
}
function eg(e, t, n) {
	var r = zt(e);
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), sp(e)))
		lp(t, n);
	else if (((n = Fd(e, t, n, r)), n !== null)) {
		var i = ve();
		Ze(n, e, r, i), ap(n, t, r);
	}
}
function tg(e, t, n) {
	var r = zt(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (sp(e)) lp(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					l = o(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = l), Je(l, s))) {
					var a = t.interleaved;
					a === null ? ((i.next = i), wa(t)) : ((i.next = a.next), (a.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = Fd(e, t, i, r)), n !== null && ((i = ve()), Ze(n, e, r, i), ap(n, t, r));
	}
}
function sp(e) {
	var t = e.alternate;
	return e === Y || (t !== null && t === Y);
}
function lp(e, t) {
	Sr = lo = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function ap(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), oa(e, n);
	}
}
var ao = {
		readContext: He,
		useCallback: fe,
		useContext: fe,
		useEffect: fe,
		useImperativeHandle: fe,
		useInsertionEffect: fe,
		useLayoutEffect: fe,
		useMemo: fe,
		useReducer: fe,
		useRef: fe,
		useState: fe,
		useDebugValue: fe,
		useDeferredValue: fe,
		useTransition: fe,
		useMutableSource: fe,
		useSyncExternalStore: fe,
		useId: fe,
		unstable_isNewReconciler: !1,
	},
	ng = {
		readContext: He,
		useCallback: function (e, t) {
			return (et().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: He,
		useEffect: bu,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), Fi(4194308, 4, ep.bind(null, t, e), n);
		},
		useLayoutEffect: function (e, t) {
			return Fi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Fi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = et();
			return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
		},
		useReducer: function (e, t, n) {
			var r = et();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = eg.bind(null, Y, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = et();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: qu,
		useDebugValue: Va,
		useDeferredValue: function (e) {
			return (et().memoizedState = e);
		},
		useTransition: function () {
			var e = qu(!1),
				t = e[0];
			return (e = b0.bind(null, e[1])), (et().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Y,
				i = et();
			if (H) {
				if (n === void 0) throw Error(S(407));
				n = n();
			} else {
				if (((n = t()), le === null)) throw Error(S(349));
				fn & 30 || Kd(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				bu(Yd.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Kr(9, Qd.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = et(),
				t = le.identifierPrefix;
			if (H) {
				var n = ft,
					r = ct;
				(n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Wr++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = q0++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	rg = {
		readContext: He,
		useCallback: np,
		useContext: He,
		useEffect: La,
		useImperativeHandle: tp,
		useInsertionEffect: qd,
		useLayoutEffect: bd,
		useMemo: rp,
		useReducer: hs,
		useRef: Jd,
		useState: function () {
			return hs(Gr);
		},
		useDebugValue: Va,
		useDeferredValue: function (e) {
			var t = We();
			return ip(t, re.memoizedState, e);
		},
		useTransition: function () {
			var e = hs(Gr)[0],
				t = We().memoizedState;
			return [e, t];
		},
		useMutableSource: Wd,
		useSyncExternalStore: Gd,
		useId: op,
		unstable_isNewReconciler: !1,
	},
	ig = {
		readContext: He,
		useCallback: np,
		useContext: He,
		useEffect: La,
		useImperativeHandle: tp,
		useInsertionEffect: qd,
		useLayoutEffect: bd,
		useMemo: rp,
		useReducer: ms,
		useRef: Jd,
		useState: function () {
			return ms(Gr);
		},
		useDebugValue: Va,
		useDeferredValue: function (e) {
			var t = We();
			return re === null ? (t.memoizedState = e) : ip(t, re.memoizedState, e);
		},
		useTransition: function () {
			var e = ms(Gr)[0],
				t = We().memoizedState;
			return [e, t];
		},
		useMutableSource: Wd,
		useSyncExternalStore: Gd,
		useId: op,
		unstable_isNewReconciler: !1,
	};
function Xn(e, t) {
	try {
		var n = "",
			r = t;
		do (n += Am(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function gs(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ml(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var og = typeof WeakMap == "function" ? WeakMap : Map;
function up(e, t, n) {
	(n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			co || ((co = !0), (Tl = r)), ml(e, t);
		}),
		n
	);
}
function cp(e, t, n) {
	(n = pt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				ml(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				ml(e, t),
					typeof r != "function" && (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
			}),
		n
	);
}
function ec(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new og();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = wg.bind(null, e, t, n)), t.then(e, e));
}
function tc(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function nc(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = pt(-1, 1)), (t.tag = 2), _t(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var sg = wt.ReactCurrentOwner,
	Pe = !1;
function ye(e, t, n, r) {
	t.child = e === null ? $d(t, null, n, r) : Qn(t, e.child, n, r);
}
function rc(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		$n(t, i),
		(r = Ta(e, t, n, r, o, i)),
		(n = Ea()),
		e !== null && !Pe
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), vt(e, t, i))
			: (H && n && pa(t), (t.flags |= 1), ye(e, t, r, i), t.child)
	);
}
function ic(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!za(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), fp(e, t, o, r, i))
			: ((e = Ui(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps;
		if (((n = n.compare), (n = n !== null ? n : jr), n(s, r) && e.ref === t.ref))
			return vt(e, t, i);
	}
	return (t.flags |= 1), (e = Ft(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function fp(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (jr(o, r) && e.ref === t.ref)
			if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (Pe = !0);
			else return (t.lanes = e.lanes), vt(e, t, i);
	}
	return gl(e, t, n, r, i);
}
function dp(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				I(_n, Me),
				(Me |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
					(t.updateQueue = null),
					I(_n, Me),
					(Me |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				I(_n, Me),
				(Me |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			I(_n, Me),
			(Me |= r);
	return ye(e, t, i, n), t.child;
}
function pp(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function gl(e, t, n, r, i) {
	var o = Te(n) ? un : me.current;
	return (
		(o = Gn(t, o)),
		$n(t, i),
		(n = Ta(e, t, n, r, o, i)),
		(r = Ea()),
		e !== null && !Pe
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), vt(e, t, i))
			: (H && r && pa(t), (t.flags |= 1), ye(e, t, n, i), t.child)
	);
}
function oc(e, t, n, r, i) {
	if (Te(n)) {
		var o = !0;
		eo(t);
	} else o = !1;
	if (($n(t, i), t.stateNode === null)) ji(e, t), Bd(t, n, r), hl(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var a = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = He(u))
			: ((u = Te(n) ? un : me.current), (u = Gn(t, u)));
		var c = n.getDerivedStateFromProps,
			f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
		f ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== r || a !== u) && Zu(t, s, r, u)),
			(Ct = !1);
		var d = t.memoizedState;
		(s.state = d),
			oo(t, r, s, i),
			(a = t.memoizedState),
			l !== r || d !== a || Ce.current || Ct
				? (typeof c == "function" && (pl(t, n, c, r), (a = t.memoizedState)),
				  (l = Ct || Xu(t, n, l, r, d, a, u))
						? (f ||
								(typeof s.UNSAFE_componentWillMount != "function" &&
									typeof s.componentWillMount != "function") ||
								(typeof s.componentWillMount == "function" &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == "function" &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = a)),
				  (s.props = r),
				  (s.state = a),
				  (s.context = u),
				  (r = l))
				: (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
	} else {
		(s = t.stateNode),
			jd(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : Ke(t.type, l)),
			(s.props = u),
			(f = t.pendingProps),
			(d = s.context),
			(a = n.contextType),
			typeof a == "object" && a !== null
				? (a = He(a))
				: ((a = Te(n) ? un : me.current), (a = Gn(t, a)));
		var m = n.getDerivedStateFromProps;
		(c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== f || d !== a) && Zu(t, s, r, a)),
			(Ct = !1),
			(d = t.memoizedState),
			(s.state = d),
			oo(t, r, s, i);
		var y = t.memoizedState;
		l !== f || d !== y || Ce.current || Ct
			? (typeof m == "function" && (pl(t, n, m, r), (y = t.memoizedState)),
			  (u = Ct || Xu(t, n, u, r, d, y, a) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != "function" &&
								typeof s.componentWillUpdate != "function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, y, a),
							typeof s.UNSAFE_componentWillUpdate == "function" &&
								s.UNSAFE_componentWillUpdate(r, y, a)),
					  typeof s.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != "function" ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (s.props = r),
			  (s.state = y),
			  (s.context = a),
			  (r = u))
			: (typeof s.componentDidUpdate != "function" ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != "function" ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return yl(e, t, n, r, o, i);
}
function yl(e, t, n, r, i, o) {
	pp(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && Wu(t, n, !1), vt(e, t, o);
	(r = t.stateNode), (sg.current = t);
	var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = Qn(t, e.child, null, o)), (t.child = Qn(t, null, l, o)))
			: ye(e, t, l, o),
		(t.memoizedState = r.state),
		i && Wu(t, n, !0),
		t.child
	);
}
function hp(e) {
	var t = e.stateNode;
	t.pendingContext
		? Hu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Hu(e, t.context, !1),
		Sa(e, t.containerInfo);
}
function sc(e, t, n, r, i) {
	return Kn(), ma(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function wl(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function mp(e, t, n) {
	var r = t.pendingProps,
		i = G.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		l;
	if (
		((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		l ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
		I(G, i & 1),
		e === null)
	)
		return (
			fl(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: "hidden", children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = Oo(s, r, 0, null)),
						  (e = an(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = wl(n)),
						  (t.memoizedState = vl),
						  e)
						: Ma(t, s))
		);
	if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return lg(e, t, s, r, l, i, n);
	if (o) {
		(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
		var a = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
				: ((r = Ft(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (o = Ft(l, o)) : ((o = an(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? wl(n)
					: { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = vl),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = Ft(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Ma(e, t) {
	return (
		(t = Oo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
	);
}
function ki(e, t, n, r) {
	return (
		r !== null && ma(r),
		Qn(t, e.child, null, n),
		(e = Ma(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function lg(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = gs(Error(S(422)))), ki(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = Oo({ mode: "visible", children: r.children }, i, 0, null)),
			  (o = an(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && Qn(t, e.child, null, s),
			  (t.child.memoizedState = wl(s)),
			  (t.memoizedState = vl),
			  o);
	if (!(t.mode & 1)) return ki(e, t, s, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (o = Error(S(419))), (r = gs(o, r, void 0)), ki(e, t, s, r);
	}
	if (((l = (s & e.childLanes) !== 0), Pe || l)) {
		if (((r = le), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 && i !== o.retryLane && ((o.retryLane = i), yt(e, i), Ze(r, e, i, -1));
		}
		return Oa(), (r = gs(Error(S(421)))), ki(e, t, s, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128), (t.child = e.child), (t = xg.bind(null, e)), (i._reactRetry = t), null)
		: ((e = o.treeContext),
		  (De = Rt(i.nextSibling)),
		  (Ne = t),
		  (H = !0),
		  (Ye = null),
		  e !== null &&
				((Ie[Be++] = ct),
				(Ie[Be++] = ft),
				(Ie[Be++] = cn),
				(ct = e.id),
				(ft = e.overflow),
				(cn = t)),
		  (t = Ma(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function lc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), dl(e.return, t, n);
}
function ys(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function gp(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((ye(e, t, r.children, n), (r = G.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && lc(e, n, t);
				else if (e.tag === 19) lc(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((I(G, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate), e !== null && so(e) === null && (i = n), (n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					ys(t, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && so(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				ys(t, !0, n, null, o);
				break;
			case "together":
				ys(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function ji(e, t) {
	!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
	if ((e !== null && (t.dependencies = e.dependencies), (dn |= t.lanes), !(n & t.childLanes)))
		return null;
	if (e !== null && t.child !== e.child) throw Error(S(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function ag(e, t, n) {
	switch (t.tag) {
		case 3:
			hp(t), Kn();
			break;
		case 5:
			Hd(t);
			break;
		case 1:
			Te(t.type) && eo(t);
			break;
		case 4:
			Sa(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			I(ro, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (I(G, G.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? mp(e, t, n)
					: (I(G, G.current & 1), (e = vt(e, t, n)), e !== null ? e.sibling : null);
			I(G, G.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return gp(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				I(G, G.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), dp(e, t, n);
	}
	return vt(e, t, n);
}
var yp, xl, vp, wp;
yp = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
xl = function () {};
vp = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), on(ot.current);
		var o = null;
		switch (n) {
			case "input":
				(i = $s(e, i)), (r = $s(e, r)), (o = []);
				break;
			case "select":
				(i = X({}, i, { value: void 0 })), (r = X({}, r, { value: void 0 })), (o = []);
				break;
			case "textarea":
				(i = Gs(e, i)), (r = Gs(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = qi);
		}
		Qs(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var l = i[u];
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(Nr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === "style")
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) ||
								(a && a.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in a)
							a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
					} else n || (o || (o = []), o.push(u, n)), (n = a);
				else
					u === "dangerouslySetInnerHTML"
						? ((a = a ? a.__html : void 0),
						  (l = l ? l.__html : void 0),
						  a != null && l !== a && (o = o || []).push(u, a))
						: u === "children"
						? (typeof a != "string" && typeof a != "number") ||
						  (o = o || []).push(u, "" + a)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (Nr.hasOwnProperty(u)
								? (a != null && u === "onScroll" && B("scroll", e),
								  o || l === a || (o = []))
								: (o = o || []).push(u, a));
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
wp = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function lr(e, t) {
	if (!H)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function de(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ug(e, t, n) {
	var r = t.pendingProps;
	switch ((ha(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return de(t), null;
		case 1:
			return Te(t.type) && bi(), de(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Yn(),
				U(Ce),
				U(me),
				Pa(),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(xi(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Ye !== null && (Vl(Ye), (Ye = null)))),
				xl(e, t),
				de(t),
				null
			);
		case 5:
			ka(t);
			var i = on(Hr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				vp(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(S(166));
					return de(t), null;
				}
				if (((e = on(ot.current)), xi(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[nt] = t), (r[Ur] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							B("cancel", r), B("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							B("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < hr.length; i++) B(hr[i], r);
							break;
						case "source":
							B("error", r);
							break;
						case "img":
						case "image":
						case "link":
							B("error", r), B("load", r);
							break;
						case "details":
							B("toggle", r);
							break;
						case "input":
							gu(r, o), B("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }), B("invalid", r);
							break;
						case "textarea":
							vu(r, o), B("invalid", r);
					}
					Qs(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s];
							s === "children"
								? typeof l == "string"
									? r.textContent !== l &&
									  (o.suppressHydrationWarning !== !0 && wi(r.textContent, l, e),
									  (i = ["children", l]))
									: typeof l == "number" &&
									  r.textContent !== "" + l &&
									  (o.suppressHydrationWarning !== !0 && wi(r.textContent, l, e),
									  (i = ["children", "" + l]))
								: Nr.hasOwnProperty(s) &&
								  l != null &&
								  s === "onScroll" &&
								  B("scroll", r);
						}
					switch (n) {
						case "input":
							fi(r), yu(r, o, !0);
							break;
						case "textarea":
							fi(r), wu(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = qi);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Kf(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = s.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === "select" &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[nt] = t),
						(e[Ur] = r),
						yp(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = Ys(n, r)), n)) {
							case "dialog":
								B("cancel", e), B("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								B("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < hr.length; i++) B(hr[i], e);
								i = r;
								break;
							case "source":
								B("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								B("error", e), B("load", e), (i = r);
								break;
							case "details":
								B("toggle", e), (i = r);
								break;
							case "input":
								gu(e, r), (i = $s(e, r)), B("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = X({}, r, { value: void 0 })),
									B("invalid", e);
								break;
							case "textarea":
								vu(e, r), (i = Gs(e, r)), B("invalid", e);
								break;
							default:
								i = r;
						}
						Qs(n, i), (l = i);
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var a = l[o];
								o === "style"
									? Xf(e, a)
									: o === "dangerouslySetInnerHTML"
									? ((a = a ? a.__html : void 0), a != null && Qf(e, a))
									: o === "children"
									? typeof a == "string"
										? (n !== "textarea" || a !== "") && Ar(e, a)
										: typeof a == "number" && Ar(e, "" + a)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (Nr.hasOwnProperty(o)
											? a != null && o === "onScroll" && B("scroll", e)
											: a != null && bl(e, o, a, s));
							}
						switch (n) {
							case "input":
								fi(e), yu(e, r, !1);
								break;
							case "textarea":
								fi(e), wu(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Ut(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? jn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  jn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = qi);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return de(t), null;
		case 6:
			if (e && t.stateNode != null) wp(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
				if (((n = on(Hr.current)), on(ot.current), xi(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[nt] = t),
						(o = r.nodeValue !== n) && ((e = Ne), e !== null))
					)
						switch (e.tag) {
							case 3:
								wi(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									wi(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[nt] = t),
						(t.stateNode = r);
			}
			return de(t), null;
		case 13:
			if (
				(U(G),
				(r = t.memoizedState),
				e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (H && De !== null && t.mode & 1 && !(t.flags & 128))
					zd(), Kn(), (t.flags |= 98560), (o = !1);
				else if (((o = xi(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(S(318));
						if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
							throw Error(S(317));
						o[nt] = t;
					} else Kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					de(t), (o = !1);
				} else Ye !== null && (Vl(Ye), (Ye = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 && (e === null || G.current & 1 ? ie === 0 && (ie = 3) : Oa())),
				  t.updateQueue !== null && (t.flags |= 4),
				  de(t),
				  null);
		case 4:
			return Yn(), xl(e, t), e === null && Ir(t.stateNode.containerInfo), de(t), null;
		case 10:
			return va(t.type._context), de(t), null;
		case 17:
			return Te(t.type) && bi(), de(t), null;
		case 19:
			if ((U(G), (o = t.memoizedState), o === null)) return de(t), null;
			if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) lr(o, !1);
				else {
					if (ie !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = so(e)), s !== null)) {
								for (
									t.flags |= 128,
										lr(o, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return I(G, (G.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						ee() > Zn &&
						((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = so(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							lr(o, !0),
							o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
						)
							return de(t), null;
					} else
						2 * ee() - o.renderingStartTime > Zn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = ee()),
				  (t.sibling = null),
				  (n = G.current),
				  I(G, r ? (n & 1) | 2 : n & 1),
				  t)
				: (de(t), null);
		case 22:
		case 23:
			return (
				_a(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Me & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: de(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(S(156, t.tag));
}
function cg(e, t) {
	switch ((ha(t), t.tag)) {
		case 1:
			return (
				Te(t.type) && bi(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Yn(),
				U(Ce),
				U(me),
				Pa(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return ka(t), null;
		case 13:
			if ((U(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(S(340));
				Kn();
			}
			return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
		case 19:
			return U(G), null;
		case 4:
			return Yn(), null;
		case 10:
			return va(t.type._context), null;
		case 22:
		case 23:
			return _a(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Pi = !1,
	pe = !1,
	fg = typeof WeakSet == "function" ? WeakSet : Set,
	L = null;
function Rn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				Z(e, t, r);
			}
		else n.current = null;
}
function Sl(e, t, n) {
	try {
		n();
	} catch (r) {
		Z(e, t, r);
	}
}
var ac = !1;
function dg(e, t) {
	if (((il = Xi), (e = Pd()), da(e))) {
		if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						l = -1,
						a = -1,
						u = 0,
						c = 0,
						f = e,
						d = null;
					t: for (;;) {
						for (
							var m;
							f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
								f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
								f.nodeType === 3 && (s += f.nodeValue.length),
								(m = f.firstChild) !== null;

						)
							(d = f), (f = m);
						for (;;) {
							if (f === e) break t;
							if (
								(d === n && ++u === i && (l = s),
								d === o && ++c === r && (a = s),
								(m = f.nextSibling) !== null)
							)
								break;
							(f = d), (d = f.parentNode);
						}
						f = m;
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (ol = { focusedElem: e, selectionRange: n }, Xi = !1, L = t; L !== null; )
		if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (L = e);
		else
			for (; L !== null; ) {
				t = L;
				try {
					var y = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (y !== null) {
									var v = y.memoizedProps,
										P = y.memoizedState,
										g = t.stateNode,
										p = g.getSnapshotBeforeUpdate(
											t.elementType === t.type ? v : Ke(t.type, v),
											P
										);
									g.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var h = t.stateNode.containerInfo;
								h.nodeType === 1
									? (h.textContent = "")
									: h.nodeType === 9 &&
									  h.documentElement &&
									  h.removeChild(h.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(S(163));
						}
				} catch (w) {
					Z(t, t.return, w);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (L = e);
					break;
				}
				L = t.return;
			}
	return (y = ac), (ac = !1), y;
}
function kr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && Sl(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Ro(e, t) {
	if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function kl(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function xp(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), xp(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null && (delete t[nt], delete t[Ur], delete t[al], delete t[Y0], delete t[X0])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Sp(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Sp(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Pl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = qi));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Pl(e, t, n), e = e.sibling; e !== null; ) Pl(e, t, n), (e = e.sibling);
}
function Cl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Cl(e, t, n), e = e.sibling; e !== null; ) Cl(e, t, n), (e = e.sibling);
}
var ae = null,
	Qe = !1;
function St(e, t, n) {
	for (n = n.child; n !== null; ) kp(e, t, n), (n = n.sibling);
}
function kp(e, t, n) {
	if (it && typeof it.onCommitFiberUnmount == "function")
		try {
			it.onCommitFiberUnmount(To, n);
		} catch {}
	switch (n.tag) {
		case 5:
			pe || Rn(n, t);
		case 6:
			var r = ae,
				i = Qe;
			(ae = null),
				St(e, t, n),
				(ae = r),
				(Qe = i),
				ae !== null &&
					(Qe
						? ((e = ae),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ae.removeChild(n.stateNode));
			break;
		case 18:
			ae !== null &&
				(Qe
					? ((e = ae),
					  (n = n.stateNode),
					  e.nodeType === 8 ? cs(e.parentNode, n) : e.nodeType === 1 && cs(e, n),
					  zr(e))
					: cs(ae, n.stateNode));
			break;
		case 4:
			(r = ae),
				(i = Qe),
				(ae = n.stateNode.containerInfo),
				(Qe = !0),
				St(e, t, n),
				(ae = r),
				(Qe = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag), s !== void 0 && (o & 2 || o & 4) && Sl(n, t, s), (i = i.next);
				} while (i !== r);
			}
			St(e, t, n);
			break;
		case 1:
			if (!pe && (Rn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					Z(n, t, l);
				}
			St(e, t, n);
			break;
		case 21:
			St(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((pe = (r = pe) || n.memoizedState !== null), St(e, t, n), (pe = r))
				: St(e, t, n);
			break;
		default:
			St(e, t, n);
	}
}
function cc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new fg()),
			t.forEach(function (r) {
				var i = Sg.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Ge(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					l = s;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(ae = l.stateNode), (Qe = !1);
							break e;
						case 3:
							(ae = l.stateNode.containerInfo), (Qe = !0);
							break e;
						case 4:
							(ae = l.stateNode.containerInfo), (Qe = !0);
							break e;
					}
					l = l.return;
				}
				if (ae === null) throw Error(S(160));
				kp(o, s, i), (ae = null), (Qe = !1);
				var a = i.alternate;
				a !== null && (a.return = null), (i.return = null);
			} catch (u) {
				Z(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pp(t, e), (t = t.sibling);
}
function Pp(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ge(t, e), be(e), r & 4)) {
				try {
					kr(3, e, e.return), Ro(3, e);
				} catch (v) {
					Z(e, e.return, v);
				}
				try {
					kr(5, e, e.return);
				} catch (v) {
					Z(e, e.return, v);
				}
			}
			break;
		case 1:
			Ge(t, e), be(e), r & 512 && n !== null && Rn(n, n.return);
			break;
		case 5:
			if ((Ge(t, e), be(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32)) {
				var i = e.stateNode;
				try {
					Ar(i, "");
				} catch (v) {
					Z(e, e.return, v);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					l = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						l === "input" && o.type === "radio" && o.name != null && Wf(i, o), Ys(l, s);
						var u = Ys(l, o);
						for (s = 0; s < a.length; s += 2) {
							var c = a[s],
								f = a[s + 1];
							c === "style"
								? Xf(i, f)
								: c === "dangerouslySetInnerHTML"
								? Qf(i, f)
								: c === "children"
								? Ar(i, f)
								: bl(i, c, f, u);
						}
						switch (l) {
							case "input":
								Hs(i, o);
								break;
							case "textarea":
								Gf(i, o);
								break;
							case "select":
								var d = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m != null
									? jn(i, !!o.multiple, m, !1)
									: d !== !!o.multiple &&
									  (o.defaultValue != null
											? jn(i, !!o.multiple, o.defaultValue, !0)
											: jn(i, !!o.multiple, o.multiple ? [] : "", !1));
						}
						i[Ur] = o;
					} catch (v) {
						Z(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((Ge(t, e), be(e), r & 4)) {
				if (e.stateNode === null) throw Error(S(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (v) {
					Z(e, e.return, v);
				}
			}
			break;
		case 3:
			if ((Ge(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
				try {
					zr(t.containerInfo);
				} catch (v) {
					Z(e, e.return, v);
				}
			break;
		case 4:
			Ge(t, e), be(e);
			break;
		case 13:
			Ge(t, e),
				be(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Aa = ee())),
				r & 4 && cc(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((pe = (u = pe) || c), Ge(t, e), (pe = u)) : Ge(t, e),
				be(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (L = e, c = e.child; c !== null; ) {
						for (f = L = c; L !== null; ) {
							switch (((d = L), (m = d.child), d.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									kr(4, d, d.return);
									break;
								case 1:
									Rn(d, d.return);
									var y = d.stateNode;
									if (typeof y.componentWillUnmount == "function") {
										(r = d), (n = d.return);
										try {
											(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount();
										} catch (v) {
											Z(r, n, v);
										}
									}
									break;
								case 5:
									Rn(d, d.return);
									break;
								case 22:
									if (d.memoizedState !== null) {
										dc(f);
										continue;
									}
							}
							m !== null ? ((m.return = d), (L = m)) : dc(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								(i = f.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((l = f.stateNode),
										  (a = f.memoizedProps.style),
										  (s =
												a != null && a.hasOwnProperty("display")
													? a.display
													: null),
										  (l.style.display = Yf("display", s)));
							} catch (v) {
								Z(e, e.return, v);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (v) {
								Z(e, e.return, v);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), (f = f.return);
					}
					c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			Ge(t, e), be(e), r & 4 && cc(e);
			break;
		case 21:
			break;
		default:
			Ge(t, e), be(e);
	}
}
function be(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Sp(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(S(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Ar(i, ""), (r.flags &= -33));
					var o = uc(e);
					Cl(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = uc(e);
					Pl(e, l, s);
					break;
				default:
					throw Error(S(161));
			}
		} catch (a) {
			Z(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function pg(e, t, n) {
	(L = e), Cp(e);
}
function Cp(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var i = L,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Pi;
			if (!s) {
				var l = i.alternate,
					a = (l !== null && l.memoizedState !== null) || pe;
				l = Pi;
				var u = pe;
				if (((Pi = s), (pe = a) && !u))
					for (L = i; L !== null; )
						(s = L),
							(a = s.child),
							s.tag === 22 && s.memoizedState !== null
								? pc(i)
								: a !== null
								? ((a.return = s), (L = a))
								: pc(i);
				for (; o !== null; ) (L = o), Cp(o), (o = o.sibling);
				(L = i), (Pi = l), (pe = u);
			}
			fc(e);
		} else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : fc(e);
	}
}
function fc(e) {
	for (; L !== null; ) {
		var t = L;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							pe || Ro(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !pe)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Ke(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && Yu(t, o, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Yu(t, s, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var a = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										a.autoFocus && n.focus();
										break;
									case "img":
										a.src && (n.src = a.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && zr(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(S(163));
					}
				pe || (t.flags & 512 && kl(t));
			} catch (d) {
				Z(t, t.return, d);
			}
		}
		if (t === e) {
			L = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (L = n);
			break;
		}
		L = t.return;
	}
}
function dc(e) {
	for (; L !== null; ) {
		var t = L;
		if (t === e) {
			L = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (L = n);
			break;
		}
		L = t.return;
	}
}
function pc(e) {
	for (; L !== null; ) {
		var t = L;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Ro(4, t);
					} catch (a) {
						Z(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							Z(t, i, a);
						}
					}
					var o = t.return;
					try {
						kl(t);
					} catch (a) {
						Z(t, o, a);
					}
					break;
				case 5:
					var s = t.return;
					try {
						kl(t);
					} catch (a) {
						Z(t, s, a);
					}
			}
		} catch (a) {
			Z(t, t.return, a);
		}
		if (t === e) {
			L = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (L = l);
			break;
		}
		L = t.return;
	}
}
var hg = Math.ceil,
	uo = wt.ReactCurrentDispatcher,
	Da = wt.ReactCurrentOwner,
	$e = wt.ReactCurrentBatchConfig,
	F = 0,
	le = null,
	ne = null,
	ue = 0,
	Me = 0,
	_n = Kt(0),
	ie = 0,
	Qr = null,
	dn = 0,
	_o = 0,
	Na = 0,
	Pr = null,
	ke = null,
	Aa = 0,
	Zn = 1 / 0,
	at = null,
	co = !1,
	Tl = null,
	Ot = null,
	Ci = !1,
	Mt = null,
	fo = 0,
	Cr = 0,
	El = null,
	Ii = -1,
	Bi = 0;
function ve() {
	return F & 6 ? ee() : Ii !== -1 ? Ii : (Ii = ee());
}
function zt(e) {
	return e.mode & 1
		? F & 2 && ue !== 0
			? ue & -ue
			: J0.transition !== null
			? (Bi === 0 && (Bi = ld()), Bi)
			: ((e = j), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hd(e.type))), e)
		: 1;
}
function Ze(e, t, n, r) {
	if (50 < Cr) throw ((Cr = 0), (El = null), Error(S(185)));
	ei(e, n, r),
		(!(F & 2) || e !== le) &&
			(e === le && (!(F & 2) && (_o |= n), ie === 4 && Lt(e, ue)),
			Ee(e, r),
			n === 1 && F === 0 && !(t.mode & 1) && ((Zn = ee() + 500), Do && Qt()));
}
function Ee(e, t) {
	var n = e.callbackNode;
	Jm(e, t);
	var r = Yi(e, e === le ? ue : 0);
	if (r === 0) n !== null && ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ku(n), t === 1))
			e.tag === 0 ? Z0(hc.bind(null, e)) : Rd(hc.bind(null, e)),
				K0(function () {
					!(F & 6) && Qt();
				}),
				(n = null);
		else {
			switch (ad(r)) {
				case 1:
					n = ia;
					break;
				case 4:
					n = od;
					break;
				case 16:
					n = Qi;
					break;
				case 536870912:
					n = sd;
					break;
				default:
					n = Qi;
			}
			n = Ap(n, Tp.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Tp(e, t) {
	if (((Ii = -1), (Bi = 0), F & 6)) throw Error(S(327));
	var n = e.callbackNode;
	if (Hn() && e.callbackNode !== n) return null;
	var r = Yi(e, e === le ? ue : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = po(e, r);
	else {
		t = r;
		var i = F;
		F |= 2;
		var o = Lp();
		(le !== e || ue !== t) && ((at = null), (Zn = ee() + 500), ln(e, t));
		do
			try {
				yg();
				break;
			} catch (l) {
				Ep(e, l);
			}
		while (1);
		ya(), (uo.current = o), (F = i), ne !== null ? (t = 0) : ((le = null), (ue = 0), (t = ie));
	}
	if (t !== 0) {
		if ((t === 2 && ((i = bs(e)), i !== 0 && ((r = i), (t = Ll(e, i)))), t === 1))
			throw ((n = Qr), ln(e, 0), Lt(e, r), Ee(e, ee()), n);
		if (t === 6) Lt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!mg(i) &&
					((t = po(e, r)),
					t === 2 && ((o = bs(e)), o !== 0 && ((r = o), (t = Ll(e, o)))),
					t === 1))
			)
				throw ((n = Qr), ln(e, 0), Lt(e, r), Ee(e, ee()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(S(345));
				case 2:
					bt(e, ke, at);
					break;
				case 3:
					if ((Lt(e, r), (r & 130023424) === r && ((t = Aa + 500 - ee()), 10 < t))) {
						if (Yi(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							ve(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = ll(bt.bind(null, e, ke, at), t);
						break;
					}
					bt(e, ke, at);
					break;
				case 4:
					if ((Lt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Xe(r);
						(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
					}
					if (
						((r = i),
						(r = ee() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * hg(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = ll(bt.bind(null, e, ke, at), r);
						break;
					}
					bt(e, ke, at);
					break;
				case 5:
					bt(e, ke, at);
					break;
				default:
					throw Error(S(329));
			}
		}
	}
	return Ee(e, ee()), e.callbackNode === n ? Tp.bind(null, e) : null;
}
function Ll(e, t) {
	var n = Pr;
	return (
		e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
		(e = po(e, t)),
		e !== 2 && ((t = ke), (ke = n), t !== null && Vl(t)),
		e
	);
}
function Vl(e) {
	ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function mg(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Je(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Lt(e, t) {
	for (
		t &= ~Na, t &= ~_o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Xe(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function hc(e) {
	if (F & 6) throw Error(S(327));
	Hn();
	var t = Yi(e, 0);
	if (!(t & 1)) return Ee(e, ee()), null;
	var n = po(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = bs(e);
		r !== 0 && ((t = r), (n = Ll(e, r)));
	}
	if (n === 1) throw ((n = Qr), ln(e, 0), Lt(e, t), Ee(e, ee()), n);
	if (n === 6) throw Error(S(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		bt(e, ke, at),
		Ee(e, ee()),
		null
	);
}
function Ra(e, t) {
	var n = F;
	F |= 1;
	try {
		return e(t);
	} finally {
		(F = n), F === 0 && ((Zn = ee() + 500), Do && Qt());
	}
}
function pn(e) {
	Mt !== null && Mt.tag === 0 && !(F & 6) && Hn();
	var t = F;
	F |= 1;
	var n = $e.transition,
		r = j;
	try {
		if ((($e.transition = null), (j = 1), e)) return e();
	} finally {
		(j = r), ($e.transition = n), (F = t), !(F & 6) && Qt();
	}
}
function _a() {
	(Me = _n.current), U(_n);
}
function ln(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), G0(n)), ne !== null))
		for (n = ne.return; n !== null; ) {
			var r = n;
			switch ((ha(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && bi();
					break;
				case 3:
					Yn(), U(Ce), U(me), Pa();
					break;
				case 5:
					ka(r);
					break;
				case 4:
					Yn();
					break;
				case 13:
					U(G);
					break;
				case 19:
					U(G);
					break;
				case 10:
					va(r.type._context);
					break;
				case 22:
				case 23:
					_a();
			}
			n = n.return;
		}
	if (
		((le = e),
		(ne = e = Ft(e.current, null)),
		(ue = Me = t),
		(ie = 0),
		(Qr = null),
		(Na = _o = dn = 0),
		(ke = Pr = null),
		rn !== null)
	) {
		for (t = 0; t < rn.length; t++)
			if (((n = rn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		rn = null;
	}
	return e;
}
function Ep(e, t) {
	do {
		var n = ne;
		try {
			if ((ya(), (zi.current = ao), lo)) {
				for (var r = Y.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				lo = !1;
			}
			if (
				((fn = 0),
				(oe = re = Y = null),
				(Sr = !1),
				(Wr = 0),
				(Da.current = null),
				n === null || n.return === null)
			) {
				(ie = 1), (Qr = t), (ne = null);
				break;
			}
			e: {
				var o = e,
					s = n.return,
					l = n,
					a = t;
				if (
					((t = ue),
					(l.flags |= 32768),
					a !== null && typeof a == "object" && typeof a.then == "function")
				) {
					var u = a,
						c = l,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var d = c.alternate;
						d
							? ((c.updateQueue = d.updateQueue),
							  (c.memoizedState = d.memoizedState),
							  (c.lanes = d.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var m = tc(s);
					if (m !== null) {
						(m.flags &= -257),
							nc(m, s, l, o, t),
							m.mode & 1 && ec(o, u, t),
							(t = m),
							(a = u);
						var y = t.updateQueue;
						if (y === null) {
							var v = new Set();
							v.add(a), (t.updateQueue = v);
						} else y.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							ec(o, u, t), Oa();
							break e;
						}
						a = Error(S(426));
					}
				} else if (H && l.mode & 1) {
					var P = tc(s);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256), nc(P, s, l, o, t), ma(Xn(a, l));
						break e;
					}
				}
				(o = a = Xn(a, l)),
					ie !== 4 && (ie = 2),
					Pr === null ? (Pr = [o]) : Pr.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var g = up(o, a, t);
							Qu(o, g);
							break e;
						case 1:
							l = a;
							var p = o.type,
								h = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof p.getDerivedStateFromError == "function" ||
									(h !== null &&
										typeof h.componentDidCatch == "function" &&
										(Ot === null || !Ot.has(h))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var w = cp(o, l, t);
								Qu(o, w);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			Mp(n);
		} catch (x) {
			(t = x), ne === n && n !== null && (ne = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function Lp() {
	var e = uo.current;
	return (uo.current = ao), e === null ? ao : e;
}
function Oa() {
	(ie === 0 || ie === 3 || ie === 2) && (ie = 4),
		le === null || (!(dn & 268435455) && !(_o & 268435455)) || Lt(le, ue);
}
function po(e, t) {
	var n = F;
	F |= 2;
	var r = Lp();
	(le !== e || ue !== t) && ((at = null), ln(e, t));
	do
		try {
			gg();
			break;
		} catch (i) {
			Ep(e, i);
		}
	while (1);
	if ((ya(), (F = n), (uo.current = r), ne !== null)) throw Error(S(261));
	return (le = null), (ue = 0), ie;
}
function gg() {
	for (; ne !== null; ) Vp(ne);
}
function yg() {
	for (; ne !== null && !$m(); ) Vp(ne);
}
function Vp(e) {
	var t = Np(e.alternate, e, Me);
	(e.memoizedProps = e.pendingProps), t === null ? Mp(e) : (ne = t), (Da.current = null);
}
function Mp(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = cg(n, t)), n !== null)) {
				(n.flags &= 32767), (ne = n);
				return;
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ie = 6), (ne = null);
				return;
			}
		} else if (((n = ug(n, t, Me)), n !== null)) {
			ne = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			ne = t;
			return;
		}
		ne = t = e;
	} while (t !== null);
	ie === 0 && (ie = 5);
}
function bt(e, t, n) {
	var r = j,
		i = $e.transition;
	try {
		($e.transition = null), (j = 1), vg(e, t, n, r);
	} finally {
		($e.transition = i), (j = r);
	}
	return null;
}
function vg(e, t, n, r) {
	do Hn();
	while (Mt !== null);
	if (F & 6) throw Error(S(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(S(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(qm(e, o),
		e === le && ((ne = le = null), (ue = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Ci ||
			((Ci = !0),
			Ap(Qi, function () {
				return Hn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = $e.transition), ($e.transition = null);
		var s = j;
		j = 1;
		var l = F;
		(F |= 4),
			(Da.current = null),
			dg(e, n),
			Pp(n, e),
			j0(ol),
			(Xi = !!il),
			(ol = il = null),
			(e.current = n),
			pg(n),
			Hm(),
			(F = l),
			(j = s),
			($e.transition = o);
	} else e.current = n;
	if (
		(Ci && ((Ci = !1), (Mt = e), (fo = i)),
		(o = e.pendingLanes),
		o === 0 && (Ot = null),
		Km(n.stateNode),
		Ee(e, ee()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (co) throw ((co = !1), (e = Tl), (Tl = null), e);
	return (
		fo & 1 && e.tag !== 0 && Hn(),
		(o = e.pendingLanes),
		o & 1 ? (e === El ? Cr++ : ((Cr = 0), (El = e))) : (Cr = 0),
		Qt(),
		null
	);
}
function Hn() {
	if (Mt !== null) {
		var e = ad(fo),
			t = $e.transition,
			n = j;
		try {
			if ((($e.transition = null), (j = 16 > e ? 16 : e), Mt === null)) var r = !1;
			else {
				if (((e = Mt), (Mt = null), (fo = 0), F & 6)) throw Error(S(331));
				var i = F;
				for (F |= 4, L = e.current; L !== null; ) {
					var o = L,
						s = o.child;
					if (L.flags & 16) {
						var l = o.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a];
								for (L = u; L !== null; ) {
									var c = L;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											kr(8, c, o);
									}
									var f = c.child;
									if (f !== null) (f.return = c), (L = f);
									else
										for (; L !== null; ) {
											c = L;
											var d = c.sibling,
												m = c.return;
											if ((xp(c), c === u)) {
												L = null;
												break;
											}
											if (d !== null) {
												(d.return = m), (L = d);
												break;
											}
											L = m;
										}
								}
							}
							var y = o.alternate;
							if (y !== null) {
								var v = y.child;
								if (v !== null) {
									y.child = null;
									do {
										var P = v.sibling;
										(v.sibling = null), (v = P);
									} while (v !== null);
								}
							}
							L = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
					else
						e: for (; L !== null; ) {
							if (((o = L), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										kr(9, o, o.return);
								}
							var g = o.sibling;
							if (g !== null) {
								(g.return = o.return), (L = g);
								break e;
							}
							L = o.return;
						}
				}
				var p = e.current;
				for (L = p; L !== null; ) {
					s = L;
					var h = s.child;
					if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (L = h);
					else
						e: for (s = p; L !== null; ) {
							if (((l = L), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											Ro(9, l);
									}
								} catch (x) {
									Z(l, l.return, x);
								}
							if (l === s) {
								L = null;
								break e;
							}
							var w = l.sibling;
							if (w !== null) {
								(w.return = l.return), (L = w);
								break e;
							}
							L = l.return;
						}
				}
				if (((F = i), Qt(), it && typeof it.onPostCommitFiberRoot == "function"))
					try {
						it.onPostCommitFiberRoot(To, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(j = n), ($e.transition = t);
		}
	}
	return !1;
}
function mc(e, t, n) {
	(t = Xn(n, t)),
		(t = up(e, t, 1)),
		(e = _t(e, t, 1)),
		(t = ve()),
		e !== null && (ei(e, 1, t), Ee(e, t));
}
function Z(e, t, n) {
	if (e.tag === 3) mc(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				mc(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r)))
				) {
					(e = Xn(n, e)),
						(e = cp(t, e, 1)),
						(t = _t(t, e, 1)),
						(e = ve()),
						t !== null && (ei(t, 1, e), Ee(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function wg(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = ve()),
		(e.pingedLanes |= e.suspendedLanes & n),
		le === e &&
			(ue & n) === n &&
			(ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > ee() - Aa)
				? ln(e, 0)
				: (Na |= n)),
		Ee(e, t);
}
function Dp(e, t) {
	t === 0 && (e.mode & 1 ? ((t = hi), (hi <<= 1), !(hi & 130023424) && (hi = 4194304)) : (t = 1));
	var n = ve();
	(e = yt(e, t)), e !== null && (ei(e, t, n), Ee(e, n));
}
function xg(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Dp(e, n);
}
function Sg(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(S(314));
	}
	r !== null && r.delete(t), Dp(e, n);
}
var Np;
Np = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ce.current) Pe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), ag(e, t, n);
			Pe = !!(e.flags & 131072);
		}
	else (Pe = !1), H && t.flags & 1048576 && _d(t, no, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			ji(e, t), (e = t.pendingProps);
			var i = Gn(t, me.current);
			$n(t, n), (i = Ta(null, t, r, e, i, n));
			var o = Ea();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Te(r) ? ((o = !0), eo(t)) : (o = !1),
					  (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
					  xa(t),
					  (i.updater = No),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  hl(t, r, e, n),
					  (t = yl(null, t, r, !0, o, n)))
					: ((t.tag = 0), H && o && pa(t), ye(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(ji(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Pg(r)),
					(e = Ke(r, e)),
					i)
				) {
					case 0:
						t = gl(null, t, r, e, n);
						break e;
					case 1:
						t = oc(null, t, r, e, n);
						break e;
					case 11:
						t = rc(null, t, r, e, n);
						break e;
					case 14:
						t = ic(null, t, r, Ke(r.type, e), n);
						break e;
				}
				throw Error(S(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				gl(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				oc(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((hp(t), e === null)) throw Error(S(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					jd(e, t),
					oo(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = Xn(Error(S(423)), t)), (t = sc(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Xn(Error(S(424)), t)), (t = sc(e, t, r, n, i));
						break e;
					} else
						for (
							De = Rt(t.stateNode.containerInfo.firstChild),
								Ne = t,
								H = !0,
								Ye = null,
								n = $d(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Kn(), r === i)) {
						t = vt(e, t, n);
						break e;
					}
					ye(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Hd(t),
				e === null && fl(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				sl(r, i) ? (s = null) : o !== null && sl(r, o) && (t.flags |= 32),
				pp(e, t),
				ye(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && fl(t), null;
		case 13:
			return mp(e, t, n);
		case 4:
			return (
				Sa(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Qn(t, null, r, n)) : ye(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				rc(e, t, r, i, n)
			);
		case 7:
			return ye(e, t, t.pendingProps, n), t.child;
		case 8:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					I(ro, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (Je(o.value, s)) {
						if (o.children === i.children && !Ce.current) {
							t = vt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var l = o.dependencies;
							if (l !== null) {
								s = o.child;
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											(a = pt(-1, n & -n)), (a.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (a.next = a)
													: ((a.next = c.next), (c.next = a)),
													(u.pending = a);
											}
										}
										(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											dl(o.return, n, t),
											(l.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null)) throw Error(S(341));
								(s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									dl(s, n, t),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				ye(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				$n(t, n),
				(i = He(i)),
				(r = r(i)),
				(t.flags |= 1),
				ye(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type), (i = Ke(r, t.pendingProps)), (i = Ke(r.type, i)), ic(e, t, r, i, n)
			);
		case 15:
			return fp(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				ji(e, t),
				(t.tag = 1),
				Te(r) ? ((e = !0), eo(t)) : (e = !1),
				$n(t, n),
				Bd(t, r, i),
				hl(t, r, i, n),
				yl(null, t, r, !0, e, n)
			);
		case 19:
			return gp(e, t, n);
		case 22:
			return dp(e, t, n);
	}
	throw Error(S(156, t.tag));
};
function Ap(e, t) {
	return id(e, t);
}
function kg(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Ue(e, t, n, r) {
	return new kg(e, t, n, r);
}
function za(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pg(e) {
	if (typeof e == "function") return za(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === ta)) return 11;
		if (e === na) return 14;
	}
	return 2;
}
function Ft(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Ue(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Ui(e, t, n, r, i, o) {
	var s = 2;
	if (((r = e), typeof e == "function")) za(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else
		e: switch (e) {
			case Cn:
				return an(n.children, i, o, t);
			case ea:
				(s = 8), (i |= 8);
				break;
			case js:
				return (e = Ue(12, n, t, i | 2)), (e.elementType = js), (e.lanes = o), e;
			case Is:
				return (e = Ue(13, n, t, i)), (e.elementType = Is), (e.lanes = o), e;
			case Bs:
				return (e = Ue(19, n, t, i)), (e.elementType = Bs), (e.lanes = o), e;
			case Uf:
				return Oo(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case If:
							s = 10;
							break e;
						case Bf:
							s = 9;
							break e;
						case ta:
							s = 11;
							break e;
						case na:
							s = 14;
							break e;
						case Pt:
							(s = 16), (r = null);
							break e;
					}
				throw Error(S(130, e == null ? e : typeof e, ""));
		}
	return (t = Ue(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function an(e, t, n, r) {
	return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Oo(e, t, n, r) {
	return (
		(e = Ue(22, e, r, t)),
		(e.elementType = Uf),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function vs(e, t, n) {
	return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function ws(e, t, n) {
	return (
		(t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Cg(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = bo(0)),
		(this.expirationTimes = bo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = bo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function Fa(e, t, n, r, i, o, s, l, a) {
	return (
		(e = new Cg(e, t, n, l, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Ue(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		xa(o),
		e
	);
}
function Tg(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Pn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Rp(e) {
	if (!e) return $t;
	e = e._reactInternals;
	e: {
		if (yn(e) !== e || e.tag !== 1) throw Error(S(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Te(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(S(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Te(n)) return Ad(e, n, t);
	}
	return t;
}
function _p(e, t, n, r, i, o, s, l, a) {
	return (
		(e = Fa(n, r, !0, e, i, o, s, l, a)),
		(e.context = Rp(null)),
		(n = e.current),
		(r = ve()),
		(i = zt(n)),
		(o = pt(r, i)),
		(o.callback = t ?? null),
		_t(n, o, i),
		(e.current.lanes = i),
		ei(e, i, r),
		Ee(e, r),
		e
	);
}
function zo(e, t, n, r) {
	var i = t.current,
		o = ve(),
		s = zt(i);
	return (
		(n = Rp(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = pt(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = _t(i, t, s)),
		e !== null && (Ze(e, i, s, o), Oi(e, i, s)),
		s
	);
}
function ho(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function gc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function ja(e, t) {
	gc(e, t), (e = e.alternate) && gc(e, t);
}
function Eg() {
	return null;
}
var Op =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Ia(e) {
	this._internalRoot = e;
}
Fo.prototype.render = Ia.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(S(409));
	zo(e, t, null, null);
};
Fo.prototype.unmount = Ia.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		pn(function () {
			zo(null, e, null, null);
		}),
			(t[gt] = null);
	}
};
function Fo(e) {
	this._internalRoot = e;
}
Fo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = fd();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
		Et.splice(n, 0, e), n === 0 && pd(e);
	}
};
function Ba(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function yc() {}
function Lg(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var u = ho(s);
				o.call(u);
			};
		}
		var s = _p(t, r, e, 0, null, !1, !1, "", yc);
		return (
			(e._reactRootContainer = s),
			(e[gt] = s.current),
			Ir(e.nodeType === 8 ? e.parentNode : e),
			pn(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var l = r;
		r = function () {
			var u = ho(a);
			l.call(u);
		};
	}
	var a = Fa(e, 0, !1, null, null, !1, !1, "", yc);
	return (
		(e._reactRootContainer = a),
		(e[gt] = a.current),
		Ir(e.nodeType === 8 ? e.parentNode : e),
		pn(function () {
			zo(t, a, n, r);
		}),
		a
	);
}
function Io(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == "function") {
			var l = i;
			i = function () {
				var a = ho(s);
				l.call(a);
			};
		}
		zo(t, s, e, i);
	} else s = Lg(n, t, e, i, r);
	return ho(s);
}
ud = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = pr(t.pendingLanes);
				n !== 0 && (oa(t, n | 1), Ee(t, ee()), !(F & 6) && ((Zn = ee() + 500), Qt()));
			}
			break;
		case 13:
			pn(function () {
				var r = yt(e, 1);
				if (r !== null) {
					var i = ve();
					Ze(r, e, 1, i);
				}
			}),
				ja(e, 1);
	}
};
sa = function (e) {
	if (e.tag === 13) {
		var t = yt(e, 134217728);
		if (t !== null) {
			var n = ve();
			Ze(t, e, 134217728, n);
		}
		ja(e, 134217728);
	}
};
cd = function (e) {
	if (e.tag === 13) {
		var t = zt(e),
			n = yt(e, t);
		if (n !== null) {
			var r = ve();
			Ze(n, e, t, r);
		}
		ja(e, t);
	}
};
fd = function () {
	return j;
};
dd = function (e, t) {
	var n = j;
	try {
		return (j = e), t();
	} finally {
		j = n;
	}
};
Zs = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Hs(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = Mo(r);
						if (!i) throw Error(S(90));
						Hf(r), Hs(r, i);
					}
				}
			}
			break;
		case "textarea":
			Gf(e, n);
			break;
		case "select":
			(t = n.value), t != null && jn(e, !!n.multiple, t, !1);
	}
};
qf = Ra;
bf = pn;
var Vg = { usingClientEntryPoint: !1, Events: [ni, Vn, Mo, Zf, Jf, Ra] },
	ar = {
		findFiberByHostInstance: nn,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	Mg = {
		bundleType: ar.bundleType,
		version: ar.version,
		rendererPackageName: ar.rendererPackageName,
		rendererConfig: ar.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: wt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = nd(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: ar.findFiberByHostInstance || Eg,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ti.isDisabled && Ti.supportsFiber)
		try {
			(To = Ti.inject(Mg)), (it = Ti);
		} catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vg;
_e.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Ba(t)) throw Error(S(200));
	return Tg(e, t, null, n);
};
_e.createRoot = function (e, t) {
	if (!Ba(e)) throw Error(S(299));
	var n = !1,
		r = "",
		i = Op;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Fa(e, 1, !1, null, null, n, !1, r, i)),
		(e[gt] = t.current),
		Ir(e.nodeType === 8 ? e.parentNode : e),
		new Ia(t)
	);
};
_e.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(S(188))
			: ((e = Object.keys(e).join(",")), Error(S(268, e)));
	return (e = nd(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
	return pn(e);
};
_e.hydrate = function (e, t, n) {
	if (!jo(t)) throw Error(S(200));
	return Io(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
	if (!Ba(e)) throw Error(S(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		s = Op;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = _p(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[gt] = t.current),
		Ir(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new Fo(t);
};
_e.render = function (e, t, n) {
	if (!jo(t)) throw Error(S(200));
	return Io(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
	if (!jo(e)) throw Error(S(40));
	return e._reactRootContainer
		? (pn(function () {
				Io(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[gt] = null);
				});
		  }),
		  !0)
		: !1;
};
_e.unstable_batchedUpdates = Ra;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!jo(n)) throw Error(S(200));
	if (e == null || e._reactInternals === void 0) throw Error(S(38));
	return Io(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
	function t() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
			} catch (n) {
				console.error(n);
			}
	}
	t(), (e.exports = _e);
})(Em);
var vc = Os;
(_s.createRoot = vc.createRoot), (_s.hydrateRoot = vc.hydrateRoot);
const zp = M.createContext(null),
	Dg = ({ children: e }) => {
		const [t, n] = M.useState("intro"),
			[r, i] = M.useState(localStorage.getItem("dark-mode")),
			[o, s] = M.useState(!1);
		return (
			M.useEffect(() => {
				!r &&
					window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: dark)").matches &&
					i("true");
			}, []),
			M.useEffect(() => {
				r === "true"
					? (document.documentElement.classList.add("dark"),
					  localStorage.setItem("dark-mode", "true"))
					: (document.documentElement.classList.remove("dark"),
					  localStorage.setItem("dark-mode", "false"));
			}, [r]),
			V(zp.Provider, {
				value: {
					currentLocation: t,
					setCurrentLocation: n,
					darkMode: r,
					setDarkMode: i,
					isMenuOpen: o,
					setIsMenuOpen: s,
				},
				children: e,
			})
		);
	};
function Ng() {
	return M.useContext(zp);
}
function Ag(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	e && e.addEventListener && e.addEventListener.apply(e, t);
}
function Rg(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	e && e.removeEventListener && e.removeEventListener.apply(e, t);
}
var _g = { angle: 0, type: "landscape-primary" },
	Og = function (e) {
		e === void 0 && (e = _g);
		var t = M.useState(e),
			n = t[0],
			r = t[1];
		return (
			M.useEffect(function () {
				var i = window.screen,
					o = !0,
					s = function () {
						if (o) {
							var l = i.orientation;
							if (l) {
								var a = l.angle,
									u = l.type;
								r({ angle: a, type: u });
							} else
								window.orientation !== void 0
									? r({
											angle:
												typeof window.orientation == "number"
													? window.orientation
													: 0,
											type: "",
									  })
									: r(e);
						}
					};
				return (
					Ag(window, "orientationchange", s),
					s(),
					function () {
						(o = !1), Rg(window, "orientationchange", s);
					}
				);
			}, []),
			n
		);
	};
const zg = Og;
const Fp = M.createContext({ transformPagePoint: e => e, isStatic: !1, reducedMotion: "never" }),
	Bo = M.createContext({}),
	Ua = M.createContext(null),
	Uo = typeof document < "u",
	wc = Uo ? M.useLayoutEffect : M.useEffect,
	jp = M.createContext({ strict: !1 });
function Fg(e, t, n, r) {
	const { visualElement: i } = M.useContext(Bo),
		o = M.useContext(jp),
		s = M.useContext(Ua),
		l = M.useContext(Fp).reducedMotion,
		a = M.useRef();
	(r = r || o.renderer),
		!a.current &&
			r &&
			(a.current = r(e, {
				visualState: t,
				parent: i,
				props: n,
				presenceContext: s,
				blockInitialAnimation: s ? s.initial === !1 : !1,
				reducedMotionConfig: l,
			}));
	const u = a.current;
	return (
		M.useInsertionEffect(() => {
			u && u.update(n, s);
		}),
		wc(() => {
			u && u.render();
		}),
		M.useEffect(() => {
			u && u.updateFeatures();
		}),
		(window.HandoffAppearAnimations ? wc : M.useEffect)(() => {
			u && u.animationState && u.animationState.animateChanges();
		}),
		u
	);
}
function On(e) {
	return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function jg(e, t, n) {
	return M.useCallback(
		r => {
			r && e.mount && e.mount(r),
				t && (r ? t.mount(r) : t.unmount()),
				n && (typeof n == "function" ? n(r) : On(n) && (n.current = r));
		},
		[t]
	);
}
function Yr(e) {
	return typeof e == "string" || Array.isArray(e);
}
function $o(e) {
	return typeof e == "object" && typeof e.start == "function";
}
const $a = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
	Ha = ["initial", ...$a];
function Ho(e) {
	return $o(e.animate) || Ha.some(t => Yr(e[t]));
}
function Ip(e) {
	return !!(Ho(e) || e.variants);
}
function Ig(e, t) {
	if (Ho(e)) {
		const { initial: n, animate: r } = e;
		return { initial: n === !1 || Yr(n) ? n : void 0, animate: Yr(r) ? r : void 0 };
	}
	return e.inherit !== !1 ? t : {};
}
function Bg(e) {
	const { initial: t, animate: n } = Ig(e, M.useContext(Bo));
	return M.useMemo(() => ({ initial: t, animate: n }), [xc(t), xc(n)]);
}
function xc(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
const Sc = {
		animation: [
			"animate",
			"variants",
			"whileHover",
			"whileTap",
			"exit",
			"whileInView",
			"whileFocus",
			"whileDrag",
		],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"],
	},
	Xr = {};
for (const e in Sc) Xr[e] = { isEnabled: t => Sc[e].some(n => !!t[n]) };
function Ug(e) {
	for (const t in e) Xr[t] = { ...Xr[t], ...e[t] };
}
function Bp(e) {
	const t = M.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const Tr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let $g = 1;
function Hg() {
	return Bp(() => {
		if (Tr.hasEverUpdated) return $g++;
	});
}
const Up = M.createContext({}),
	$p = M.createContext({}),
	Wg = Symbol.for("motionComponentSymbol");
function Gg({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: i,
}) {
	e && Ug(e);
	function o(l, a) {
		let u;
		const c = { ...M.useContext(Fp), ...l, layoutId: Kg(l) },
			{ isStatic: f } = c,
			d = Bg(l),
			m = f ? void 0 : Hg(),
			y = r(l, f);
		if (!f && Uo) {
			d.visualElement = Fg(i, y, c, t);
			const v = M.useContext($p),
				P = M.useContext(jp).strict;
			d.visualElement && (u = d.visualElement.loadFeatures(c, P, e, m, v));
		}
		return M.createElement(
			Bo.Provider,
			{ value: d },
			u && d.visualElement
				? M.createElement(u, { visualElement: d.visualElement, ...c })
				: null,
			n(i, l, m, jg(y, d.visualElement, a), y, f, d.visualElement)
		);
	}
	const s = M.forwardRef(o);
	return (s[Wg] = i), s;
}
function Kg({ layoutId: e }) {
	const t = M.useContext(Up).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function Qg(e) {
	function t(r, i = {}) {
		return Gg(e(r, i));
	}
	if (typeof Proxy > "u") return t;
	const n = new Map();
	return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) });
}
const Yg = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view",
];
function Wa(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Yg.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const mo = {};
function Xg(e) {
	Object.assign(mo, e);
}
const Wo = [
		"transformPerspective",
		"x",
		"y",
		"z",
		"translateX",
		"translateY",
		"translateZ",
		"scale",
		"scaleX",
		"scaleY",
		"rotate",
		"rotateX",
		"rotateY",
		"rotateZ",
		"skew",
		"skewX",
		"skewY",
	],
	vn = new Set(Wo);
function Hp(e, { layout: t, layoutId: n }) {
	return (
		vn.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!mo[e] || e === "opacity"))
	);
}
const Le = e => !!(e && e.getVelocity),
	Zg = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
	Jg = Wo.length;
function qg(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
	let o = "";
	for (let s = 0; s < Jg; s++) {
		const l = Wo[s];
		if (e[l] !== void 0) {
			const a = Zg[l] || l;
			o += `${a}(${e[l]}) `;
		}
	}
	return (
		t && !e.z && (o += "translateZ(0)"),
		(o = o.trim()),
		i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
		o
	);
}
const Wp = e => t => typeof t == "string" && t.startsWith(e),
	Gp = Wp("--"),
	Ml = Wp("var(--"),
	bg = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
	hn = (e, t, n) => Math.min(Math.max(n, e), t),
	wn = { test: e => typeof e == "number", parse: parseFloat, transform: e => e },
	Er = { ...wn, transform: e => hn(0, 1, e) },
	Ei = { ...wn, default: 1 },
	Lr = e => Math.round(e * 1e5) / 1e5,
	Zr = /(-)?([\d]*\.?[\d])+/g,
	Dl =
		/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	ey =
		/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ii(e) {
	return typeof e == "string";
}
const oi = e => ({
		test: t => ii(t) && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: t => `${t}${e}`,
	}),
	kt = oi("deg"),
	st = oi("%"),
	D = oi("px"),
	ty = oi("vh"),
	ny = oi("vw"),
	kc = { ...st, parse: e => st.parse(e) / 100, transform: e => st.transform(e * 100) },
	Pc = { ...wn, transform: Math.round },
	Kp = {
		borderWidth: D,
		borderTopWidth: D,
		borderRightWidth: D,
		borderBottomWidth: D,
		borderLeftWidth: D,
		borderRadius: D,
		radius: D,
		borderTopLeftRadius: D,
		borderTopRightRadius: D,
		borderBottomRightRadius: D,
		borderBottomLeftRadius: D,
		width: D,
		maxWidth: D,
		height: D,
		maxHeight: D,
		size: D,
		top: D,
		right: D,
		bottom: D,
		left: D,
		padding: D,
		paddingTop: D,
		paddingRight: D,
		paddingBottom: D,
		paddingLeft: D,
		margin: D,
		marginTop: D,
		marginRight: D,
		marginBottom: D,
		marginLeft: D,
		rotate: kt,
		rotateX: kt,
		rotateY: kt,
		rotateZ: kt,
		scale: Ei,
		scaleX: Ei,
		scaleY: Ei,
		scaleZ: Ei,
		skew: kt,
		skewX: kt,
		skewY: kt,
		distance: D,
		translateX: D,
		translateY: D,
		translateZ: D,
		x: D,
		y: D,
		z: D,
		perspective: D,
		transformPerspective: D,
		opacity: Er,
		originX: kc,
		originY: kc,
		originZ: D,
		zIndex: Pc,
		fillOpacity: Er,
		strokeOpacity: Er,
		numOctaves: Pc,
	};
function Ga(e, t, n, r) {
	const { style: i, vars: o, transform: s, transformOrigin: l } = e;
	let a = !1,
		u = !1,
		c = !0;
	for (const f in t) {
		const d = t[f];
		if (Gp(f)) {
			o[f] = d;
			continue;
		}
		const m = Kp[f],
			y = bg(d, m);
		if (vn.has(f)) {
			if (((a = !0), (s[f] = y), !c)) continue;
			d !== (m.default || 0) && (c = !1);
		} else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
	}
	if (
		(t.transform ||
			(a || r
				? (i.transform = qg(e.transform, n, c, r))
				: i.transform && (i.transform = "none")),
		u)
	) {
		const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
		i.transformOrigin = `${f} ${d} ${m}`;
	}
}
const Ka = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Qp(e, t, n) {
	for (const r in t) !Le(t[r]) && !Hp(r, n) && (e[r] = t[r]);
}
function ry({ transformTemplate: e }, t, n) {
	return M.useMemo(() => {
		const r = Ka();
		return Ga(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
	}, [t]);
}
function iy(e, t, n) {
	const r = e.style || {},
		i = {};
	return Qp(i, r, e), Object.assign(i, ry(e, t, n)), e.transformValues ? e.transformValues(i) : i;
}
function oy(e, t, n) {
	const r = {},
		i = iy(e, t, n);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((r.draggable = !1),
			(i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
			(i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
		e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
		(r.style = i),
		r
	);
}
const sy = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"transformValues",
	"custom",
	"inherit",
	"onLayoutAnimationStart",
	"onLayoutAnimationComplete",
	"onLayoutMeasure",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"ignoreStrict",
	"viewport",
]);
function go(e) {
	return (
		e.startsWith("while") ||
		(e.startsWith("drag") && e !== "draggable") ||
		e.startsWith("layout") ||
		e.startsWith("onTap") ||
		e.startsWith("onPan") ||
		sy.has(e)
	);
}
let Yp = e => !go(e);
function ly(e) {
	e && (Yp = t => (t.startsWith("on") ? !go(t) : e(t)));
}
try {
	ly(require("@emotion/is-prop-valid").default);
} catch {}
function ay(e, t, n) {
	const r = {};
	for (const i in e)
		(i === "values" && typeof e.values == "object") ||
			((Yp(i) ||
				(n === !0 && go(i)) ||
				(!t && !go(i)) ||
				(e.draggable && i.startsWith("onDrag"))) &&
				(r[i] = e[i]));
	return r;
}
function Cc(e, t, n) {
	return typeof e == "string" ? e : D.transform(t + n * e);
}
function uy(e, t, n) {
	const r = Cc(t, e.x, e.width),
		i = Cc(n, e.y, e.height);
	return `${r} ${i}`;
}
const cy = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
	fy = { offset: "strokeDashoffset", array: "strokeDasharray" };
function dy(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const o = i ? cy : fy;
	e[o.offset] = D.transform(-r);
	const s = D.transform(t),
		l = D.transform(n);
	e[o.array] = `${s} ${l}`;
}
function Qa(
	e,
	{
		attrX: t,
		attrY: n,
		originX: r,
		originY: i,
		pathLength: o,
		pathSpacing: s = 1,
		pathOffset: l = 0,
		...a
	},
	u,
	c,
	f
) {
	if ((Ga(e, a, u, f), c)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: d, style: m, dimensions: y } = e;
	d.transform && (y && (m.transform = d.transform), delete d.transform),
		y &&
			(r !== void 0 || i !== void 0 || m.transform) &&
			(m.transformOrigin = uy(y, r !== void 0 ? r : 0.5, i !== void 0 ? i : 0.5)),
		t !== void 0 && (d.x = t),
		n !== void 0 && (d.y = n),
		o !== void 0 && dy(d, o, s, l, !1);
}
const Xp = () => ({ ...Ka(), attrs: {} }),
	Ya = e => typeof e == "string" && e.toLowerCase() === "svg";
function py(e, t, n, r) {
	const i = M.useMemo(() => {
		const o = Xp();
		return (
			Qa(o, t, { enableHardwareAcceleration: !1 }, Ya(r), e.transformTemplate),
			{ ...o.attrs, style: { ...o.style } }
		);
	}, [t]);
	if (e.style) {
		const o = {};
		Qp(o, e.style, e), (i.style = { ...o, ...i.style });
	}
	return i;
}
function hy(e = !1) {
	return (n, r, i, o, { latestValues: s }, l) => {
		const u = (Wa(n) ? py : oy)(r, s, l, n),
			f = { ...ay(r, typeof n == "string", e), ...u, ref: o },
			{ children: d } = r,
			m = M.useMemo(() => (Le(d) ? d.get() : d), [d]);
		return i && (f["data-projection-id"] = i), M.createElement(n, { ...f, children: m });
	};
}
const Xa = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Zp(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (const o in n) e.style.setProperty(o, n[o]);
}
const Jp = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust",
]);
function qp(e, t, n, r) {
	Zp(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(Jp.has(i) ? i : Xa(i), t.attrs[i]);
}
function Za(e, t) {
	const { style: n } = e,
		r = {};
	for (const i in n) (Le(n[i]) || (t.style && Le(t.style[i])) || Hp(i, e)) && (r[i] = n[i]);
	return r;
}
function bp(e, t) {
	const n = Za(e, t);
	for (const r in e)
		if (Le(e[r]) || Le(t[r])) {
			const i = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
			n[i] = e[r];
		}
	return n;
}
function Ja(e, t, n, r = {}, i = {}) {
	return (
		typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
		typeof t == "string" && (t = e.variants && e.variants[t]),
		typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
		t
	);
}
const yo = e => Array.isArray(e),
	my = e => !!(e && typeof e == "object" && e.mix && e.toValue),
	gy = e => (yo(e) ? e[e.length - 1] || 0 : e);
function $i(e) {
	const t = Le(e) ? e.get() : e;
	return my(t) ? t.toValue() : t;
}
function yy({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
	const s = { latestValues: vy(r, i, o, e), renderState: t() };
	return n && (s.mount = l => n(r, l, s)), s;
}
const eh = e => (t, n) => {
	const r = M.useContext(Bo),
		i = M.useContext(Ua),
		o = () => yy(e, t, r, i);
	return n ? o() : Bp(o);
};
function vy(e, t, n, r) {
	const i = {},
		o = r(e, {});
	for (const d in o) i[d] = $i(o[d]);
	let { initial: s, animate: l } = e;
	const a = Ho(e),
		u = Ip(e);
	t &&
		u &&
		!a &&
		e.inherit !== !1 &&
		(s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || s === !1;
	const f = c ? l : s;
	return (
		f &&
			typeof f != "boolean" &&
			!$o(f) &&
			(Array.isArray(f) ? f : [f]).forEach(m => {
				const y = Ja(e, m);
				if (!y) return;
				const { transitionEnd: v, transition: P, ...g } = y;
				for (const p in g) {
					let h = g[p];
					if (Array.isArray(h)) {
						const w = c ? h.length - 1 : 0;
						h = h[w];
					}
					h !== null && (i[p] = h);
				}
				for (const p in v) i[p] = v[p];
			}),
		i
	);
}
const wy = {
		useVisualState: eh({
			scrapeMotionValuesFromProps: bp,
			createRenderState: Xp,
			onMount: (e, t, { renderState: n, latestValues: r }) => {
				try {
					n.dimensions =
						typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
				} catch {
					n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
				}
				Qa(n, r, { enableHardwareAcceleration: !1 }, Ya(t.tagName), e.transformTemplate),
					qp(t, n);
			},
		}),
	},
	xy = { useVisualState: eh({ scrapeMotionValuesFromProps: Za, createRenderState: Ka }) };
function Sy(e, { forwardMotionProps: t = !1 }, n, r) {
	return {
		...(Wa(e) ? wy : xy),
		preloadedFeatures: n,
		useRender: hy(t),
		createVisualElement: r,
		Component: e,
	};
}
function dt(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const th = e =>
	e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Go(e, t = "page") {
	return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const ky = e => t => th(t) && e(t, Go(t));
function ht(e, t, n, r) {
	return dt(e, t, ky(n), r);
}
const Py = (e, t) => n => t(e(n)),
	jt = (...e) => e.reduce(Py);
function nh(e) {
	let t = null;
	return () => {
		const n = () => {
			t = null;
		};
		return t === null ? ((t = e), n) : !1;
	};
}
const Tc = nh("dragHorizontal"),
	Ec = nh("dragVertical");
function rh(e) {
	let t = !1;
	if (e === "y") t = Ec();
	else if (e === "x") t = Tc();
	else {
		const n = Tc(),
			r = Ec();
		n && r
			? (t = () => {
					n(), r();
			  })
			: (n && n(), r && r());
	}
	return t;
}
function ih() {
	const e = rh(!0);
	return e ? (e(), !1) : !0;
}
class Yt {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
function Cy(e) {
	let t = [],
		n = [],
		r = 0,
		i = !1,
		o = !1;
	const s = new WeakSet(),
		l = {
			schedule: (a, u = !1, c = !1) => {
				const f = c && i,
					d = f ? t : n;
				return (
					u && s.add(a), d.indexOf(a) === -1 && (d.push(a), f && i && (r = t.length)), a
				);
			},
			cancel: a => {
				const u = n.indexOf(a);
				u !== -1 && n.splice(u, 1), s.delete(a);
			},
			process: a => {
				if (i) {
					o = !0;
					return;
				}
				if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
					for (let u = 0; u < r; u++) {
						const c = t[u];
						c(a), s.has(c) && (l.schedule(c), e());
					}
				(i = !1), o && ((o = !1), l.process(a));
			},
		};
	return l;
}
const he = { delta: 0, timestamp: 0, isProcessing: !1 },
	Ty = 40;
let Nl = !0,
	Jr = !1;
const si = ["read", "update", "preRender", "render", "postRender"],
	Ko = si.reduce((e, t) => ((e[t] = Cy(() => (Jr = !0))), e), {}),
	Q = si.reduce((e, t) => {
		const n = Ko[t];
		return (e[t] = (r, i = !1, o = !1) => (Jr || Ly(), n.schedule(r, i, o))), e;
	}, {}),
	Ht = si.reduce((e, t) => ((e[t] = Ko[t].cancel), e), {}),
	xs = si.reduce((e, t) => ((e[t] = () => Ko[t].process(he)), e), {}),
	Ey = e => Ko[e].process(he),
	oh = e => {
		(Jr = !1),
			(he.delta = Nl ? 1e3 / 60 : Math.max(Math.min(e - he.timestamp, Ty), 1)),
			(he.timestamp = e),
			(he.isProcessing = !0),
			si.forEach(Ey),
			(he.isProcessing = !1),
			Jr && ((Nl = !1), requestAnimationFrame(oh));
	},
	Ly = () => {
		(Jr = !0), (Nl = !0), he.isProcessing || requestAnimationFrame(oh);
	};
function Lc(e, t) {
	const n = "pointer" + (t ? "enter" : "leave"),
		r = "onHover" + (t ? "Start" : "End"),
		i = (o, s) => {
			if (o.type === "touch" || ih()) return;
			const l = e.getProps();
			e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
				l[r] && Q.update(() => l[r](o, s));
		};
	return ht(e.current, n, i, { passive: !e.getProps()[r] });
}
class Vy extends Yt {
	mount() {
		this.unmount = jt(Lc(this.node, !0), Lc(this.node, !1));
	}
	unmount() {}
}
class My extends Yt {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible");
		} catch {
			t = !0;
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
	}
	mount() {
		this.unmount = jt(
			dt(this.node.current, "focus", () => this.onFocus()),
			dt(this.node.current, "blur", () => this.onBlur())
		);
	}
	unmount() {}
}
const sh = (e, t) => (t ? (e === t ? !0 : sh(e, t.parentElement)) : !1),
	se = e => e;
function Ss(e, t) {
	if (!t) return;
	const n = new PointerEvent("pointer" + e);
	t(n, Go(n));
}
class Dy extends Yt {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = se),
			(this.removeEndListeners = se),
			(this.removeAccessibleListeners = se),
			(this.startPointerPress = (t, n) => {
				if ((this.removeEndListeners(), this.isPressing)) return;
				const r = this.node.getProps(),
					o = ht(
						window,
						"pointerup",
						(l, a) => {
							if (!this.checkPressEnd()) return;
							const { onTap: u, onTapCancel: c } = this.node.getProps();
							Q.update(() => {
								sh(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
							});
						},
						{ passive: !(r.onTap || r.onPointerUp) }
					),
					s = ht(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
						passive: !(r.onTapCancel || r.onPointerCancel),
					});
				(this.removeEndListeners = jt(o, s)), this.startPress(t, n);
			}),
			(this.startAccessiblePress = () => {
				const t = o => {
						if (o.key !== "Enter" || this.isPressing) return;
						const s = l => {
							l.key !== "Enter" ||
								!this.checkPressEnd() ||
								Ss("up", (a, u) => {
									const { onTap: c } = this.node.getProps();
									c && Q.update(() => c(a, u));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = dt(this.node.current, "keyup", s)),
							Ss("down", (l, a) => {
								this.startPress(l, a);
							});
					},
					n = dt(this.node.current, "keydown", t),
					r = () => {
						this.isPressing && Ss("cancel", (o, s) => this.cancelPress(o, s));
					},
					i = dt(this.node.current, "blur", r);
				this.removeAccessibleListeners = jt(n, i);
			});
	}
	startPress(t, n) {
		this.isPressing = !0;
		const { onTapStart: r, whileTap: i } = this.node.getProps();
		i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
			r && Q.update(() => r(t, n));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive("whileTap", !1),
			!ih()
		);
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: r } = this.node.getProps();
		r && Q.update(() => r(t, n));
	}
	mount() {
		const t = this.node.getProps(),
			n = ht(this.node.current, "pointerdown", this.startPointerPress, {
				passive: !(t.onTapStart || t.onPointerStart),
			}),
			r = dt(this.node.current, "focus", this.startAccessiblePress);
		this.removeStartListeners = jt(n, r);
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
	}
}
const Al = new WeakMap(),
	ks = new WeakMap(),
	Ny = e => {
		const t = Al.get(e.target);
		t && t(e);
	},
	Ay = e => {
		e.forEach(Ny);
	};
function Ry({ root: e, ...t }) {
	const n = e || document;
	ks.has(n) || ks.set(n, {});
	const r = ks.get(n),
		i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(Ay, { root: e, ...t })), r[i];
}
function _y(e, t, n) {
	const r = Ry(t);
	return (
		Al.set(e, n),
		r.observe(e),
		() => {
			Al.delete(e), r.unobserve(e);
		}
	);
}
const Oy = { some: 0, all: 1 };
class zy extends Yt {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: i = "some", once: o } = t,
			s = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof i == "number" ? i : Oy[i],
			},
			l = a => {
				const { isIntersecting: u } = a;
				if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView))
					return;
				u && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive("whileInView", u);
				const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
					d = u ? c : f;
				d && d(a);
			};
		return _y(this.node.current, s, l);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const { props: t, prevProps: n } = this.node;
		["amount", "margin", "root"].some(Fy(t, n)) && this.startObserver();
	}
	unmount() {}
}
function Fy({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return n => e[n] !== t[n];
}
const jy = {
	inView: { Feature: zy },
	tap: { Feature: Dy },
	focus: { Feature: My },
	hover: { Feature: Vy },
};
function lh(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
function Iy(e) {
	const t = {};
	return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function By(e) {
	const t = {};
	return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Qo(e, t, n) {
	const r = e.getProps();
	return Ja(r, t, n !== void 0 ? n : r.custom, Iy(e), By(e));
}
const Uy = "framerAppearId",
	$y = "data-" + Xa(Uy);
let Hy = se,
	qa = se;
const It = e => e * 1e3,
	mn = e => e / 1e3,
	Wy = { current: !1 },
	ah = e => Array.isArray(e) && typeof e[0] == "number";
function uh(e) {
	return !!(!e || (typeof e == "string" && ch[e]) || ah(e) || (Array.isArray(e) && e.every(uh)));
}
const mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	ch = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: mr([0, 0.65, 0.55, 1]),
		circOut: mr([0.55, 0, 1, 0.45]),
		backIn: mr([0.31, 0.01, 0.66, -0.59]),
		backOut: mr([0.33, 1.53, 0.69, 0.99]),
	};
function fh(e) {
	if (e) return ah(e) ? mr(e) : Array.isArray(e) ? e.map(fh) : ch[e];
}
function Gy(
	e,
	t,
	n,
	{ delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: l, times: a } = {}
) {
	const u = { [t]: n };
	a && (u.offset = a);
	const c = fh(l);
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: r,
			duration: i,
			easing: Array.isArray(c) ? "linear" : c,
			fill: "both",
			iterations: o + 1,
			direction: s === "reverse" ? "alternate" : "normal",
		})
	);
}
const Vc = { waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate") },
	Ps = {},
	dh = {};
for (const e in Vc) dh[e] = () => (Ps[e] === void 0 && (Ps[e] = Vc[e]()), Ps[e]);
function Ky(e, { repeat: t, repeatType: n = "loop" }) {
	const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
	return e[r];
}
const ph = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	Qy = 1e-7,
	Yy = 12;
function Xy(e, t, n, r, i) {
	let o,
		s,
		l = 0;
	do (s = t + (n - t) / 2), (o = ph(s, r, i) - e), o > 0 ? (n = s) : (t = s);
	while (Math.abs(o) > Qy && ++l < Yy);
	return s;
}
function li(e, t, n, r) {
	if (e === t && n === r) return se;
	const i = o => Xy(o, 0, 1, e, n);
	return o => (o === 0 || o === 1 ? o : ph(i(o), t, r));
}
const Zy = li(0.42, 0, 1, 1),
	Jy = li(0, 0, 0.58, 1),
	hh = li(0.42, 0, 0.58, 1),
	qy = e => Array.isArray(e) && typeof e[0] != "number",
	mh = e => t => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	gh = e => t => 1 - e(1 - t),
	yh = e => 1 - Math.sin(Math.acos(e)),
	ba = gh(yh),
	by = mh(ba),
	vh = li(0.33, 1.53, 0.69, 0.99),
	eu = gh(vh),
	ev = mh(eu),
	tv = e => ((e *= 2) < 1 ? 0.5 * eu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
	nv = {
		linear: se,
		easeIn: Zy,
		easeInOut: hh,
		easeOut: Jy,
		circIn: yh,
		circInOut: by,
		circOut: ba,
		backIn: eu,
		backInOut: ev,
		backOut: vh,
		anticipate: tv,
	},
	Mc = e => {
		if (Array.isArray(e)) {
			qa(e.length === 4);
			const [t, n, r, i] = e;
			return li(t, n, r, i);
		} else if (typeof e == "string") return nv[e];
		return e;
	},
	tu = (e, t) => n =>
		!!(
			(ii(n) && ey.test(n) && n.startsWith(e)) ||
			(t && Object.prototype.hasOwnProperty.call(n, t))
		),
	wh = (e, t, n) => r => {
		if (!ii(r)) return r;
		const [i, o, s, l] = r.match(Zr);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(o),
			[n]: parseFloat(s),
			alpha: l !== void 0 ? parseFloat(l) : 1,
		};
	},
	rv = e => hn(0, 255, e),
	Cs = { ...wn, transform: e => Math.round(rv(e)) },
	sn = {
		test: tu("rgb", "red"),
		parse: wh("red", "green", "blue"),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			"rgba(" +
			Cs.transform(e) +
			", " +
			Cs.transform(t) +
			", " +
			Cs.transform(n) +
			", " +
			Lr(Er.transform(r)) +
			")",
	};
function iv(e) {
	let t = "",
		n = "",
		r = "",
		i = "";
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (n = e.substring(3, 5)),
			  (r = e.substring(5, 7)),
			  (i = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (i = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (i += i)),
		{
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1,
		}
	);
}
const Rl = { test: tu("#"), parse: iv, transform: sn.transform },
	zn = {
		test: tu("hsl", "hue"),
		parse: wh("hue", "saturation", "lightness"),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			"hsla(" +
			Math.round(e) +
			", " +
			st.transform(Lr(t)) +
			", " +
			st.transform(Lr(n)) +
			", " +
			Lr(Er.transform(r)) +
			")",
	},
	ge = {
		test: e => sn.test(e) || Rl.test(e) || zn.test(e),
		parse: e => (sn.test(e) ? sn.parse(e) : zn.test(e) ? zn.parse(e) : Rl.parse(e)),
		transform: e => (ii(e) ? e : e.hasOwnProperty("red") ? sn.transform(e) : zn.transform(e)),
	},
	K = (e, t, n) => -n * e + n * t + e;
function Ts(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6
			? e + (t - e) * 6 * n
			: n < 1 / 2
			? t
			: n < 2 / 3
			? e + (t - e) * (2 / 3 - n) * 6
			: e
	);
}
function ov({ hue: e, saturation: t, lightness: n, alpha: r }) {
	(e /= 360), (t /= 100), (n /= 100);
	let i = 0,
		o = 0,
		s = 0;
	if (!t) i = o = s = n;
	else {
		const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
			a = 2 * n - l;
		(i = Ts(a, l, e + 1 / 3)), (o = Ts(a, l, e)), (s = Ts(a, l, e - 1 / 3));
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(o * 255),
		blue: Math.round(s * 255),
		alpha: r,
	};
}
const Es = (e, t, n) => {
		const r = e * e;
		return Math.sqrt(Math.max(0, n * (t * t - r) + r));
	},
	sv = [Rl, sn, zn],
	lv = e => sv.find(t => t.test(e));
function Dc(e) {
	const t = lv(e);
	let n = t.parse(e);
	return t === zn && (n = ov(n)), n;
}
const xh = (e, t) => {
		const n = Dc(e),
			r = Dc(t),
			i = { ...n };
		return o => (
			(i.red = Es(n.red, r.red, o)),
			(i.green = Es(n.green, r.green, o)),
			(i.blue = Es(n.blue, r.blue, o)),
			(i.alpha = K(n.alpha, r.alpha, o)),
			sn.transform(i)
		);
	},
	Sh = "${c}",
	kh = "${n}";
function av(e) {
	var t, n;
	return (
		isNaN(e) &&
		ii(e) &&
		(((t = e.match(Zr)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((n = e.match(Dl)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	);
}
function vo(e) {
	typeof e == "number" && (e = `${e}`);
	const t = [];
	let n = 0,
		r = 0;
	const i = e.match(Dl);
	i && ((n = i.length), (e = e.replace(Dl, Sh)), t.push(...i.map(ge.parse)));
	const o = e.match(Zr);
	return (
		o && ((r = o.length), (e = e.replace(Zr, kh)), t.push(...o.map(wn.parse))),
		{ values: t, numColors: n, numNumbers: r, tokenised: e }
	);
}
function Ph(e) {
	return vo(e).values;
}
function Ch(e) {
	const { values: t, numColors: n, tokenised: r } = vo(e),
		i = t.length;
	return o => {
		let s = r;
		for (let l = 0; l < i; l++)
			s = s.replace(l < n ? Sh : kh, l < n ? ge.transform(o[l]) : Lr(o[l]));
		return s;
	};
}
const uv = e => (typeof e == "number" ? 0 : e);
function cv(e) {
	const t = Ph(e);
	return Ch(e)(t.map(uv));
}
const Wt = { test: av, parse: Ph, createTransformer: Ch, getAnimatableNone: cv };
function Th(e, t) {
	return typeof e == "number" ? n => K(e, t, n) : ge.test(e) ? xh(e, t) : Lh(e, t);
}
const Eh = (e, t) => {
		const n = [...e],
			r = n.length,
			i = e.map((o, s) => Th(o, t[s]));
		return o => {
			for (let s = 0; s < r; s++) n[s] = i[s](o);
			return n;
		};
	},
	fv = (e, t) => {
		const n = { ...e, ...t },
			r = {};
		for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Th(e[i], t[i]));
		return i => {
			for (const o in r) n[o] = r[o](i);
			return n;
		};
	},
	Lh = (e, t) => {
		const n = Wt.createTransformer(t),
			r = vo(e),
			i = vo(t);
		return r.numColors === i.numColors && r.numNumbers >= i.numNumbers
			? jt(Eh(r.values, i.values), n)
			: s => `${s > 0 ? t : e}`;
	},
	qr = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r;
	},
	Nc = (e, t) => n => K(e, t, n);
function dv(e) {
	return typeof e == "number"
		? Nc
		: typeof e == "string"
		? ge.test(e)
			? xh
			: Lh
		: Array.isArray(e)
		? Eh
		: typeof e == "object"
		? fv
		: Nc;
}
function pv(e, t, n) {
	const r = [],
		i = n || dv(e[0]),
		o = e.length - 1;
	for (let s = 0; s < o; s++) {
		let l = i(e[s], e[s + 1]);
		if (t) {
			const a = Array.isArray(t) ? t[s] || se : t;
			l = jt(a, l);
		}
		r.push(l);
	}
	return r;
}
function Vh(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	const o = e.length;
	if ((qa(o === t.length), o === 1)) return () => t[0];
	e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const s = pv(t, r, i),
		l = s.length,
		a = u => {
			let c = 0;
			if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const f = qr(e[c], e[c + 1], u);
			return s[c](f);
		};
	return n ? u => a(hn(e[0], e[o - 1], u)) : a;
}
function hv(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = qr(0, t, r);
		e.push(K(n, 1, i));
	}
}
function mv(e) {
	const t = [0];
	return hv(t, e.length - 1), t;
}
function gv(e, t) {
	return e.map(n => n * t);
}
function yv(e, t) {
	return e.map(() => t || hh).splice(0, e.length - 1);
}
function wo({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	const i = qy(r) ? r.map(Mc) : Mc(r),
		o = { done: !1, value: t[0] },
		s = gv(n && n.length === t.length ? n : mv(t), e),
		l = Vh(s, t, { ease: Array.isArray(i) ? i : yv(t, i) });
	return { calculatedDuration: e, next: a => ((o.value = l(a)), (o.done = a >= e), o) };
}
function Mh(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const vv = 5;
function Dh(e, t, n) {
	const r = Math.max(t - vv, 0);
	return Mh(n - e(r), t - r);
}
const Ls = 0.001,
	wv = 0.01,
	Ac = 10,
	xv = 0.05,
	Sv = 1;
function kv({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
	let i, o;
	Hy(e <= It(Ac));
	let s = 1 - t;
	(s = hn(xv, Sv, s)),
		(e = hn(wv, Ac, mn(e))),
		s < 1
			? ((i = u => {
					const c = u * s,
						f = c * e,
						d = c - n,
						m = _l(u, s),
						y = Math.exp(-f);
					return Ls - (d / m) * y;
			  }),
			  (o = u => {
					const f = u * s * e,
						d = f * n + n,
						m = Math.pow(s, 2) * Math.pow(u, 2) * e,
						y = Math.exp(-f),
						v = _l(Math.pow(u, 2), s);
					return ((-i(u) + Ls > 0 ? -1 : 1) * ((d - m) * y)) / v;
			  }))
			: ((i = u => {
					const c = Math.exp(-u * e),
						f = (u - n) * e + 1;
					return -Ls + c * f;
			  }),
			  (o = u => {
					const c = Math.exp(-u * e),
						f = (n - u) * (e * e);
					return c * f;
			  }));
	const l = 5 / e,
		a = Cv(i, o, l);
	if (((e = It(e)), isNaN(a))) return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(a, 2) * r;
		return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
	}
}
const Pv = 12;
function Cv(e, t, n) {
	let r = n;
	for (let i = 1; i < Pv; i++) r = r - e(r) / t(r);
	return r;
}
function _l(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const Tv = ["duration", "bounce"],
	Ev = ["stiffness", "damping", "mass"];
function Rc(e, t) {
	return t.some(n => e[n] !== void 0);
}
function Lv(e) {
	let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
	if (!Rc(e, Ev) && Rc(e, Tv)) {
		const n = kv(e);
		(t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
function Nh({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	const i = e[0],
		o = e[e.length - 1],
		s = { done: !1, value: i },
		{
			stiffness: l,
			damping: a,
			mass: u,
			velocity: c,
			duration: f,
			isResolvedFromDuration: d,
		} = Lv(r),
		m = c ? -mn(c) : 0,
		y = a / (2 * Math.sqrt(l * u)),
		v = o - i,
		P = mn(Math.sqrt(l / u)),
		g = Math.abs(v) < 5;
	n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
	let p;
	if (y < 1) {
		const h = _l(P, y);
		p = w => {
			const x = Math.exp(-y * P * w);
			return o - x * (((m + y * P * v) / h) * Math.sin(h * w) + v * Math.cos(h * w));
		};
	} else if (y === 1) p = h => o - Math.exp(-P * h) * (v + (m + P * v) * h);
	else {
		const h = P * Math.sqrt(y * y - 1);
		p = w => {
			const x = Math.exp(-y * P * w),
				T = Math.min(h * w, 300);
			return o - (x * ((m + y * P * v) * Math.sinh(T) + h * v * Math.cosh(T))) / h;
		};
	}
	return {
		calculatedDuration: (d && f) || null,
		next: h => {
			const w = p(h);
			if (d) s.done = h >= f;
			else {
				let x = m;
				h !== 0 && (y < 1 ? (x = Dh(p, h, w)) : (x = 0));
				const T = Math.abs(x) <= n,
					C = Math.abs(o - w) <= t;
				s.done = T && C;
			}
			return (s.value = s.done ? o : w), s;
		},
	};
}
function _c({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: o = 500,
	modifyTarget: s,
	min: l,
	max: a,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const f = e[0],
		d = { done: !1, value: f },
		m = k => (l !== void 0 && k < l) || (a !== void 0 && k > a),
		y = k => (l === void 0 ? a : a === void 0 || Math.abs(l - k) < Math.abs(a - k) ? l : a);
	let v = n * t;
	const P = f + v,
		g = s === void 0 ? P : s(P);
	g !== P && (v = g - f);
	const p = k => -v * Math.exp(-k / r),
		h = k => g + p(k),
		w = k => {
			const O = p(k),
				N = h(k);
			(d.done = Math.abs(O) <= u), (d.value = d.done ? g : N);
		};
	let x, T;
	const C = k => {
		m(d.value) &&
			((x = k),
			(T = Nh({
				keyframes: [d.value, y(d.value)],
				velocity: Dh(h, k, d.value),
				damping: i,
				stiffness: o,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		C(0),
		{
			calculatedDuration: null,
			next: k => {
				let O = !1;
				return (
					!T && x === void 0 && ((O = !0), w(k), C(k)),
					x !== void 0 && k > x ? T.next(k - x) : (!O && w(k), d)
				);
			},
		}
	);
}
const Vv = e => {
		const t = ({ timestamp: n }) => e(n);
		return {
			start: () => Q.update(t, !0),
			stop: () => Ht.update(t),
			now: () => (he.isProcessing ? he.timestamp : performance.now()),
		};
	},
	Mv = { decay: _c, inertia: _c, tween: wo, keyframes: wo, spring: Nh },
	Dv = 2e4;
function Nv(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < Dv; ) (t += n), (r = e.next(t));
	return t;
}
function xo({
	autoplay: e = !0,
	delay: t = 0,
	driver: n = Vv,
	keyframes: r,
	type: i = "keyframes",
	repeat: o = 0,
	repeatDelay: s = 0,
	repeatType: l = "loop",
	onPlay: a,
	onStop: u,
	onComplete: c,
	onUpdate: f,
	...d
}) {
	let m = 1,
		y = !1,
		v,
		P;
	const g = () => {
		v && v(),
			(P = new Promise(_ => {
				v = _;
			}));
	};
	g();
	let p;
	const h = Mv[i] || wo;
	let w;
	h !== wo && typeof r[0] != "number" && ((w = Vh([0, 100], r, { clamp: !1 })), (r = [0, 100]));
	const x = h({ ...d, keyframes: r });
	let T;
	l === "mirror" && (T = h({ ...d, keyframes: [...r].reverse(), velocity: -(d.velocity || 0) }));
	let C = "idle",
		k = null,
		O = null,
		N = null;
	x.calculatedDuration === null && o && (x.calculatedDuration = Nv(x));
	const { calculatedDuration: J } = x;
	let Se = 1 / 0,
		ze = 1 / 0;
	J !== null && ((Se = J + s), (ze = Se * (o + 1) - s));
	let q = 0;
	const b = _ => {
			if (O === null) return;
			k !== null ? (q = k) : (q = (_ - O) * m),
				(q = Math.max(q - t, 0)),
				C === "finished" && k === null && (q = ze);
			let W = q,
				Xt = x;
			if (o) {
				const xt = q / Se;
				let ai = Math.floor(xt),
					Zt = xt % 1;
				!Zt && xt >= 1 && (Zt = 1), Zt === 1 && ai--, (ai = Math.min(ai, o + 1));
				const au = !!(ai % 2);
				au &&
					(l === "reverse"
						? ((Zt = 1 - Zt), s && (Zt -= s / Se))
						: l === "mirror" && (Xt = T));
				let uu = hn(0, 1, Zt);
				q > ze && (uu = l === "reverse" && au ? 1 : 0), (W = uu * Se);
			}
			const Ve = Xt.next(W);
			w && (Ve.value = w(Ve.value));
			let { done: Sn } = Ve;
			J !== null && (Sn = q >= ze);
			const lt =
				k === null && (C === "finished" || (C === "running" && Sn) || (m < 0 && q <= 0));
			return f && f(Ve.value), lt && E(), Ve;
		},
		Fe = () => {
			p && p.stop(), (p = void 0);
		},
		qe = () => {
			(C = "idle"), Fe(), g(), (O = N = null);
		},
		E = () => {
			(C = "finished"), c && c(), Fe(), g();
		},
		A = () => {
			if (y) return;
			p || (p = n(b));
			const _ = p.now();
			a && a(),
				(C = "running"),
				k !== null ? (O = _ - k) : O || (O = _),
				(N = O),
				(k = null),
				p.start();
		};
	e && A();
	const R = {
		then(_, W) {
			return P.then(_, W);
		},
		get time() {
			return mn(q);
		},
		set time(_) {
			(_ = It(_)), (q = _), k !== null || !p || m === 0 ? (k = _) : (O = p.now() - _ / m);
		},
		get speed() {
			return m;
		},
		set speed(_) {
			_ === m || !p || ((m = _), (R.time = mn(q)));
		},
		get state() {
			return C;
		},
		play: A,
		pause: () => {
			(C = "paused"), (k = q);
		},
		stop: () => {
			(y = !0), C !== "idle" && ((C = "idle"), u && u(), qe());
		},
		cancel: () => {
			N !== null && b(N), qe();
		},
		complete: () => {
			C = "finished";
		},
		sample: _ => ((O = 0), b(_)),
	};
	return R;
}
const Av = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
	Li = 10,
	Rv = 2e4,
	_v = (e, t) => t.type === "spring" || e === "backgroundColor" || !uh(t.ease);
function Ov(e, t, { onUpdate: n, onComplete: r, ...i }) {
	if (
		!(
			dh.waapi() &&
			Av.has(t) &&
			!i.repeatDelay &&
			i.repeatType !== "mirror" &&
			i.damping !== 0 &&
			i.type !== "inertia"
		)
	)
		return !1;
	let s = !1,
		l,
		a;
	const u = () => {
		a = new Promise(v => {
			l = v;
		});
	};
	u();
	let { keyframes: c, duration: f = 300, ease: d } = i;
	if (_v(t, i)) {
		const v = xo({ ...i, repeat: 0, delay: 0 });
		let P = { done: !1, value: c[0] };
		const g = [];
		let p = 0;
		for (; !P.done && p < Rv; ) (P = v.sample(p)), g.push(P.value), (p += Li);
		(c = g), (f = p - Li), (d = "linear");
	}
	const m = Gy(e.owner.current, t, c, { ...i, duration: f, ease: d }),
		y = () => {
			Q.update(() => m.cancel()), l(), u();
		};
	return (
		(m.onfinish = () => {
			e.set(Ky(c, i)), r && r(), y();
		}),
		{
			then(v, P) {
				return a.then(v, P);
			},
			get time() {
				return mn(m.currentTime || 0);
			},
			set time(v) {
				m.currentTime = It(v);
			},
			get speed() {
				return m.playbackRate;
			},
			set speed(v) {
				m.playbackRate = v;
			},
			play: () => {
				s || m.play();
			},
			pause: () => m.pause(),
			stop: () => {
				if (((s = !0), m.playState === "idle")) return;
				const { currentTime: v } = m;
				if (v) {
					const P = xo({ ...i, autoplay: !1 });
					e.setWithVelocity(P.sample(v - Li).value, P.sample(v).value, Li);
				}
				y();
			},
			complete: () => m.finish(),
			cancel: y,
		}
	);
}
function zv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
	const i = () => (
		n && n(e[e.length - 1]),
		r && r(),
		{
			time: 0,
			speed: 1,
			play: se,
			pause: se,
			stop: se,
			then: o => (o(), Promise.resolve()),
			cancel: se,
			complete: se,
		}
	);
	return t ? xo({ keyframes: [0, 1], duration: t, onComplete: i }) : i();
}
const Fv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
	jv = e => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	Iv = { type: "keyframes", duration: 0.8 },
	Bv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	Uv = (e, { keyframes: t }) =>
		t.length > 2 ? Iv : vn.has(e) ? (e.startsWith("scale") ? jv(t[1]) : Fv) : Bv,
	Ol = (e, t) =>
		e === "zIndex"
			? !1
			: !!(
					typeof t == "number" ||
					Array.isArray(t) ||
					(typeof t == "string" && Wt.test(t) && !t.startsWith("url("))
			  ),
	$v = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Hv(e) {
	const [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(Zr) || [];
	if (!r) return e;
	const i = n.replace(r, "");
	let o = $v.has(t) ? 1 : 0;
	return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Wv = /([a-z-]*)\(.*?\)/g,
	zl = {
		...Wt,
		getAnimatableNone: e => {
			const t = e.match(Wv);
			return t ? t.map(Hv).join(" ") : e;
		},
	},
	Gv = {
		...Kp,
		color: ge,
		backgroundColor: ge,
		outlineColor: ge,
		fill: ge,
		stroke: ge,
		borderColor: ge,
		borderTopColor: ge,
		borderRightColor: ge,
		borderBottomColor: ge,
		borderLeftColor: ge,
		filter: zl,
		WebkitFilter: zl,
	},
	nu = e => Gv[e];
function ru(e, t) {
	let n = nu(e);
	return n !== zl && (n = Wt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
function Kv({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: o,
	repeatType: s,
	repeatDelay: l,
	from: a,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length;
}
function Oc(e) {
	return e === 0 || (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1);
}
function zc(e) {
	return typeof e == "number" ? 0 : ru("", e);
}
function Ah(e, t) {
	return e[t] || e.default || e;
}
function Qv(e, t, n, r) {
	const i = Ol(t, n);
	let o = r.from !== void 0 ? r.from : e.get();
	if (
		(o === "none" && i && typeof n == "string"
			? (o = ru(t, n))
			: Oc(o) && typeof n == "string"
			? (o = zc(n))
			: !Array.isArray(n) && Oc(n) && typeof o == "string" && (n = zc(o)),
		Array.isArray(n))
	) {
		for (let s = 0; s < n.length; s++) n[s] === null && (n[s] = s === 0 ? o : n[s - 1]);
		return n;
	} else return [o, n];
}
const iu =
	(e, t, n, r = {}) =>
	i => {
		const o = Ah(r, e) || {},
			s = o.delay || r.delay || 0;
		let { elapsed: l = 0 } = r;
		l = l - It(s);
		const a = Qv(t, e, n, o),
			u = a[0],
			c = a[a.length - 1],
			f = Ol(e, u),
			d = Ol(e, c);
		let m = {
			keyframes: a,
			velocity: t.getVelocity(),
			ease: "easeOut",
			...o,
			delay: -l,
			onUpdate: y => {
				t.set(y), o.onUpdate && o.onUpdate(y);
			},
			onComplete: () => {
				i(), o.onComplete && o.onComplete();
			},
		};
		if (!f || !d || Wy.current || o.type === !1) return zv(m);
		if (
			(Kv(o) || (m = { ...m, ...Uv(e, m) }),
			m.duration && (m.duration = It(m.duration)),
			m.repeatDelay && (m.repeatDelay = It(m.repeatDelay)),
			t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate)
		) {
			const y = Ov(t, e, m);
			if (y) return y;
		}
		return xo(m);
	};
function So(e) {
	return !!(Le(e) && e.add);
}
const Yv = e => /^\-?\d*\.?\d+$/.test(e),
	Xv = e => /^0[^.\s]+$/.test(e);
function ou(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function su(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
class lu {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return ou(this.subscriptions, t), () => su(this.subscriptions, t);
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let o = 0; o < i; o++) {
					const s = this.subscriptions[o];
					s && s(t, n, r);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const Zv = e => !isNaN(parseFloat(e));
class Jv {
	constructor(t, n = {}) {
		(this.version = "10.9.1"),
			(this.timeDelta = 0),
			(this.lastUpdated = 0),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (r, i = !0) => {
				(this.prev = this.current), (this.current = r);
				const { delta: o, timestamp: s } = he;
				this.lastUpdated !== s &&
					((this.timeDelta = o),
					(this.lastUpdated = s),
					Q.postRender(this.scheduleVelocityCheck)),
					this.prev !== this.current &&
						this.events.change &&
						this.events.change.notify(this.current),
					this.events.velocityChange &&
						this.events.velocityChange.notify(this.getVelocity()),
					i &&
						this.events.renderRequest &&
						this.events.renderRequest.notify(this.current);
			}),
			(this.scheduleVelocityCheck = () => Q.postRender(this.velocityCheck)),
			(this.velocityCheck = ({ timestamp: r }) => {
				r !== this.lastUpdated &&
					((this.prev = this.current),
					this.events.velocityChange &&
						this.events.velocityChange.notify(this.getVelocity()));
			}),
			(this.hasAnimated = !1),
			(this.prev = this.current = t),
			(this.canTrackVelocity = Zv(this.current)),
			(this.owner = n.owner);
	}
	onChange(t) {
		return this.on("change", t);
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new lu());
		const r = this.events[t].add(n);
		return t === "change"
			? () => {
					r(),
						Q.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: r;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, n) {
		(this.passiveEffect = t), (this.stopPassiveEffect = n);
	}
	set(t, n = !0) {
		!n || !this.passiveEffect
			? this.updateAndNotify(t, n)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, n, r) {
		this.set(n), (this.prev = t), (this.timeDelta = r);
	}
	jump(t) {
		this.updateAndNotify(t),
			(this.prev = t),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		return this.canTrackVelocity
			? Mh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
			: 0;
	}
	start(t) {
		return (
			this.stop(),
			new Promise(n => {
				(this.hasAnimated = !0),
					(this.animation = t(n)),
					this.events.animationStart && this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.animation &&
			(this.animation.stop(),
			this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
}
function Jn(e, t) {
	return new Jv(e, t);
}
const Rh = e => t => t.test(e),
	qv = { test: e => e === "auto", parse: e => e },
	_h = [wn, D, st, kt, ny, ty, qv],
	ur = e => _h.find(Rh(e)),
	bv = [..._h, ge, Wt],
	e1 = e => bv.find(Rh(e));
function t1(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jn(n));
}
function n1(e, t) {
	const n = Qo(e, t);
	let {
		transitionEnd: r = {},
		transition: i = {},
		...o
	} = n ? e.makeTargetAnimatable(n, !1) : {};
	o = { ...o, ...r };
	for (const s in o) {
		const l = gy(o[s]);
		t1(e, s, l);
	}
}
function r1(e, t, n) {
	var r, i;
	const o = Object.keys(t).filter(l => !e.hasValue(l)),
		s = o.length;
	if (s)
		for (let l = 0; l < s; l++) {
			const a = o[l],
				u = t[a];
			let c = null;
			Array.isArray(u) && (c = u[0]),
				c === null &&
					(c =
						(i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null &&
						i !== void 0
							? i
							: t[a]),
				c != null &&
					(typeof c == "string" && (Yv(c) || Xv(c))
						? (c = parseFloat(c))
						: !e1(c) && Wt.test(u) && (c = ru(a, u)),
					e.addValue(a, Jn(c, { owner: e })),
					n[a] === void 0 && (n[a] = c),
					c !== null && e.setBaseTarget(a, c));
		}
}
function i1(e, t) {
	return t ? (t[e] || t.default || t).from : void 0;
}
function o1(e, t, n) {
	const r = {};
	for (const i in e) {
		const o = i1(i, t);
		if (o !== void 0) r[i] = o;
		else {
			const s = n.getValue(i);
			s && (r[i] = s.get());
		}
	}
	return r;
}
function s1({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return (t[n] = !1), r;
}
function Oh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let {
		transition: o = e.getDefaultTransition(),
		transitionEnd: s,
		...l
	} = e.makeTargetAnimatable(t);
	const a = e.getValue("willChange");
	r && (o = r);
	const u = [],
		c = i && e.animationState && e.animationState.getState()[i];
	for (const f in l) {
		const d = e.getValue(f),
			m = l[f];
		if (!d || m === void 0 || (c && s1(c, f))) continue;
		const y = { delay: n, elapsed: 0, ...o };
		if (window.HandoffAppearAnimations && !d.hasAnimated) {
			const P = e.getProps()[$y];
			P && (y.elapsed = window.HandoffAppearAnimations(P, f, d, Q));
		}
		d.start(iu(f, d, m, e.shouldReduceMotion && vn.has(f) ? { type: !1 } : y));
		const v = d.animation;
		So(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
	}
	return (
		s &&
			Promise.all(u).then(() => {
				s && n1(e, s);
			}),
		u
	);
}
function Fl(e, t, n = {}) {
	const r = Qo(e, t, n.custom);
	let { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	const o = r ? () => Promise.all(Oh(e, r, n)) : () => Promise.resolve(),
		s =
			e.variantChildren && e.variantChildren.size
				? (a = 0) => {
						const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
						return l1(e, t, u + a, c, f, n);
				  }
				: () => Promise.resolve(),
		{ when: l } = i;
	if (l) {
		const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
		return a().then(() => u());
	} else return Promise.all([o(), s(n.delay)]);
}
function l1(e, t, n = 0, r = 0, i = 1, o) {
	const s = [],
		l = (e.variantChildren.size - 1) * r,
		a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
	return (
		Array.from(e.variantChildren)
			.sort(a1)
			.forEach((u, c) => {
				u.notify("AnimationStart", t),
					s.push(
						Fl(u, t, { ...o, delay: n + a(c) }).then(() =>
							u.notify("AnimationComplete", t)
						)
					);
			}),
		Promise.all(s)
	);
}
function a1(e, t) {
	return e.sortNodePosition(t);
}
function u1(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map(o => Fl(e, o, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Fl(e, t, n);
	else {
		const i = typeof t == "function" ? Qo(e, t, n.custom) : t;
		r = Promise.all(Oh(e, i, n));
	}
	return r.then(() => e.notify("AnimationComplete", t));
}
const c1 = [...$a].reverse(),
	f1 = $a.length;
function d1(e) {
	return t => Promise.all(t.map(({ animation: n, options: r }) => u1(e, n, r)));
}
function p1(e) {
	let t = d1(e);
	const n = m1();
	let r = !0;
	const i = (a, u) => {
		const c = Qo(e, u);
		if (c) {
			const { transition: f, transitionEnd: d, ...m } = c;
			a = { ...a, ...m, ...d };
		}
		return a;
	};
	function o(a) {
		t = a(e);
	}
	function s(a, u) {
		const c = e.getProps(),
			f = e.getVariantContext(!0) || {},
			d = [],
			m = new Set();
		let y = {},
			v = 1 / 0;
		for (let g = 0; g < f1; g++) {
			const p = c1[g],
				h = n[p],
				w = c[p] !== void 0 ? c[p] : f[p],
				x = Yr(w),
				T = p === u ? h.isActive : null;
			T === !1 && (v = g);
			let C = w === f[p] && w !== c[p] && x;
			if (
				(C && r && e.manuallyAnimateOnMount && (C = !1),
				(h.protectedKeys = { ...y }),
				(!h.isActive && T === null) ||
					(!w && !h.prevProp) ||
					$o(w) ||
					typeof w == "boolean")
			)
				continue;
			const k = h1(h.prevProp, w);
			let O = k || (p === u && h.isActive && !C && x) || (g > v && x);
			const N = Array.isArray(w) ? w : [w];
			let J = N.reduce(i, {});
			T === !1 && (J = {});
			const { prevResolvedValues: Se = {} } = h,
				ze = { ...Se, ...J },
				q = b => {
					(O = !0), m.delete(b), (h.needsAnimating[b] = !0);
				};
			for (const b in ze) {
				const Fe = J[b],
					qe = Se[b];
				y.hasOwnProperty(b) ||
					(Fe !== qe
						? yo(Fe) && yo(qe)
							? !lh(Fe, qe) || k
								? q(b)
								: (h.protectedKeys[b] = !0)
							: Fe !== void 0
							? q(b)
							: m.add(b)
						: Fe !== void 0 && m.has(b)
						? q(b)
						: (h.protectedKeys[b] = !0));
			}
			(h.prevProp = w),
				(h.prevResolvedValues = J),
				h.isActive && (y = { ...y, ...J }),
				r && e.blockInitialAnimation && (O = !1),
				O && !C && d.push(...N.map(b => ({ animation: b, options: { type: p, ...a } })));
		}
		if (m.size) {
			const g = {};
			m.forEach(p => {
				const h = e.getBaseTarget(p);
				h !== void 0 && (g[p] = h);
			}),
				d.push({ animation: g });
		}
		let P = !!d.length;
		return (
			r && c.initial === !1 && !e.manuallyAnimateOnMount && (P = !1),
			(r = !1),
			P ? t(d) : Promise.resolve()
		);
	}
	function l(a, u, c) {
		var f;
		if (n[a].isActive === u) return Promise.resolve();
		(f = e.variantChildren) === null ||
			f === void 0 ||
			f.forEach(m => {
				var y;
				return (y = m.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u);
			}),
			(n[a].isActive = u);
		const d = s(c, a);
		for (const m in n) n[m].protectedKeys = {};
		return d;
	}
	return { animateChanges: s, setActive: l, setAnimateFunction: o, getState: () => n };
}
function h1(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !lh(t, e) : !1;
}
function Jt(e = !1) {
	return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function m1() {
	return {
		animate: Jt(!0),
		whileInView: Jt(),
		whileHover: Jt(),
		whileTap: Jt(),
		whileDrag: Jt(),
		whileFocus: Jt(),
		exit: Jt(),
	};
}
class g1 extends Yt {
	constructor(t) {
		super(t), t.animationState || (t.animationState = p1(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		this.unmount(), $o(t) && (this.unmount = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription();
	}
	unmount() {}
}
let y1 = 0;
class v1 extends Yt {
	constructor() {
		super(...arguments), (this.id = y1++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext,
			{ isPresent: i } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === i) return;
		const o = this.node.animationState.setActive("exit", !t, {
			custom: r ?? this.node.getProps().custom,
		});
		n && !t && o.then(() => n(this.id));
	}
	mount() {
		const { register: t } = this.node.presenceContext || {};
		t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const w1 = { animation: { Feature: g1 }, exit: { Feature: v1 } },
	Fc = (e, t) => Math.abs(e - t);
function x1(e, t) {
	const n = Fc(e.x, t.x),
		r = Fc(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
class zh {
	constructor(t, n, { transformPagePoint: r } = {}) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const u = Ms(this.lastMoveEventInfo, this.history),
					c = this.startEvent !== null,
					f = x1(u.offset, { x: 0, y: 0 }) >= 3;
				if (!c && !f) return;
				const { point: d } = u,
					{ timestamp: m } = he;
				this.history.push({ ...d, timestamp: m });
				const { onStart: y, onMove: v } = this.handlers;
				c || (y && y(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
					v && v(this.lastMoveEvent, u);
			}),
			(this.handlePointerMove = (u, c) => {
				(this.lastMoveEvent = u),
					(this.lastMoveEventInfo = Vs(c, this.transformPagePoint)),
					Q.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (u, c) => {
				if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
				const { onEnd: f, onSessionEnd: d } = this.handlers,
					m = Ms(
						u.type === "pointercancel"
							? this.lastMoveEventInfo
							: Vs(c, this.transformPagePoint),
						this.history
					);
				this.startEvent && f && f(u, m), d && d(u, m);
			}),
			!th(t))
		)
			return;
		(this.handlers = n), (this.transformPagePoint = r);
		const i = Go(t),
			o = Vs(i, this.transformPagePoint),
			{ point: s } = o,
			{ timestamp: l } = he;
		this.history = [{ ...s, timestamp: l }];
		const { onSessionStart: a } = n;
		a && a(t, Ms(o, this.history)),
			(this.removeListeners = jt(
				ht(window, "pointermove", this.handlePointerMove),
				ht(window, "pointerup", this.handlePointerUp),
				ht(window, "pointercancel", this.handlePointerUp)
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), Ht.update(this.updatePoint);
	}
}
function Vs(e, t) {
	return t ? { point: t(e.point) } : e;
}
function jc(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function Ms({ point: e }, t) {
	return { point: e, delta: jc(e, Fh(t)), offset: jc(e, S1(t)), velocity: k1(t, 0.1) };
}
function S1(e) {
	return e[0];
}
function Fh(e) {
	return e[e.length - 1];
}
function k1(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let n = e.length - 1,
		r = null;
	const i = Fh(e);
	for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > It(t))); ) n--;
	if (!r) return { x: 0, y: 0 };
	const o = mn(i.timestamp - r.timestamp);
	if (o === 0) return { x: 0, y: 0 };
	const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
	return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Re(e) {
	return e.max - e.min;
}
function jl(e, t = 0, n = 0.01) {
	return Math.abs(e - t) <= n;
}
function Ic(e, t, n, r = 0.5) {
	(e.origin = r),
		(e.originPoint = K(t.min, t.max, e.origin)),
		(e.scale = Re(n) / Re(t)),
		(jl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
		(e.translate = K(n.min, n.max, e.origin) - e.originPoint),
		(jl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Vr(e, t, n, r) {
	Ic(e.x, t.x, n.x, r ? r.originX : void 0), Ic(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Bc(e, t, n) {
	(e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function P1(e, t, n) {
	Bc(e.x, t.x, n.x), Bc(e.y, t.y, n.y);
}
function Uc(e, t, n) {
	(e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function Mr(e, t, n) {
	Uc(e.x, t.x, n.x), Uc(e.y, t.y, n.y);
}
function C1(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? K(t, e, r.min) : Math.max(e, t))
			: n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
		e
	);
}
function $c(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
	};
}
function T1(e, { top: t, left: n, bottom: r, right: i }) {
	return { x: $c(e.x, n, i), y: $c(e.y, t, r) };
}
function Hc(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function E1(e, t) {
	return { x: Hc(e.x, t.x), y: Hc(e.y, t.y) };
}
function L1(e, t) {
	let n = 0.5;
	const r = Re(e),
		i = Re(t);
	return (
		i > r ? (n = qr(t.min, t.max - r, e.min)) : r > i && (n = qr(e.min, e.max - i, t.min)),
		hn(0, 1, n)
	);
}
function V1(e, t) {
	const n = {};
	return (
		t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
	);
}
const Il = 0.35;
function M1(e = Il) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = Il),
		{ x: Wc(e, "left", "right"), y: Wc(e, "top", "bottom") }
	);
}
function Wc(e, t, n) {
	return { min: Gc(e, t), max: Gc(e, n) };
}
function Gc(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
const Kc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Dr = () => ({ x: Kc(), y: Kc() }),
	Qc = () => ({ min: 0, max: 0 }),
	te = () => ({ x: Qc(), y: Qc() });
function tt(e) {
	return [e("x"), e("y")];
}
function jh({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function D1({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function N1(e, t) {
	if (!t) return e;
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom });
	return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ds(e) {
	return e === void 0 || e === 1;
}
function Bl({ scale: e, scaleX: t, scaleY: n }) {
	return !Ds(e) || !Ds(t) || !Ds(n);
}
function en(e) {
	return Bl(e) || Ih(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Ih(e) {
	return Yc(e.x) || Yc(e.y);
}
function Yc(e) {
	return e && e !== "0%";
}
function ko(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i;
}
function Xc(e, t, n, r, i) {
	return i !== void 0 && (e = ko(e, i, r)), ko(e, n, r) + t;
}
function Ul(e, t = 0, n = 1, r, i) {
	(e.min = Xc(e.min, t, n, r, i)), (e.max = Xc(e.max, t, n, r, i));
}
function Bh(e, { x: t, y: n }) {
	Ul(e.x, t.translate, t.scale, t.originPoint), Ul(e.y, n.translate, n.scale, n.originPoint);
}
function A1(e, t, n, r = !1) {
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let o, s;
	for (let l = 0; l < i; l++) {
		(o = n[l]), (s = o.projectionDelta);
		const a = o.instance;
		(a && a.style && a.style.display === "contents") ||
			(r &&
				o.options.layoutScroll &&
				o.scroll &&
				o !== o.root &&
				Fn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
			s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Bh(e, s)),
			r && en(o.latestValues) && Fn(e, o.latestValues));
	}
	(t.x = Zc(t.x)), (t.y = Zc(t.y));
}
function Zc(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Tt(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function Jc(e, t, [n, r, i]) {
	const o = t[i] !== void 0 ? t[i] : 0.5,
		s = K(e.min, e.max, o);
	Ul(e, t[n], t[r], s, t.scale);
}
const R1 = ["x", "scaleX", "originX"],
	_1 = ["y", "scaleY", "originY"];
function Fn(e, t) {
	Jc(e.x, t, R1), Jc(e.y, t, _1);
}
function Uh(e, t) {
	return jh(N1(e.getBoundingClientRect(), t));
}
function O1(e, t, n) {
	const r = Uh(e, n),
		{ scroll: i } = t;
	return i && (Tt(r.x, i.offset.x), Tt(r.y, i.offset.y)), r;
}
const z1 = new WeakMap();
class F1 {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = te()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		const i = a => {
				this.stopAnimation(), n && this.snapToCursor(Go(a, "page").point);
			},
			o = (a, u) => {
				const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
				if (
					c &&
					!f &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = rh(c)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					tt(y => {
						let v = this.getAxisMotionValue(y).get() || 0;
						if (st.test(v)) {
							const { projection: P } = this.visualElement;
							if (P && P.layout) {
								const g = P.layout.layoutBox[y];
								g && (v = Re(g) * (parseFloat(v) / 100));
							}
						}
						this.originPoint[y] = v;
					}),
					d && Q.update(() => d(a, u));
				const { animationState: m } = this.visualElement;
				m && m.setActive("whileDrag", !0);
			},
			s = (a, u) => {
				const {
					dragPropagation: c,
					dragDirectionLock: f,
					onDirectionLock: d,
					onDrag: m,
				} = this.getProps();
				if (!c && !this.openGlobalLock) return;
				const { offset: y } = u;
				if (f && this.currentDirection === null) {
					(this.currentDirection = j1(y)),
						this.currentDirection !== null && d && d(this.currentDirection);
					return;
				}
				this.updateAxis("x", u.point, y),
					this.updateAxis("y", u.point, y),
					this.visualElement.render(),
					m && m(a, u);
			},
			l = (a, u) => this.stop(a, u);
		this.panSession = new zh(
			t,
			{ onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
			{ transformPagePoint: this.visualElement.getTransformPagePoint() }
		);
	}
	stop(t, n) {
		const r = this.isDragging;
		if ((this.cancel(), !r)) return;
		const { velocity: i } = n;
		this.startAnimation(i);
		const { onDragEnd: o } = this.getProps();
		o && Q.update(() => o(t, n));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: n } = this.visualElement;
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: r } = this.getProps();
		!r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive("whileDrag", !1);
	}
	updateAxis(t, n, r) {
		const { drag: i } = this.getProps();
		if (!r || !Vi(t, i, this.currentDirection)) return;
		const o = this.getAxisMotionValue(t);
		let s = this.originPoint[t] + r[t];
		this.constraints &&
			this.constraints[t] &&
			(s = C1(s, this.constraints[t], this.elastic[t])),
			o.set(s);
	}
	resolveConstraints() {
		const { dragConstraints: t, dragElastic: n } = this.getProps(),
			{ layout: r } = this.visualElement.projection || {},
			i = this.constraints;
		t && On(t)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: t && r
			? (this.constraints = T1(r.layoutBox, t))
			: (this.constraints = !1),
			(this.elastic = M1(n)),
			i !== this.constraints &&
				r &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				tt(o => {
					this.getAxisMotionValue(o) &&
						(this.constraints[o] = V1(r.layoutBox[o], this.constraints[o]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
		if (!t || !On(t)) return !1;
		const r = t.current,
			{ projection: i } = this.visualElement;
		if (!i || !i.layout) return !1;
		const o = O1(r, i.root, this.visualElement.getTransformPagePoint());
		let s = E1(i.layout.layoutBox, o);
		if (n) {
			const l = n(D1(s));
			(this.hasMutatedConstraints = !!l), l && (s = jh(l));
		}
		return s;
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: i,
				dragTransition: o,
				dragSnapToOrigin: s,
				onDragTransitionEnd: l,
			} = this.getProps(),
			a = this.constraints || {},
			u = tt(c => {
				if (!Vi(c, n, this.currentDirection)) return;
				let f = (a && a[c]) || {};
				s && (f = { min: 0, max: 0 });
				const d = i ? 200 : 1e6,
					m = i ? 40 : 1e7,
					y = {
						type: "inertia",
						velocity: r ? t[c] : 0,
						bounceStiffness: d,
						bounceDamping: m,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...o,
						...f,
					};
				return this.startAxisValueAnimation(c, y);
			});
		return Promise.all(u).then(l);
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return r.start(iu(t, r, 0, n));
	}
	stopAnimation() {
		tt(t => this.getAxisMotionValue(t).stop());
	}
	getAxisMotionValue(t) {
		const n = "_drag" + t.toUpperCase(),
			r = this.visualElement.getProps(),
			i = r[n];
		return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
	}
	snapToCursor(t) {
		tt(n => {
			const { drag: r } = this.getProps();
			if (!Vi(n, r, this.currentDirection)) return;
			const { projection: i } = this.visualElement,
				o = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const { min: s, max: l } = i.layout.layoutBox[n];
				o.set(t[n] - K(s, l, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement;
		if (!On(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = { x: 0, y: 0 };
		tt(s => {
			const l = this.getAxisMotionValue(s);
			if (l) {
				const a = l.get();
				i[s] = L1({ min: a, max: a }, this.constraints[s]);
			}
		});
		const { transformTemplate: o } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = o ? o({}, "") : "none"),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			tt(s => {
				if (!Vi(s, t, null)) return;
				const l = this.getAxisMotionValue(s),
					{ min: a, max: u } = this.constraints[s];
				l.set(K(a, u, i[s]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		z1.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = ht(t, "pointerdown", a => {
				const { drag: u, dragListener: c = !0 } = this.getProps();
				u && c && this.start(a);
			}),
			r = () => {
				const { dragConstraints: a } = this.getProps();
				On(a) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: i } = this.visualElement,
			o = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
		const s = dt(window, "resize", () => this.scalePositionWithinConstraints()),
			l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
				this.isDragging &&
					u &&
					(tt(c => {
						const f = this.getAxisMotionValue(c);
						f &&
							((this.originPoint[c] += a[c].translate),
							f.set(f.get() + a[c].translate));
					}),
					this.visualElement.render());
			});
		return () => {
			s(), n(), o(), l && l();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: o = !1,
				dragElastic: s = Il,
				dragMomentum: l = !0,
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: o,
			dragElastic: s,
			dragMomentum: l,
		};
	}
}
function Vi(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function j1(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class I1 extends Yt {
	constructor(t) {
		super(t),
			(this.removeGroupControls = se),
			(this.removeListeners = se),
			(this.controls = new F1(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || se);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const qc = e => (t, n) => {
	e && Q.update(() => e(t, n));
};
class B1 extends Yt {
	constructor() {
		super(...arguments), (this.removePointerDownListener = se);
	}
	onPointerDown(t) {
		this.session = new zh(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
		});
	}
	createPanHandlers() {
		const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
		return {
			onSessionStart: qc(t),
			onStart: qc(n),
			onMove: r,
			onEnd: (o, s) => {
				delete this.session, i && Q.update(() => i(o, s));
			},
		};
	}
	mount() {
		this.removePointerDownListener = ht(this.node.current, "pointerdown", t =>
			this.onPointerDown(t)
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
function U1() {
	const e = M.useContext(Ua);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: n, register: r } = e,
		i = M.useId();
	return M.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
function bc(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const cr = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (D.test(e)) e = parseFloat(e);
				else return e;
			const n = bc(e, t.target.x),
				r = bc(e, t.target.y);
			return `${n}% ${r}%`;
		},
	},
	$h = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function $1(e) {
	const t = $h.exec(e);
	if (!t) return [,];
	const [, n, r] = t;
	return [n, r];
}
function $l(e, t, n = 1) {
	const [r, i] = $1(e);
	if (!r) return;
	const o = window.getComputedStyle(t).getPropertyValue(r);
	return o ? o.trim() : Ml(i) ? $l(i, t, n + 1) : i;
}
function H1(e, { ...t }, n) {
	const r = e.current;
	if (!(r instanceof Element)) return { target: t, transitionEnd: n };
	n && (n = { ...n }),
		e.values.forEach(i => {
			const o = i.get();
			if (!Ml(o)) return;
			const s = $l(o, r);
			s && i.set(s);
		});
	for (const i in t) {
		const o = t[i];
		if (!Ml(o)) continue;
		const s = $l(o, r);
		s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
	}
	return { target: t, transitionEnd: n };
}
const ef = "_$css",
	W1 = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				i = e.includes("var("),
				o = [];
			i && (e = e.replace($h, m => (o.push(m), ef)));
			const s = Wt.parse(e);
			if (s.length > 5) return r;
			const l = Wt.createTransformer(e),
				a = typeof s[0] != "number" ? 1 : 0,
				u = n.x.scale * t.x,
				c = n.y.scale * t.y;
			(s[0 + a] /= u), (s[1 + a] /= c);
			const f = K(u, c, 0.5);
			typeof s[2 + a] == "number" && (s[2 + a] /= f),
				typeof s[3 + a] == "number" && (s[3 + a] /= f);
			let d = l(s);
			if (i) {
				let m = 0;
				d = d.replace(ef, () => {
					const y = o[m];
					return m++, y;
				});
			}
			return d;
		},
	};
class G1 extends rt.Component {
	componentDidMount() {
		const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
			{ projection: o } = t;
		Xg(K1),
			o &&
				(n.group && n.group.add(o),
				r && r.register && i && r.register(o),
				o.root.didUpdate(),
				o.addEventListener("animationComplete", () => {
					this.safeToRemove();
				}),
				o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
			(Tr.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props,
			s = r.projection;
		return (
			s &&
				((s.isPresent = o),
				i || t.layoutDependency !== n || n === void 0
					? s.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== o &&
					(o
						? s.promote()
						: s.relegate() ||
						  Q.postRender(() => {
								const l = s.getStack();
								(!l || !l.members.length) && this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement;
		t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove());
	}
	componentWillUnmount() {
		const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
			{ projection: i } = t;
		i &&
			(i.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(i),
			r && r.deregister && r.deregister(i));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function Hh(e) {
	const [t, n] = U1(),
		r = M.useContext(Up);
	return rt.createElement(G1, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: M.useContext($p),
		isPresent: t,
		safeToRemove: n,
	});
}
const K1 = {
		borderRadius: {
			...cr,
			applyTo: [
				"borderTopLeftRadius",
				"borderTopRightRadius",
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
			],
		},
		borderTopLeftRadius: cr,
		borderTopRightRadius: cr,
		borderBottomLeftRadius: cr,
		borderBottomRightRadius: cr,
		boxShadow: W1,
	},
	Wh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	Q1 = Wh.length,
	tf = e => (typeof e == "string" ? parseFloat(e) : e),
	nf = e => typeof e == "number" || D.test(e);
function Y1(e, t, n, r, i, o) {
	i
		? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, X1(r))),
		  (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, Z1(r))))
		: o &&
		  (e.opacity = K(
				t.opacity !== void 0 ? t.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				r
		  ));
	for (let s = 0; s < Q1; s++) {
		const l = `border${Wh[s]}Radius`;
		let a = rf(t, l),
			u = rf(n, l);
		if (a === void 0 && u === void 0) continue;
		a || (a = 0),
			u || (u = 0),
			a === 0 || u === 0 || nf(a) === nf(u)
				? ((e[l] = Math.max(K(tf(a), tf(u), r), 0)),
				  (st.test(u) || st.test(a)) && (e[l] += "%"))
				: (e[l] = u);
	}
	(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function rf(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const X1 = Gh(0, 0.5, ba),
	Z1 = Gh(0.5, 0.95, se);
function Gh(e, t, n) {
	return r => (r < e ? 0 : r > t ? 1 : n(qr(e, t, r)));
}
function of(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function je(e, t) {
	of(e.x, t.x), of(e.y, t.y);
}
function sf(e, t, n, r, i) {
	return (e -= t), (e = ko(e, 1 / n, r)), i !== void 0 && (e = ko(e, 1 / i, r)), e;
}
function J1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
	if (
		(st.test(t) && ((t = parseFloat(t)), (t = K(s.min, s.max, t / 100) - s.min)),
		typeof t != "number")
	)
		return;
	let l = K(o.min, o.max, r);
	e === o && (l -= t), (e.min = sf(e.min, t, n, l, i)), (e.max = sf(e.max, t, n, l, i));
}
function lf(e, t, [n, r, i], o, s) {
	J1(e, t[n], t[r], t[i], t.scale, o, s);
}
const q1 = ["x", "scaleX", "originX"],
	b1 = ["y", "scaleY", "originY"];
function af(e, t, n, r) {
	lf(e.x, t, q1, n ? n.x : void 0, r ? r.x : void 0),
		lf(e.y, t, b1, n ? n.y : void 0, r ? r.y : void 0);
}
function uf(e) {
	return e.translate === 0 && e.scale === 1;
}
function Kh(e) {
	return uf(e.x) && uf(e.y);
}
function Hl(e, t) {
	return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function cf(e) {
	return Re(e.x) / Re(e.y);
}
class e2 {
	constructor() {
		this.members = [];
	}
	add(t) {
		ou(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if (
			(su(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)
		) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(t) {
		const n = this.members.findIndex(i => t === i);
		if (n === 0) return !1;
		let r;
		for (let i = n; i >= 0; i--) {
			const o = this.members[i];
			if (o.isPresent !== !1) {
				r = o;
				break;
			}
		}
		return r ? (this.promote(r), !0) : !1;
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.instance && r.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = r),
				n && (t.resumeFrom.preserveOpacity = !0),
				r.snapshot &&
					((t.snapshot = r.snapshot),
					(t.snapshot.latestValues = r.animationValues || r.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const { crossfade: i } = t.options;
			i === !1 && r.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach(t => {
			const { options: n, resumingFrom: r } = t;
			n.onExitComplete && n.onExitComplete(),
				r && r.options.onExitComplete && r.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach(t => {
			t.instance && t.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function ff(e, t, n) {
	let r = "";
	const i = e.x.translate / t.x,
		o = e.y.translate / t.y;
	if (
		((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
		n)
	) {
		const { rotate: a, rotateX: u, rotateY: c } = n;
		a && (r += `rotate(${a}deg) `),
			u && (r += `rotateX(${u}deg) `),
			c && (r += `rotateY(${c}deg) `);
	}
	const s = e.x.scale * t.x,
		l = e.y.scale * t.y;
	return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const t2 = (e, t) => e.depth - t.depth;
class n2 {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		ou(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		su(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(t2), (this.isDirty = !1), this.children.forEach(t);
	}
}
function r2(e, t) {
	const n = performance.now(),
		r = ({ timestamp: i }) => {
			const o = i - n;
			o >= t && (Ht.read(r), e(o - t));
		};
	return Q.read(r, !0), () => Ht.read(r);
}
function i2(e) {
	window.MotionDebug && window.MotionDebug.record(e);
}
function o2(e) {
	return e instanceof SVGElement && e.tagName !== "svg";
}
function s2(e, t, n) {
	const r = Le(e) ? e : Jn(e);
	return r.start(iu("", r, t, n)), r.animation;
}
const df = ["", "X", "Y", "Z"],
	pf = 1e3;
let l2 = 0;
const tn = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function Qh({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i,
}) {
	return class {
		constructor(s, l = {}, a = t == null ? void 0 : t()) {
			(this.id = l2++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.potentialNodes = new Map()),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					(tn.totalNodes = tn.resolvedTargetDeltas = tn.recalculatedProjection = 0),
						this.nodes.forEach(c2),
						this.nodes.forEach(h2),
						this.nodes.forEach(m2),
						this.nodes.forEach(f2),
						i2(tn);
				}),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.elementId = s),
				(this.latestValues = l),
				(this.root = a ? a.root || a : this),
				(this.path = a ? [...a.path, a] : []),
				(this.parent = a),
				(this.depth = a ? a.depth + 1 : 0),
				s && this.root.registerPotentialNode(s, this);
			for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0;
			this.root === this && (this.nodes = new n2());
		}
		addEventListener(s, l) {
			return (
				this.eventHandlers.has(s) || this.eventHandlers.set(s, new lu()),
				this.eventHandlers.get(s).add(l)
			);
		}
		notifyListeners(s, ...l) {
			const a = this.eventHandlers.get(s);
			a && a.notify(...l);
		}
		hasListeners(s) {
			return this.eventHandlers.has(s);
		}
		registerPotentialNode(s, l) {
			this.potentialNodes.set(s, l);
		}
		mount(s, l = !1) {
			if (this.instance) return;
			(this.isSVG = o2(s)), (this.instance = s);
			const { layoutId: a, layout: u, visualElement: c } = this.options;
			if (
				(c && !c.current && c.mount(s),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				this.elementId && this.root.potentialNodes.delete(this.elementId),
				l && (u || a) && (this.isLayoutDirty = !0),
				e)
			) {
				let f;
				const d = () => (this.root.updateBlockedByResize = !1);
				e(s, () => {
					(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = r2(d, 250)),
						Tr.hasAnimatedSinceResize &&
							((Tr.hasAnimatedSinceResize = !1), this.nodes.forEach(mf));
				});
			}
			a && this.root.registerSharedNode(a, this),
				this.options.animate !== !1 &&
					c &&
					(a || u) &&
					this.addEventListener(
						"didUpdate",
						({
							delta: f,
							hasLayoutChanged: d,
							hasRelativeTargetChanged: m,
							layout: y,
						}) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const v = this.options.transition || c.getDefaultTransition() || x2,
								{ onLayoutAnimationStart: P, onLayoutAnimationComplete: g } =
									c.getProps(),
								p = !this.targetLayout || !Hl(this.targetLayout, y) || m,
								h = !d && m;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								h ||
								(d && (p || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, h);
								const w = { ...Ah(v, "layout"), onPlay: P, onComplete: g };
								(c.shouldReduceMotion || this.options.layoutRoot) &&
									((w.delay = 0), (w.type = !1)),
									this.startAnimation(w);
							} else
								!d && this.animationProgress === 0 && mf(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete();
							this.targetLayout = y;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const s = this.getStack();
			s && s.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				Ht.preRender(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			);
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0), this.nodes && this.nodes.forEach(g2), this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: s } = this.options;
			return s && s.getProps().transformTemplate;
		}
		willUpdate(s = !0) {
			if (this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const f = this.path[c];
				(f.shouldResetTransform = !0),
					f.updateScroll("snapshot"),
					f.options.layoutRoot && f.willUpdate(!1);
			}
			const { layoutId: l, layout: a } = this.options;
			if (l === void 0 && !a) return;
			const u = this.getTransformTemplate();
			(this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
				this.updateSnapshot(),
				s && this.notifyListeners("willUpdate");
		}
		didUpdate() {
			if (this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hf);
				return;
			}
			this.isUpdating &&
				((this.isUpdating = !1),
				this.potentialNodes.size &&
					(this.potentialNodes.forEach(S2), this.potentialNodes.clear()),
				this.nodes.forEach(p2),
				this.nodes.forEach(a2),
				this.nodes.forEach(u2),
				this.clearAllSnapshots(),
				xs.update(),
				xs.preRender(),
				xs.render());
		}
		clearAllSnapshots() {
			this.nodes.forEach(d2), this.sharedNodes.forEach(y2);
		}
		scheduleUpdateProjection() {
			Q.preRender(this.updateProjection, !1, !0);
		}
		scheduleCheckAfterUnmount() {
			Q.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
			const s = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = te()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement: l } = this.options;
			l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
		}
		updateScroll(s = "measure") {
			let l = !!(this.options.layoutScroll && this.instance);
			this.scroll &&
				this.scroll.animationId === this.root.animationId &&
				this.scroll.phase === s &&
				(l = !1),
				l &&
					(this.scroll = {
						animationId: this.root.animationId,
						phase: s,
						isRoot: r(this.instance),
						offset: n(this.instance),
					});
		}
		resetTransform() {
			if (!i) return;
			const s = this.isLayoutDirty || this.shouldResetTransform,
				l = this.projectionDelta && !Kh(this.projectionDelta),
				a = this.getTransformTemplate(),
				u = a ? a(this.latestValues, "") : void 0,
				c = u !== this.prevTransformTemplateValue;
			s &&
				(l || en(this.latestValues) || c) &&
				(i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
		}
		measure(s = !0) {
			const l = this.measurePageBox();
			let a = this.removeElementScroll(l);
			return (
				s && (a = this.removeTransform(a)),
				k2(a),
				{
					animationId: this.root.animationId,
					measuredBox: l,
					layoutBox: a,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			const { visualElement: s } = this.options;
			if (!s) return te();
			const l = s.measureViewportBox(),
				{ scroll: a } = this.root;
			return a && (Tt(l.x, a.offset.x), Tt(l.y, a.offset.y)), l;
		}
		removeElementScroll(s) {
			const l = te();
			je(l, s);
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a],
					{ scroll: c, options: f } = u;
				if (u !== this.root && c && f.layoutScroll) {
					if (c.isRoot) {
						je(l, s);
						const { scroll: d } = this.root;
						d && (Tt(l.x, -d.offset.x), Tt(l.y, -d.offset.y));
					}
					Tt(l.x, c.offset.x), Tt(l.y, c.offset.y);
				}
			}
			return l;
		}
		applyTransform(s, l = !1) {
			const a = te();
			je(a, s);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!l &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					Fn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					en(c.latestValues) && Fn(a, c.latestValues);
			}
			return en(this.latestValues) && Fn(a, this.latestValues), a;
		}
		removeTransform(s) {
			const l = te();
			je(l, s);
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a];
				if (!u.instance || !en(u.latestValues)) continue;
				Bl(u.latestValues) && u.updateSnapshot();
				const c = te(),
					f = u.measurePageBox();
				je(c, f), af(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
			}
			return en(this.latestValues) && af(l, this.latestValues), l;
		}
		setTargetDelta(s) {
			(this.targetDelta = s),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0);
		}
		setOptions(s) {
			this.options = {
				...this.options,
				...s,
				crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		resolveTargetDelta(s = !1) {
			var l;
			const a = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = a.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== a;
			if (
				!(
					s ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((l = this.parent) === null || l === void 0) && l.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget
				)
			)
				return;
			const { layout: f, layoutId: d } = this.options;
			if (!(!this.layout || !(f || d))) {
				if (
					((this.resolvedRelativeTargetAt = he.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const m = this.getClosestProjectingParent();
					m && m.layout
						? ((this.relativeParent = m),
						  (this.relativeTarget = te()),
						  (this.relativeTargetOrigin = te()),
						  Mr(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
						  je(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target || ((this.target = te()), (this.targetWithTransforms = te())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.relativeParent.resolvedRelativeTargetAt !== he.timestamp &&
									this.relativeParent.resolveTargetDelta(!0),
							  P1(this.target, this.relativeTarget, this.relativeParent.target))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: je(this.target, this.layout.layoutBox),
							  Bh(this.target, this.targetDelta))
							: je(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1;
						const m = this.getClosestProjectingParent();
						m &&
						!!m.resumingFrom == !!this.resumingFrom &&
						!m.options.layoutScroll &&
						m.target
							? ((this.relativeParent = m),
							  (this.relativeTarget = te()),
							  (this.relativeTargetOrigin = te()),
							  Mr(this.relativeTargetOrigin, this.target, m.target),
							  je(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					tn.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Bl(this.parent.latestValues) || Ih(this.parent.latestValues)))
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
				this.layout
			);
		}
		calcProjection() {
			var s;
			const l = this.getLead(),
				a = !!this.resumingFrom || this !== l;
			let u = !0;
			if (
				((this.isProjectionDirty ||
					(!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) &&
					(u = !1),
				a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
				this.resolvedRelativeTargetAt === he.timestamp && (u = !1),
				u)
			)
				return;
			const { layout: c, layoutId: f } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || f))
			)
				return;
			je(this.layoutCorrected, this.layout.layoutBox),
				A1(this.layoutCorrected, this.treeScale, this.path, a);
			const { target: d } = l;
			if (!d) return;
			this.projectionDelta ||
				((this.projectionDelta = Dr()), (this.projectionDeltaWithTransform = Dr()));
			const m = this.treeScale.x,
				y = this.treeScale.y,
				v = this.projectionTransform;
			Vr(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
				(this.projectionTransform = ff(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== v ||
					this.treeScale.x !== m ||
					this.treeScale.y !== y) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners("projectionUpdate", d)),
				tn.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(s = !0) {
			if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
				const l = this.getStack();
				l && l.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		setAnimationOrigin(s, l = !1) {
			const a = this.snapshot,
				u = a ? a.latestValues : {},
				c = { ...this.latestValues },
				f = Dr();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !l);
			const d = te(),
				m = a ? a.source : void 0,
				y = this.layout ? this.layout.source : void 0,
				v = m !== y,
				P = this.getStack(),
				g = !P || P.members.length <= 1,
				p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(w2));
			this.animationProgress = 0;
			let h;
			(this.mixTargetDelta = w => {
				const x = w / 1e3;
				gf(f.x, s.x, x),
					gf(f.y, s.y, x),
					this.setTargetDelta(f),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(Mr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						v2(this.relativeTarget, this.relativeTargetOrigin, d, x),
						h && Hl(this.relativeTarget, h) && (this.isProjectionDirty = !1),
						h || (h = te()),
						je(h, this.relativeTarget)),
					v && ((this.animationValues = c), Y1(c, u, this.latestValues, x, p, g)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = x);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(s) {
			this.notifyListeners("animationStart"),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation &&
					(Ht.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = Q.update(() => {
					(Tr.hasAnimatedSinceResize = !0),
						(this.currentAnimation = s2(0, pf, {
							...s,
							onUpdate: l => {
								this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
							},
							onComplete: () => {
								s.onComplete && s.onComplete(), this.completeAnimation();
							},
						})),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0));
			const s = this.getStack();
			s && s.exitAnimationComplete(),
				(this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
				this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(pf), this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const s = this.getLead();
			let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = s;
			if (!(!l || !a || !u)) {
				if (
					this !== s &&
					this.layout &&
					u &&
					Yh(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					a = this.target || te();
					const f = Re(this.layout.layoutBox.x);
					(a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
					const d = Re(this.layout.layoutBox.y);
					(a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
				}
				je(l, a),
					Fn(l, c),
					Vr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
			}
		}
		registerSharedNode(s, l) {
			this.sharedNodes.has(s) || this.sharedNodes.set(s, new e2()),
				this.sharedNodes.get(s).add(l);
			const u = l.options.initialPromotionConfig;
			l.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0,
			});
		}
		isLead() {
			const s = this.getStack();
			return s ? s.lead === this : !0;
		}
		getLead() {
			var s;
			const { layoutId: l } = this.options;
			return l
				? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this
				: this;
		}
		getPrevLead() {
			var s;
			const { layoutId: l } = this.options;
			return l
				? (s = this.getStack()) === null || s === void 0
					? void 0
					: s.prevLead
				: void 0;
		}
		getStack() {
			const { layoutId: s } = this.options;
			if (s) return this.root.sharedNodes.get(s);
		}
		promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
			const u = this.getStack();
			u && u.promote(this, a),
				s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				l && this.setOptions({ transition: l });
		}
		relegate() {
			const s = this.getStack();
			return s ? s.relegate(this) : !1;
		}
		resetRotation() {
			const { visualElement: s } = this.options;
			if (!s) return;
			let l = !1;
			const { latestValues: a } = s;
			if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l)) return;
			const u = {};
			for (let c = 0; c < df.length; c++) {
				const f = "rotate" + df[c];
				a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
			}
			s.render();
			for (const c in u) s.setStaticValue(c, u[c]);
			s.scheduleRender();
		}
		getProjectionStyles(s = {}) {
			var l, a;
			const u = {};
			if (!this.instance || this.isSVG) return u;
			if (this.isVisible) u.visibility = "";
			else return { visibility: "hidden" };
			const c = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ""),
					(u.pointerEvents = $i(s.pointerEvents) || ""),
					(u.transform = c ? c(this.latestValues, "") : "none"),
					u
				);
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const v = {};
				return (
					this.options.layoutId &&
						((v.opacity =
							this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
						(v.pointerEvents = $i(s.pointerEvents) || "")),
					this.hasProjected &&
						!en(this.latestValues) &&
						((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
					v
				);
			}
			const d = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(),
				(u.transform = ff(this.projectionDeltaWithTransform, this.treeScale, d)),
				c && (u.transform = c(d, u.transform));
			const { x: m, y } = this.projectionDelta;
			(u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
				f.animationValues
					? (u.opacity =
							f === this
								? (a =
										(l = d.opacity) !== null && l !== void 0
											? l
											: this.latestValues.opacity) !== null && a !== void 0
									? a
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: d.opacityExit)
					: (u.opacity =
							f === this
								? d.opacity !== void 0
									? d.opacity
									: ""
								: d.opacityExit !== void 0
								? d.opacityExit
								: 0);
			for (const v in mo) {
				if (d[v] === void 0) continue;
				const { correct: P, applyTo: g } = mo[v],
					p = u.transform === "none" ? d[v] : P(d[v], f);
				if (g) {
					const h = g.length;
					for (let w = 0; w < h; w++) u[g[w]] = p;
				} else u[v] = p;
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents = f === this ? $i(s.pointerEvents) || "" : "none"),
				u
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach(s => {
				var l;
				return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
			}),
				this.root.nodes.forEach(hf),
				this.root.sharedNodes.clear();
		}
	};
}
function a2(e) {
	e.updateLayout();
}
function u2(e) {
	var t;
	const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
		const { layoutBox: r, measuredBox: i } = e.layout,
			{ animationType: o } = e.options,
			s = n.source !== e.layout.source;
		o === "size"
			? tt(f => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						m = Re(d);
					(d.min = r[f].min), (d.max = d.min + m);
			  })
			: Yh(o, n.layoutBox, r) &&
			  tt(f => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						m = Re(r[f]);
					(d.max = d.min + m),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0),
							(e.relativeTarget[f].max = e.relativeTarget[f].min + m));
			  });
		const l = Dr();
		Vr(l, r, n.layoutBox);
		const a = Dr();
		s ? Vr(a, e.applyTransform(i, !0), n.measuredBox) : Vr(a, r, n.layoutBox);
		const u = !Kh(l);
		let c = !1;
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const { snapshot: d, layout: m } = f;
				if (d && m) {
					const y = te();
					Mr(y, n.layoutBox, d.layoutBox);
					const v = te();
					Mr(v, r, m.layoutBox),
						Hl(y, v) || (c = !0),
						f.options.layoutRoot &&
							((e.relativeTarget = v),
							(e.relativeTargetOrigin = y),
							(e.relativeParent = f));
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: r,
			snapshot: n,
			delta: a,
			layoutDelta: l,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options;
		r && r();
	}
	e.options.transition = void 0;
}
function c2(e) {
	tn.totalNodes++,
		e.parent &&
			(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(
					e.isProjectionDirty ||
					e.parent.isProjectionDirty ||
					e.parent.isSharedProjectionDirty
				)),
			e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function f2(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function d2(e) {
	e.clearSnapshot();
}
function hf(e) {
	e.clearMeasurements();
}
function p2(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function mf(e) {
	e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function h2(e) {
	e.resolveTargetDelta();
}
function m2(e) {
	e.calcProjection();
}
function g2(e) {
	e.resetRotation();
}
function y2(e) {
	e.removeLeadSnapshot();
}
function gf(e, t, n) {
	(e.translate = K(t.translate, 0, n)),
		(e.scale = K(t.scale, 1, n)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function yf(e, t, n, r) {
	(e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r));
}
function v2(e, t, n, r) {
	yf(e.x, t.x, n.x, r), yf(e.y, t.y, n.y, r);
}
function w2(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const x2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function S2(e, t) {
	let n = e.root;
	for (let o = e.path.length - 1; o >= 0; o--)
		if (e.path[o].instance) {
			n = e.path[o];
			break;
		}
	const i = (n && n !== e.root ? n.instance : document).querySelector(
		`[data-projection-id="${t}"]`
	);
	i && e.mount(i, !0);
}
function vf(e) {
	(e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function k2(e) {
	vf(e.x), vf(e.y);
}
function Yh(e, t, n) {
	return e === "position" || (e === "preserve-aspect" && !jl(cf(t), cf(n), 0.2));
}
const P2 = Qh({
		attachResizeListener: (e, t) => dt(e, "resize", t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Ns = { current: void 0 },
	Xh = Qh({
		measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Ns.current) {
				const e = new P2(0, {});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ns.current = e);
			}
			return Ns.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none";
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed",
	}),
	C2 = { pan: { Feature: B1 }, drag: { Feature: I1, ProjectionNode: Xh, MeasureLayout: Hh } },
	T2 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
	Zh = e => T2.has(e),
	E2 = e => Object.keys(e).some(Zh),
	wf = e => e === wn || e === D,
	xf = (e, t) => parseFloat(e.split(", ")[t]),
	Sf =
		(e, t) =>
		(n, { transform: r }) => {
			if (r === "none" || !r) return 0;
			const i = r.match(/^matrix3d\((.+)\)$/);
			if (i) return xf(i[1], t);
			{
				const o = r.match(/^matrix\((.+)\)$/);
				return o ? xf(o[1], e) : 0;
			}
		},
	L2 = new Set(["x", "y", "z"]),
	V2 = Wo.filter(e => !L2.has(e));
function M2(e) {
	const t = [];
	return (
		V2.forEach(n => {
			const r = e.getValue(n);
			r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
		}),
		t.length && e.render(),
		t
	);
}
const kf = {
		width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
			e.max - e.min - parseFloat(t) - parseFloat(n),
		height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
			e.max - e.min - parseFloat(t) - parseFloat(n),
		top: (e, { top: t }) => parseFloat(t),
		left: (e, { left: t }) => parseFloat(t),
		bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
		right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
		x: Sf(4, 13),
		y: Sf(5, 14),
	},
	D2 = (e, t, n) => {
		const r = t.measureViewportBox(),
			i = t.current,
			o = getComputedStyle(i),
			{ display: s } = o,
			l = {};
		s === "none" && t.setStaticValue("display", e.display || "block"),
			n.forEach(u => {
				l[u] = kf[u](r, o);
			}),
			t.render();
		const a = t.measureViewportBox();
		return (
			n.forEach(u => {
				const c = t.getValue(u);
				c && c.jump(l[u]), (e[u] = kf[u](a, o));
			}),
			e
		);
	},
	N2 = (e, t, n = {}, r = {}) => {
		(t = { ...t }), (r = { ...r });
		const i = Object.keys(t).filter(Zh);
		let o = [],
			s = !1;
		const l = [];
		if (
			(i.forEach(a => {
				const u = e.getValue(a);
				if (!e.hasValue(a)) return;
				let c = n[a],
					f = ur(c);
				const d = t[a];
				let m;
				if (yo(d)) {
					const y = d.length,
						v = d[0] === null ? 1 : 0;
					(c = d[v]), (f = ur(c));
					for (let P = v; P < y; P++) m ? qa(ur(d[P]) === m) : (m = ur(d[P]));
				} else m = ur(d);
				if (f !== m)
					if (wf(f) && wf(m)) {
						const y = u.get();
						typeof y == "string" && u.set(parseFloat(y)),
							typeof d == "string"
								? (t[a] = parseFloat(d))
								: Array.isArray(d) && m === D && (t[a] = d.map(parseFloat));
					} else
						f != null && f.transform && m != null && m.transform && (c === 0 || d === 0)
							? c === 0
								? u.set(m.transform(c))
								: (t[a] = f.transform(d))
							: (s || ((o = M2(e)), (s = !0)),
							  l.push(a),
							  (r[a] = r[a] !== void 0 ? r[a] : t[a]),
							  u.jump(d));
			}),
			l.length)
		) {
			const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
				u = D2(t, e, l);
			return (
				o.length &&
					o.forEach(([c, f]) => {
						e.getValue(c).set(f);
					}),
				e.render(),
				Uo && a !== null && window.scrollTo({ top: a }),
				{ target: u, transitionEnd: r }
			);
		} else return { target: t, transitionEnd: r };
	};
function A2(e, t, n, r) {
	return E2(t) ? N2(e, t, n, r) : { target: t, transitionEnd: r };
}
const R2 = (e, t, n, r) => {
		const i = H1(e, t, r);
		return (t = i.target), (r = i.transitionEnd), A2(e, t, n, r);
	},
	Wl = { current: null },
	Jh = { current: !1 };
function _2() {
	if (((Jh.current = !0), !!Uo))
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => (Wl.current = e.matches);
			e.addListener(t), t();
		} else Wl.current = !1;
}
function O2(e, t, n) {
	const { willChange: r } = t;
	for (const i in t) {
		const o = t[i],
			s = n[i];
		if (Le(o)) e.addValue(i, o), So(r) && r.add(i);
		else if (Le(s)) e.addValue(i, Jn(o, { owner: e })), So(r) && r.remove(i);
		else if (s !== o)
			if (e.hasValue(i)) {
				const l = e.getValue(i);
				!l.hasAnimated && l.set(o);
			} else {
				const l = e.getStaticValue(i);
				e.addValue(i, Jn(l !== void 0 ? l : o, { owner: e }));
			}
	}
	for (const i in n) t[i] === void 0 && e.removeValue(i);
	return t;
}
const Pf = new WeakMap(),
	qh = Object.keys(Xr),
	z2 = qh.length,
	Cf = [
		"AnimationStart",
		"AnimationComplete",
		"Update",
		"BeforeLayoutMeasure",
		"LayoutMeasure",
		"LayoutAnimationStart",
		"LayoutAnimationComplete",
	],
	F2 = Ha.length;
class j2 {
	constructor(
		{ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o },
		s = {}
	) {
		(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify("Update", this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection
					));
			}),
			(this.scheduleRender = () => Q.render(this.render, !1, !0));
		const { latestValues: l, renderState: a } = o;
		(this.latestValues = l),
			(this.baseTarget = { ...l }),
			(this.initialValues = n.initial ? { ...l } : {}),
			(this.renderState = a),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = i),
			(this.options = s),
			(this.isControllingVariants = Ho(n)),
			(this.isVariantNode = Ip(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
		for (const f in c) {
			const d = c[f];
			l[f] !== void 0 && Le(d) && (d.set(l[f], !1), So(u) && u.add(f));
		}
	}
	scrapeMotionValuesFromProps(t, n) {
		return {};
	}
	mount(t) {
		(this.current = t),
			Pf.set(t, this),
			this.projection && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			Jh.current || _2(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === "never"
					? !1
					: this.reducedMotionConfig === "always"
					? !0
					: Wl.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		Pf.delete(this.current),
			this.projection && this.projection.unmount(),
			Ht.update(this.notifyUpdate),
			Ht.render(this.render),
			this.valueSubscriptions.forEach(t => t()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const t in this.events) this.events[t].clear();
		for (const t in this.features) this.features[t].unmount();
		this.current = null;
	}
	bindToMotionValue(t, n) {
		const r = vn.has(t),
			i = n.on("change", s => {
				(this.latestValues[t] = s),
					this.props.onUpdate && Q.update(this.notifyUpdate, !1, !0),
					r && this.projection && (this.projection.isTransformDirty = !0);
			}),
			o = n.on("renderRequest", this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			i(), o();
		});
	}
	sortNodePosition(t) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	loadFeatures({ children: t, ...n }, r, i, o, s) {
		let l, a;
		for (let u = 0; u < z2; u++) {
			const c = qh[u],
				{ isEnabled: f, Feature: d, ProjectionNode: m, MeasureLayout: y } = Xr[c];
			m && (l = m),
				f(n) && (!this.features[c] && d && (this.features[c] = new d(this)), y && (a = y));
		}
		if (!this.projection && l) {
			this.projection = new l(o, this.latestValues, this.parent && this.parent.projection);
			const {
				layoutId: u,
				layout: c,
				drag: f,
				dragConstraints: d,
				layoutScroll: m,
				layoutRoot: y,
			} = n;
			this.projection.setOptions({
				layoutId: u,
				layout: c,
				alwaysMeasureLayout: !!f || (d && On(d)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof c == "string" ? c : "both",
				initialPromotionConfig: s,
				layoutScroll: m,
				layoutRoot: y,
			});
		}
		return a;
	}
	updateFeatures() {
		for (const t in this.features) {
			const n = this.features[t];
			n.isMounted ? n.update(this.props, this.prevProps) : (n.mount(), (n.isMounted = !0));
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : te();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n;
	}
	makeTargetAnimatable(t, n = !0) {
		return this.makeTargetAnimatableFromInstance(t, this.props, n);
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n);
		for (let r = 0; r < Cf.length; r++) {
			const i = Cf[r];
			this.propEventSubscriptions[i] &&
				(this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
			const o = t["on" + i];
			o && (this.propEventSubscriptions[i] = this.on(i, o));
		}
		(this.prevMotionValues = O2(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
			? this.parent.getClosestVariantNode()
			: void 0;
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const r = this.parent ? this.parent.getVariantContext() || {} : {};
			return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
		}
		const n = {};
		for (let r = 0; r < F2; r++) {
			const i = Ha[r],
				o = this.props[i];
			(Yr(o) || o === !1) && (n[i] = o);
		}
		return n;
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n)
			return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
	}
	addValue(t, n) {
		n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)),
			this.values.set(t, n),
			(this.latestValues[t] = n.get());
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return (
			r === void 0 && n !== void 0 && ((r = Jn(n, { owner: this })), this.addValue(t, r)), r
		);
	}
	readValue(t) {
		return this.latestValues[t] !== void 0 || !this.current
			? this.latestValues[t]
			: this.readValueFromInstance(this.current, t, this.options);
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n;
	}
	getBaseTarget(t) {
		var n;
		const { initial: r } = this.props,
			i =
				typeof r == "string" || typeof r == "object"
					? (n = Ja(this.props, r)) === null || n === void 0
						? void 0
						: n[t]
					: void 0;
		if (r && i !== void 0) return i;
		const o = this.getBaseTargetFromProps(this.props, t);
		return o !== void 0 && !Le(o)
			? o
			: this.initialValues[t] !== void 0 && i === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new lu()), this.events[t].add(n);
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n);
	}
}
class bh extends j2 {
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0;
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t];
	}
	makeTargetAnimatableFromInstance(
		{ transition: t, transitionEnd: n, ...r },
		{ transformValues: i },
		o
	) {
		let s = o1(r, t || {}, this);
		if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
			r1(this, r, s);
			const l = R2(this, r, s, n);
			(n = l.transitionEnd), (r = l.target);
		}
		return { transition: t, transitionEnd: n, ...r };
	}
}
function I2(e) {
	return window.getComputedStyle(e);
}
class B2 extends bh {
	readValueFromInstance(t, n) {
		if (vn.has(n)) {
			const r = nu(n);
			return (r && r.default) || 0;
		} else {
			const r = I2(t),
				i = (Gp(n) ? r.getPropertyValue(n) : r[n]) || 0;
			return typeof i == "string" ? i.trim() : i;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return Uh(t, n);
	}
	build(t, n, r, i) {
		Ga(t, n, r, i.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, n) {
		return Za(t, n);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		Le(t) &&
			(this.childSubscription = t.on("change", n => {
				this.current && (this.current.textContent = `${n}`);
			}));
	}
	renderInstance(t, n, r, i) {
		Zp(t, n, r, i);
	}
}
class U2 extends bh {
	constructor() {
		super(...arguments), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(t, n) {
		return t[n];
	}
	readValueFromInstance(t, n) {
		if (vn.has(n)) {
			const r = nu(n);
			return (r && r.default) || 0;
		}
		return (n = Jp.has(n) ? n : Xa(n)), t.getAttribute(n);
	}
	measureInstanceViewportBox() {
		return te();
	}
	scrapeMotionValuesFromProps(t, n) {
		return bp(t, n);
	}
	build(t, n, r, i) {
		Qa(t, n, r, this.isSVGTag, i.transformTemplate);
	}
	renderInstance(t, n, r, i) {
		qp(t, n, r, i);
	}
	mount(t) {
		(this.isSVGTag = Ya(t.tagName)), super.mount(t);
	}
}
const $2 = (e, t) =>
		Wa(e)
			? new U2(t, { enableHardwareAcceleration: !1 })
			: new B2(t, { enableHardwareAcceleration: !0 }),
	H2 = { layout: { ProjectionNode: Xh, MeasureLayout: Hh } },
	W2 = { ...w1, ...jy, ...C2, ...H2 },
	Po = Qg((e, t) => Sy(e, t, W2, $2)),
	As = e =>
		V("div", {
			className: "relative z-20 overflow-hidden",
			children: V(Po.div, {
				animate: { y: e.coordinates },
				transition: { duration: 4, ease: "easeInOut", times: [0, 0.2, 1], delay: e.delay },
				children: e.children,
			}),
		}),
	Rs = e =>
		V(Po.div, {
			initial: { opacity: 0, y: 10 },
			animate: { opacity: 1, y: 0 },
			transition: { duration: 1, ease: "easeInOut", delay: e.delay },
			className: e.styles,
			children: e.children,
		});
var em = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
	Tf = rt.createContext && rt.createContext(em),
	Bt =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(Bt =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) {
							t = arguments[n];
							for (var i in t)
								Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						}
						return e;
					}),
				Bt.apply(this, arguments)
			);
		},
	G2 =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == "function")
				for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
					t.indexOf(r[i]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
						(n[r[i]] = e[r[i]]);
			return n;
		};
function tm(e) {
	return (
		e &&
		e.map(function (t, n) {
			return rt.createElement(t.tag, Bt({ key: n }, t.attr), tm(t.child));
		})
	);
}
function xn(e) {
	return function (t) {
		return rt.createElement(K2, Bt({ attr: Bt({}, e.attr) }, t), tm(e.child));
	};
}
function K2(e) {
	var t = function (n) {
		var r = e.attr,
			i = e.size,
			o = e.title,
			s = G2(e, ["attr", "size", "title"]),
			l = i || n.size || "1em",
			a;
		return (
			n.className && (a = n.className),
			e.className && (a = (a ? a + " " : "") + e.className),
			rt.createElement(
				"svg",
				Bt(
					{ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
					n.attr,
					r,
					s,
					{
						className: a,
						style: Bt(Bt({ color: e.color || n.color }, n.style), e.style),
						height: l,
						width: l,
						xmlns: "http://www.w3.org/2000/svg",
					}
				),
				o && rt.createElement("title", null, o),
				e.children
			)
		);
	};
	return Tf !== void 0
		? rt.createElement(Tf.Consumer, null, function (n) {
				return t(n);
		  })
		: t(em);
}
function Q2(e) {
	return xn({
		tag: "svg",
		attr: { t: "1569683552617", viewBox: "0 0 1024 1024", version: "1.1" },
		child: [
			{ tag: "defs", attr: {}, child: [] },
			{
				tag: "path",
				attr: {
					d: "M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 0.6 0.1 1.3 0.2 1.9-0.1 2-0.2 4.1-0.2 6.1 0 46.4 37.6 84 84 84s84-37.6 84-84c0-2.1-0.1-4.1-0.2-6.1 0.1-0.6 0.2-1.2 0.2-1.9V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zM720 352H208V160h512v192zM477 876c0 11-9 20-20 20s-20-9-20-20V696h40v180z",
				},
			},
		],
	})(e);
}
function Gl(e) {
	return xn({
		tag: "svg",
		attr: { role: "img", viewBox: "0 0 24 24" },
		child: [
			{ tag: "title", attr: {}, child: [] },
			{
				tag: "path",
				attr: {
					d: "M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z",
				},
			},
		],
	})(e);
}
function Y2(e) {
	return xn({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [
			{
				tag: "path",
				attr: {
					fillRule: "evenodd",
					d: "M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z",
				},
			},
		],
	})(e);
}
function X2() {
	const [e, t] = M.useState(!1),
		{ darkMode: n, setDarkMode: r } = Ng(),
		i = () => {
			r(n === "true" ? "false" : "true");
		};
	return (
		M.useEffect(() => {
			const o = setTimeout(() => {
				t(!1);
			}, 1e3);
			return () => clearTimeout(o);
		}, [e]),
		V(Po.div, {
			initial: { y: -50 },
			animate: { y: 0 },
			transition: { duration: 0.5 },
			className: "absolute top-0 w-full px-3 py-5",
			children: $("header", {
				className: "w-full flex items-center justify-between",
				children: [
					$("div", {
						className: "flex gap-3 items-center",
						children: [
							V("a", {
								target: "_blank",
								rel: "noopener noreferrer",
								href: "https://github.com/moelhaj",
								className:
									"rounded-md bg-indigo-700 text-white hover:bg-indigo-800 duration-300 cursor-pointer p-1.5",
								children: V(Gl, { size: 15 }),
							}),
							V("a", {
								target: "_blank",
								rel: "noopener noreferrer",
								href: "https://www.linkedin.com/in/mo-elhaj",
								className:
									"rounded-md bg-indigo-700 text-white hover:bg-indigo-800 duration-300 cursor-pointer p-1.5",
								children: V(Y2, { size: 15 }),
							}),
						],
					}),
					V(Po.div, {
						animate: e ? { y: [0, -5, 5, -5, 0] } : { y: 0 },
						transition: { duration: 0.5 },
						className: "cursor-pointer",
						onClick: () => {
							t(!0), i();
						},
						children: V(Q2, { size: 22 }),
					}),
				],
			}),
		})
	);
}
function Z2(e) {
	return xn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		child: [
			{ tag: "rect", attr: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" } },
			{ tag: "path", attr: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" } },
		],
	})(e);
}
function J2(e) {
	return xn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		child: [
			{ tag: "rect", attr: { x: "3", y: "3", width: "7", height: "7" } },
			{ tag: "rect", attr: { x: "14", y: "3", width: "7", height: "7" } },
			{ tag: "rect", attr: { x: "14", y: "14", width: "7", height: "7" } },
			{ tag: "rect", attr: { x: "3", y: "14", width: "7", height: "7" } },
		],
	})(e);
}
function q2(e) {
	return xn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		child: [
			{ tag: "rect", attr: { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" } },
			{ tag: "rect", attr: { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" } },
			{ tag: "line", attr: { x1: "6", y1: "6", x2: "6.01", y2: "6" } },
			{ tag: "line", attr: { x1: "6", y1: "18", x2: "6.01", y2: "18" } },
		],
	})(e);
}
function b2() {
	return $("section", {
		className: "relative mx-auto w-full max-w-6xl min-h-screen flex flex-col",
		children: [
			V(X2, {}),
			$("div", {
				className: "w-full h-4/5 my-auto p-3 flex flex-col md:flex-row gap-10",
				children: [
					$("div", {
						className: "flex-1",
						children: [
							V(As, {
								delay: "0.4",
								coordinates: ["-150%", "0%", "0%"],
								children: V("p", { children: "Full Stack Developer" }),
							}),
							V(As, {
								delay: "0.4",
								coordinates: ["150%", "0%", "0%"],
								children: V("h1", {
									className:
										"md:-ml-1 text-3xl font-extrabold md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em] lg:tracking-[-0.0375em]",
									children: "Mohamed Elhaj",
								}),
							}),
							V(As, {
								delay: "1",
								coordinates: ["150%", "0%", "0%"],
								children: V("p", {
									className: "max-w-md pt-3",
									children:
										"Full stack developer with 7 years of experience, specializing in building web applications that are dynamic, user-centered, and scalable. Throughout my career, I have collaborated on projects that prioritize innovation and technical excellence, ensuring the delivery of reliable and high-performance solutions.",
								}),
							}),
						],
					}),
					$("div", {
						className: "flex-1 flex flex-col gap-5",
						children: [
							$(Rs, {
								delay: "2",
								styles: "flex items-center gap-5",
								children: [
									V("div", {
										className:
											"w-12 h-12 rounded-md bg-indigo-600 text-white grid place-content-center",
										children: V(Z2, { size: 20 }),
									}),
									V("div", {
										className: "flex-1",
										children: "Create reusable React components",
									}),
								],
							}),
							$(Rs, {
								delay: "2.2",
								styles: "flex items-center gap-5",
								children: [
									V("div", {
										className:
											"w-12 h-12 rounded-md bg-indigo-600 text-white grid place-content-center",
										children: V(q2, { size: 20 }),
									}),
									V("div", {
										className: "flex-1",
										children: "Build REST API using Node, Express, and Prisma",
									}),
								],
							}),
							$(Rs, {
								delay: "2.4",
								styles: "flex items-center gap-5",
								children: [
									V("div", {
										className:
											"w-12 h-12 rounded-md bg-indigo-600 text-white grid place-content-center",
										children: V(J2, { size: 20 }),
									}),
									V("div", {
										className: "flex-1",
										children: "Develop responsive websites using Tailwind CSS",
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
function Ef(e) {
	return xn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			strokeWidth: "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		child: [
			{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } },
			{
				tag: "path",
				attr: {
					d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
				},
			},
			{ tag: "path", attr: { d: "M10 9v6l5 -3z" } },
		],
	})(e);
}
const ew = "/assets/expensesTracker-4d3cf75e.jpeg",
	tw = "/assets/issueTracker-3daa1986.png",
	Kl = new Map(),
	Mi = new WeakMap();
let Lf = 0,
	nw;
function rw(e) {
	return e ? (Mi.has(e) || ((Lf += 1), Mi.set(e, Lf.toString())), Mi.get(e)) : "0";
}
function iw(e) {
	return Object.keys(e)
		.sort()
		.filter(t => e[t] !== void 0)
		.map(t => `${t}_${t === "root" ? rw(e.root) : e[t]}`)
		.toString();
}
function ow(e) {
	let t = iw(e),
		n = Kl.get(t);
	if (!n) {
		const r = new Map();
		let i;
		const o = new IntersectionObserver(s => {
			s.forEach(l => {
				var a;
				const u = l.isIntersecting && i.some(c => l.intersectionRatio >= c);
				e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = u),
					(a = r.get(l.target)) == null ||
						a.forEach(c => {
							c(u, l);
						});
			});
		}, e);
		(i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
			(n = { id: t, observer: o, elements: r }),
			Kl.set(t, n);
	}
	return n;
}
function sw(e, t, n = {}, r = nw) {
	if (typeof window.IntersectionObserver > "u" && r !== void 0) {
		const a = e.getBoundingClientRect();
		return (
			t(r, {
				isIntersecting: r,
				target: e,
				intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
				time: 0,
				boundingClientRect: a,
				intersectionRect: a,
				rootBounds: a,
			}),
			() => {}
		);
	}
	const { id: i, observer: o, elements: s } = ow(n);
	let l = s.get(e) || [];
	return (
		s.has(e) || s.set(e, l),
		l.push(t),
		o.observe(e),
		function () {
			l.splice(l.indexOf(t), 1),
				l.length === 0 && (s.delete(e), o.unobserve(e)),
				s.size === 0 && (o.disconnect(), Kl.delete(i));
		}
	);
}
function lw({
	threshold: e,
	delay: t,
	trackVisibility: n,
	rootMargin: r,
	root: i,
	triggerOnce: o,
	skip: s,
	initialInView: l,
	fallbackInView: a,
	onChange: u,
} = {}) {
	var c;
	const [f, d] = M.useState(null),
		m = M.useRef(),
		[y, v] = M.useState({ inView: !!l, entry: void 0 });
	(m.current = u),
		M.useEffect(() => {
			if (s || !f) return;
			let h;
			return (
				(h = sw(
					f,
					(w, x) => {
						v({ inView: w, entry: x }),
							m.current && m.current(w, x),
							x.isIntersecting && o && h && (h(), (h = void 0));
					},
					{ root: i, rootMargin: r, threshold: e, trackVisibility: n, delay: t },
					a
				)),
				() => {
					h && h();
				}
			);
		}, [Array.isArray(e) ? e.toString() : e, f, i, r, o, s, n, a, t]);
	const P = (c = y.entry) == null ? void 0 : c.target,
		g = M.useRef();
	!f && P && !o && !s && g.current !== P && ((g.current = P), v({ inView: !!l, entry: void 0 }));
	const p = [d, y.inView, y.entry];
	return (p.ref = p[0]), (p.inView = p[1]), (p.entry = p[2]), p;
}
function aw() {
	const [e, t] = M.useState(!0),
		{ ref: n, inView: r } = lw({ threshold: 0.5 });
	return (
		M.useEffect(() => {
			t(!!r), console.log(e);
		}, [r]),
		V("section", {
			className: "pb-1",
			children: V("div", {
				className: "space-y-16",
				children: $("div", {
					children: [
						V("div", {
							className: "mx-auto max-w-6xl px-4 md:px-6",
							children: V("h1", {
								className: "text-3xl md:text-4xl font-extrabold",
								children: "Projects",
							}),
						}),
						$("div", {
							ref: n,
							className:
								"x-scroll mx-auto mt-2 flex max-w-6xl snap-x snap-mandatory space-x-6 overflow-x-auto pb-6 before:flex-shrink-0 before:basis-4 before:content-[''] after:flex-shrink-0 after:basis-4 after:content-[''] md:before:basis-6 md:after:basis-6 md:mt-5 md:grid md:snap-none md:grid-cols-2 md:gap-x-5 md:gap-y-12 md:space-x-0 md:px-4 md:before:hidden md:after:hidden",
							children: [
								V("div", {
									className:
										"bg-white dark:bg-gray-800 p-3 rounded-md w-[85%] max-w-sm flex-none snap-start scroll-ml-4 sm:max-w-xs md:scroll-ml-6 md:w-auto md:max-w-none",
									children: $("div", {
										className: "flex flex-col gap-2 h-full",
										children: [
											V("a", {
												target: "_blank",
												rel: "noopener noreferrer",
												href: "https://mo-frontend-issue-tracker.onrender.com/",
												style: { backgroundImage: `url(${tw})` },
												className:
													"bg-center bg-no-repeat bg-cover overflow-hidden w-full h-44 md:h-72 rounded-md",
											}),
											V("h1", {
												className: "font-bold text-xl md:text-2xl mt-5",
												children: "Issue Tracker",
											}),
											V("p", {
												className: "",
												children:
													"A project issues tracker, easy to use with kanban board, drag and drop, In-App notifications, optimistic updates using Redux RTK Query and more features.",
											}),
											$("div", {
												className:
													"flex flex-wrap items-center gap-2 text-xs",
												children: [
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "React",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "Redux Toolkit",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "RTK Query",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "Node",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "Express",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "Prisma",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "MongoDB",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "TailwindCSS",
													}),
												],
											}),
											$("div", {
												className: "mt-5 flex gap-3 md:mt-10",
												children: [
													$("a", {
														target: "_blank",
														rel: "noopener noreferrer",
														href: "https://github.com/moElhaj/bug-tracker",
														className:
															"rounded-md bg-indigo-700 text-white hover:bg-indigo-800 duration-300 cursor-pointer px-3 py-1.5 flex gap-2 items-center text-sm",
														children: [V(Gl, { size: 15 }), "GitHub"],
													}),
													$("a", {
														target: "_blank",
														rel: "noopener noreferrer",
														href: "https://mo-frontend-issue-tracker.onrender.com/",
														className:
															"rounded-md bg-indigo-700 text-white hover:bg-indigo-800 duration-300 cursor-pointer px-3 py-1.5 flex gap-2 items-center text-sm",
														children: [V(Ef, { size: 15 }), "Demo"],
													}),
												],
											}),
										],
									}),
								}),
								V("div", {
									className:
										"bg-white dark:bg-gray-800 p-3 rounded-md w-[85%] max-w-sm flex-none snap-start scroll-ml-4 sm:max-w-xs md:scroll-ml-6 md:w-auto md:max-w-none",
									children: $("div", {
										className: "flex flex-col gap-2 h-full",
										children: [
											V("a", {
												target: "_blank",
												rel: "noopener noreferrer",
												href: "https://expo.dev/@moelhaj/expensya",
												style: { backgroundImage: `url(${ew})` },
												className:
													"bg-top bg-no-repeat bg-cover overflow-hidden w-full h-44 md:h-72 rounded-md",
											}),
											V("h1", {
												className: "font-bold text-xl md:text-2xl mt-5",
												children: "Expenses Tracker",
											}),
											V("p", {
												className: "",
												children:
													"Track your finances to know where your money is going.",
											}),
											$("div", {
												className:
													"flex flex-wrap items-center gap-2 text-xs",
												children: [
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "React Native",
													}),
													V("span", {
														className:
															"rounded-md bg-gray-200 dark:bg-gray-900 px-1.5 py-0.5",
														children: "Expo",
													}),
												],
											}),
											V("div", { className: "flex-1" }),
											$("div", {
												className: "mt-5 flex gap-3 md:mt-10",
												children: [
													$("a", {
														target: "_blank",
														rel: "noopener noreferrer",
														href: "https://github.com/moelhaj/expenses-tracker-react-native",
														className:
															"rounded-md bg-indigo-700 text-white hover:bg-indigo-800 duration-300 cursor-pointer px-3 py-1.5 flex gap-2 items-center text-sm",
														children: [V(Gl, { size: 15 }), "GitHub"],
													}),
													$("a", {
														target: "_blank",
														rel: "noopener noreferrer",
														href: "https://expo.dev/@moelhaj/expensya",
														className:
															"rounded-md bg-indigo-700 text-white hover:bg-indigo-800 duration-300 cursor-pointer px-3 py-1.5 flex gap-2 items-center text-sm",
														children: [V(Ef, { size: 15 }), "Demo"],
													}),
												],
											}),
										],
									}),
								}),
							],
						}),
					],
				}),
			}),
		})
	);
}
function uw() {
	return zg().angle === 0
		? $("div", { children: [V(b2, {}), V(aw, {})] })
		: $("div", {
				className:
					"flex h-screen w-screen flex-col items-center justify-center bg-gray-900",
				children: [
					$("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "50",
						height: "50",
						fill: "currentColor",
						className: "bi bi-phone",
						viewBox: "0 0 16 16",
						children: [
							V("path", {
								d: "M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z",
							}),
							V("path", { d: "M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" }),
						],
					}),
					V("p", { children: "Please rotate your device back" }),
				],
		  });
}
_s.createRoot(document.getElementById("root")).render(
	V(rt.StrictMode, { children: V(Dg, { children: V(uw, {}) }) })
);
