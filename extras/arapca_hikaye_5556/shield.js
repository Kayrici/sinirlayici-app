/**
 * Modül İzolasyon Kalkanı (Isolation & Error Shield)
 * Bu modüldeki hiçbir hata, depolama işlemi veya çağrı ana uygulamayı etkileyemez.
 */
(function(window) {
  'use strict';
  try {
    // 1. Ana uygulamanın Native Android köprüsünü bu izole modülden tamamen ayır
    try {
      Object.defineProperty(window, 'AndroidBridge', {
        value: undefined,
        writable: false,
        configurable: false
      });
    } catch (_) {}

    // 2. Ana uygulamanın localStorage anahtarlarını koruma altına al
    var PROTECTED_PREFIXES = ['sinirlayici_', 'mock_scheduled_lock', 'dismissed_req_'];
    function isProtectedKey(key) {
      var k = String(key || '');
      for (var i = 0; i < PROTECTED_PREFIXES.length; i++) {
        if (k.indexOf(PROTECTED_PREFIXES[i]) === 0) return true;
      }
      return false;
    }

    try {
      var origSetItem = Storage.prototype.setItem;
      var origRemoveItem = Storage.prototype.removeItem;
      var origClear = Storage.prototype.clear;

      Storage.prototype.setItem = function(key, val) {
        if (this === window.localStorage && isProtectedKey(key)) return;
        return origSetItem.call(this, key, val);
      };
      Storage.prototype.removeItem = function(key) {
        if (this === window.localStorage && isProtectedKey(key)) return;
        return origRemoveItem.call(this, key);
      };
      Storage.prototype.clear = function() {
        if (this === window.localStorage) {
          var keysToDelete = [];
          for (var i = 0; i < window.localStorage.length; i++) {
            var k = window.localStorage.key(i);
            if (k && !isProtectedKey(k)) keysToDelete.push(k);
          }
          for (var j = 0; j < keysToDelete.length; j++) {
            origRemoveItem.call(window.localStorage, keysToDelete[j]);
          }
          return;
        }
        return origClear.call(this);
      };
    } catch (_) {}

    // 3. Yakalanmamış tüm JS ve Promise hatalarını modül içinde hapsedip yut
    window.addEventListener('error', function(e) {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      return true;
    });
    window.addEventListener('unhandledrejection', function(e) {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      return true;
    });
  } catch (_) {}
})(window);
