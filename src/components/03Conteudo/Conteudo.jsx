import { Button, Box, Chip, Container, IconButton, InputAdornment, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { InsertDriveFileOutlined, InsertLink, List, PersonOutline } from "@mui/icons-material";
import folder from "./folder.svg"
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Tollbar from "../00ToolbarU/Toolbar";

const Conteudo = () => {
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

            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5,
                    }}
                >

                    <Link to="/Pesquisa">
                        <IconButton
                            sx={{
                                width: 50,
                                height: 50,
                                mr: 1,
                            }}
                        >
                            <ArrowBackIos />
                        </IconButton>
                    </Link>

                    <TextField
                        id="search"
                        type="search"
                        label="Pesquisar Conteúdo"
                        value={search}
                        onChange={handleChange}
                        sx={{ width: 860 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        sx={{ height: 55 }}
                                    >
                                        <SearchIcon />
                                    </Button>
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

                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box>
                        <Stack
                            mt={10}
                        >
                            <Typography variant="h6" component="h1" color="#0C2D8A">
                                Afinal, o que é realmente UX?
                            </Typography>
                            <Typography variant="subtitle1" component="h2" mb={2}>
                                O conteúdo esclarece o que de fato é UX.
                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={1}
                            mt={2}
                            mb={2}
                        >
                            <PersonOutline />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Autor:
                            </Typography>
                            <Typography variant="body1" component="body1">
                                Juliana do Vale
                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={1}
                            mb={2}
                        >
                            <List />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Tags:
                            </Typography>
                            <Chip label="Tags" sx={{ backgroundColor: "#BECBEA", color: "0C2D8A", height: "auto" }} />
                            <Chip label="Tags" sx={{ backgroundColor: "#FFB1B1", color: "#BF4040", height: "auto" }} />
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                            mb={2}
                        >
                            <InsertDriveFileOutlined />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Mídia:
                            </Typography>
                            <Typography variant="body1" component="body1">
                                Artigo
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <InsertLink />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Link:
                            </Typography>
                            <Link href="https://medium.com/@judovale/o-que-%C3%A9-ux-63f34da82398" ml={1}>Ir para o conteúdo</Link>
                        </Stack>
                    </Box>
                    <Box mt={5} ml={5}>
                        <img
                            src={folder}
                            alt="Capa do Conteúdo"
                            height={240}
                        />
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default Conteudo