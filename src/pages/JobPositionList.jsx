import React from "react";
import { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionList() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

  return (
    <div>
      <Segment.Group>
        <Segment inverted color='black' as="h3">
          Pozisyon
        </Segment>
        <Segment >
          <select style={{ width: "200px", height: "30px" }}>
            {positions.map((position) => (
              <option key={position.id}>{position.position} </option>
            ))}
          </select>
        </Segment>
      </Segment.Group>
    </div>
  );
}
