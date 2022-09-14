import bgRandomType from "../assets/random-type-bg.jpg";
import bgConfigurator from "../assets/configurator-bg.jpg";
import reactPicture from "../assets/icon-react.png";
import vanillaPicture from "../assets/icon-javascript.png";
import sassPicture from "../assets/icon-sass.png";
import phpPicture from "../assets/icon-php.png";

export const projects = [
    {
        name: "Configurateur Inseetu",
        type: "bigProject",
        url: "//christophe28.github.io/configurator",
        picture: bgConfigurator,
        description: "Dans le cadre de mon stage pour la formation Becode à Charleroi, j'ai travaillé pour Inseetu. Le projet était de faire un configurateur de panneaux signalétiques. J'ai utilisé Parcel pour initialiser le projet React ainsi que l'API Vectary. De plus, j'ai dû utiliser des librairies comme react-Spring ou HTML2 canvas."
    },
    {
        name: "Randomiser Pokémon",
        type: "softProject",
        url: "//christophe28.github.io/randomType",
        picture: bgRandomType,
        description: "Après mon stage, pour le loisir et faire plaisir aux amis, j'ai codé un générateur aléatoire des types Pokémons"
    }
]

export const hardSkills = [
    {
        name: "React",
        picture: reactPicture,
    },
    {
        name: "Vanilla",
        picture: vanillaPicture,
    },
    {
        name: "Sass",
        picture: sassPicture,
    },
    {
        name: "Php",
        picture: phpPicture,
    }
]