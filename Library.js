var genresDiv = document.querySelectorAll(".genres-div");
var genreChosen = document.querySelector(".genre-chosen");
var libraryConteiner = document.querySelector(".library-conteiner");





const Fortnite = new Game ('https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg', 'Fortnite battle Royale', 'BattleRoyale', 'Ps4, Ps5, Xbox One, Xbox series X, Nintendo Switch,, macOS, Microsoft Windows, ¡OS, Android', 'https://www.epicgames.com/fortnite/en-US/home');
const Fortnite_2 = new Game ('https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg', 'Fortnite battle Royale', 'BattleRoyale', 'Ps4, Ps5, Xbox One, Xbox series X, Nintendo Switch,, macOS, Microsoft Windows, ¡OS, Android', 'https://www.epicgames.com/fortnite/en-US/home');
const Fortnite_3 = new Game ('https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg', 'Fortnite battle Royale', 'BattleRoyale', 'Ps4, Ps5, Xbox One, Xbox series X, Nintendo Switch,, macOS, Microsoft Windows, ¡OS, Android', 'https://www.epicgames.com/fortnite/en-US/home');
const Zelda = new Game ('https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/es_LA/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero?v=2021120201', 'The Legend of Zelda', 'Adventure', 'Nintendo Switch','https://www.zelda.com/breath-of-the-wild/');
const MortalkombatX = new Game ('https://www.ecured.cu/images/a/a8/MortalKombatXL.jpg', 'Mortal Kombat X', 'Fighting', 'PlayStation 4, Microsoft Windows, Xbox One, Android, iOS', 'https://www.warnerbros.com/games-and-apps/mortal-kombat-x');
const MortalkombatX_2 = new Game ('https://www.ecured.cu/images/a/a8/MortalKombatXL.jpg', 'Mortal Kombat X', 'Fighting', 'PlayStation 4, Microsoft Windows, Xbox One, Android, iOS', 'https://www.warnerbros.com/games-and-apps/mortal-kombat-x');
const MortalkombatX_3 = new Game ('https://www.ecured.cu/images/a/a8/MortalKombatXL.jpg', 'Mortal Kombat X', 'Fighting', 'PlayStation 4, Microsoft Windows, Xbox One, Android, iOS', 'https://www.warnerbros.com/games-and-apps/mortal-kombat-x');
const MortalkombatX_4 = new Game ('https://www.ecured.cu/images/a/a8/MortalKombatXL.jpg', 'Mortal Kombat X', 'Fighting', 'PlayStation 4, Microsoft Windows, Xbox One, Android, iOS', 'https://www.warnerbros.com/games-and-apps/mortal-kombat-x');
const Valorant = new Game ('https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg', 'Valorant', 'Shooter', 'Microsoft Windows', 'https://playvalorant.com/en-us/');
const Valorant_2 = new Game ('https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg', 'Valorant', 'Shooter', 'Microsoft Windows', 'https://playvalorant.com/en-us/');
const LosSims = new Game ('https://media.contentapi.ea.com/content/dam/eacom/SIMS/brand-refresh-assets/images/2019/07/ts4-featured-image-base-refresh.png.adapt.crop16x9.1023w.png', 'Los Sims', 'Simulation','PC, OS X, Xbox One y PS4.', 'https://www.ea.com/es-es/games/the-sims');
const LosSims_2 = new Game ('https://media.contentapi.ea.com/content/dam/eacom/SIMS/brand-refresh-assets/images/2019/07/ts4-featured-image-base-refresh.png.adapt.crop16x9.1023w.png', 'los Sims', 'Simulation', 'PC, OS X, Xbox One y PS4.', 'https://www.ea.com/es-es/games/the-sims');
const F1 = new Game ('https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2021/06/news-standardedition-featuredimage-1920.jpg.adapt.crop191x100.1200w.jpg', 'F1', 'Racing', 'PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y PC', 'https://www.ea.com/es-es/games/f1/f1-2021');
const F1_2 = new Game ('https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2021/06/news-standardedition-featuredimage-1920.jpg.adapt.crop191x100.1200w.jpg', 'F1', 'Racing', 'PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y PC', 'https://www.ea.com/es-es/games/f1/f1-2021');
const FIFA = new Game ('https://as01.epimg.net/meristation/imagenes/2021/07/20/avances/1626758869_049177_1626771602_noticia_normal.jpg', 'FIFA', 'Sports', 'PLAYSTATION 4, PLAYSTATION 5, XBOX ONE, XBOX SERIES X|S, PC Y STEAM', 'https://www.ea.com/es-es/games/fifa/fifa-22');
const FIFA_2 = new Game ('https://as01.epimg.net/meristation/imagenes/2021/07/20/avances/1626758869_049177_1626771602_noticia_normal.jpg', 'FIFA', 'Sports', 'PLAYSTATION 4, PLAYSTATION 5, XBOX ONE, XBOX SERIES X|S, PC Y STEAM', 'https://www.ea.com/es-es/games/fifa/fifa-22');
const FIFA_3 = new Game ('https://as01.epimg.net/meristation/imagenes/2021/07/20/avances/1626758869_049177_1626771602_noticia_normal.jpg', 'FIFA', 'Sports', 'PLAYSTATION 4, PLAYSTATION 5, XBOX ONE, XBOX SERIES X|S, PC Y STEAM', 'https://www.ea.com/es-es/games/fifa/fifa-22');
const AgeofEmpires = new Game ('https://as01.epimg.net/meristation/imagenes/2019/11/18/trucos/1574079348_118792_1574079558_noticia_normal.jpg', 'Age of Empires', 'Strategy', 'Microsoft Windows', 'https://www.ageofempires.com/');









Fortnite.ListAdd(Fortnite.genre, 'Fortnite');
Fortnite_2.ListAdd(Fortnite_2.genre, 'Fortnite_2');
Fortnite_3.ListAdd(Fortnite_3.genre, 'Fortnite_3');
Zelda.ListAdd(Zelda.genre, 'Zelda');
MortalkombatX.ListAdd(MortalkombatX.genre, 'MortalkombatX');
MortalkombatX_2.ListAdd(MortalkombatX_2.genre, 'MortalkombatX_2');
MortalkombatX_3.ListAdd(MortalkombatX_3.genre, 'MortalkombatX_3');
MortalkombatX_4.ListAdd(MortalkombatX_4.genre, 'MortalkombatX_4');
Valorant.ListAdd(Valorant.genre, 'Valorant');
Valorant_2.ListAdd(Valorant_2.genre, 'Valorant_2');
LosSims.ListAdd(LosSims.genre, 'LosSims');
LosSims_2.ListAdd(LosSims_2.genre, 'LosSims_2');
F1.ListAdd(F1.genre, 'F1');
F1_2.ListAdd(F1_2.genre, 'F1_2');
FIFA.ListAdd(FIFA.genre, 'FIFA');
FIFA_2.ListAdd(FIFA_2.genre, 'FIFA_2');
FIFA_3.ListAdd(FIFA_3.genre, 'FIFA_3');
AgeofEmpires.ListAdd(AgeofEmpires.genre, 'AgeofEmpires');





showTopGame('1',Fortnite);
showTopGame('2',Fortnite);
showTopGame('3',Fortnite);
showTopGame('4',Fortnite);
showTopGame('5',Fortnite);

genreClickEvent();
