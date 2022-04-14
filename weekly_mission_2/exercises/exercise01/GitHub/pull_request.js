const pullRequest = {
  title: 'Mi pull request',
  branchName: 'main',
  dateCreated: new Date(),
  status: "Open",
  repositoryNameAssociated: 'launch-x-explorers',

  getStatus: function() {
    return `Pull request status: ${this.status}`;
  },

  getTitleAndAutor: function() {
    return `Title: ${this.title}, Author: carlos0318`;
  }
}

console.log(pullRequest.getTitleAndAutor());
console.log(pullRequest.getStatus());
