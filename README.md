# Tasks

Just go in `tasks` folder and start to solve tasks

---
#### Test commands
You need ```jest``` to be installed globally on your system.


If so, you can easily test your solutions with following commands:
* ```npm test``` - run tests for all tasks
* ```npm test -- -t={taskname}``` - run tests for task *taskname*
* ```npm test -- --watch -t={taskname}``` - run tests for task *taskname* and watch for changes
---
#### Test cases
You may want to add some cases to tests. There's a section for it, after the `Test cases` label.

`const testcases` should be an `Array` of objects with `args` and `result` properties.
`args` should be an `Array`, it compares to `result` with jest's `.toStrictEqual`.
