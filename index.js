const fs=require('fs');
for(let name of fs.readdirSync('mods')) {
	const absolute = "./mods/" + name
	fs.renameSync(absolute, absolute.replace(/ |\+/g,'-'))
}
fs.writeFileSync('arch', fs.readdirSync('mods').join('\n'))
