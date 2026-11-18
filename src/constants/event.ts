// Everything specific to the upcoming hackathon lives here.
// When 2027 details are confirmed, fill them in below and turn the matching
// section on in SECTIONS. Leave a value as null until it is real.

export interface ScheduleItem {
  /** Short date shown on the timeline, e.g. "3/13" */
  date: string;
  description: string;
  /** Room and time, e.g. "EV024, 6-7PM" (can be empty) */
  location: string;
}

export interface EventDetails {
  year: number;
  /** Shown on the coming-soon note, e.g. "Spring 2027" */
  seasonLabel: string;
  /**
   * When hacking ends, as an ISO date-time with the Boston UTC offset,
   * e.g. "2027-03-20T17:30:00-04:00". The countdown counts down to this.
   */
  hackingEndsAt: string | null;
  location: string | null;
  registrationFormUrl: string | null;
  mentorFormUrl: string | null;
  devpostUrl: string | null;
  /** Workshops, registration deadline, ideation day and hackathon day */
  schedule: ScheduleItem[];
}

export const CURRENT_EVENT: EventDetails = {
  year: 2027,
  seasonLabel: "Spring 2027",
  hackingEndsAt: null,
  location: null,
  registrationFormUrl: null,
  mentorFormUrl: null,
  devpostUrl: null,
  schedule: [],
};

// Which sections appear on the page. Turn one on once its content is ready
// for the current year.
export const SECTIONS = {
  comingSoon: true,
  keynote: false,
  schedule: false,
  prompt: false,
  register: false,
  submit: false,
  countdown: false,
  team: true,
};
