import { useState } from "react";
import { useAuth } from "../../context/authContext";
import {
    Container,
    ContentWrapper,
    LeftSection,
    RightSection,
    ImageOverlay,
    LogoContainer,
    Img,
    Title,
    Form,
    Input,
    Button,
    BackgroundDecoration,
    FloatingCircle
} from '../../styles/styleLogin';
import logo from '../../assets/escudoVertical.png';

const Login = () => {
    const [role, setRole] = useState("admin");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleLogin = () => {
        // Aquí podrías agregar la lógica para autenticar con username y password
        login(role);
    };

    return (
        <Container>
            <BackgroundDecoration />
            {/* Círculos flotantes adicionales con diferentes colores y tamaños */}
            <FloatingCircle color="rgba(245,138,47,0.5)" size="100px" top="5%" left="5%" duration="7s" />
            <FloatingCircle color="rgba(170,28,93,0.5)" size="80px" bottom="10%" right="10%" duration="9s" delay="2s" />
            <FloatingCircle color="rgba(0,180,219,0.5)" size="120px" top="30%" right="15%" duration="8s" delay="1s" />
            <FloatingCircle color="rgba(104,92,168,0.5)" size="70px" top="20%" left="30%" duration="10s" delay="3s" />
            <FloatingCircle color="rgba(250,173,89,0.5)" size="90px" bottom="20%" left="20%" duration="6s" delay="4s" />
            <LeftSection>
                <ImageOverlay>
                    <LogoContainer>
                        <Img src={logo} alt="Logo" />
                    </LogoContainer>
                    <Title>Bienvenidos</Title>
                </ImageOverlay>
            </LeftSection>
            <ContentWrapper>
                <RightSection>
                    <h2>Ingrese a su cuenta</h2>
                    <Form>
                        <Input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                fontSize: '16px',
                                borderRadius: '10px',
                                border: '1px solid #ccc',
                                backgroundColor: '#f9f9f9',
                                cursor: 'pointer',
                                outline: 'none'
                            }}
                        >
                            <option value="admin">Administrador</option>
                            <option value="user">Usuario</option>
                        </select>
                        <Button onClick={handleLogin}>Ingresar</Button>
                    </Form>
                </RightSection>
            </ContentWrapper>
        </Container>
    );
};

export default Login;
    