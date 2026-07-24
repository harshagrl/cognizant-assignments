# Exercise 3: Branching and Merging

## Objective

Learn how to create branches, switch between branches, commit changes, merge branches into the main branch, and delete merged branches.

---

## Prerequisites

- Git installed
- Local Git repository
- GitHub/GitLab repository
- (Optional) P4Merge configured for visual comparison

---

## Step 1: Create a New Branch

```bash
git branch GitNewBranch
```

---

## Step 2: List All Branches

```bash
git branch
```

Local and remote branches:

```bash
git branch -a
```

---

## Step 3: Switch to the New Branch

```bash
git checkout GitNewBranch
```

or

```bash
git switch GitNewBranch
```

---

## Step 4: Create or Modify a File

```bash
echo "Branch content" > sample.txt
```

---

## Step 5: Add and Commit Changes

```bash
git add .
git commit -m "Add sample file in GitNewBranch"
```

---

## Step 6: Check Repository Status

```bash
git status
```

---

# Merging

## Step 1: Switch Back to Main Branch

```bash
git checkout main
```

*(If your default branch is `master`, replace `main` with `master`.)*

---

## Step 2: Compare Branches

```bash
git diff main GitNewBranch
```

---

## Step 3: Visual Comparison (Optional)

Use P4Merge to compare the branches if it is configured.

---

## Step 4: Merge Branch

```bash
git merge GitNewBranch
```

---

## Step 5: View Commit History

```bash
git log --oneline --graph --decorate
```

---

## Step 6: Delete Merged Branch

```bash
git branch -d GitNewBranch
```

---

## Git Commands Used

- git branch
- git checkout
- git switch
- git add
- git commit
- git status
- git diff
- git merge
- git log
- git branch -d

---

## Learning Outcome

- Created a new branch.
- Switched between branches.
- Committed changes in a branch.
- Compared branch differences.
- Merged a branch into the main branch.
- Deleted the merged branch.