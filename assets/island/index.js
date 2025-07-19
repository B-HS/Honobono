var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
      oldElement._store && (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null,
      recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    deprecatedAPIs = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function(size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$0) {
                  ReactSharedInternals.thrownErrors.push(error$0);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function() {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return getCurrentStack === null ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props, element._debugStack, element._debugTask);
      for (key = 2;key < arguments.length; key++)
        owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      for (var i = 2;i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      node && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(type, node, undefined, undefined, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      type == null && console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
      create == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      var dispatcher = resolveDispatcher();
      if (typeof update === "function")
        throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      create == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      create == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development(), 1);
  if (false) {} else {
    module.exports = react_development;
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
      var children = config.children;
      if (children !== undefined)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
      typeof node === "object" && node !== null && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
  })();
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS((exports, module) => {
  var react_jsx_dev_runtime_development = __toESM(require_react_jsx_dev_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_dev_runtime_development;
  }
});

// island/counter.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Counter = () => {
  const [count, setCount] = import_react.useState(0);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
        onClick: () => setCount(count + 1),
        children: "Click me"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
        children: [
          "Count: ",
          count
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
// island/index.ts
var exports_island = {};
__export(exports_island, {
  Counter: () => Counter
});
export {
  Counter
};

//# debugId=EBFEEE0CEC619F0764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsICIuLi8uLi9pc2xhbmQvY291bnRlci50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIE1ldGEgUGxhdGZvcm1zLCBJbmMuIGFuZCBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXNcIixcbiAgICAgICAgICAgIGluZm9bMF0sXG4gICAgICAgICAgICBpbmZvWzFdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgICAgaWYgKG51bGwgPT09IG1heWJlSXRlcmFibGUgfHwgXCJvYmplY3RcIiAhPT0gdHlwZW9mIG1heWJlSXRlcmFibGUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgbWF5YmVJdGVyYWJsZSA9XG4gICAgICAgIChNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdKSB8fFxuICAgICAgICBtYXliZUl0ZXJhYmxlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBtYXliZUl0ZXJhYmxlID8gbWF5YmVJdGVyYWJsZSA6IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gICAgICBwdWJsaWNJbnN0YW5jZSA9XG4gICAgICAgICgocHVibGljSW5zdGFuY2UgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcikgJiZcbiAgICAgICAgICAocHVibGljSW5zdGFuY2UuZGlzcGxheU5hbWUgfHwgcHVibGljSW5zdGFuY2UubmFtZSkpIHx8XG4gICAgICAgIFwiUmVhY3RDbGFzc1wiO1xuICAgICAgdmFyIHdhcm5pbmdLZXkgPSBwdWJsaWNJbnN0YW5jZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcbiAgICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSB8fFxuICAgICAgICAoY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFRoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uIEluc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCBjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuXCIsXG4gICAgICAgICAgY2FsbGVyTmFtZSxcbiAgICAgICAgICBwdWJsaWNJbnN0YW5jZVxuICAgICAgICApLFxuICAgICAgICAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gITApKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG4gICAgZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICEwO1xuICAgICAgfVxuICAgICAgaWYgKEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCkge1xuICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSBjb25zb2xlO1xuICAgICAgICB2YXIgSlNDb21waWxlcl90ZW1wX2NvbnN0ID0gSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0LmVycm9yO1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0JGpzY29tcCQwID1cbiAgICAgICAgICAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgU3ltYm9sICYmXG4gICAgICAgICAgICBTeW1ib2wudG9TdHJpbmdUYWcgJiZcbiAgICAgICAgICAgIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10pIHx8XG4gICAgICAgICAgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fFxuICAgICAgICAgIFwiT2JqZWN0XCI7XG4gICAgICAgIEpTQ29tcGlsZXJfdGVtcF9jb25zdC5jYWxsKFxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCxcbiAgICAgICAgICBcIlRoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4gVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIHVzaW5nIGl0IGhlcmUuXCIsXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0JGpzY29tcCQwXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICAgICAgaWYgKG51bGwgPT0gdHlwZSkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdHlwZSlcbiAgICAgICAgcmV0dXJuIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0VcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGUpIHJldHVybiB0eXBlO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJGcmFnbWVudFwiO1xuICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiUHJvZmlsZXJcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN0cmljdE1vZGVcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN1c3BlbnNlXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN1c3BlbnNlTGlzdFwiO1xuICAgICAgICBjYXNlIFJFQUNUX0FDVElWSVRZX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiQWN0aXZpdHlcIjtcbiAgICAgIH1cbiAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSlcbiAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAoXCJudW1iZXJcIiA9PT0gdHlwZW9mIHR5cGUudGFnICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgdHlwZS4kJHR5cGVvZilcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiBcIlBvcnRhbFwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuICh0eXBlLmRpc3BsYXlOYW1lIHx8IFwiQ29udGV4dFwiKSArIFwiLlByb3ZpZGVyXCI7XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05TVU1FUl9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuICh0eXBlLl9jb250ZXh0LmRpc3BsYXlOYW1lIHx8IFwiQ29udGV4dFwiKSArIFwiLkNvbnN1bWVyXCI7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgdmFyIGlubmVyVHlwZSA9IHR5cGUucmVuZGVyO1xuICAgICAgICAgICAgdHlwZSA9IHR5cGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICB0eXBlIHx8XG4gICAgICAgICAgICAgICgodHlwZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCBcIlwiKSxcbiAgICAgICAgICAgICAgKHR5cGUgPSBcIlwiICE9PSB0eXBlID8gXCJGb3J3YXJkUmVmKFwiICsgdHlwZSArIFwiKVwiIDogXCJGb3J3YXJkUmVmXCIpKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgKGlubmVyVHlwZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbCksXG4gICAgICAgICAgICAgIG51bGwgIT09IGlubmVyVHlwZVxuICAgICAgICAgICAgICAgID8gaW5uZXJUeXBlXG4gICAgICAgICAgICAgICAgOiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCBcIk1lbW9cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgIGlubmVyVHlwZSA9IHR5cGUuX3BheWxvYWQ7XG4gICAgICAgICAgICB0eXBlID0gdHlwZS5faW5pdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZShpbm5lclR5cGUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUYXNrTmFtZSh0eXBlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkgcmV0dXJuIFwiPD5cIjtcbiAgICAgIGlmIChcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUgJiZcbiAgICAgICAgbnVsbCAhPT0gdHlwZSAmJlxuICAgICAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEVcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIFwiPC4uLj5cIjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICByZXR1cm4gbmFtZSA/IFwiPFwiICsgbmFtZSArIFwiPlwiIDogXCI8Li4uPlwiO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gXCI8Li4uPlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRPd25lcigpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuQTtcbiAgICAgIHJldHVybiBudWxsID09PSBkaXNwYXRjaGVyID8gbnVsbCA6IGRpc3BhdGNoZXIuZ2V0T3duZXIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVW5rbm93bk93bmVyKCkge1xuICAgICAgcmV0dXJuIEVycm9yKFwicmVhY3Qtc3RhY2stdG9wLWZyYW1lXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgXCJrZXlcIikpIHtcbiAgICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCBcImtleVwiKS5nZXQ7XG4gICAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSByZXR1cm4gITE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSBjb25maWcua2V5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgICAgIGZ1bmN0aW9uIHdhcm5BYm91dEFjY2Vzc2luZ0tleSgpIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gfHxcbiAgICAgICAgICAoKHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gITApLFxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIiVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgdmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCBwcm9wLiAoaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9zcGVjaWFsLXByb3BzKVwiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICApKTtcbiAgICAgIH1cbiAgICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9ICEwO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCBcImtleVwiLCB7XG4gICAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZWxlbWVudFJlZkdldHRlcldpdGhEZXByZWNhdGlvbldhcm5pbmcoKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0aGlzLnR5cGUpO1xuICAgICAgZGlkV2FybkFib3V0RWxlbWVudFJlZltjb21wb25lbnROYW1lXSB8fFxuICAgICAgICAoKGRpZFdhcm5BYm91dEVsZW1lbnRSZWZbY29tcG9uZW50TmFtZV0gPSAhMCksXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJBY2Nlc3NpbmcgZWxlbWVudC5yZWYgd2FzIHJlbW92ZWQgaW4gUmVhY3QgMTkuIHJlZiBpcyBub3cgYSByZWd1bGFyIHByb3AuIEl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBKU1ggRWxlbWVudCB0eXBlIGluIGEgZnV0dXJlIHJlbGVhc2UuXCJcbiAgICAgICAgKSk7XG4gICAgICBjb21wb25lbnROYW1lID0gdGhpcy5wcm9wcy5yZWY7XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSBjb21wb25lbnROYW1lID8gY29tcG9uZW50TmFtZSA6IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWN0RWxlbWVudChcbiAgICAgIHR5cGUsXG4gICAgICBrZXksXG4gICAgICBzZWxmLFxuICAgICAgc291cmNlLFxuICAgICAgb3duZXIsXG4gICAgICBwcm9wcyxcbiAgICAgIGRlYnVnU3RhY2ssXG4gICAgICBkZWJ1Z1Rhc2tcbiAgICApIHtcbiAgICAgIHNlbGYgPSBwcm9wcy5yZWY7XG4gICAgICB0eXBlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICBfb3duZXI6IG93bmVyXG4gICAgICB9O1xuICAgICAgbnVsbCAhPT0gKHZvaWQgMCAhPT0gc2VsZiA/IHNlbGYgOiBudWxsKVxuICAgICAgICA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgIGdldDogZWxlbWVudFJlZkdldHRlcldpdGhEZXByZWNhdGlvbldhcm5pbmdcbiAgICAgICAgICB9KVxuICAgICAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7IGVudW1lcmFibGU6ICExLCB2YWx1ZTogbnVsbCB9KTtcbiAgICAgIHR5cGUuX3N0b3JlID0ge307XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZS5fc3RvcmUsIFwidmFsaWRhdGVkXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnSW5mb1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIl9kZWJ1Z1N0YWNrXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGRlYnVnU3RhY2tcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnVGFza1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBkZWJ1Z1Rhc2tcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmZyZWV6ZSAmJiAoT2JqZWN0LmZyZWV6ZSh0eXBlLnByb3BzKSwgT2JqZWN0LmZyZWV6ZSh0eXBlKSk7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICAgICAgbmV3S2V5ID0gUmVhY3RFbGVtZW50KFxuICAgICAgICBvbGRFbGVtZW50LnR5cGUsXG4gICAgICAgIG5ld0tleSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIG9sZEVsZW1lbnQuX293bmVyLFxuICAgICAgICBvbGRFbGVtZW50LnByb3BzLFxuICAgICAgICBvbGRFbGVtZW50Ll9kZWJ1Z1N0YWNrLFxuICAgICAgICBvbGRFbGVtZW50Ll9kZWJ1Z1Rhc2tcbiAgICAgICk7XG4gICAgICBvbGRFbGVtZW50Ll9zdG9yZSAmJlxuICAgICAgICAobmV3S2V5Ll9zdG9yZS52YWxpZGF0ZWQgPSBvbGRFbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQpO1xuICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2Ygb2JqZWN0ICYmXG4gICAgICAgIG51bGwgIT09IG9iamVjdCAmJlxuICAgICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICAgICAgdmFyIGVzY2FwZXJMb29rdXAgPSB7IFwiPVwiOiBcIj0wXCIsIFwiOlwiOiBcIj0yXCIgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFwiJFwiICtcbiAgICAgICAga2V5LnJlcGxhY2UoL1s9Ol0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlbGVtZW50ICYmXG4gICAgICAgIG51bGwgIT09IGVsZW1lbnQgJiZcbiAgICAgICAgbnVsbCAhPSBlbGVtZW50LmtleVxuICAgICAgICA/IChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGVsZW1lbnQua2V5KSwgZXNjYXBlKFwiXCIgKyBlbGVtZW50LmtleSkpXG4gICAgICAgIDogaW5kZXgudG9TdHJpbmcoMzYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wJDEoKSB7fVxuICAgIGZ1bmN0aW9uIHJlc29sdmVUaGVuYWJsZSh0aGVuYWJsZSkge1xuICAgICAgc3dpdGNoICh0aGVuYWJsZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBcImZ1bGZpbGxlZFwiOlxuICAgICAgICAgIHJldHVybiB0aGVuYWJsZS52YWx1ZTtcbiAgICAgICAgY2FzZSBcInJlamVjdGVkXCI6XG4gICAgICAgICAgdGhyb3cgdGhlbmFibGUucmVhc29uO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHRoZW5hYmxlLnN0YXR1c1xuICAgICAgICAgICAgICA/IHRoZW5hYmxlLnRoZW4obm9vcCQxLCBub29wJDEpXG4gICAgICAgICAgICAgIDogKCh0aGVuYWJsZS5zdGF0dXMgPSBcInBlbmRpbmdcIiksXG4gICAgICAgICAgICAgICAgdGhlbmFibGUudGhlbihcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmdWxmaWxsZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBcInBlbmRpbmdcIiA9PT0gdGhlbmFibGUuc3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCh0aGVuYWJsZS5zdGF0dXMgPSBcImZ1bGZpbGxlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAodGhlbmFibGUudmFsdWUgPSBmdWxmaWxsZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBcInBlbmRpbmdcIiA9PT0gdGhlbmFibGUuc3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCh0aGVuYWJsZS5zdGF0dXMgPSBcInJlamVjdGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICh0aGVuYWJsZS5yZWFzb24gPSBlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgdGhlbmFibGUuc3RhdHVzKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2FzZSBcImZ1bGZpbGxlZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gdGhlbmFibGUudmFsdWU7XG4gICAgICAgICAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgICAgICAgICAgdGhyb3cgdGhlbmFibGUucmVhc29uO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IHRoZW5hYmxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcbiAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlIHx8IFwiYm9vbGVhblwiID09PSB0eXBlKSBjaGlsZHJlbiA9IG51bGw7XG4gICAgICB2YXIgaW52b2tlQ2FsbGJhY2sgPSAhMTtcbiAgICAgIGlmIChudWxsID09PSBjaGlsZHJlbikgaW52b2tlQ2FsbGJhY2sgPSAhMDtcbiAgICAgIGVsc2VcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrID0gY2hpbGRyZW4uX2luaXQpLFxuICAgICAgICAgICAgICAgICAgbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjayhjaGlsZHJlbi5fcGF5bG9hZCksXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gY2hpbGRyZW47XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2soaW52b2tlQ2FsbGJhY2spO1xuICAgICAgICB2YXIgY2hpbGRLZXkgPVxuICAgICAgICAgIFwiXCIgPT09IG5hbWVTb0ZhciA/IFwiLlwiICsgZ2V0RWxlbWVudEtleShpbnZva2VDYWxsYmFjaywgMCkgOiBuYW1lU29GYXI7XG4gICAgICAgIGlzQXJyYXlJbXBsKGNhbGxiYWNrKVxuICAgICAgICAgID8gKChlc2NhcGVkUHJlZml4ID0gXCJcIiksXG4gICAgICAgICAgICBudWxsICE9IGNoaWxkS2V5ICYmXG4gICAgICAgICAgICAgIChlc2NhcGVkUHJlZml4ID1cbiAgICAgICAgICAgICAgICBjaGlsZEtleS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCBcIiQmL1wiKSArIFwiL1wiKSxcbiAgICAgICAgICAgIG1hcEludG9BcnJheShjYWxsYmFjaywgYXJyYXksIGVzY2FwZWRQcmVmaXgsIFwiXCIsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgOiBudWxsICE9IGNhbGxiYWNrICYmXG4gICAgICAgICAgICAoaXNWYWxpZEVsZW1lbnQoY2FsbGJhY2spICYmXG4gICAgICAgICAgICAgIChudWxsICE9IGNhbGxiYWNrLmtleSAmJlxuICAgICAgICAgICAgICAgICgoaW52b2tlQ2FsbGJhY2sgJiYgaW52b2tlQ2FsbGJhY2sua2V5ID09PSBjYWxsYmFjay5rZXkpIHx8XG4gICAgICAgICAgICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNhbGxiYWNrLmtleSkpLFxuICAgICAgICAgICAgICAoZXNjYXBlZFByZWZpeCA9IGNsb25lQW5kUmVwbGFjZUtleShcbiAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4ICtcbiAgICAgICAgICAgICAgICAgIChudWxsID09IGNhbGxiYWNrLmtleSB8fFxuICAgICAgICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrICYmIGludm9rZUNhbGxiYWNrLmtleSA9PT0gY2FsbGJhY2sua2V5KVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiAoXCJcIiArIGNhbGxiYWNrLmtleSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIkJi9cIlxuICAgICAgICAgICAgICAgICAgICAgICkgKyBcIi9cIikgK1xuICAgICAgICAgICAgICAgICAgY2hpbGRLZXlcbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgIFwiXCIgIT09IG5hbWVTb0ZhciAmJlxuICAgICAgICAgICAgICAgIG51bGwgIT0gaW52b2tlQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgICBpc1ZhbGlkRWxlbWVudChpbnZva2VDYWxsYmFjaykgJiZcbiAgICAgICAgICAgICAgICBudWxsID09IGludm9rZUNhbGxiYWNrLmtleSAmJlxuICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrLl9zdG9yZSAmJlxuICAgICAgICAgICAgICAgICFpbnZva2VDYWxsYmFjay5fc3RvcmUudmFsaWRhdGVkICYmXG4gICAgICAgICAgICAgICAgKGVzY2FwZWRQcmVmaXguX3N0b3JlLnZhbGlkYXRlZCA9IDIpLFxuICAgICAgICAgICAgICAoY2FsbGJhY2sgPSBlc2NhcGVkUHJlZml4KSksXG4gICAgICAgICAgICBhcnJheS5wdXNoKGNhbGxiYWNrKSk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaW52b2tlQ2FsbGJhY2sgPSAwO1xuICAgICAgY2hpbGRLZXkgPSBcIlwiID09PSBuYW1lU29GYXIgPyBcIi5cIiA6IG5hbWVTb0ZhciArIFwiOlwiO1xuICAgICAgaWYgKGlzQXJyYXlJbXBsKGNoaWxkcmVuKSlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcbiAgICAgICAgICAobmFtZVNvRmFyID0gY2hpbGRyZW5baV0pLFxuICAgICAgICAgICAgKHR5cGUgPSBjaGlsZEtleSArIGdldEVsZW1lbnRLZXkobmFtZVNvRmFyLCBpKSksXG4gICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgKz0gbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICAgKSk7XG4gICAgICBlbHNlIGlmICgoKGkgPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKSksIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGkpKVxuICAgICAgICBmb3IgKFxuICAgICAgICAgIGkgPT09IGNoaWxkcmVuLmVudHJpZXMgJiZcbiAgICAgICAgICAgIChkaWRXYXJuQWJvdXRNYXBzIHx8XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBcIlVzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC5cIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKGRpZFdhcm5BYm91dE1hcHMgPSAhMCkpLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBpLmNhbGwoY2hpbGRyZW4pLFxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgIShuYW1lU29GYXIgPSBjaGlsZHJlbi5uZXh0KCkpLmRvbmU7XG5cbiAgICAgICAgKVxuICAgICAgICAgIChuYW1lU29GYXIgPSBuYW1lU29GYXIudmFsdWUpLFxuICAgICAgICAgICAgKHR5cGUgPSBjaGlsZEtleSArIGdldEVsZW1lbnRLZXkobmFtZVNvRmFyLCBpKyspKSxcbiAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayArPSBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICApKTtcbiAgICAgIGVsc2UgaWYgKFwib2JqZWN0XCIgPT09IHR5cGUpIHtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGNoaWxkcmVuLnRoZW4pXG4gICAgICAgICAgcmV0dXJuIG1hcEludG9BcnJheShcbiAgICAgICAgICAgIHJlc29sdmVUaGVuYWJsZShjaGlsZHJlbiksXG4gICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICk7XG4gICAgICAgIGFycmF5ID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICtcbiAgICAgICAgICAgIChcIltvYmplY3QgT2JqZWN0XVwiID09PSBhcnJheVxuICAgICAgICAgICAgICA/IFwib2JqZWN0IHdpdGgga2V5cyB7XCIgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbihcIiwgXCIpICsgXCJ9XCJcbiAgICAgICAgICAgICAgOiBhcnJheSkgK1xuICAgICAgICAgICAgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjaztcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICAgIGlmIChudWxsID09IGNoaWxkcmVuKSByZXR1cm4gY2hpbGRyZW47XG4gICAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCBcIlwiLCBcIlwiLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gICAgICBpZiAoLTEgPT09IHBheWxvYWQuX3N0YXR1cykge1xuICAgICAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICAgICAgY3RvciA9IGN0b3IoKTtcbiAgICAgICAgY3Rvci50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICgwID09PSBwYXlsb2FkLl9zdGF0dXMgfHwgLTEgPT09IHBheWxvYWQuX3N0YXR1cylcbiAgICAgICAgICAgICAgKHBheWxvYWQuX3N0YXR1cyA9IDEpLCAocGF5bG9hZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKDAgPT09IHBheWxvYWQuX3N0YXR1cyB8fCAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKVxuICAgICAgICAgICAgICAocGF5bG9hZC5fc3RhdHVzID0gMiksIChwYXlsb2FkLl9yZXN1bHQgPSBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzICYmXG4gICAgICAgICAgKChwYXlsb2FkLl9zdGF0dXMgPSAwKSwgKHBheWxvYWQuX3Jlc3VsdCA9IGN0b3IpKTtcbiAgICAgIH1cbiAgICAgIGlmICgxID09PSBwYXlsb2FkLl9zdGF0dXMpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQpLFxuICAgICAgICAgIHZvaWQgMCA9PT0gY3RvciAmJlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gIGNvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTXlDb21wb25lbnQnKSlcXG5cXG5EaWQgeW91IGFjY2lkZW50YWxseSBwdXQgY3VybHkgYnJhY2VzIGFyb3VuZCB0aGUgaW1wb3J0P1wiLFxuICAgICAgICAgICAgICBjdG9yXG4gICAgICAgICAgICApLFxuICAgICAgICAgIFwiZGVmYXVsdFwiIGluIGN0b3IgfHxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwibGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICBjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL015Q29tcG9uZW50JykpXCIsXG4gICAgICAgICAgICAgIGN0b3JcbiAgICAgICAgICAgICksXG4gICAgICAgICAgY3Rvci5kZWZhdWx0XG4gICAgICAgICk7XG4gICAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5IO1xuICAgICAgbnVsbCA9PT0gZGlzcGF0Y2hlciAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICAgICAgaWYgKG51bGwgPT09IGVucXVldWVUYXNrSW1wbClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcmVxdWlyZVN0cmluZyA9IChcInJlcXVpcmVcIiArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgICAgIGVucXVldWVUYXNrSW1wbCA9IChtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddKS5jYWxsKFxuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgXCJ0aW1lcnNcIlxuICAgICAgICAgICkuc2V0SW1tZWRpYXRlO1xuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAhMSA9PT0gZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgJiZcbiAgICAgICAgICAgICAgKChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9ICEwKSxcbiAgICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIE1lc3NhZ2VDaGFubmVsICYmXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgIFwiVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuXCJcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh2b2lkIDApO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFnZ3JlZ2F0ZUVycm9ycyhlcnJvcnMpIHtcbiAgICAgIHJldHVybiAxIDwgZXJyb3JzLmxlbmd0aCAmJiBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBBZ2dyZWdhdGVFcnJvclxuICAgICAgICA/IG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMpXG4gICAgICAgIDogZXJyb3JzWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKSB7XG4gICAgICBwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIllvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gXCJcbiAgICAgICAgKTtcbiAgICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcXVldWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZTtcbiAgICAgIGlmIChudWxsICE9PSBxdWV1ZSlcbiAgICAgICAgaWYgKDAgIT09IHF1ZXVlLmxlbmd0aClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPSBudWxsO1xuICAgICAgMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGhcbiAgICAgICAgPyAoKHF1ZXVlID0gYWdncmVnYXRlRXJyb3JzKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycykpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgcmVqZWN0KHF1ZXVlKSlcbiAgICAgICAgOiByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSAhMDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy5kaWRVc2VQcm9taXNlID0gITE7XG4gICAgICAgICAgICAgIHZhciBjb250aW51YXRpb24gPSBjYWxsYmFjayghMSk7XG4gICAgICAgICAgICAgIGlmIChudWxsICE9PSBjb250aW51YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuZGlkVXNlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgcXVldWVbaV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250aW51YXRpb247XG4gICAgICAgICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgICAgICAgIH0gd2hpbGUgKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpICsgMSksIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpc0ZsdXNoaW5nID0gITE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnRyYW5zaXRpb25hbC5lbGVtZW50XCIpLFxuICAgICAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLFxuICAgICAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSxcbiAgICAgIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIiksXG4gICAgICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpO1xuICAgIFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTtcbiAgICB2YXIgUkVBQ1RfQ09OU1VNRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb25zdW1lclwiKSxcbiAgICAgIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpLFxuICAgICAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIiksXG4gICAgICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxcbiAgICAgIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLFxuICAgICAgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksXG4gICAgICBSRUFDVF9BQ1RJVklUWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmFjdGl2aXR5XCIpLFxuICAgICAgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yLFxuICAgICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge30sXG4gICAgICBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgICAgICAgaXNNb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBcImZvcmNlVXBkYXRlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgXCJyZXBsYWNlU3RhdGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIFwic2V0U3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3NpZ24gPSBPYmplY3QuYXNzaWduLFxuICAgICAgZW1wdHlPYmplY3QgPSB7fTtcbiAgICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChcbiAgICAgICAgXCJvYmplY3RcIiAhPT0gdHlwZW9mIHBhcnRpYWxTdGF0ZSAmJlxuICAgICAgICBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBwYXJ0aWFsU3RhdGUgJiZcbiAgICAgICAgbnVsbCAhPSBwYXJ0aWFsU3RhdGVcbiAgICAgIClcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgXCJ0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIlxuICAgICAgICApO1xuICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBcInNldFN0YXRlXCIpO1xuICAgIH07XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgXCJmb3JjZVVwZGF0ZVwiKTtcbiAgICB9O1xuICAgIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICAgICAgaXNNb3VudGVkOiBbXG4gICAgICAgICAgXCJpc01vdW50ZWRcIixcbiAgICAgICAgICBcIkluc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluIGNvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLlwiXG4gICAgICAgIF0sXG4gICAgICAgIHJlcGxhY2VTdGF0ZTogW1xuICAgICAgICAgIFwicmVwbGFjZVN0YXRlXCIsXG4gICAgICAgICAgXCJSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLlwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBmbk5hbWU7XG4gICAgZm9yIChmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpXG4gICAgICBkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpICYmXG4gICAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIENvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gICAgZGVwcmVjYXRlZEFQSXMgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xuICAgIGRlcHJlY2F0ZWRBUElzLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbiAgICBhc3NpZ24oZGVwcmVjYXRlZEFQSXMsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgIGRlcHJlY2F0ZWRBUElzLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gITA7XG4gICAgdmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheSxcbiAgICAgIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKSxcbiAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICAgICAgICBIOiBudWxsLFxuICAgICAgICBBOiBudWxsLFxuICAgICAgICBUOiBudWxsLFxuICAgICAgICBTOiBudWxsLFxuICAgICAgICBWOiBudWxsLFxuICAgICAgICBhY3RRdWV1ZTogbnVsbCxcbiAgICAgICAgaXNCYXRjaGluZ0xlZ2FjeTogITEsXG4gICAgICAgIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiAhMSxcbiAgICAgICAgZGlkVXNlUHJvbWlzZTogITEsXG4gICAgICAgIHRocm93bkVycm9yczogW10sXG4gICAgICAgIGdldEN1cnJlbnRTdGFjazogbnVsbCxcbiAgICAgICAgcmVjZW50bHlDcmVhdGVkT3duZXJTdGFja3M6IDBcbiAgICAgIH0sXG4gICAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICBjcmVhdGVUYXNrID0gY29uc29sZS5jcmVhdGVUYXNrXG4gICAgICAgID8gY29uc29sZS5jcmVhdGVUYXNrXG4gICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfTtcbiAgICBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICAgIFwicmVhY3Qtc3RhY2stYm90dG9tLWZyYW1lXCI6IGZ1bmN0aW9uIChjYWxsU3RhY2tGb3JFcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbFN0YWNrRm9yRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgZGlkV2FybkFib3V0T2xkSlNYUnVudGltZTtcbiAgICB2YXIgZGlkV2FybkFib3V0RWxlbWVudFJlZiA9IHt9O1xuICAgIHZhciB1bmtub3duT3duZXJEZWJ1Z1N0YWNrID0gZGVwcmVjYXRlZEFQSXNbXG4gICAgICBcInJlYWN0LXN0YWNrLWJvdHRvbS1mcmFtZVwiXG4gICAgXS5iaW5kKGRlcHJlY2F0ZWRBUElzLCBVbmtub3duT3duZXIpKCk7XG4gICAgdmFyIHVua25vd25Pd25lckRlYnVnVGFzayA9IGNyZWF0ZVRhc2soZ2V0VGFza05hbWUoVW5rbm93bk93bmVyKSk7XG4gICAgdmFyIGRpZFdhcm5BYm91dE1hcHMgPSAhMSxcbiAgICAgIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZyxcbiAgICAgIHJlcG9ydEdsb2JhbEVycm9yID1cbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmVwb3J0RXJyb3JcbiAgICAgICAgICA/IHJlcG9ydEVycm9yXG4gICAgICAgICAgOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiB3aW5kb3cgJiZcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB3aW5kb3cuRXJyb3JFdmVudFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgd2luZG93LkVycm9yRXZlbnQoXCJlcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgPyBTdHJpbmcoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICA6IFN0cmluZyhlcnJvciksXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KSkgcmV0dXJuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBwcm9jZXNzICYmXG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcHJvY2Vzcy5lbWl0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW1pdChcInVuY2F1Z2h0RXhjZXB0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSAhMSxcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG51bGwsXG4gICAgICBhY3RTY29wZURlcHRoID0gMCxcbiAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gITEsXG4gICAgICBpc0ZsdXNoaW5nID0gITEsXG4gICAgICBxdWV1ZVNldmVyYWxNaWNyb3Rhc2tzID1cbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcXVldWVNaWNyb3Rhc2tcbiAgICAgICAgICA/IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXVlTWljcm90YXNrKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBlbnF1ZXVlVGFzaztcbiAgICBkZXByZWNhdGVkQVBJcyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgYzogZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlTWVtb0NhY2hlKHNpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4cG9ydHMuQ2hpbGRyZW4gPSB7XG4gICAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgICAgICAgbWFwQ2hpbGRyZW4oXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvckVhY2hDb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgICB9LFxuICAgICAgdG9BcnJheTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH0pIHx8IFtdXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgb25seTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKVxuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIlxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgIGV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgIGV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgIGV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG4gICAgZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICBleHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbiAgICBleHBvcnRzLl9fQ0xJRU5UX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1dBUk5fVVNFUlNfVEhFWV9DQU5OT1RfVVBHUkFERSA9XG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscztcbiAgICBleHBvcnRzLl9fQ09NUElMRVJfUlVOVElNRSA9IGRlcHJlY2F0ZWRBUElzO1xuICAgIGV4cG9ydHMuYWN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJldkFjdFF1ZXVlID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUsXG4gICAgICAgIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICAgIGFjdFNjb3BlRGVwdGgrKztcbiAgICAgIHZhciBxdWV1ZSA9IChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9XG4gICAgICAgICAgbnVsbCAhPT0gcHJldkFjdFF1ZXVlID8gcHJldkFjdFF1ZXVlIDogW10pLFxuICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoKVxuICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgKHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpLFxuICAgICAgICAgIChjYWxsYmFjayA9IGFnZ3JlZ2F0ZUVycm9ycyhSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMpKSxcbiAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDApLFxuICAgICAgICAgIGNhbGxiYWNrKVxuICAgICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICBudWxsICE9PSByZXN1bHQgJiZcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHJlc3VsdCAmJlxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByZXN1bHQudGhlblxuICAgICAgKSB7XG4gICAgICAgIHZhciB0aGVuYWJsZSA9IHJlc3VsdDtcbiAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlkQXdhaXRBY3RDYWxsIHx8XG4gICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCB8fFxuICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiBUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyIHNjb3Blcy4gWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pO1wiXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITA7XG4gICAgICAgICAgICB0aGVuYWJsZS50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcHJldkFjdFNjb3BlRGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpLFxuICAgICAgICAgICAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IkMCkge1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMucHVzaChlcnJvciQwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3Rocm93bkVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF90aHJvd25FcnJvcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICAwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyAoKGVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgICAgICAgIDogcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmV0dXJuVmFsdWUkanNjb21wJDAgPSByZXN1bHQ7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIDAgPT09IHByZXZBY3RTY29wZURlcHRoICYmXG4gICAgICAgIChmbHVzaEFjdFF1ZXVlKHF1ZXVlKSxcbiAgICAgICAgMCAhPT0gcXVldWUubGVuZ3RoICYmXG4gICAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgfHxcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgfHxcbiAgICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBcIkEgY29tcG9uZW50IHN1c3BlbmRlZCBpbnNpZGUgYW4gYGFjdGAgc2NvcGUsIGJ1dCB0aGUgYGFjdGAgY2FsbCB3YXMgbm90IGF3YWl0ZWQuIFdoZW4gdGVzdGluZyBSZWFjdCBjb21wb25lbnRzIHRoYXQgZGVwZW5kIG9uIGFzeW5jaHJvbm91cyBkYXRhLCB5b3UgbXVzdCBhd2FpdCB0aGUgcmVzdWx0OlxcblxcbmF3YWl0IGFjdCgoKSA9PiAuLi4pXCJcbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfSksXG4gICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IG51bGwpKTtcbiAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICgoY2FsbGJhY2sgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICBjYWxsYmFjaylcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMDtcbiAgICAgICAgICAwID09PSBwcmV2QWN0U2NvcGVEZXB0aFxuICAgICAgICAgICAgPyAoKFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlID0gcXVldWUpLFxuICAgICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsoXG4gICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSRqc2NvbXAkMCxcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogcmVzb2x2ZShyZXR1cm5WYWx1ZSRqc2NvbXAkMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNhY2hlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNhcHR1cmVPd25lclN0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGdldEN1cnJlbnRTdGFjayA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmdldEN1cnJlbnRTdGFjaztcbiAgICAgIHJldHVybiBudWxsID09PSBnZXRDdXJyZW50U3RhY2sgPyBudWxsIDogZ2V0Q3VycmVudFN0YWNrKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAobnVsbCA9PT0gZWxlbWVudCB8fCB2b2lkIDAgPT09IGVsZW1lbnQpXG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwiVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArXG4gICAgICAgICAgICBlbGVtZW50ICtcbiAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICk7XG4gICAgICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpLFxuICAgICAgICBrZXkgPSBlbGVtZW50LmtleSxcbiAgICAgICAgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIGlmIChudWxsICE9IGNvbmZpZykge1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0O1xuICAgICAgICBhOiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIFwicmVmXCIpICYmXG4gICAgICAgICAgICAoSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICBcInJlZlwiXG4gICAgICAgICAgICApLmdldCkgJiZcbiAgICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdC5pc1JlYWN0V2FybmluZ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSB2b2lkIDAgIT09IGNvbmZpZy5yZWY7XG4gICAgICAgIH1cbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ICYmIChvd25lciA9IGdldE93bmVyKCkpO1xuICAgICAgICBoYXNWYWxpZEtleShjb25maWcpICYmXG4gICAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSksIChrZXkgPSBcIlwiICsgY29uZmlnLmtleSkpO1xuICAgICAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZylcbiAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSB8fFxuICAgICAgICAgICAgXCJrZXlcIiA9PT0gcHJvcE5hbWUgfHxcbiAgICAgICAgICAgIFwiX19zZWxmXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICBcIl9fc291cmNlXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICAoXCJyZWZcIiA9PT0gcHJvcE5hbWUgJiYgdm9pZCAwID09PSBjb25maWcucmVmKSB8fFxuICAgICAgICAgICAgKHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV0pO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BOYW1lID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICBpZiAoMSA9PT0gcHJvcE5hbWUpIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICBlbHNlIGlmICgxIDwgcHJvcE5hbWUpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gQXJyYXkocHJvcE5hbWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BOYW1lOyBpKyspXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQ7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IFJlYWN0RWxlbWVudChcbiAgICAgICAgZWxlbWVudC50eXBlLFxuICAgICAgICBrZXksXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICBvd25lcixcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIGVsZW1lbnQuX2RlYnVnU3RhY2ssXG4gICAgICAgIGVsZW1lbnQuX2RlYnVnVGFza1xuICAgICAgKTtcbiAgICAgIGZvciAoa2V5ID0gMjsga2V5IDwgYXJndW1lbnRzLmxlbmd0aDsga2V5KyspXG4gICAgICAgIChvd25lciA9IGFyZ3VtZW50c1trZXldKSxcbiAgICAgICAgICBpc1ZhbGlkRWxlbWVudChvd25lcikgJiYgb3duZXIuX3N0b3JlICYmIChvd25lci5fc3RvcmUudmFsaWRhdGVkID0gMSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX3RocmVhZENvdW50OiAwLFxuICAgICAgICBQcm92aWRlcjogbnVsbCxcbiAgICAgICAgQ29uc3VtZXI6IG51bGxcbiAgICAgIH07XG4gICAgICBkZWZhdWx0VmFsdWUuUHJvdmlkZXIgPSBkZWZhdWx0VmFsdWU7XG4gICAgICBkZWZhdWx0VmFsdWUuQ29uc3VtZXIgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05TVU1FUl9UWVBFLFxuICAgICAgICBfY29udGV4dDogZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGlzVmFsaWRFbGVtZW50KG5vZGUpICYmIG5vZGUuX3N0b3JlICYmIChub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSAxKTtcbiAgICAgIH1cbiAgICAgIGkgPSB7fTtcbiAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgaWYgKG51bGwgIT0gY29uZmlnKVxuICAgICAgICBmb3IgKHByb3BOYW1lIGluIChkaWRXYXJuQWJvdXRPbGRKU1hSdW50aW1lIHx8XG4gICAgICAgICAgIShcIl9fc2VsZlwiIGluIGNvbmZpZykgfHxcbiAgICAgICAgICBcImtleVwiIGluIGNvbmZpZyB8fFxuICAgICAgICAgICgoZGlkV2FybkFib3V0T2xkSlNYUnVudGltZSA9ICEwKSxcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIllvdXIgYXBwIChvciBvbmUgb2YgaXRzIGRlcGVuZGVuY2llcykgaXMgdXNpbmcgYW4gb3V0ZGF0ZWQgSlNYIHRyYW5zZm9ybS4gVXBkYXRlIHRvIHRoZSBtb2Rlcm4gSlNYIHRyYW5zZm9ybSBmb3IgZmFzdGVyIHBlcmZvcm1hbmNlOiBodHRwczovL3JlYWN0LmRldi9saW5rL25ldy1qc3gtdHJhbnNmb3JtXCJcbiAgICAgICAgICApKSxcbiAgICAgICAgaGFzVmFsaWRLZXkoY29uZmlnKSAmJlxuICAgICAgICAgIChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpLCAobm9kZSA9IFwiXCIgKyBjb25maWcua2V5KSksXG4gICAgICAgIGNvbmZpZykpXG4gICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJlxuICAgICAgICAgICAgXCJrZXlcIiAhPT0gcHJvcE5hbWUgJiZcbiAgICAgICAgICAgIFwiX19zZWxmXCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICBcIl9fc291cmNlXCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICAoaVtwcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdKTtcbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgICAgaWYgKDEgPT09IGNoaWxkcmVuTGVuZ3RoKSBpLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICBlbHNlIGlmICgxIDwgY2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKSwgX2kgPSAwO1xuICAgICAgICAgIF9pIDwgY2hpbGRyZW5MZW5ndGg7XG4gICAgICAgICAgX2krK1xuICAgICAgICApXG4gICAgICAgICAgY2hpbGRBcnJheVtfaV0gPSBhcmd1bWVudHNbX2kgKyAyXTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSAmJiBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgICBpLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKVxuICAgICAgICBmb3IgKHByb3BOYW1lIGluICgoY2hpbGRyZW5MZW5ndGggPSB0eXBlLmRlZmF1bHRQcm9wcyksIGNoaWxkcmVuTGVuZ3RoKSlcbiAgICAgICAgICB2b2lkIDAgPT09IGlbcHJvcE5hbWVdICYmIChpW3Byb3BOYW1lXSA9IGNoaWxkcmVuTGVuZ3RoW3Byb3BOYW1lXSk7XG4gICAgICBub2RlICYmXG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKFxuICAgICAgICAgIGksXG4gICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdHlwZVxuICAgICAgICAgICAgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBcIlVua25vd25cIlxuICAgICAgICAgICAgOiB0eXBlXG4gICAgICAgICk7XG4gICAgICB2YXIgcHJvcE5hbWUgPSAxZTQgPiBSZWFjdFNoYXJlZEludGVybmFscy5yZWNlbnRseUNyZWF0ZWRPd25lclN0YWNrcysrO1xuICAgICAgcmV0dXJuIFJlYWN0RWxlbWVudChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIGdldE93bmVyKCksXG4gICAgICAgIGksXG4gICAgICAgIHByb3BOYW1lID8gRXJyb3IoXCJyZWFjdC1zdGFjay10b3AtZnJhbWVcIikgOiB1bmtub3duT3duZXJEZWJ1Z1N0YWNrLFxuICAgICAgICBwcm9wTmFtZSA/IGNyZWF0ZVRhc2soZ2V0VGFza05hbWUodHlwZSkpIDogdW5rbm93bk93bmVyRGVidWdUYXNrXG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVmT2JqZWN0ID0geyBjdXJyZW50OiBudWxsIH07XG4gICAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICAgICAgcmV0dXJuIHJlZk9iamVjdDtcbiAgICB9O1xuICAgIGV4cG9ydHMuZm9yd2FyZFJlZiA9IGZ1bmN0aW9uIChyZW5kZXIpIHtcbiAgICAgIG51bGwgIT0gcmVuZGVyICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFXG4gICAgICAgID8gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlIG1lbW8oZm9yd2FyZFJlZiguLi4pKS5cIlxuICAgICAgICAgIClcbiAgICAgICAgOiBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICA/IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLlwiLFxuICAgICAgICAgICAgICBudWxsID09PSByZW5kZXIgPyBcIm51bGxcIiA6IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IDAgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIDIgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlc1wiLFxuICAgICAgICAgICAgICAxID09PSByZW5kZXIubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBcIkRpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj9cIlxuICAgICAgICAgICAgICAgIDogXCJBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXCJcbiAgICAgICAgICAgICk7XG4gICAgICBudWxsICE9IHJlbmRlciAmJlxuICAgICAgICBudWxsICE9IHJlbmRlci5kZWZhdWx0UHJvcHMgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcImZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBkZWZhdWx0UHJvcHMuIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/XCJcbiAgICAgICAgKTtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IHsgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsIHJlbmRlcjogcmVuZGVyIH0sXG4gICAgICAgIG93bk5hbWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICByZW5kZXIubmFtZSB8fFxuICAgICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lIHx8XG4gICAgICAgICAgICAoT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlbmRlciwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAocmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBlbGVtZW50VHlwZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbiAgICBleHBvcnRzLmxhenkgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICAgICAgX3BheWxvYWQ6IHsgX3N0YXR1czogLTEsIF9yZXN1bHQ6IGN0b3IgfSxcbiAgICAgICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4cG9ydHMubWVtbyA9IGZ1bmN0aW9uICh0eXBlLCBjb21wYXJlKSB7XG4gICAgICBudWxsID09IHR5cGUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIm1lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1wiLFxuICAgICAgICAgIG51bGwgPT09IHR5cGUgPyBcIm51bGxcIiA6IHR5cGVvZiB0eXBlXG4gICAgICAgICk7XG4gICAgICBjb21wYXJlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjb21wYXJlOiB2b2lkIDAgPT09IGNvbXBhcmUgPyBudWxsIDogY29tcGFyZVxuICAgICAgfTtcbiAgICAgIHZhciBvd25OYW1lO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXBhcmUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICB0eXBlLm5hbWUgfHxcbiAgICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgfHxcbiAgICAgICAgICAgIChPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAodHlwZS5kaXNwbGF5TmFtZSA9IG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29tcGFyZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdFNoYXJlZEludGVybmFscy5ULFxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbiA9IHt9O1xuICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuVCA9IGN1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBzY29wZSgpLFxuICAgICAgICAgIG9uU3RhcnRUcmFuc2l0aW9uRmluaXNoID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUztcbiAgICAgICAgbnVsbCAhPT0gb25TdGFydFRyYW5zaXRpb25GaW5pc2ggJiZcbiAgICAgICAgICBvblN0YXJ0VHJhbnNpdGlvbkZpbmlzaChjdXJyZW50VHJhbnNpdGlvbiwgcmV0dXJuVmFsdWUpO1xuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgcmV0dXJuVmFsdWUgJiZcbiAgICAgICAgICBudWxsICE9PSByZXR1cm5WYWx1ZSAmJlxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJldHVyblZhbHVlLnRoZW4gJiZcbiAgICAgICAgICByZXR1cm5WYWx1ZS50aGVuKG5vb3AsIHJlcG9ydEdsb2JhbEVycm9yKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcG9ydEdsb2JhbEVycm9yKGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIG51bGwgPT09IHByZXZUcmFuc2l0aW9uICYmXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgJiZcbiAgICAgICAgICAoKHNjb3BlID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZSksXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKSxcbiAgICAgICAgICAxMCA8IHNjb3BlICYmXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiBJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiBPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuXCJcbiAgICAgICAgICAgICkpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5UID0gcHJldlRyYW5zaXRpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy51bnN0YWJsZV91c2VDYWNoZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VDYWNoZVJlZnJlc2goKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlID0gZnVuY3Rpb24gKHVzYWJsZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlKHVzYWJsZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUFjdGlvblN0YXRlID0gZnVuY3Rpb24gKGFjdGlvbiwgaW5pdGlhbFN0YXRlLCBwZXJtYWxpbmspIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUFjdGlvblN0YXRlKFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgcGVybWFsaW5rXG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDb250ZXh0ID0gZnVuY3Rpb24gKENvbnRleHQpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICAgIENvbnRleHQuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlNVTUVSX1RZUEUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkNhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGNhdXNlIGJ1Z3MuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VEZWZlcnJlZFZhbHVlKHZhbHVlLCBpbml0aWFsVmFsdWUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VFZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBjcmVhdGVEZXBzLCB1cGRhdGUpIHtcbiAgICAgIG51bGwgPT0gY3JlYXRlICYmXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlJlYWN0IEhvb2sgdXNlRWZmZWN0IHJlcXVpcmVzIGFuIGVmZmVjdCBjYWxsYmFjay4gRGlkIHlvdSBmb3JnZXQgdG8gcGFzcyBhIGNhbGxiYWNrIHRvIHRoZSBob29rP1wiXG4gICAgICAgICk7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdXBkYXRlKVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcInVzZUVmZmVjdCBDUlVEIG92ZXJsb2FkIGlzIG5vdCBlbmFibGVkIGluIHRoaXMgYnVpbGQgb2YgUmVhY3QuXCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGNyZWF0ZURlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUlkKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSBmdW5jdGlvbiAocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICBudWxsID09IGNyZWF0ZSAmJlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJSZWFjdCBIb29rIHVzZUluc2VydGlvbkVmZmVjdCByZXF1aXJlcyBhbiBlZmZlY3QgY2FsbGJhY2suIERpZCB5b3UgZm9yZ2V0IHRvIHBhc3MgYSBjYWxsYmFjayB0byB0aGUgaG9vaz9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIG51bGwgPT0gY3JlYXRlICYmXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlJlYWN0IEhvb2sgdXNlTGF5b3V0RWZmZWN0IHJlcXVpcmVzIGFuIGVmZmVjdCBjYWxsYmFjay4gRGlkIHlvdSBmb3JnZXQgdG8gcGFzcyBhIGNhbGxiYWNrIHRvIHRoZSBob29rP1wiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlTWVtbyA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIChwYXNzdGhyb3VnaCwgcmVkdWNlcikge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlT3B0aW1pc3RpYyhwYXNzdGhyb3VnaCwgcmVkdWNlcik7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVJlZHVjZXIgPSBmdW5jdGlvbiAocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlUmVmID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVN0YXRlID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSBmdW5jdGlvbiAoXG4gICAgICBzdWJzY3JpYmUsXG4gICAgICBnZXRTbmFwc2hvdCxcbiAgICAgIGdldFNlcnZlclNuYXBzaG90XG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICBnZXRTbmFwc2hvdCxcbiAgICAgICAgZ2V0U2VydmVyU25hcHNob3RcbiAgICAgICk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VUcmFuc2l0aW9uKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnZlcnNpb24gPSBcIjE5LjEuMFwiO1xuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKEVycm9yKCkpO1xuICB9KSgpO1xuIiwKICAgICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwKICAgICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIE1ldGEgUGxhdGZvcm1zLCBJbmMuIGFuZCBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgICAgIGlmIChudWxsID09IHR5cGUpIHJldHVybiBudWxsO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHR5cGUpXG4gICAgICAgIHJldHVybiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0eXBlKSByZXR1cm4gdHlwZTtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiRnJhZ21lbnRcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlByb2ZpbGVyXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdHJpY3RNb2RlXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdXNwZW5zZVwiO1xuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdXNwZW5zZUxpc3RcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9BQ1RJVklUWV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIkFjdGl2aXR5XCI7XG4gICAgICB9XG4gICAgICBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUpXG4gICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgKFwibnVtYmVyXCIgPT09IHR5cGVvZiB0eXBlLnRhZyAmJlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHR5cGUuJCR0eXBlb2YpXG4gICAgICAgICkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gXCJQb3J0YWxcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAodHlwZS5kaXNwbGF5TmFtZSB8fCBcIkNvbnRleHRcIikgKyBcIi5Qcm92aWRlclwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OU1VNRVJfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAodHlwZS5fY29udGV4dC5kaXNwbGF5TmFtZSB8fCBcIkNvbnRleHRcIikgKyBcIi5Db25zdW1lclwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgIHZhciBpbm5lclR5cGUgPSB0eXBlLnJlbmRlcjtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgdHlwZSB8fFxuICAgICAgICAgICAgICAoKHR5cGUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgXCJcIiksXG4gICAgICAgICAgICAgICh0eXBlID0gXCJcIiAhPT0gdHlwZSA/IFwiRm9yd2FyZFJlZihcIiArIHR5cGUgKyBcIilcIiA6IFwiRm9yd2FyZFJlZlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIChpbm5lclR5cGUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGwpLFxuICAgICAgICAgICAgICBudWxsICE9PSBpbm5lclR5cGVcbiAgICAgICAgICAgICAgICA/IGlubmVyVHlwZVxuICAgICAgICAgICAgICAgIDogZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgXCJNZW1vXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICBpbm5lclR5cGUgPSB0eXBlLl9wYXlsb2FkO1xuICAgICAgICAgICAgdHlwZSA9IHR5cGUuX2luaXQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUoaW5uZXJUeXBlKSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICEwO1xuICAgICAgfVxuICAgICAgaWYgKEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCkge1xuICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSBjb25zb2xlO1xuICAgICAgICB2YXIgSlNDb21waWxlcl90ZW1wX2NvbnN0ID0gSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0LmVycm9yO1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0JGpzY29tcCQwID1cbiAgICAgICAgICAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgU3ltYm9sICYmXG4gICAgICAgICAgICBTeW1ib2wudG9TdHJpbmdUYWcgJiZcbiAgICAgICAgICAgIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10pIHx8XG4gICAgICAgICAgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fFxuICAgICAgICAgIFwiT2JqZWN0XCI7XG4gICAgICAgIEpTQ29tcGlsZXJfdGVtcF9jb25zdC5jYWxsKFxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCxcbiAgICAgICAgICBcIlRoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4gVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIHVzaW5nIGl0IGhlcmUuXCIsXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0JGpzY29tcCQwXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUYXNrTmFtZSh0eXBlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkgcmV0dXJuIFwiPD5cIjtcbiAgICAgIGlmIChcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUgJiZcbiAgICAgICAgbnVsbCAhPT0gdHlwZSAmJlxuICAgICAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEVcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIFwiPC4uLj5cIjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICByZXR1cm4gbmFtZSA/IFwiPFwiICsgbmFtZSArIFwiPlwiIDogXCI8Li4uPlwiO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gXCI8Li4uPlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRPd25lcigpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuQTtcbiAgICAgIHJldHVybiBudWxsID09PSBkaXNwYXRjaGVyID8gbnVsbCA6IGRpc3BhdGNoZXIuZ2V0T3duZXIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVW5rbm93bk93bmVyKCkge1xuICAgICAgcmV0dXJuIEVycm9yKFwicmVhY3Qtc3RhY2stdG9wLWZyYW1lXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgXCJrZXlcIikpIHtcbiAgICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCBcImtleVwiKS5nZXQ7XG4gICAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSByZXR1cm4gITE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSBjb25maWcua2V5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgICAgIGZ1bmN0aW9uIHdhcm5BYm91dEFjY2Vzc2luZ0tleSgpIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gfHxcbiAgICAgICAgICAoKHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gITApLFxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIiVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgdmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCBwcm9wLiAoaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9zcGVjaWFsLXByb3BzKVwiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICApKTtcbiAgICAgIH1cbiAgICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9ICEwO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCBcImtleVwiLCB7XG4gICAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZWxlbWVudFJlZkdldHRlcldpdGhEZXByZWNhdGlvbldhcm5pbmcoKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0aGlzLnR5cGUpO1xuICAgICAgZGlkV2FybkFib3V0RWxlbWVudFJlZltjb21wb25lbnROYW1lXSB8fFxuICAgICAgICAoKGRpZFdhcm5BYm91dEVsZW1lbnRSZWZbY29tcG9uZW50TmFtZV0gPSAhMCksXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJBY2Nlc3NpbmcgZWxlbWVudC5yZWYgd2FzIHJlbW92ZWQgaW4gUmVhY3QgMTkuIHJlZiBpcyBub3cgYSByZWd1bGFyIHByb3AuIEl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBKU1ggRWxlbWVudCB0eXBlIGluIGEgZnV0dXJlIHJlbGVhc2UuXCJcbiAgICAgICAgKSk7XG4gICAgICBjb21wb25lbnROYW1lID0gdGhpcy5wcm9wcy5yZWY7XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSBjb21wb25lbnROYW1lID8gY29tcG9uZW50TmFtZSA6IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWN0RWxlbWVudChcbiAgICAgIHR5cGUsXG4gICAgICBrZXksXG4gICAgICBzZWxmLFxuICAgICAgc291cmNlLFxuICAgICAgb3duZXIsXG4gICAgICBwcm9wcyxcbiAgICAgIGRlYnVnU3RhY2ssXG4gICAgICBkZWJ1Z1Rhc2tcbiAgICApIHtcbiAgICAgIHNlbGYgPSBwcm9wcy5yZWY7XG4gICAgICB0eXBlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICBfb3duZXI6IG93bmVyXG4gICAgICB9O1xuICAgICAgbnVsbCAhPT0gKHZvaWQgMCAhPT0gc2VsZiA/IHNlbGYgOiBudWxsKVxuICAgICAgICA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgIGdldDogZWxlbWVudFJlZkdldHRlcldpdGhEZXByZWNhdGlvbldhcm5pbmdcbiAgICAgICAgICB9KVxuICAgICAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7IGVudW1lcmFibGU6ICExLCB2YWx1ZTogbnVsbCB9KTtcbiAgICAgIHR5cGUuX3N0b3JlID0ge307XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZS5fc3RvcmUsIFwidmFsaWRhdGVkXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnSW5mb1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIl9kZWJ1Z1N0YWNrXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGRlYnVnU3RhY2tcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnVGFza1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBkZWJ1Z1Rhc2tcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmZyZWV6ZSAmJiAoT2JqZWN0LmZyZWV6ZSh0eXBlLnByb3BzKSwgT2JqZWN0LmZyZWV6ZSh0eXBlKSk7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gICAgZnVuY3Rpb24ganN4REVWSW1wbChcbiAgICAgIHR5cGUsXG4gICAgICBjb25maWcsXG4gICAgICBtYXliZUtleSxcbiAgICAgIGlzU3RhdGljQ2hpbGRyZW4sXG4gICAgICBzb3VyY2UsXG4gICAgICBzZWxmLFxuICAgICAgZGVidWdTdGFjayxcbiAgICAgIGRlYnVnVGFza1xuICAgICkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gY29uZmlnLmNoaWxkcmVuO1xuICAgICAgaWYgKHZvaWQgMCAhPT0gY2hpbGRyZW4pXG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKVxuICAgICAgICAgIGlmIChpc0FycmF5SW1wbChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgIGlzU3RhdGljQ2hpbGRyZW4gPSAwO1xuICAgICAgICAgICAgICBpc1N0YXRpY0NoaWxkcmVuIDwgY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICBpc1N0YXRpY0NoaWxkcmVuKytcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baXNTdGF0aWNDaGlsZHJlbl0pO1xuICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZSAmJiBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiBVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICBlbHNlIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuKTtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgXCJrZXlcIikpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gXCJrZXlcIiAhPT0gaztcbiAgICAgICAgfSk7XG4gICAgICAgIGlzU3RhdGljQ2hpbGRyZW4gPVxuICAgICAgICAgIDAgPCBrZXlzLmxlbmd0aFxuICAgICAgICAgICAgPyBcIntrZXk6IHNvbWVLZXksIFwiICsga2V5cy5qb2luKFwiOiAuLi4sIFwiKSArIFwiOiAuLi59XCJcbiAgICAgICAgICAgIDogXCJ7a2V5OiBzb21lS2V5fVwiO1xuICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY2hpbGRyZW4gKyBpc1N0YXRpY0NoaWxkcmVuXSB8fFxuICAgICAgICAgICgoa2V5cyA9XG4gICAgICAgICAgICAwIDwga2V5cy5sZW5ndGggPyBcIntcIiArIGtleXMuam9pbihcIjogLi4uLCBcIikgKyBcIjogLi4ufVwiIDogXCJ7fVwiKSxcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbiAgbGV0IHByb3BzID0gJXM7XFxuICA8JXMgey4uLnByb3BzfSAvPlxcblJlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbiAgbGV0IHByb3BzID0gJXM7XFxuICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JyxcbiAgICAgICAgICAgIGlzU3RhdGljQ2hpbGRyZW4sXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIGtleXMsXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICksXG4gICAgICAgICAgKGRpZFdhcm5BYm91dEtleVNwcmVhZFtjaGlsZHJlbiArIGlzU3RhdGljQ2hpbGRyZW5dID0gITApKTtcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIHZvaWQgMCAhPT0gbWF5YmVLZXkgJiZcbiAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpLCAoY2hpbGRyZW4gPSBcIlwiICsgbWF5YmVLZXkpKTtcbiAgICAgIGhhc1ZhbGlkS2V5KGNvbmZpZykgJiZcbiAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSksIChjaGlsZHJlbiA9IFwiXCIgKyBjb25maWcua2V5KSk7XG4gICAgICBpZiAoXCJrZXlcIiBpbiBjb25maWcpIHtcbiAgICAgICAgbWF5YmVLZXkgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gY29uZmlnKVxuICAgICAgICAgIFwia2V5XCIgIT09IHByb3BOYW1lICYmIChtYXliZUtleVtwcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdKTtcbiAgICAgIH0gZWxzZSBtYXliZUtleSA9IGNvbmZpZztcbiAgICAgIGNoaWxkcmVuICYmXG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKFxuICAgICAgICAgIG1heWJlS2V5LFxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHR5cGVcbiAgICAgICAgICAgID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgXCJVbmtub3duXCJcbiAgICAgICAgICAgIDogdHlwZVxuICAgICAgICApO1xuICAgICAgcmV0dXJuIFJlYWN0RWxlbWVudChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHNlbGYsXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgZ2V0T3duZXIoKSxcbiAgICAgICAgbWF5YmVLZXksXG4gICAgICAgIGRlYnVnU3RhY2ssXG4gICAgICAgIGRlYnVnVGFza1xuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSkge1xuICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIG5vZGUgJiZcbiAgICAgICAgbnVsbCAhPT0gbm9kZSAmJlxuICAgICAgICBub2RlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUgJiZcbiAgICAgICAgbm9kZS5fc3RvcmUgJiZcbiAgICAgICAgKG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IDEpO1xuICAgIH1cbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIiksXG4gICAgICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QudHJhbnNpdGlvbmFsLmVsZW1lbnRcIiksXG4gICAgICBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksXG4gICAgICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLFxuICAgICAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxcbiAgICAgIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG4gICAgU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xuICAgIHZhciBSRUFDVF9DT05TVU1FUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnN1bWVyXCIpLFxuICAgICAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksXG4gICAgICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLFxuICAgICAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLFxuICAgICAgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIiksXG4gICAgICBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSxcbiAgICAgIFJFQUNUX0FDVElWSVRZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuYWN0aXZpdHlcIiksXG4gICAgICBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIiksXG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscyA9XG4gICAgICAgIFJlYWN0Ll9fQ0xJRU5UX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1dBUk5fVVNFUlNfVEhFWV9DQU5OT1RfVVBHUkFERSxcbiAgICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheSxcbiAgICAgIGNyZWF0ZVRhc2sgPSBjb25zb2xlLmNyZWF0ZVRhc2tcbiAgICAgICAgPyBjb25zb2xlLmNyZWF0ZVRhc2tcbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9O1xuICAgIFJlYWN0ID0ge1xuICAgICAgXCJyZWFjdC1zdGFjay1ib3R0b20tZnJhbWVcIjogZnVuY3Rpb24gKGNhbGxTdGFja0ZvckVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsU3RhY2tGb3JFcnJvcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xuICAgIHZhciBkaWRXYXJuQWJvdXRFbGVtZW50UmVmID0ge307XG4gICAgdmFyIHVua25vd25Pd25lckRlYnVnU3RhY2sgPSBSZWFjdFtcInJlYWN0LXN0YWNrLWJvdHRvbS1mcmFtZVwiXS5iaW5kKFxuICAgICAgUmVhY3QsXG4gICAgICBVbmtub3duT3duZXJcbiAgICApKCk7XG4gICAgdmFyIHVua25vd25Pd25lckRlYnVnVGFzayA9IGNyZWF0ZVRhc2soZ2V0VGFza05hbWUoVW5rbm93bk93bmVyKSk7XG4gICAgdmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuICAgIGV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgIGV4cG9ydHMuanN4REVWID0gZnVuY3Rpb24gKFxuICAgICAgdHlwZSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIG1heWJlS2V5LFxuICAgICAgaXNTdGF0aWNDaGlsZHJlbixcbiAgICAgIHNvdXJjZSxcbiAgICAgIHNlbGZcbiAgICApIHtcbiAgICAgIHZhciB0cmFja0FjdHVhbE93bmVyID1cbiAgICAgICAgMWU0ID4gUmVhY3RTaGFyZWRJbnRlcm5hbHMucmVjZW50bHlDcmVhdGVkT3duZXJTdGFja3MrKztcbiAgICAgIHJldHVybiBqc3hERVZJbXBsKFxuICAgICAgICB0eXBlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIG1heWJlS2V5LFxuICAgICAgICBpc1N0YXRpY0NoaWxkcmVuLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIHNlbGYsXG4gICAgICAgIHRyYWNrQWN0dWFsT3duZXJcbiAgICAgICAgICA/IEVycm9yKFwicmVhY3Qtc3RhY2stdG9wLWZyYW1lXCIpXG4gICAgICAgICAgOiB1bmtub3duT3duZXJEZWJ1Z1N0YWNrLFxuICAgICAgICB0cmFja0FjdHVhbE93bmVyID8gY3JlYXRlVGFzayhnZXRUYXNrTmFtZSh0eXBlKSkgOiB1bmtub3duT3duZXJEZWJ1Z1Rhc2tcbiAgICAgICk7XG4gICAgfTtcbiAgfSkoKTtcbiIsCiAgICAiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwKICAgICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQ291bnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+Q291bnQ6IHtjb3VudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBWUcsUUFBUyxHQUFHO0FBQUEsSUFDWCxTQUFTLHdCQUF3QixDQUFDLFlBQVksTUFBTTtBQUFBLE1BQ2xELE9BQU8sZUFBZSxVQUFVLFdBQVcsWUFBWTtBQUFBLFFBQ3JELEtBQUssUUFBUyxHQUFHO0FBQUEsVUFDZixRQUFRLEtBQ04sK0RBQ0EsS0FBSyxJQUNMLEtBQUssRUFDUDtB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QXVCLElBQzdCLHdCQUNKLG1CQUFtQixXQUFXLFlBQVksSUFBSSxDQUFDLElBQUkscUJBQ3JEO0FBQUE7QUFBQSxLQUVEO0FBQUE7Ozs7RUN2VnNCO0FBQUEsRUFIM0IsSUFBSSxPQUF1QyxDQUUzQyxFQUFPO0FBQUEsSUFDTCxPQUFPLFVBQWtCO0FBQUE7QUFBQTs7O0FDTDNCO0FBQUE7QUFFTyxJQUFNLFVBQVUsTUFBTTtBQUFBLEVBQ3pCLE9BQU8sT0FBTyxZQUFZLHNCQUFTLENBQUM7QUFBQSxFQUVwQyx1QkFDSSx1QkFHRSxPQUhGO0FBQUEsY0FHRTtBQUFBLHNCQUZFLHVCQUFzRCxVQUF0RDtBQUFBLFFBQVEsU0FBUyxNQUFNLFNBQVMsUUFBUSxDQUFDO0FBQUEsUUFBekM7QUFBQSwwQ0FBc0Q7QUFBQSxzQkFDdEQsdUJBQW1CLEtBQW5CO0FBQUEsa0JBQW1CO0FBQUEsVUFBbkI7QUFBQSxVQUFXO0FBQUE7QUFBQSxTQUFYLGdDQUFtQjtBQUFBO0FBQUEsS0FGdkIsZ0NBR0U7QUFBQTsiLAogICJkZWJ1Z0lkIjogIkVCRkVFRTBDRUM2MTlGMDc2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
