import React from "react";
import { Grid, Segment, Checkbox } from "semantic-ui-react";
import JobPositionList from "../pages/JobPositionList";
import CityList from "../pages/CityList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CityList/>
            <br></br>
            <div class="myBox">
              <Segment inverted color="black" as="h3">
                Çalışma Şekli
              </Segment>
              <Segment.Group as="h3" attached="top">
                <Segment textAlign="left">
                  <Checkbox label="Sürekli/Tam Zamanlı" />
                </Segment>
                <Segment textAlign="left">
                  <Checkbox label="Yarı Zamanlı/Part Time" />
                </Segment>
                <Segment textAlign="left">
                  <Checkbox label="Stajyer" />
                </Segment>
                <Segment textAlign="left">
                  <Checkbox label="Proje Bazlı" />
                </Segment>
              </Segment.Group>
            </div>
            <br></br>
            <JobPositionList />
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}