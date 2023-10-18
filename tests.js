// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should is a defined function',function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should sayHello("Alex") return "Hello, Alex!', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should sayHello("Pat")return "Hello, Pat!)', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should sayHello("World") return "Hello, World!', function () {
        expect(sayHello("World")).toBe("Hello, World!")
    });
    it('should sayHello(true) return "Hello, World!', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should sayHello(false) return "Hello, World!', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
})