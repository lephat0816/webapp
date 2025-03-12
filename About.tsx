import { Box, Container, Typography } from "@mui/material";
import { aboutStyles } from "./About.css";

export const About = () => {

    return (

        <>
        <Box
            sx={{
                background: `url(src/assets/img/img_201.jpg) center center/cover no-repeat`,
                zIndex: 1,
                width: '100%',
                height: '20vh',
            }}
        >
            <Box sx={aboutStyles.content}>
                <Typography variant="h3" sx={aboutStyles.heading}>
                    会社概要
                </Typography>
                <Typography variant="body1" sx={aboutStyles.text}>
                    COMPANY
                </Typography>
            </Box>
        </Box>
        <Container sx={aboutStyles.container}>
            
            <Box sx={aboutStyles.content}>
                <Typography variant="h3" sx={aboutStyles.heading}>
                    会社概要
                </Typography>
                <Typography variant="body1" sx={aboutStyles.text}>
                    COMPANY
                </Typography>
            </Box>
        </Container>
        </>
    )
}