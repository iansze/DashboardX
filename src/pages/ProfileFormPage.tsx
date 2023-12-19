import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import { FormFields } from "../types/Types";

const ProfileFormPage = () => {
  const isMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const formSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      alert("Account created");
      formik.resetForm();
    },
    validationSchema: formSchema,
  });

  const formTextField = (field: FormFields, gridSpan: number) => {
    return (
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label={field}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[field]}
        name={field}
        error={!!formik.touched[field] && !!formik.errors[field]}
        helperText={formik.touched[field] && formik.errors[field]}
        sx={{ gridColumn: `span ${gridSpan}` }}
      />
    );
  };

  return (
    <Box m="20px" sx={{ width: { md: "80%" }, margin: { md: "0 auto" } }}>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="grid"
          mt="20px"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isMobile ? undefined : "span 4" },
          }}
        >
          {formTextField("firstName", 2)}
          {formTextField("lastName", 2)}
          {formTextField("email", 2)}
          {formTextField("contact", 2)}
          {formTextField("address1", 4)}
          {formTextField("address2", 4)}
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProfileFormPage;
