#!/usr/bin/env node
import boxen from 'boxen'
import chalk from 'chalk'
import clear from 'clear'
import open from 'open'
import inquirer from 'inquirer'
// import prompt from 'prompt'

// clear the terminal before showing the npx card
// clear()
const questions = [
	{
		type: 'list',
		name: 'action',
		message: 'What do you want to do?',
		choices: [
			{
				// Use chalk to style headers
				name: `Toss an ${chalk.bold('email')}?`,
				value: () => {
					open('mailto:sahilrajput03@gmail.com')
					console.log('\nLooking forward to hearing your message and replying to you!\n')
				},
			},
			{
				name: 'Exit',
				value: () => {
					console.log('Good bye, have a nice day!\n')
				},
			},
		],
	},
]

const data = {
	name: chalk.bold.green('                     Sahil Rajput'),
	handle: chalk.white('@sahilrajput03'),
	fact: chalk.hex('#B10000')('going towards the core of web technologies • discovering infite web \n\t\t\t• engineering the inside • soaking the truth'),
	github: chalk.hex('#787878')('https://github.com/sahilrajput03'),
	linkedin: chalk.hex('#AB009C')('https://www.linkedin.com/in/sahilrajput03/'),
	website: chalk.hex('#00AB9E')('https://sahilrajput03.ml, https://sahilrajput.ml, https://jaadujinn.ml (https://jujn.ml)'),
	npx: chalk.hex('#A1AB00')('npx sahilrajput03'),

	labelFact: chalk.hex('#FF6262').bold('          About me :'),
	labelGitHub: chalk.hex('#9E9E9E').bold('         GitHub:'),
	labelDribbble: chalk.hex('#F259FF').bold('       LinkedIn:'),
	labelWebsite: chalk.hex('#59FFC8').bold('        Website:'),
	labelCard: chalk.hex('#FFF976').bold('                  Card:'),
}

const me = boxen([`${data.name}`, ``, `${data.labelFact}  ${data.fact}`, ``, `${data.labelGitHub}  ${data.github}`, `${data.labelDribbble}  ${data.linkedin}`, `${data.labelWebsite}  ${data.website}`, ``, `${data.labelCard}  ${data.npx}`, `` /*, `${chalk.bold("Hi there! I'm Dhanur, I'm a Noobcoder🤣️ ")}`, `${chalk.bold('learning new things and techs, ')}`, `${chalk.bold('hobby for pracising and making beautiful and responsive')}`, `${chalk.bold('websites. Please let me know if anyone wants to code with me.')}` */].join('\n'), {
	margin: 1,
	float: 'center',
	padding: 1,
	borderStyle: 'single',
	borderColor: 'blue',
})

// Show the boxen
console.log(me)
// prompt(questions).then((answer) => answer.action())
