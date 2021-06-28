import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Item, Image } from "semantic-ui-react";

export default function JobAdvertisements() {
  const [advertisements, setAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />

          <Item.Content>
            <Item.Header as="a">
              {advertisements.map((advertisement) => (
                <option key={advertisement.id}>
                  {advertisement.jobPosition.position}
                </option>
              ))}
            </Item.Header>
            <Item.Meta>
              {advertisements.map((advertisement) => (
                <option key={advertisement.id}>
                  {advertisement.city.cityName}
                </option>
              ))}
            </Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}
