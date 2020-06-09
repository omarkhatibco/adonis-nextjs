'use strict'

/**
 * adonis-nextjs-ContextBindings
 *
 * Jose Luis Tresserras
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

module.exports = function (Next, HttpContext) {
  /**
   * Get next instance for a given request based
   */
  HttpContext.getter('next', function () {
    return Next
  }, true)
}
