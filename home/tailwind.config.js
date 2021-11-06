/*
* A tailwinds config file used to generate atomic utility css classes.
* See: https://tailwindcss.com/docs/configuration/
* Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*
* Run '$ npm run css:dev' to compile changes in this file.
*/

module.exports = {
    purge: [
        '{,!(node_modules|_site)/**/}*.{html,md}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
              'primary':'#902eec',
              'secondary':'#f580f5',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
