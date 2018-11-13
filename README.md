# Toy DiSARM deployment

## Get started

1. Build (or license and download) a [Caddy](https://caddyserver.com) server binary.
2. Convert templated Caddyfile.tmpl into Caddyfile with `DOMAIN=24.tmpry.com ./write_Caddyfile.sh`
3. Start API server with `node app.js`
4. Start caddy with `./caddy`
