'use strict';

var _slicedToArray = (function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i['return']) _i['return']();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError('Invalid attempt to destructure non-iterable instance');
		}
	};
})();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<div>\n\t\t\t\t<h1><a href="', '">', '</a></h1>\n\t\t\t\t<p>', '</p>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<div>\n\t\t\t\t<h1><a href="', '">', '</a></h1>\n\t\t\t\t<p>', '</p>\n\t\t\t</div>\n\t\t']);

function _taggedTemplateLiteral(strings, raw) {
	return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

seajs.use('http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js', function () {
	$(function () {

		var gbody = $('.g-body');
		var a = 'a';
		var b = 'b';
		var c = 'c';
		var _a$b$c = { a: 1, b: 2, c: 3 };
		var a = _a$b$c.a;
		var b = _a$b$c.b;
		var c = _a$b$c.c;

		// var [a, b, c] = 'abc';
		// (function ([a, b, c]) {})('a', 'b', 'c');
		// 字符串解构 需要symbol
		// 方法解构 需要symbol

		function getJSON() {
			return {
				data: [{
					title: 'T1',
					phrase: ['http://www.duowan.com', 'http://www.yy.com']
				}, {
					title: 'T2'
				}],
				length: 2
			};
		}

		var _getJSON = getJSON();

		var _getJSON$data = _slicedToArray(_getJSON.data, 2);

		var _getJSON$data$0 = _getJSON$data[0];
		var title1 = _getJSON$data$0.title;

		var _getJSON$data$0$phrase = _slicedToArray(_getJSON$data$0.phrase, 2);

		var phrase1 = _getJSON$data$0$phrase[0];
		var phrase2 = _getJSON$data$0$phrase[1];
		var title2 = _getJSON$data[1].title;
		var length = _getJSON.length;

		gbody.append($('<h3>').html(title1 + ',' + title2 + ',' + phrase1 + ',' + phrase2 + ',' + length));
		// _slicedToArray Array.isArray
		// ie7/8 不支持 需要部署 es5 shim sham

		// 标签模板
		// 它可以紧跟在一个函数名后面
		var link = 'http://www.duowan.com';
		var title = '多玩';
		var word = '新游戏';
		function tag(strings) {
			for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				values[_key - 1] = arguments[_key];
			}

			var ret = '';
			values.push('');
			$(strings).each(function (index, string) {
				ret += string + values[index];
			});
			return ret;
		}
		var html = tag(_templateObject, link, title, word);
		gbody.append(html);
		// _taggedTemplateLiteral方法需要 Object.freeze
		// ie7/8 不支持 需要部署 es5 shim sham
	});
});