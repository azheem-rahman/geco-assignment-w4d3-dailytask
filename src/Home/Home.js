import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPostsAPI } from "../assets/services";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import FavouriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get(getPostsAPI)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      {posts ? (
        <div>
          <Typography variant="h5" style={{ margin: "1rem" }}>
            Latest Blog Posts
          </Typography>
          {posts.map((post) => {
            return (
              <Card
                sx={{ maxWidth: "100%" }}
                key={post.id}
                variant="outlined"
                style={{ padding: "1rem", margin: "1rem" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favourites">
                    <FavouriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}{" "}
        </div>
      ) : (
        <div>
          <LinearProgress color="inherit" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
