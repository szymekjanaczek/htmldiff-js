module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(21);
var hasOwn = __webpack_require__(5);
var uid = __webpack_require__(34);
var NATIVE_SYMBOL = __webpack_require__(35);
var USE_SYMBOL_AS_UID = __webpack_require__(36);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var toObject = __webpack_require__(25);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(10);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var definePropertyModule = __webpack_require__(12);
var createPropertyDescriptor = __webpack_require__(31);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(1);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(55);
var requireObjectCoercible = __webpack_require__(13);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(37);
var anObject = __webpack_require__(6);
var toPropertyKey = __webpack_require__(38);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(1);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(6);
var defineProperties = __webpack_require__(59);
var enumBugKeys = __webpack_require__(27);
var hiddenKeys = __webpack_require__(26);
var html = __webpack_require__(69);
var documentCreateElement = __webpack_require__(19);
var sharedKey = __webpack_require__(28);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(1);
var hasOwn = __webpack_require__(5);
var createNonEnumerableProperty = __webpack_require__(9);
var setGlobal = __webpack_require__(24);
var inspectSource = __webpack_require__(43);
var InternalStateModule = __webpack_require__(30);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(46).CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(52);
var DOMTokenListPrototype = __webpack_require__(53);
var ArrayIteratorMethods = __webpack_require__(54);
var createNonEnumerableProperty = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(4);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(10);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(22);
var store = __webpack_require__(23);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(24);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var requireObjectCoercible = __webpack_require__(13);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21);
var uid = __webpack_require__(34);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(70);
var global = __webpack_require__(0);
var uncurryThis = __webpack_require__(2);
var isObject = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(9);
var hasOwn = __webpack_require__(5);
var shared = __webpack_require__(23);
var sharedKey = __webpack_require__(28);
var hiddenKeys = __webpack_require__(26);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(2);
var toString = __webpack_require__(33);
var regexpFlags = __webpack_require__(88);
var stickyHelpers = __webpack_require__(89);
var shared = __webpack_require__(21);
var create = __webpack_require__(15);
var getInternalState = __webpack_require__(30).get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(90);
var UNSUPPORTED_NCG = __webpack_require__(91);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var classof = __webpack_require__(86);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(57);
var fails = __webpack_require__(3);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(35);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var fails = __webpack_require__(3);
var createElement = __webpack_require__(19);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(60);
var isSymbol = __webpack_require__(39);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getBuiltIn = __webpack_require__(14);
var isCallable = __webpack_require__(1);
var isPrototypeOf = __webpack_require__(61);
var USE_SYMBOL_AS_UID = __webpack_require__(36);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(62);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var hasOwn = __webpack_require__(5);
var toIndexedObject = __webpack_require__(11);
var indexOf = __webpack_require__(66).indexOf;
var hiddenKeys = __webpack_require__(26);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(16);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var isCallable = __webpack_require__(1);
var store = __webpack_require__(23);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(45).f;
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(17);
var setGlobal = __webpack_require__(24);
var copyConstructorProperties = __webpack_require__(73);
var isForced = __webpack_require__(77);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var call = __webpack_require__(7);
var propertyIsEnumerableModule = __webpack_require__(72);
var createPropertyDescriptor = __webpack_require__(31);
var toIndexedObject = __webpack_require__(11);
var toPropertyKey = __webpack_require__(38);
var hasOwn = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(37);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var hasOwn = __webpack_require__(5);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(1);
var create = __webpack_require__(15);
var getPrototypeOf = __webpack_require__(48);
var redefine = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(4);
var IS_PURE = __webpack_require__(22);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var hasOwn = __webpack_require__(5);
var isCallable = __webpack_require__(1);
var toObject = __webpack_require__(25);
var sharedKey = __webpack_require__(28);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(79);

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(12).f;
var hasOwn = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(4);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(19);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(11);
var addToUnscopables = __webpack_require__(56);
var Iterators = __webpack_require__(29);
var InternalStateModule = __webpack_require__(30);
var defineIterator = __webpack_require__(71);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var uncurryThis = __webpack_require__(2);
var fails = __webpack_require__(3);
var classof = __webpack_require__(20);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);
var create = __webpack_require__(15);
var definePropertyModule = __webpack_require__(12);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(58);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(14);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var definePropertyModule = __webpack_require__(12);
var anObject = __webpack_require__(6);
var toIndexedObject = __webpack_require__(11);
var objectKeys = __webpack_require__(65);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var call = __webpack_require__(7);
var isObject = __webpack_require__(10);
var isSymbol = __webpack_require__(39);
var getMethod = __webpack_require__(40);
var ordinaryToPrimitive = __webpack_require__(64);
var wellKnownSymbol = __webpack_require__(4);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(1);
var tryToString = __webpack_require__(63);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var call = __webpack_require__(7);
var isCallable = __webpack_require__(1);
var isObject = __webpack_require__(10);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(27);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(11);
var toAbsoluteIndex = __webpack_require__(67);
var lengthOfArrayLike = __webpack_require__(68);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(16);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(42);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(14);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(1);
var inspectSource = __webpack_require__(43);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(44);
var call = __webpack_require__(7);
var IS_PURE = __webpack_require__(22);
var FunctionName = __webpack_require__(46);
var isCallable = __webpack_require__(1);
var createIteratorConstructor = __webpack_require__(78);
var getPrototypeOf = __webpack_require__(48);
var setPrototypeOf = __webpack_require__(80);
var setToStringTag = __webpack_require__(49);
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(4);
var Iterators = __webpack_require__(29);
var IteratorsCore = __webpack_require__(47);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(5);
var ownKeys = __webpack_require__(74);
var getOwnPropertyDescriptorModule = __webpack_require__(45);
var definePropertyModule = __webpack_require__(12);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(14);
var uncurryThis = __webpack_require__(2);
var getOwnPropertyNamesModule = __webpack_require__(75);
var getOwnPropertySymbolsModule = __webpack_require__(76);
var anObject = __webpack_require__(6);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(27);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(47).IteratorPrototype;
var create = __webpack_require__(15);
var createPropertyDescriptor = __webpack_require__(31);
var setToStringTag = __webpack_require__(49);
var Iterators = __webpack_require__(29);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(2);
var anObject = __webpack_require__(6);
var aPossiblePrototype = __webpack_require__(81);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(1);

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(83);
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(2);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(84);
var fails = __webpack_require__(3);
var anObject = __webpack_require__(6);
var isCallable = __webpack_require__(1);
var toIntegerOrInfinity = __webpack_require__(16);
var toLength = __webpack_require__(42);
var toString = __webpack_require__(33);
var requireObjectCoercible = __webpack_require__(13);
var advanceStringIndex = __webpack_require__(92);
var getMethod = __webpack_require__(40);
var getSubstitution = __webpack_require__(94);
var regExpExec = __webpack_require__(95);
var wellKnownSymbol = __webpack_require__(4);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),
/* 83 */
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(85);
var uncurryThis = __webpack_require__(2);
var redefine = __webpack_require__(17);
var regexpExec = __webpack_require__(32);
var fails = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(44);
var exec = __webpack_require__(32);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var TO_STRING_TAG_SUPPORT = __webpack_require__(87);
var isCallable = __webpack_require__(1);
var classofRaw = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(4);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(6);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var global = __webpack_require__(0);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var global = __webpack_require__(0);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var global = __webpack_require__(0);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(93).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var toIntegerOrInfinity = __webpack_require__(16);
var toString = __webpack_require__(33);
var requireObjectCoercible = __webpack_require__(13);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(2);
var toObject = __webpack_require__(25);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var call = __webpack_require__(7);
var anObject = __webpack_require__(6);
var isCallable = __webpack_require__(1);
var classof = __webpack_require__(20);
var regexpExec = __webpack_require__(32);

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(82);

