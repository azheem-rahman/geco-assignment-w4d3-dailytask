import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Typography variant="h5" style={{ margin: "1rem" }}>
        About Us
      </Typography>

      <Container component="main">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Our Story
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              md={12}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="https://blogimage.vantagefit.io/vfitimages/2022/11/Meaning-of-Sustainability.png"
                sx={{ maxWidth: "100%" }}
              ></Box>
            </Grid>
            <Grid item md={12} lg={6}>
              <Typography paragraph="true">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                maxime quos sint iure laboriosam corporis tempore temporibus
                sapiente natus dolores voluptates voluptatibus repellat amet
                explicabo ipsam quasi ipsa tempora reprehenderit, tenetur ab
                pariatur modi facere! Ratione aliquid delectus, assumenda ad
                voluptate deleniti earum a, hic facilis dolorum quas modi
                reprehenderit corporis sunt ducimus soluta, velit omnis quidem
                corrupti maiores perspiciatis autem in error.
              </Typography>
              <Typography paragraph="true">
                Rerum dicta quas, fugiat illo quisquam veniam debitis? Fugit
                reiciendis possimus et pariatur amet! Vel odit, dolore adipisci
                culpa magni architecto cum molestias soluta exercitationem
                excepturi reiciendis a nihil facere odio voluptates voluptate
                earum esse iste eligendi officia voluptatibus incidunt! Odit ut
                vel dolore quis obcaecati aliquam suscipit magnam quae officiis
                doloribus, mollitia quaerat voluptates culpa! Assumenda, sint,
                veritatis necessitatibus aperiam dignissimos provident quis
                deleniti magni minima eum unde sit! Quasi, nulla ut! Quisquam,
                omnis. Impedit repellat labore placeat odio nisi sed aut
                reiciendis sint minima! Quia ducimus quas minima est recusandae
                necessitatibus, veniam eveniet? Dolores corrupti amet ipsa dolor
                quam error omnis repellat libero eaque provident.
              </Typography>
              <Typography paragraph="true">
                Minus fugiat rem, blanditiis, non quod obcaecati exercitationem
                dicta dolores molestiae consequuntur aliquid ipsam doloribus
                eveniet quisquam facilis impedit ut eligendi libero? Ipsam, ad
                sunt explicabo nam nostrum molestiae cumque ipsa sint, tempore
                culpa tempora unde reprehenderit illo, voluptatum corrupti dolor
                ex perspiciatis adipisci eaque.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* add media */}
        {/* add content */}
      </Container>
    </div>
  );
};

export default About;
