# is-ip-address

  Validate a string is an IP (v4 or v6) address.

## Installation
  
```
$ component install johntron/is-ip-address
```
```
$ npm install is-ip-address
```

## API

### As a stand-alone function

```
var is_ip = require('is-ip-address'),
	is_valid_ip = is_ip.validate('192.168.1.a');
```
	
### With segmentio/validate-form

```
var is_ip = require('is-ip-address'),
	validate = require('validate-form'),
	$form = document.querySelector('#ip_form'),
	validator = validate($form).use(is_ip).on('blur')
		.field('ip').is('ip');
		
	validator.validate(); // Validate now (instead of on blur)
```

## License

  MIT
