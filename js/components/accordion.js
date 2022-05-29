export class Accordion {
	constructor(accordionWrapper) {
		this.accordion = document.querySelector(accordionWrapper)
		this.accordionItemsNodes = this.accordion.querySelectorAll('.accordion__item')
		this.accordionItems = []
	}

	openAccordionItem(element) {
		element.node.style.height = `${element.itemHeight + element.contentHeight}px`
		element.title.classList.add('active')
		element.opened = true
	}
	closeAccordionItem(element) {
		element.node.style.height = `${element.itemHeight}px`
		element.title.classList.remove('active')
		element.opened = false
	}

	init() {
		for (const item of this.accordionItemsNodes) {
			const element = {
				node: item,
				content: item.querySelector('.accordion__content'),
				title: item.querySelector('.accordion__title'),
				itemHeight: item.offsetHeight,
				contentHeight: item.querySelector('.accordion__content').offsetHeight,
				opened: false,
			}

			this.accordionItems.push(element)
		}

		this.accordionItems.forEach((element) => {
			element.node.addEventListener('click', (e) => {
				if (element) {
					!element.opened ? this.openAccordionItem(element) : this.closeAccordionItem(element)
				}
			})
		})
	}
}