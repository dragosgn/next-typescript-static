import React from "react";

interface Props {
  name: string;
}

const About: React.FC<Props> = ({ name }) => (
  <p>This is my about page {name}</p>
);
