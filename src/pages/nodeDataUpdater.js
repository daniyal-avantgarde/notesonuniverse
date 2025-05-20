/*
Reads all mdx files in current folder
And writes to nodeData.json (also in current folder)
*/
console.log("NODE DATA UPDATER RUNNING")

import fs from 'fs'
import matter from 'gray-matter'

const files = fs.readdirSync(".").filter((file) => {return file.endsWith(".mdx")})
// a list of file names

const nodes = []
const links = []

files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8') // string of essay
    const {data} = matter(content)
    const id = file.replace(".mdx", "")
    const level = data.level || 1
    nodes.push({id: id, level: level})

    if (Array.isArray(data.graphLinks)) {
        data.graphLinks.forEach(target => links.push({source: id, target}))
    }
})

fs.writeFileSync('./nodeData.json', JSON.stringify({nodes, links}, null, 2)) 
// null means stringify, don't replace anything
// 2 means stringify, indent with 2 spaces 

