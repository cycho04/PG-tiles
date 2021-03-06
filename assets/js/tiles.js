// the variable array. splice and reset this array.
let tilesSet = [
	//High Tiles
	{
		name: "GJ3",
		rank: 16, //individual tile rank
		pairRank: 1, //pair rank
		val: [3, 6],
		realValue: [3, 6],
		pair: 1, //its pair has the same value
		split: [7, 9],
		img: "imgs/GeeJoon3.jpeg" //imgs in a folder in same directory
	},
	{name: "GJ6", rank: 16, pairRank: 1, val: [3, 6], realValue: [3, 6], pair: 1, split: [7, 9], img: "imgs/GeeJoon6.jpeg"},
	{name: "teen", rank: 1, pairRank: 2, val: 2, realValue: 12, pair: 2, split: [[6, 8], [3, 90]],img: "imgs/Teen1.jpeg"},
	{name: "teen", rank: 1, pairRank: 2, val: 2, realValue: 12, pair: 2, split: [[6, 8], [3, 90]], img: "imgs/Teen2.jpeg"},
	{name: "dey", rank: 2, pairRank: 3, val: 2, realValue: 12, pair: 3, split: [[6, 8], [3, 90]], img: "imgs/Dey1.jpeg"},
	{name: "dey",rank: 2, pairRank: 3, val: 2, realValue: 12, pair: 3, split: [[6, 8], [3, 90]], img: "imgs/Dey2.jpeg"},
	{name: "H8", rank: 3, pairRank: 4, val: 8, realValue: 8, pair: 4, split: [7, 7], img: "imgs/H8.jpeg"},
	{name: "H8", rank: 3, pairRank: 4, val: 8, realValue: 8, pair: 4, split: [7, 7], img: "imgs/height2.jpeg"},
	{name: "H4", rank: 4, pairRank: 5, val: 4, realValue: 4, pair: 5, split: false, img: "imgs/H4.jpeg"},
	{ name: "H4", rank: 4, pairRank: 5, val: 4, realValue: 4, pair: 5, split: false, img: "imgs/hfour2.jpeg"},
	//Symmetric tiles
	{ name: "H10", rank: 5, pairRank: 6, val: 0, realValue: 10, pair: 6, split: false, img: "imgs/H10.jpeg"},
	{name: "H10", rank: 5, pairRank: 6, val: 0, realValue: 10, pair: 6, split: false, img: "imgs/hten2.jpeg"},
	{name: "H6", rank: 6, pairRank: 7, val: 6, realValue: 6, pair: 7, split: false, img: "imgs/H6.jpeg"},
	{name: "H6", rank: 6, pairRank: 7, val: 6, realValue: 6, pair: 7, split: false, img: "imgs/hsix2.jpeg"},
	{name: "L4", rank: 7, pairRank: 8, val: 4, realValue: 4, pair: 8, split: false, img: "imgs/L4.jpeg"},
	{name: "L4", rank: 7, pairRank: 8, val: 4, realValue: 4, pair: 8, split: false, img: "imgs/lfour2.jpeg"},
	//Half Symmetric tiles
	{name: "11", rank: 8, pairRank: 9, val: 1, realValue: 11, pair: 9, split: false, img: "imgs/eleven.jpeg"},
	{name: "11", rank: 8, pairRank: 9, val: 1, realValue: 11, pair: 9, split: false, img: "imgs/eleven2.jpeg"},
	{name: "L10", rank: 9, pairRank: 10, val: 0, realValue: 10, pair: 10, split: false, img: "imgs/L10.jpeg"},
	{name: "L10", rank: 9, pairRank: 10, val: 0, realValue: 10, pair: 10, split: false, img: "imgs/lten2.jpeg"},
	{name: "H7", rank: 10, pairRank: 11, val: 7, realValue: 7, pair: 11, split: [7, 7], img: "imgs/H7.jpeg"},
	{name: "H7", rank: 10, pairRank: 11, val: 7, realValue: 7, pair: 11, split: [7, 7], img: "imgs/hseven2.jpeg"},
	{name: "L6", rank: 11, pairRank: 12, val: 6, realValue: 6, pair: 12, split: false, img: "imgs/L6.jpeg"},
	{name: "L6", rank: 11, pairRank: 12, val: 6, realValue: 6, pair: 12, split: false, img: "imgs/lsix2.jpeg"},
	//Mixed pairs
	{name: "R9", rank: 12, pairRank: 13, val: 9, realValue: 9, pair: 13, split: [9, 9], img: "imgs/R9.jpeg"},
	{name: "W9", rank: 12, pairRank: 13, val: 9, realValue: 9, pair: 13, split: [9, 9], img: "imgs/W9.jpeg"},
	{name: "L8", rank: 13, pairRank: 14, val: 8, realValue: 8, pair: 14, split: [7, 7], img: "imgs/L8.jpeg"},
	{name: "WL8", rank: 13, pairRank: 14, val: 8, realValue: 8, pair: 14, split: [7, 7], img: "imgs/L8(2).jpeg"},
	{name: "R7", rank: 14, pairRank: 15, val: 7, realValue: 7, pair: 15, split: [7, 7], img: "imgs/R7.jpeg"},
	{name: "W7", rank: 14, pairRank: 15, val: 7, realValue: 7, pair: 15, split: [7, 7], img: "imgs/W7.jpeg"},
	{name: "R5", rank: 15, pairRank: 16, val: 5, realValue: 5, pair: 16, split: false, img: "imgs/R5.jpeg"},
	{name: "W5", rank: 15, pairRank: 16, val: 5, realValue: 5, pair: 16, split: false, img: "imgs/W5.jpeg"}
]

