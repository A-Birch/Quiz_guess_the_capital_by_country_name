var $ = function(id) {
	'use strict';
	return document.getElementById(id);
};

var pair = [], answers=[], valueAnswer;

var capitals = {
	Afghanistan: "Kabul",
	Albania: "Tirana",
	Algeria: "Algiers",
	Andorra: "Andorra la Vella",
	Angola: "Luanda",
	"Antigua and Barbuda": "Saint John/'s",
	Argentina: "Buenos Aires",
	Armenia: "Yerevan",
	Australia: "Canberra",
	Austria: "Vienna",
	Azerbaijan: "Baku",
	"The Bahamas": "Nassau",
	Bahrain: "Manama",
	Bangladesh: "Dhaka",
	Barbados: "Bridgetown",
	Belarus: "Minsk",
	Belgium: "Brussels",
	Belize: "Belmopan",
	Benin: "Porto-Novo",
	Bhutan: "Thimphu",
	Bolivia: "Sucre",
	"Bosnia and Herzegovina": "Sarajevo",
	Botswana: "Gaborone",
	Brazil: "Brasilia",
	Brunei: "Bandar Seri Begawan",
	Bulgaria: "Sofia",
	"Burkina Faso": "Ouagadougou",
	Burundi: "Gitega",
	Cambodia: "Phnom Penh",
	Cameroon: "Yaounde",
	Canada: "Ottawa",
	"Cape Verde": "Praia",
	"Central African Republic": "Bangui",
	Chad: "N/'Djamena",
	Chile: "Santiago",
	China: "Beijing",
	Colombia: "Bogota",
	Comoros: "Moroni",
	"Republic of the Congo": "Brazzaville",
	"Democratic Republic of the Congo": "Kinshasa",
	"Costa Rica": "San Jose",
	"Cote d'Ivoire": "Yamoussoukro",
	Croatia: "Zagreb",
	Cuba: "Havana",
	Cyprus: "Nicosia",
	"Czech Republic": "Prague",
	Denmark: "Copenhagen",
	Djibouti: "Djibouti",
	Dominica: "Roseau",
	"Dominican Republic": "Santo Domingo",
	Ecuador: "Quito",
	Egypt: "Cairo",
	"El Salvador": "San Salvador",
	"Equatorial Guinea": "Malabo",
	Eritrea: "Asmara",
	Estonia: "Tallinn",
	Ethiopia: "Addis Ababa",
	Fiji: "Suva",
	Finland: "Helsinki",
	France: "Paris",
	Gabon: "Libreville",
	"The Gambia": "Banjul",
	Georgia: "Tbilisi",
	Germany: "Berlin",
	Ghana: "Accra",
	Greece: "Athens",
	Grenada: "Saint George/'s",
	Guatemala: "Guatemala City",
	Guinea: "Conakry",
	"Guinea-Bissau": "Bissau",
	Guyana: "Georgetown",
	Haiti: "Port-au-Prince",
	Honduras: "Tegucigalpa",
	Hungary: "Budapest",
	Iceland: "Reykjavik",
	India: "New Delhi",
	Indonesia: "Jakarta",
	Iran: "Tehran",
	Iraq: "Baghdad",
	Ireland: "Dublin",
	Israel: "Jerusalem",
	Italy: "Rome",
	Jamaica: "Kingston",
	Japan: "Tokyo",
	Jordan: "Amman",
	Kazakhstan: "Nur-Sultan",
	Kenya: "Nairobi",
	Kiribati: "Tarawa Atoll",
	"North Korea": "Pyongyang",
	"South Korea": "Seoul",
	Kosovo: "Pristina",
	Kuwait: "Kuwait City",
	Kyrgyzstan: "Bishkek",
	Laos: "Vientiane",
	Latvia: "Riga",
	Lebanon: "Beirut",
	Lesotho: "Maseru",
	Liberia: "Monrovia",
	Libya: "Tripoli",
	Liechtenstein: "Vaduz",
	Lithuania: "Vilnius",
	Luxembourg: "Luxembourg",
	Macedonia: "Skopje",
	Madagascar: "Antananarivo",
	Malawi: "Lilongwe",
	Malaysia: "Kuala Lumpur",
	Maldives: "Male",
	Mali: "Bamako",
	Malta: "Valletta",
	"Marshall Islands": "Majuro",
	Mauritania: "Nouakchott",
	Mauritius: "Port Louis",
	Mexico: "Mexico City",
	"States of Micronesia": "Palikir",
	Moldova: "Chisinau",
	Monaco: "Monaco",
	Mongolia: "Ulaanbaatar",
	Montenegro: "Podgorica",
	Morocco: "Rabat",
	Mozambique: "Maputo",
	Namibia: "Windhoek",
	Nepal: "Kathmandu",
	Netherlands: "Amsterdam",
	"New Zealand": "Wellington",
	Nicaragua: "Managua",
	Niger: "Niamey",
	Nigeria: "Abuja",
	Norway: "Oslo",
	Oman: "Muscat",
	Pakistan: "Islamabad",
	Palau: "Melekeok",
	Panama: "Panama City",
	"Papua New Guinea": "Port Moresby",
	Paraguay: "Asuncion",
	Peru: "Lima",
	Philippines: "Manila",
	Poland: "Warsaw",
	Portugal: "Lisbon",
	Qatar: "Doha",
	Romania: "Bucharest",
	Russia: "Moscow",
	Rwanda: "Kigali",
	"Saint Kitts and Nevis": "Basseterre",
	"Saint Lucia": "Castries",
	"Saint Vincent and the Grenadines": "Kingstown",
	Samoa: "Apia",
	"San Marino": "San Marino",
	"Sao Tome and Principe": "Sao Tome",
	"Saudi Arabia": "Riyadh",
	Senegal: "Dakar",
	Serbia: "Belgrade",
	Seychelles: "Victoria",
	"Sierra Leone": "Freetown",
	Singapore: "Singapore",
	Slovakia: "Bratislava",
	Slovenia: "Ljubljana",
	"Solomon Islands": "Honiara",
	Somalia: "Mogadishu",
	"South Sudan": "Juba",
	Spain: "Madrid",
	"Sri Lanka": "Colombo",
	Sudan: "Khartoum",
	Suriname: "Paramaribo",
	Swaziland: "Mbabane",
	Sweden: "Stockholm",
	Switzerland: "Bern",
	Syria: "Damascus",
	Taiwan: "Taipei",
	Tajikistan: "Dushanbe",
	Tanzania: "Dodoma",
	Thailand: "Bangkok",
	Togo: "Lome",
	Tonga: "Nuku/'alofa",
	"Trinidad and Tobago": "Port-of-Spain",
	Tunisia: "Tunis",
	Turkey: "Ankara",
	Turkmenistan: "Ashgabat",
	Tuvalu: "Vaiaku",
	Uganda: "Kampala",
	Ukraine: "Kyiv",
	"United Arab Emirates": "Abu Dhabi",
	"United Kingdom": "London",
	"United States of America": "Washington, D.C.",
	"Uruguay": "Montevideo",
	"Uzbekistan": "Tashkent",
	"Vanuatu": "Port-Vila",
	"Vatican City": "Vatican City",
	Venezuela: "Caracas",
	Vietnam: "Hanoi",
	Yemen: "Sanaa",
	Zambia: "Lusaka",
	Zimbabwe: "Harare",
	getRandomCapital: function() {
		'use strict';
		var rn = randomNumber();
		return [Object.keys(this)[rn], this[Object.keys(this)[rn]]];
	}
};


