#!/usr/bin/env node

const qshell = require('qshell-bin')

const appRoot = require('app-root-path').require
const config = appRoot('/package.json')
const serviceVersion = require('git-rev-sync').short(null, 8)

let args = process.argv.slice(2)

const attrMap = {
  '--src-dir': 'build',
  '--bucket': 'dada-fe',
  '--key-prefix': `${config.name}/${serviceVersion}/`,
  '--rescan-local': true,
  '--skip-suffixes': '.html,.json,.map'
}

args.forEach(each => {
  const split = each.split('=')
  attrMap[split[0]] = split[1]
})

args = Object.keys(attrMap).reduce(
  (finalArgs, each) => {
    finalArgs.push(`${each}=${attrMap[each]}`)
    return finalArgs
  },
  ['qupload2']
)

qshell(args)
