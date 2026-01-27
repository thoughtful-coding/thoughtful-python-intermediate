import type { CourseManifest, CourseId } from "../../src/types/data";

/**
 * "Intermediate Python" course manifest.
 * Contains course metadata and unit ordering.
 */
const courseManifest: CourseManifest = {
  id: "intermediate-python" as CourseId,
  title: "Intermediate Python",
  blurb:
    "Build on the basics of Python to start processing data and computing useful outputs.",
  longDescription: `Take your Python skills to the next level by learning to process collections of data. You'll master lists, the accumulator pattern, and return values—essential tools for writing more powerful programs.

#### By the End of This Course You Will...
- Iterate through strings and lists to process data
- Use the accumulator pattern to build up results
- Create and manipulate Python lists
- Write functions that return values
- Use range loops with loop variables for precise control
- Apply these concepts to solve real-world problems

#### Prerequisites
- Completion of "Introduction to Python" course
- Comfortable with variables, functions, conditionals, and basic loops`,
  image: "images/course_icon_python_intermediate.svg",
  difficulty: "intermediate",
  units: [
    "00_accumulator_pattern",
    "01_lists_intro",
    "02_lists_advanced",
    "03_functions_return",
    "04_range_loops",
  ],
};

export default courseManifest;
