(function($) {

	$.fn.popup = function(options) {

		var defaults = {
			modalHeight: '200px',
		};

		var settings = $.extend(defaults, options);

		var $link = this;
		var $body = $('body');
		var $linkContent = $link.html();
		var $overlay = $('<div class="modal-overlay"></div>');

		var template = `<div class="modal-window">
							<div class="block-close">
								<a href="#"><span class="glyphicon glyphicon-remove close-modal"></span></a>
							</div>
							<p class="modal-text"></p>
						</div>`;

		var $modal = $(template).css({
			'height': settings.modalHeight
		});

		$modal.addClass(settings.modalClass);
		
		//show modal
		console.log('tttt^ ', $($link).parent().next('.btn'));
		// console.log('кфтвщт ', $('.btn').eq(0));
		var $button = $($link).parent().next('.btn');

		$($button).on('click', function(event) {
			
			$overlay.appendTo($body).hide();
			$overlay.fadeIn(400);
			$modal.appendTo($body).hide();
			$modal.fadeIn(800);
			$('.modal-text').html($linkContent);

		});

		//close modal
		$('body').on('click', '.close-modal', function(event) {
			event.preventDefault();
			$($modal).fadeOut(1200);
			$($overlay).fadeOut(600);
		});
	}
})(jQuery);