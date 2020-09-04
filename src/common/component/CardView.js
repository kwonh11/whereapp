import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardView({ data }) {
  const classes = useStyles();

  return data.map((news, idx) => (
    <Card className={classes.root} key={idx}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={news.image}
          title={news.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          자세히
        </Button>
        <Button size="small" color="primary">
          스크랩
        </Button>
      </CardActions>
    </Card>
  ));
}
