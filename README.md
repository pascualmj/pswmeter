# pswmeter

Simple JS plugin for adding strength meter to password input. This plugin check password input to meet these requirements:

 1. Password has at least one lowercase alfabetic character.
 2. Password has at least one uppercase alfabetic character.
 3. Password has at least one numeric character.
 4. Password length has to be greater than 8 characters.

You can find a [demo here](https://pascualmj.github.io/pswmeter/ "demo here"). It's usage is straightforward:

**HTML**
```html
<input id="pswInput" type="password">
<div id="pswmeter"></div>
```
Add an ID for both password input and div where you want to show the **pswmeter**.

**JS**
```javascript
// Run pswmeter with options
passwordStrengthMeter({
  containerElement: '#pswmeter',
  passwordInput: '#pswInput'
});
```
Those two options, `containerElement` and `passwordInput`, are **required**. You have to indicate the css selector preferable using id.

## Options

Customize the **pswmeter** by passing more properties inside the function's argument. These are the available properties you can use:

| Option | Default value | Value type | Required | Explanation |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| containerElement | no | String | Yes | ID selector. For example: '#pswmeter' |
| passwordInput | no | String | Yes | ID selector. For example: '#pswInput' |
| height | 4 | Number | No | - |
| borderRadius | 2 | Number | No | - |
| pswMinLength | 8 | Number | No | - |
| colorScore1 | #ff7700 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |
| colorScore2 | #ffff00 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |
| colorScore3 | #aeff00 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |
| colorScore4 | #00ff00 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |

## Contributions

This project is open for community contributions. Feel free to fork this project and make your PRs.

## Contact me

You can find me on twitter [@manupasc](https://twitter.com/manupasc "@manupasc")
