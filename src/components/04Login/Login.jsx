import { Container, Box, Button, TextField } from "@mui/material"
import Logo from "./logo.svg"
import Ilustracao from "./ilustracao.svg"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 10,
            }}
        >

            <Box>
                <img
                    src={Ilustracao}
                    alt="Ilustração"
                    width={500}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#E9ECEF",
                    padding: 6,
                    borderRadius: 2,
                }}
            >
                <img
                    src={Logo}
                    alt="Logo"
                    height={75}
                />

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    autoFocus

                    label="Nome de Usuário"
                    id="user"
                    name="user"
                    type="user"

                    sx={{ mt: 5 }}
                />
                <TextField
                    required
                    fullWidth
                    margin="normal"

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                />

                <Link to="/ADM/ListaConteudos">
                    <Button
                        sx={{
                            width: 280,
                            my: 2,
                            backgroundColor: "#0C2D8A",
                            color: "#BECBEA",
                            boxShadow: "none",
                            '&:hover': {
                                backgroundColor: "#BECBEA",
                                color: "#0C2D8A",
                                boxShadow: "none",
                            }
                        }}
                        variant="contained"
                    >
                        Login
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Login