// Generate a random number for picking country and capital
function randomNumber() {
	'use strict';
	return Math.floor(Math.random() * (Object.keys(capitals).length - 1));
}

// Show country in DOM
function showCountry() {
	'use strict';
	//Store a right answer pair 'capital-country' in array
	pair = capitals.getRandomCapital();
	$('caption').textContent = 
	pair[0];
}

// Show answers
function showAnswers() {
	'use strict';
	//Generate a random answers
	for (var i = 0; i < 4; i++) {
		answers[i] = capitals.getRandomCapital();
	}
	//generate a random number to put a right answer randomly to one of fours buttons
	var rightAnswer = Math.floor(Math.random() * 4);
	answers[rightAnswer] = pair;
	//show answers in buttons
	for (i = 0; i < answers.length; i++) {
		$('btn-' + i).value = answers[i][1];
		$('btn-' + i).textContent = answers[i][1];
	}
}

// Check chosen answer
function checkAnswer(value, id) {
	'use strict';
	console.log(value);
	console.log(pair);
	if (pair[1] === value) {
		console.log('Correct!');
		animateBtn ('true', id);
	} else {
		console.log('Wrong. Try again.');
		animateBtn ('false', id);
	}
}


function animateBtn (boolean, id) {
	'use strict';
	if (boolean === 'true') {
		
		setTimeout(function() { $(id).style.backgroundColor = "green"}, 1000);
	} else {
		setTimeout(function() {$(id).style.backgroundColor = "red"}, 1000);
	}
}


/*
$('btn-0').addEventListener("click", function(e) {
	'use strict';
	btnId = e.target.id;
	valueAnswer = $('btn-0').value;
	checkAnswer(valueAnswer);
});

$('btn-1').addEventListener("click", function(e) {
	'use strict';
	btnId = e.target.id;
	valueAnswer = $('btn-1').value;	
	checkAnswer(valueAnswer);
});

$('btn-2').addEventListener("click", function(e) {
	'use strict';
	btnId = e.target.id;
	valueAnswer = $('btn-2').value;	
	checkAnswer(valueAnswer);
});

$('btn-3').addEventListener("click", function(e) {
	'use strict';
	btnId = e.target.id;
	valueAnswer = $('btn-3').value;
	checkAnswer(valueAnswer);
});

*/

var theParent = document.querySelector(".grid-container");
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
		valueAnswer = $(clickedItem).value;	
		checkAnswer(valueAnswer, clickedItem);
      }
    e.stopPropagation();
}

												
showCountry();
showAnswers();





