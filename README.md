# pswmeter

Is a simple JS plugin for adding strength meter to password input. This plugin checks password input to meet the following requirements:

 1. Password has at least one lowercase alfabetic character.
 2. Password has at least one uppercase alfabetic character.
 3. Password has at least one numeric character.
 4. Password length has to be greater than 8 characters.

You can find a demo [here](https://pascualmj.github.io/pswmeter/ "demo here"). It's usage is straightforward:

**HTML**
```html
<input id="psw-input" type="password">
<div id="pswmeter"></div>
<div id="pswmeter-message"></div>
```
Add an ID for password input, the container where you want to show the **pswmeter** and the one that will show your messages (optional).

**JS**
```javascript
// Run pswmeter with options
const myPassMeter = passwordStrengthMeter({
  containerElement: '#pswmeter',
  passwordInput: '#psw-input',
  showMessage: true,
  messageContainer: '#pswmeter-message'
});
```
The first two options, `containerElement` and `passwordInput`, are **required**. You must indicate the containers using ID selectors only. Optionally, you can set `showMessage` to `true` if you want to show messages to the user. If you do so, you must add `messageContainer` to indicate the container using ID selector only.

## Options

Customize the **pswmeter** by adding more properties inside the function's arguments. These are the available properties you can use:

| Option | Default value | Value type | Required | Explanation |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| containerElement | - | String | Yes | ID selector. For example: '#pswmeter' |
| passwordInput | - | String | Yes | ID selector. For example: '#psw-input' |
| height | 4 | Number | No | - |
| borderRadius | 2 | Number | No | - |
| pswMinLength | 8 | Number | No | - |
| colorScore1 | #ff7700 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |
| colorScore2 | #ffff00 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |
| colorScore3 | #aeff00 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |
| colorScore4 | #00ff00 | String | No | Hex, RGB or named color values. For example: '#000', 'rgb(0,0,0)' or 'black' |
| showMessage | false | Boolean | No | By default this functionality is disabled, if you want to show messages you have to set this property to `true` |
| messageContainer | - | String | No | If you set `showMessage` to `true` **you must** indicate the ID selector for the container that will show messages. |
| messagesList | ['No data', 'Too simple', 'Simple', 'Thats OK', 'Great password!'] | Array | No | The first 5 items inside this array will override the default values in order. The first item is shown when the password's score is equal to 0, the second item is shown when the password's score is equal to 1, and so on. |

## Events

Custom events are dispatched from `containerElement` ready to be listened. These are the available events you can use:

| Event | Usage | Explanation |
| :------------ | :------------ | :------------ |
| onScore0 | `myPassMeter.containerElement.addEventListener('onScore0', function() { ... })` | This event is fired when the score is equal to 0. |
| onScore1 | `myPassMeter.containerElement.addEventListener('onScore1', function() { ... })` | This event is fired when the score is equal to 1. |
| onScore2 | `myPassMeter.containerElement.addEventListener('onScore2', function() { ... })` | This event is fired when the score is equal to 2. |
| onScore3 | `myPassMeter.containerElement.addEventListener('onScore3', function() { ... })` | This event is fired when the score is equal to 3. |
| onScore4 | `myPassMeter.containerElement.addEventListener('onScore4', function() { ... })` | This event is fired when the score is equal to 4. |

## Methods

For now there is only one method available:

| Method | Usage | Returned possible values | Explanation |
| :------------ | :------------ | :------------ | :------------ |
| getScore | `myPassMeter.getScore()` | `0`, `1`, `2`, `3` or `4` | When called, this method returns a Number with the current score of the selected password field. |

## Updates

**v1.1** ::: Aug 23, 2019
- Added: custom event dispatching on updateScore function.
- Added: getScore() function that return the current score of the selected password field.
- Added: return anonymous object with the containerElement (to be able to listening for custom events) and getScore function.
- Updated: docs folder for github repo.
- Updated: README.md file and documentation.

**v1.0** ::: Aug 14, 2019
Initial release.

## Contributions

This project is open for community contributions. Feel free to fork this project and make your PRs.

## Contact me

You can find me on twitter [@manupasc](https://twitter.com/manupasc "@manupasc")
