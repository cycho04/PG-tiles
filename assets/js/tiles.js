//GET file:///C:/Users/chris/CS/Tiles/imgs/L8 net::ERR_FILE_NOT_FOUND <-- console error
//^^Fixed
//Array now resets every time with click. array doesnt "run out".
//full deck every time.
//


// the variable array. splice and reset this array.
var tilesSet = [
	//High Tiles
	{
		name: "GJ3",
		rank: 16, //individual tile rank
		pRank: 1, //pair rank

		// need fix
		val: 36,
		rValue: 36,

		pair: 1, //its pair has the same value
		img: "imgs/GeeJoon3.jpeg" //imgs in a folder in same directory
	},
	{
		name: "GJ6",
		rank: 16,
		pRank: 1,

		//need fix
		val: 36,
		rValue: 36,

		pair: 1,
		img: "imgs/GeeJoon6.jpeg"
	},
	{
		name: "teen",
		rank: 1,
		pRank: 2,
		val: 2,
		rValue: 12,
		pair: 2,
		img: "imgs/Teen1.jpeg"
	},
	{
		name: "teen",
		rank: 1,
		pRank: 2,
		val: 2,
		rValue: 12,
		pair: 2,
		img: "imgs/Teen2.jpeg"
	},
	{
		name: "dey",
		rank: 2,
		pRank: 3,
		val: 2,
		rValue: 12,
		pair: 3,
		img: "imgs/Dey1.jpeg"
	},
	{
		name: "dey",
		rank: 2,
		pRank: 3,
		val: 2,
		rValue: 12,
		pair: 3,
		img: "imgs/dey2.jpeg"
	},
	{
		name: "H8",
		rank: 3,
		pRank: 4,
		val: 8,
		rValue: 8,
		pair: 4,
		img: "imgs/H8.jpeg"
	},
	{
		name: "H8",
		rank: 3,
		pRank: 4,
		val: 8,
		rValue: 8,
		pair: 4,
		img: "imgs/height2.jpeg"
	},
	{
		name: "H4",
		rank: 4,
		pRank: 5,
		val: 4,
		rValue: 4,
		pair: 5,
		img: "imgs/H4.jpeg"
	},
	{
		name: "H4",
		rank: 4,
		pRank: 5,
		val: 4,
		rValue: 4,
		pair: 5,
		img: "imgs/hfour2.jpeg"
	},

	//Symmetric tiles
	{
		name: "H10",
		rank: 5,
		pRank: 6,
		val: 0,
		rValue: 10,
		pair: 6,
		img: "imgs/H10.jpeg"
	},
	{
		name: "H10",
		rank: 5,
		pRank: 6,
		val: 0,
		rValue: 10,
		pair: 6,
		img: "imgs/hten2.jpeg"
	},
	{
		name: "H6",
		rank: 6,
		pRank: 7,
		val: 6,
		rValue: 6,
		pair: 7,
		img: "imgs/H6.jpeg"
	},
	{
		name: "H6",
		rank: 6,
		pRank: 7,
		val: 6,
		rValue: 6,
		pair: 7,
		img: "imgs/hsix2.jpeg"
	},
	{
		name: "L4",
		rank: 7,
		pRank: 8,
		val: 4,
		rValue: 4,
		pair: 8,
		img: "imgs/L4.jpeg"
	},
	{
		name: "L4",
		rank: 7,
		pRank: 8,
		val: 4,
		rValue: 4,
		pair: 8,
		img: "imgs/lfour2.jpeg"
	},

	//Half Symmetric tiles
	{
		name: "11",
		rank: 8,
		pRank: 9,
		val: 1,
		rValue: 11,
		pair: 9,
		img: "imgs/eleven.jpeg"
	},
	{
		name: "11",
		rank: 8,
		pRank: 9,
		val: 1,
		rValue: 11,
		pair: 9,
		img: "imgs/eleven2.jpeg"
	},
	{
		name: "L10",
		rank: 9,
		pRank: 10,
		val: 0,
		rValue: 10,
		pair: 10,
		img: "imgs/L10.jpeg"
	},
	{
		name: "L10",
		rank: 9,
		pRank: 10,
		val: 0,
		rValue: 10,
		pair: 10,
		img: "imgs/lten2.jpeg"
	},
	{
		name: "H7",
		rank: 10,
		pRank: 11,
		val: 7,
		rValue: 7,
		pair: 11,
		img: "imgs/H7.jpeg"
	},
	{
		name: "H7",
		rank: 10,
		pRank: 11,
		val: 7,
		rValue: 7,
		pair: 11,
		img: "imgs/hseven2.jpeg"
	},
	{
		name: "L6",
		rank: 11,
		pRank: 12,
		val: 6,
		rValue: 6,
		pair: 12,
		img: "imgs/L6.jpeg"
	},
	{
		name: "L6",
		rank: 11,
		pRank: 12,
		val: 6,
		rValue: 6,
		pair: 12,
		img: "imgs/lsix2.jpeg"
	},

	//Mixed pairs
	{
		name: "R9",
		rank: 12,
		pRank: 13,
		val: 9,
		rValue: 9,
		pair: 13,
		img: "imgs/R9.jpeg"
	},
	{
		name: "W9",
		rank: 12,
		pRank: 13,
		val: 9,
		rValue: 9,
		pair: 13,
		img: "imgs/W9.jpeg"
	},
	{
		name: "L8",
		rank: 13,
		pRank: 14,
		val: 8,
		rValue: 8,
		pair: 14,
		img: "imgs/L8.jpeg"
	},
	{
		name: "WL8",
		rank: 13,
		pRank: 14,
		val: 8,
		rValue: 8,
		pair: 14,
		img: "imgs/L8(2).jpeg" //fixed wrong file name error.
	},
	{
		name: "R7",
		rank: 14,
		pRank: 15,
		val: 7,
		rValue: 7,
		pair: 15,
		img: "imgs/R7.jpeg"
	},
	{
		name: "W7",
		rank: 14,
		pRank: 15,
		val: 7,
		rValue: 7,
		pair: 15,
		img: "imgs/W7.jpeg"
	},
	{
		name: "R5",
		rank: 15,
		pRank: 16,
		val: 5,
		rValue: 5,
		pair: 16,
		img: "imgs/R5.jpeg"
	},
	{
		name: "W5",
		rank: 15,
		pRank: 16,
		val: 5,
		rValue: 5,
		pair: 16,
		img: "imgs/W5.jpeg"
	}
]





