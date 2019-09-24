import React, { useEffect, useState } from "react";
import { getRecommendations } from "../api/api.js";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    backgroundColor: "#282828"
  },
  open: {
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

const Recommend = ({ recommendList, token }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (!!recommendList.length) {
      getRecommendations(token, recommendList).then(res =>
        setItems(res.tracks)
      );
    }
  }, []);
  const classes = useStyles();
  if (!recommendList.length) {
    return <Redirect to="/search" />;
  }
  return (
    <section className="width center pad ptop">
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.color}>Song name</TableCell>
              <TableCell className={classes.color}>Artist</TableCell>
              <TableCell className={classes.color}>Album</TableCell>
              <TableCell className={classes.color}>Open</TableCell>
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
                  <Link
                    className={classes.open}
                    href={i.external_urls.spotify}
                    target="_blank"
                  >
                    Open in Spotify
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </section>
  );
};

export default Recommend;
