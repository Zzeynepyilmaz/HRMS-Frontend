import React from "react";
import { Route } from "react-router";
import { Container, Grid } from "semantic-ui-react";
import Filter from "../layouts/Filter";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
import JobAdvertisementDetails from "../pages/JobAdvertisementDetails";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import Footer from "./Footer";
import CandidateSignUp from "./SignUp/CandidateSignUp";
import EmployerSignUp from "./SignUp/EmployerSignUp";

export default function Dashboard() {
  return (
    <div>
      <Filter />
      <Container className="main">
        <Grid stackable>
          <Grid.Column width={10}>
            <Route exact path="/" component={JobAdvertisementList} />
            <Route exact path="/jobAdvertisementAdd" component={JobAdvertisementAdd}/>
            <Route exact path="/jobAdvertisementDetails/:jobAdvertisementId" component={JobAdvertisementDetails}/>
            <Route exact path="/employerSignUp" component={EmployerSignUp} />
            <Route exact path="/candidateSignUp" component={CandidateSignUp} />
          </Grid.Column>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
