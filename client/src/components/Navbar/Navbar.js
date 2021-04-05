import React from "react";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";

function Navbar() {
  const classes = useStyles();
  let user = null;
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
        >
          <Typography className={classes.heading} variant="h3" align="center">
            <img
              src={"/images/logo.png"}
              alt="memories"
              style={{ marginLeft: "15px", borderRadius: "10px" }}
              height="50"
            />{" "}
            Yadharu
          </Typography>
        </Typography>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.profile}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/auth"
              >
                Sign In
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
