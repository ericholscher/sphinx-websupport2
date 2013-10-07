module.exports = {
	initEvents: initEvents
}

function initEvents() {
	$(document).on("click", "a.sphinx-comment-open", function(event) {
		event.preventDefault();
		displayComment($(this).attr('id').substring('comment-open-'.length));
	})
	$(document).on("click", "a.sphinx-comment-close", function(event) {
		event.preventDefault();
		closeComment($(this).attr('id').substring('comment-close-'.length));
	})

	$('a.reply').live("click", function(event) {
	  event.preventDefault();
	  openReply($(this).attr('id').substring(2));
	});
	$('a.close-reply').live("click", function(event) {
	  event.preventDefault();
	  closeReply($(this).attr('id').substring(2));
	});
	$('a.comment-markup').live("click", function(event) {
	  event.preventDefault();
	  toggleCommentMarkupBox($(this).attr('id').substring(2));
	});
}

