// ============================================================
//  EDIT THIS FILE TO CUSTOMIZE THE PORTFOLIO
//  1. Put photos in the /images folder.
//  2. Change the file names below to match the photos.
//  3. Change the text. Save. Redeploy to Vercel.
// ============================================================

window.SITE = {
  name: "Syukran Shalihin",
  greeting: "Hello, I'm",
  role: "Photographer, Videographer & Media Designer",
  cvFile: "cv.pdf",                       // put cv.pdf in the root folder
  email: "syukran@example.com",
  instagram: "https://instagram.com/your-username",
  youtube: "https://youtube.com/@your-channel",   // leave "" to hide
  behance: "",                                     // leave "" to hide
  linkedin: "",                                    // leave "" to hide

  // ---------- PHOTOS ----------
  photos: {
    profile: "images/profile.jpg",        // round photo at the top
    about: "images/about.jpg",            // photo in "About Me"
  },

  // ---------- ABOUT ----------
  about: {
    cards: [
      { icon: "📷", title: "Experience", lines: ["X+ years Photography", "X+ years Videography"] },
      { icon: "🎓", title: "Education", lines: ["Your Degree", "Your University"] },
    ],
    text:
      "I'm a visual storyteller who works with photos, video and design. I shoot events, " +
      "products and everyday street moments, edit short films and vlogs, and design posters " +
      "and social media content. I love turning simple moments into images that people remember.",
  },

  // ---------- SKILLS ----------
  // level: "Basic" | "Intermediate" | "Experienced" | "Advanced"
  skills: [
    {
      title: "Photo & Video",
      items: [
        { name: "Photography", level: "Advanced" },
        { name: "Videography", level: "Experienced" },
        { name: "Lightroom", level: "Advanced" },
        { name: "Premiere Pro", level: "Experienced" },
        { name: "DaVinci Resolve", level: "Intermediate" },
        { name: "Color Grading", level: "Intermediate" },
      ],
    },
    {
      title: "Media Design",
      items: [
        { name: "Photoshop", level: "Experienced" },
        { name: "Illustrator", level: "Intermediate" },
        { name: "After Effects", level: "Basic" },
        { name: "Canva", level: "Advanced" },
        { name: "Poster Design", level: "Experienced" },
        { name: "Social Media Content", level: "Experienced" },
      ],
    },
  ],

  // ---------- GALLERY ----------
  // type: "photo" | "video" | "design"  (used by the filter buttons)
  // link: optional. For videos, put the YouTube / Instagram link → shows a ▶ play button.
  gallery: [
    { type: "photo",  title: "Street Photography",  caption: "Everyday moments",        image: "images/work1.jpg", link: "" },
    { type: "photo",  title: "Event Photography",   caption: "Weddings & events",       image: "images/work2.jpg", link: "" },
    { type: "photo",  title: "Product Photography", caption: "Clean product shots",     image: "images/work3.jpg", link: "" },
    { type: "video",  title: "Cinematic Vlog",      caption: "Travel & daily life",     image: "images/work4.jpg", link: "" },
    { type: "video",  title: "Short Film",          caption: "Story & editing",         image: "images/work5.jpg", link: "" },
    { type: "design", title: "Poster Design",       caption: "Events & social media",   image: "images/work6.jpg", link: "" },
  ],

  footer: "All Rights Reserved.",
};
