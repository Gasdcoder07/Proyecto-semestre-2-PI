import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export const FooterIconsItems = [
    {
        id: 1,
        icono: FaGithub,
        path: "https://github.com/Gasdcoder07/ManzaLife"
    },
    {
        id: 2,
        icono: FaInstagram,
        path: "#"
    },
    {
        id: 3,
        icono: FaFacebook,
        path: "#"
    }
];

export const FooterItems = [
    {
        key: "blog",
        title: "Blog",
        subthemes: [
            {
                title_theme: "El blog más grande de Manzanillo",
                path: "#blog"
            }
        ]
    },
    {
        key: "posts",
        title: "Publicaciones",
        subthemes: [
            {
                title_theme: "Publicaciones recientes",
                path: "#posts"
            }
        ]
    },
    {
        key: "categorias",
        title: "Categorías",
        subthemes: [
            {
                title_theme: "Nuestras categorías",
                path: "#categorias"
            }
        ]
    },
    {
        key: "nosotros",
        title: "Nosotros",
        subthemes: [
            {
                title_theme: "¿Por qué explorar con nosotros?",
                path: "#nosotros"
            }
        ]
    },
    {
        key: "testimonios",
        title: "Testimonios",
        subthemes: [
            {
                title_theme: "Testimonios de nuestros usuarios",
                path: "#testimonios"
            }
        ]
    },
    {
        key: "cta",
        title: "Únete",
        subthemes: [
            {
                title_theme: "Únete a la comunidad",
                path: "#unete"
            }
        ]
    }
];