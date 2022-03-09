var genresDiv = document.querySelectorAll(".genres-div");
var genreChosen = document.querySelector(".genre-chosen");
var libraryConteiner = document.querySelector(".library-conteiner");

var GamesList = {
		Adventure: [],
	BattleRoyale: [],
	Fighting: [],
	Shooter: [],
	Simulation: [],
	Racing: [],
	Sports: [],
	Strategy: []
}

class Game {
	constructor(img,name,genre,plataform,infoURL) {
		this.image = img;
		this.name = name;
		this.genre = genre;
		this.plataform = plataform;
		this.informationURL = infoURL;

	}

	ListAdd(genre, className) {
			GamesList[genre].push(className);
		}
}




function showTopGame(GameNumber,game){
	
	if (GameNumber==1) {
		const topVideoGameImg1 = document.querySelector(".imgGame1");
		const topVideoGameName1 = document.querySelector(".nameGame1");	
		topVideoGameImg1.setAttribute("src", `${game.image}`);
		topVideoGameName1.innerHTML = `${game.name}`
		var infoURL1 = document.querySelector(".infoURL1");
		infoURL1.href = `${game.informationURL}`

	}

		else if (GameNumber==2) {
		const topVideoGameImg2 = document.querySelector(".imgGame2");
		const topVideoGameName2 = document.querySelector(".nameGame2");
		topVideoGameImg2.setAttribute("src", `${game.image}`);
		topVideoGameName2.innerHTML = `${game.name}`
		var infoURL2 = document.querySelector(".infoURL2");
		infoURL2.href = `${game.informationURL}`

	}

		else if (GameNumber==3) {
		const topVideoGameImg3 = document.querySelector(".imgGame3");
		const topVideoGameName3 = document.querySelector(".nameGame3");
		topVideoGameImg3.setAttribute("src", `${game.image}`);
		topVideoGameName3.innerHTML = `${game.name}`
		var infoURL3 = document.querySelector(".infoURL3");
		infoURL3.href = `${game.informationURL}`

	}

		else if (GameNumber==4) {
		const topVideoGameImg4 = document.querySelector(".imgGame4");
		const topVideoGameName4 = document.querySelector(".nameGame4");	
		topVideoGameImg4.setAttribute("src", `${game.image}`);
		topVideoGameName4.innerHTML = `${game.name}`
		var infoURL4 = document.querySelector(".infoURL4");
		infoURL4.href = `${game.informationURL}`

	}

		else if (GameNumber==5) {
		const topVideoGameImg5 = document.querySelector(".imgGame5");
		const topVideoGameName5 = document.querySelector(".nameGame5");	
		topVideoGameImg5.setAttribute("src", `${game.image}`);
		topVideoGameName5.innerHTML = `${game.name}`
		var infoURL5 = document.querySelector(".infoURL5");
		infoURL5.href = `${game.informationURL}`

	}
		else {

		}
	
}

function libraryElementsClean() {
	libraryConteiner.innerHTML = null;
}

function libraryCreateElements(elementslength){
	
if (genreChosen.classList.item(1) == "unknow"){
			null
		} else {
			for (i = 0; i<elementslength; i++){
				const fragmento = document.createDocumentFragment();
				const linkInfoGame = document.createElement("A");
				const divLinkinfo = document.createElement("DIV");
				const imgLibraryDiv = document.createElement("DIV");
				divLinkinfo.classList.add("div-link-info");
				linkInfoGame.style = "text-decoration: none;";
				linkInfoGame.target = "_blank";
				linkInfoGame.classList.add("link-info-game-library");
				const item = document.createElement("DIV");
				let genreChosenCreate = genreChosen.classList.item(1); 
				linkInfoGame.href = `${eval(GamesList[genreChosenCreate][i]).informationURL}`;
				item.innerHTML = `<img src="${eval(GamesList[genreChosenCreate][i]).image}" alt="${eval(GamesList[genreChosenCreate][i]).name} class="img-Games-library-div"> 
									<h4 class="name-Games-library-div">${eval(GamesList[genreChosenCreate][i]).name}</h4>
									`;
				item.classList.add("Games-library-div");
				item.appendChild(fragmento);
				linkInfoGame.appendChild(item);
				divLinkinfo.appendChild(linkInfoGame);
				libraryConteiner.appendChild(divLinkinfo);
		}
	}
}


function libraryElements(elementslength) {
	if (libraryConteiner.childElementCount !== 0) {
		libraryElementsClean();
		libraryCreateElements(elementslength);

	} else {
		libraryCreateElements(elementslength);
	}

}



let idWaitingTime1;

function delaytimer1() {
  idWaitingTime1 = setTimeout(findOutGenre, 3000);
}


function genreClickEvent (){

	for (let i = 0; i<8; i++){
		genresDiv[i].addEventListener("click", delaytimer1)



		function findOutGenre(){
				let genreName = genresDiv[i].innerHTML;
				let removeItem = genreChosen.classList.item(1);
				genreChosen.classList.remove(removeItem);
				genreChosen.classList.add(genreName)

				let elementslength = GamesList[genreName].length;
				if(genreName !== removeItem){
					libraryElements(elementslength);

				clearTimeout(idWaitingTime1)
				}
			}

			let idWaitingTime1;

			function delaytimer1() {
			  idWaitingTime1 = setTimeout(findOutGenre, 400);
			}

	}

}








