import { Icon } from "./Util/Icon";
import LinkedIn from "../images/LinkedInLogo.png";
import Gmail from "../images/GmailLogo.png";
import Github from "../images/GithubLogo.png";
import "./style.css";

export const SocialMediaBar = () => {
  return (
    <div className="button-group">
      <Icon img={Gmail} alt="Gmail" link="mailto:akimminavarro@gmail.com" />
      <Icon
        img={LinkedIn}
        alt="LinkedIn"
        link="https://www.linkedin.com/in/akimminavarro/"
      />
      <Icon img={Github} alt="Github" link="https://github.com/akimmi" />
    </div>
  );
};
