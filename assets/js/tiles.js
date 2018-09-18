

// the variable array. splice and reset this array.
var tilesSet = [
	//High Tiles
	{
		name: "GJ3",
		rank: 16, //individual tile rank
		pairRank: 1, //pair rank

		// need fix
		val: 36,
		realValue: 36,

		pair: 1, //its pair has the same value
		split: [7, 9],

		img: "imgs/GeeJoon3.jpeg" //imgs in a folder in same directory
	},
	{
		name: "GJ6",
		rank: 16,
		pairRank: 1,

		//need fix
		val: 36,
		realValue: 36,

		pair: 1,
		split: [7, 9],
		img: "imgs/GeeJoon6.jpeg"
	},
	{
		name: "teen",
		rank: 1,
		pairRank: 2,
		val: 2,
		realValue: 12,
		pair: 2,
		split: [7, 9, 3, "wong"],
		img: "imgs/Teen1.jpeg"
	},
	{
		name: "teen",
		rank: 1,
		pairRank: 2,
		val: 2,
		realValue: 12,
		pair: 2,
		split: [7, 9, 3, "wong"],
		img: "imgs/Teen2.jpeg"
	},
	{
		name: "dey",
		rank: 2,
		pairRank: 3,
		val: 2,
		realValue: 12,
		pair: 3,
		split: [7, 9, 3, "wong"],
		img: "imgs/Dey1.jpeg"
	},
	{
		name: "dey",
		rank: 2,
		pairRank: 3,
		val: 2,
		realValue: 12,
		pair: 3,
		split: [7, 9, 3, "wong"],
		img: "imgs/dey2.jpeg"
	},
	{
		name: "H8",
		rank: 3,
		pairRank: 4,
		val: 8,
		realValue: 8,
		pair: 4,
		split: [7, 7],
		img: "imgs/H8.jpeg"
	},
	{
		name: "H8",
		rank: 3,
		pairRank: 4,
		val: 8,
		realValue: 8,
		pair: 4,
		split: [7, 7],
		img: "imgs/height2.jpeg"
	},
	{
		name: "H4",
		rank: 4,
		pairRank: 5,
		val: 4,
		realValue: 4,
		pair: 5,
		split: false,
		img: "imgs/H4.jpeg"
	},
	{
		name: "H4",
		rank: 4,
		pairRank: 5,
		val: 4,
		realValue: 4,
		pair: 5,
		split: false,
		img: "imgs/hfour2.jpeg"
	},

	//Symmetric tiles
	{
		name: "H10",
		rank: 5,
		pairRank: 6,
		val: 0,
		realValue: 10,
		pair: 6,
		split: false,
		img: "imgs/H10.jpeg"
	},
	{
		name: "H10",
		rank: 5,
		pairRank: 6,
		val: 0,
		realValue: 10,
		pair: 6,
		split: false,
		img: "imgs/hten2.jpeg"
	},
	{
		name: "H6",
		rank: 6,
		pairRank: 7,
		val: 6,
		realValue: 6,
		pair: 7,
		split: false,
		img: "imgs/H6.jpeg"
	},
	{
		name: "H6",
		rank: 6,
		pairRank: 7,
		val: 6,
		realValue: 6,
		pair: 7,
		split: false,
		img: "imgs/hsix2.jpeg"
	},
	{
		name: "L4",
		rank: 7,
		pairRank: 8,
		val: 4,
		realValue: 4,
		pair: 8,
		split: false,
		img: "imgs/L4.jpeg"
	},
	{
		name: "L4",
		rank: 7,
		pairRank: 8,
		val: 4,
		realValue: 4,
		pair: 8,
		split: false,
		img: "imgs/lfour2.jpeg"
	},

	//Half Symmetric tiles
	{
		name: "11",
		rank: 8,
		pairRank: 9,
		val: 1,
		realValue: 11,
		pair: 9,
		split: false,
		img: "imgs/eleven.jpeg"
	},
	{
		name: "11",
		rank: 8,
		pairRank: 9,
		val: 1,
		realValue: 11,
		pair: 9,
		split: false,
		img: "imgs/eleven2.jpeg"
	},
	{
		name: "L10",
		rank: 9,
		pairRank: 10,
		val: 0,
		realValue: 10,
		pair: 10,
		split: false,
		img: "imgs/L10.jpeg"
	},
	{
		name: "L10",
		rank: 9,
		pairRank: 10,
		val: 0,
		realValue: 10,
		pair: 10,
		split: false,
		img: "imgs/lten2.jpeg"
	},
	{
		name: "H7",
		rank: 10,
		pairRank: 11,
		val: 7,
		realValue: 7,
		pair: 11,
		split: [7, 7],
		img: "imgs/H7.jpeg"
	},
	{
		name: "H7",
		rank: 10,
		pairRank: 11,
		val: 7,
		realValue: 7,
		pair: 11,
		split: [7, 7],
		img: "imgs/hseven2.jpeg"
	},
	{
		name: "L6",
		rank: 11,
		pairRank: 12,
		val: 6,
		realValue: 6,
		pair: 12,
		split: false,
		img: "imgs/L6.jpeg"
	},
	{
		name: "L6",
		rank: 11,
		pairRank: 12,
		val: 6,
		realValue: 6,
		pair: 12,
		split: false,
		img: "imgs/lsix2.jpeg"
	},

	//Mixed pairs
	{
		name: "R9",
		rank: 12,
		pairRank: 13,
		val: 9,
		realValue: 9,
		pair: 13,
		split: [9, 9],
		img: "imgs/R9.jpeg"
	},
	{
		name: "W9",
		rank: 12,
		pairRank: 13,
		val: 9,
		realValue: 9,
		pair: 13,
		split: [9, 9],
		img: "imgs/W9.jpeg"
	},
	{
		name: "L8",
		rank: 13,
		pairRank: 14,
		val: 8,
		realValue: 8,
		pair: 14,
		split: [7, 7],
		img: "imgs/L8.jpeg"
	},
	{
		name: "WL8",
		rank: 13,
		pairRank: 14,
		val: 8,
		realValue: 8,
		pair: 14,
		split: [7, 7],
		img: "imgs/L8(2).jpeg" //fixed wrong file name error.
	},
	{
		name: "R7",
		rank: 14,
		pairRank: 15,
		val: 7,
		realValue: 7,
		pair: 15,
		split: [7, 7],
		img: "imgs/R7.jpeg"
	},
	{
		name: "W7",
		rank: 14,
		pairRank: 15,
		val: 7,
		realValue: 7,
		pair: 15,
		split: [7, 7],
		img: "imgs/W7.jpeg"
	},
	{
		name: "R5",
		rank: 15,
		pairRank: 16,
		val: 5,
		realValue: 5,
		pair: 16,
		split: false,
		img: "imgs/R5.jpeg"
	},
	{
		name: "W5",
		rank: 15,
		pairRank: 16,
		val: 5,
		realValue: 5,
		pair: 16,
		split: false,
		img: "imgs/W5.jpeg"
	}
]





