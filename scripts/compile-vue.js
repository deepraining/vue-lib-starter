const path = require('path');
const through = require('through2');
const PluginError = require('plugin-error');
const { createDefaultCompiler, assemble } = require('@vue/component-compiler');

const cwd = process.cwd();
const { relative } = path;

module.exports = function gulpVueCompiler() {
  /* eslint-disable no-param-reassign */

  return through.obj(function(file, encode, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError('compile-vue', 'Streams are not supported'),
      );
      return callback();
    }

    const filePath = relative(cwd, file.path);

    const compiler = createDefaultCompiler();
    const compileResult = compiler.compileToDescriptor(
      filePath,
      file.contents.toString(),
    );
    const assembleResult = assemble(compiler, filePath, compileResult);

    // .vue => .js
    file.path = `${file.path.slice(0, -3)}js`;

    file.contents = Buffer.from(assembleResult.code);

    return callback(null, file);
  });
};
