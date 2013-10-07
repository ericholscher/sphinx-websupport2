  var popupTemplate = '\
    <div class="sphinx-comments" id="sc<%id%>">\
      <p class="sort-options">\
        Sort by:\
        <a href="#" class="sort-option byrating">best rated</a>\
        <a href="#" class="sort-option byascage">newest</a>\
        <a href="#" class="sort-option byage">oldest</a>\
      </p>\
      <div class="comment-header">Comments</div>\
      <div class="comment-loading" id="cn<%id%>">\
        loading comments... <img src="<%loadingImage%>" alt="" /></div>\
      <ul id="cl<%id%>" class="comment-ul"></ul>\
      <div id="ca<%id%>">\
      <p class="add-a-comment">Add a comment\
        (<a href="#" class="comment-markup" id="ab<%id%>">markup</a>):</p>\
      <div class="comment-markup-box" id="mb<%id%>">\
        reStructured text markup: <i>*emph*</i>, <b>**strong**</b>, \
        <tt>``code``</tt>, \
        code blocks: <tt>::</tt> and an indented block after blank line</div>\
      <form method="post" id="cf<%id%>" class="comment-form" action="">\
        <textarea name="comment" cols="80"></textarea>\
        <p class="propose-button">\
          <a href="#" id="pc<%id%>" class="show-propose-change">\
            Propose a change &#9657;\
          </a>\
          <a href="#" id="hc<%id%>" class="hide-propose-change">\
            Propose a change &#9663;\
          </a>\
        </p>\
        <textarea name="proposal" id="pt<%id%>" cols="80"\
                  spellcheck="false"></textarea>\
        <input type="submit" value="Add comment" />\
        <input type="hidden" name="node" value="<%id%>" />\
        <input type="hidden" name="parent" value="" />\
      </form>\
      </div>\
    </div>';

  var commentTemplate = '\
    <div id="cd<%id%>" class="sphinx-comment<%css_class%>">\
      <div class="vote">\
        <div class="arrow">\
          <a href="#" id="uv<%id%>" class="vote" title="vote up">\
            <img src="<%upArrow%>" />\
          </a>\
          <a href="#" id="uu<%id%>" class="un vote" title="vote up">\
            <img src="<%upArrowPressed%>" />\
          </a>\
        </div>\
        <div class="arrow">\
          <a href="#" id="dv<%id%>" class="vote" title="vote down">\
            <img src="<%downArrow%>" id="da<%id%>" />\
          </a>\
          <a href="#" id="du<%id%>" class="un vote" title="vote down">\
            <img src="<%downArrowPressed%>" />\
          </a>\
        </div>\
      </div>\
      <div class="comment-content">\
        <p class="tagline comment">\
          <span class="user-id"><%username%></span>\
          <span class="rating"><%pretty_rating%></span>\
          <span class="delta"><%time.delta%></span>\
        </p>\
        <div class="comment-text comment"><#text#></div>\
        <p class="comment-opts comment">\
          <a href="#" class="reply hidden" id="rl<%id%>">reply &#9657;</a>\
          <a href="#" class="close-reply" id="cr<%id%>">reply &#9663;</a>\
          <a href="#" id="sp<%id%>" class="show-proposal">proposal &#9657;</a>\
          <a href="#" id="hp<%id%>" class="hide-proposal">proposal &#9663;</a>\
          <a href="#" id="dc<%id%>" class="delete-comment hidden">delete</a>\
          <span id="cm<%id%>" class="moderation hidden">\
            <a href="#" id="ac<%id%>" class="accept-comment">accept</a>\
          </span>\
        </p>\
        <pre class="proposal" id="pr<%id%>">\
<#proposal_diff#>\
        </pre>\
          <ul class="comment-children" id="cl<%id%>"></ul>\
        </div>\
        <div class="clearleft"></div>\
      </div>\
    </div>';

  var replyTemplate = '\
    <li>\
      <div class="reply-div" id="rd<%id%>">\
        <form id="rf<%id%>">\
          <textarea name="comment" cols="80"></textarea>\
          <input type="submit" value="Add reply" />\
          <input type="button" value="Cancel" />\
          <input type="hidden" name="parent" value="<%id%>" />\
          <input type="hidden" name="node" value="" />\
        </form>\
      </div>\
    </li>';