import type webpack from 'webpack'
import type { BuildOptions } from 'config/build/types/config'

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@': options.paths.src,
        },
    }
}
