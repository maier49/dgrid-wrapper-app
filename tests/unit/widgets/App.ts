const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/framework/testing/harness';

import { v, w } from '@dojo/framework/widget-core/d';
import DgridWrapper from '@dojo/interop/dgrid/DgridWrapper';

import App from '../../../src/widgets/App';

describe('App', () => {
	it('should render widget', () => {
		const h = harness(() => w(App, {}));
		h.expect(() =>
			v('div', {}, [
				w(DgridWrapper, {
					columns: [{ field: 'first', label: 'First' }, { field: 'last', label: 'Last' }],
					data: [{ first: 'Bob', last: 'Thomson', id: 1 }, { first: 'Tom', last: 'Bobson', id: 2 }]
				})
			])
		);
	});
});
