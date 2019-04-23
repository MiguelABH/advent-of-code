const input = [
	'bazvmqthjtrnlosiecxyghkwud',
	'pazvmqbijirzlosiecxyghkwud',
	'pazvtqbmjtrnlosiecxyghkwzd',
	'pazvmqbfjtrjlosnlcxyghkwud',
	'pazvkqbfjtrtlosiecjyghkwud',
	'paztmqbfjtrnbosiecxyglkwud',
	'pazvmqbfjtunlosievxmghkwud',
	'pazvmqbfjtmngosiecyyghkwud',
	'jazvmqbfjtrnlosiecxygikpud',
	'pazvqqbfctrnlosimcxyghkwud',
	'pazvmqbfjtrnwogiecxyihkwud',
	'pazvmqbfjtrqlojiecxeghkwud',
	'payvmqbfjtrzlosiecxyghkwuk',
	'pkzvmqnfjtrnlosieciyghkwud',
	'pazvmqqfjtrnldsiecxyghkwui',
	'pazvmqbfttrqlosiecxywhkwud',
	'gazvmybfjthnlosiecxyghkwud',
	'pazvmqbfjtrnlasiecxygptwud',
	'pktvmqbfjtrnwosiecxyghkwud',
	'pazvmqwfjtrnlosiecxgghkkud',
	'pazvmzkbjtrnlosiecxyghkwud',
	'pazvmqbfjtrnloslecxyghuwui',
	'pezvmqbfjtrnlesieyxyghkwud',
	'cazvmqbfjrrnlosiecxyghkmud',
	'pazvmqrfjjrnlosiecxyghkwnd',
	'pazvmqbgjtrnlosiecxyphtwud',
	'pazvmqbvmtrnlosiecxyghkpud',
	'pazdmqbfjtrnlosiecxyuhkpud',
	'pazvmqbflnrnloshecxyghkwud',
	'pazvvqbfjprilosiecxyghkwud',
	'pazvwqbfjtrllosiecxyghknud',
	'pazvmqbfjtrnloniecxdghkaud',
	'pazvmqbfjtrnlvsuecxynhkwud',
	'ptzvmqwfjtrnlosieccyghkwud',
	'pkzvmqbjjtrnlosiecryghkwud',
	'pazvmqqfjtrexosiecxyghkwud',
	'pazgmqbfjtrneoyiecxyghkwud',
	'paznmqbfjtrnlosiecxydhkwzd',
	'pazvmqbfjtrnaosiwcxsghkwud',
	'pazomqbfjxrnlosiewxyghkwud',
	'pazsmqbfjprnlosiecxrghkwud',
	'pazvmqbfqtrnoosiecxygmkwud',
	'aazvmqbfjtrnlosiacxyghjwud',
	'pazviqbfjtrnlobiecxygrkwud',
	'qazwmqbfjhrnlosiecxyghkwud',
	'pazvmqbfftrnlosiqcxygfkwud',
	'patvmqbfjtonlosircxyghkwud',
	'pazvmqbfjtrnlomaecxyghkpud',
	'paztmqbfjtrulossecxyghkwud',
	'pazvmqbijtrnlobiecxyghkwkd',
	'pazvsqbfjtrnlospecxyghkqud',
	'pbzmmqbfjtrnlosiecxyghkwhd',
	'pezvkqbfjtenlosiecxyghkwud',
	'razvmqbfjkrnlosiecxeghkwud',
	'pazcmqbfjtrnloriecxyghkgud',
	'pazvmqbfftfnlosiecvyghkwud',
	'pazvmqpujtrnlosiepxyghkwud',
	'patvgqbfjtrnloslecxyghkwud',
	'pazvmqbfltrnlosibcxyghswud',
	'pazvmebfjtrnlosaecxyehkwud',
	'pazdmqbejtrnlosiecxyghrwud',
	'pazvmcbfntrplosiecxyghkwud',
	'pszvmqbfjtrnlosivcfyghkwud',
	'puzvmqbfjtrnloeiecxyxhkwud',
	'pazvmqbfjtrivooiecxyghkwud',
	'pazvyqbfjtrngosiwcxyghkwud',
	'pauvmqbfjtrnlosimexyghkwud',
	'pazvmqbfjtrnwoshecxeghkwud',
	'dazvmqbfjtrnloshecxygxkwud',
	'pazvmqbfjtrtdosiecxyghvwud',
	'pazxmqbfjtrnlosieceyghjwud',
	'pazvmqbfjtrnlosihexjghkwud',
	'pazvmqbfjsrnlosiecxughiwud',
	'phzvcqbfjtrqlosiecxyghkwud',
	'pazvmibfjtrnlosjecxxghkwud',
	'pazvmqbfjtrbeosiecxlghkwud',
	'pazvmqyfjttolosiecxyghkwud',
	'fawvmqbfjtrnlosiecxyghkwhd',
	'pazvmqbfjprnxosiecxyghkbud',
	'macvmqbfjtrnlosiesxyghkwud',
	'pazsmqbfjtrflouiecxyghkwud',
	'pacvmqbfjtrnltsiecxyghcwud',
	'pazvmqbfjtymlosiecxygykwud',
	'pazvmqbfjtrclosiecxygukwmd',
	'pazvmqbfjtrnlobiecxphhkwud',
	'mazvmqbhitrnlosiecxyghkwud',
	'pazvmqdtjtrnlrsiecxyghkwud',
	'pazvmqbfjgrnllsieczyghkwud',
	'pazvmqbfjtrilosiecxxgikwud',
	'pazvmqbjjtrnlosreceyghkwud',
	'paxvmmbfjtrilosiecxyghkwud',
	'pazqmwbfjtrnlowiecxyghkwud',
	'pazvmqbfjfrnqosiecxyghkwui',
	'pazvmqbfjtrrgosiecxyghswud',
	'pazvmqnfjtrnlosiecsyghkwmd',
	'paiemqbmjtrnlosiecxyghkwud',
	'pazvmqbfdtqnlosiecxyjhkwud',
	'pazvmxbfjthndosiecxyghkwud',
	'pqzvmqbfjtrnlosiecxbghkzud',
	'pagrmqbfjtrnlosiecxygskwud',
	'pazamqtfjtrnsosiecxyghkwud',
	'pazvmqbfjtrnldshecxyzhkwud',
	'pazvmnbfjtrllosieclyghkwud',
	'snzvmqbfjnrnlosiecxyghkwud',
	'pazvsqbfjdrnlosiecxyghswud',
	'pazvmqnfjfrnlosiecsyghkwud',
	'pazvmqbfjtrnlosiecxjghowum',
	'pazvmqbfjtjnlosieczygfkwud',
	'pazvmqbsjtrnloziecxyghkeud',
	'pazvxqbgjtrnlooiecxyghkwud',
	'pazvmqbfjtrnlooiecxmyhkwud',
	'pazvmqbyftrnlosgecxyghkwud',
	'pazvmqbfjtrnlosiwcxyqhksud',
	'pazvmqkyjtrnlokiecxyghkwud',
	'pazfmqbfjtrnlosijcxyohkwud',
	'pazvmqbfjtrnlociecxygikcud',
	'fazvmqbfjtrnlosiecxyjhkuud',
	'pazvmqbojtknlohiecxyghkwud',
	'pazvmqbfjtgnlosbecxyghkwux',
	'pazvmqbfjtrnlocieckoghkwud',
	'pazvdqbfjtrlltsiecxyghkwud',
	'pazvmqbfjtsnlfsiecxyglkwud',
	'przvpqbfjtrnyosiecxyghkwud',
	'pazvmbrfjtrnlosiecxmghkwud',
	'dazvmqbfttrnlostecxyghkwud',
	'pazvmqbfttdnlosiecxygwkwud',
	'pazvmqbvitrnlosieexyghkwud',
	'pazvmqbfjhrnlosjecxyvhkwud',
	'pazvmqbfstrnlosiecxyggkwpd',
	'bazvmqbfjtrnlmsiecxyohkwud',
	'patmmqbfjtrnlosizcxyghkwud',
	'pazvmqbfwtrglosieqxyghkwud',
	'pazvmqbfjtrnlosiecxdhhkwmd',
	'pazvmqbfjdrnlosnexxyghkwud',
	'oazrrqbfjtrnlosiecxyghkwud',
	'pazvmqbfjcrnlosiecxygakwjd',
	'pazvmqbfjtrnlosifcxfghkwyd',
	'pazvmnbfjtrnlosiecxyahzwud',
	'pazvmqbfgtrnlojiecxyghkgud',
	'pazvmqbfjtrnlaliecxyghkwuy',
	'pazvmqbfjtrnlfsiecrtghkwud',
	'pazvmqbkjtrnloswecxdghkwud',
	'pazvtqbfjtdnlosiecxyghkwuu',
	'pozvmqbfrtrnlosiesxyghkwud',
	'payvmqbfjornlossecxyghkwud',
	'pazvuqbfjtrnlosiscxyghkpud',
	'pgzcmqbfjtrnlotiecxyghkwud',
	'pazvvqbfjtrnlobieyxyghkwud',
	'pazycqbfjtrnlosiecxyzhkwud',
	'pizvdqbfjtrnlosiecxbghkwud',
	'pazvmqbfjtrnloqiecxmgtkwud',
	'gazvmqbfjtrnlusiecxpghkwud',
	'pazvmqdfjtralosiecxyghkwmd',
	'pazvmqbfjtmnlosiecxywhawud',
	'pazvlqbfjtrnlosqecxyghqwud',
	'pazvmqbfjtrnlhsneixyghkwud',
	'kazvmqbfjtrqlosimcxyghkwud',
	'pazvmwbfjtrclosiecxyghkuud',
	'pazvmqjfjtrnlosieckyghpwud',
	'pezvmqbgjtrnloseecxyghkwud',
	'pazvqqbfjtfnlosvecxyghkwud',
	'oazvmqbfjtunlosiecxyghkwad',
	'pazvmqbfjtrncoswecxyghfwud',
	'pazvyqbfjtrnlosqecxygtkwud',
	'pazvmqbfjtrvlzsiecxygwkwud',
	'pazvmqbfjjrnlosiekxylhkwud',
	'madvmqbfjtrnlosircxyghkwud',
	'pazvmybfjtrnlisiecxyghkwbd',
	'pazvmqbjjixnlosiecxyghkwud',
	'pazvmqefjtrnloqiecxyghhwud',
	'pazveqbfjtrnlosiecgygzkwud',
	'pazvmqbfjtrxlosiecxmgwkwud',
	'uazvmqufjtrnlosiecxyghkwuo',
	'pasymqbfjtrnlosiecxyghowud',
	'pazvmqbfjtlnlpsiecxyghswud',
	'pnzvmqbfjprnloszecxyghkwud',
	'pafjmqcfjtrnlosiecxyghkwud',
	'pazvmqxfbtrnloqiecxyghkwud',
	'pazvmzbfjtrnposiccxyghkwud',
	'pazvmqbfjotulosiecxyghkwud',
	'pazvmqbfotrnlosgecxykhkwud',
	'przvmqbfjtrnlosiecxyqhkwcd',
	'pazvmqbfjtsnlogiecxyyhkwud',
	'pazvmqbfrtrnlzsiecxyghkwug',
	'pazvmqbfjtrnlosiecxzgukwuo',
	'pqzvmqbqjtrnlosdecxyghkwud',
	'pazvmqbfjtqqlosiecxughkwud',
	'pazvmqbfjtrnlosiedhyphkwud',
	'pazsmqbcutrnlosiecxyghkwud',
	'pazvmqbgrtrnlosiecxyghpwud',
	'pazemqbfjtznlosiecxyghkvud',
	'pazvkqbfjtrilosiecxyghkwod',
	'pfzvmqbfjtrnlopiecxygjkwud',
	'pazvmqvfjtreloniecxyghkwud',
	'pazvmqbfjernljsiecxgghkwud',
	'pazvmqikjtrnlosiecxyghqwud',
	'pazvmqbfjtrnpesoecxyghkwud',
	'fazvmqbfjtrnlosihchyghkwud',
	'pazvmqbfjtgnloanecxyghkwud',
	'pazvmqsfjqrnlosiecxychkwud',
	'parvmqbfjtrnlosiecxygfuwud',
	'przvmqbfjtrhlosihcxyghkwud',
	'pazvmqbcjtrnlosimcxgghkwud',
	'pazvmqbfjtrnlosceciyjhkwud',
	'pazvkqbfjtrylosivcxyghkwud',
	'pazvmqbfjtrnlgsieoxyghdwud',
	'pazvmqnfstrnlowiecxyghkwud',
	'pazvmqbfdtrnlosieumyghkwud',
	'pazvmqbfjtrnlosyecxfghkwul',
	'pazvmqbfjtrclosivcxyghkcud',
	'pazjmqbfjtrnlosiecxygokwkd',
	'hazvmqbfjtrflosiecxzghkwud',
	'wazvmqbfjtrnlomiecxyphkwud',
	'yazvmqbfjirnkosiecxyghkwud',
	'pczvmqbfjtrnlohiecxyghkwpd',
	'pazvmqbfotrbeosiecxlghkwud',
	'pazvmqbfjtrplosiecxynhzwud',
	'paxvbqbwjtrnlosiecxyghkwud',
	'pazvmqvfjtrnlosiecbyghqwud',
	'pazjmqbfjtrnlosiecxoghkwed',
	'pazvmqbfjtreljsitcxyghkwud',
	'mazamqbfjtrnlosiecxoghkwud',
	'pazvmqbfjjrnposiscxyghkwud',
	'pbrvmqbfjtrnloliecxyghkwud',
	'pazvmqbfjtrnlosiecxgghkyyd',
	'pmzvmqbfntrnlosiecxyghkwuw',
	'pazvzqbfjtrnlosienxyghzwud',
	'pazvmqifjtvnlosrecxyghkwud',
	'tazvmqbhjtjnlosiecxyghkwud',
	'pazvmqbfjtlnxosiecxyghkwuo',
	'pazvmqbfjennlosiecxyghkwxd',
	'pahvmqbfjhrnlosiecxythkwud',
	'pazvmlkfjtrnlxsiecxyghkwud',
	'pfzvmqbojtrnlosieciyghkwud',
	'pazvbqbfjtrollsiecxyghkwud',
	'eazvmqbfjtrnlosiecayghkoud',
	'pazvmqbfjtjnlvsiecxyghkwsd',
	'pazvoqbojtrnlosiecfyghkwud',
	'pazvmqbfjtuslosiecxyghksud',
	'pazvmqbfjnrnlosiedxyghkwup',
	'pazvmqbjjtrnlosieaxyghdwud',
	'pazccqbfjtrhlosiecxyghkwud',
	'pbzvmqkfjtrnlosievxyghkwud',
	'pazvmqrljtrnlosiscxyghkwud',
	'pazvmqbfjfoqlosiecxyghkwud',
	'pazcmqbfjtrnlosiecxyihkwuf',
	'pszvmqbfjtrnnosiacxyghkwud',
	'aazvmqbfjtrnlosieyxyghkwld',
	'pazvrqbfntrnlosiycxyghkwud',
	'pkzvoqbfjtrnlosiecxyghxwud'
];

