test('getTargetSelector returns the correct target', function () {
	var fixture = new ElementQueries();
	equal(fixture.getTargetSelector('.eq-rwd-table-container.eq-max-width-400'), '.eq-rwd-table-container');
	equal(fixture.getTargetSelector('DIV.csc-textpic.eq-max-width-6401123 .csc-textpic-imagewrap'), 'DIV.csc-textpic');
	equal(fixture.getTargetSelector('.l-facts header.eq-max-width-220 + ul'), '.l-facts header');
	equal(fixture.getTargetSelector('.news-list .eq-object-column.eq-max-width-410:nth-child(1) + .eq-object-column'), '.news-list .eq-object-column:nth-child(1)');
	equal(fixture.getTargetSelector('.eq-rwd-table-container.eq-max-width-400 .rwd-table'), '.eq-rwd-table-container');
	equal(fixture.getTargetSelector('.eq-max-width-480#extended-header .eq-delimiter .facts'), '#extended-header');
	equal(fixture.getTargetSelector('.l-element-queries .demo-text.eq-max-width-400.eq-min-width-100'), '.l-element-queries .demo-text');
});

test('getLengthFromSelector returns the correct length', function () {
	var subject = new ElementQueries();
	equal(subject.getLengthFromSelector('.eq-min-height-', '.news-list .eq-object-column.eq-max-height-410:nth-child(1) + .eq-object-column'), false);
	equal(subject.getLengthFromSelector('.eq-min-height-', '.news-list .eq-object-column.eq-min-height-410:nth-child(1) + .eq-object-column'), 410);
	equal(subject.getLengthFromSelector('.eq-max-height-', '.news-list .eq-object-column.eq-max-height-410:nth-child(1) + .eq-object-column'), 410);
	equal(subject.getLengthFromSelector('.eq-max-height-', '.news-list .eq-object-column.eq-min-height-410:nth-child(1) + .eq-object-column'), false);
	equal(subject.getLengthFromSelector('.eq-min-width-', '.news-list .eq-object-column.eq-max-width-410:nth-child(1) + .eq-object-column'), false);
	equal(subject.getLengthFromSelector('.eq-min-width-', '.news-list .eq-object-column.eq-min-width-410:nth-child(1) + .eq-object-column'), 410);
	equal(subject.getLengthFromSelector('.eq-max-width-', '.news-list .eq-object-column.eq-min-width-410:nth-child(1) + .eq-object-column'), false);
	equal(subject.getLengthFromSelector('.eq-max-width-', '.news-list .eq-object-column.eq-max-width-410:nth-child(1) + .eq-object-column'), 410);
});

test('applyElementQueries applies max-width class', function () {
	var elements = [
		{
			offsetWidth : 100,
			classList : {
				add : function (cssClass) {
					equal(cssClass, 'eq-max-width-200');
				}
			}
		}
	];

	var subject = new ElementQueries();
	subject.applyElementQueries(elements, {maxW: 200});
});

test('applyElementQueries applies min-width class', function () {
	var elements = [
		{
			offsetWidth : 300,
			classList : {
				add : function (cssClass) {
					equal(cssClass, 'eq-min-width-200');
				}
			}
		}
	];

	var subject = new ElementQueries();
	subject.applyElementQueries(elements, {minW: 200});
});

test('applyElementQueries applies min-height class', function () {
	var elements = [
		{
			offsetHeight : 300,
			classList : {
				add : function (cssClass) {
					equal(cssClass, 'eq-min-height-200');
				}
			}
		}
	];

	var subject = new ElementQueries();
	subject.applyElementQueries(elements, {minH: 200});
});

test('applyElementQueries applies max-height class', function () {
	var elements = [
		{
			offsetHeight : 100,
			classList : {
				add : function (cssClass) {
					equal(cssClass, 'eq-max-height-200');
				}
			}
		}
	];

	var subject = new ElementQueries();
	subject.applyElementQueries(elements, {maxH: 200});
});

test('applyElementQueries applies max-width && min-width class', function () {
	var elements = [
		{
			offsetWidth : 100,
			classList : {
				add : function (cssClass) {
					ok(cssClass === 'eq-max-width-200' || cssClass === 'eq-min-width-50');
				}
			}
		}
	];

	var subject = new ElementQueries();
	subject.applyElementQueries(elements, {maxW: 200, minW: 50});
});

test('applyElementQueries applies max-height && min-height class', function () {
	var elements = [
		{
			offsetHeight : 100,
			classList : {
				add : function (cssClass) {
					ok(cssClass === 'eq-max-height-200' || cssClass === 'eq-min-height-50');
				}
			}
		}
	];

	var subject = new ElementQueries();
	subject.applyElementQueries(elements, {maxH: 200, minH: 50});
});

test('element query for #demo-text-1 gets applied correctly', function () {
	var $target = $('#demo-text-1');
	ok(($target.hasClass('eq-max-width-1999') && $target.hasClass('eq-min-width-400') && $target.hasClass('eq-max-width-2000')), true);
	equal($target.css('color'), 'rgb(255, 0, 0)');
});

test('element query for #demo-text-2 gets applied correctly', function () {
	var $target = $('#demo-text-2');
	ok(($target.hasClass('eq-max-width-600') && $target.hasClass('eq-max-width-2000')), true);
	equal($target.css('color'), 'rgb(50, 50, 50)');
});

test('element query for #demo-text-3 gets applied correctly', function () {
	var $target = $('#demo-text-3');
	ok($target.hasClass('eq-min-width-2500'), true);
	equal($target.css('color'), 'rgb(10, 10, 10)');
});

test('element query for #demo-text-4 gets applied correctly', function () {
	var $target = $('#demo-text-4');
	ok($target.hasClass('eq-max-width-2000'), true);
	equal($target.css('color'), 'rgb(50, 50, 50)');
});


test('element query for #demo-text-5 gets applied correctly', function () {
	var $target = $('#demo-text-5');
	ok(($target.hasClass('eq-max-height-1999') && $target.hasClass('eq-min-height-400') && $target.hasClass('eq-max-height-2000')), true);
	equal($target.css('backgroundColor'), 'rgb(255, 0, 0)');
});

test('element query for #demo-text-6 gets applied correctly', function () {
	var $target = $('#demo-text-6');
	ok(($target.hasClass('eq-max-height-600') && $target.hasClass('eq-max-height-2000')), true);
	equal($target.css('backgroundColor'), 'rgb(50, 50, 50)');
});

test('element query for #demo-text-7 gets applied correctly', function () {
	var $target = $('#demo-text-7');
	ok($target.hasClass('eq-min-height-2500'), true);
	equal($target.css('backgroundColor'), 'rgb(10, 10, 10)');
});

test('element query for #demo-text-8 gets applied correctly', function () {
	var $target = $('#demo-text-8');
	ok($target.hasClass('eq-max-height-2000'), true);
	equal($target.css('backgroundColor'), 'rgb(50, 50, 50)');
});