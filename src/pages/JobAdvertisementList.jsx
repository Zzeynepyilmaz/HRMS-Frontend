import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Image, Button, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Segment.Group piled>
            <Segment style={{ backgroundColor: "black" }}>
              <h3
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "left",
                  marginLeft: "1em",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                İş İlanı - {jobAdvertisement.jobPosition.position}
              </h3>
            </Segment>
            <Segment>
              <Segment.Group horizontal>
                <div
                  style={{ margin: "1em", marginLeft: "1em", marginTop: "3em" }}
                >
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    size="mini"
                  />
                </div>
                <Segment>
                  <div
                    style={{
                      textAlign: "left",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                    key={jobAdvertisement.jobAdvertisementId}
                  >
                    <h2 style={{ marginLeft: "0.5em" }}>
                      {jobAdvertisement.jobPosition.position}
                    </h2>
                    <p style={{ marginLeft: "1em", marginTop: "1em" }}>
                      {" "}
                      {jobAdvertisement.city.cityName}
                    </p>
                    <p
                      style={{
                        marginLeft: "1em",
                        marginTop: "1em",
                        marginBottom: "1em",
                      }}
                    >
                      {jobAdvertisement.employer.companyName}
                    </p>
                    <Button
                    
                      as={NavLink}
                      to={`/jobAdvertisement/${jobAdvertisement.jobAdvertisementId}`}
                      style={{
                        backgroundColor: "purple",
                        color: "white",
                        marginLeft: "1em",
                      }}
                    >
                      İncele{" "}
                    </Button>
                  </div>
                </Segment>
              </Segment.Group>{" "}
            </Segment>
          </Segment.Group>
        ))}
      </div>
    </div>
  );
}
