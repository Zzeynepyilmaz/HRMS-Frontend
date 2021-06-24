import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Icon, Menu, Table } from "semantic-ui-react";

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
      <Table  celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {advertisements.map((advertisement) => (
            <Table.Row key={advertisement.id}>
              <Table.Cell>{advertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{advertisement.city.cityName}</Table.Cell>
              <Table.Cell>{advertisement.jobPosition.position}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="20">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
