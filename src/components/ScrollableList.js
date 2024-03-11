import React from "react";
import { Text } from "./Util/Text";
import { VerticalSpaceBetween } from "./Util/VerticalSpaceBetween";
import LinkedIn from "../images/LinkedInLogo.png";

const ListItem = ({ item }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "5px" }}
    >
      <VerticalSpaceBetween>
        <Text>Intern Position Name</Text>
        <Text light xs>
          Date 2023 - Date 2024
        </Text>
      </VerticalSpaceBetween>
      <div className="company-logo-name">
        <img className="experience-company-logo" src={LinkedIn} alt="Hello" />
        <Text level={1}>Company</Text>
      </div>
      <ul className="description-list">
        {item.descriptionList.map((description) => (
          <li>
            <Text light>{description}</Text>  
          </li>
        ))}
      </ul>
    </div>
  );
};

const ScrollableList = () => {
  // Dummy data for the list
  const items = [
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    {
      id: 1,
      text: "Item 1",
      descriptionList: [
        "hello something very very very long that's gonna take a lot of space because of how long the line is. I am trying to see if this line will overflow, and how it will look when it is.",
        "hello",
      ],
    },
    // Add more items as needed
  ];

  return (
    <div style={{ height: "300px", overflow: "auto" }}>
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
};

export default ScrollableList;
