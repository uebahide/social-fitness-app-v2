type unit = {
  name: "distance" | "reps" | "sets" | "weight";
  unit: "km" | "reps" | "sets" | "kg";
};

type category = {
  name: "running" | "cycling" | "push up" | "bench press";
  units: unit[];
};

export const categories: category[] = [
  { name: "running", units: [{ name: "distance", unit: "km" }] },
  { name: "cycling", units: [{ name: "distance", unit: "km" }] },
  {
    name: "push up",
    units: [
      { name: "reps", unit: "reps" },
      { name: "sets", unit: "sets" },
    ],
  },
  {
    name: "bench press",
    units: [
      { name: "reps", unit: "reps" },
      { name: "sets", unit: "sets" },
      { name: "weight", unit: "kg" },
    ],
  },
];
