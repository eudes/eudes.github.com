---
title: Notes on the development process
year: 13 March 2020
---
# Design strategies
## TDD, BDD, DBC
Starting a project from zero can be a little daunting. Design decisions taken early on, usually while prototyping, tend 
to stick for a long time on a project. Refactoring later on should be a common practice, but the reality is that there's
a certain inertia against doing major structural changes to an established codebase. Changes to an API, even if it's an
internal one, feel wrong and dangerous, and often feel not worth risking. This is why it's important to have a design
process that supports iterative changes. And if it produces the side effect of giving you tests that will help you with
future visits to the code, more power to you.

I've often tried to stay in the habit of doing TDD when working on projects, but for one reason or another, I always ended
up feeling that the process was more hindrance than help. I had a project structure in mind, learned from habit, that worked 
but didn't really lend itself to being tested, usually because classes would have too many dependencies and would take on
too much responsibility. This made setting up test an overwhelming and tiresome task, and often the tests themselves would
focus on the implementation details. And I couldn't really match my imagined structure to what the 'ideal' tests required.

## TODO more detail on how forcing a preconceived structure onto the project pushes you into bad habits and practices 

Recently, I found a design technique that helped me get unstuck from that vicious loop. Design by Coding is a design 
technique, much like Test Driven Development and Behaviour Driven Development, that gets you thinking about the right 
things at the right time. 

