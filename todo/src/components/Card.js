import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import { FormContext } from "../contexts/FormContext";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const context = useContext(FormContext);
  console.log(context);
  const { handleText } = context;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          入力フォーム
        </Typography>
        <Typography variant="h5" component="h2">
          タスクを入力してください
        </Typography>
        <Form />
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <IconButton>
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
