'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
* Require the file system module
*/
const fs = require('fs');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'CWDS Design');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'src/components'));
/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'src/docs'));

/* Use the React adapter as the template engine (https://github.com/sumul/fractal-react-adapter) */
const reactAdapter = require('fractal-react-adapter')();
fractal.components.engine(reactAdapter);

/* Set the component extension as JSX */
fractal.components.set('ext', '.jsx');

/* Set default status to prototype */
fractal.components.set('default.status', 'prototype');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Fractal CLI export command.
 *
 * Exports all view templates into a directory in the root of the project.
 * Templates are exported in a flat structure with the filenames in the format of {handle}.{ext}
 *
 * Any @handle references in the templates (for partial includes etc) are re-written
 * to reference the appropriate template path.
 *
 * Run by using the command `fractal export` in the root of the project directory.
 */
function exportTemplates(args, done) {

    const app = this.fractal;
    const items = app.components.flattenDeep().toArray();
    const jobs = [];

    for (const item of items) {

        const exportPath = path.join('./', args.options.output || 'exported', `${item.alias || item.handle}${app.get('components.ext')}`);
        const job = item.getContent().then(str => {
            return str.replace(/\@([0-9a-zA-Z\-\_]*)/g, function(match, handle){
                return `${handle}${app.get('components.ext')}`;
            });
        }).then(str => {
            return fs.writeFileSync(exportPath, str);
        });

        jobs.push(job);
    }

    return Promise.all(jobs);
}

fractal.cli.command('export', exportTemplates,  {
    description: 'Export all component templates',
    options: [
        ['-o, --output <output-dir>', 'The directory to export components into, relative to the CWD.'],
    ]
});
