import {Text} from "./Text"
import "./componentStyle.css";

export const TextBolb = ({ children, ...props }) => {
  return (
    <div className="text-blob">
      <Text props>{children}</Text>
    </div>
  );
};
