import { Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { fontFamily, fontWeight, textAlign } from '@mui/system';
import { useNavigate } from 'react-router';

export default function Main () {
    const navigate = useNavigate();
    return (
        <>
        <Box 
            component="img"
            sx = {{
                width: '100%',
                position: 'relative'
            }}
            src={require('.././assets/dog.jpeg')}
        />
        <Box
            sx= {{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: 400,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: 70,
                color: '#ffffff'
            }}
            ><p>TRAVEL ANIMAL COMPANION</p>
            <Button onClick={() => navigate('/about-us')}
                sx = {{
                    color: '#ffffff',
                    fontWeight: 500,
                    marginTop: -9,
                    marginRight: -100
                }}>Read more</Button>
            </Box>
        
        <Box
            sx= {{
                width: '100%',
                height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: 50
            }}
            ><p>Professional. Careful. Fair price.</p>
            
            </Box>

            <Box
                sx={{
                    display: 'flex'
                }}>
                <Box 
                component="img"
                sx = {{
                    width: '50%'
                }}
                src={require('.././assets/cat.jpeg')}
                />

                <Typography 
                    variant= "h2"
                    sx= {{
                        width: '50%',
                        textAlign: 'center',
                        paddingTop: 15,
                        fontFamily: 'monospace'
                    }}
                >
                    Your pet will fly with one of our agents.<br />
                    <Button onClick={() => navigate('/about-us')}
                        sx = {{
                            color: '#000000',
                            fontWeight: 500,
                            marginTop: 0,
                            marginRight: 0
                        }}>
                        Read more
                    </Button>
                </Typography>
                
            </Box>
            
            <Box
                sx={{
                    display: 'flex'
                }}>
                <Typography 
                    variant = "h2"
                    sx={{
                        width: '50%',
                        textAlign: 'center',
                        paddingTop: 18,
                        fontFamily: 'monospace'
                    }}>
                    We take care of the whole process. <br />
                    <Button onClick={() => navigate('/about-us')}
                        sx = {{
                            color: '#000000',
                            fontWeight: 500,
                            marginTop: 0,
                            marginRight: 0
                        }}>
                        Read more
                    </Button>
                </Typography>
                <Box 
                    component='img'
                    src={require('.././assets/chip.jpeg')}
                    sx={{
                        width: '50%',
                    }}>     
                </Box>
                
            </Box>
            
            <Typography
                variant = 'h2'
                sx={{
                    width: '100%',
                    height: 200,
                    textAlign: 'center',
                    paddingTop: 13,
                    fontFamily: 'monospace',
                    fontWeight: 700
                }}>
                Safe. Simple. Efficient.
            </Typography>

            <Box sx = {{ position: 'relative'}}>
                <Box
                    component = 'img'
                    src={require('.././assets/pet-dog-car.webp')}
                    sx={{
                        width: '100%'
                    }}
                    />
                <Typography
                    variant='h1'
                    sx={{
                        width: '50%',
                        textAlign: 'center',
                        paddingTop: 22,
                        fontFamily: 'monospace',
                        position: 'absolute',
                        color: '#ffffff',
                        top: 0
                    }}>
                        DOOR TO DOOR SERVICE <br />
                        <Button onClick={() => navigate('/about-us')}
                        sx = {{
                            color: '#ffffff',
                            fontWeight: 500,
                            marginTop: -10,
                            marginRight: 0
                        }}>
                        Read more
                    </Button>
                    </Typography>
            </Box>
                
            
        </>

    );
}