import { Text } from "./Util/Text";
import "./style.css";

export const EducationSection = () => {
  return (
    <div className="education-section">
      <Text italic level={1}>
        Education
      </Text>
      <Text bold light>{"‣ University of Southern California"}</Text>
      <Text light xs>
        Master of Science - MS, Electrical Engineering
      </Text>
      <Text light xs>
        Aug 2022 - May 2024
      </Text>
      <Text bold light>{"‣ California Polytechnic State University"}</Text>
      <Text bold light xs>
        Bachelor of Science - BS, Elecrtical Engineering
      </Text>
      <Text light xs>
        Sep 2018 - Jun 2022
      </Text>
    </div>
  );
};
