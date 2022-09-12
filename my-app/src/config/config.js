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
        description: "Dans le cadre de mon stage pour la formation Becode à Charleroi, j'ai travaillé pour Inseetu. Le projet était de faire un configurateur des panneaux signalitiques. J'ai utilisé Parcel pour initialisé le projet React ainsi que l'api Vectary. De plus j'ai été amené à utiliser des librairies tel que react-spring et html2canvas"
    },
    {
        name: "Randomiser Pokémon",
        type: "softProject",
        url: "//christophe28.github.io/randomType",
        picture: bgRandomType,
        description: "Après mon stage, pour le loisir et faire plaisir aux amis, j'ai codé un générateur aléatoire des types pkémons. pour ce projet j'ai fais du react pure, sans autres librairies ni framework"
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