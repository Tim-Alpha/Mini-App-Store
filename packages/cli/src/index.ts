// Minimal CLI scaffolding: bundle command will package a directory into a .zip
import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import * as archiver from 'archiver';

const program = new Command();

program
  .command('bundle <inputDir> <outputZip>')
  .description('Bundle a mini-app directory into a ZIP for upload')
  .action((inputDir, outputZip) => {
    const output = fs.createWriteStream(outputZip);
    const archive = archiver('zip', { zlib: { level: 9 }});
    output.on('close', () => {
      console.log(archive.pointer() + ' total bytes');
      console.log('Bundled to', outputZip);
    });
    archive.pipe(output);
    archive.directory(inputDir, false);
    archive.finalize();
  });

program.parse(process.argv);
