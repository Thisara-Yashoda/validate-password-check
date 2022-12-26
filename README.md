# validate-password-check

# validate-password-check


Enforce stronger password and email for users by checking 


## Features password

- [x] Lowercase verification
- [x] Uppercase verification
- [x] Special Characters verification
- [x] Numbers verification
- [x] Strings that are not allowed verification

## Example of invalid email id

- [x] mysite.ourearth.com [@ is not present]
- [x] mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
- [x] @you.me.net [ No character before @ ]
- [x] mysite123@gmail.b [ ".b" is not a valid tld ]
- [x] mysite@.org.org [ tld can not start with dot "." ]
- [x] .mysite@mysite.org [ an email should not be start with "." ]
- [x] mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
- [x] mysite..1234@yahoo.com [double dots are not allowed]

## Installation
Install via NPM:

```
npm install validate-password-check
```


```javascript
const {_emailValidation,_passwordValidation} = require('validate-password-check')

console.log(_emailvalidation("thisarayashadagcc@gmail.com"))
console.log(_passwordValidation("tkljgfkldm").output)
```

```Output

{ output: 'Success!', status: true }

```
