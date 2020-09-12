import fs from 'fs';

export class CsvFileReader {

    data: string[][] = [];

    constructor(private filename: string) { }

    private read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map((row) => row.split(","))
    }
}