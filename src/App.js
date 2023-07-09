// import Tollbar from "./components/00ToolbarU/Toolbar";
// import Tollbaradm from "./components/00TollbarADM/TollbarADM";n

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/01Home/Home";
import ListaConteudos from "./components/02ListaConteudos/ListaConteudos";
import Conteudo from "./components/03Conteudo/Conteudo";
import Livro from "./components/09PagMidias/Livro";
import Artigo from "./components/09PagMidias/Artigo";
import Podcast from "./components/09PagMidias/Podcast";
import Video from "./components/09PagMidias/Video";

import Login from "./components/04Login/Login";
import ListaConteudosADM from "./components/05ListaADM/ListaConteudosADM";
import ConteudoADM from "./components/06ConteudoADM/ConteudoADM";
import Cadastrar from "./components/07Cadastar/Cadastrar";
import Editar from "./components/08Editar/Editar";
import ResultadosPesquisas from "./components/10ResultadosPesquisa/ResultadosPesquisas"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<ListaConteudos />} path="/Pesquisa" />
          <Route element={<Conteudo />} path="/IDConteudo" />
          <Route element={<Livro />} path="/Livros" />
          <Route element={<Artigo />} path="/Artigos" />
          <Route element={<Podcast />} path="/Podcasts" />
          <Route element={<Video />} path="/Videos" />

          <Route element={<Login />} path="/ADM/Login" />
          <Route element={<ListaConteudosADM />} path="/ADM/ListaConteudos" />
          <Route element={<ConteudoADM />} path="/ADM/Conteudo/:id" />
          <Route element={<Cadastrar />} path="/ADM/Cadastrar" />
          <Route element={<Editar />} path="/ADM/Editar/:id" />
          <Route element={<ResultadosPesquisas />} path="/results" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
