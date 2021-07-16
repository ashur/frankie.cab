module.exports = function( config )
{
	config.addPassthroughCopy( 'src/images' );
	config.addPassthroughCopy( 'src/audio' );

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},

		templateFormats: ['njk', 'md'],
	};
};