//-----------------------------------------------------------
//							LOGIC
//-----------------------------------------------------------

// each hand holds their respective tile's object.
//placed inside an array for easy loop access.
var hand = [];


//master copy of tiles array. refer to this when resetting array
var master = [];
for (var i = 0; i < tilesSet.length; i++) {
	master.push(tilesSet[i]);
}

//used to reset hand  after separating into low and high
var masterHand = [];





var random = document.getElementById("random");
var houseway = document.getElementById("houseway");

//selects each hand and retrieves their html code
var card1 = document.getElementById("0");
var card2 = document.getElementById("1");
var card3 = document.getElementById("2");
var card4 = document.getElementById("3");
var cards = [card1, card2, card3, card4];


//low and high hands
var low = [];
var high = [];


//selects the h1 that holds the answer
var answer = document.getElementById("answerDisplay");


//Used to see if pair is recognized. eliminates duplicate pair identification.
//stores the obj's .pair(unique to each pair) houseway button
var duplicatePair = [0, 0, 0, 0];



//initialize game
newHand();




//random button
random.addEventListener("click", function(){
	newHand();
	reset();
})


//houseway button. need work
houseway.addEventListener("click", function(){
	checkPair();
	checkTeen();

})








//generates new hand
function newHand() {

	for(var i = 0; i < 4; i++){
		var index = Math.floor(Math.random()* tilesSet.length); 
		//changes the src to a random tiles src from imgs folder  
		cards[i].src = tilesSet[index].img;
		hand[i] = tilesSet[index];
		// splices the selected array, so there won't be the same 4 tiles. always a new tile.
		tilesSet.splice(index, 1);
	}	
}


//check for pairs
function checkPair() {
	//used to reset hand array after separating into low and high.
	for (var i = 0; i < hand.length; i++) {
	masterHand.push(hand[i]);
	}

	//loops through each hand
	for(var i = 0; i < hand.length; i++) {
		//compares each hand to i
		for (var ii = 0; ii < hand.length; ii++) {
			// if there is a pair and its not comparing to itself.
			if (hand[i].pair === hand[ii].pair && i != ii) {
				//if this pair hasn't already been recognized and processed.
				if (duplicatePair[i] === 0 && duplicatePair[ii] === 0) {

					//if we split this pair...
					if (hand[i].split != false) {
						console.log("split on " + hand[i].split);
						answer.textContent = "pair of " + hand[i].name;
					//If the pair doesn't split... (.split = false)
					} else {
						if (duplicatePair[i] === 0 && duplicatePair[ii] === 0) {
							//function to handle no split pairs.
							dontSplit(i, ii);
						}
					}
				}
			}
		}
	}
}

function dontSplit(n, n2) {
	answer.textContent = "never split the pair of " + hand[n].name;
	//pushes pair tiles into a new array.
	high.push(hand[n]);
	high.push(hand[n2]);
	//deletes one of the pairs.
	hand.splice(n, 1);
	//if one is already deleted.
	if (hand.length == 3) {
		for (var i = 0; i < hand.length; i++){
			if(hand[i].pair == high[0].pair){
				//deletes the second pair
				hand.splice(i, 1);
				//sends the result(remaining tile pairs) into a new array low.
				low = hand;
				cards[0].src = low[0].img;
				cards[1].src = low[1].img;
				cards[2].src = high[0].img;
				cards[3].src = high[1].img;
			}
		}
	}	
}



function reset() {

	//resets tilesSet from master array. Even after splice, it now has full deck again.
	tilesSet = [];
	for (var i = 0; i < master.length; i++) {
		tilesSet.push(master[i]);
	}
	duplicatePair =[0, 0, 0, 0];
	low = [];
	high = [];
}

function checkTeen() {
	for(var i = 0; i < hand.length; i++) {
		for (var ii = 0; ii < hand.length; ii++) {
			//if there is T/D with a 7
			if (hand[i].val === 2 && hand[ii].val === 7) {
				answer.textContent = "/9";
			}
			else if (hand[i].val === 2 && hand[ii].val === 8) {
				answer.textContent = "/gong";
			}
			else if (hand[i].val === 2 && hand[ii].val === 9) {
				answer.textContent = "/wong";
			}
		}
	}
}