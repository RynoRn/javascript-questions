angular.module('jsQuestions', [])
  .controller('questionsController', ['$scope', function($scope) {

    $scope.buttonText = 'Run script';

    $scope.tests = [
      {
        id: 'test1',
        title: 'Test #1',
        sourceUrl: 'http://dmitry.baranovskiy.com/post/91403200',
        questions: [
          { script: 'if (!("a" in window)) {\n\tvar a = 1;\n}\nalert(a);' },
          { script: 'var a = 1,\nb = function a(x) {\n\tnx && a(--x);\n};\nalert(a);' },
          { script: 'function a(x) {\n\treturn x * 2;\n}\nvar a;\nalert(a);' },
          { script: 'function b(x, y, a) {\n\targuments[2] = 10;\n\talert(a);\n}\nb(1, 2, 3);' },
          { script: 'function a() {\n\talert(this);\n}\na.call(null);' }
        ]
      },
      {
        id: 'test2',
        title: 'Test #2',
        sourceUrl: 'http://perfectionkills.com/javascript-quiz/',
        questions: [
          { script: '(function(){\n\treturn typeof arguments;\n})();' },
          { script: 'var f = function g(){ return 23; };\ntypeof g();' },
          { script: '(function(x){\n\tdelete x;\n\treturn x;\n})(1);' },
          { script: 'var y = 1, x = y = typeof x;\nalert(x);' },
          { script: '(function f(f){\n\treturn typeof f();\n})(function(){ return 1; });' },
          { script: 'var foo = {\n\tbar: function() { return this.baz; },\n\tbaz: 1\n};\n(function(){\n\treturn typeof arguments[0]();\n})(foo.bar);' },
          { script: 'var foo = {\n\tbar: function(){ return this.baz; },\n\tbaz: 1\n}\nalert(typeof (f = foo.bar)());' },
          { script: 'var f = (function f(){ return "1"; }, function g(){ return 2; })();\nalert(typeof f);' },
          { script: 'var x = 1;\nif (function f(){}) {\n\tx += typeof f;\n}\nalert(x);' },
          { script: 'var x = [typeof x, typeof y][1];\nalert(typeof typeof x);' },
          { script: '(function(foo){\n\treturn typeof foo.bar;\n})({ foo: { bar: 1 } });' },
          { script: '(function f(){\n\tfunction f(){ return 1; }\n\treturn f();\n\tfunction f(){ return 2; }\n})();' },
          { script: 'function f(){ return f; }\nnew f() instanceof f;' },
          { script: 'with (function(x, undefined){}) length;' }
        ]
      },
      {
        id: 'test3',
        title: 'Test #3',
        sourceUrl: 'http://doppnet.com/2011/10/10-advanced-javascript-interview-questions/',
        questions: [
          { script: '(function() {\n\tbaz = 5;\n\tvar bar = 10;\n})();\nconsole.log(baz);\nconsole.log(bar);' },
          { script: 'console.log("" == "0");\nconsole.log(0 == "");\nconsole.log(0 == "0");\nconsole.log(false == "false");\nconsole.log(false == "0");\nconsole.log(false == undefined);\nconsole.log(false == null);\nconsole.log(null == undefined);' },
          { script: '(function() {\n\tvar foo = 1;\n\tfunction bar() {\n\t\tvar foo = 2;\n\t}\n\tbar();\n\tconsole.log(foo);\n\tif(true) {\n\t\tvar foo = 3;\n\t}\n\tconsole.log(foo);\t\n})();' },
          { script: '(function() {\n\tconsole.log(bar);\n\tconsole.log(baz);\n\tfoo();\n\tfunction foo() {\n\tconsole.log("aloha");\n\t}\n\tvar bar = 1;\n\tbaz = 2;\n})();' },
          { script: '(function() {\n\tfunction foo(x) {\n\t\tvar baz = 3;\n\t\treturn function (y) {\n\t\t\tconsole.log(x + y + (++baz));\n\t\t}\n\t}\n\tvar moo = foo(2);\n\tmoo(1);\n\tmoo(1);\n})();' },
          { script: '(function() {\n\tvar genericObject = {\n\t\tbar : "Hello World",\n\t\tget_bar : function() {\n\t\t\treturn this.bar;\n\t\t}\n\t};\n\tvar customObject = Object.create(genericObject);\n\tcustomObject.bar = "Aloha folks!";\n\tconsole.log(customObject.get_bar());\n\tdelete customObject.bar;\n\tconsole.log(customObject.get_bar());\n})();' }
        ]
      },
      {
        id: 'test4',
        title: 'Test #4',
        sourceUrl: 'http://jsquiz.com/',
        questions: [
          { script: '// The (Revealing) Module Pattern:\nvar Module = (function () {\n\tvar name = "private";\n\tfunction getName() {\n\t\treturn name;\n\t}\n\treturn {\n\t\tgetName: getName\n\t};\n})();\nconsole.log(Module.getName());' },
          { script: '// How to make a method chainable?\nfunction chainable() {\n\treturn this;\n}' },
          { script: '// How can you detect whether an object is an Array?\nvar someArray = [];\nfunction isArray(arr) {\n\treturn Object.prototype.toString.call(arr) === "[object Array]";\n}\nisArray(someArray);' },
          { script: 'function logValues() {\n\tfor (var i=0; i<5; i++) {\n\t\twindow.setTimeout((function (current) {\n\t\t\treturn function () {\n\t\t\t\tconsole.log(current);\n\t\t\t};\n\t\t})(i), 0);\n\t}\n}\nlogValues();' },
          { script: '// Throttle\nvar update = function() { console.log("update") };\nvar throttle = (function () {\n\tvar timer;\n\treturn function (callback, interval) {\n\t\tif (timer) {\n\t\t\twindow.clearTimeout(timer);\n\t\t}\n\t\ttimer = window.setTimeout(callback, interval);\n\t};\n})();\n$(window).on("resize", function () {\n\tthrottle(update, 200);\n});' }
        ]
      },
      {
        id: 'test5',
        title: 'Test #5',
        sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures',
        questions: [
          { script: 'function add(x) {\n\treturn function(y) {\n\t\treturn x + y;\n\t};\n}\n\nconsole.log(add(5)(2));\nconsole.log(add(10)(2));' }
        ]
      }
    ];

    $scope.runScript = function(){
      try {
        eval(this.q.script);
      } catch (e){
        console.error(e.message)
      }
    };
  }]);