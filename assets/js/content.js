// Everything a visitor reads lives here. To add a real painting: put the photo in
// assets/img/ and add an entry to `works`.
window.PORTFOLIO = {
  artist: "Ashley Xie",
  wordmark: ["Ashley", "Xie"],
  role: "Painter",
  eyebrow: "Painter, Dartmouth College",
  statement: "Figures and portraits painted from life, about the way a person takes up space.",
  latest: "Oak Cliff Art Walk, Oct 2026",
  // Leave empty to hide. Fill in to show contact buttons.
  email: "",
  instagram: "",

  selectedIntro: "Placeholder images for now. Ashley's own paintings will go here.",

  // PLACEHOLDERS until Ashley's own paintings are added: public-domain paintings from the
  // Art Institute of Chicago. `credit` and `source` point back to the original museum record.
  // For a real painting, drop `credit`/`source` and add `year` and `size`.
  works: [
    { img: "103139.jpg", w: 6001, h: 4248, title: "Waterloo Bridge, Gray Weather", medium: "Oil on canvas", credit: "Claude Monet, 1900", source: "https://www.artic.edu/artworks/103139" },
    { img: "16564.jpg", w: 5253, h: 5097, title: "Branch of the Seine near Giverny (Mist)", medium: "Oil on canvas", credit: "Claude Monet, 1897", source: "https://www.artic.edu/artworks/16564" },
    { img: "878.jpg", w: 1587, h: 2250, title: "Wounded Eurydice", medium: "Oil on canvas", credit: "Jean Baptiste Camille Corot, 1868-70", source: "https://www.artic.edu/artworks/878" },
    { img: "14620.jpg", w: 6356, h: 5090, title: "Cliff Walk at Pourville", medium: "Oil on canvas", credit: "Claude Monet, 1882", source: "https://www.artic.edu/artworks/14620" },
    { img: "109926.jpg", w: 4000, h: 2564, title: "Window Overlooking the Woods", medium: "Oil on canvas", credit: "Edouard Vuillard, 1899", source: "https://www.artic.edu/artworks/109926" },
    { img: "87088.jpg", w: 5448, h: 4845, title: "Water Lily Pond", medium: "Oil on canvas", credit: "Claude Monet, 1900", source: "https://www.artic.edu/artworks/87088" },
    { img: "185185.jpg", w: 3000, h: 2183, title: "Coming Squall", medium: "Oil on panel", credit: "Thomas Doughty, 1835", source: "https://www.artic.edu/artworks/185185" },
    { img: "16571.jpg", w: 6786, h: 5092, title: "Arrival of the Normandy Train", medium: "Oil on canvas", credit: "Claude Monet, 1877", source: "https://www.artic.edu/artworks/16571" },
  ],

  // Extra paintings that only appear in the moving strip at the top.
  stripExtras: [
    { img: "14598.jpg", w: 6793, h: 5021, title: "The Beach at Sainte-Adresse" },
    { img: "81539.jpg", w: 6116, h: 4943, title: "On the Bank of the Seine" },
    { img: "874.jpg", w: 2829, h: 2250, title: "Landscape" },
    { img: "879.jpg", w: 2905, h: 2250, title: "The Lock" },
  ],

  // Drawn from Ashley's own statement for Forma. Replace with a fuller bio when ready.
  about: [
    "I paint figures and portraits, from life and from images. I developed my craft at Dartmouth College, where I painted countless figures.",
    "The more people I paint, the more details I notice: the curve of the chin, the highlights in the eyes, the green of the skin. I aim to capture each subject in a single fleeting moment.",
  ],
  education: [],

  exhibitions: [
    {
      name: "Oak Cliff Art Walk",
      kind: "Group exhibition, Volume 6. East Dock, Dallas, TX",
      description: "A free community exhibition of local artists, held in East Dock, a 1915 warehouse in Oak Cliff, October 23-24, 2026.",
      link: { href: "https://www.artwalkoakcliff.com/", text: "Oak Cliff Art Walk website" },
      year: "2026",
    },
    {
      name: "Forma -ae f.",
      kind: "Senior art exhibition, Dartmouth College",
      description: "Figure paintings and portraits made from my years of study at Dartmouth.",
      statement: [
        "While developing my craft during my time at Dartmouth, I painted countless figures, both from life and from images. The human form comes with a lot of overpowering connotations revolving around beauty, sexuality, and physical and mental ability. Many students including myself find our bodies as vehicles for insecurity. But this Latin noun implies that there is inherent beauty in form. Our mere existence and the way one takes up space becomes compelling.",
        "The more individuals that I painted, the more details I noticed- the curve of the chin, the highlights in the eyes, the green of the skin. As I refined my style, the process became an intimate one- one where I faced myself by studying the bodies of others. My mindset this term has been that I was always almost about to reach the level I desired. In the last few weeks of this term, I started recruiting models and painting as many figures as possible.",
        "Every portrait feels spontaneous. I aim to capture the subject in that exact fleeting moment. I will never see and experience this person the same way again. The effort to capture this form overcomes any bias from my own insecurities.",
      ],
      year: "2024",
    },
  ],
};
