import os from "node:os";
import path from "node:path";
import NativeModule from "node:module";

export const isWindows = os.platform() === 'win32'

export function slash(p: string): string {
  return p.replace(/\\/g, '/')
}

export function isObject(value: unknown): value is Record<string, any> {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * @param {string} str
 * @returns {boolean}
 */
export function isAbsolutePath(str) {
  return path.posix.isAbsolute(str) || path.win32.isAbsolute(str);
}

const RELATIVE_PATH_REGEXP = /^\.\.?[/\\]/;

/**
 * @param {string} str
 * @returns {boolean}
 */
export function isRelativePath(str) {
  return RELATIVE_PATH_REGEXP.test(str);
}

export function normalizePath(p: string): string {
  return path.posix.normalize(isWindows ? slash(p) : p)
}

export const filterDuplicateOptions = <T extends object>(options: T) => {
  for (const [key, value] of Object.entries(options)) {
    if (Array.isArray(value)) {
      options[key as keyof T] = value[value.length - 1]
    }
  }
}

export function evalModuleCode(loaderContext:any, code:string, filename:string) {
  // @ts-ignore
  const module = new NativeModule(filename, loaderContext);

  // @ts-ignore
  module.paths = NativeModule._nodeModulePaths(loaderContext.context); // eslint-disable-line no-underscore-dangle
  module.filename = filename;
  // @ts-ignore
  module._compile(code, filename); // eslint-disable-line no-underscore-dangle

  return module.exports;
}
