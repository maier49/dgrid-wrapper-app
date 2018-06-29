import WidgetBase from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import DgridWrapper from '@dojo/interop/dgrid/DgridWrapper'


/**
 * A "Hello World" widget that renders a spinning Dojo 2 logo and the text "Hello, Dojo 2 World!".
 *
 * Refer to the creating widgets tutorial for help: https://dojo.io/tutorials/003_creating_widgets/
 */
export class App extends WidgetBase {
	protected render() {
		return v('div', {}, [
			w(DgridWrapper, {
			  columns: [
          { field: 'first', label: 'First' },
          { field: 'last', label: 'Last' }
        ],
        data: [
          { first: 'Bob', last: 'Thomson', id: 1 },
          { first: 'Tom', last: 'Bobson', id: 2 }
        ]
			})
		]);
	}
}

export default App;
