import { r as __toESM } from "../_runtime.mjs";
import { i as getArchiveYearRange, n as featuredProject, r as formatProjectIndex, t as archiveProjects } from "./projects-BFdlaXuH.mjs";
import { P as require_react, _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DbbvPyu6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var websiteImageModules = /* #__PURE__ */ Object.assign({
	"./Websites/Location/Capture d'écran 2026-07-08 173938.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20173938-RSWsbA74.webp",
	"./Websites/Location/Capture d'écran 2026-07-08 173950.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20173950-DSxWotC6.webp",
	"./Websites/Location/Capture d'écran 2026-07-08 174137.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20174137-DIffw0s8.webp",
	"./Websites/Location/Capture d'écran 2026-07-08 174153.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20174153-Dbhkg_T3.webp",
	"./Websites/Location/Capture d'écran 2026-07-08 174202.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20174202-C5J0jy56.webp",
	"./Websites/MyTicket/SignIn_org.webp": "/assets/SignIn_org-evsu-t5k.webp",
	"./Websites/MyTicket/create_event.webp": "/assets/create_event-M9vOvn_w.webp",
	"./Websites/MyTicket/home.webp": "/assets/home-Bmi4VrPE.webp",
	"./Websites/MyTicket/logIn.webp": "/assets/logIn-Be7PUdQ8.webp",
	"./Websites/MyTicket/paiment.webp": "/assets/paiment-DeLkYkvh.webp",
	"./Websites/MyTicket/signIn-client.webp": "/assets/signIn-client-DpX0d42b.webp",
	"./Websites/MyTicket/ticket.webp": "/assets/ticket-BqYYqG7W.webp",
	"./Websites/TheAuctionRoom/Capture d'écran 2026-07-07 081807.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-07%20081807-Dji-WoxW.webp",
	"./Websites/TheAuctionRoom/Capture d'écran 2026-07-08 172831.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172831-6eOKicqs.webp",
	"./Websites/TheAuctionRoom/Capture d'écran 2026-07-08 172858.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172858-DyVFKvs1.webp",
	"./Websites/TheAuctionRoom/Capture d'écran 2026-07-08 172910.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172910-DVXUKGO6.webp",
	"./Websites/TheAuctionRoom/Capture d'écran 2026-07-08 172936.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172936-CdY-b7b1.webp",
	"./Websites/TheAuctionRoom/Capture d'écran 2026-07-08 172958.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172958-28_d2OE1.webp",
	"./Websites/Truthscope/Capture d'écran 2026-07-08 172512.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172512-CTr5UjQw.webp",
	"./Websites/Truthscope/Capture d'écran 2026-07-08 172521.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172521-hys0FoTQ.webp",
	"./Websites/Truthscope/Capture d'écran 2026-07-08 172540.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172540-AkyoQh76.webp",
	"./Websites/Truthscope/Capture d'écran 2026-07-08 172556.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172556-C-DQ66gF.webp",
	"./Websites/Truthscope/Capture d'écran 2026-07-08 172611.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20172611-CT5tFgKr.webp",
	"./Websites/connectWithMe/Capture d'écran 2026-07-08 174335.webp": "/assets/Capture%20d'%C3%A9cran%202026-07-08%20174335-BEiiu-D4.webp"
});
function normalizeFolder(folder) {
	return folder.replace(/\\/g, "/").toLowerCase();
}
function resolveWebsiteImages(folder) {
	const needle = normalizeFolder(folder);
	return Object.entries(websiteImageModules).filter(([path]) => normalizeFolder(path).includes(needle)).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url);
}
function resolveWebsitePreview(folder) {
	return resolveWebsiteImages(folder)[0];
}
var websites = [
	{
		id: "truthscope",
		title: "TruthScope",
		description: "AI-powered fact-checking platform that surfaces source-backed claims and helps users evaluate information credibility in real time.",
		technologies: [
			"React",
			"TypeScript",
			"AI",
			"Vercel"
		],
		liveUrl: "https://thetruthscope.vercel.app/",
		githubUrl: "https://github.com/AnisBenini/TruthScope",
		previewImage: resolveWebsitePreview("Truthscope"),
		year: 2025
	},
	{
		id: "connect-with-me",
		title: "Connect With Me",
		description: "Personal link hub for social profiles, contact routes, and quick access to projects — a lightweight digital business card on the web.",
		technologies: [
			"HTML",
			"CSS",
			"GitHub Pages"
		],
		liveUrl: "https://anisbenini.github.io/conenctWithMe/",
		previewImage: resolveWebsitePreview("connectWithMe"),
		year: 2024
	},
	{
		id: "kadour-location",
		title: "Kadour Location",
		description: "Location and booking experience for Kadour — a clean, responsive landing page built to showcase services and drive conversions.",
		technologies: [
			"React",
			"Netlify",
			"Responsive UI"
		],
		liveUrl: "https://kadour.netlify.app/",
		previewImage: resolveWebsitePreview("Location"),
		year: 2025
	},
	{
		id: "the-auction-room",
		title: "The Auction Room",
		description: "Live auction platform with real-time bidding flows, catalog browsing, and a cinematic interface for high-value collectibles.",
		technologies: [
			"React",
			"TypeScript",
			"Real-time",
			"Web App"
		],
		previewImage: resolveWebsitePreview("TheAuctionRoom"),
		year: 2026,
		inProgress: true
	},
	{
		id: "fine-tuning-qa",
		title: "Fine-Tuning QA Dataset",
		description: "NLP research project fine-tuning LLaMA 3.2 1B and GPT-2 Large on 140K Python QA pairs — comparing model accuracy, coherence, and inference efficiency with LoRA/QLoRA.",
		technologies: [
			"Python",
			"PyTorch",
			"LLaMA",
			"GPT-2",
			"LoRA"
		],
		githubUrl: "https://github.com/AnisBenini/FineTuning-QA_Dataset",
		year: 2025
	},
	{
		id: "myticket",
		title: "MyTicket",
		description: "Full-stack ticket booking platform with user authentication, dynamic event listings, real-time booking, admin panel, and PDF e-tickets — built with PHP and MySQL.",
		technologies: [
			"PHP",
			"MySQL",
			"HTML",
			"CSS",
			"JavaScript"
		],
		githubUrl: "https://github.com/AnisBenini/MyTicket",
		previewImage: resolveWebsitePreview("MyTicket"),
		year: 2024
	}
];
function formatWebsiteIndex(index) {
	return `W${String(index + 1).padStart(2, "0")}`;
}
function ImageLightbox({ images, title, scroll = false, initialIndex = 0, onClose }) {
	const handleKeyDown = (0, import_react.useCallback)((e) => {
		if (e.key === "Escape") onClose();
	}, [onClose]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `${title} — full screen view`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute top-6 right-6 z-10 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors border border-white/20 px-4 py-2",
				"aria-label": "Close",
				children: "Close ✕"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "absolute top-6 left-6 z-10 font-mono text-[10px] uppercase tracking-widest text-white/50",
				children: [title, scroll && images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 text-white/30",
					children: "← scroll →"
				})]
			}),
			scroll && images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-6 overflow-x-auto snap-x snap-mandatory px-8 py-16 max-w-full max-h-full scrollbar-thin",
				onClick: (e) => e.stopPropagation(),
				children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: `${title} ${i + 1}`,
					className: "snap-center shrink-0 max-h-[85vh] max-w-[min(90vw,720px)] object-contain",
					style: { scrollSnapAlign: "center" }
				}, src))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images[initialIndex] ?? images[0],
				alt: title,
				className: "max-w-[95vw] max-h-[90vh] object-contain",
				onClick: (e) => e.stopPropagation()
			})
		]
	});
}
function ResumeModal({ englishUrl, frenchUrl, onClose }) {
	const handleKeyDown = (0, import_react.useCallback)((e) => {
		if (e.key === "Escape") onClose();
	}, [onClose]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Select resume language",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-[0.04]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-[grain_1s_steps(2)_infinite]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute top-6 right-6 z-20 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors border border-white/20 px-4 py-2 cursor-pointer",
				"aria-label": "Close",
				children: "Close ✕"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute top-6 left-6 z-20 font-mono text-[10px] uppercase tracking-widest text-white/50",
				children: "Resume Selection / Sélection du CV"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 max-w-xl w-full mx-6 bg-secondary border border-border p-8 md:p-12 shadow-2xl flex flex-col items-center",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4 animate-pulse",
						children: "● Select Language"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-4xl md:text-5xl uppercase tracking-tighter text-center mb-8",
						children: "Download Resume / CV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: englishUrl,
							target: "_blank",
							rel: "noreferrer",
							onClick: onClose,
							className: "group w-full border border-border hover:border-primary p-6 transition-all duration-300 flex flex-col items-center justify-center bg-background/50 hover:bg-secondary/40 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] tracking-widest text-muted uppercase group-hover:text-primary transition-colors",
									children: "[ EN ]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-3xl uppercase mt-2 group-hover:text-primary transition-colors",
									children: "English"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] text-muted opacity-60 mt-1 uppercase tracking-wider",
									children: "English version ↗"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: frenchUrl,
							target: "_blank",
							rel: "noreferrer",
							onClick: onClose,
							className: "group w-full border border-border hover:border-primary p-6 transition-all duration-300 flex flex-col items-center justify-center bg-background/50 hover:bg-secondary/40 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] tracking-widest text-muted uppercase group-hover:text-primary transition-colors",
									children: "[ FR ]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-3xl uppercase mt-2 group-hover:text-primary transition-colors",
									children: "Français"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] text-muted opacity-60 mt-1 uppercase tracking-wider",
									children: "Version française ↗"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] text-muted opacity-50 uppercase mt-8 text-center tracking-widest",
						children: "Algiers — 2026"
					})
				]
			})
		]
	});
}
var stack = [
	"Python",
	"HTML / CSS",
	"Canva",
	"FastAPI",
	"JavaScript",
	"Photoshop",
	"PostgreSQL",
	"TypeScript",
	"After Effects",
	"LangChain",
	"React",
	"Illustrator",
	"PyTorch",
	"Figma",
	"Blender",
	"Transformers",
	"UI/UX",
	"And more"
];
var education = [{
	role: "Master's Degree in Intelligent Computer Systems",
	company: "University of Mouloud Mammeri, Tizi Ouzou, Algeria",
	period: "2023 — 2025",
	description: "Specialised in AI, machine learning, and intelligent system design.",
	details: ["Master Thesis: Automatic Detection of Fake News Through Semantic Analysis of Social Media Texts."]
}, {
	role: "Bachelor's Degree in Computer Science",
	company: "University of Mouloud Mammeri, Tizi Ouzou, Algeria",
	period: "2020 — 2023",
	description: "Core foundations in algorithms, data structures, software engineering, and databases.",
	details: []
}];
function ContactButton() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopy = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText("anisbenini@proton.me");
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "mailto:anisbenini@proton.me",
			onClick: handleCopy,
			className: "group relative inline-flex items-center gap-4 bg-white text-black font-mono text-xs md:text-sm uppercase tracking-widest px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 border border-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative z-10 text-black group-hover:text-white transition-colors duration-300",
					children: copied ? "Copied to Clipboard!" : "anisbenini@proton.me"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative z-10 text-primary font-bold transition-transform duration-300 group-hover:translate-x-1",
					children: copied ? "✓" : "↗"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[9px] uppercase tracking-widest text-white/50 animate-pulse",
			children: copied ? "Clicking copies the address" : "Click to copy email address"
		})]
	});
}
function ProjectCard({ project, index, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onOpen(project),
		className: `group cursor-crosshair space-y-6 text-left w-full ${index % 2 === 1 ? "md:mt-32" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden bg-secondary",
			children: [
				project.cardStack && project.images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col aspect-[4/5] overflow-hidden",
					children: project.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: `${project.title} ${i + 1}`,
						loading: "lazy",
						className: "w-full flex-1 object-cover transition-all duration-700 group-hover:scale-[1.02]"
					}, src))
				}) : project.cardScroll && project.images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3 overflow-x-auto snap-x snap-mandatory p-4 aspect-[4/5] items-center",
					children: project.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: `${project.title} ${i + 1}`,
						loading: "lazy",
						className: "snap-center shrink-0 h-[70%] max-w-[75%] object-contain mx-auto transition-all duration-700 group-hover:scale-[1.02]"
					}, src))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.thumbnail,
					alt: project.title,
					loading: "lazy",
					className: "w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border border-white/0 group-hover:border-primary/30 transition-colors pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-foreground/70",
					children: project.file
				}),
				project.cardScroll && project.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-foreground/50",
					children: "← scroll →"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display text-2xl md:text-3xl uppercase group-hover:text-primary transition-colors",
				children: project.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted font-mono uppercase mt-1",
				children: project.category
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-muted opacity-60",
				children: formatProjectIndex(index)
			})]
		})]
	});
}
function Index() {
	const [time, setTime] = (0, import_react.useState)("");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [showResume, setShowResume] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const tick = () => {
			setTime((/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				timeZone: "Africa/Algiers"
			}));
		};
		tick();
		const id = setInterval(tick, 1e3);
		return () => clearInterval(id);
	}, []);
	const openProject = (project) => {
		setLightbox({
			images: project.images,
			title: project.title,
			scroll: project.lightboxScroll
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.04]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-[grain_1s_steps(2)_infinite]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "sticky top-0 z-40 flex items-center justify-between px-6 py-8 mix-blend-difference",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "font-display text-2xl tracking-tighter uppercase animate-[slide-up_0.8s_var(--ease-cinematic)_both] text-foreground",
						children: "AB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex gap-12 text-[10px] font-mono tracking-widest uppercase text-muted animate-[slide-up_0.8s_0.1s_var(--ease-cinematic)_both]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								className: "hover:text-primary transition-colors hover-underline-expand",
								children: "Selected_Works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#websites",
								className: "hover:text-primary transition-colors hover-underline-expand",
								children: "Websites"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#lab",
								className: "hover:text-primary transition-colors hover-underline-expand",
								children: "Laboratory"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#experience",
								className: "hover:text-primary transition-colors hover-underline-expand",
								children: "Experience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hover:text-primary transition-colors hover-underline-expand",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block font-mono text-[10px] tracking-widest uppercase text-muted",
						children: ["ALG / ", time]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative px-6 pt-12 pb-32 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 left-0 w-full h-full -z-10 opacity-[0.08] pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[25vw] leading-[0.8] tracking-tighter uppercase whitespace-nowrap -translate-x-[3%]",
						children: "Anis Benini"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted animate-[slide-up_0.8s_var(--ease-cinematic)_both]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }), "Available for select projects — 2026"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-6xl sm:text-7xl md:text-9xl uppercase leading-[0.85] tracking-tight animate-[slide-up_1s_var(--ease-cinematic)_both]",
								children: [
									"AI Engineer",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "×"
									}),
									" Visual",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Engineer"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-base md:text-lg text-muted font-mono animate-[slide-up_1.2s_0.2s_var(--ease-cinematic)_both]",
								children: "I build intelligent products and cinematic interfaces — where machine learning, web engineering and art direction collide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 animate-[slide-up_1.4s_0.3s_var(--ease-cinematic)_both]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#work",
									className: "group inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-widest hover:bg-primary hover:border-primary transition-colors",
									children: ["View Archive", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "group-hover:translate-x-1 transition-transform",
										children: "↓"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://github.com/AnisBenini/",
									target: "_blank",
									rel: "noreferrer",
									className: "group inline-flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-muted hover:text-foreground transition-colors",
									children: ["Github", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "group-hover:translate-x-1 transition-transform",
										children: "↗"
									})]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-5 animate-[shutter-reveal_1.5s_0.3s_var(--ease-cinematic)_both]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full aspect-[4/5] overflow-hidden outline outline-1 -outline-offset-1 outline-white/5 group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: featuredProject.thumbnail,
									alt: `${featuredProject.title} by Anis Benini`,
									className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: featuredProject.file }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "@ANIS_BENINI" })]
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border py-6 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex whitespace-nowrap animate-[marquee_40s_linear_infinite] gap-16 font-display text-4xl uppercase tracking-tight",
					children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-16 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI Engineering" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Web Development" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Art Direction" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Poster Design" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brand Identity" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✦"
							})
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "work",
				className: "px-6 py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-end mb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-4xl md:text-6xl uppercase tracking-tighter",
							children: "Archive_01"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10px] uppercase text-muted",
							children: [
								"Scroll to explore [",
								getArchiveYearRange(),
								"]"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24",
						children: archiveProjects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project,
							index: i,
							onOpen: openProject
						}, project.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "websites",
				className: "px-6 py-32 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-end mb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-4xl md:text-6xl uppercase tracking-tighter",
							children: "Live_Sites"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase text-muted",
							children: "Web builds & shipped products"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8",
						children: websites.map((website, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative block border border-border overflow-hidden hover:border-primary transition-all duration-300",
							children: [website.previewImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: website.previewImage,
								alt: "",
								"aria-hidden": "true",
								className: "absolute inset-0 w-full h-full object-cover object-top opacity-[0.18] group-hover:opacity-[0.28] transition-opacity duration-500 scale-105 group-hover:scale-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 p-8 group-hover:bg-secondary/20 transition-colors duration-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-start mb-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted",
											children: formatWebsiteIndex(i)
										}), website.inProgress ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted",
											children: "In Progress"
										}) : website.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: website.liveUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "font-mono text-xs text-muted group-hover:text-primary transition-colors",
											children: "↗"
										}) : null]
									}),
									website.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: website.liveUrl,
										target: "_blank",
										rel: "noreferrer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-2xl md:text-3xl uppercase mb-4 group-hover:text-primary transition-colors",
											children: website.title
										})
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-2xl md:text-3xl uppercase mb-4 group-hover:text-primary transition-colors",
										children: website.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted font-mono text-sm leading-relaxed mb-8",
										children: website.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 mb-6",
										children: website.technologies.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-widest border border-border px-3 py-1 text-muted",
											children: tag
										}, tag))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest",
										children: [website.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: website.liveUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "text-muted hover:text-primary transition-colors",
											children: "Live ↗"
										}), website.githubUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: website.githubUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "text-muted hover:text-primary transition-colors",
											children: "Github ↗"
										})]
									})
								]
							})]
						}, website.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "lab",
				className: "px-6 py-32 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted",
							children: "[ Laboratory ]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-4xl md:text-6xl uppercase tracking-tighter mt-4",
							children: [
								"The",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Workbench"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-8 space-y-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xl md:text-3xl font-body leading-snug",
								children: [
									"I split my time between shipping ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "AI systems"
									}),
									" — retrieval, agents, model pipelines — and designing ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "visual identities"
									}),
									" that actually feel like something. Code and composition, the same craft."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3",
								children: stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 font-mono text-sm border-b border-border pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary text-xs",
										children: "●"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase tracking-wider",
										children: s
									})]
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-8 pt-8 border-t border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-5xl md:text-6xl",
										children: ["30", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "+"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted mt-2",
										children: "Projects Shipped"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-5xl md:text-6xl",
										children: ["5", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "Y"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted mt-2",
										children: "Building Systems"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-5xl md:text-6xl",
										children: "∞"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted mt-2",
										children: "Ideas / Second"
									})] })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "experience",
				className: "px-6 py-32 border-t border-border reveal-on-scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted",
							children: "[ Academic Background ]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-4xl md:text-6xl uppercase tracking-tighter mt-4",
							children: "Education"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-8 space-y-16",
						children: education.map((exp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pl-8 border-l border-border hover:border-primary transition-colors duration-500 group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xl font-display uppercase tracking-tight group-hover:text-primary transition-colors duration-300",
										children: exp.role
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-muted uppercase tracking-wider mt-1",
										children: exp.company
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted border border-border px-3 py-1 self-start sm:self-auto",
										children: exp.period
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted font-mono text-sm leading-relaxed max-w-2xl",
									children: exp.description
								}),
								exp.details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2 pl-4 list-disc list-inside font-mono text-xs text-muted/80 leading-relaxed max-w-2xl",
									children: exp.details.map((detail, dIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "hover:text-foreground transition-colors duration-300",
										children: detail
									}, dIdx))
								})
							]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				id: "contact",
				className: "relative px-6 py-32 bg-primary text-white overflow-hidden reveal-on-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 footer-grid-bg opacity-45 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.3em] mb-8 opacity-80",
								children: "[ Let's build something loud ]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-7xl sm:text-9xl md:text-[14rem] uppercase leading-[0.85] mb-12",
								children: [
									"Let's",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Work"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactButton, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap justify-center gap-8 font-mono text-xs uppercase tracking-widest",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/AnisBenini/",
										target: "_blank",
										rel: "noreferrer",
										className: "underline underline-offset-8 hover:text-black transition-colors",
										children: "Github ↗"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com/anis_benini",
										target: "_blank",
										rel: "noreferrer",
										className: "underline underline-offset-8 hover:text-black transition-colors",
										children: "Instagram ↗"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:anisbenini@proton.me",
										className: "underline underline-offset-8 hover:text-black transition-colors",
										children: "Email ↗"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowResume(true),
										className: "underline underline-offset-8 hover:text-black transition-colors cursor-pointer font-mono text-xs uppercase tracking-widest",
										children: "Resume ↗"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-7xl mx-auto mt-24 pt-8 border-t border-white/20 flex justify-between font-mono text-[10px] uppercase tracking-widest opacity-70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Anis Benini" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Algiers — 36.75° N" })]
					})
				]
			}),
			lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageLightbox, {
				images: lightbox.images,
				title: lightbox.title,
				scroll: lightbox.scroll,
				onClose: () => setLightbox(null)
			}),
			showResume && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeModal, {
				englishUrl: "/assets/englishResume-BdqAtfZf.pdf",
				frenchUrl: "/assets/frenchResume-BQjf1hP9.pdf",
				onClose: () => setShowResume(false)
			})
		]
	});
}
//#endregion
export { Index as component };
