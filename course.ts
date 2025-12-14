import type { CourseManifest, CourseId } from "../../src/types/data";

/**
 * "Intermediate Python" course manifest.
 * Contains course metadata and unit ordering.
 */
const courseManifest: CourseManifest = {
  id: "intermediate-python" as CourseId,
  title: "Intermediate Python",
  description:
    "Build on the basics of Python to start processing data and computing useful outputs.",
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
