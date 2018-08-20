import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import DgridWrapper from '@dojo/interop/dgrid/DgridWrapper';
import { duplicate } from '@dojo/framework/core/lang';

export class App extends WidgetBase {
	private data = [{ first: 'Bob', last: 'Thomson', id: 1 }, { first: 'Tom', last: 'Bobson', id: 2 }];

	protected render() {
		return v('div', {}, [
			w(DgridWrapper, {
				features: {
					pagination: this.paginationOn,
					keyboard: this.keyboardOn
				},
				data: this.data,
				columns: this.columnDefs[this.columnToggle],

				rowsPerPage: this.rowsPerPage,
				previousNextArrows: this.previousNextArrows,
				firstLastArrows: this.firstLastArrows,
				pagingLinks: this.pagingLinks,

				pageSkip: this.pageSkip,
				tabIndex: 2
			}),
			v(
				'button',
				{
					onclick: this.addData
				},
				['Add Data']
			),
			v(
				'button',
				{
					onclick: this.swapColumnDef
				},
				['Change Columns']
			),
			v('p', [
				v(
					'button',
					{
						onclick: this.togglePagination
					},
					['Toggle Pagination']
				),
				v('div', this.renderPaginationButtons())
			]),
			v('p', [
				v(
					'button',
					{
						onclick: this.toggleKeyboard
					},
					['Toggle Keyboard']
				),
				v('div', this.renderKeyboardButtons())
			])
		]);
	}

	private renderPaginationButtons() {
		if (this.paginationOn) {
			return [
				v('button', { onclick: this.updateRowsPerPage }, ['Set Rows Per Page ' + this.nextRowsPerPage()]),
				v('button', { onclick: this.togglePreviousNextArrows }, ['Toggle Prev/Next Arrows']),
				v('button', { onclick: this.toggleFirstLastArrows }, ['Toggle First/Last Arrows']),
				v('button', { onclick: this.updatePagingLinks }, ['Set Paging Links # ' + this.nextPagingLinks()]),
			];
		} else {
			return [];
		}
	}

	paginationOn = true;
	private togglePagination(): void {
		this.paginationOn = !this.paginationOn;
		this.invalidate();
	}

	rowsPerPage = 5;
	private updateRowsPerPage(): void {
		this.rowsPerPage = this.nextRowsPerPage();
		this.invalidate();
	}

	private nextRowsPerPage() {
		return (this.rowsPerPage + 5) % 19;
	}

	previousNextArrows = true;
	private togglePreviousNextArrows(): void {
		this.previousNextArrows = !this.previousNextArrows;
		this.invalidate();
	}

	firstLastArrows = true;
	private toggleFirstLastArrows(): void {
		this.firstLastArrows = !this.firstLastArrows;
		this.invalidate();
	}

	pagingLinks = 2;
	private updatePagingLinks(): void {
		this.pagingLinks = this.nextPagingLinks();
		this.invalidate();
	}

	private nextPagingLinks() {
		let pagingLinks = (this.pagingLinks + 2) % 10;
		if (!pagingLinks) {
			pagingLinks = 2;
		}
		return pagingLinks;
	}

	private addData(): void {
		this.data = this.data.map((item) => {
			return duplicate(item);
		});
		for (let i = 0; i < 20; i++) {
			this.data.push({ first: 'Extra', last: 'Person', id: this.data.length + 1 });
		}
		this.invalidate();
	}

	columnToggle = 0;
	columnDefs = [
		[{ field: 'first', label: 'First' }, { field: 'last', label: 'Last' }],
		[{ field: 'id', label: 'ID' }, { field: 'first', label: 'First' }, { field: 'last', label: 'Last' }]
	];
	private swapColumnDef(): void {
		this.columnToggle = this.columnToggle ? 0 : 1;
		this.invalidate();
	}

	keyboardOn = false;
	private toggleKeyboard(): void {
		this.keyboardOn = !this.keyboardOn;
		this.invalidate();
	}

	private renderKeyboardButtons() {
		if (this.keyboardOn) {
			return [
				v('button', { onclick: this.updatePageSkip }, ['Set Page Skip ' + this.nextPageSkip()])
			];
		} else {
			return [];
		}
	}

	pageSkip = 3;
	private updatePageSkip(): void {
		this.pageSkip = this.nextPageSkip();
		this.invalidate();
	}

	private nextPageSkip() {
		return (this.pageSkip + 2) % 9;
	}
}

export default App;
