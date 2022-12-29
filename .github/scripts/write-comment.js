
const { Octokit } = require("@octokit/rest");

module.exports = async ({ github, context, options }) => {

    const octokit = new Octokit({
        auth: options.Token
      })
      
      await octokit.issues.createComment({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        body: 'wil lthis work'
      })
}
