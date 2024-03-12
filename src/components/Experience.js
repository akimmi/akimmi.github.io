import ScrollableList from "./ScrollableList";
import { Text } from "./Util/Text";
import SCELogo from "../images/SCELogo.png";
import CPALogo from "../images/CPALogo.png";
import HPELogo from "../images/HPELogo.png";
import CalPolyLogo from "../images/CalPolyLogo.png";
import TreesLogo from "../images/TreesLogo.png";
import ParableLogo from "../images/ParableLogo.jpg";
import USCLogo from "../images/USCLogo.png";
import { EducationSection } from "./EducationSection";

const experienceList = [
  {
    position: "Machine Learning Engineer and Data Scientist",
    companyName: "Southern California Edison",
    dateRange: "May 2023 - Present",
    logo: SCELogo,
    descriptionList: [
      "Buddy Pole Project:",
      "- Designed a computer vision project focused on pole detection, which successfully moving it to production; The project is anticipated to result in 2 million dollars in cost savings for the company.",
      "- Leveraged Google Cloud Platform’s Vertex AI to architect and deploy advanced machine learning models.",
      "- Created Python scripts to expediently parse and process JSONL files.",
      "- Integrated machine learning models for efficient batch predictions.",
      "- Utilized an API to extract and process geospatial data empowering the creation of a Power BI dashboard projected to optimize decision-making and generate significant value.",
      "NLP Customer Service Project",
      "- Utilized SAP HANA Studio, Snowflake, and SQL to meticulously validate and reconcile data tables between platforms, ensuring data consistency and integrity without manual counting",
      "- Conducted thorough validation of English customer service calls to ensure script accuracy aligns with the ground truth",
      "- Created Python scripts to expediently parse and process JSONL files.",
      "- Researched text mining techniques, including sentiment analysis and text classification, to enhance customer service call analysis",
      "- Writing 50+ effective prompts for large language models like BERT topic model to approach to cluster call center topics",
    ],
  },
  {
    position: "PowerBI Intern",
    companyName: "Capincrouse LLC",
    dateRange: "March 2023 - May 2023",
    logo: CPALogo,
    descriptionList: [
      "Built dashboards for analysis and displaying key metrics.",
      "Developed a tool to monitor metrics and validated data.",
      "Performed analysis on business models.",
    ],
  },
  {
    position: "System Software Engineer Intern",
    companyName: "Hewlett-Packard Enterprise",
    dateRange: "June 2022 - Jan 2023",
    logo: HPELogo,
    descriptionList: [
      "Implemented 10+ automated regression tests for front-end commands to validate that the command line interface output format stays consistent and as expected by using an IDART, a Python package for testing 3PAR storage arrays.",
      "Analyzed 60+ outputs of front-end commands by determining their regular expression patterns.",
    ],
  },
  {
    position: "Undergraduate Researcher",
    companyName: "California Polytechnic University State San Luis Obispo",
    logo: CalPolyLogo,
    dateRange: "Jan 2022 - June 2022",
    descriptionList: [
      "Electricity Price Prediction (Senior Project): Researched different neural network methods, such as time series modelling on how to forecast electricity prices, and used MATLAB neural network libraries and Python technologies such as pandas, sklearn, and matplotlab to implement this project. More details available at https://digitalcommons.calpoly.edu/eesp/565/",
      "DamageMaps: Worked with the Geography and Computer Science department to process geographic information system data of pre- / post- wildfire events from Colorado using Python and ArcGIS. More details available at https://centralcoastdatascience.org/projects/all/2022/damagemap-post-wildfire-damaged-buildings-classifier",
    ],
  },
  {
    position: "Data Management Intern",
    companyName: "The Parable Group",
    dateRange: "Jan 2022 - June 2022",
    logo: ParableLogo,
    descriptionList: [
      "Researching and analyzing data for the Christian bookstore and outdoor retail industry.",
      "Reporting on the Key Performance Indicator (KPI) for the quarter and individual sales.",
      "Matching unknown sales utilizing Power BI, Microsoft Access, and SQL to prioritize data and collect blanks from clients and building data models from the data presented.",
    ],
  },
  {
    position: "Software Developer Intern",
    companyName: "Trees.App",
    dateRange: "Sept 2021 - Nov 2021",
    logo: TreesLogo,
    descriptionList: [
      "Conducting research of competitor websites in the planning stage of the new website.",
      "Designing new pages and features for the site.",
      "Working in webflow to implement new designs and write custom code.",
    ],
  },
  {
    position: "Network R&D Hardware Design Engineering Intern",
    companyName: "HPE Aruba Networking",
    dateRange: "June 2021 - Sept 2021",
    logo: HPELogo,
    descriptionList: [
      "Developed a Python program that will reduce configuration time by 20 minutes. This program will make unit testing faster since it removes other processes.",
      "Worked with object-oriented programming, parsing, I2C, and PMBus interface to implement the program.",
      "Wrote unit tests so the program can be compatible with any file and fixed bugs when necessary.",
      "Analyzed datasheets and documents to perform schematic captures.",
      "Worked collaboratively with other engineers to ensure projects are submitted on time.",
    ],
  },
];

