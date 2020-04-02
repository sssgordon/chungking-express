# How to contribute

For contributing to fill you should follow the below steps.

## Clone

Clone the [fill/askphill](https://github.com/askphill/fill) repository to your local machine.

## Branching

Create your own branch e.g.

```
feat/typescript
```

## Commits

For creating commit messages please use the [angular commit naming convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

Example:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Try to keep your commits small and focused.
It should be one feature addition or refactoring change.

## Update your branch

Make sure your branch contains the latest updates from master.

```
git fetch origin
```

Update your local master to keep it in sync.

```
git checkout master
git merge --no-ff origin/master
```

Update your working branch with the latest changes from master.

```
git checkout [branch]
git rebase --rebase-merges master
```

## Create a pull request

Push your branch with your changes to the repository and open a new pull request. Make sure you add a clear introduction with the purpose of your pull request.

Read more: [How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)

## Review

Once you've opened a pull request, the pull request will be reviewed by two other people.
If both the reviewers approve, your pull request will be merged! 🎉
