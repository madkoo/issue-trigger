
const { Octokit } = require('@octokit/core');

module.exports = ({context, core, options}) => {

    const octokit = new Octokit({
        auth: `${options.Token}`
      })
      
      await octokit.issues.createComment({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: issue.number,
        body: '/run-production-migration'
      })
}