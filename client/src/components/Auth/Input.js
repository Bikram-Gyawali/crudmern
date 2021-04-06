import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function Input({
  name,
  half,
  handleChange,
  handlePassword,
  type,
  label,
  autoFocus,
}) {
  return (
    <div>
      <Grid
        xs={12}
        xm={half ? 6 : 12}
        style={{ margin: "10px 10px 10px 10px" }}
      >
        <TextField
          name={name}
          variant="outlined"
          onChange={handleChange}
          required
          fullWidth
          label={label}
          autoFocus={autoFocus}
          type={type}
          InputProps={
            name === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePassword}>
                        {type === "password" ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        ></TextField>
      </Grid>
    </div>
  );
}

export default Input;
