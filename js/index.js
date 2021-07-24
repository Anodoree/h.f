(() => {
  let __hasOwnProperty = Object.hasOwnProperty;
  let __modules = {};
  let __commonjs;
  let __require = (id) => {
    let module = __modules[id];
    if (!module) {
      module = __modules[id] = {
        exports: {}
      };
      __commonjs[id](module.exports, module);
    }
    return module.exports;
  };
  let __toModule = (module) => {
    if (module && module.__esModule) {
      return module;
    }
    let result = {};
    for (let key in module) {
      if (__hasOwnProperty.call(module, key)) {
        result[key] = module[key];
      }
    }
    result.default = module;
    return result;
  };
  let __import = (id) => {
    return __toModule(__require(id));
  };
  __commonjs = {
    1() {
      // app\src\js\index.js
      "use strict";
      $(document).ready(function() {
        if ($(window).innerWidth() > 767) {
          $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
              $(".scrolltotop").fadeIn();
            } else {
              $(".scrolltotop").fadeOut();
            }
          });
          $(".scrolltotop").click(function() {
            $("html, body").animate({
              scrollTop: 0
            }, 200);
            return false;
          });
        }
      });
    }
  };
  return __require(1);
})();
