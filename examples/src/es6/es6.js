seajs.use('http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js', function(){
	$(function(){

		var gbody = $('.g-body');
		 // for of
		 // Class构造函数定义与继承
		{
			let values = [1,2,3];
			for (let value of values) {
				console.log(value);
			}
		}
		{
			let values = new Map([ ['x', 1], ['y', 2], ['z', 3] ]);
			console.log(values);
			for (let [name, value] of values) {
				console.log(name + ':' + value);
			}
		}

		// Class构造函数定义与继承
		class Point {
			constructor ( x, y ) {
				this.x = x;
				this.y = y;
			}
			getPoint (){
				var x = this.x;
				var y = this.y;
				return { x, y }
			}
			setPoint ( x, y ) {
				this.x = y;
				this.y = y;
				return this
			}
		};
		var zero = new Point(0, 0);
		console.log(zero);

		class ColorPoint extends Point {
			constructor ( x, y , color) {
				super(x, y);
				this.color = color;
			}
		}
		var red = new ColorPoint(0, 0, '#ff0000');
		console.log(red);
		console.log(typeof red.getPoint);
	});
});