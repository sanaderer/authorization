import axios from "axios";
import querystring from "querystring";
import { serialize } from "cookie";
import { generateRandomString } from "../utils/helpers";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;
const stateKey = "spotify_auth_state";

export default async function handler(req, res) {
  const state = generateRandomString(16);
  res.setHeader(
    "Set-Cookie",
    serialize(stateKey, state, {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 day
    })
  );

  const scope = "user-read-private user-read-email user-top-read user-follow-read";

  console.log("Client ID:", clientId);
  console.log("Redirect URI:", redirectUri);

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
      })
  ); 
}  

