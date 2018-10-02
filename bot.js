
console.log("bot is starting....");


const Mastodon = require('mastodon-api');
const env = require('dotenv');
env.config();

const M = new Mastodon({
    client_key: process.env.CLIENT_KEY,
    client_secret: process.env.CLIENT_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    api_url: 'https://botsin.space/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
  });



M.post('statuses',{ status: "In future i am gonna control every bot twice" }, (err,data) => {
    if(err) {
        console.log(err);

    } else {
        console.log(data);
    }

})




