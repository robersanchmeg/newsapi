import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"

const Story = ({story}) => {

  const { urlToImage, url, title, description, source } = story

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia 
            component="img"
            alt={`Image of the entry ${title}`}
            image={urlToImage}
            height={'250'}
          />
        )}

        <CardContent
          sx={{
            height: '250px'
          }}
        >
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={'100%'}
            textAlign={'center'}
            sx={{
              textDecoration: 'none'
            }}
          >
            Read Entry
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Story