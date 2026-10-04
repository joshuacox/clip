# clip

[![Documentation](https://img.shields.io/badge/docs-GitHub%20Pages-10b981?style=flat-square)](https://joshuacox.github.io/clip/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

`clip` is a lightweight, zero-dependency command-line utility for copying and pasting text to and from your system clipboard. It automatically detects your display server and environment, providing a unified clipboard interface across **Wayland**, **X11**, **macOS**, **WSL**, and **remote SSH sessions**.

📖 **Live Documentation & Interactive Playground**: [https://joshuacox.github.io/clip/](https://joshuacox.github.io/clip/)

## Features

- **Automatic Environment Detection**: Seamlessly routes to:
  - **Wayland**: `wl-copy` / `wl-paste`
  - **X11**: `xclip` or `xsel`
  - **macOS**: `pbcopy` / `pbpaste`
  - **Windows / WSL**: `clip.exe` / `powershell.exe`
  - **Remote SSH / Headless**: OSC 52 ANSI escape sequences directly to your local terminal emulator clipboard
- **Full Pipe Support**: Easily stream standard input directly into your clipboard.
- **File Support**: Copy contents of single or multiple files with upfront validation.
- **Paste Support**: Output clipboard data using `clip -p` (or invoking via a `paste` symlink).
- **Clear Buffer**: Wipe sensitive clipboard data instantly with `clip -c`.
- **Newline Trimming**: Strip trailing newlines using `-n` or `--trim` (great for URLs, hashes, and passwords).
- **Primary Selection**: Target the mouse primary buffer with `-s` or `--primary` (X11 / Wayland / OSC 52).
- **Shell Autocompletions**: Tab-completions included for Bash, Zsh, and Fish.
- **Strictly POSIX Compliant**: Written in clean standard `/bin/sh` with zero external dependencies.

## Installation

### via Makefile (Recommended)
Installs `clip`, its man page, and completions for Bash, Zsh, and Fish:
```bash
sudo make install
```

To also install a convenient `paste` symlink:
```bash
sudo make install-paste
```

Default prefix is `/usr/local`. To customize the install location:
```bash
make PREFIX=$HOME/.local install
```

### via Nix Flake
Run directly without installing:
```bash
nix run github:joshuacox/clip -- --help
```
Or install to your user profile:
```bash
nix profile install github:joshuacox/clip
```

### via Homebrew (macOS / Linux)
```bash
brew install joshuacox/clip/clip
```

### Quick Install (One-liner)
```bash
curl -sL https://git.io/clipinstall | bash
```

### Manual Install
Copy `clip` and its manual to any directory in your `$PATH`:
```bash
sudo install -m 755 clip /usr/local/bin/
sudo install -m 644 man/clip.1 /usr/local/share/man/man1/
```

### via CMake
```bash
mkdir build && cd build
cmake ..
sudo make install
```

### via Ansible
Add hosts to the `[clip]` group in your hosts inventory:
```ini
examplehost1 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.4 ansible_ssh_user=root

[clip]
examplehost1
```
Then run:
```bash
make play
```

## Usage

### Copying from a pipeline
Pipe command output directly to your clipboard:
```bash
date -I | clip
```

Copy without a trailing newline:
```bash
pwd | clip -n
```

### Copying over remote SSH (OSC 52)
When logged into a remote server over SSH or in tmux, copy directly to your local computer's clipboard:
```bash
cat /etc/os-release | clip --osc52
```

### Copying files
Pass one or more filenames:
```bash
clip myfile.txt
clip header.txt body.txt footer.txt
```

### Pasting clipboard content
Output the clipboard contents to stdout or redirect to a file:
```bash
clip -p
clip -p > output.txt
```

### Clearing clipboard buffer
Wipe clipboard contents:
```bash
clip -c
```

### Options
```text
Usage: clip [OPTIONS] [FILE...]

Options:
  -p, -o, --paste    Paste data from clipboard to standard output
  -c, --clear        Clear current clipboard contents
  -n, --trim         Trim trailing newline from input before copying
  -s, --primary      Use primary selection buffer instead of clipboard (X11/Wayland/OSC52)
      --osc52        Force OSC 52 ANSI escape sequence (useful over SSH or in tmux)
  -h, --help         Display this help message and exit
  -v, --version      Display version information and exit
  --                 Treat subsequent arguments as files, not options
```

## Documentation Website

The full documentation, guides, and interactive terminal playground simulator are hosted online on GitHub Pages:
👉 **[https://joshuacox.github.io/clip/](https://joshuacox.github.io/clip/)**

To run or build the static Next.js documentation site locally:
```bash
make site-dev    # Start local Next.js development server at http://localhost:3000
make site-build  # Build static export to site/out/
```

## License
See [LICENSE](LICENSE) for details.
