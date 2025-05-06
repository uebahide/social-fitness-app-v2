export type Exercise = {
  id: number;
  user_id: number;
  category: string;
  duration: number;
  distance?: number | null; // optional, not all exercises have distance
  reps?: number | null;
  sets?: number | null;
  weight?: number | null | null;
  calories_burned?: number;
  notes?: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
};
