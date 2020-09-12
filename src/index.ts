import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("assets/football.csv");
const matches = reader.read();

console
    .log
    (matches);
