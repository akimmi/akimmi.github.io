import PortraitPic from "../images/PortraitPic.jpg";
import { EducationSection } from "./EducationSection";
import { SocialMediaBar } from "./SocialMediaBar";
import { SpaceBetween } from "./Util/SpaceBetween";
import { Text } from "./Util/Text";
import "./style.css";

export const PersonalInfo = () => {
  return (
    <div className="left-side">
      <SpaceBetween>
        <div>
          <Text level={4}>Akimmi Navarro</Text>
          <Text level={2} bold>
            Data Scientist
          </Text>
        </div>

        <img className="portrait" src={PortraitPic} alt="Portrait"></img>

        <EducationSection />

        <div className="skills-section">
          <Text italic level={1}>
            Skills
          </Text>
          <Text>hello</Text>
        </div>
        <Text level={1}>Connect with me</Text>
        <SocialMediaBar />
      </SpaceBetween>
    </div>
  );
};
