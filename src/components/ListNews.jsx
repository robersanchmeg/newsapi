import { Grid, Pagination, Stack, Typography } from "@mui/material"
import useNews from "../hooks/useNews"
import Story from "./Story"

const ListNews = () => {

    const { news, totalNews, handleChangePage, page } = useNews()

    const totalPages = Math.ceil(totalNews / 20)

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant="h3"
                component={"h2"}
            >
                Latest News
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {news.filter(story => story.urlToImage !== null).map(story => (
                    <Story 
                        key={story.url}
                        story={story}
                    />
                ))}
            </Grid>

            <Stack 
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination 
                    count={totalPages} 
                    color="primary" 
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    )
}

export default ListNews