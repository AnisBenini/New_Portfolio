//#region node_modules/.nitro/vite/services/ssr/assets/projects-ClOf5osq.js
var imageModules = /* #__PURE__ */ Object.assign({
	"./design/carte visite + menu/1.jpg": "/assets/1-sW7dEVEM.jpg",
	"./design/carte visite + menu/2.jpg": "/assets/2-pwfQfIA4.jpg",
	"./design/carte visite + menu/AUREM/1.png": "/assets/1-DBGUOoN6.png",
	"./design/carte visite + menu/AUREM/2.png": "/assets/2-C9mydVK6.png",
	"./design/carte visite + menu/Orange and Black Bold Geometric Restaurant Menu.png": "/assets/Orange%20and%20Black%20Bold%20Geometric%20Restaurant%20Menu-BIaxADiU.png",
	"./design/carte visite + menu/White And Green Minimalist Id Card Mockup Instagram Post.png": "/assets/White%20And%20Green%20Minimalist%20Id%20Card%20Mockup%20Instagram%20Post-Bt0XyP01.png",
	"./design/carte visite + menu/b6c5b565-439b-469f-bfca-97c0efe47b12.jpg": "/assets/b6c5b565-439b-469f-bfca-97c0efe47b12-DY-jrU9Z.jpg",
	"./design/drink white label/le montagnard.png": "/assets/le%20montagnard-Bj4fGH3a.png",
	"./design/instagram design post/A DAY IN THE LIFE.png": "/assets/A%20DAY%20IN%20THE%20LIFE-DKnSTZqJ.png",
	"./design/instagram design post/AID ADHA POST.png": "/assets/AID%20ADHA%20POST-De_D3zyZ.png",
	"./design/instagram design post/AI_PILL/1.png": "/assets/1-CtdnMunn.png",
	"./design/instagram design post/AI_PILL/2.png": "/assets/2-BXpdE5HJ.png",
	"./design/instagram design post/AI_PILL/3.png": "/assets/3-BkZ9wqVR.png",
	"./design/instagram design post/AI_PILL/4.png": "/assets/4-DzY92oOQ.png",
	"./design/instagram design post/Algeria Vs switzeland.png": "/assets/Algeria%20Vs%20switzeland-DQLaGEpP.png",
	"./design/instagram design post/DREAM (1).png": "/assets/DREAM%20(1)-D4hv4btA.png",
	"./design/instagram design post/Last_Knight.jpg": "/assets/Last_Knight-BbGBhYzY.jpg",
	"./design/instagram design post/OUTSIDE BOX (3).png": "/assets/OUTSIDE%20BOX%20(3)-DuXeV217.png",
	"./design/instagram design post/The full SQUAD.png": "/assets/The%20full%20SQUAD-CxTTfri9.png",
	"./design/instagram design post/algeria first match.png": "/assets/algeria%20first%20match-BiQCDHXS.png",
	"./design/instagram design post/lastOne.png": "/assets/lastOne-nfu-AOQt.png",
	"./design/instagram design post/me.png": "/assets/me-CD1Uy-bl.png",
	"./design/instagram design post/post-01.jpg": "/assets/post-01-tYfdpTSq.jpg",
	"./design/instagram design post/rifkus design.jpg": "/assets/rifkus%20design-CeO-EUVM.jpg",
	"./design/logo/1.png": "/assets/1-fDfDAl85.png",
	"./design/logo/2.png": "/assets/2-BRmOrcOF.png",
	"./design/mosque-design-poster/Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.png": "/assets/Cyan%20Flat%20Modern%20Marhaban%20Ya%20Ramadhan%20Instagram%20Post-w3JkxHNb.png",
	"./design/mosque-design-poster/Green Cream Elegant Decorative Ramadan Kareem Instagram Post.png": "/assets/Green%20Cream%20Elegant%20Decorative%20Ramadan%20Kareem%20Instagram%20Post-CsGAPl-o.png"
});
function normalizePath(path) {
	return `./${path.replace(/\\/g, "/")}`;
}
function resolveImage(relativePath) {
	const url = imageModules[normalizePath(relativePath)];
	if (!url) throw new Error(`Image not found: ${relativePath}`);
	return url;
}
function findImageByName(filename) {
	const match = Object.entries(imageModules).find(([path]) => path.toLowerCase().includes(filename.toLowerCase()));
	if (!match) throw new Error(`Image not found by name: ${filename}`);
	return match[1];
}
var instagram = "design/instagram design post";
var carteVisite = "design/carte visite + menu";
var archiveProjects = [
	{
		id: "dream-engine",
		title: "Dream Engine",
		category: "3D Composition / Editorial",
		thumbnail: resolveImage(`${instagram}/DREAM (1).png`),
		images: [resolveImage(`${instagram}/DREAM (1).png`)],
		file: "DREAM_(1).png",
		year: 2025
	},
	{
		id: "eid-mubarak",
		title: "Eid Mubarak",
		category: "Poster / Cultural Identity",
		thumbnail: resolveImage(`${instagram}/AID ADHA POST.png`),
		images: [resolveImage(`${instagram}/AID ADHA POST.png`)],
		file: "AID_ADHA_POST.png",
		year: 2025
	},
	{
		id: "the-full-squad",
		title: "The Full Squad",
		category: "Sports / Editorial",
		thumbnail: resolveImage(`${instagram}/The full SQUAD.png`),
		images: [resolveImage(`${instagram}/The full SQUAD.png`)],
		file: "The_Full_Squad.png",
		featured: true,
		year: 2025
	},
	{
		id: "match-day",
		title: "Match Day",
		category: "Sports / Editorial",
		thumbnail: resolveImage(`${instagram}/Algeria Vs switzeland.png`),
		images: [resolveImage(`${instagram}/Algeria Vs switzeland.png`)],
		file: "Algeria_Vs_Switzerland.png",
		year: 2025
	},
	{
		id: "heavy-head",
		title: "Heavy Head",
		category: "Conceptual / Self Portrait",
		thumbnail: resolveImage(`${instagram}/me.png`),
		images: [resolveImage(`${instagram}/me.png`)],
		file: "Heavy_On_My_Mind.png",
		year: 2025
	},
	{
		id: "algeria-first-match",
		title: "Algeria First Match",
		category: "Sports / Editorial",
		thumbnail: resolveImage(`${instagram}/algeria first match.png`),
		images: [resolveImage(`${instagram}/algeria first match.png`)],
		file: "Algeria_First_Match.png",
		year: 2025
	},
	{
		id: "outside-the-box",
		title: "Outside the Box",
		category: "Creative / Social",
		thumbnail: resolveImage(`${instagram}/OUTSIDE BOX (3).png`),
		images: [resolveImage(`${instagram}/OUTSIDE BOX (3).png`)],
		file: "Outside_The_Box.png",
		year: 2025
	},
	{
		id: "IZEM",
		title: "Energy-drink-IZEM",
		category: "Social / Energy Drink / Branding",
		thumbnail: resolveImage(`${instagram}/lastOne.png`),
		images: [resolveImage(`${instagram}/lastOne.png`)],
		file: "lastOne.png",
		year: 2025
	},
	{
		id: "ai-pill",
		title: "AI Pill",
		category: "Social / Campaign Series",
		thumbnail: resolveImage(`${instagram}/AI_PILL/1.png`),
		images: [
			resolveImage(`${instagram}/AI_PILL/1.png`),
			resolveImage(`${instagram}/AI_PILL/2.png`),
			resolveImage(`${instagram}/AI_PILL/3.png`),
			resolveImage(`${instagram}/AI_PILL/4.png`)
		],
		file: "AI_Pill_Series.png",
		lightboxScroll: true,
		year: 2025
	},
	{
		id: "rifkus-design",
		title: "Rifkus Design",
		category: "Brand / Identity",
		thumbnail: resolveImage(`${instagram}/rifkus design.jpg`),
		images: [resolveImage(`${instagram}/rifkus design.jpg`)],
		file: "Rifkus_Design.jpg",
		year: 2025
	},
	{
		id: "aurem",
		title: "Aurem",
		category: "Logo / Joaillerie",
		thumbnail: resolveImage(`${carteVisite}/AUREM/2.png`),
		images: [resolveImage(`${carteVisite}/AUREM/1.png`), resolveImage(`${carteVisite}/AUREM/2.png`)],
		file: "Aurem_Wordmark.png",
		cardStack: true,
		lightboxScroll: true,
		year: 2024
	},
	{
		id: "akham-lkhir",
		title: "Akham L'Khir",
		category: "Brand Identity / Print",
		thumbnail: resolveImage("design/carte visite + menu/1.jpg"),
		images: [resolveImage("design/carte visite + menu/1.jpg"), resolveImage("design/carte visite + menu/2.jpg")],
		file: "Business_Cards.jpg",
		cardStack: true,
		lightboxScroll: true,
		year: 2024
	},
	{
		id: "restaurant-menu",
		title: "Restaurant Menu",
		category: "Print / Menu Design",
		thumbnail: findImageByName("Orange and Black Bold Geometric Restaurant Menu"),
		images: [findImageByName("Orange and Black Bold Geometric Restaurant Menu")],
		file: "Restaurant_Menu.png",
		year: 2024
	},
	{
		id: "last-knight",
		title: "Last Knight",
		category: "Editorial / Concept",
		thumbnail: resolveImage(`${instagram}/Last_Knight.jpg`),
		images: [resolveImage(`${instagram}/Last_Knight.jpg`)],
		file: "Last_Knight.jpg",
		year: 2025
	},
	{
		id: "sacred-moonlight",
		title: "Sacred Moonlight",
		category: "Poster / Spiritual Series",
		thumbnail: findImageByName("Green Cream Elegant Decorative Ramadan Kareem"),
		images: [findImageByName("Green Cream Elegant Decorative Ramadan Kareem")],
		file: "Ramadan_Kareem.png",
		cardScroll: true,
		lightboxScroll: true,
		year: 2025
	},
	{
		id: "ramadan-mubarak",
		title: "Ramadan Mubarak",
		category: "Poster / Spiritual Series",
		thumbnail: findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post"),
		images: [findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.png")],
		file: "Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.png",
		year: 2024
	},
	{
		id: "le-montagnard",
		title: "Le Montagnard",
		category: "Brand Identity / Packaging",
		thumbnail: resolveImage("design/drink white label/le montagnard.png"),
		images: [resolveImage("design/drink white label/le montagnard.png")],
		file: "Le_Montagnard.png",
		year: 2024
	},
	{
		id: "a-day-in-the-life",
		title: "A Day in the Life",
		category: "Lifestyle / Social",
		thumbnail: resolveImage(`${instagram}/A DAY IN THE LIFE.png`),
		images: [resolveImage(`${instagram}/A DAY IN THE LIFE.png`)],
		file: "A_Day_In_The_Life.png",
		year: 2025
	}
];
var featuredProject = archiveProjects.find((project) => project.featured) ?? archiveProjects[0];
function formatProjectIndex(index) {
	return String(index + 1).padStart(3, "0");
}
function getArchiveYearRange() {
	const years = archiveProjects.map((project) => project.year);
	return `${Math.min(...years)}–${Math.max(...years)}`;
}
//#endregion
export { getArchiveYearRange as i, featuredProject as n, formatProjectIndex as r, archiveProjects as t };
