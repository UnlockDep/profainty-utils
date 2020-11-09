const badwordsRegex = require("badwords/regexp");

const replaceProfanity = (target: string, placeholder: string): void => {
	// if target has the EXACT match of the word then it will replace that word with placeholder
	if (target.match(badwordsRegex)) target.replace(badwordsRegex, placeholder);
};

const hasProfanity = (target: string): boolean => {
	// if target has any profanity return true
	if (target.match(badwordsRegex)) return true;
	// otherwise return false
	else return false;
};

module.exports = {
	replaceProfanity,
	hasProfanity
};
