window.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.tab-item').forEach(function(element) {
		element.addEventListener('click', function(event) {
			event.preventDefault();
			old = this.parentNode.querySelector('.tab-item.active');

			old.classList.remove('active');
			this.classList.add('active');

			var selector = this.dataset.display;

			selector = '#' + selector;

			document.querySelector(selector).classList.remove('d-hide');

			this.parentNode.querySelectorAll('.tab-item:not(.active)').forEach(function(tab) {
				var tab_selector = tab.dataset.display;

				tab_selector = '#' + tab_selector;

				document.querySelector(tab_selector).classList.add('d-hide');
			});
		});
	});
});