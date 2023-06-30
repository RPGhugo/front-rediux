import { Button, Toolbar } from "@mui/material";
import Logo from "./logo-sml.svg";
import { Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Tollbaradm = () => {
    return (
        <Toolbar
            sx={{
                backgroundColor: "#CED4DA",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            
            <a href="/ADM/ListaConteudos">
                <img src={Logo} height={36} alt="logo" />
            </a>

            <Link to="/ADM/Login">
                <Button
                    variant="outlined"
                    startIcon={<Logout />}
                    sx={{
                        boxShadow: "none",
                        borderColor: "#DC3545",
                        color: "#DC3545",
                        '&:hover': {
                            backgroundColor: "#DC3545",
                            borderColor: "#DC3545",
                            color: "#F5f5f5",
                            boxShadow: "none",
                        }
                    }}
                >
                    Logout
                </Button>
            </Link>
        </Toolbar>
    )
}

export default Tollbaradm