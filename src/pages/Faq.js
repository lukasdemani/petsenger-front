import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/system';

export default function Faq() {
    return (
        <>
            <Header />
            <Box
                sx = {{
                    height: 620
                }}>

            FAQ
            </Box>
            <Footer />
        </>
    )
}