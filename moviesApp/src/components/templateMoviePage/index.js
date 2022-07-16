import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplateMoviePage = ({ movie, children }) => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMovieImages(movie.id).then((images) => {
      setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <MovieHeader movie={movie} />
      ..........
    </div>
  );
};

export default TemplateMoviePage;