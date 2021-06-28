import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import CityService from "../services/cityService";

export default function CityList(){
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);
  return (
    <div>
      <Segment.Group >
        <Segment inverted color='black' as="h3">Şehir</Segment>
        <Segment > 
          <select style={{ width: "200px", height: "30px" }}>
            {cities.map((city) => (
              <option key={city.id}>{city.cityName}</option>
            ))}
          </select>
        </Segment>
      </Segment.Group>
    </div>
  );
}
