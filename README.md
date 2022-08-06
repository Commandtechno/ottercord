![Otter](https://util.bruhmomentlol.repl.co/twemoji/otter?size=128)

# Info

This Discord rest library was automatically generated from the [discord developer documentation](https://github.com/discord/discord-api-docs) and is a proof of concept

This is not intended for a production bot though I plan on improving this

If you would like to see how this was created please see https://github.com/Commandtechno/ottercord/blob/master/build.js

Documentation: https://ottercord.bruhmomentlol.repl.co/

NOTE: This library does not support interactions as of now

# Usage

Install it with `npm i ottercord`

```js
const ottercord = require("ottercord");
const client = ottercord("MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs");
client.getCurrentUser().then(console.log);
client.createMessage("828868136387346445", { content: "among us" });
```

# Building

```bash
git clone https://github.com/Commandtechno/ottercord # Clone repository
cd ottercord # Enter directory
npm i # Install dependencies
node build # Build with no logging
node build * # Build with logging some info
node build verbose # Build with logging all info
node build -p # Build with creating parsed.json with the parsed docs
node build -d # Build with keeping the docs folder
node build -g # Also generates the website for documentation
node build -t # Keep typescript file
```

# Contribution

All contributions are welcome by opening a pull request/issue or DMing me on Discord at Commandtechno#0841
