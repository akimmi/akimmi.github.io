import { TextBolb } from "./Util/TextBlob";
import "./style.css";

const skillsList = [
  "Python",
  "SQL",
  "MATLAB",
  "R",
  "Java",
  "C",
  "Pandas",
  "Cvxpy",
  "Seaborn",
  "Scikit-Learn",
  "Numpy",
  "Matplotlib",
  "Gensim",
  "Spacy",
  "NLTK",
  "Jupyter Notebook",
  "Git",
  "Snowflake",
  "Power BI",
  "SAP Hana Studio",
  "Google Cloud Platform",
  "Linux",
  "Jira",
  "Docker",
  "Convolutional Neural Networks (CNN)",
  "Recurrent Neural Networks (RNN)",
  "Long Short-Term Memory (LSTM)",
];

// Use the skillsList array as needed in your code

export const SkillsSection = () => {
  return (
    <div className="skills-container">
      {skillsList.map((skill) => {
        return <TextBolb>{skill}</TextBolb>;
      })}
    </div>
  );
};
