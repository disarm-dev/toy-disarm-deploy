# Toy DiSARM deployment

## Get started

1. Build (or license and download) a [Caddy](https://caddyserver.com) server binary.
2. Convert templated Caddyfile.tmpl into Caddyfile with `cat Caddyfile.tmpl | DOMAIN=24.tmpry.com envsubst > Caddyfile`
3. Start caddy with `./caddy` (it will try to start/stop the node server as required - if this fails, need to do by hand)
