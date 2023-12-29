const mods = JSON.stringify(require("./mods.json"), null, 4)
require('fs').writeFileSync("./mods.json", mods);
return;
const fs=require('fs');
for(let name of fs.readdirSync('mods')) {
	const absolute = "./mods/" + name
	fs.renameSync(absolute, absolute.replace(/ |\+/g,'-'))
}
fs.writeFileSync('arch', fs.readdirSync('mods').join('\n'))
