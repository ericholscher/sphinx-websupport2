module.exports = {
  initMetaData: initMetaData,
  getComments: getComments,
  initOptions: initOptions
}

settings = require('./settings')
page = require('./page')

function getServerData(format) {
  return {
    "project": page.project,
    "version":  page.version,
    "page": page.page
  }
}

function initMetaData() {
  var get_data = getServerData()

  $.ajax({
   type: 'GET',
   url: settings.opts.metadataURL,
   data: get_data,
   crossDomain: true,
   xhrFields: {
     withCredentials: true,
   },
   success: function(data, textStatus, request) {
      settings.metadata = data
   },
   error: function(request, textStatus, error) {
     showError('Oops, there was a problem retrieving comment metadata.');
   },
  });
}

function initOptions() {
  var get_data = getServerData()

  $.ajax({
   type: 'GET',
   url: settings.opts.optionsURL,
   data: get_data,
   crossDomain: true,
   xhrFields: {
     withCredentials: true,
   },
   success: function(data, textStatus, request) {
    settings.opts = jQuery.extend(settings.opts, data);
   },
   error: function(request, textStatus, error) {
     showError('Oops, there was a problem retrieving the comment options.');
   },
  });
}

function getComments() {
  var get_data = getServerData()
  get_data['node'] = id;

  $.ajax({
   type: 'GET',
   url: opts.getCommentsURL,
   data: get_data,
   crossDomain: true,
   xhrFields: {
     withCredentials: true,
   },
   success: handleComments,
   error: function(request, textStatus, error) {
     showError('Oops, there was a problem retrieving the comments.');
   },
   dataType: 'json'
  });

}

function handleComments(data) {
   if (data.comments.length === 0) {
      console.log("No comments")
   } else {
     displayCommentIcon(data.comments)
   }
}

function displayCommentIcon(data) {
  // Cache stuff
  cached_comments = true
  cached_comment_data = data
  // Only show data on the toc trees
  for (index in top_list) {
      obj = top_list[index]
      var id = obj['id']
      var count = settings.metadata[id];
      var title = count + ' comment' + (count == 1 ? '' : 's');
      var image = count > 0 ? settings.opts.commentBrightImage : settings.opts.commentImage;
      addCommentIcon(id, title, image)
  }
}

function addCommentIcon(id, title, image) {
  $("#" + id)
      .append(
        $(document.createElement('a')).attr({
          href: '#',
          'class': 'sphinx-comment-open',
          id: 'comment-open-' + id
        })
          .append($(document.createElement('img')).attr({
            src: image,
            alt: 'comment',
            title: title
          }))

      )
      .append(
        $(document.createElement('a')).attr({
          href: '#',
          'class': 'sphinx-comment-close hidden',
          id: 'comment-close-' + id
        })
          .append($(document.createElement('img')).attr({
            src: settings.opts.closeCommentImage,
            alt: 'close',
            title: 'close'
          }))
      );
}
