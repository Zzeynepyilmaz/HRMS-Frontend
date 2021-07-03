import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Segment, Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetails() {
  let { jobAdvertisementId } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementByJobAdvertisementId(jobAdvertisementId)
      .then((result) => setJobAdvertisement(result.data.data));
  }, []);

  return (
    <div>
      <Segment.Group>
        <Segment style={{ backgroundColor: "black" }}>
          <h3
            style={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "1em",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            İş İlanı - {jobAdvertisement.jobPosition?.position}
          </h3>
        </Segment>
        <Table className="jobAdvertisementTable">
          <tr>
            <td className="leftTd">
              <p>İş Tanımı:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.jobDetails}</p>
            </td>
          </tr>
          <tr>
            <td className="leftTd">
              <p>Pozisyon Adı:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.jobPosition?.position}</p>
            </td>
          </tr>
          <tr>
            <td className="leftTd">
              <p>Şehir:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.city?.cityName}</p>
            </td>
          </tr>
          <tr>
            <td className="leftTd">
              <p>Maksimum Maaş:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.maxSalary}</p>
            </td>
          </tr>
          <tr>
            <td className="leftTd">
              <p>Minimum Maaş:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.minSalary}</p>
            </td>
          </tr>
          <tr>
            <td className="leftTd">
              <p>Son Başvuru Tarihi:</p>
            </td>
            <td className="rightTd">
              <p>
                {moment(jobAdvertisement.lastApplyDate).format(
                  "DD.MM.yyyy"
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td className="leftTd">
              <p>Alınacak Kişi Sayısı:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.numberOfOpenPositions}</p>
            </td>
          </tr>
          
          <tr>
            <td className="leftTd">
              <p>Firma Adı:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.employer?.companyName}</p>
            </td>
          </tr>
          <tr>
            <td className="leftTd">
              <p>Web Sitesi:</p>
            </td>
            <td className="rightTd">
              <p>{jobAdvertisement.employer?.webAdress}</p>
            </td>
          </tr>
        </Table>
      </Segment.Group>
    </div>
  );
}