//-----------------------------------------------------------
//							LOGIC
//-----------------------------------------------------------
let hand = [], // each hand holds their respective tile's object.
	master = [], //master copy of tiles array. refer to this when resetting array
	masterHand = [], //used to reset hand after separating into low and high
	low = [], //low hand
	high = []; //high hand

//sets master array.
for (let i = 0; i < tilesSet.length; i++) {
	master.push(tilesSet[i]);
}

const random = document.getElementById("random"),
	  houseway = document.getElementById("houseway"),
	  //selects the h1 that holds the answer
	  answer = document.getElementById("answerDisplay"),
	  //selects each hand and retrieves their html code
	  card1 = document.getElementById("0"),
	  card2 = document.getElementById("1"),
	  card3 = document.getElementById("2"),
	  card4 = document.getElementById("3"),
	  cards = [card1, card2, card3, card4];

//==================================================================================================================
//initialize game
newHand();

//random button
random.addEventListener("click", function(){
	enable(houseway); //resets the houseway button after disabling it.
	newHand();
	reset();
	for (let i = 0; i < hand.length; i++){
		if (hand[i].rank === 16){
			whichGJ(i);
		}
	}
})

//houseway button
houseway.addEventListener("click", function(){
	//add logic to decide when to call certain functions. eg no need to call all func if no split pair.
	if(!checkPair()){
		if(!exceptions(hand)){
			if(!checkTeen()){
				if(!checkBB()){
					hiLow();
				}
			}
		}	
	}
	disable(houseway); //disables hw button after one click.
})

//==================================================================================================================
//generates new hand
function newHand() {
	for(let i = 0; i < 4; i++){
		let index = Math.floor(Math.random()* tilesSet.length); 
		//changes the src to a random tiles src from imgs folder  
		cards[i].src = tilesSet[index].img;
		hand[i] = tilesSet[index];
		//used to reset hand array after separating into low and high.
		masterHand.push(hand[i]);
		// splices the selected array, so there won't be the same 4 tiles. always a new tile.
		tilesSet.splice(index, 1);
	}	
}

