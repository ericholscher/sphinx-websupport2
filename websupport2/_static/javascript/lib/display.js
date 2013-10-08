module.exports = {
    initDisplay: initDisplay,
    displayComments: displayComments,
    closeComments: closeComments
}

function initDisplay() {
    $('body').append("<div id='current-comment'></div>");
}

function closeComments() {
  $.pageslide.close()
}

function displayComments(id) {
  get_data = {
    'node': id
  }

  $.ajax({
   type: 'GET',
   url: settings.opts.getCommentsURL,
   data: get_data,
   crossDomain: true,
   xhrFields: {
     withCredentials: true,
   },
   success: function(data) {
       handleComments(id, data)

   },
   error: function(request, textStatus, error) {
     showError('Oops, there was a problem retrieving the comments.');
   },
   dataType: 'json'
  });
}


function handleComments(id, data) {
    showComments(id, data.comments)
}



function showComments(id, comment_data) {
  $('#current-comment').html("<h1> Comments </h1>")
  for (index in comment_data) {
      obj = comment_data[index]
      console.log(obj)
      to_append = "<span class='comment'>"
      to_append += obj['date'] + "<br>"
      to_append += obj['text']
      $("#current-comment").append(to_append)
  }
  var reply = '\
      <div class="reply-div" id="comment-reply-' + id + '>">\
        <form class= "comment-reply-form" id="comment-reply-form-' + id + '">\
          <textarea name="comment" cols="40"></textarea>\
          <input type="submit" value="Add Comment" />\
          <input type="hidden" name="node" value="' + id + '" />\
        </form>\
      </div>'

  $("#current-comment").append(reply)
  $.pageslide({direction: 'left', href:'#current-comment' })
}

// Don't need this since its in the page.

/*
function setUpPageslide() {
    $.ajax({
        url: "https://api.grokthedocs.com/static/javascript/pageslide/jquery.pageslide.js",
        crossDomain: true,
        dataType: "script",
        cache: true,
        success: function () {
            console.log("Loaded pageslide")
            $('head').append('<link rel="stylesheet" href="https://api.grokthedocs.com/static/css/top.css" type="text/css" />');
            $('body').append("<div id='gtd-top'></div>");
        },
        error: function (e) {
            console.log("OMG FAIL:" + e)
        }

    });
}
*/