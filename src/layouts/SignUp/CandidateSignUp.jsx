import { useFormik } from "formik";
import React from "react";
import CandidateService from "../../services/candidateService";
import * as Yup from "yup";
import { Button, Input, Segment } from "semantic-ui-react";

export default function CandidateSignUp() {
  let candidateService = new CandidateService();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      identityNumber: "",
      birthYear: 0,
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Şirket ismi minimum 2 karakter olmalıdır!")
        .required("Şirket ismi boş bırakılamaz!"),
      lastName: Yup.string().required("Website boş bırakılamaz!"),
      phoneNumber: Yup.string()
        .min(11, "Telefon numarası 11 haneli olmalıdır!")
        .max(11, "Telefon numarası 11 haneli olmalıdır!")
        .required("Telefon Numarası boş bırakılamaz!"),
      birthYear: Yup.number().required("Website boş bırakılamaz!"),
      email: Yup.string()
        .email("Geçerli bir email adresi giriniz!")
        .required("Email boş bırakılamaz!"),
      password: Yup.string().required("Şifre boş bırakılamaz!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let candidate = {
        firstName: values.firstName,
        lastName: values.lastName,
        identityNumber: values.identityNumber,
        birthYear: values.birthYear,
        email: values.email,
        password: values.password,
      };

      console.log(candidate);
      candidateService
        .register(candidate)
        .then((result) => console.log(result.data.message));
    },
  });
  return (
    <div>
      <Segment.Group>
        <Segment style={{ backgroundColor: "black", color: "white" }}>
          <h3>Kayıt Ol</h3>
        </Segment>
        <Segment>
          <form
            onSubmit={formik.handleSubmit}
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            <div style={{ textAlign: "left" }}>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                <label>İsim:</label>
                <Input
                  id="firstName"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  placeholder="İsim..."
                  values={formik.values.firstName}
                  onChange={formik.handleChange}
                  required
                ></Input>
                {formik.errors.firstName && formik.touched.firstName && (
                  <p style={{ color: "red" }}>{formik.errors.firstName}</p>
                )}
              </div>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                <label>Soyisim:</label>
                <Input
                  id="lastName"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  placeholder="Soyisim..."
                  values={formik.values.lastName}
                  onChange={formik.handleChange}
                  required
                ></Input>
                {formik.errors.lastName && formik.touched.lastName && (
                  <p style={{ color: "red" }}>{formik.errors.lastName}</p>
                )}
              </div>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                <label>TC.Kimlik Numarası:</label>
                <Input
                  id="identityNumber"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  placeholder="TC.Kimlik Numarası..."
                  values={formik.values.identityNumber}
                  onChange={formik.handleChange}
                  required
                ></Input>
                {formik.errors.identityNumber &&
                  formik.touched.identityNumber && (
                    <p style={{ color: "red" }}>
                      {formik.errors.identityNumber}
                    </p>
                  )}
              </div>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                <label>Doğum Tarihi:</label>
                <Input
                  id="birthYear"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  placeholder="Doğum Tarihi..."
                  values={formik.values.birthYear}
                  onChange={formik.handleChange}
                  required
                ></Input>
                {formik.errors.birthYear && formik.touched.birthYear && (
                  <p style={{ color: "red" }}>{formik.errors.birthYear}</p>
                )}
              </div>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                <label>Email:</label>
                <Input
                  type="email"
                  id="email"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  placeholder="Email..."
                  values={formik.values.email}
                  onChange={formik.handleChange}
                  required
                ></Input>
                
                {formik.errors.email && formik.touched.email && (
                  <p style={{ color: "red" }}>{formik.errors.email}</p>
                )}
              </div>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                <label>Şifre:</label>
                <Input
                  id="password"
                  type="password"
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  placeholder="Şifre..."
                  values={formik.values.password}
                  onChange={formik.handleChange}
                  required
                ></Input>
                {formik.errors.password && formik.touched.password && (
                  <p style={{ color: "red" }}>{formik.errors.password}</p>
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
              KAYDET
            </Button>
          </form>
        </Segment>
      </Segment.Group>
    </div>
  );
}
