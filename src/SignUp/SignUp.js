import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formValid, setFormValid] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  });

  const defaultTheme = createTheme();

  const handleChange = (event) => {
    const eventId = event.target.id;
    if (eventId === "first-name") {
      validateName(event.target.value, eventId);
    }
    if (eventId === "last-name") {
      validateName(event.target.value, eventId);
    }
    if (eventId === "email") {
      validateEmail(event.target.value);
    }
    if (eventId === "password") {
      validatePassword(event.target.value);
    }
  };

  const validateName = (name, type) => {
    console.log(`${type} name: ${name}`);
    console.log(type);
    let nameValid = formValid;
    let nameError = "";

    if (type === "first-name") {
      nameError = errorMessages.firstNameError;
    } else if (type === "last-name") {
      nameError = errorMessages.lastNameError;
    }

    if (name.trim() === "") {
      nameValid = false;
      nameError = "Name is required";
    } else if (name.trim().length === 1) {
      nameValid = false;
      nameError = "Please enter a valid name";
    } else {
      nameValid = true;
      nameError = "";
    }

    if (type === "first-name") {
      setFirstName(name);
      setFormValid(nameValid);
      setErrorMessages({ ...errorMessages, firstNameError: nameError });
    } else if (type === "last-name") {
      setLastName(name);
      setFormValid(nameValid);
      setErrorMessages({ ...errorMessages, lastNameError: nameError });
    }

    return nameValid;
  };

  const validateEmail = (email) => {
    console.log("Email: ", email);
    let emailValid = formValid;
    let emailError = errorMessages.emailError;
    let emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!emailPattern.test(email)) {
      emailValid = false;
      emailError = "Please enter valid email";
    } else {
      emailValid = true;
      emailError = "";
    }

    setEmail(email);
    setFormValid(emailValid);
    setErrorMessages({ ...errorMessages, emailError: emailError });

    return emailValid;
  };

  const validatePassword = (password) => {
    console.log(password);
    let passwordValid = formValid;
    let passwordError = errorMessages.passwordError;
    const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (!passwordPattern.test(password)) {
      passwordValid = false;
      passwordError =
        "Must contain at least one number, one uppercase, one lowercase, and at least 8 characters";
    } else {
      passwordValid = true;
      passwordError = "";
    }

    setPassword(password);
    setFormValid(passwordValid);
    setErrorMessages({ ...errorMessages, passwordError: passwordError });

    return passwordValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setFormValid(false);
      setErrorMessages({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
      });

      alert("Successful Sign Up!");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="first-name"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  helperText={errorMessages.firstNameError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last-name"
                  label="Last Name"
                  name="last-name"
                  autoComplete="family-name"
                  onChange={handleChange}
                  helperText={errorMessages.lastNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  helperText={errorMessages.emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  helperText={errorMessages.passwordError}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
