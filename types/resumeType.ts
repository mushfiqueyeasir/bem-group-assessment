export interface Contact {
    email: string;
    phone: string;
    socials: Socials;
}

export interface Socials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    youtube?: string;
}

export interface Location {
    city?: string;
    code?: string;
    country?: string;
    state?: string;
    street_address?: string;
}

export interface ResumeData {
    candidate_questions: string[];
    contact: Contact;
    date_of_birth: string;
    first_name?: string;
    last_name?: string;
    location: Location;
    skills: string[];
    summary?: string;
}
