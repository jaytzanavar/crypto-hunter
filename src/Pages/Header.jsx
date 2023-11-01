import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography>Crypto Hunter</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
