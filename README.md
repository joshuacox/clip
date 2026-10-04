# clip

`clip` is a lightweight, zero-dependency command-line utility for copying and pasting text to and from your system clipboard. It automatically detects your display server and environment, providing a unified clipboard interface across **Wayland**, **X11**, **macOS**, and **WSL**.

## Features

- **Automatic Environment Detection**: Seamlessly routes to:
  - **Wayland**: `wl-copy` / `wl-paste`
  - **X11**: `xclip` or `xsel`
  - **macOS**: `pbcopy` / `pbpaste`
  - **Windows / WSL**: `clip.exe` / `powershell.exe`
- **Full Pipe Support**: Easily stream standard input directly into your clipboard.
- **File Support**: Copy contents of single or multiple files with upfront validation.
- **Paste Support**: Output clipboard data using `clip -p` (or invoking via a `paste` symlink).
- **Newline Trimming**: Strip trailing newlines using `-n` or `--trim` (great for URLs, hashes, and passwords).
- **Primary Selection**: Target the mouse primary buffer with `-s` or `--primary` (X11 / Wayland).
- **POSIX Compliant**: Written in strict standard `/bin/sh` with no bashisms.

## Installation

### via Makefile (Recommended)
```bash
sudo make install
```
Default prefix is `/usr/local`. To customize the install location:
```bash
make PREFIX=$HOME/.local install
```

### Quick Install
```bash
curl -sL https://git.io/clipinstall | bash
```

### Manual Install
Copy `clip` to any folder in your `$PATH`:
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

### Options
```text
Usage: clip [OPTIONS] [FILE...]

Options:
  -p, -o, --paste    Paste data from clipboard to standard output
  -n, --trim         Trim trailing newline from input before copying
  -s, --primary      Use primary selection buffer instead of clipboard (X11/Wayland)
  -h, --help         Display this help message and exit
  -v, --version      Display version information and exit
  --                 Treat subsequent arguments as files, not options
```

## License
See [LICENSE](LICENSE) for details.
