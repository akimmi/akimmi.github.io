import "./componentStyle.css";

export const Icon = ({ img, alt, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <img src={img} alt={alt} />
    </a>
  );
};
