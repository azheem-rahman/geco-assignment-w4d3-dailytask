import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState([
    {
      location: "Singapore",
      contactNum: "(65) 1234-5678",
      email: "singapore@email.com",
    },
    {
      location: "Malaysia",
      contactNum: "(60) 12-345-6789",
      email: "malaysia@email.com",
    },
    {
      location: "Indonesia",
      contactNum: "(62) 123-4567-8999",
      email: "indonesia@email.com",
    },
  ]);

  return (
    <React.Fragment>
      <Typography variant="h5" style={{ margin: "1rem" }}>
        Contact Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {contactData.map((contact, index) => {
          return (
            <Card key={index} sx={{ m: 1, p: 1 }}>
              <CardContent>
                <Typography>{contact.location}</Typography>
                <Typography>{contact.contactNum}</Typography>
                <Typography>{contact.email}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default Contact;
