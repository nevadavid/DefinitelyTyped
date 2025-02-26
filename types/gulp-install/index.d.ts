// Type definitions for gulp-install v0.6.0
// Project: https://www.npmjs.com/package/gulp-install
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

interface Options {
    production?: boolean | undefined;
    ignoreScripts?: boolean | undefined;
    noOptional?: boolean | undefined;
    allowRoot?: boolean | undefined;
    args?: string | string[] | undefined;
}

interface Install {
    (options?: Options): NodeJS.ReadWriteStream;
}

declare const install: Install;
export = install;
