import type { GitHubCommit } from './types';

const REPO = 'gluestack/gluestack-ui';
const BRANCHES = ['main', 'main-v5-alpha'];

/**
 * Fetch commits from multiple branches of the gluestack-ui repo.
 * Uses the GitHub REST API.
 */
export async function fetchGitHubCommits(
  token: string,
  fromDate: Date,
  toDate: Date,
  branches: string[] = BRANCHES
): Promise<GitHubCommit[]> {
  const allCommits: GitHubCommit[] = [];

  const since = fromDate.toISOString();
  const until = toDate.toISOString();

  for (const branch of branches) {
    const commits = await fetchBranchCommits(token, branch, since, until);
    allCommits.push(...commits);
  }

  return allCommits;
}

async function fetchBranchCommits(
  token: string,
  branch: string,
  since: string,
  until: string
): Promise<GitHubCommit[]> {
  const commits: GitHubCommit[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = new URL(`https://api.github.com/repos/${REPO}/commits`);
    url.searchParams.set('sha', branch);
    url.searchParams.set('since', since);
    url.searchParams.set('until', until);
    url.searchParams.set('per_page', perPage.toString());
    url.searchParams.set('page', page.toString());

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'gluestack-wrap-cli',
      },
    });

    if (!response.ok) {
      if (response.status === 404 && branch === 'main-v5-alpha') {
        // Branch might not exist yet — skip silently
        break;
      }
      const body = await response.text();
      throw new Error(`GitHub API error (${response.status}): ${body.substring(0, 200)}`);
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) break;

    for (const commit of data) {
      commits.push({
        sha: commit.sha?.substring(0, 7) || '',
        message: commit.commit?.message?.split('\n')[0] || '',
        author: commit.commit?.author?.name || '',
        date: commit.commit?.author?.date || '',
        branch,
        url: commit.html_url || '',
      });
    }

    if (data.length < perPage) break;
    page++;
  }

  return commits;
}
