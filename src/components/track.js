import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddCircle from "@material-ui/icons/AddCircle";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    backgroundColor: "#282828"
  },
  add: {
    color: "1ed760",
    cursor: "pointer",
    "&:hover": {
      color: "white"
    }
  },
  color: {
    color: "white"
  }
}));

const Track = ({ items, setDialog, addItemToRecommendList }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.color}>Song name</TableCell>
            <TableCell className={classes.color}>Artist</TableCell>
            <TableCell className={classes.color}>Album</TableCell>
            <TableCell className={classes.color}>Add</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((i, index) => (
            <TableRow key={i.name + index} className={classes.row}>
              <TableCell className={classes.color}>{i.name}</TableCell>
              <TableCell className={classes.color}>
                {i.artists.map((x, i) => (
                  <span key={x.name + i}>
                    <span
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                      onClick={() => setDialog(x.id)}
                    >
                      {x.name}
                    </span>{" "}
                  </span>
                ))}
              </TableCell>
              <TableCell className={classes.color}>{i.album.name}</TableCell>
              <TableCell className={classes.color}>
                <AddCircle
                  className={classes.add}
                  onClick={() => addItemToRecommendList(i)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Track;
