const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const despite = require("x-despite-cruelly"),
	repent = require("tea-repent-scorn"),
	steel = require("tea-steel-zowie"),
	begonia = require("tea-begonia-instead"),
	beneath = require("x-beneath-ill-fated"),
	dismiss = require("x-dismiss-across"),
	numeric = require("x-numeric-police"),
	wearily = require("tea-wearily-well-lit"),
	broil = require("x-broil-gadzooks"),
	gosh = require("x-gosh-where"),
	atop = require("x-atop-twister"),
	amend = require("x-amend-beyond"),
	infect = require("x-infect-likewise"),
	anguish = require("x-anguish-notarize"),
	lambkin = require("tea-lambkin-while"),
	pfft = require("tea-pfft-along"),
	beside = require("tea-beside-yowza"),
	slobber = require("tea-slobber-cucumber"),
	fare = require("x-fare-barring"),
	worse = require("x-worse-clearly"),
	unlike = require("tea-unlike-often"),
	cheery = require("x-cheery-messenger"),
	indeed = require("tea-indeed-workforce"),
	blah = require("tea-blah-concede"),
	rarely = require("x-rarely-opposite"),
	quiz = require("tea-quiz-commit"),
	truly = require("tea-truly-smooth"),
	male = require("tea-male-zowie"),
	psst = require("tea-psst-yippee"),
	usually = require("x-usually-longingly"),
	fondue = require("x-fondue-indolent"),
	first = require("x-first-boohoo"),
	floor = require("tea-floor-align"),
	attack = require("x-attack-yippee"),
	however = require("tea-however-sleep"),
	about = require("tea-about-minor");

const USERNAME = "percival_weissnat",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
