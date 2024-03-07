import { Row } from "./Row";
import "./styles.css";
import PortraitPic from "../images/PortraitPic.jpg";
import { SocialMediaBar } from "../SocialMediaBar";
import { Text } from "./Text";

export const Grid = () => {
  return (
    <div className="grid-container">
      <Row>
        <>
          <Text bold>Akimmi Navarro</Text>
          <h3>Data Scientist</h3>
          <img className="portrait" src={PortraitPic} alt="Portrait"></img>
          <h3>Connect with me</h3>
          <SocialMediaBar />
        </>
      </Row>
      <Row>Hello</Row>
    </div>
  );
};