//disables hw btn
const disable = (btn) => {
	btn.disabled = true;
}

// enables hw btn
const enable = (btn) => {
	btn.disabled = false;
}

//needs work.
const exceptions = (hand) => {
	
	return false;
}

//baccarat counting
const baccaratCount = (n, m) => {
	let number = n + m;
	if (number >= 10 && number < 20){
		return number -= 10;
	} 
	else if (number >= 20) {
		return number -= 20;
	} 
	else {
		return number;
	}
}

//geejoon in progess
function whichGJ(index) {
	let baby = 0,
		six = 0,
		number = 0,
		big = 0;
		for (let i = 0; i < hand.length; i++){
			if (hand[i].realValue === 4 || hand[i].realValue === 5){
				baby += 1;
			}
			else if (hand[i].realValue === 6){
				six += 1;
			}
			else if (hand[i].realValue >= 7 && hand[i].realValue <= 9){
				number += 1;
			}
			else if (hand[i].realValue >= 10){
				big += 1;
			}
		}
		//
		switch(big){
			case 1:
				//code
				break;
			case 2:
				//nothing because it behaves the same as 3 big.
			case 3:
				hand[index].val = 6;
				hand[index].realValue = 6;
				break;
			default:
				console.log("nothing found");
		}
	return false;
}

//check for pairs
function checkPair() {
	//loops through each hand
	for(let i = 0; i < hand.length; i++) {
		//compares i to ii
		for (let ii = 0; ii < hand.length; ii++) {
			// if there is a pair and its not comparing to itself.
			if (hand[i].pair === hand[ii].pair && i != ii) {
				//if we split this pair...
				if (hand[i].split != false) {
					split(i, ii);
					return true;
				}
				else { 
					dontSplit(i, ii);
					return true;
				}
			}
		}
	}
	return false; //no pairs
}

const intoHighLow = (n, n2) => {
	//pushes the pairs into high[].
	high.push(hand[n]);
	high.push(hand[n2]);
	//deletes one
	hand.splice(n, 1);
	//search for 2nd pair's index since hand.length changes after splice above.
	for (let i = 0; i < hand.length; i++){
		if (hand[i].pair === high[0].pair){
			//deletes the second pair
			hand.splice(i, 1);
			//sends remaining tile pairs into a new array low.
			low.push(hand[0]);
			low.push(hand[1]);
		}
	}
	return true;
}

function dontSplit(n, n2) {
	intoHighLow(n, n2)
	moveTiles();
	return true;
}

function split(n, n2) {
	//separates hand into high and low.
	intoHighLow(n, n2);

	//Gee Joon
	if (high[0].pair === 1) {
		//one of the pair tiles with the other tiles.
		var combo1 = baccaratCount(high[0].val[0], low[0].val);
		var combo2 = baccaratCount(high[0].val[0], low[1].val);
		//if it meets the split requirements...
		if((combo1 >= 7 && combo2 >= 9) || (combo1 >= 9 && combo2 >= 7)){
			moveTiles("split");
			return true;
		} else {
			moveTiles();
			return
		}
	//Teen/Dey
	} else if(high[0].val === 2) {
		var combo1 = baccaratCount(high[0].val, low[0].val);
		var combo2 = baccaratCount(high[0].val, low[1].val);
		//checks if any of the tiles are 7,8, or 9. for 9 gong and wong.
		var check7_9 = low[0].val >= 7 && low[0].val <= 9;
		var check7_9_2 = low[1].val >= 7 && low[1].val <= 9;
		//regular 6-8 split rule.
		if((combo1 >= 6 && combo2 >= 8) || (combo1 >= 8 && combo2 >= 6)){
			moveTiles("split");
			return true;
			//we might have 7,8,9 with T/D. (with 8 and 9, it turns to 0 and 1, so we need this part.)
		} else if (check7_9 === true || check7_9_2 === true){
			//if both are 7,8, or 9
			if (check7_9 === check7_9_2){
				moveTiles("split");
				return true;
				//only if 1..
			} else if (check7_9 === true && check7_9_2 === false){
				if (low[1].val >= 3 && low[1].val <=6){
					moveTiles("split");
					return true;
				} else {
					moveTiles();
					return true;
				}
				//if other one...
			} else{
				if (low[0].val >= 3 && low[0].val <=6){
					moveTiles("split");
					return true;
				} else {
					moveTiles();
					return true;
				}
			}
		//does not split.
		} else {
			moveTiles();
			return;
	}
	} else {
		// all other pairs. split pairs are in one array with a length of 2. ex: [7, 9]
		var combo1 = baccaratCount(high[0].val, low[0].val);
		var combo2 = baccaratCount(high[0].val, low[1].val);
		if(combo1 >= high[0].split[0] && combo2 >= high[0].split[0]){
			moveTiles("split");
		} else {
			moveTiles();
		}
		return true;
	}
}

