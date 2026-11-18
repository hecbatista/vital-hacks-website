import { SECTIONS } from "./event";

export interface NavLink {
  id: string;
  label: string;
}

// In page order. A link only shows when its section is on the page.
const ALL_NAV_LINKS: (NavLink & { visible: boolean })[] = [
  { id: "about", label: "About", visible: true },
  { id: "speaker", label: "Keynote Speaker", visible: SECTIONS.keynote },
  { id: "timeline", label: "Schedule", visible: SECTIONS.schedule },
  { id: "prompt", label: "Prompt", visible: SECTIONS.prompt },
  { id: "register", label: "Register", visible: SECTIONS.register },
  { id: "submit", label: "Submit", visible: SECTIONS.submit },
  { id: "faq", label: "FAQ", visible: true },
  { id: "team", label: "Team", visible: SECTIONS.team },
  { id: "past-years", label: "Past Years", visible: true },
];

export const NAV_LINKS: NavLink[] = ALL_NAV_LINKS.filter((l) => l.visible).map(
  ({ id, label }) => ({ id, label })
);
