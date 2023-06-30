export interface DataProps {
  data: Data;
}

export interface DataInstance {
  data: Data;
}

export interface Data {
  personal: Personal;
  experience: Experience[];
  education: Education[];
  contact: Contact;
  skills: Skill[];
}

export interface Personal {
  picture: string;
  fullName: string;
  jobTitle: string;
  about: string;
}

export interface Experience {
  title: string;
  date: string;
  tasks: string[];
}

export interface Education {
  title: string;
  date: string;
  text: string;
}

export interface Contact {
  phone: string;
  email: string;
  linkedIn: string;
  github: string;
}

export interface Skill {
  name: string;
  strong: boolean;
}
