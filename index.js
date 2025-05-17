import sapp from "@randajan/simple-app";
import { argv } from "@randajan/simple-app/argv";

import ImportGlobPlugin from 'esbuild-plugin-import-glob';
import { sassPlugin } from 'esbuild-sass-plugin';

const { isBuild } = argv;

sapp({
    isBuild,
    plugins:[
        ImportGlobPlugin.default(),
        sassPlugin()
    ],
    fe:{
        loader:{
            ".js":"jsx",
            ".md":"text",
            ".json":"text",
            '.png': 'file',
            ".jpg": "file",
            ".gif": "file",
            ".eot": "file",
            ".woff": "file",
            ".ttf": "file",
            ".svg": "file"
        }
    }
})