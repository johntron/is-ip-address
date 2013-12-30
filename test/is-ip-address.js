var is_ip_address = require('..').validate;

suite('is-ip-address');

test('should recognize valid IPv6 addresses', function () {
	is_ip_address('::0:0:0:FFFF:129.144.52.38').should.be.true;
	is_ip_address('FEDC:BA98::3210:FEDC:BA98:7654:3210').should.be.true;
	is_ip_address('::13.1.68.3').should.be.true;
});

test('should recognize invalid IPv6 addresses', function () {
	is_ip_address('::').should.be.false;
	is_ip_address('FEDC:').should.be.false;
	is_ip_address('::13.1.68.3z').should.be.false;
});

test('should recognize valid IPv4 addresses', function () {
	is_ip_address('192.168.1.1').should.be.true;
	is_ip_address('10.0.1.1').should.be.true;
});

test('should recognize invalid IPv4 addresses', function () {
	is_ip_address('192..1.1').should.be.false;
	is_ip_address('1000.0.1.1').should.be.false;
	is_ip_address('..0.1.1').should.be.false;
	is_ip_address('0.0.1.1').should.be.false;
});