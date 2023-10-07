import svg from 'rollup-plugin-svg'
import copy from 'rollup-plugin-copy'
import watch from 'rollup-plugin-watch'
import cleaner from 'rollup-plugin-cleaner'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer'
import jsx from 'acorn-jsx';
import multiInput from 'rollup-plugin-multi-input'
import typescript from '@rollup/plugin-typescript'
import postHtml from 'rollup-plugin-posthtml-template'

export default {
	input: [
		'index.ts',
		'component/**/*.(ts|tsx)',
		'packages/**/src/*.(ts|tsx)',
		// 'component/**/*.tsx',
		// 'src/**/**/*.html'
	],
	// cache: false,
	plugins: [
		cleaner({
			targets: ['./dist'],
			silent: false
		}),
		typescript({
			tsconfig: './tsconfig.json',
			exclude: ['**/stories'],
			// cacheDir: '.rollup.tscache',
			// compilerOptions: { jsx: 'react-jsx', module: 'CommonJS' }
		}),
		multiInput.default({ relative: '.' }),
		svg(),
		postHtml(),
		// watch({ dir: 'assets' }),
		copy({
			targets: [
				{
					src: 'package.json',
					dest: 'dist'
				},
				{
					src: 'package-lock.json',
					dest: 'dist'
				},
				{
					src: 'types',
					dest: 'dist'
				}
			]
		}),
		visualizer.default({
			filename: 'dist/bundle-analysis.html',
			open: false,
		})
	],
	output: {
		dir: 'dist/',
		format: 'es',
		sourcemap: true
	}
}
