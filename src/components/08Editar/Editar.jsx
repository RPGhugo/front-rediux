import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Editar = () => {

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [link, setLink] = useState("")
    const [tags, setTags] = useState({ carreira: false, fundamentosUX: false, designInteracao: false, UI: false, arquitetura: false })
    const [midia, setMidia] = useState({ livro: false, artigo: false, video: false, podcast: false })

    const { carreira, fundamentosUX, designInteracao, UI, arquitetura } = tags
    const { livro, artigo, video, podcast } = midia
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {

            axios.get(`http://localhost:3001/contents/retrieve/${id}`)
                .then(
                    (response) => {
                        setTitulo(response.data.titulo)
                        setAutor(response.data.autor)
                        setDescricao(response.data.descricao)
                        setLink(response.data.link)
                        setTags(response.data.tags)
                        setMidia(response.data.midia)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    function handleSubmit(event) {
        event.preventDefault()

        const conteudo = { titulo, autor, descricao, link, tags, midia }
        axios.put(`http://localhost:3001/contents/retrieve/${id}`, conteudo)
            .then(
                (response) => {
                    alert(`Conteúdo + "${response.data.titulo}" + " atualizado com sucesso!`)
                    navigate("/ADM/ListaConteudos")
                }
            )
            .catch(error => console.log(error))
    }

    function handleCheckBoxTags(event) {
        setTags(
            {
                ...tags,
                [event.target.name]: event.target.checked
            }
        )
    }

    function handleCheckBoxMidia(event) {
        setMidia(
            {
                ...midia,
                [event.target.name]: event.target.checked
            }
        )
    }

    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Editar Conteúdo {titulo}
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="titulo"
                    label="Título"
                    name="titulo"
                    onChange={(event) => setTitulo(event.target.value)}
                    value={titulo}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="autor"
                    label="Autor"
                    name="autor"
                    onChange={(event) => setAutor(event.target.value)}
                    value={autor}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="descricao"
                    label="Descrição"
                    name="descricao"
                    onChange={(event) => setDescricao(event.target.value)}
                    value={descricao}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="link"
                    label="Link"
                    name="link"
                    onChange={(event) => setLink(event.target.value)}
                    value={link}
                />

                <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Tags</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={carreira} name="carreira" onChange={handleCheckBoxTags} />} label="Carreira" />
                        <FormControlLabel control={<Checkbox checked={fundamentosUX} name="fundamentosUX" onChange={handleCheckBoxTags} />} label="Fundamentos de UX" />
                        <FormControlLabel control={<Checkbox checked={designInteracao} name="designInteracao" onChange={handleCheckBoxTags} />} label="Design de Interação" />
                        <FormControlLabel control={<Checkbox checked={UI} name="UI" onChange={handleCheckBoxTags} />} label="UI Design" />
                        <FormControlLabel control={<Checkbox checked={arquitetura} name="arquitetura" onChange={handleCheckBoxTags} />} label="Arquitetura da Informação" />
                    </FormGroup>
                </FormControl>

                <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                            <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Tipo de Mídia</FormLabel>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={livro} name="livro" onChange={handleCheckBoxMidia} />} label="Livro" />
                                <FormControlLabel control={<Checkbox checked={artigo} name="artigo" onChange={handleCheckBoxMidia} />} label="Artigo" />
                                <FormControlLabel control={<Checkbox checked={video} name="video" onChange={handleCheckBoxMidia} />} label="Video" />
                                <FormControlLabel control={<Checkbox checked={podcast} name="podcast" onChange={handleCheckBoxMidia} />} label="Podcast" />
                            </FormGroup>
                        </FormControl>

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2
                }}>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ mb: 2 }}
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Editar