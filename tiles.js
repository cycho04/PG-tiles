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
		img: "imgs/Geejoon3.jpeg" //imgs in a folder in same directory
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
		img: "imgs/Teen.jpeg"
	},
	{
		name: "teen",
		rank: 1,
		pRank: 2,
		val: 2,
		rValue: 12,
		pair: 2,
		img: "imgs/Teen.jpeg"
	},
	{
		name: "dey",
		rank: 2,
		pRank: 3,
		val: 2,
		rValue: 12,
		pair: 3,
		img: "imgs/Dey.jpeg"
	},
	{
		name: "dey",
		rank: 2,
		pRank: 3,
		val: 2,
		rValue: 12,
		pair: 3,
		img: "imgs/Dey.jpeg"
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
		img: "imgs/H8.jpeg"
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
		img: "imgs/H4.jpeg"
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
		img: "imgs/H10.jpeg"
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
		img: "imgs/H6.jpeg"
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
		img: "imgs/L4.jpeg"
	},

	//Half Symmetric tiles
	{
		name: "11",
		rank: 8,
		pRank: 9,
		val: 1,
		rValue: 11,
		pair: 9,
		img: "imgs/11.jpeg"
	},
	{
		name: "11",
		rank: 8,
		pRank: 9,
		val: 1,
		rValue: 11,
		pair: 9,
		img: "imgs/11.jpeg"
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
		img: "imgs/L10.jpeg"
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
		img: "imgs/H7.jpeg"
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
		img: "imgs/L6.jpeg"
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
		img: "imgs/L8#.jpeg"
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

//randomizes the hands. prototyp, but it works.
$("button").on("click", function(){
	$("#1").attr("src", tilesSet[Math.floor(Math.random()* 31)].img);
});