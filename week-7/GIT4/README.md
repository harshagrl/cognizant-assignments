# Exercise 4: Merge Conflict Resolution

## Objective

Learn how to resolve merge conflicts when changes are made to the same file in different branches.

---

## Prerequisites

- Git installed
- Local Git repository
- GitHub/GitLab repository
- (Optional) P4Merge configured for visual merge

---

## Step 1: Verify Repository Status

```bash
git status
```

---

## Step 2: Create a New Branch

```bash
git branch GitWork
```

Switch to the branch

```bash
git checkout GitWork
```

---

## Step 3: Create a File

```bash
echo "<message>Hello from GitWork</message>" > hello.xml
```

Modify the file if required.

---

## Step 4: Check Status

```bash
git status
```

---

## Step 5: Commit Changes

```bash
git add .
git commit -m "Add hello.xml in GitWork branch"
```

---

## Step 6: Switch to Main Branch

```bash
git checkout main
```

*(If your default branch is `master`, replace `main` with `master`.)*

---

## Step 7: Modify the Same File

```bash
echo "<message>Hello from Main Branch</message>" > hello.xml
```

---

## Step 8: Commit Changes

```bash
git add .
git commit -m "Modify hello.xml in main branch"
```

---

## Step 9: View Commit History

```bash
git log --oneline --graph --decorate --all
```

---

## Step 10: Compare Branches

```bash
git diff main GitWork
```

---

## Step 11: Merge Branch

```bash
git merge GitWork
```

If both branches modified `hello.xml`, Git reports a merge conflict.

---

## Step 12: Resolve the Conflict

Open `hello.xml` and edit it to remove the conflict markers:

```text
<<<<<<< HEAD
...
=======
...
>>>>>>> GitWork
```

Save the final version.

---

## Step 13: Mark Conflict as Resolved

```bash
git add hello.xml
```

Commit the merge

```bash
git commit -m "Resolve merge conflict in hello.xml"
```

---

## Step 14: Ignore Backup Files

Create or update `.gitignore`

```gitignore
*.bak
```

Commit the changes

```bash
git add .gitignore
git commit -m "Add backup files to .gitignore"
```

---

## Step 15: List Branches

```bash
git branch
```

---

## Step 16: Delete Merged Branch

```bash
git branch -d GitWork
```

---

## Step 17: View Final History

```bash
git log --oneline --graph --decorate
```

---

## Git Commands Used

- git status
- git branch
- git checkout
- git add
- git commit
- git diff
- git merge
- git log
- git branch -d

---

## Learning Outcome

- Created a feature branch.
- Introduced a merge conflict.
- Resolved the conflict manually.
- Updated `.gitignore`.
- Merged changes successfully.
- Deleted the merged branch.