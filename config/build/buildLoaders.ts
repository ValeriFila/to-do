import type webpack from 'webpack'

export const buildLoaders = (): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const tsLoader = {
        test: /\.([cm]?ts|tsx)$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node-modules/,
    }
    const stylesLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // creates 'style' nodes from JS strings
            'style-loader',
            {
                // translates CSS into common JS
                loader: 'css-loader',
                options: {
                    modules: false,
                },
            },
            {
                // compiles Sass to CSS
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        indentWidth: 4,
                        includePaths: ['absolute/path/a', 'absolute/path/b'],
                    },
                },
            },
        ],
        exclude: /node-modules/,
    }

    return [
        tsLoader,
        stylesLoaders,
        svgLoader,
        fileLoader,
    ]
}
