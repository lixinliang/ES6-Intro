seajs.use('http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js', function(){
	$(function(){

		// let命令
		// 避免了for循环临时变量i的暴露;
		for (let i = 0; i < 3; i++) {
			console.log(i);
		}
		console.log(typeof i);

		var gbody = $('.g-body');
		var ul = $('<ul>');
		for (let i = 0; i < 3; i++) {
			ul.append($('<li>' + i + '</li>'));
		}
		gbody.append(ul);

		// 使用let形成闭包;
		var li = $('li');
		for (let j = 0; j < li.length; j++) {
			li.eq(j).on('click', function(){
				console.log('e1:'+j);
			})
		}
		for (var k = 0; k < li.length; k++) {
			li.eq(k).on('click', function(){
				console.log('e2:'+k);
			})
		}

		// 单行字符串
		gbody.append(`<h3>I am a title</h3>`);

		// 多行字符串
		gbody.append(`
			<div>
				<p>first phrase</p>
				<p>second phrase</p>
			</div>
		`);

		// 模板字符串
		var link = 'http://www.duowan.com';
		var title = '多玩';
		gbody.append(`
			<div>
				<a href="${link}">
					<h3>${title}</h3>
				</a>
				${(function(){
					var ret = '';
					for (let i = 0; i < 3; i++) {
						ret += '<p>i am No.' + i +'</p>';
					}
					return ret
				})()}
			</div>
		`);

		// 对象简洁表示法
		function getSize () {
			var width = window.innerWidth;
			var height = window.innerHeight;
			function size () {
				return width*height
			}
			return { width, height, size }
		}

		// 函数参数默认值
		function Point(x = 0, y = 0 ) {
			this.x = x;
			this.y = y;
		}
		var p = new Point();
		console.log(p); // { x : 0, y : 0 }

		// rest参数
		function add(ignore, ...values) {
			let sum = 0;
			$(values).each(function (index, value) {
				sum += value
			})
			return sum;
		}
		console.log(add('ignore', 2, 11, 3)); // 16

		// 扩展运算符
		var values = [2,16,3];
		console.log(Math.max(...values)); // 16

		// 箭头函数
		// 函数体内的this对象，绑定定义时所在的对象
		// 不可以当作构造函数 但转译通过
		// 不可以使用arguments对象，该对象在函数体内不存在

		var square = n => n * n;
		console.log(square(4)); // 16

		var dog = {
			name : 'dog : ',
			say : function ( word) {
				setTimeout(()=>{
					console.log(this.name + word);
				}, 0)
			}
		};
		dog.say('hi');
	});
});