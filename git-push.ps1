# Change to the project directory
Set-Location -Path "C:\Users\danie\Downloads\modern-portfolio"

# Add all changes
git add .

# Commit with a timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Scheduled commit at $timestamp"

# Push to remote repository
git push origin main

# Log the operation
$logMessage = "Git push completed at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Add-Content -Path "git-push.log" -Value $logMessage 