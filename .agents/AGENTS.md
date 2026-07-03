# Conversation Auto-Recovery Rules

Every time a new session starts, the agent must automatically perform the following steps to ensure conversation history is preserved and restored:

1. **Scan History Directory:**
   Scan the `<appDataDir>\brain` directory (normally `C:\Users\Prajwal\.gemini\antigravity-ide\brain`) for any previous conversation IDs (directories named with UUIDs).
   
2. **Identify the Last Conversation:**
   Find the directory with the most recent modification time (excluding the current active session directory).
   
3. **Parse and Recover Transcript:**
   Locate the `transcript_full.jsonl` file under `<last-session-id>\.system_generated\logs\`. Read and parse the final few turns (USER_INPUT and PLANNER_RESPONSE) of that session to determine what was being worked on.
   
4. **Present the Context to the User:**
   Proactively summarize the last active task and provide the user with:
   - A brief summary of the state of the project at the end of the last session.
   - A clickable markdown link to the recovered conversation history file.

**CRITICAL RULE**: The agent MUST perform these auto-recovery steps on the very first turn of *every* new session, regardless of the user's initial prompt, before performing any other tasks.

# Project Configurations & Secrets

Please refer to the gitignored secrets file: [.agents/secrets.md](file:///c:/Users/Prajwal/Downloads/glide-brands/.agents/secrets.md) for GitHub repository credentials, auth tokens, and default push instructions.

# Git Push Policy
- The agent must automatically stage, commit, and push code changes to the remote repository immediately after completing any layout edits, code changes, or asset additions, without asking the user for confirmation in the chat thread.

