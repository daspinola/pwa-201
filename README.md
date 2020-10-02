# Progressive web app - 201

This is a progressive web app project that takes advantage of caching json, the "message" event and push notifications.

## Make it run

- Clone the repository
- In the terminal install the dependencies with `npm install`
- Run `npm run server-debug`

If you need to generate the certs you can use:

```sh
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

To test using Chrome with invalid certs use the following to open the browser:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost
```

## Contributing

This is a reference repository for this [article](https://blog.logrocket.com/notifications-caching-and-messages-in-a-progressive-web-app-pwa/) so I will only look into accept any bug fix or improvement that doesn't vastly change the current content.

On the other hand, you're encouraged to fork and improve it in your own repository, let me know what you come up with ^^.
