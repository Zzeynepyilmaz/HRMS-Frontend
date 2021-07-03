import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Segment,
  Input,
  Dropdown,
  Form,
  TextArea,
} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobPositionService from "../services/jobPositionService";
import * as Yup from "yup";
import * as moment from "moment";
import { toast } from "react-toastify";

export default function JobAdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    cityService.getCities().then((result) => setCities(result.data.data));
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.cityId,
  }));
  const getJobPositions = jobPositions.map((position, index) => ({
    key: index,
    text: position.positionName,
    value: position.positionId,
  }));

  const formik = useFormik({
    initialValues: {
      positionId: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      numberOfOpenPositions: "",
      jobDetails: "",
      lastApplyDate: "",
      userId: 2,
      releaseDate: moment().format("YYYY-MM-DD"), //veritabanında default değer-> CURRENT_TIMESTAMP
    },

    validationSchema: Yup.object({
      positionId: Yup.number().required("İş pozisyonu bilgisi seçiniz!"),
      cityId: Yup.string().required("Şehir bilgisi seçiniz!"),
      numberOfOpenPositions: Yup.number().required(
        "Alınacak eleman sayısı boş bırakılamaz!"
      ),
      jobDetails: Yup.string().required("Açıklama boş bırakılamaz!"),
      lastApplyDate: Yup.string().required(
        "Son başvuru tarihi boş bırakılamaz!"
      ),
    }),

    onSubmit: (values) => {
      console.log(values);
      let jobAdvertisement = {
        //sol taraftakiler swagger'da jobAdvertisement eklerken gelen değişkenler, sağ taraftakiler ise initialValues kısmında belirlediklerimiz
        lastApplyDate: values.lastApplyDate,
        city: { cityId: values.cityId },
        employer: { userId: values.userId },
        position: { positionId: values.positionId },
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        numberOfOpenPositions: values.positionAmount,
        jobDetails: values.jobDescription,
        releaseDate: values.releaseDate,
      };
      console.log(jobAdvertisement);
      jobAdvertisementService
        .addJobAdvertisement(jobAdvertisement)
        .then((result) => console.log(result.data.message));
      toast.success(`İş İlanı Eklendi.`);
    },
  });

  <Segment.Group>
    <Segment inverted>
      <h3 className="headerStyle">İş İlanı Ekle</h3>
    </Segment>
    <Segment>
      <Form onSubmit={formik.handleSubmit}>
        <div
          style={{
            textAlign: "left",
            fontFamily: "Arial",
            fontWeight: "bold",
            padding: "3px",
          }}
        >
          <div className="divStyle">
            <label>Şehir:</label>
            <Dropdown
              style={{
                marginRight: "1em",
                marginTop: "1em",
                fontWeight: "lighter",
              }}
              button
              placeholder="Şehir Seçiniz..."
              fluid
              search
              selection
              id="cityId"
              options={getCities}
              onChange={(event, data) =>
                formik.setFieldValue("cityId", data.value)
              }
              value={formik.values.cityId}
            />
            {formik.errors.cityId && formik.touched.cityId && (
              <p style={{ color: "red" }}>{formik.errors.cityId}</p>
            )}
          </div>
          <div className="divStyle">
            <label>İş Pozisyonu:</label>
            <Dropdown
              style={{
                marginRight: "1em",
                marginTop: "1em",
                fontWeight: "lighter",
              }}
              button
              placeholder="İş Pozisyonu Seçiniz..."
              fluid
              search
              selection
              id="positionId"
              options={getJobPositions}
              onChange={(event, data) =>
                formik.setFieldValue("positionId", data.value)
              }
              value={formik.values.positionId}
            />
            {formik.errors.positionId && formik.touched.positionId && (
              <p style={{ color: "red" }}>{formik.errors.positionId}</p>
            )}
          </div>

          <div className="divStyle">
            <label>Minimum Maaş:</label>
            <Input
              id="minSalary"
              placeholder="Minimum Maaş..."
              fluid
              style={{ marginRight: "1em", marginTop: "1em" }}
              onChange={formik.handleChange}
              value={formik.values.minSalary}
            ></Input>
            {formik.errors.minSalary && formik.touched.minSalary && (
              <p style={{ color: "red" }}>{formik.errors.minSalary}</p>
            )}
          </div>
          <div className="divStyle">
            <label>Maksimum Maaş:</label>
            <Input
              id="maxSalary"
              placeholder="Maksimum Maaş..."
              fluid
              style={{ marginRight: "1em", marginTop: "1em" }}
              onChange={formik.handleChange}
              value={formik.values.maxSalary}
            ></Input>
            {formik.errors.maxSalary && formik.touched.maxSalary && (
              <p style={{ color: "red" }}>{formik.errors.maxSalary}</p>
            )}
          </div>
          <div className="divStyle">
            <label>Alınacak Personel Sayısı:</label>
            <Input
              id="positionAmount"
              placeholder="Alınacak Personel Sayısı..."
              fluid
              style={{ marginRight: "1em", marginTop: "1em" }}
              onChange={formik.handleChange}
              value={formik.values.positionAmount}
            ></Input>
            {formik.errors.positionAmount && formik.touched.positionAmount && (
              <p style={{ color: "red" }}>{formik.errors.positionAmount}</p>
            )}
          </div>
          <div className="divStyle">
            <label>Son Başvuru Tarihi:</label>
            <Input
              type="date"
              id="applicationDeadline"
              placeholder="Son Başvuru Tarihi..."
              fluid
              style={{ marginRight: "1em", marginTop: "1em" }}
              onChange={formik.handleChange}
              value={formik.values.applicationDeadline}
            ></Input>
            {formik.errors.applicationDeadline &&
              formik.touched.applicationDeadline && (
                <p style={{ color: "red" }}>
                  {formik.errors.applicationDeadline}
                </p>
              )}
          </div>
          <div className="divStyle">
            <label>Açıklama:</label>
            <TextArea
              id="jobDescription"
              placeholder="Açıklama..."
              style={{ marginRight: "1em", marginTop: "1em", minHeight: 100 }}
              onChange={formik.handleChange}
              value={formik.values.jobDescription}
            ></TextArea>
            {formik.errors.jobDescription && formik.touched.jobDescription && (
              <p style={{ color: "red" }}>{formik.errors.jobDescription}</p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          style={{
            backgroundColor: "#780000",
            color: "white",
            marginBottom: "0.001em",
          }}
        >
          EKLE
        </Button>
      </Form>
    </Segment>
  </Segment.Group>;
  return <div></div>;
}
