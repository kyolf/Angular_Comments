let comment_app = angular.module('comment_app', []);

comment_app.service('Comment')

comment_app.controller('CommentController', function($scope) {
  $scope.comments = [];

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