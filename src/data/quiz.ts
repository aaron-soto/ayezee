export const QUIZ = [
  {
    question: "How old is your website?",
    blurb:
      "Web technologies evolve fast. If your site is more than a few years old, it might be outdated in terms of speed, security, and design.",
    answers: [
      { text: "Less than a year old", weight: 1 },
      { text: "1-3 years", weight: 3 },
      { text: "4+ years", weight: 5 },
      { text: "I don’t know", weight: 4 },
    ],
  },
  {
    question: "How fast does your website load?",
    blurb:
      "A slow website loses visitors. If it takes more than a couple of seconds to load, you might be driving away potential customers.",
    answers: [
      { text: "Instantly", weight: 1 },
      { text: "A second or two", weight: 2 },
      { text: "Feels kind of slow", weight: 4 },
      { text: "I have no idea", weight: 5 },
    ],
  },
  {
    question: "Have you updated your website in the last six months?",
    blurb: "Regular updates keep your site secure and running smoothly.",
    answers: [
      { text: "Yes, I update it often", weight: 1 },
      { text: "Only for minor changes", weight: 2 },
      { text: "No, I set it and forget it", weight: 4 },
      { text: "I don’t even know how to update it", weight: 5 },
    ],
  },
  {
    question: "Does your website work well on mobile?",
    blurb:
      "Over half of web traffic comes from mobile devices. If your site isn’t optimized for mobile, you could be losing a huge audience.",
    answers: [
      { text: "Yes, it looks great", weight: 1 },
      { text: "I think so, but I haven’t checked", weight: 3 },
      { text: "Not really, things seem off", weight: 4 },
      { text: "No clue", weight: 5 },
    ],
  },
  {
    question:
      "How easy is it for customers to contact you through your website?",
    blurb: "A good website makes it simple to reach out.",
    answers: [
      { text: "Super easy—just a click away", weight: 1 },
      { text: "There’s a form, but I’m not sure it works", weight: 3 },
      { text: "I get complaints that people can’t reach me", weight: 4 },
      { text: "I don’t know if anyone has ever used it", weight: 5 },
    ],
  },
  {
    question:
      "Does your website appear on Google when you search for your business name?",
    blurb:
      "If your site doesn’t show up in search results, you might be missing out on free traffic.",
    answers: [
      { text: "Yes, right at the top", weight: 1 },
      { text: "It’s there, but other stuff shows up first", weight: 3 },
      { text: "I have to scroll a bit", weight: 4 },
      { text: "No, or I’m not sure", weight: 5 },
    ],
  },
  {
    question: "Do you sell products or services through your site?",
    blurb:
      "If your site is meant to generate sales but isn’t performing well, you might need better design or checkout flow.",
    answers: [
      { text: "Yes, and sales are great", weight: 1 },
      { text: "Yes, but sales are low", weight: 3 },
      { text: "No, but I’d like to", weight: 4 },
      { text: "No, and I don’t need to", weight: 5 },
    ],
  },
  {
    question: "How often do you get leads or customers from your website?",
    blurb: "Your website should actively help your business grow.",
    answers: [
      { text: "Regularly—it’s a big part of my business", weight: 1 },
      { text: "Occasionally, but not as much as I’d like", weight: 3 },
      { text: "Rarely or never", weight: 4 },
      { text: "No idea", weight: 5 },
    ],
  },
  {
    question: "Do you track website traffic or performance?",
    blurb:
      "Tracking metrics helps you understand what’s working and what needs improvement.",
    answers: [
      { text: "Yes, I check regularly", weight: 1 },
      { text: "I check once in a while", weight: 3 },
      { text: "I don’t track anything", weight: 5 },
    ],
  },
];
