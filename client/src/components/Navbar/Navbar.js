import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";

function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // console.log(user);
  // useEffect(() => {
  //   const token = user?.token;
  //   //jwt if we do manual signup
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

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
                onClick={handleLogout}
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
