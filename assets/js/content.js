// Everything a visitor reads lives here. To add a painting: put the photo in
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

  selectedIntro: "Figure paintings and portraits, mostly painted from life.",

  // Ashley's paintings. Titles are descriptive working titles until Ashley names them;
  // add `year` and `size` to show them in captions and the viewer.
  works: [
    { img: "green-portrait.jpg", w: 1253, h: 1600, title: "Portrait in Green", medium: "Oil on masonite", alt: "Head-and-shoulders portrait of a young woman painted in greens and yellows, looking straight out" },
    { img: "yellow-green-portrait.jpg", w: 1178, h: 1430, title: "Portrait in Yellow-Green", medium: "Oil on canvas", alt: "Portrait of a young woman with dark hair in yellow-green tones, surrounded by loose circular brushstrokes" },
    { img: "three-figures.jpg", w: 1289, h: 1600, title: "Three Figures", medium: "Oil on canvas", alt: "Three standing nude figures in blues and greens against a bright yellow ground" },
    { img: "seated-man.jpg", w: 1335, h: 1600, title: "Seated Man", medium: "Oil on canvas", alt: "Shirtless man with glasses seated with his arm resting on his knee, against a purple-gray background" },
    { img: "seated-woman-easel.jpg", w: 866, h: 1600, title: "Seated Model with Easel", medium: "Oil on masonite", alt: "Woman seated on a tall stool beside an easel, a dark jacket slipping off one shoulder" },
    { img: "man-with-bowl.jpg", w: 1271, h: 1600, title: "Man with Bowl", medium: "Oil on canvas", alt: "Young man in a pink shirt seated and holding a bowl in his lap, in warm pinks and oranges" },
    { img: "reclining-figure.jpg", w: 1314, h: 1062, title: "Reclining Figure", medium: "Oil on canvas", alt: "Nude figure seen from behind, reclining on purple-and-white striped fabric against a pale blue wall" },
    { img: "fencer.jpg", w: 1562, h: 1323, title: "Fencer", medium: "Oil on canvas", alt: "Fencer in white lying on their back holding a mask and foil, on a field of black and white brushstrokes" },
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
