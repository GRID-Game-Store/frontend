export const getRecentGames = async (
  ) => {
    const recentGames = window.localStorage.getItem("recentGamesID");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_CLIENT}games?page=0&size=5&id=${recentGames}`,
    );
    const game = res.json();
    return game;
  };