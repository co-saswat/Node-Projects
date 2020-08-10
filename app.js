const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes')
const { demandOption } = require('yargs')

//Create add Command
yargs.command({
    command:'add',
    describe:'Add a New Note',
    handler:function(){
        console.log('Adding a new Note!')
    }
})

// Create remove Command
yargs.command({
    command:'remove',
    describe:'Remove a Note',
    handler:function(){
        console.log('Remove the Note!')
    }
})

//Create List Command
yargs.command({
    command:'list',
    describe:'List all Notes',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        },
        author:{
            describe:'Author of the Note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Title :' + argv.title)
        console.log('Author :' + argv.author)
    }
})

//Create Read Command
yargs.command({
    command:'read',
    describe:'Read all the Notes',
    handler:function(){
        console.log('Read all the Notes')
    }
})


yargs.parse()
