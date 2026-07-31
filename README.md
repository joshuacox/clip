# clip

`clip` is a simple wrapper around `xclip` designed to make copying text to the X clipboard faster and more intuitive from the command line.

## Features

- **Pipe support**: Easily pipe any command output directly to your clipboard.
- **File support**: Copy contents of one or more files without using `cat`.
- **Dependency check**: Automatically verifies if `xclip` is installed.

## Installation

### Quick Install
```bash
curl -sL https://git.io/clipinstall | bash
```

### Manual Install
Clone the repository and move the `clip` script to a directory in your PATH:
```bash
cp clip /usr/local/bin/
```

### via Makefile
```bash
sudo make install
```

### via Ansible
Add hosts to the `[clip]` group in your hosts file:
```ini
examplehost1 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.4 ansible_ssh_user=root
examplehost2 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.5 ansible_ssh_user=root

[clip]
examplehost1
examplehost2
```
Then run:
```bash
make play
```

## Usage

### Copying from a pipe
Place `clip` at the end of your command pipeline:
```bash
date -I | cut -d- -f2 | clip
```

### Copying files
Pass one or more filenames as arguments:
```bash
clip myfile.txt
clip file1.txt file2.txt
```

Once copied, you can paste using your standard GUI shortcuts (`Ctrl+V`, `Shift+Ctrl+V`, `Shift+Insert`, or middle-click).

## License
See [LICENSE](LICENSE) for details.
