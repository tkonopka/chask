import prettier from 'prettier/standalone'
import prettierBabel from 'prettier/parser-babel'
import './docs.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewMode: 'docs',
    options: {
        storySort: {
            order: [
                'Introduction',
                'Getting started',
                'Using the documentation',
                'Core',
                ['Overview', 'Components', 'Hooks', 'Common props', 'Themes', 'Examples'],
                'Addons',
                [
                    'Annotation',
                    ['Overview'],
                    'Band',
                    ['Overview'],
                    'Matrix',
                    ['Overview'],
                    'Themes',
                    ['Overview'],
                    'XY',
                    ['Overview'],
                ],
                'Gallery',
            ],
        },
    },
    docs: {
        transformSource: input =>
            prettier.format(input, {
                parser: 'babel',
                plugins: [prettierBabel],
            }),
    },
}