const buttonPuzzleA = document.querySelector('.buttonPuzzleA');
const checksumLabel = document.querySelector('.checksum');
function puzzleA() {
	// PART ONE
	// Get repeating character from every string from the input
	const repetitions = new Set();
	input.forEach( ID => {
		const repetition = [...ID].reduce( (repeatedCharacters, character) => {
				if ( !repeatedCharacters[character] )
					repeatedCharacters[character] = 0;
				repeatedCharacters[character]++;
				return repeatedCharacters;
			}, {});
		repetitions.add(repetition);
	});

	// Get 'Two' and 'Three' counts
	const twice = [...repetitions].reduce( (total, repetition) => {
		return Object.values(repetition).some( value => value === 2) + total;
	}, 0);
	console.log(twice);
	const thrice = [...repetitions].reduce( (total, repetition) => {
		return Object.values(repetition).some( value => value === 3) + total;
	}, 0);
	console.log(thrice);
	// Calculate the checksum
	const checksum = twice * thrice;
	checksumLabel.innerHTML = checksum;
	return checksum;
}
buttonPuzzleA.addEventListener('click', puzzleA);

const buttonPuzzleB = document.querySelector('.buttonPuzzleB');
const commonLetters = document.querySelector('.commonLetters');
function puzzleB() {
	// PART TWO
	// Compare every string with the other ones
	// Save the two ids that just differ by one character
	let differences = 0;
	let lastCharIndex;
	let charIndex;
	let id1;
	let id2;
	for (let i = 0; i < input.length; i++) {
		for (let k = i + 1; k < input.length; k++) {
			for (let c = 0; c < input[i].length; c++) {
				if (input[i][c] !== input[k][c]) {
					charIndex = c;
					differences++;
				}
			}
			if (differences === 1) {
				id1 = input[i];
				id2 = input[k];
				lastCharIndex = charIndex;
			} 
			else
				charIndex = 0;
			differences = 0;	
		}
	}
	const lettersCommon = [id1.slice(0, lastCharIndex), id1.slice(lastCharIndex + 1, id1.length)].join('');
	commonLetters.innerHTML = lettersCommon;
	return `ID 1: ${id1}, ID 2: ${id2}, Letters in Common: ${lettersCommon}`
}
buttonPuzzleB.addEventListener('click', puzzleB);