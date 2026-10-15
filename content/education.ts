/** Education, most recent first. */

export type EducationEntry = {
  qualification: string;
  field?: string;
  institution: string;
  location: string;
  start: number;
  end: number;
  /** Marks obtained out of the total, e.g. "2,865 / 3,200". */
  marks: string;
  /** Shown beside the marks, e.g. { label: "Grade", value: "A+" }. */
  result: { label: string; value: string };
};

export const education: EducationEntry[] = [
  {
    qualification: "DAE",
    field: "Computer Information Technology",
    institution: "Malaysian Institute of Technology",
    location: "Lahore",
    start: 2022,
    end: 2025,
    marks: "2,865 / 3,200",
    result: { label: "Percentage", value: "89.53%" },
  },
  {
    qualification: "Matriculation",
    institution: "The Spirit School",
    location: "More Khunda",
    start: 2020,
    end: 2022,
    marks: "941 / 1,100",
    result: { label: "Grade", value: "A+" },
  },
];
