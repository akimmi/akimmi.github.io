import React from "react";
import { Text } from "./Util/Text";
import { VerticalSpaceBetween } from "./Util/VerticalSpaceBetween";

const ListItem = ({ item }) => {
  return (
    <div
      style={{ padding: "10px", marginBottom: "5px" }}
    >
      <VerticalSpaceBetween>
        <Text>{item.position}</Text>
        <Text light xs>
          {item.dateRange}
        </Text>
      </VerticalSpaceBetween>
      <div className="company-logo-name">
        <img className="experience-company-logo" src={item.logo} alt="Hello" />
        <Text level={1}>{item.companyName}</Text>
      </div>
      <ul className="description-list">
        {item.descriptionList.map((description) => {
          if (description[0] === "-") {
            return (
              <ul>
                <li>
                  <Text light>{description.substring(1)}</Text>
                </li>
              </ul>
            );
          } else {
            return (
              <li>
                <Text light>{description}</Text>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const ScrollableList = ({ data }) => {
  // Dummy data for the list

  return (
    <div style={{ height: "300px", overflow: "auto" }}>
      {data.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
};

export default ScrollableList;
