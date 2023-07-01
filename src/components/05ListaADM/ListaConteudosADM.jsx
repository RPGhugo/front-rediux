import {Button, Box, Container, InputAdornment, TextField, Typography, FormControl, InputLabel, Select, MenuItem, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Link, useNavigate} from "react-router-dom";
import Tollbaradm from "../00TollbarADM/TollbarADM";
import axios from "axios";

const ConteudoADM = () => {

    const [conteudos, setConteudos] = useState([]);
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get("http://localhost:3001/contents/list")
            .then(
                (response)=>{
                    setConteudos(response.data)
                }
            )
            .catch(error=>console.log("error"))
        }
        ,
        []
    )

    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    function excluirConteudo(id) {
        if(window.confirm("Deseja Excluir? " + id)){
            axios.delete(`http://localhost:3001/contents/delete/${id}`)
            .then(
                (response)=>{
                    const resultado = conteudos.filter( conteudo => conteudo._id !== id)
                    setConteudos(resultado)
                }
            )
            .catch(error=>console.log(error))
        }
    }

    return (
        <>
            <Tollbaradm />

            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "Center",
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={500}
                    mt={10}
                >
                    Visualizar Conteúdos
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5,
                    }}
                >
                    <TextField
                        id="search"
                        type="search"
                        label="Pesquisar Conteúdo"
                        value={search}
                        onChange={handleChange}
                        sx={{ width: 640 }}
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

                    <FormControl
                        sx={{
                            width: 100,
                            mx: 2
                        }}
                    >
                        <InputLabel id="selcionarTagsLabel">Tags</InputLabel>
                        <Select
                            labelId="selecionarTagsLabel"
                            id="selecionarTgas"
                            value={String}
                            label="Tags"
                        >
                            <MenuItem value={"Carreira"}>Carreira</MenuItem>
                            <MenuItem value={"FundamentosDeUX"}>Fundamentos de UX</MenuItem>
                            <MenuItem value={"DesignDeInteração"}>Design de Interação</MenuItem>
                            <MenuItem value={"UIDesign"}>UI Design</MenuItem>
                            <MenuItem value={"ArquiteturaDaInformacao"}>Arquitetura da Informação</MenuItem>
                        </Select>
                    </FormControl>

                    <Link to="/ADM/Cadastrar">
                        <Button
                            size="small"
                            sx={{
                                height: 55,
                                backgroundColor: "#0C2D8A",
                                color: "#BECBEA",
                                '&:hover': {
                                    backgroundColor: "#BECBEA",
                                    color: "#0C2D8A",
                                },
                                mx: 2,
                                px: 2,
                            }}
                        >
                            Cadastrar Conteúdo
                        </Button>
                    </Link>
                </Box>

                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 5,
                    }}
                >

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Título</TableCell>
                                    <TableCell align="left">Autor</TableCell>
                                    <TableCell align="left">URL</TableCell>
                                    <TableCell align="left">Visualizar</TableCell>
                                    <TableCell align="left">Editar</TableCell>
                                    <TableCell align="left">Excluir</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {conteudos.map((conteudo) => (
                                    <TableRow
                                        key={conteudo.titulo}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {conteudo.titulo}
                                        </TableCell>
                                        <TableCell align="left">{conteudo.autor}</TableCell>
                                        <TableCell align="left">{conteudo.link}</TableCell>
                                        <TableCell align="center">
                                            <Link to={`/ADM/Conteudo/${conteudo._id}`}>
                                                <IconButton aria-label="visualizar"><Visibility /></IconButton>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`/ADM/Editar/${conteudo._id}`}>
                                                <IconButton aria-label="editar"><Edit /></IconButton>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center"><IconButton aria-label="deletar" onClick={() => excluirConteudo(conteudo._id)}><Delete /></IconButton></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Container>
        </>
    )
}

export default ConteudoADM