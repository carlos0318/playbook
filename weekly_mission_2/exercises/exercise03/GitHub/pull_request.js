class PullRequest {
  constructor(title, branchName, dateCreated, status, repositoryNameAssociated) {
    this.title = title
    this.branchName = branchName
    this.dateCreated = new Date()
    this.status = status
    this.repositoryNameAssociated = repositoryNameAssociated
  }

  getStatus() {
    return `Pull request status: ${this.status}`;
  }

  getTitleAndAutor() {
    return `Title: ${this.title}, Author: carlos0318`;
  }
}

const pullRequest = new PullRequest('Mi pull request', 'main', "Open", 'launch-x-explorers');
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor());

