import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

// const mockCssModules = require('mock-css-modules');
// mockCssModules.register(['.pcss', '.scss']);

process.env.NODE_ENV = 'test';

require('babel-register')();

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
	if (typeof global[property] === 'undefined') {
		exposedProperties.push(property);
		global[property] = document.defaultView[property];
	}
});

// mock localStorage && sessionStorage Web API
global.localStorage = global.sessionStorage = {
	getItem: key => this[key],
	setItem: (key, value) => {
		this[key] = value;
	},
	removeItem: key => {
		delete this[key];
	}
};

global.navigator = {
	userAgent: 'node.js'
};

// chai.use(chaiEnzyme());
configure({ adapter: new Adapter() });
