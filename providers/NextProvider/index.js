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
	 * Returns the first argv from the argvs list
	 *
	 * @method _getFirstArg
	 *
	 * @return {String}
	 *
	 * @private
	 * src: https://github.com/adonisjs/adonis-antl/blob/develop/providers/AntlProvider.js
	 */

	getFirstArg() {
		return process.argv.slice(2)[0] || '';
	}

	/**
	 * Register all the required providers
	 *
	 * @method register
	 *
	 * @return {void}
	 */
	async register() {
		const Helpers = this.app.use('Adonis/Src/Helpers');
		const Env = this.app.use('Adonis/Src/Env');

		this.app.singleton('Adonis/Addons/Next', app => {
			const dev = process.env.NODE_ENV !== 'production';
			const dirName = Env.get('NEXT_FOLDER', 'next');
			const dir = Helpers.appRoot(dirName);

			return next({ dev, dir });
		});

		this.app.alias('Adonis/Addons/Next', 'Next');
	}

	async boot() {
		const Helpers = this.app.use('Adonis/Src/Helpers');
		const Next = this.app.use('Next');

		if (Helpers.isAceCommand() && this.getFirstArg().includes('migration')) {
			return;
		}
		Next.prepare();
	}
}

module.exports = NextProvider;
