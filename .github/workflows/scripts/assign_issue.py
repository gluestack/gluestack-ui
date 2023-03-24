import os
import random
from github import Github

# Define the GitHub organization, team slug, and member exclusion list
org_name = 'gluestack'
team_slug = 'gluestack-ui-support'
exclude_members = []

# Connect to the GitHub API
token = os.environ['GITHUB_TOKEN']
g = Github(token)

# Get the team object for the specified team slug
org = g.get_organization(org_name)
team = org.get_team_by_slug(team_slug)

# Get the list of members in the team (excluding those to be ignored)
members = [member.login for member in team.get_members() if member.login not in exclude_members]

# Get the repository and issue objects
repo_name = os.environ['GITHUB_REPOSITORY']
repo = g.get_repo(repo_name)
issue_number = int(os.environ['ISSUE_NUMBER'])
issue = repo.get_issue(issue_number)

# Get the current assignees of the issue
assignees = issue.assignees

# Determine the next team member to assign the issue to (in round-robin order)
if assignees:
    last_assigned = assignees[-1].login
    next_assignee_idx = (members.index(last_assigned) + 1) % len(members)
else:
    next_assignee_idx = random.randint(0, len(members) - 1)
next_assignee = members[next_assignee_idx]

# Assign the issue to the next team member
user = g.get_user(next_assignee)
issue.edit(assignees=list(assignees) + [user])
