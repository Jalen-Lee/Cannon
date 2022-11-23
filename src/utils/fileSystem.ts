import fse, {WriteFileOptions} from "fs-extra";
import {resolve} from "path";
import fs from "node:fs";
import {promisify} from "node:util";
import {isWindows} from ".";

/**
 * @description 同步读取文件
 * @param p
 */
export function readFile(p: string) {
    try {
        return fse.readFileSync(p, 'utf-8')
    } catch (err) {
        console.log('[Error]:readFile', err)
    }
}

/**
 * @description 同步写入文件到系统
 * @param p
 * @param data
 * @param options
 */
export function writeFile(p: string, data: string | NodeJS.ArrayBufferView){
    try {
        fse.writeFileSync(p,data,{
            flag:'w+',
            encoding:'utf-8',
        })
    }catch (err){
        console.log('[Error]:writeFile',err)
    }
}

export interface FileInfo {
    name: string,
    fullPath: string,
    dirent: fse.Dirent,
    isFile: boolean,
    isDir: boolean
}

export type readFilesInfo = Array<FileInfo>

/**
 * @description 读取单层目录下的所有文件
 * @param p
 */
export function readFiles(p: string):readFilesInfo {
    try {
        const dir = fse.readdirSync(p, {
            encoding: 'utf-8',
            withFileTypes: true
        })
        return dir.map(i => {
            return {
                name: i.name,
                fullPath: resolve(p, i.name),
                dirent: i,
                isFile: i.isFile(),
                isDir: i.isDirectory()
            }
        })
    } catch (e) {
        console.log('[Error]:readDir', e)
    }
}

const GRACEFUL_REMOVE_DIR_TIMEOUT = 5000
function gracefulRemoveDir(
  dir: string,
  cb: (error: NodeJS.ErrnoException | null) => void
) {
    const start = Date.now()
    let backoff = 0
    fs.rm(dir, { recursive: true }, function CB(er) {
        if (er) {
            if (
              (er.code === 'ENOTEMPTY' ||
                er.code === 'EACCES' ||
                er.code === 'EPERM') &&
              Date.now() - start < GRACEFUL_REMOVE_DIR_TIMEOUT
            ) {
                setTimeout(function () {
                    fs.rm(dir, { recursive: true }, CB)
                }, backoff)
                if (backoff < 100) backoff += 10
                return
            }

            if (er.code === 'ENOENT') {
                er = null
            }
        }

        if (cb) cb(er)
    })
}

export const removeDir = isWindows
  ? promisify(gracefulRemoveDir)
  : function removeDirSync(dir: string) {
      fs.rmSync(dir, { recursive: true, force: true })
  }
