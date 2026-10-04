#!/bin/sh
set -eu

echo "Running clip test suite..."

# 1. Syntax check
dash -n clip bootstrap.sh
bash -n clip bootstrap.sh
bash -n completions/bash/clip
echo "✓ Shell syntax valid in dash and bash"

# 2. Help and Version check
./clip --help >/dev/null
./clip -h >/dev/null
./clip --version >/dev/null
./clip -v >/dev/null
echo "✓ Help and version flags work"

# 3. Functional tests with mock backend
TEST_DIR=$(mktemp -d)
CLIP_FILE="${TEST_DIR}/mock_clipboard.txt"
trap 'rm -rf "${TEST_DIR}"' EXIT

printf '#!/bin/sh\ncat > "%s"\n' "$CLIP_FILE" > "$TEST_DIR/wl-copy"
chmod +x "$TEST_DIR/wl-copy"

printf '#!/bin/sh\ncat "%s" 2>/dev/null || true\n' "$CLIP_FILE" > "$TEST_DIR/wl-paste"
chmod +x "$TEST_DIR/wl-paste"

export WAYLAND_DISPLAY="wayland-0"
export PATH="$TEST_DIR:$PATH"

# Test Pipe copy and paste
echo "Hello World" | ./clip
P1=$(./clip -p)
if [ "$P1" != "Hello World" ]; then
  echo "FAIL: Expected 'Hello World', got '$P1'" >&2
  exit 1
fi
echo "✓ Pipe copy and paste"

# Test Trim newline
printf "Line without newline\n" | ./clip -n
P2=$(./clip -p)
if [ "$P2" != "Line without newline" ]; then
  echo "FAIL: Trailing newline not trimmed" >&2
  exit 1
fi
echo "✓ Trim newline (-n)"

# Test Clear buffer (-c)
./clip -c
P_CLEARED=$(./clip -p)
if [ -n "$P_CLEARED" ]; then
  echo "FAIL: Expected empty clipboard after -c, got '$P_CLEARED'" >&2
  exit 1
fi
echo "✓ Clear buffer (-c)"

# Test File copy
echo "file content 1" > "$TEST_DIR/f1.txt"
echo "file content 2" > "$TEST_DIR/f2.txt"
./clip "$TEST_DIR/f1.txt" "$TEST_DIR/f2.txt"
P3=$(./clip -p)
EXPECTED=$(printf "file content 1\nfile content 2\n")
if [ "$P3" != "$EXPECTED" ]; then
  echo "FAIL: Multi-file content mismatch" >&2
  exit 1
fi
echo "✓ Multi-file copy"

# Test OSC 52 sequence generation
OSC_OUT=$(setsid sh -c 'printf "hello" | ./clip --osc52')
EXPECTED_OSC=$(printf "\033]52;c;aGVsbG8=\a")
if [ "$OSC_OUT" != "$EXPECTED_OSC" ]; then
  echo "FAIL: OSC 52 sequence mismatch. Got '$OSC_OUT'" >&2
  exit 1
fi
echo "✓ OSC 52 escape sequence generation"

# Test Missing file error
set +e
ERR=$(./clip "$TEST_DIR/nonexistent.txt" 2>&1)
STATUS=$?
set -e
if [ "$STATUS" -eq 0 ]; then
  echo "FAIL: Expected non-zero exit on missing file" >&2
  exit 1
fi
echo "$ERR" | grep -q "No such file or directory"
echo "✓ Missing file error handling"

# Test No stdin error
set +e
ERR2=$(./clip 2>&1)
STATUS=$?
set -e
if [ "$STATUS" -eq 0 ]; then
  echo "FAIL: Expected non-zero exit when no input provided" >&2
  exit 1
fi
echo "$ERR2" | grep -q "no data provided"
echo "✓ No data provided error handling"

echo "All tests passed successfully!"
