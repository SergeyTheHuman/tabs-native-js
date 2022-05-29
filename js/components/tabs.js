export class Tabs {
	constructor(tabsWrapper) {
		this.tabs = document.querySelector(tabsWrapper)
		this.currentBtn = this.tabs.querySelector('.my-tabs__button--active')
		this.currentItem = this.tabs.querySelector('.my-tabs__item--active')
	}
	changeTab(path) {
		this.currentBtn.classList.remove('my-tabs__button--active')
		this.currentItem.classList.remove('my-tabs__item--active')
		this.currentBtn = this.tabs.querySelector(`[data-tabs-path=${path}]`)
		this.currentItem = this.tabs.querySelector(`[data-tabs-target=${path}]`)
		this.currentBtn.classList.add('my-tabs__button--active')
		this.currentItem.classList.add('my-tabs__item--active')
	}
	init() {
		this.tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('my-tabs__button')) {
				const btn = e.target
				const tabPath = btn.dataset.tabsPath
				this.changeTab(tabPath)
			}
		})
	}
}