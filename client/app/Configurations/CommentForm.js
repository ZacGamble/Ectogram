export const commentForm = /* html */`
<form onsubmit="app.commentsController.addComment()">
  <div class="mb-3">
    <label for="commentContent" class="form-label"></label>
    <input type="text" class="form-control" name="commentContent" id="" aria-describedby="helpId" placeholder="add a new comment">
    <small id="helpId" class="form-text text-muted"></small>
  </div>
</form>
`
