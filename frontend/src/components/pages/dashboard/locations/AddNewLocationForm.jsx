import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import "./AddNewLocationForm.css";
import { Button } from "@mui/material";

const validationSchema = yup.object({
  locationName: yup
    .string("Enter your Location Name")
    .required("Location Name is required"),
  district: yup.string("Enter your District").required("District is required"),
});

const AddNewLocationForm = () => {
  const formik = useFormik({
    initialValues: {
      locationName: "",
      district: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          sx={{
            mb: 5,
          }}
          id="locationName"
          name="locationName"
          label="Location Name"
          value={formik.values.locationName}
          onChange={formik.handleChange}
          error={
            formik.touched.locationName && Boolean(formik.errors.locationName)
          }
          helperText={formik.touched.locationName && formik.errors.locationName}
        />
        <TextField
          fullWidth
          sx={{
            mb: 5,
          }}
          id="district"
          name="district"
          label="District"
          type="district"
          value={formik.values.district}
          onChange={formik.handleChange}
          error={formik.touched.district && Boolean(formik.errors.district)}
          helperText={formik.touched.district && formik.errors.district}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" sx={{backgroundColor: "#242424"}}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNewLocationForm;
