// from docs at: http://jasmine.github.io/2.4/introduction.html
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

// modified from: https://blog.logentries.com/2015/01/unit-testing-with-karma-and-jasmine-for-angularjs/
describe('Hello World example', function() {

	beforeEach(module('myApp'));

	var ctr, scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		ctr = $controller('mainController', {
			$scope: scope
		});
	}));

	it('says hello world!', function () {
		expect(scope.greeting).toEqual('Hello World!');
	});

});

// Unit tests
describe('mainController', function() {

	beforeEach(module('myApp'));
	var ctr, scope;
	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		ctr = $controller('mainController', {
			$scope: scope
		});
	}));

	it('has an array of songs', function () {
		expect(scope.songs).toEqual([]);
	});

	it('initializes new songs', function () {
		scope.initNewSong();
		expect(scope.newSong).toEqual({title: "", artist: ""});
	});

	it('adds saved songs to playlist', function () {
		var length = scope.songs.length;
		scope.saveNewSong()
		expect(scope.songs.length).toEqual(length + 1);
	});

	it('does not add canceled songs to playlist', function () {
		var length = scope.songs.length;
		scope.cancelNewSong()
		expect(scope.songs.length).toEqual(length);
	});

});







