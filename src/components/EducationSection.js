import { Text } from "./Util/Text";
import "./style.css";

export const EducationSection = () => {
  return (
    <div className="education-section">
      <Text italic level={1}>
        Education
      </Text>
      <Text bold light>
        {"‣ University of Southern California | Aug 2022 - May 2024"}
      </Text>
      <Text light xs>
        Master of Science - MS, Electrical Engineering
      </Text>
      <Text bold light>
        {"‣ California Polytechnic State University | Sep 2018 - Jun 2022"}
      </Text>
      <Text light xs>
        Bachelor of Science - BS, Elecrtical Engineering
      </Text>
    </div>
  );
};
