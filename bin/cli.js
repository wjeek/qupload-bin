#!/usr/bin/env node

const path = require('path')
const { spawn } = require('child_process')

const manifest = require('qshell-bin/manifest.json')
const appRoot = require('app-root-path').require
const config = appRoot('/package.json')
const serviceVersion = require('git-rev-sync').short()

const bin = path.join(
  __dirname,
  '../node_modules/qshell-bin',
  manifest.destination,
  manifest.filename[process.platform][process.arch]
)

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

spawn(bin, args, { stdio: 'inherit' })
