import PortraitPic from "../images/PortraitPic.jpg";
import { SkillsSection } from "./SkillsSection";
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
            ML Engineer & Data Scientist
          </Text>
        </div>
        <img className="portrait" src={PortraitPic} alt="Portrait"></img>

        <div>
          <Text italic level={1} style={{}}>
            About Me
          </Text>
          <p style={{ fontSize: "18px" }}>
            I am originally from the Philippines and now reside in the United
            States. Beyond academics, I am deeply passionate about giving back
            and engaging in meaningful projects. I aspire to leverage the
            expertise and resources I gained from school, and continue my work
            as an ethically empathetic electrical engineer in the real world 🙂
          </p>
        </ div>

        <div className="skills-section">
          <Text italic level={1}>
            Skills
          </Text>
          <SkillsSection />
        </div>
        <Text level={1}>Connect with me</Text>
        <SocialMediaBar />
      </SpaceBetween>
    </div>
  );
};
