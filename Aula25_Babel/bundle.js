function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// https://caniuse.com/ ferramenta pra ver se determinada ferramenta funciona em certos navegadores
// babel serve pra algo funciona em  todos os navegadores
//npm , gerenciador de pacotes (node package manager)
// iniciar : npm init -y
// npm install --save-dev @babel/cli @babel/present-env @babel/core
var nome = "Luiz";
var obj = {
  nome: nome
};
var novoObj = _objectSpread({}, obj);
console.log(novoObj);
// para fazer a tradução do código para as versoes mais antigas
// npx babel NOMEAQUIVO.JS -o NOMEDOARQUIVODESAIDA(normalmente bundle.js) --presets=@babel/env  
// esse preset=@babel/env é o que vai fazer sai o código 
var _chavePrivada = /*#__PURE__*/new WeakMap();
var Controle = /*#__PURE__*/function () {
  function Controle() {
    _classCallCheck(this, Controle);
    _classPrivateFieldInitSpec(this, _chavePrivada, "secreta");
  }
  return _createClass(Controle, [{
    key: "valor",
    get: function get() {
      var _classPrivateFieldGet2;
      return (_classPrivateFieldGet2 = _classPrivateFieldGet(_chavePrivada, this)) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : "vazio";
    }
  }]);
}();
