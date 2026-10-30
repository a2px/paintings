// Everything a visitor reads lives here. To add a painting: put the photo in
// assets/img/ and add an entry to `works`.
window.PORTFOLIO = {
  artist: "Ashley Xie",
  role: "Painter",
  statement: "Ashley Xie is a Dallas-based artist studying how figures reflect the impermanence of time and the freshness of a moment.",
  // Leave empty to hide. Fill in to show contact buttons.
  email: "",
  instagram: "https://www.instagram.com/ashleyartifex/",


  // Ashley's paintings, with titles, sizes and years from Ashley.
  works: [
    { img: "green-portrait.jpg", w: 1253, h: 1600, title: "Gaze", medium: "Oil on masonite", size: "8\" x 10 3/8\"", year: "2022", alt: "Head-and-shoulders portrait of a young woman painted in greens and yellows, looking straight out" },
    { img: "reclining-figure.jpg", w: 1314, h: 1062, title: "Francis", medium: "Oil on canvas", size: "18\" x 24\"", year: "2023", alt: "Nude figure seen from behind, reclining on purple-and-white striped fabric against a pale blue wall" },
    { img: "three-figures.jpg", w: 1289, h: 1600, title: "Dancing", medium: "Oil on canvas", size: "18\" x 24\"", year: "2024", alt: "Three standing nude figures in blues and greens against a bright yellow ground" },
    { img: "seated-man.jpg", w: 1335, h: 1600, title: "Ben", medium: "Oil on canvas", size: "18\" x 24\"", year: "2024", alt: "Shirtless man with glasses seated with his arm resting on his knee, against a purple-gray background" },
    { img: "fencer.jpg", w: 1562, h: 1323, title: "Concussion", medium: "Oil on canvas", size: "18\" x 24\"", year: "2023", alt: "Fencer in white lying on their back holding a mask and foil, on a field of black and white brushstrokes" },
    { img: "yellow-green-portrait.jpg", w: 1178, h: 1430, title: "Soon", medium: "Oil on canvas", size: "18\" x 24\"", year: "2023", alt: "Portrait of a young woman with dark hair in yellow-green tones, surrounded by loose circular brushstrokes" },
    { img: "man-with-bowl.jpg", w: 1271, h: 1600, title: "Apurva", medium: "Oil on canvas", size: "18\" x 24\"", year: "2024", alt: "Young man in a pink shirt seated and holding a bowl in his lap, in warm pinks and oranges" },
    { img: "seated-woman-easel.jpg", w: 866, h: 1600, title: "Peer Painting", medium: "Oil on masonite", size: "12\" x 20\"", year: "2024", alt: "Woman seated on a tall stool beside an easel, a dark jacket slipping off one shoulder" },
    { img: "evan.jpg", w: 1011, h: 1280, title: "Evan", medium: "Oil on canvas", size: "18\" x 24\"", year: "2024", alt: "Head-and-shoulders portrait with tousled brown hair and warm pink skin tones, against a pale blue-gray background" },
    { img: "jennifer.jpg", w: 996, h: 1280, title: "Jennifer", medium: "Oil on canvas", size: "18\" x 24\"", year: "2024", alt: "Head-and-shoulders portrait in greens, with glasses and hair in a bun, against an ochre background" },
  ],

  // Drawn from Ashley's own statement for Forma. Replace with a fuller bio when ready.
  about: [
    "I paint figures and portraits, from life and from images. I developed my craft at Dartmouth College, where I majored in Design and minored in Studio Art.",
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
