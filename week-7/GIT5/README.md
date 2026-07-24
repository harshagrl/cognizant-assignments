# Exercise 5: Clean Up and Push to Remote Git

## Objective

Learn how to clean up the local Git repository, synchronize with the remote repository, and push local changes to the remote repository.

---

## Prerequisites

- Git installed
- Local Git repository
- Remote GitHub/GitLab repository

---

## Step 1: Verify Repository Status

Check whether the working directory is clean.

```bash
git status
```

Expected output:

```text
On branch main
nothing to commit, working tree clean
```

---

## Step 2: List All Branches

List all local branches.

```bash
git branch
```

List both local and remote branches.

```bash
git branch -a
```

---

## Step 3: Pull Latest Changes

Download and merge the latest changes from the remote repository.

```bash
git pull origin main
```

> If your default branch is `master`, use:

```bash
git pull origin master
```

---

## Step 4: Push Local Changes

Push committed local changes to the remote repository.

```bash
git push origin main
```

> If your default branch is `master`, use:

```bash
git push origin master
```

---

## Step 5: Verify Remote Repository

Open the GitHub/GitLab repository in a web browser and verify that the latest commits and files have been uploaded successfully.

---

## Git Commands Used

- git status
- git branch
- git branch -a
- git pull
- git push

---

## Learning Outcome

- Verified repository status.
- Listed local and remote branches.
- Pulled the latest changes from the remote repository.
- Pushed local commits to the remote repository.
- Verified successful synchronization with the remote repository.