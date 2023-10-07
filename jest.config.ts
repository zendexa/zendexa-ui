/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from '@jest/types'

export default {
	verbose: true,
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testPathIgnorePatterns: ['dist', 'src'],
	snapshotSerializers: ['jest-serializer-html'],
	// testMatch: ['tests/jest/**/*.test.ts'],
} as Config.InitialOptions
