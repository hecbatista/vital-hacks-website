// The current organizing team (from the "Intro to ViTAL Hacks" slides).
// Photos live in public/members/2027/. linkedin: null hides the LinkedIn icon.

export interface TeamMember {
  name: string;
  /** Path under public/, e.g. "/members/2027/oscar.jpg"; null shows a placeholder */
  photo: string | null;
  linkedin: string | null;
}

export interface TeamGroup {
  role: string;
  members: TeamMember[];
}

export const TEAM: TeamGroup[] = [
  {
    role: "Director of Hacks",
    members: [
      {
        name: "Oscar Ji",
        photo: "/members/2027/oscar.jpg",
        linkedin: "https://www.linkedin.com/in/oscar-ji/",
      },
    ],
  },
  {
    role: "Event & Relations Lead",
    members: [
      {
        name: "Jakob Clark",
        photo: "/members/2027/jakob.jpg",
        linkedin: "https://www.linkedin.com/in/jakob-clark-/",
      },
    ],
  },
  {
    role: "Project Organizer Co-Leads",
    members: [
      {
        name: "Jaena Wray",
        photo: "/members/2027/jaena.jpg",
        linkedin: "https://www.linkedin.com/in/jaenawray/",
      },
      {
        name: "Rohita Nookala",
        photo: "/members/2027/rohita.jpg",
        linkedin: "https://www.linkedin.com/in/rohita-nookala-1b61b9327/",
      },
    ],
  },
  {
    role: "Software Expert Co-Leads",
    members: [
      {
        name: "Vaishnavi Chebrolu",
        photo: "/members/2027/vaishnavi.jpg",
        linkedin: "https://www.linkedin.com/in/vaishnavi-chebrolu-79b8321b6/",
      },
      {
        name: "Hector Batista",
        photo: "/members/2027/hector.jpg",
        linkedin: "https://www.linkedin.com/in/hectorbatistajr",
      },
    ],
  },
];