const projectsList = [
  {
    companyName: "Are mushrooms poisonous or edible?",
    position: "EE 559 (Machine Learning I: Supervised methods)",
    dateRange: "Spring 2023",
    logo: USCLogo,
    descriptionList: [
      "Implemented K-Nearest Neighbors (KNN), Support Vector Machine (SVM), and Multi-Layer Perceptron (MLP) models in Python to classify edible and poisonous mushrooms, leveraging machine learning principles and exploring diverse approaches.",
      "Conducted hyperparameter tuning, feature selection, and preprocessing techniques like label encoding and scaling to optimize model accuracy and interpretability.",
      "Explored different kernel functions, distance metrics, and visualization methods, gaining insights into the effectiveness of machine learning models for categorical data classification.",
    ],
  },
  {
    companyName: "Multispectral Projects",
    position: "EE 424 (Remote Sensing)",
    dateRange: "Winter 2022",
    logo: CalPolyLogo,
    descriptionList: [
      "Utilized MultiSpec to perform different experiments for EE 424: Remote Sensing.",
      "Developed code to perform an iterative ISODATA classification procedure using MATLAB and Python.",
      "Performed classification error analysis.",
    ],
  },
  {
    companyName: "Virtual World",
    position: "CPE 203 (Object Oriented Programming)",
    dateRange: "Spring 2022",
    logo: CalPolyLogo,
    descriptionList: [
      "Created a game using Java that randomly spawns different entities that behave and interact with each other.",
      "Implemented a variety of different pathfinding algorithms such as A* and Depth First Search for the entities’ movements.",
      "Developed object-oriented programming designs by creating UML diagrams to visualize the system.",
    ],
  },
  {
    companyName: "Music Generator",
    position: "EE 328 (Discrete Time Signals & Systems)",
    dateRange: "Winter 2021",
    logo: CalPolyLogo,
    descriptionList: [
      "Reconstructed a Joy Harp song using time-varying frequency content by calculating discrete-time signal frequencies and Fourier components.",
      "Used MATLAB and Python to test and implement it.",
    ],
  },
  {
    companyName: "Pixel Magic",
    position: "CPE 101 (Intro to Programming)",
    dateRange: "Spring 2020",
    logo: CalPolyLogo,
    descriptionList: [
      "Worked on Python to implement 3 functions (hidden image, blur and fade) by using string operations, command line arguments and error handling.",
      "This program takes a P3 pixels per meter (ppm) file that reveals, fades and blurs the image file.",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="right-side">
      <EducationSection />
      <div className="header">
        <div style={{ paddingTop: "10px" }}></div>
        <Text level={3}>Experience</Text>
        <div
          style={{ borderTop: "3px solid #544052", paddingBottom: "10px" }}
        ></div>
      </div>
      <div className="content" style={{ borderBottom: "1px solid #54405250" }}>
        <ScrollableList data={experienceList} />
      </div>
      <div className="header2">
        <div style={{ paddingTop: "10px" }}></div>
        <Text level={3}>Projects</Text>
        <div
          style={{ borderTop: "3px solid #544052", paddingBottom: "10px" }}
        ></div>
      </div>
      <div className="content" style={{ borderBottom: "1px solid #54405250"}}>
        <ScrollableList data={projectsList} />
      </div>
    </div>
  );
};
