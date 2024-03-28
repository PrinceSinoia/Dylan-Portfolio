
import React from 'react';
import styled from 'styled-components'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Wrapper= styled.section`

img#1 {
    width: 100%;
  }
  img#2 {
    width: 90%;
    border: 5px solid green;
  }
  img#3 {
    width: 50%;
    border: 5px solid green;
  }



/* styles.css */

/* .project {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.project-title {
  font-size: 24px;
  color: #333;
}

.project-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 8px;
}

.project-description {
  font-size: 16px;
  color: #666;
} */


`

const Project = ({ project }) => {
  const { title, description, imageUrl , icon} = project;

  return (
    <Wrapper>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <div>{icon}</div>
    </Wrapper>
  );
};

export default Project;