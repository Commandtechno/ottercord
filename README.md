![Otter](https://util.bruhmomentlol.repl.co/twemoji/otter?size=128)

# Info

This Discord rest library was automatically generated from the [discord developer documentaition](https://github.com/discord/discord-api-docs) is a proof of concept, and is far from done

This is not intended for a production bot and does not support ratelimits or sending files for now

If you would like to see how this was created please see https://github.com/Commandtechno/ottercord/blob/master/build.js
I plan on improving on this as currently it is a very base level library with nothing useful

# Usage

Install it with `npm i ottercord`

```js
const ottercord = require("ottercord");
ottercord.token = "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs";
ottercord.getCurrentUser().then(console.log);
ottercord.createMessage("828868136387346445", { content: "among us" });
```

# Building

```bash
git clone https://github.com/Commandtechno/ottercord
cd ottercord
npm i
node build # Build with no logging
node build * # Build with logging some info
node build verbose # Build with logging all info
node build verbose --keep # Build with logging all info and don't delete files
```

# Contribution

All contributions are welcome by opening a pull request/issue or DMing me on Discord at Commandtechno#0841