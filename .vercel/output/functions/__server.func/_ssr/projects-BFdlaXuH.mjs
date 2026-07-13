//#region node_modules/.nitro/vite/services/ssr/assets/projects-BFdlaXuH.js
var imageModules = /* #__PURE__ */ Object.assign({
	"./design/carte visite + menu/1.webp": "/assets/1-HYgGqyUJ.webp",
	"./design/carte visite + menu/2.webp": "/assets/2-DDMJYx-A.webp",
	"./design/carte visite + menu/AUREM/1.webp": "/assets/1-DBuL3CQB.webp",
	"./design/carte visite + menu/AUREM/2.webp": "/assets/2-Cp1kk_XJ.webp",
	"./design/carte visite + menu/Orange and Black Bold Geometric Restaurant Menu.webp": "/assets/Orange%20and%20Black%20Bold%20Geometric%20Restaurant%20Menu-BudT0kyo.webp",
	"./design/carte visite + menu/White And Green Minimalist Id Card Mockup Instagram Post.webp": "/assets/White%20And%20Green%20Minimalist%20Id%20Card%20Mockup%20Instagram%20Post-mQur7sat.webp",
	"./design/carte visite + menu/b6c5b565-439b-469f-bfca-97c0efe47b12.webp": "/assets/b6c5b565-439b-469f-bfca-97c0efe47b12--y-05If3.webp",
	"./design/drink white label/le montagnard.webp": "/assets/le%20montagnard-lcXuJ_0O.webp",
	"./design/instagram design post/A DAY IN THE LIFE.webp": "/assets/A%20DAY%20IN%20THE%20LIFE-TrY3gNkD.webp",
	"./design/instagram design post/AID ADHA POST.webp": "/assets/AID%20ADHA%20POST-D8rRlx3Z.webp",
	"./design/instagram design post/AI_PILL/1.webp": "/assets/1-DBmq20qf.webp",
	"./design/instagram design post/AI_PILL/2.webp": "/assets/2-ehP3UGSu.webp",
	"./design/instagram design post/AI_PILL/3.webp": "/assets/3-C933yf7b.webp",
	"./design/instagram design post/AI_PILL/4.webp": "/assets/4-DcXGllZK.webp",
	"./design/instagram design post/Algeria Vs switzeland.webp": "/assets/Algeria%20Vs%20switzeland-Diw6crQm.webp",
	"./design/instagram design post/DREAM (1).webp": "/assets/DREAM%20(1)-DyiSjnq6.webp",
	"./design/instagram design post/Last_Knight.webp": "/assets/Last_Knight-s3hyb22S.webp",
	"./design/instagram design post/OUTSIDE BOX (3).webp": "/assets/OUTSIDE%20BOX%20(3)-BXfUy5lR.webp",
	"./design/instagram design post/The full SQUAD.webp": "/assets/The%20full%20SQUAD-Dm1DW7ot.webp",
	"./design/instagram design post/algeria first match.webp": "/assets/algeria%20first%20match-B18czUxO.webp",
	"./design/instagram design post/lastOne.webp": "/assets/lastOne-BZrHf0_i.webp",
	"./design/instagram design post/me.webp": "/assets/me-DtSUMjVb.webp",
	"./design/instagram design post/post-01.webp": "/assets/post-01-Bw3tRNRH.webp",
	"./design/instagram design post/rifkus design.webp": "/assets/rifkus%20design-CSVeLlwi.webp",
	"./design/logo/1.webp": "/assets/1-Bb5xQ3AW.webp",
	"./design/logo/2.webp": "/assets/2-hey9LRiL.webp",
	"./design/mosque-design-poster/Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.webp": "/assets/Cyan%20Flat%20Modern%20Marhaban%20Ya%20Ramadhan%20Instagram%20Post-BxhybLWF.webp",
	"./design/mosque-design-poster/Green Cream Elegant Decorative Ramadan Kareem Instagram Post.webp": "/assets/Green%20Cream%20Elegant%20Decorative%20Ramadan%20Kareem%20Instagram%20Post-BPS9wxFI.webp"
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
		thumbnail: resolveImage(`${instagram}/DREAM (1).webp`),
		images: [resolveImage(`${instagram}/DREAM (1).webp`)],
		file: "DREAM_(1).webp",
		year: 2025
	},
	{
		id: "eid-mubarak",
		title: "Eid Mubarak",
		category: "Poster / Cultural Identity",
		thumbnail: resolveImage(`${instagram}/AID ADHA POST.webp`),
		images: [resolveImage(`${instagram}/AID ADHA POST.webp`)],
		file: "AID_ADHA_POST.webp",
		year: 2025
	},
	{
		id: "the-full-squad",
		title: "The Full Squad",
		category: "Sports / Editorial",
		thumbnail: resolveImage(`${instagram}/The full SQUAD.webp`),
		images: [resolveImage(`${instagram}/The full SQUAD.webp`)],
		file: "The_Full_Squad.webp",
		featured: true,
		year: 2025
	},
	{
		id: "match-day",
		title: "Match Day",
		category: "Sports / Editorial",
		thumbnail: resolveImage(`${instagram}/Algeria Vs switzeland.webp`),
		images: [resolveImage(`${instagram}/Algeria Vs switzeland.webp`)],
		file: "Algeria_Vs_Switzerland.webp",
		year: 2025
	},
	{
		id: "heavy-head",
		title: "Heavy Head",
		category: "Conceptual / Self Portrait",
		thumbnail: resolveImage(`${instagram}/me.webp`),
		images: [resolveImage(`${instagram}/me.webp`)],
		file: "Heavy_On_My_Mind.webp",
		year: 2025
	},
	{
		id: "algeria-first-match",
		title: "Algeria First Match",
		category: "Sports / Editorial",
		thumbnail: resolveImage(`${instagram}/algeria first match.webp`),
		images: [resolveImage(`${instagram}/algeria first match.webp`)],
		file: "Algeria_First_Match.webp",
		year: 2025
	},
	{
		id: "outside-the-box",
		title: "Outside the Box",
		category: "Creative / Social",
		thumbnail: resolveImage(`${instagram}/OUTSIDE BOX (3).webp`),
		images: [resolveImage(`${instagram}/OUTSIDE BOX (3).webp`)],
		file: "Outside_The_Box.webp",
		year: 2025
	},
	{
		id: "IZEM",
		title: "Energy-drink-IZEM",
		category: "Social / Energy Drink / Branding",
		thumbnail: resolveImage(`${instagram}/lastOne.webp`),
		images: [resolveImage(`${instagram}/lastOne.webp`)],
		file: "lastOne.webp",
		year: 2025
	},
	{
		id: "ai-pill",
		title: "AI Pill",
		category: "Social / Campaign Series",
		thumbnail: resolveImage(`${instagram}/AI_PILL/1.webp`),
		images: [
			resolveImage(`${instagram}/AI_PILL/1.webp`),
			resolveImage(`${instagram}/AI_PILL/2.webp`),
			resolveImage(`${instagram}/AI_PILL/3.webp`),
			resolveImage(`${instagram}/AI_PILL/4.webp`)
		],
		file: "AI_Pill_Series.webp",
		lightboxScroll: true,
		year: 2025
	},
	{
		id: "rifkus-design",
		title: "Rifkus Design",
		category: "Brand / Identity",
		thumbnail: resolveImage(`${instagram}/rifkus design.webp`),
		images: [resolveImage(`${instagram}/rifkus design.webp`)],
		file: "Rifkus_Design.webp",
		year: 2025
	},
	{
		id: "aurem",
		title: "Aurem",
		category: "Logo / Joaillerie",
		thumbnail: resolveImage(`${carteVisite}/AUREM/2.webp`),
		images: [resolveImage(`${carteVisite}/AUREM/1.webp`), resolveImage(`${carteVisite}/AUREM/2.webp`)],
		file: "Aurem_Wordmark.webp",
		cardStack: true,
		lightboxScroll: true,
		year: 2024
	},
	{
		id: "akham-lkhir",
		title: "Akham L'Khir",
		category: "Brand Identity / Print",
		thumbnail: resolveImage("design/carte visite + menu/1.webp"),
		images: [resolveImage("design/carte visite + menu/1.webp"), resolveImage("design/carte visite + menu/2.webp")],
		file: "Business_Cards.webp",
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
		file: "Restaurant_Menu.webp",
		year: 2024
	},
	{
		id: "last-knight",
		title: "Last Knight",
		category: "Editorial / Concept",
		thumbnail: resolveImage(`${instagram}/Last_Knight.webp`),
		images: [resolveImage(`${instagram}/Last_Knight.webp`)],
		file: "Last_Knight.webp",
		year: 2025
	},
	{
		id: "sacred-moonlight",
		title: "Sacred Moonlight",
		category: "Poster / Spiritual Series",
		thumbnail: findImageByName("Green Cream Elegant Decorative Ramadan Kareem"),
		images: [findImageByName("Green Cream Elegant Decorative Ramadan Kareem")],
		file: "Ramadan_Kareem.webp",
		cardScroll: true,
		lightboxScroll: true,
		year: 2025
	},
	{
		id: "ramadan-mubarak",
		title: "Ramadan Mubarak",
		category: "Poster / Spiritual Series",
		thumbnail: findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post"),
		images: [findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post")],
		file: "Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.webp",
		year: 2024
	},
	{
		id: "le-montagnard",
		title: "Le Montagnard",
		category: "Brand Identity / Packaging",
		thumbnail: resolveImage("design/drink white label/le montagnard.webp"),
		images: [resolveImage("design/drink white label/le montagnard.webp")],
		file: "Le_Montagnard.webp",
		year: 2024
	},
	{
		id: "a-day-in-the-life",
		title: "A Day in the Life",
		category: "Lifestyle / Social",
		thumbnail: resolveImage(`${instagram}/A DAY IN THE LIFE.webp`),
		images: [resolveImage(`${instagram}/A DAY IN THE LIFE.webp`)],
		file: "A_Day_In_The_Life.webp",
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
