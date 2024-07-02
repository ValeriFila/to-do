import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer.ts'
import { buildLoaders } from './buildLoaders.ts'
import { buildPlugins } from './buildPlugins.ts'
import { buildResolvers } from './buildResolvers.ts'
import { type BuildOptions } from './types/config.ts'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {
        paths,
        mode,
        isDev,
    } = options

    return {
        mode,
        devtool: 'inline-source-map',
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(options),
        devServer: buildDevServer(options),
    }
}
