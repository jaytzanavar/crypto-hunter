import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                className={classes.title}
              >
                Crypto Hunter
              </Typography>
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 50,
                  marginLeft: 15,
                  color: "white",
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"CHF"}>CHF</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
