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