function checkTeen() {
	return false;
}

const ascendingOrder = () => {
	//switch placeholders
	let switch1 = "";
	let switch2 = "";
	//starts from [0] and applies the switch 4 times(first forloop does)
	for(let i = 0; i < hand.length; i++){
		for(let ii = 0; ii < hand.length; ii++) {
			//if it is not the last tile
			if(ii != hand.length - 1) {
				//compares the current tile its neighbor. if the current is bigger, switch with neighbor.
				if(hand[ii].realValue > hand[ii+1].realValue){
					switch1 = hand[ii];
					switch2 = hand[ii+1];
					hand[ii] = switch2;
					hand[ii+1] = switch1;
				}
			}
		}
	}
}

function hiLow(){
	ascendingOrder();
	moveTiles("hilow");
}

//babies rule
function checkBB(){
	ascendingOrder();
	//counts the types of tiles in hand[]
	let baby = 0;
	let number =0;
	let big = 0;

	for(let i = 0; i < hand.length; i++){
		//if its a baby (not including 6 as a baby)
		if (hand[i].realValue <= 5){
			baby += 1;
		}
		//if its a big tile
		else if (hand[i].realValue >= 10){
			big += 1;
		}
		//only temporary, due to incomplete GJ value. change to a simple else once it is resolved.
		else if (hand[i].realValue > 5 && hand[i].realValue < 10) {
			number += 1;
		}
	}

	//if we have 2 babies and 2 numbers
	if (baby == 2 && number == 2){
		moveTiles("asIs");
		return true;
	}
	//2 babies and 1 big and 1 number
	else if (baby == 2 && number == big){
		moveTiles("asIs");
		return true;
	}
	//if we have 2 babies and 2 big 
	else if (baby == 2 && big == 2){
		moveTiles("hilow");
		return true;
	}
	//need 3 babies rule
}

function reset() {
	//resets tilesSet from master array. Even after splice, it now has full deck again.
	tilesSet = [];
	for (let i = 0; i < master.length; i++) {
		tilesSet.push(master[i]);
	}
	low = [];
	high = [];
}

//moves the tiles visually on the webpage
function moveTiles(x) {
	if (x === "split"){
		cards[0].src = low[0].img;
		cards[1].src = high[0].img;
		cards[2].src = low[1].img;
		cards[3].src = high[1].img;
	}
	else if (x === "hilow") {
		cards[0].src = hand[0].img;
		cards[1].src = hand[3].img;
		cards[2].src = hand[1].img;
		cards[3].src = hand[2].img;
	} 
	else if (x === "asIs") {
		cards[0].src = hand[0].img;
		cards[1].src = hand[1].img;
		cards[2].src = hand[2].img;
		cards[3].src = hand[3].img;
	} 
	else {
	cards[0].src = low[0].img;
	cards[1].src = low[1].img;
	cards[2].src = high[0].img;
	cards[3].src = high[1].img;
	}
}