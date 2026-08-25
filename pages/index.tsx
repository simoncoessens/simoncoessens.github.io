import type { NextPage } from "next";
import Head from "next/head";

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Simon Coessens",
	url: "https://simoncoessens.github.io/",
	image: "https://avatars.githubusercontent.com/u/56151036?v=4",
	email: "mailto:simon.coessens@proton.me",
	jobTitle: "Computer vision researcher",
	description:
		"Computer vision and generative models, with a recent focus on diffusion-based image generation.",
	alumniOf: [
		{ "@type": "CollegeOrUniversity", name: "CentraleSupélec" },
		{ "@type": "CollegeOrUniversity", name: "KU Leuven" },
	],
	sameAs: [
		"https://scholar.google.com/citations?user=Va8TCs8AAAAJ",
		"https://github.com/simoncoessens",
		"https://www.linkedin.com/in/simon-coessens/",
		"https://openreview.net/forum?id=69OK8v8BSJ",
		"https://sp4v.github.io/",
	],
	subjectOf: [
		{
			"@type": "ScholarlyArticle",
			name: "MultiViewPano: A Generalist Approach to 360-degree Panorama Generation",
			author: [
				{ "@type": "Person", name: "Simon Coessens" },
				{ "@type": "Person", name: "Akash Malhotra" },
				{ "@type": "Person", name: "Nacéra Bennacer Seghouani" },
			],
			url: "https://openreview.net/forum?id=69OK8v8BSJ",
			isPartOf: {
				"@type": "Event",
				name: "Structural Priors for Vision (SP4V) Workshop, ICCV 2025",
				url: "https://sp4v.github.io/",
				startDate: "2025-10-19",
				location: "Honolulu, Hawaii",
			},
		},
	],
};

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Simon Coessens</title>
				<meta
					name="description"
					content="Simon Coessens — computer vision and generative models. MSc CentraleSupélec (Erasmus Mundus BDMA). Spotlight talk at the SP4V workshop, ICCV 2025 (MultiViewPano)."
				/>
				<meta
					name="google-site-verification"
					content="k9fRT7fiiJqlqIXUaPXldCcpCxvBAoHuF1Oz7uvwUSk"
				/>
				<link rel="canonical" href="https://simoncoessens.github.io/" />
				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Simon Coessens" />
				<meta
					property="og:description"
					content="Computer vision and generative models. Spotlight talk at the SP4V workshop, ICCV 2025."
				/>
				<meta property="og:url" content="https://simoncoessens.github.io/" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
			</Head>
			<main className="mx-auto max-w-2xl px-6 py-20 font-serif text-[#1f2937] leading-relaxed">
				<div className="flex items-start gap-6 mb-10">
					<img
						src="https://avatars.githubusercontent.com/u/56151036?v=4"
						alt="Simon Coessens"
						className="w-28 h-28 rounded-full object-cover shrink-0"
					/>
					<div>
						<h1 className="text-3xl font-semibold text-black mb-2">
							Simon Coessens
						</h1>
						<p>
							I work on computer vision and generative models,
							with a recent focus on diffusion-based image
							generation.
						</p>
					</div>
				</div>

				<section className="mb-10">
					<h2 className="text-base font-semibold uppercase tracking-wide text-black mb-3">
						Education
					</h2>
					<ul className="space-y-4">
						<li>
							<div>
								<span className="text-black">
									MSc Computer Science
								</span>
								, CentraleSupélec, 2023–2025 — Erasmus Mundus
								scholarship, mention <em>Très bien</em>, with
								mobility across:
							</div>
							<ul className="mt-1 ml-5 list-disc text-sm text-[#4b5563] space-y-0.5">
								<li>École Polytechnique de Bruxelles (ULB)</li>
								<li>
									Universitat Politècnica de Catalunya (UPC)
								</li>
							</ul>
							<div className="mt-1 text-sm text-[#4b5563]">
								Thesis:{" "}
								<em>
									360° Panorama Generation from Arbitrarily
									Posed Input Images using Multi-View
									Diffusion
								</em>
								. Supervisor: Akash Malhotra.
							</div>
						</li>
						<li>
							<div>
								<span className="text-black">
									BSc Mathematics
								</span>
								, KU Leuven, 2020–2025 — <em>cum laude</em>
							</div>
							<div className="mt-1 text-sm text-[#4b5563]">
								Taken alongside Informatics degree; averaged
								~85 ECTS credits per year. Thesis:{" "}
								<em>Forecasting Stationary Processes</em>.
								Supervisor: Dr. Sergey Berezin.
							</div>
						</li>
						<li>
							<div>
								<span className="text-black">
									BSc Informatics
								</span>
								, KU Leuven, 2019–2023 — <em>cum laude</em>
							</div>
							<div className="mt-1 text-sm text-[#4b5563]">
								Thesis:{" "}
								<em>
									Efficiency Analysis of Compressed Sensing
									in a Boolean Setting
								</em>
								. Supervisor: Prof. Daan Huybrechs.
							</div>
						</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-base font-semibold uppercase tracking-wide text-black mb-3">
						Publications
					</h2>
					<ul className="space-y-4">
						<li>
							<a
								href="https://hal.science/hal-05522830/"
								target="_blank"
								rel="noreferrer"
								className="text-black underline underline-offset-2"
							>
								GaussianDiffusion: Learning Image Generation
								Process in Gaussian Representation Space
							</a>
							<div className="text-sm text-[#4b5563]">
								Simon Coessens, A. Samal, A. Malhotra,
								N. Bennacer Seghouani. 2025.
							</div>
						</li>
						<li>
							<a
								href="https://sp4v.github.io/"
								target="_blank"
								rel="noreferrer"
								className="text-black underline underline-offset-2"
							>
								MultiViewPano: A Generalist Approach to
								360-degree Panorama Generation
							</a>
							<div className="text-sm text-[#4b5563]">
								Simon Coessens, A. Malhotra, N. Bennacer
								Seghouani.{" "}
								<a
									href="https://sp4v.github.io/"
									target="_blank"
									rel="noreferrer"
									className="underline underline-offset-2"
								>
									Structural Priors for Vision (SP4V) Workshop,
									ICCV 2025
								</a>{" "}
								— <em>Spotlight talk</em>, Honolulu, 19 Oct 2025.{" "}
								<a
									href="https://openreview.net/forum?id=69OK8v8BSJ&noteId=69OK8v8BSJ"
									target="_blank"
									rel="noreferrer"
									className="underline underline-offset-2"
								>
									[OpenReview]
								</a>
							</div>
						</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-base font-semibold uppercase tracking-wide text-black mb-3">
						Links
					</h2>
					<ul className="space-y-1">
						<li>
							<a
								className="underline underline-offset-2 hover:text-black"
								href="mailto:simon.coessens@proton.me"
							>
								simon.coessens@proton.me
							</a>
						</li>
						<li>
							<a
								className="underline underline-offset-2 hover:text-black"
								href="https://scholar.google.com/citations?user=Va8TCs8AAAAJ&hl=en"
								target="_blank"
								rel="noreferrer"
							>
								Google Scholar
							</a>
						</li>
						<li>
							<a
								className="underline underline-offset-2 hover:text-black"
								href="https://github.com/simoncoessens"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</li>
					</ul>
				</section>

				<section>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
						<figure>
							<img
								src="/assets/iccv_presentation.jpg"
								alt="Presenting MultiViewPano at ICCV 2025, Honolulu"
								className="w-full aspect-square object-cover rounded"
							/>
							<figcaption className="mt-1 text-xs italic text-[#6b7280]">
								Presenting at ICCV 2025, Honolulu
							</figcaption>
						</figure>
						<figure>
							<img
								src="/assets/master_thesis.jpeg"
								alt="Master's Thesis Award"
								className="w-full aspect-square object-cover rounded"
							/>
							<figcaption className="mt-1 text-xs italic text-[#6b7280]">
								Master&apos;s Thesis Award
							</figcaption>
						</figure>
						<figure>
							<img
								src="/assets/bdma_group.JPG"
								alt="Erasmus Mundus cohort"
								className="w-full aspect-square object-cover rounded"
							/>
							<figcaption className="mt-1 text-xs italic text-[#6b7280]">
								Erasmus Mundus cohort
							</figcaption>
						</figure>
						<figure>
							<img
								src="/assets/zama_hackathon.png"
								alt="Zama hackathon, Paris"
								className="w-full aspect-square object-cover rounded"
							/>
							<figcaption className="mt-1 text-xs italic text-[#6b7280]">
								Zama hackathon, Paris
							</figcaption>
						</figure>
						<figure>
							<img
								src="/assets/upcxrevolut.jpeg"
								alt="UPC × Revolut hackathon"
								className="w-full aspect-square object-cover rounded"
							/>
							<figcaption className="mt-1 text-xs italic text-[#6b7280]">
								UPC × Revolut hackathon
							</figcaption>
						</figure>
						<figure>
							<img
								src="/assets/leads.png"
								alt="LEADS Innovation Challenge"
								className="w-full aspect-square object-cover rounded"
							/>
							<figcaption className="mt-1 text-xs italic text-[#6b7280]">
								LEADS Innovation Challenge
							</figcaption>
						</figure>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
