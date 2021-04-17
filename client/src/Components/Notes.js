import React, { useState, useEffect } from "react";
import Note from "./Note";
import Axios from "axios";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForeverRounded";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const Notes = () => {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/routes/read").then((response) => {
      setNoteList(response.data);
    });
  }, []);

  const useStyles = makeStyles({
    root: {
      textAlign: "center",
      margin: 20,
      minWidth: 250,
      maxWidth: 350,
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
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Note />
      {noteList.map((val, key) => {
        return (
          <div key={key}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  <p>{val.noteName}</p>
                </Typography>
                <Typography className={classes.content}>
                  <p>{val.noteContent}</p>
                </Typography>
              </CardContent>
              <CardActions>
                <div className={classes.button}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
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
