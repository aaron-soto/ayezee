export interface Work {
  idx: number;
  slug: string;
  title: string;
  website: string;
  image: string;
  shortDesc: string;
  featured?: boolean;
  date: string;
  description: string;
  tags?: string[];
  intro?: string[];
  challenge?: string[];
  features?: string[];
  results?: string[];
}

export const WORKS: Work[] = [
  {
    idx: 0,
    slug: "case-study-coffee-lounge",
    title: "Case Study Coffee Lounge",
    website: "https://casestudycoffeelounge.com",
    image: "/images/works/cover-images/case-study-coffee-lounge.jpg",
    shortDesc: "Coffee Shop Website",
    featured: true,
    date: "Aug '23",
    description:
      "A sleek, responsive website for a high end coffee shop that embodies the aesthetic of the shop. Built with Next.js and Tailwind CSS featuring a payloadCMS dashboard for easy content management.",
    tags: ["Web Development", "Logo & Branding"],
    intro: [
      "I had the honor of working with William Douglas who opened a new coffee shop in Phoenix, Arizona. He wanted a website that would showcase his coffee shop and the unique experience that it offers. I designed a website that was modern and easy to navigate. The website was designed to be responsive and mobile-friendly.",
      "We went through a few iterations of feedback on the initial design but worked together and have come up with a design that shows off the shop's warm and inviting atmosphere.",
    ],
    challenge: [
      "Case Study needed a solution to show what events would be happening at the coffee shop and to show off the menu. The main challenge was that the coffee shop constantly changes the events that are happening at the venue. So they needed a solution to be able to edit this data without my help when they needed to.",
      "The solution that I ended up settling on was to build a dashboard into the website using PayloadCMS. This allowed me to choose the users and manage their logins, while also allowing the client to edit the events and menu items on the website.",
    ],
    features: [
      "The websites main feature is the 'Events' section. This sections events can be edited from the dashboard and will show the events that are happening at the coffee shop. We built in a functionility to automatically calculate event dates and times for recurring events. They had a few events that happened every week and we wanted to make sure that the website would show the correct dates at all times. All they have to do is add a single event and mark it as a recurring event and choose a frequency.",
      "The other sections that can be edited from the dashboard are the Testimonials section, the gallery section, and the contact info like the store hours and phone number.",
    ],
    results: [
      "The website has been a huge success for Case Study Coffee Lounge. They have been able to easily update the events and menu items on the website without needing my help. The website has been a great way for them to show off the unique experience that they offer at the coffee shop.",
    ],
  },
  {
    idx: 1,
    slug: "purpose-after-sports",
    title: "Purpose After Sports",
    website: "https://purposeaftersports.com",
    image: "/images/works/cover-images/purpose-after-sports.jpg",
    shortDesc: "Fitness Community Website",
    date: "Oct '24",
    description:
      "A community based website that integrated StripeAPI to allow for donations and payments for services. The website also includes community resources where the communtiy can get tips on how to transition from sports to a new career.",
    tags: ["Web Development", "Logo & Branding"],
    intro: [
      "I had the honor of working with Purpose After Sports, an organization that helps athletes transition from sports to the workforce. They needed a website that would showcase their mission and the services that they offer.",
    ],
    challenge: [
      "Purpose After Sports needed a solution to show what services they offer and to allow users to sign up for their services as well as purchase workout and nutrition guides.I integrated Stripe to allow users to purchase the guides and Nodemailer to send the purchased items to the users.",
    ],
    results: [
      "The final website was a beautiful and easy to use interface that has helped to drive traffic to the organization. The exercise library where their clients can view all the workout videos and the free downloads page have been a big hit!",
    ],
  },
  {
    idx: 2,
    slug: "william-douglas-co",
    title: "William Douglas Co.",
    website: "https://williamdouglasco.com",
    image: "/images/works/cover-images/william-douglas-co.jpg",
    shortDesc: "Craftsman Portfolio Website",
    date: "Dec '24",
    description:
      "A modern and unique portfolio website for Content Creator/Craftsman showing his work and services that he offers. The website uses a unique layout that we worked together on to show his content the way he wanted yet keeping a good UI/ UX",
    tags: ["Web Development", "Logo & Branding"],
    intro: [
      "I had the honor of working with William Douglas who opened a new coffee shop in Phoenix, Arizona. He wanted a website that would showcase his coffee shop and the unique experience that it offers. I designed a website that was modern and easy to navigate. The website was designed to be responsive and mobile-friendly.",
    ],
    challenge: [
      "William Douglas Co needed a solution to show off the personal work and services that he offers. He wanted a unique layout that would show off his content the way he wanted yet keeping a good UI/ UX. I worked with him to come up with a design that would show off his work and services in a unique way.",
    ],
    results: [
      "The website was built with Next.js and Tailwind CSS. I worked with William to create a unique layout that would show off his work and services in a unique way. The website is responsive and mobile friendly and has a unique layout that shows off his content the way he wanted.",
    ],
  },
];
