export interface Nurse {
  id: number;
  name: string;
  photo: string;
  credentials: string;
  specialty: string;
  experience_years: number;
  location: string;
  distance_miles: number;
  match_score: number;
  availability_status: "Available" | "Busy";
  rate_per_hour: number;
  certifications: string[];
  previous_rating: number;
  work_history: string;
  deployed?: boolean;
}

export interface CheckedNurse extends Nurse {
  isChecked: boolean;
}
