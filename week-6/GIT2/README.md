# Exercise 2: Git Ignore

## Objective

Learn how to use the `.gitignore` file to prevent unwanted files and folders from being tracked by Git.

---

## Prerequisites

- Git installed
- Local Git repository
- GitHub/GitLab repository

---

## Step 1: Create a Git Repository

```bash
mkdir GitDemo
cd GitDemo
git init
```

---

## Step 2: Create Files

```bash
echo "Welcome to Git Ignore" > welcome.txt
```

Create a log file

```bash
echo "Application Started" > application.log
```

Create a logs folder

```bash
mkdir logs
echo "Error Log" > logs/app.log
```

---

## Step 3: Create `.gitignore`

```bash
touch .gitignore
```

Add the following content:

```gitignore
*.log
logs/
```

---

## Step 4: Check Status

```bash
git status
```

Expected output:

- `welcome.txt` is shown as an untracked file.
- `application.log` is ignored.
- `logs/` is ignored.

---

## Step 5: Add Files

```bash
git add .
```

---

## Step 6: Commit

```bash
git commit -m "Add Git Ignore configuration"
```

---

## Git Commands Used

```bash
git init
git status
git add .
git commit
git push
git pull
```

---

## Learning Outcome

- Created a `.gitignore` file.
- Ignored all `.log` files.
- Ignored the `logs` directory.
- Verified ignored files using `git status`.