#!/bin/bash

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Error: not a git repository."
    exit 1
fi

# Find the first commit
first_commit=$(git rev-list --max-parents=0 HEAD)

# Reset to the first commit
git reset --hard $first_commit

# Remove all remote associations
git remote remove origin

# Prompt user for new remote repository URL
echo "Enter the new GitHub repository URL (or leave blank to skip):"
read new_remote

if [[ -n $new_remote ]]; then
    git remote add origin $new_remote
    echo "New remote set to $new_remote"
else
    echo "No new remote set. You can add a remote repository later with:"
    echo "git remote add origin <repository-url>"
fi

echo "Repository has been reset to its first commit."
