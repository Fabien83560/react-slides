import { SlidesProvider } from "../context/SlidesContext.jsx";
import { FullScreenProvider } from '../context/FullScreenContext.jsx';
import { SlideCountProvider } from '../context/SlideCountContext.jsx';
import { ShowSlideNumberProvider } from '../context/ShowSlideNumberContext.jsx';
import { useFullScreen } from '../context/FullScreenContext.jsx'

import Deck from "./Deck.jsx";
import { textColorStyle } from '../css/style.js';

// Add your own import
import presentationImg from "../assets/presentation.png";
import ToolBar from "./ToolBar.jsx";
import Slide from "./Slide.jsx";
import Image from "./Image.jsx";
import Title from "./Title";
import Figure from './Figure.jsx';
import Paragraph from './Paragraph.jsx';
import List from './List.jsx';
import Table from './Table.jsx';
import TwoColumn from './TwoColumn.jsx';
import Markdown from './Markdown.jsx';
import Mosaique from "./Mosaique.jsx";
import Code from "./Code.jsx";

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
                    
                </Slide>,
        () =>   <Slide>
            <Title text={"Voici une page en Markdown"} size={8} align="center"/>
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

### Un peu de code

\`\`\`javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("World");
\`\`\`

> Ceci est une citation.

[Un lien](https://wikipedia.com)
`
                                                } />
                                                
                    }
                    rightColumn={
                        <Markdown markdownText={
`
![Une image](/src/assets/presentation.png)

**Texte en gras** et *texte en italique*.

- [ ] Tâche non complétée
- [x] Tâche complétée
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