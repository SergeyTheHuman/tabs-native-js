import { isWebp } from './components/isWebp.js'

isWebp()

const $tabs = document.querySelector('.tabs')

$tabs.addEventListener('click', (e) => {
	if (e.target.classList.contains('tabs__button')) {
		const btn = e.target
		const tabPath = btn.dataset.tabsPath
		const chosenBtn = $tabs.querySelector(`[data-tabs-path=${tabPath}]`)
		const chosenItem = $tabs.querySelector(`[data-tabs-target=${tabPath}]`)
		const currentBtn = $tabs.querySelector('.tabs__button--active')
		const currentItem = $tabs.querySelector('.tabs__item--active')

		changeTab(tabPath)
		function changeTab(path) {
			currentBtn.classList.remove('tabs__button--active')
			currentItem.classList.remove('tabs__item--active')

			chosenBtn.classList.add('tabs__button--active')
			chosenItem.classList.add('tabs__item--active')
		}
	}
})
