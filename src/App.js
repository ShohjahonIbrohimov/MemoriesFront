import React from "react";
import { Container, Grid, Grow, Typography, AppBar } from "@material-ui/core";
import memories from "./components/images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Grid container justify="" alignItems="center" spacing={2}>
          <img src={memories} width="60" alt="memories" />
          <Typography variant="h4">Memories</Typography>
        </Grid>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <Posts />
            </Grid>
            <Grid item>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
