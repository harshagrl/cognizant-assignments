# Exercise 1: Git Basics

## Objective

Learn the basic Git commands required to initialize a repository, track files, commit changes, and synchronize with a remote repository.

---

## Prerequisites

- Git Bash installed
- GitHub/GitLab account
- Notepad++ (optional)

---

## Step 1: Configure Git

Check Git installation

```bash
git --version
```

Configure username

```bash
git config --global user.name "Your Name"
```

Configure email

```bash
git config --global user.email "your@email.com"
```

Verify configuration

```bash
git config --global --list
```

---

## Step 2: Configure Default Editor (Optional)

Set Notepad++ as default editor

```bash
git config --global core.editor "notepad++"
```

Verify

```bash
git config --global -e
```

---

## Step 3: Create Repository

Create folder

```bash
mkdir GitDemo
```

Move inside folder

```bash
cd GitDemo
```

Initialize repository

```bash
git init
```

Check status

```bash
git status
```

---

## Step 4: Create File

Create a file

```bash
echo Welcome to Git > welcome.txt
```

View file

```bash
cat welcome.txt
```

---

## Step 5: Add File

```bash
git add welcome.txt
```

or

```bash
git add .
```

---

## Step 6: Commit Changes

```bash
git commit -m "Add welcome.txt"
```

---

## Step 7: Connect Remote Repository

```bash
git remote add origin https://github.com/username/GitDemo.git
```

Verify

```bash
git remote -v
```

---

## Step 8: Pull Latest Changes

```bash
git pull origin main
```

---

## Step 9: Push to GitHub

```bash
git push origin main
```

---

## Git Commands Used

- git init
- git status
- git add
- git commit
- git push
- git pull
- git config
- git remote

---

## Learning Outcome

- Initialized a Git repository.
- Configured Git username and email.
- Added files to the staging area.
- Committed changes.
- Connected the local repository with a remote repository.
- Pulled and pushed changes using Git.