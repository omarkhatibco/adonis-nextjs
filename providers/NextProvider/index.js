'use strict';

/**
 * adonis-nextjs-provider
 *
 * (c) Omar Khatib <omar@omarkhatib.co.>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const next = require('next');
const { ServiceProvider } = require('@adonisjs/fold');

class NextProvider extends ServiceProvider {
  /**
   * Register all the required providers
   *
   * @method register
   *
   * @return {void}
   */
  async register() {
    this.app.singleton('Adonis/Addons/Next', app => {
      const dev = process.env.NODE_ENV !== 'production';
      const dir = app.use('Adonis/Src/Helpers').appRoot('src');
      const Nextapp = next({ dev, dir });
      Nextapp.prepare();
      return Nextapp;
    });
    this.app.alias('Adonis/Addons/Next', 'Next');
  }
}

module.exports = NextProvider;
