import {join} from 'path';
import {SeedConfig} from './seed.config';
import {InjectableDependency} from './seed.config.interfaces';

export class ProjectConfig extends SeedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
      'node_modules/font-awesome/css/font-awesome.min.css',
  ];

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      {src: 'font-awesome/css/font-awesome.min.css', inject: true},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }

}
