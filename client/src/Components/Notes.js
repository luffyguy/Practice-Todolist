import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForeverRounded";
import "../App.css";

const Notes = () => {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/routes/read").then((response) => {
      setNoteList(response.data);
    });
  });

  const deleteNote = (id) => {
    console.log(id);
    fetch(`/routes/delete/${id}`, { method: "DELETE" });
  };

  const useStyles = makeStyles({
    root: {
      textAlign: "center",
      padding: 5,
      margin: 20,
      minWidth: 250,
    },
    title: {
      fontSize: 20,
    },
    content: {
      fontSize: 15,
      marginBottom: 5,
    },
    button: {
      flexGrow: 1,
      justifyContent: "center",
    },
  });

  const classes = useStyles();
  return (
    <div>
      {noteList.map((val, key) => {
        return (
          <div key={key}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  component={"span"}
                  className={classes.title}
                  color="textSecondary"
                >
                  <h5>{val.noteName}</h5>
                </Typography>
                <Typography component={"span"} className={classes.content}>
                  <h5>{val.noteContent}</h5>
                </Typography>
              </CardContent>
              <CardActions>
                <div className={classes.button}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteNote(val._id)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </div>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
