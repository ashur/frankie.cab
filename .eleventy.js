module.exports = function( config )
{
	return {
		dir: {
			input: 'src',
			output: 'dist',
		},

		templateFormats: ['njk', 'md'],
	};
};
