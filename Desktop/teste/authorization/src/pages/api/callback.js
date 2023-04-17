import axios from "axios";
import querystring from "querystring";
import { parse } from "cookie";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;
const stateKey = "spotify_auth_state";

export default async function handler(req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = parse(req.headers.cookie || "")[stateKey] || null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    try {
      const tokenResponse = await axios({
        method: "post",
        url: "https://accounts.spotify.com/api/token",
        params: {
          code: code,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        },
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const access_token = tokenResponse.data.access_token;
      const refresh_token = tokenResponse.data.refresh_token;

      try {
        const topArtistsResponse = await axios({
          method: "get",
          url: "https://api.spotify.com/v1/me/top/artists?limit=5",
          headers: {
            Authorization: "Bearer " + access_token,
          },
        });

        const artistas = topArtistsResponse.data.items.map((item) => item.name);
        const tamanho = topArtistsResponse.data.items.length;

        res.json({ artistas: artistas, tamanho: tamanho });
      } catch (error) {
        console.error("Error accessing Spotify Web API:", error);
        res.status(500).send({ error: "Error accessing Spotify Web API" });
      }
    } catch (error) {
      console.error("Error accessing Spotify Web API:", error.response.data);
      res.status(500).send({
        error: "Error accessing Spotify Web API",
        details: error.response.data,
      });
    }
  }
}