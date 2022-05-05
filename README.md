SvelteKit appears to call `getSession()` before endpoints and it should be calling them after.

Repro:

1. `git clone https://github.com/coryvirok/svelte-getsession-order-bug.git`
2. `cd svelte-getsession-order-bug && npm i`
3. `npm run dev`
4. open "http://localhost:3000" - executes a shadow endpoint `src/routes/index.js`
5. open "http://localhost:3000/foo" - executes a non-shadow endpoint `src/routes/foo.js`

You will see the following print out in your server-side console logs:

**for GET /**
```
handle() - 1st
getSession() - 3rd
GET / - 2nd
handle() - 4th
```

**for GET /foo**
```
handle() - 1st
GET / - 2nd
handle() - 4th
```
