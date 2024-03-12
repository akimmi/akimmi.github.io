import { Text } from "./Util/Text";
import { VerticalSpaceBetween } from "./Util/VerticalSpaceBetween";
import "./style.css";

export const EducationSection = () => {
  return (
    <div className="education-section">
      <Text level={3}>Education</Text>
      <div
        style={{ borderTop: "3px solid #544052", paddingBottom: "10px" }}
      ></div>
      <VerticalSpaceBetween>
        <Text bold level={1}>
          {"‣ University of Southern California"}
        </Text>
        <Text bold level={0.8}>
          Aug 2022 - May 2024
        </Text>
      </VerticalSpaceBetween>
      <Text light >
        Master of Science - MS, Electrical Engineering
      </Text>
      <p style={{ fontSize: "16px", paddingLeft: "50px" }}>
        Data Management for Analytics, Machine Learning: Supervised Learning,
        Advanced Statistical Methods, Optimization for the Information and Data
        Sciences, Machine Learning II: Mathematical Foundations and Method,
        Advanced Biomedical Imaging
      </p>
      <VerticalSpaceBetween>
        <Text bold level={1}>
          {"‣ California Polytechnic State University -- San Luis Obispo"}
        </Text>
        <Text bold level={0.8}>
          Sep 2018 - Jun 2022
        </Text>
      </VerticalSpaceBetween>
      <Text light>
        Bachelor of Science - BS, Elecrtical Engineering
      </Text>
      <p style={{ fontSize: "16px", paddingLeft: "50px" }}>
        Relevant Courses: Data Structures, Object-Oriented Programming,
        Probability and Random Processes, Digital Signal Processing, Computation
        Intelligence, Remote Sensing
      </p>
    </div>
  );
};
