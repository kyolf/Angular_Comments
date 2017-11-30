let comment_app = angular.module('comment_app', []);

comment_app.service('commentObj', function() {
  this.comments = [];

  this.getComments = function() {
    return this.comments;
  };
});

comment_app.controller('CommentController', function($scope, commentObj) {
  $scope.comments = commentObj.getComments();

  $scope.addComments = function() {
    $scope.comments.push({
      text: $scope.newText,
      likes: 0
    });
    $scope.newText = '';
  };

  $scope.addLikes = function(index) {
    $scope.comments[index].likes++;
  };
});