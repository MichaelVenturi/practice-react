import React from "react";

import Card from "../components/Card/Card";
import Container from "../components/Container/Container";

const PageOne = () => {
  return (
    <>
      <Container colSize={3}>
        <Card>
          <div>yadada</div>
          <div>thanks</div>
        </Card>
        <Card>box two</Card>
        <Card>box three</Card>
        <Card>box three</Card>
        <Card>box three</Card>
        <Card>box three</Card>
      </Container>
    </>
  );
};

export default PageOne;
