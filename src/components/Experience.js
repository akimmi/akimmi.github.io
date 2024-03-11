import ScrollableList from "./ScrollableList";
import { Text } from "./Util/Text";

export const Experience = () => {
  return (
    <div className="right-side">
      <div className="header">
        <div style={{ paddingTop: "30px" }}></div>
        <Text level={3}>Experience</Text>
        <div
          style={{ borderTop: "3px solid #544052", paddingBottom: "30px" }}
        ></div>
      </div>
      <div className="content">
        {/* <Text level={1}>
          {"Network R&D Hardware Design Engineering Intern June 2021-Sept 2021"}
        </Text> */}
        <ScrollableList />
      </div>
      <div className="header2">
        <div style={{ paddingTop: "30px" }}></div>
        <Text level={3}>Projects</Text>
        <div
          style={{ borderTop: "3px solid #544052", paddingBottom: "30px" }}
        ></div>
      </div>
      <div className="content">
        {/* <Text level={1}>
          {"Network R&D Hardware Design Engineering Intern June 2021-Sept 2021"}
        </Text> */}
        <ScrollableList />
      </div>
    </div>
  );
};
