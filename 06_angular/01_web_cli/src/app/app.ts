import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Command } from './models/command';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  outputHistory = signal<string[]>([]);
  isProcessing = signal(false);

  commands: Command[] = [
    {
      command: 'ng',
      alias: ['angular', 'ng help'],
      description:
        'Angular CLI main entry command. Used to run sub-commands like serve, build, generate, test.',
      success: 'Angular CLI is ready.',
      example: 'ng serve',
    },
    {
      command: 'ng serve',
      alias: ['serve', 'ng s'],
      description: 'Builds the application and starts a development web server with live reload.',
      success: 'Development server running at http://localhost:4200/',
      example: 'ng serve --open',
    },
    {
      command: 'ng build',
      alias: ['build', 'ng b'],
      description: 'Compiles the application into an output directory for deployment.',
      success: 'Application bundle generation complete.',
      example: 'ng build --configuration production',
    },
    {
      command: 'ng generate',
      alias: ['generate', 'ng g'],
      description: 'Generates and/or modifies files based on a schematic.',
      success: 'Schematic generated successfully.',
      example: 'ng generate component user',
    },
    {
      command: 'ng generate component',
      alias: ['ng g c', 'generate component'],
      description: 'Generates a new Angular component.',
      success: 'Component generated successfully.',
      example: 'ng g c dashboard',
    },
    {
      command: 'ng generate service',
      alias: ['ng g s', 'generate service'],
      description: 'Generates a new Angular service.',
      success: 'Service generated successfully.',
      example: 'ng g s auth',
    },
    {
      command: 'ng test',
      alias: ['test', 'ng t'],
      description: 'Runs unit tests in the project using Karma.',
      success: 'Unit tests executed successfully.',
      example: 'ng test',
    },
    {
      command: 'ng e2e',
      alias: ['e2e'],
      description: 'Runs end-to-end tests using a configured testing platform.',
      success: 'End-to-end tests executed successfully.',
      example: 'ng e2e',
    },
    {
      command: 'ng lint',
      alias: ['lint'],
      description: 'Runs linting tools on Angular application code.',
      success: 'Linting completed with no errors.',
      example: 'ng lint',
    },
    {
      command: 'ng version',
      alias: ['version', 'ng v'],
      description: 'Outputs Angular CLI and project dependency versions.',
      success: 'Angular version information displayed.',
      example: 'ng version',
    },
    {
      command: 'ng update',
      alias: ['update'],
      description: 'Updates Angular and its dependencies to the latest versions.',
      success: 'Packages updated successfully.',
      example: 'ng update @angular/core @angular/cli',
    },
    {
      command: 'clear',
      alias: ['cls'],
      description: 'Clears the terminal screen.',
      success: '',
      example: 'clear',
    },
  ];

  constructor() {
    this.outputHistory.set(['Angular CLI v21.0.0', 'Type "ng help" for available commands.']);
  }

  executeCommand(input: string): void {
    const command = input.trim().toLowerCase();
    if (!command) return;
    this.isProcessing.set(true);
    this.outputHistory.update((history) => [...history, `$ ${command}`]);
    const cmd = this.commands.find((c) => c.command === command || c.alias.includes(command));
    if (cmd) {
      setTimeout(() => {
        this.outputHistory.update((h) => [...h, cmd.success]);
      }, 2000);
      setTimeout(() => {
        this.outputHistory.update((h) => [...h, cmd.description]);
      }, 3000);
      setTimeout(() => {
        this.outputHistory.update((h) => [...h, cmd.example]);
        this.isProcessing.set(false); 
      }, 4000);
    } 
    else {
      setTimeout(() => {
        this.outputHistory.update((h) => [...h, `'${command}' is not recognized as a command.`]);
        this.isProcessing.set(false); 
      }, 2000);
    }
  }
}
