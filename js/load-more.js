$(function () {
	var BATCH_SIZE = 12;
	var $btn = $('#load-more-btn');

	function revealNextBatch(e) {
		if (e) e.preventDefault();
		$('.portfolio-wrap-2.d-none').slice(0, BATCH_SIZE).removeClass('d-none');
		if ($('.portfolio-wrap-2.d-none').length === 0) {
			$btn.closest('.row').hide();
		}
	}

	$btn.on('click', revealNextBatch);

	if ($('.portfolio-wrap-2.d-none').length === 0) {
		$btn.closest('.row').hide();
	}
});
