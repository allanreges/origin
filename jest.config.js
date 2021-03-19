module.exports = {
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.svg$': 'jest-svg-transformer'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	testPathIgnorePatterns: ['/node_modules/'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	collectCoverage: true,
	moduleNameMapper: {
		'\\.(jpg|png|css)$': '<rootDir>/spec/empty-module.js',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)':
			'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['<rootDir>spec/setup.js'],
	moduleDirectories: ['node_modules', 'src']
};
