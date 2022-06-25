import { Box } from "@mui/system";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: 100,
                    display: 'flex',
                    bgcolor: '#ECF0F1',
                    color: '#000000',
                    position: 'fixed',
                    bottom: 0,
                }}>
                    <Box
                        component = 'img'
                        sx = {{
                            height: '100%',
                            marginLeft: 20
                        }}
                        src={require('.././assets/cropped-logo_petkurier_2cm.png')}/>
                    <Box
                        sx = {{
                            marginRight: 20,
                            marginLeft: 'auto',
                            marginTop: 5
                        }}>
                        <InstagramIcon />
                        <TwitterIcon />
                        <FacebookIcon />
                    </Box>
            </Box>
        </>
    )
}