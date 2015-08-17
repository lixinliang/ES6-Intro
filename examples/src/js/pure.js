'use strict';

seajs.use('http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js', function () {
	$(function () {

		// let命令
		// 避免了for循环临时变量i的暴露;
		for (var _i = 0; _i < 3; _i++) {
			console.log(_i);
		}
		console.log(typeof i);

		var gbody = $('.g-body');
		var ul = $('<ul>');
		for (var _i2 = 0; _i2 < 3; _i2++) {
			ul.append($('<li>' + _i2 + '</li>'));
		}
		gbody.append(ul);

		// 使用let形成闭包;
		var li = $('li');

		var _loop = function _loop(j) {
			li.eq(j).on('click', function () {
				console.log('e1:' + j);
			});
		};

		for (var j = 0; j < li.length; j++) {
			_loop(j);
		}
		for (var k = 0; k < li.length; k++) {
			li.eq(k).on('click', function () {
				console.log('e2:' + k);
			});
		}

		// 单行字符串
		gbody.append('<h3>I am a title</h3>');

		// 多行字符串
		gbody.append('\n\t\t\t<div>\n\t\t\t\t<p>first phrase</p>\n\t\t\t\t<p>second phrase</p>\n\t\t\t</div>\n\t\t');

		// 模板字符串
		var link = 'http://www.duowan.com';
		var title = '多玩';
		gbody.append('\n\t\t\t<div>\n\t\t\t\t<a href="' + link + '">\n\t\t\t\t\t<h3>' + title + '</h3>\n\t\t\t\t</a>\n\t\t\t\t' + (function () {
			var ret = '';
			for (var _i3 = 0; _i3 < 3; _i3++) {
				ret += '<p>i am No.' + _i3 + '</p>';
			}
			return ret;
		})() + '\n\t\t\t</div>\n\t\t');

		// 对象简洁表示法
		function getSize() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			function size() {
				return width * height;
			}
			return { width: width, height: height, size: size };
		}

		// 函数参数默认值
		function Point() {
			var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

			this.x = x;
			this.y = y;
		}
		var p = new Point();
		console.log(p); // { x : 0, y : 0 }

		// rest参数
		function add(ignore) {
			var sum = 0;

			for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				values[_key - 1] = arguments[_key];
			}

			$(values).each(function (index, value) {
				sum += value;
			});
			return sum;
		}
		console.log(add('ignore', 2, 11, 3)); // 16

		// 扩展运算符
		var values = [2, 16, 3];
		console.log(Math.max.apply(Math, values)); // 16

		// 箭头函数
		// 函数体内的this对象，绑定定义时所在的对象
		// 不可以当作构造函数 但转译通过
		// 不可以使用arguments对象，该对象在函数体内不存在

		var square = function square(n) {
			return n * n;
		};
		console.log(square(4)); // 16

		var dog = {
			name: 'dog : ',
			say: function say(word) {
				var _this = this;

				setTimeout(function () {
					console.log(_this.name + word);
				}, 0);
			}
		};
		dog.say('hi');
	});
});