import { SITE_CONFIG } from "@/lib/data";
import ByTheNumbersClient from "@/components/sections/ByTheNumbersClient";

interface GitHubUserResponse {
  public_repos?: number;
  followers?: number;
}

async function getGitHubStats(): Promise<{
  publicRepos: number | null;
  followers: number | null;
}> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${SITE_CONFIG.githubUsername}`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!res.ok) {
      return { publicRepos: null, followers: null };
    }

    const data = (await res.json()) as GitHubUserResponse;
    return {
      publicRepos: typeof data.public_repos === "number" ? data.public_repos : null,
      followers: typeof data.followers === "number" ? data.followers : null,
    };
  } catch {
    return { publicRepos: null, followers: null };
  }
}

export default async function ByTheNumbers() {
  const { publicRepos, followers } = await getGitHubStats();
  return (
    <ByTheNumbersClient publicRepos={publicRepos} followers={followers} />
  );
}
