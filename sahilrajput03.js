#!/usr/bin/env node
import boxen from "boxen"
import chalk from "chalk"

const name = chalk.bold.cyan("Sahil Rajput")

const long_text = chalk.cyan(`
Hello, this is Sahil Rajput.
I am a fullstack developer.
I like to test and explore new techonlogies...!!

Community ~ https://discord.com/invite/Ahnc32dxzd
Dicord    ~ sahilrajput03#4631
GitHub    ~ https://github.com/sahilrajput03
LinkedIn  ~ https://www.linkedin.com/in/sahilrajput03/
Notes     ~ https://sahilrajput03.ml
Telegram  ~ @sahilrajput03
Twitter   ~ https://twitter.com/freakstarrocks
Website   ~ https://sahilrajput.ml, https://jaadujinn.ml (https://jujn.ml) 

o Join my server on discord and I belive its going to be a wonderful journey there as well.
o I am active on telegram regularly.

Thanks for reading. Have a nice day!`)

const text = `${name}
${long_text}`

const me = boxen(text, {
	margin: 1,
	float: "center",
	padding: 1,
	borderStyle: "single",
	borderColor: "white",
})

// Show the boxen
console.log(me)
