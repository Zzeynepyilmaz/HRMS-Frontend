import React from "react";
import { Grid } from "semantic-ui-react";
import JobPositionList from "../pages/JobPositionList";

export default function Dashboard() {
  return (
    <div>
       <Grid >
        <Grid.Row>
          <Grid.Column width={4}>
            <JobPositionList />
          </Grid.Column>
          
        </Grid.Row>
      </Grid>
    </div>
  );
}
