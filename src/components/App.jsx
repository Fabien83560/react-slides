import React from 'react';

import { SlidesProvider } from "../context/SlidesContext.jsx";
import { FullScreenProvider } from '../context/FullScreenContext.jsx';
import { SlideCountProvider } from '../context/SlideCountContext.jsx';
import { ShowSlideNumberProvider } from '../context/ShowSlideNumberContext.jsx';
import { useFullScreen } from '../context/FullScreenContext.jsx'

// Components
import Deck from "./Deck.jsx";
import ToolBar from "./ToolBar.jsx";
import Mosaique from "./Mosaique.jsx";
import Slide from "./Slide.jsx";
import Title from "./Title";
import Paragraph from './Paragraph.jsx';
import Figure from './Figure.jsx';
import Image from "./Image.jsx";
import List from './List.jsx';
import Table from './Table.jsx';
import TwoColumn from './TwoColumn.jsx';
import Markdown from './Markdown.jsx';
import Code from "./Code.jsx";

// Add your own import
import presentationImg from "../assets/presentation.png";
import chat from "../assets/chat.png"

export default function App() {
    const slides = [
        () =>   <Slide>
                    <Title text={"Outil de Présentation"}
                           size={10}
                           horizontal={50} />
                    <Image filePath={presentationImg}
                            size={56}
                            horizontal="40"
                            vertical={20}/>
                    <Paragraph text={"Sur cette présentation, vous trouverez des exemples d'utilisations de cet outil. Cette présentation a aussi été réalisé a l'aide de l'outil."} 
                            size={6}
                            vertical="80"
                            horizontal="50" />
                    <TwoColumn
                        leftColumn={
                            <Paragraph text={"Cet outil a été réalisé par ORTEGA Fabien"}
                                       size={4}
                                       vertical="100"
                                       horizontal="0"/>
                        }
                        rightColumn={
                            <Paragraph text={"Dans le cadre de la ressource R4.A.10 - Compléments web"}
                                       size={4}
                                       vertical="100"
                                       horizontal="100"/>
                        }/>
                </Slide>,
        () =>   <Slide>
                    <Title text={"Voici des titres avec plusieurs tailles"} size={10} textColor={"red"}/>
                    <Title text={"Voici un autre Titre aligné a droite et a la vertical"} size={6} horizontal={90} vertical={20} />
                    <Title text={"Voici un titre au centre coloré en jaune avec un fond violet"} size={3} horizontal={50} vertical={50} textColor={"yellow"} backgroundColor={"purple"} />
                    <Paragraph text={"Voici un paragraphe qui présente brievement les options de personalisation possible, pour les Titres et les Paragraphe, il y a plusieurs 'props' disponnibles comment la taille, l'alignement vertical et horizontal ainsi que la couleur du texte et la couleur du fond."} 
                               size={4}
                               vertical={70}/>
                </Slide>,
        () =>   <Slide>
                    <Title text={"Listes a puces"} horizontal={50} textColor={"red"}/>
                    <TwoColumn 
                        leftColumn={[
                            <Title text={"Voici une liste a puces"} size={6} vertical={20} />,
                            <List type={"bulleted"} tabElement={["value1","value2","value3"]} vertical={30}/>,
                            <Paragraph text={"Pour obtenir une liste a puces, il faut mettre la 'props' type à 'bulleted'"} vertical={50}/>
                        ]}
                        rightColumn={[
                            <Title text={"Voici une liste a numérotée"} size={6} vertical={20} />,
                            <List type={"decimal"} tabElement={["value1","value2","value3"]} vertical={30} textColor={"yellow"}/>,
                            <Paragraph text={"Pour obtenir une liste a puces, il faut mettre la 'props' type à 'decimal'"} vertical={50}/>,
                            <Paragraph text={"Il est toujours possible de coloré le texte des listes avec la 'props' textColor"} vertical={60}/>
                        ]}
                    />
                    <Paragraph text={"Cette affichage a par la même occasion été réalisé a l'aide de l'affichage par deux colonnes."} size={6} vertical={80}/>
                    <Paragraph text={"L'affichage par deux colonnes possède deux 'props' la première étant 'leftColumn' qui correspond a la colonne de gauche puis 'rightColumn' qui correspond à la colonnes de droite."} size={4} vertical={90} textColor={"orange"} />
                </Slide>,
        () =>   <Slide>
                    <Title text={"Images et Figures"} textColor={"red"} horizontal={50}/>
                    <Figure filePath={chat}
                            imgName="chat"
                            text={"Voici l'image d'un chat"}
                            vertical={40}
                            horizontal={20}/>
                    <Image filePath={presentationImg}
                            imgName="logo"
                            vertical={40}
                            horizontal={70}/>
                </Slide>,
        () =>   <Slide>
                    <Title text={"Voici un tableau"} textColor={"red"} horizontal={50}/>
                    <Table
                        vertical={20}
                        tabElement={[
                            ["Matière / Nom","Enzo","Gaspard","Bruno","Fabien"],
                            ["Mathématique","3","11","19,75","14,5"],
                            ["Français","5,5","1,5","18,75","11,5"],
                            ["Développement","7","0","7,5","18,75"],
                            ["Droit","9","6","17","6,5"],
                            ["Anglais","20","3","10,5","7"],
                            ["Cantine","19,5","17","14,5","13"],
                            ["Moyenne","10,67","6,41","14,67","11,87"]
                        ]}/>
                </Slide>,
        () =>   <Slide>
                    <Code theme="vscDarkPlus"
                          language="cpp"
                          code={
`
#include <iostream>
#include <string>

// Classe représentant un étudiant
class Etudiant {
private:
    std::string nom;
    int age;
public:
    Etudiant(std::string nom, int age) : nom(nom), age(age) {}

    void afficherDetails() {
        std::cout << "Nom: " << nom << std::endl;
        std::cout << "Age: " << age << std::endl;
    }
};

int somme(int a, int b) {
    return a + b;
}

int main() {
    // Création d'un objet étudiant
    Etudiant etudiant1("Jean", 20);
    etudiant1.afficherDetails();
    int resultat = somme(5, 7);
    std::cout << "La somme est : " << resultat << std::endl;

    return 0;
}
`
                          }/>
                    <Title text={"Code avec coloration syntaxique"} textColor={"red"} horizontal={80} vertical={50}/>
                </Slide>,
        () =>   <Slide>
            <Title text={"Voici une page en Markdown"} size={8} vertical={0} horizontal={50} textColor={"red"}/>
                    <TwoColumn 
                    leftColumn={
                        <Markdown markdownText={
`
# Titre principal

Ceci est un paragraphe en **Markdown**!

## Sous-titre

- Une liste
- Avec quelques éléments
- Un autre élément

### Un peu de code avec coloration syntaxique

\`\`\`javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("World");
\`\`\`

`
                                                } />
                                                
                    }
                    rightColumn={
                        <Markdown markdownText={
`
> Ceci est une citation.

[Un lien vers la documentation de JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)

**Texte en gras** et *texte en italique*.
`
                        }/>
                    }
                    />
                </Slide>
    ];

    return (
        <>
            <FullScreenProvider>
                <SlideCountProvider>
                    <ShowSlideNumberProvider>
                        <SlidesProvider slides={slides}>
                            <Deck />
                            <FullScreenMosaique />
                            <ToolBar />
                        </SlidesProvider>
                    </ShowSlideNumberProvider>
                </SlideCountProvider>
            </FullScreenProvider>
        </>
    );
}

function FullScreenMosaique() {
    const { isFullScreen } = useFullScreen();
    if (isFullScreen)
        return null;
    return <Mosaique />;
}