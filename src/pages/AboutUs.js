import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/system';

export default function AboutUs() {
    return (
        <>
            <Header />
            <Box
                sx = {{
                    height: 620
                }}>

            About Us
            </Box>
            <Footer />
        </>
    )
}