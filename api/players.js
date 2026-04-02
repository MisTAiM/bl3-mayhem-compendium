// Vercel serverless function — proxies Steam player count server-side
// No CORS issues since this runs on Vercel's servers
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');

  try {
    const steamRes = await fetch(
      'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=397540'
    );
    const steamData = await steamRes.json();
    const steam = steamData?.response?.player_count ?? null;

    // SteamSpy for estimated all-platform CCU (they aggregate multiple sources)
    const spyRes = await fetch(
      'https://steamspy.com/api.php?request=appdetails&appid=397540'
    );
    const spyData = await spyRes.json();
    const allPlatforms = spyData?.ccu ?? null;

    res.status(200).json({
      steam,
      allPlatforms,           // SteamSpy CCU — includes non-Steam sources in their model
      steamPct: allPlatforms && steam ? Math.round((steam / allPlatforms) * 100) : null,
      playstation: null,      // No public PSN concurrent API
      xbox: null,             // No public Xbox concurrent API
      note: 'Steam: live via Steam Web API. All-platform estimate via SteamSpy CCU (includes PC + console in model). PlayStation and Xbox concurrent APIs are not publicly accessible.',
      ts: Date.now()
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
