interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  heroImage: Image;
  role: string;
  profilePic: Image;
  backgroundInformation: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  summary: string;
  image: Image;
  buildLink?: string;
  title: string;
  technologies: Skill[];
  codeLink?: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  jobTitle: string;
  isPresentCompany: boolean;
  dateStarted: date;
  dateEnded?: date;
  points: string[];
}
