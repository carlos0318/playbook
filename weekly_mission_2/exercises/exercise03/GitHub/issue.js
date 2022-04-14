class Issue {
  constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author) {
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status = status
    this.numberOfComments = numberOfComments
    this.labels = labels
    this.author = author
    this.dateCreated = new Date()
    this.lastUpdate = new Date()
  }

  getTitleAndAuthor() {
    return `Title of the issue: ${this.title} and author: ${this.author}`;
  }

  getGeneralInfo() {
    return `Labels: ${this.labels}, status: ${this.status}, number of comments: ${this.numberOfComments}`;
  }
}

const issue = new Issue('Mi issue', 'Launch X', 'Open', 10, ["bug", "feature-request", ""], 'carlosortega')
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
