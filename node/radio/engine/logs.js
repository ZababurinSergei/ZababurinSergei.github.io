const NeoBlessed = require('neo-blessed');
const AbstractClasses = require('./shared/abstract-classes');
const { keys }  = require('../config');
const util = require('util')
/**
 * Class in charge of:
 * - view layer for the list of available songs
 */
class Logs extends AbstractClasses.TerminalItemBox {

    _createBoxChild(content) {

        return NeoBlessed.box({
            ...this._childConfig,
            top: this.box.children.length - 1,
            content: content
        });
    }
    scroll(scrollKey) {
        if (this.box.children.length > 2 && this._doChildrenOverflow()) {
            this._circleList(scrollKey); 
        }
        super.scroll(scrollKey);
    }
}

module.exports = Logs;
