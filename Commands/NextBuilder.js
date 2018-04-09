const { Command } = require('@adonisjs/ace');
const nextBuild = require('next/dist/server/build').default;

const Helpers = use('Helpers');
const Config = use('Config');

class NextBuilder extends Command {
  static get signature() {
    return 'nextBuild';
  }

  static get description() {
    return 'Build for production the next.js application.';
  }

  async handle() {
    const dir = Helpers.resourcesPath();
    const conf = Config.get('next');

    this.info('Building next.js application...');
    await nextBuild(dir, conf);
    this.info('done...');
  }
}

module.exports = NextBuilder;
