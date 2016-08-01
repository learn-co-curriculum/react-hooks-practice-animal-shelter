# React Props and State Lab

## Objectives

1. Practice building a small React application
2. Practice updating state in response to an XHR payload
3. Practice passing props among components to handle updates

## Overview

This is students' first big React lab. We want them to practice not only using
props and state to manage application state, but we want them to be sending form
data off to an API (we can either provide or walk them through a basic Express
server with in-memory data) and updating the application state based on the
response. It can all be pretty basic user-creation stuff -- nothing complicated
-- but we want to make sure that they get a lot of experience with different
parts of the component lifecycle.

This lab provides good opportunities for introducing `shouldComponentUpdate()`
and `componentDidMount()` (for initialization) for example.

I leave the narrative domain up to you, but the main thing is having students
write actions that use `fetch()` to call an API, and that then use `setState()`
to render the response (and pass parts of it down as props as necessary).

This lab is meant to be pretty challenging.

## Resources

- [Initial data with AJAX](https://facebook.github.io/react/tips/initial-ajax.html)
- [Forms](https://facebook.github.io/react/docs/forms.html)
- [Events](https://facebook.github.io/react/docs/events.html)
