# Toy DiSARM deployment

## Get started

0. Build (or license and download) a [Caddy](https://caddyserver.com) server binary.
1. Get server started with `node api.js`
2. Convert templated Caddyfile.tmpl into Caddyfile with `cat Caddyfile.tmpl | DOMAIN=24.tmpry.com envsubst > Caddyfile`
3. Start caddy with `./caddy`
