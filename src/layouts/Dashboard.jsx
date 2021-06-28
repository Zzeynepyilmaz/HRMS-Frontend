import React from "react";
import { Grid } from "semantic-ui-react";
import Filter from "../layouts/Filter";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import Footer from "./Footer";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Filter />
            <JobAdvertisementList/>
            <Footer/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
