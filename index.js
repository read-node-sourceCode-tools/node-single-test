#!/usr/bin/env node

'use strict'

const program = require('commander')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const spawn = require('child_process').spawn

const log = console.log.bind(console)

program.command('help').action(() => {
  process.stdout.write('\n' + [
    'Usage: node-single [Command] [Options]',
    '',
    'Command:',
    '',
    '  run                  run a test case from node/test/',
    '    javascriptfile     a javascript file at node/test/',
    '  help                 help info',
    '    <none>             none extra params'
  ].join('\n') + '\n')
})

program.command('run').action( argv => {
  let filePath = process.cwd()
  let fileList = fs.readdirSync(filePath)
  let mode = void 0
  if(fileList.join('').match('build')){
  	let buildFolder = path.join(filePath,'./build')
  	let list = fs.readdirSync(buildFolder)
  	let basePath = path.join(filePath.split('test')[0], './out')
  	list.forEach(item => item.match(/debug|release/ig) && (mode = item))
  	if(fs.existsSync(basePath)){
      basePath = path.join(basePath, mode, './node')
      let ls = spawn(basePath, [argv], {
        stdio: ['inherit', null, 'inherit']
      })
      ls.stdout.on('data', data => {
        log(chalk.gray('[system out]') + ': ' + data)
      })
      ls.on('close', () => {
        
      })
  	}else{
  	  log(chalk.red('[error]: ') + 'Please use "./configure&&make -j4" in terminal first')
  	}
  }else{
  	log(chalk.red('[error]: ') + 'Please use "./configure&&make -j4 test" in terminal first')
  }
})


program.parse(process.argv)
