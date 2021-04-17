import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    links: {
      color: "inherit",
      textDecoration: "inherit",
    },
  }));
  const classes = useStyles();
  return (
      
    <div>
      <MenuIcon onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link to="/notes">Notes</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link to="/about">About</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
