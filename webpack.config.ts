import path from 'path'
import { type WebpackConfiguration } from 'webpack-cli'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const port = env.port || 3000
    const mode = env.mode || 'development'
    const isDev = env.mode === 'development'

    const config: WebpackConfiguration = buildWebpackConfig({
        mode,
        paths,
        port,
        isDev,
    })

    return config
}
