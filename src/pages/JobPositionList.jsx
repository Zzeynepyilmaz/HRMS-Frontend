import React from "react";
import { useState, useEffect } from "react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionList() {
  const [jobPosition, setJobPosition] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPosition(result.data.data));
  }, []);

  return (
    <div>
      
    </div>
  );
}
