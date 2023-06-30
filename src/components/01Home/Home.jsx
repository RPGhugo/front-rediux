import { Button, Box, Container, InputAdornment, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Logo from "./logo.svg";
import { Article, Book, Mic, SmartDisplay } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Tollbar from "../00ToolbarU/Toolbar";

const Home = () => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [tag, setTag] = useState('');

    const tagChange = (event) => {
        setTag(event.target.value);
    };

    return (
        <>
            <Tollbar />

            <Container maxWidth="md" sx={{ mt: 20 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: 10,
                        height: 90
                    }}
                >
                    <img src={Logo} alt="Logo" />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <TextField
                        id="search"
                        type="search"
                        label="Pesquisar Conteúdo"
                        value={search}
                        onChange={handleChange}
                        sx={{ width: 600 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Link to="/Pesquisa">
                                        <Button
                                            sx={{ height: 55 }}
                                        >
                                            <SearchIcon />
                                        </Button>
                                    </Link>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControl vairant="primary">
                        <InputLabel id="demo-simple-select-filled-label">Tags</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={tag}
                            onChange={tagChange}
                            sx={{
                                width: 200,
                                ml: 1,
                            }}
                        >
                            <MenuItem
                                value=""
                            >
                            </MenuItem>
                            <MenuItem value={"Carreira"}>Carreira</MenuItem>
                            <MenuItem value={"FundamentosDeUX"}>Fundamentos de UX</MenuItem>
                            <MenuItem value={"DesignDeInteração"}>Design de Interação</MenuItem>
                            <MenuItem value={"UIDesign"}>UI Design</MenuItem>
                            <MenuItem value={"ArquiteturaDaInformacao"}>Arquitetura da Informação</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Divider
                    sx={{ mt: 5 }}
                />

                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        mt: 5,
                        color: "gray"
                    }}
                >
                    Navegue por Tipo de Mídia
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                    }}
                >
                    <Link to="/Livros">
                        <Button
                            variant="contained"
                            startIcon={<Book />}
                            sx={{
                                boxShadow: "none",
                                width: 150,
                                margin: 1,
                                backgroundColor: "#BECBEA",
                                color: "#0C2D8A",
                                '&:hover': {
                                    backgroundColor: "#0C2D8A",
                                    color: "#BECBEA",
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Livro
                        </Button>
                    </Link>

                    <Link to="/Artigos">
                        <Button
                            variant="contained"
                            startIcon={<Article />}
                            sx={{
                                boxShadow: "none",
                                width: 150,
                                margin: 1,
                                backgroundColor: "#BECBEA",
                                color: "#0C2D8A",
                                '&:hover': {
                                    backgroundColor: "#0C2D8A",
                                    color: "#BECBEA",
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Artigo
                        </Button>
                    </Link>

                    <Link to="/Podcasts">
                        <Button
                            variant="contained"
                            startIcon={<Mic />}
                            sx={{
                                boxShadow: "none",
                                width: 150,
                                margin: 1,
                                backgroundColor: "#BECBEA",
                                color: "#0C2D8A",
                                '&:hover': {
                                    backgroundColor: "#0C2D8A",
                                    color: "#BECBEA",
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Podcast
                        </Button>
                    </Link>

                    <Link to="/Videos">
                        <Button
                            variant="contained"
                            startIcon={<SmartDisplay />}
                            sx={{
                                boxShadow: "none",
                                width: 150,
                                margin: 1,
                                backgroundColor: "#BECBEA",
                                color: "#0C2D8A",
                                '&:hover': {
                                    backgroundColor: "#0C2D8A",
                                    color: "#BECBEA",
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Vídeo
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
}

export default Home