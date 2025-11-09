#!/bin/bash
# SSL security M - clickable .command simulator (safe: does NOT modify/delete)
# Save as: SSL security M.command
set -u

TOTAL_STEPS=72        # 72 * 5s = ~6 minutes
SLEEP_SEC=5
BAR_WIDTH=40

messages=(
  "Initializing modules"
  "Checking certificates"
  "Verifying handshake protocols"
  "Scanning ports"
  "Validating cipher suites"
  "Performing integrity checks"
  "Collecting system telemetry"
  "Finalizing diagnostics"
)

spinner_chars=('|' '/' '-' '\\')

echo
echo "🔒 Starting SSL Security M simulated process..."
echo "Press Ctrl+C to abort anytime."
echo

for ((i=1;i<=TOTAL_STEPS;i++)); do
  pct=$(( i * 100 / TOTAL_STEPS ))
  filled=$(( pct * BAR_WIDTH / 100 ))
  empty=$(( BAR_WIDTH - filled ))

  # Build bar string
  bar_filled=$(printf "%0.s#" $(seq 1 $filled 2>/dev/null))
  bar_empty=$(printf "%0.s-" $(seq 1 $empty 2>/dev/null))
  bar="[$bar_filled$bar_empty]"

  # rotating message every few steps
  msg_index=$(( (i-1) % ${#messages[@]} ))
  msg="${messages[$msg_index]}"

  # spinner rotate
  spinner_index=$(( (i-1) % ${#spinner_chars[@]} ))
  spinner="${spinner_chars[$spinner_index]}"

  # Overwrite the same line with progress
  printf "\r%s %3d%% %s %s" "$spinner" "$pct" "$bar" "$msg"

  # Occasionally print a new log-style line for realism
  if (( i % 9 == 0 )); then
    echo
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $msg completed for cycle $i"
  fi

  sleep "$SLEEP_SEC"
done

# finish line
echo
echo
echo "✅ SSL Security M simulation finished successfully."
echo
