const issue = {
  title: 'Mi issue',
  repositoryNameAssociated: 'Launch X',
  status: 'Open',
  numberOfComments: 10,
  labels: ["bug", "feature-request", ""],
  author: 'carlosortega',
  dateCreated: new Date(),
  lastUpdated: new Date(),

  getTitleAndAuthor: function() {
    return `Title of the issue: ${this.title} and author: ${this.author}`;
  },

  getGeneralInfo: function() {
    return `Labels: ${this.labels}, status: ${this.status}, number of comments: ${this.numberOfComments}`;
  }
}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
console.log(`Last Updated: ${issue.lastUpdated}`);
