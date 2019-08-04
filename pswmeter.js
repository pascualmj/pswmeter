function passwordStrengthMeter(opts) {

	// Add styles inside body
	const customStyles = document.createElement('style')
	document.body.prepend(customStyles)
	customStyles.innerHTML = `
		${opts.containerElement} {
			height: ${opts.height || 4}px;
			background-color: #eee;
			position: relative;
			overflow: hidden;
			border-radius: ${opts.borderRadius || 2}px;
		}
    ${opts.containerElement} .password-strength-meter-score {
      height: inherit;
      width: 0%;
      transition: .3s ease-in-out;
      background: ${opts.colorScore1 || '#ff7700'};
    }
    ${opts.containerElement} .password-strength-meter-score.psms-25 {width: 25%; background: ${opts.colorScore1 || '#ff7700'};}
    ${opts.containerElement} .password-strength-meter-score.psms-50 {width: 50%; background: ${opts.colorScore2 || '#ffff00'};}
    ${opts.containerElement} .password-strength-meter-score.psms-75 {width: 75%; background: ${opts.colorScore3 || '#aeff00'};}
    ${opts.containerElement} .password-strength-meter-score.psms-100 {width: 100%; background: ${opts.colorScore4 || '#00ff00'};}`

	// Container Element
	const containerElement = document.getElementById(opts.containerElement.slice(1))
	containerElement.classList.add('password-strength-meter')

	// Score Bar
	let scoreBar = document.createElement('div')
	scoreBar.classList.add('password-strength-meter-score')

	// Append score bar to container element
	containerElement.appendChild(scoreBar)

	// Password input
	const passwordInput = document.getElementById(opts.passwordInput.slice(1))
	passwordInput.addEventListener('keyup', function() {
		checkPassword(this.value)
	})

	// Check Password Function
	function checkPassword(password) {

	  let score = 0

	  let regexLower = new RegExp('(?=.*[a-z])')
	  let regexUpper = new RegExp('(?=.*[A-Z])')
	  let regexDigits = new RegExp('(?=.*[0-9])')
	  // For length score print user selection or default value
	  let regexLength = new RegExp('(?=.{' + (opts.pswMinLength || 8) + ',})')

	  if (password.match(regexLower)) { ++score }
	  if (password.match(regexUpper)) { ++score }
	  if (password.match(regexDigits)) { ++score }
	  if (password.match(regexLength)) { ++score }

	  if (score === 0 && password.length > 0) { ++score }

	  updateScore(score)

	}

	// Show Score Function
	function updateScore(score) {
    switch(score) {
      case 1:
        scoreBar.className = 'password-strength-meter-score psms-25'
        break
      case 2:
        scoreBar.className = 'password-strength-meter-score psms-50'
        break
      case 3:
        scoreBar.className = 'password-strength-meter-score psms-75'
        break
      case 4:
        scoreBar.className = 'password-strength-meter-score psms-100'
        break
      default:
        scoreBar.className = 'password-strength-meter-score'
    }
  }

}