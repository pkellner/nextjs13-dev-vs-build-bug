# Problem of "npm start" from "npm run build" creating different results than "npm run dev"

Problem with Next.js 13.2 Experimental

Reproduce problem:

## Expected Behavior

Run with "npm run dev" 
Browse to localhost:3000/demo
Notice that `loading.tsx` appears for 2 seconds 
Then date is rendered as expected

## Problem Behavior

Run with "npm run build", then "npm start"
Browse to localhost:3000/demo
Notice that `loading.tsx` never appears
The date renders

GitHub Repo
https://github.com/pkellner/nextjs13-dev-vs-build-bug

This can be run in codesandbox here: https://codesandbox.io/s/github/pkellner/nextjs13-dev-vs-build-bug
(must select "use new codesandbox interface")

tested with 13.2.5-canary.16 