seajs.use('http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js', function(){
	$(function(){

		var gbody = $('.g-body');
		var [a, b, c] = ['a', 'b', 'c'];
		var {a, b, c} = {a : 1, b : 2, c : 3};
		// var [a, b, c] = 'abc';
		// (function ([a, b, c]) {})('a', 'b', 'c');
		// 字符串解构 需要symbol
		// 方法解构 需要symbol

		function getJSON(){
			return {
				data : [{
					title : 'T1',
					phrase : [
						'http://www.duowan.com',
						'http://www.yy.com'
					]
				},{
					title : 'T2'
				}],
				length : 2
			}
		}
		var {
			data : [{
				title : title1,
				phrase : [phrase1, phrase2]
			},{
				title : title2
			}],
			length
		} = getJSON();
		gbody.append($('<h3>').html(title1+','+title2+','+phrase1+','+phrase2+','+length));
		// _slicedToArray Array.isArray
		// ie7/8 不支持 需要部署 es5 shim sham

		// 标签模板
		// 它可以紧跟在一个函数名后面
		var link = 'http://www.duowan.com';
		var title = '多玩';
		var word = '新游戏';
		function tag (strings, ...values) {
			var ret = '';
			values.push('');
			$(strings).each(( index, string ) => {
				ret += string + values[index];
			})
			return ret
		}
		var html = tag`
			<div>
				<h1><a href="${link}">${title}</a></h1>
				<p>${word}</p>
			</div>
		`;
		gbody.append(html);
		// _taggedTemplateLiteral方法需要 Object.freeze
		// ie7/8 不支持 需要部署 es5 shim sham

	});
});