// CONCATENATED MODULE: ./src/Action.js
const Action = {
  equal: 0,
  delete: 1,
  insert: 2,
  none: 3,
  replace: 4
};
/* harmony default export */ var src_Action = (Action);
// CONCATENATED MODULE: ./src/Match.js
class Match {
  constructor(startInOld, startInNew, size) {
    this.startInOld = startInOld;
    this.startInNew = startInNew;
    this.size = size;
  }

  get endInOld() {
    return this.startInOld + this.size;
  }

  get endInNew() {
    return this.startInNew + this.size;
  }

}
// CONCATENATED MODULE: ./src/MatchOptions.js
class MatchOptions {
  constructor() {
    this.blockSize = 0;
    this.repeatingWordsAccuracy = 0.0;
    this.ignoreWhitespaceDifferences = false;
  }

}
// CONCATENATED MODULE: ./src/Utils.js
const tagRegex = /^\s*<\/?[^>]+>\s*$/;
const tagWordRegex = /<[^\s>]+/;
const whitespaceRegex = /^(\s|&nbsp;)+$/;
const wordRegex = /(?:[\w\d#@þæðöøóòôõáàåäãúùůüûíïýỳÿéèêßçñ,.])+/i;
const specialCaseWordTags = ["<img"];

function isTag(item) {
  if (specialCaseWordTags.some(re => item !== null && item.startsWith(re))) {
    return false;
  }

  return tagRegex.test(item);
}

function stripTagAttributes(word) {
  let tag = tagWordRegex.exec(word)[0];
  word = tag + (word.endsWith("/>") ? "/>" : ">");
  return word;
}

function wrapText(text, tagName, cssClass) {
  return ["<", tagName, ' class="', cssClass, '">', text, "</", tagName, ">"].join("");
}

function isStartOfTag(val) {
  return val === "<";
}

function isEndOfTag(val) {
  return val === ">";
}

function isStartOfEntity(val) {
  return val === "&";
}

function isEndOfEntity(val) {
  return val === ";";
}

function isWhiteSpace(value) {
  return whitespaceRegex.test(value);
}

function stripAnyAttributes(word) {
  if (isTag(word)) {
    return stripTagAttributes(word);
  }

  return word;
}

function isWord(text) {
  return wordRegex.test(text);
}


// CONCATENATED MODULE: ./src/MatchFinder.js





function putNewWord(block, word, blockSize) {
  block.push(word);

  if (block.length > blockSize) {
    block.shift();
  }

  if (block.length !== blockSize) {
    return null;
  }

  return block.join("");
}

class MatchFinder_MatchFinder {
  constructor(oldWords, newWords, startInOld, endInOld, startInNew, endInNew, options) {
    this.oldWords = oldWords;
    this.newWords = newWords;
    this.startInOld = startInOld;
    this.endInOld = endInOld;
    this.startInNew = startInNew;
    this.endInNew = endInNew;
    this.options = options;
  }

  indexNewWords() {
    this.wordIndices = new Map();
    let block = [];

    for (let i = this.startInNew; i < this.endInNew; i++) {
      let word = this.normalizeForIndex(this.newWords[i]);
      let key = putNewWord(block, word, this.options.blockSize);

      if (key === null) {
        continue;
      }

      if (this.wordIndices.has(key)) {
        this.wordIndices.get(key).push(i);
      } else {
        this.wordIndices.set(key, [i]);
      }
    }
  }

  normalizeForIndex(word) {
    word = stripAnyAttributes(word);

    if (this.options.IgnoreWhiteSpaceDifferences && isWhiteSpace(word)) {
      return " ";
    }

    return word;
  }

  findMatch() {
    this.indexNewWords();
    this.removeRepeatingWords();

    if (this.wordIndices.length === 0) {
      return null;
    }

    let bestMatchInOld = this.startInOld;
    let bestMatchInNew = this.startInNew;
    let bestMatchSize = 0;
    let matchLengthAt = new Map();
    const blockSize = this.options.blockSize;
    let block = [];

    for (let indexInOld = this.startInOld; indexInOld < this.endInOld; indexInOld++) {
      let word = this.normalizeForIndex(this.oldWords[indexInOld]);
      let index = putNewWord(block, word, blockSize);

      if (index === null) {
        continue;
      }

      let newMatchLengthAt = new Map();

      if (!this.wordIndices.has(index)) {
        matchLengthAt = newMatchLengthAt;
        continue;
      }

      for (let indexInNew of this.wordIndices.get(index)) {
        let newMatchLength = (matchLengthAt.has(indexInNew - 1) ? matchLengthAt.get(indexInNew - 1) : 0) + 1;
        newMatchLengthAt.set(indexInNew, newMatchLength);

        if (newMatchLength > bestMatchSize) {
          bestMatchInOld = indexInOld - newMatchLength - blockSize + 2;
          bestMatchInNew = indexInNew - newMatchLength - blockSize + 2;
          bestMatchSize = newMatchLength;
        }
      }

      matchLengthAt = newMatchLengthAt;
    }

    return bestMatchSize !== 0 ? new Match(bestMatchInOld, bestMatchInNew, bestMatchSize + blockSize - 1) : null;
  }

  removeRepeatingWords() {
    let threshold = this.newWords.length + this.options.repeatingWordsAccuracy;
    let repeatingWords = Array.from(this.wordIndices.entries()).filter(i => i[1].length > threshold).map(i => i[0]);

    for (let w of repeatingWords) {
      this.wordIndices.delete(w);
    }
  }

}
// CONCATENATED MODULE: ./src/Operation.js
class Operation {
  constructor(action, startInOld, endInOld, startInNew, endInNew) {
    this.action = action;
    this.startInOld = startInOld;
    this.endInOld = endInOld;
    this.startInNew = startInNew;
    this.endInNew = endInNew;
  }

}
// CONCATENATED MODULE: ./src/Mode.js
const Mode = {
  character: 0,
  tag: 1,
  whitespace: 2,
  entity: 3
};
/* harmony default export */ var src_Mode = (Mode);
// CONCATENATED MODULE: ./src/WordSplitter.js




function convertHtmlToListOfWords(text, blockExpressions) {
  let state = {
    mode: src_Mode.character,
    currentWord: [],
    words: []
  };
  let blockLocations = findBlocks(text, blockExpressions);
  let isBlockCheckRequired = !!blockLocations.size;
  let isGrouping = false;
  let groupingUntil = -1;

  for (let i = 0; i < text.length; i++) {
    var character = text[i];

    if (isBlockCheckRequired) {
      if (groupingUntil === index) {
        groupingUntil = -1;
        isGrouping = false;
      }

      let until = 0;

      if (blockLocations.has(index)) {
        until = blockLocations.get(index);
        isGrouping = true;
        groupingUntil = until;
      }

      if (isGrouping) {
        state.currentWord.push(character);
        state.mode = src_Mode.character;
        continue;
      }
    }

    switch (state.mode) {
      case src_Mode.character:
        if (isStartOfTag(character)) {
          addClearWordSwitchMode(state, "<", src_Mode.tag);
        } else if (isStartOfEntity(character)) {
          addClearWordSwitchMode(state, character, src_Mode.entity);
        } else if (isWhiteSpace(character)) {
          addClearWordSwitchMode(state, character, src_Mode.whitespace);
        } else if (/[,.]/.test(character) && (isWhiteSpace(text[i + 1]) || text[i + 1] === undefined)) {
          addClearWordSwitchMode(state, character, src_Mode.character);
        } else if (isWord(character) && (state.currentWord.length === 0 || isWord(state.currentWord[state.currentWord.length - 1]))) {
          state.currentWord.push(character);
        } else {
          addClearWordSwitchMode(state, character, src_Mode.character);
        }

        break;

      case src_Mode.tag:
        if (isEndOfTag(character)) {
          state.currentWord.push(character);
          state.words.push(state.currentWord.join(""));
          state.currentWord = [];
          state.mode = isWhiteSpace(character) ? src_Mode.whitespace : src_Mode.character;
        } else {
          state.currentWord.push(character);
        }

        break;

      case src_Mode.whitespace:
        if (isStartOfTag(character)) {
          addClearWordSwitchMode(state, character, src_Mode.tag);
        } else if (isStartOfEntity(character)) {
          addClearWordSwitchMode(state, character, src_Mode.entity);
        } else if (isWhiteSpace(character)) {
          state.currentWord.push(character);
        } else {
          addClearWordSwitchMode(state, character, src_Mode.character);
        }

        break;

      case src_Mode.entity:
        if (isStartOfTag(character)) {
          addClearWordSwitchMode(state, character, src_Mode.tag);
        } else if (isWhiteSpace(character)) {
          addClearWordSwitchMode(state, character, src_Mode.whitespace);
        } else if (isEndOfEntity(character)) {
          let switchToNextMode = true;

          if (state.currentWord.length !== 0) {
            state.currentWord.push(character);
            state.words.push(state.currentWord.join(""));

            if (state.words.length > 2 && isWhiteSpace(state.words[state.words.length - 2]) && isWhiteSpace(state.words[state.words.length - 1])) {
              let w1 = state.words[state.words.length - 2];
              let w2 = state.words[state.words.length - 1];
              state.words.splice(state.words.length - 2, 2);
              state.currentWord = [(w1 + w2).split()];
              state.mode = src_Mode.whitespace;
              switchToNextMode = false;
            }
          }

          if (switchToNextMode) {
            state.currentWord = [];
            state.mode = src_Mode.character;
          }
        } else if (isWord(character)) {
          state.currentWord.push(character);
        } else {
          addClearWordSwitchMode(state, character, src_Mode.character);
        }

        break;
    }
  }

  if (state.currentWord.length !== 0) {
    state.words.push(state.currentWord.join(""));
  }

  return state.words;
}

function addClearWordSwitchMode(state, character, mode) {
  if (state.currentWord.length !== 0) {
    state.words.push(state.currentWord.join(""));
  }

  state.currentWord = [character];
  state.mode = mode;
}

function findBlocks(text, blockExpressions) {
  let blockLocations = new Map();

  if (blockExpressions === null) {
    return blockLocations;
  }

  for (let exp of blockExpressions) {
    let m;

    while ((m = exp.exec(text)) !== null) {
      if (blockLocations.has(m.index)) {
        throw new Error("One or more block expressions result in a text sequence that overlaps. Current expression: " + exp.toString());
      }

      blockLocations.set(m.index, m.index + m[0].length);
    }
  }

  return blockLocations;
}


// CONCATENATED MODULE: ./src/Diff.js









const MatchGranuarityMaximum = 4;
const specialCaseClosingTags = new Map([["</strong>", 0], ["</em>", 0], ["</b>", 0], ["</i>", 0], ["</big>", 0], ["</small>", 0], ["</u>", 0], ["</sub>", 0], ["</strike>", 0], ["</s>", 0], ["</dfn>", 0]]);
const specialCaseOpeningTagRegex = /<((strong)|(b)|(i)|(dfn)|(em)|(big)|(small)|(u)|(sub)|(sup)|(strike)|(s))[\>\s]+/gi;

class Diff_HtmlDiff {
  constructor(oldText, newText) {
    this.content = [];
    this.newText = newText.normalize("NFC");
    this.oldText = oldText.normalize("NFC");
    this.specialTagDiffStack = [];
    this.newWords = [];
    this.oldWords = [];
    this.matchGranularity = 0;
    this.blockExpressions = [];
    this.repeatingWordsAccuracy = 1.0;
    this.ignoreWhiteSpaceDifferences = false;
    this.orphanMatchThreshold = 0.0;
  }

  build() {
    if (this.oldText === this.newText) {
      return this.newText;
    }

    this.splitInputsIntoWords();
    this.matchGranularity = Math.min(MatchGranuarityMaximum, this.oldWords.length, this.newWords.length);
    let operations = this.operations();

    for (let item of operations) {
      this.performOperation(item);
    }

    return this.content.join("");
  }

  addBlockExpression(exp) {
    this.blockExpressions.push(exp);
  }

  splitInputsIntoWords() {
    this.oldWords = convertHtmlToListOfWords(this.oldText, this.blockExpressions);
    this.oldText = null;
    this.newWords = convertHtmlToListOfWords(this.newText, this.blockExpressions);
    this.newText = null;
  }

  performOperation(opp) {
    switch (opp.action) {
      case src_Action.equal:
        this.processEqualOperation(opp);
        break;

      case src_Action.delete:
        this.processDeleteOperation(opp, "diffdel");
        break;

      case src_Action.insert:
        this.processInsertOperation(opp, "diffins");
        break;

      case src_Action.none:
        break;

      case src_Action.replace:
        this.processReplaceOperation(opp);
        break;
    }
  }

  processReplaceOperation(opp) {
    this.processDeleteOperation(opp, "diffmod");
    this.processInsertOperation(opp, "diffmod");
  }

  processInsertOperation(opp, cssClass) {
    let text = this.newWords.filter((s, pos) => pos >= opp.startInNew && pos < opp.endInNew);
    this.insertTag("ins", cssClass, text);
  }

  processDeleteOperation(opp, cssClass) {
    let text = this.oldWords.filter((s, pos) => pos >= opp.startInOld && pos < opp.endInOld);
    this.insertTag("del", cssClass, text);
  }

  processEqualOperation(opp) {
    let result = this.newWords.filter((s, pos) => pos >= opp.startInNew && pos < opp.endInNew);
    this.content.push(result.join(""));
  }

  insertTag(tag, cssClass, words) {
    while (words.length) {
      let nonTags = this.extractConsecutiveWords(words, x => !isTag(x));
      let specialCaseTagInjection = "";
      let specialCaseTagInjectionIsbefore = false;

      if (nonTags.length !== 0) {
        let text = wrapText(nonTags.join(""), tag, cssClass);
        this.content.push(text);
      } else {
        if (specialCaseOpeningTagRegex.test(words[0])) {
          let matchedTag = words[0].match(specialCaseOpeningTagRegex);
          matchedTag = "<" + matchedTag[0].replace(/(<|>| )/g, "") + ">";
          this.specialTagDiffStack.push(matchedTag);
          specialCaseTagInjection = '<ins class="mod">';

          if (tag === "del") {
            words.shift();

            while (words.length > 0 && specialCaseOpeningTagRegex.test(words[0])) {
              words.shift();
            }
          }
        } else if (specialCaseClosingTags.has(words[0])) {
          let openingTag = this.specialTagDiffStack.length === 0 ? null : this.specialTagDiffStack.pop();

          if (openingTag === null || openingTag !== words[words.length - 1].replace(/\//g, "")) {} else {
            specialCaseTagInjection = "</ins>";
            specialCaseTagInjectionIsbefore = true;
          }

          if (tag === "del") {
            words.shift();

            while (words.length > 0 && specialCaseClosingTags.has(words[0])) {
              words.shift();
            }
          }
        }

        if (words.length === 0 && specialCaseTagInjection.length === 0) {
          break;
        }

        if (specialCaseTagInjectionIsbefore) {
          this.content.push(specialCaseTagInjection + this.extractConsecutiveWords(words, isTag).join(""));
        } else {
          this.content.push(this.extractConsecutiveWords(words, isTag).join("") + specialCaseTagInjection);
        }
      }
    }
  }

  extractConsecutiveWords(words, condition) {
    let indexOfFirstTag = null;

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (i === 0 && word === " ") {
        words[i] = "&nbsp;";
      }

      if (!condition(word)) {
        indexOfFirstTag = i;
        break;
      }
    }

    if (indexOfFirstTag !== null) {
      let items = words.filter((s, pos) => pos >= 0 && pos < indexOfFirstTag);

      if (indexOfFirstTag > 0) {
        words.splice(0, indexOfFirstTag);
      }

      return items;
    } else {
      let items = words.filter((s, pos) => pos >= 0 && pos < words.length);
      words.splice(0, words.length);
      return items;
    }
  }

  operations() {
    let positionInOld = 0;
    let positionInNew = 0;
    let operations = [];
    let matches = this.matchingBlocks();
    matches.push(new Match(this.oldWords.length, this.newWords.length, 0));
    let matchesWithoutOrphans = this.removeOrphans(matches);

    for (let match of matchesWithoutOrphans) {
      let matchStartsAtCurrentPositionInOld = positionInOld === match.startInOld;
      let matchStartsAtCurrentPositionInNew = positionInNew === match.startInNew;
      let action;

      if (!matchStartsAtCurrentPositionInOld && !matchStartsAtCurrentPositionInNew) {
        action = src_Action.replace;
      } else if (matchStartsAtCurrentPositionInOld && !matchStartsAtCurrentPositionInNew) {
        action = src_Action.insert;
      } else if (!matchStartsAtCurrentPositionInOld) {
        action = src_Action.delete;
      } else {
        action = src_Action.none;
      }

      if (action !== src_Action.none) {
        operations.push(new Operation(action, positionInOld, match.startInOld, positionInNew, match.startInNew));
      }

      if (match.length !== 0) {
        operations.push(new Operation(src_Action.equal, match.startInOld, match.endInOld, match.startInNew, match.endInNew));
      }

      positionInOld = match.endInOld;
      positionInNew = match.endInNew;
    }

    return operations;
  }

  *removeOrphans(matches) {
    let prev = null;
    let curr = null;

    for (let next of matches) {
      if (curr === null) {
        prev = new Match(0, 0, 0);
        curr = next;
        continue;
      }

      if (prev.endInOld === curr.startInOld && prev.endInNew === curr.startInNew || curr.endInOld === next.startInOld && curr.endInNew === next.startInNew) {
        yield curr;
        let tmp = prev = curr;
        curr = next;
        continue;
      }

      let sumLength = (t, n) => t + n.length;

      let oldDistanceInChars = this.oldWords.slice(prev.endInOld, next.startInOld).reduce(sumLength, 0);
      let newDistanceInChars = this.newWords.slice(prev.endInNew, next.startInNew).reduce(sumLength, 0);
      let currMatchLengthInChars = this.newWords.slice(curr.startInNew, curr.endInNew).reduce(sumLength, 0);

      if (currMatchLengthInChars > Math.max(oldDistanceInChars, newDistanceInChars) * this.orphanMatchThreshold) {
        yield curr;
      }

      prev = curr;
      curr = next;
    }

    yield curr;
  }

  matchingBlocks() {
    let matchingBlocks = [];
    this.findMatchingBlocks(0, this.oldWords.length, 0, this.newWords.length, matchingBlocks);
    return matchingBlocks;
  }

  findMatchingBlocks(startInOld, endInOld, startInNew, endInNew, matchingBlocks) {
    let match = this.findMatch(startInOld, endInOld, startInNew, endInNew);

    if (match !== null) {
      if (startInOld < match.startInOld && startInNew < match.startInNew) {
        this.findMatchingBlocks(startInOld, match.startInOld, startInNew, match.startInNew, matchingBlocks);
      }

      matchingBlocks.push(match);

      if (match.endInOld < endInOld && match.endInNew < endInNew) {
        this.findMatchingBlocks(match.endInOld, endInOld, match.endInNew, endInNew, matchingBlocks);
      }
    }
  }

  findMatch(startInOld, endInOld, startInNew, endInNew) {
    for (let i = this.matchGranularity; i > 0; i--) {
      let options = new MatchOptions();
      options.blockSize = i;
      options.repeatingWordsAccuracy = this.repeatingWordsAccuracy;
      options.ignoreWhitespaceDifferences = this.ignoreWhiteSpaceDifferences;
      let finder = new MatchFinder_MatchFinder(this.oldWords, this.newWords, startInOld, endInOld, startInNew, endInNew, options);
      let match = finder.findMatch();

      if (match !== null) {
        return match;
      }
    }

    return null;
  }

}

Diff_HtmlDiff.execute = function (oldText, newText) {
  return new Diff_HtmlDiff(oldText, newText).build();
};

/* harmony default export */ var Diff = __webpack_exports__["default"] = (Diff_HtmlDiff);

/***/ })
/******/ ]);