//-----------------------------------------------------------
//							LOGIC
//-----------------------------------------------------------

// each hand hold their respective tile's object.
//placed inside an array for easy loop access.
var hand = [{}, {}, {}, {}]


//master copy of tiles array. refer to this when resetting array
var master = [];
for (i = 0; i < tilesSet.length; i++) {
	master.push(tilesSet[i]);
}


//randomizes the hands.
$("#random").on("click", function(){
	//tilesSet used
	var index = Math.floor(Math.random()* tilesSet.length); 
	//changes the src to a random tiles src from imgs folder  
	$("#0").attr("src", tilesSet[index].img);
	// splices the selected array, so there won't be the same 4 tiles. always a new tile.
	tilesSet.splice(index, 1);

	var index = Math.floor(Math.random()* tilesSet.length);
	$("#1").attr("src", tilesSet[index].img);
	tilesSet.splice(index, 1); //----------------------------

	var index = Math.floor(Math.random()* tilesSet.length);
	$("#2").attr("src", tilesSet[index].img);
	tilesSet.splice(index, 1); //------------------------------

	var index = Math.floor(Math.random()* tilesSet.length);
	$("#3").attr("src", tilesSet[index].img);
	tilesSet.splice(index, 1); //--------------------------

	//resets tilesSet from master array. Even after splice, it now has full deck again.
	tilesSet = [];
	for (i = 0; i < master.length; i++) {
		tilesSet.push(master[i]);
		}

	identifyCards();
});

//Used to see if pair is recognized. eliminates duplicate pair identification.
var checkPair = [0, 0, 0, 0];

//houseway button
$("#houseway").on("click", function(){
	//prototype. is able to recognize the correct number of pairs. got rid of duplicate identify
	//loops through each hand
	for(i = 0; i < 4; i++) {
		//compares each hand to i
		for (ii = 0; ii < 4; ii++) {
			//if they are pairs and not the same hand
			if (hand[i].pair == hand[ii].pair && i != ii) {
				//if this pair hasn't already been identified.
				if (checkPair[i] == 0 && checkPair[ii] == 0) {
					//places pairs into checkPair array to avoid duplication
					checkPair[i] = hand[i].pair;
					checkPair[ii] = hand[ii].pair;
					console.log("pair");
				}
			}
		}
	}
	//resets back to og array for new hand.
	checkPair =[0, 0, 0, 0];
})



//
//
//
//
//
//
//
//identifies each hand's tile.
function identifyCards() {
	// 1 because of id =1 for the $("#" + 1), 5 because we want 1 2 3 4.
	//loops through the 4 hands.
	for(i = 0; i < 4; i++) {
		//loops through entire deck to find corresponding tile object
		for(ii = 0; ii < tilesSet.length; ii++) {
			//if the img tags match and we're on hand 1
			if ($("#" + i).attr("src") == tilesSet[ii].img && i == 0) {
				hand[0] = tilesSet[ii]; //set hand1 to hold the tile object
				}
			else if ($("#" + i).attr("src") == tilesSet[ii].img && i == 1) {
				hand[1] = tilesSet[ii];
				}
			else if ($("#" + i).attr("src") == tilesSet[ii].img && i == 2) {
				hand[2] = tilesSet[ii];
				}
			else if ($("#" + i).attr("src") == tilesSet[ii].img && i == 3) {
				hand[3] = tilesSet[ii];
				}
			}
		}
}
//
//