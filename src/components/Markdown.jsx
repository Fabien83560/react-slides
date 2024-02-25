import ReactMarkdown from 'react-markdown'

export default function Markdown({ }) {
    const text = `
# Titre principal

Ceci est un paragraphe en **Markdown**!

## Sous-titre

- Une liste
- Avec quelques éléments
- Un autre élément

### Un peu de code

\`\`\`javascript
const example = "Ceci est un exemple de code";
console.log(example);
\`\`\`

> Ceci est une citation.

[Un lien](http://example.com)

![Une image](/src/assets/presentation.png)

**Texte en gras** et *texte en italique*.

- [ ] Tâche non complétée
- [x] Tâche complétée

`;

    // Styles Tailwind pour chaque type d'élément Markdown
    const components = {
        h1: ({node, ...props}) => <h1 className="text-4xl font-bold my-4" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-3xl font-bold my-3" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-2xl font-bold my-2" {...props} />,
        h4: ({node, ...props}) => <h4 className="text-xl font-bold my-2" {...props} />,
        h5: ({node, ...props}) => <h5 className="text-lg font-bold my-1" {...props} />,
        h6: ({node, ...props}) => <h6 className="text-md font-bold my-1" {...props} />,
        p: ({node, ...props}) => <p className="my-2 text-base" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc list-inside my-2" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal list-inside my-2" {...props} />,
        li: ({node, ...props}) => <li className="ml-4" {...props} />,
        a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
        img: ({node, ...props}) => <img className="my-4 mx-auto" {...props} />,
        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4" {...props} />,
        code: ({node, inline, className, children, ...props}) => {
            if (inline) {
                return <code className="bg-gray-200 px-2 py-1 rounded text-sm" {...props}>{children}</code>;
            }
            return <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto my-4"><code className="whitespace-pre-wrap" {...props}>{children}</code></pre>;
        },
        em: ({node, ...props}) => <em className="italic" {...props} />,
        strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
        del: ({node, ...props}) => <del className="line-through" {...props} />,
        input: ({node, ...props}) => {
            if (props.type === "checkbox") {
                return <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" {...props} disabled />;
            }
        }
    };

    return (
        <ReactMarkdown components={components}>{text}</ReactMarkdown>
    );
}
