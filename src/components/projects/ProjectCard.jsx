import { Col } from "react-bootstrap";
import "./Project.scss";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          style={{
            height: "380px",
            width: "100%",
            objectFit: "cover",
          }}
          alt={title}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
