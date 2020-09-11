import fs from 'fs'

const matches = fs.readFileSync("assets/football.csv", { encoding: "utf-8" }).split("\n").map((row) => row.split(","))

console.log(matches)
