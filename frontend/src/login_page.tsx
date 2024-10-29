import "@mantine/core/styles.css";
import { Button, Stack } from "@mantine/core";
import { useState } from 'react';
import { Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {Text} from '@mantine/core';
import { Box } from '@mantine/core';
import {createTheme} from '@mantine/core';
import { TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';


const theme = createTheme({
    primaryColor: 'custom-teal',
    colors: {
      // Define shades of teal
      'custom-teal': [
        '#E0F7FA', // shade 0: very light teal
        '#B2EBF2', // shade 1: light teal
        '#80DEEA', // shade 2: lighter teal
        '#4DD0E1', // shade 3: light-medium teal
        '#26C6DA', // shade 4: medium teal
        '#00BCD4', // shade 5: base teal (primary shade)
        '#00ACC1', // shade 6: slightly darker teal
        '#0097A7', // shade 7: dark teal
        '#00838F', // shade 8: darker teal
        '#006064', // shade 9: very dark teal
      ],
    },
  });
  


export default function LoginPage(){
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    setError('');
    
        if (!email || !password) {
          setError('Please fill in all fields.');
          return;
        }
    
            setError('');
        // Simulate form submission or further processing
        console.log('Form Submitted:', { email, password });
    };



    return(
        <div style={{
            backgroundColor: '#E0F7FA', 
            minHeight: '100vh',
            height: '75vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column'}}>
    
        <Box
          style={{
            backgroundColor: 'white',  
            padding: '50px',            
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px',       
            width: '35vw',              
            height: '80vh',             
          }}>
            <Stack justify="center" align="center" >
            <Text size='xl' fw={700} style={{color: '#0097A7', fontSize: '45px', fontFamily: 'Holtwood One SC, serif'}}>
                PassTime
            </Text>
            <Text size="xl" fw={700} style={{ textDecoration: 'underline' }}>
                Sign In
            </Text>
            {error && (
            <Text style={{ color: 'red', marginBottom: '-13px' }}>{error}</Text>
          )}
            <TextInput
            label="Email"
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
            style={{width:'65%'}} 
            />
            <TextInput
            label="Password"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
            style={{width:'65%'}}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '65%' }}>
            <Text style={{color: '#42A5F5', 
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#4B0082')} // Hover color
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#42A5F5')} // Revert color
                        >
                Forgot Password?
            </Text>
            </div>
            <Button style={{width: '18%',
                backgroundColor: '#4B0082',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                }}  
                onClick={handleLogin}  // Attach the login handler
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0097A7')} // Hover color
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4B0082')} // Revert color
                >
                Login
            </Button>
            <Group style={{ gap: '5px' }}>
                <Text>
                    New to PassTime?
                </Text>
                <Link to="/createaccount" style={{ textDecoration: 'none' }}>
                <Text style={{textDecoration: 'underline', 
                        color:'#42A5F5',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#4B0082')} // Hover color
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#42A5F5')}
                        >
                    Create an account
                </Text>
                </Link>
            </Group>
            </Stack>
        </Box>
        </div>
    )

}