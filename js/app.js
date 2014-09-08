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
      }
    ];

    $scope.runScript = function(){
      eval(this.q.script);
    };
  }]);