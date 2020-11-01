# clip
Clip is a wrapper around xclip, because I am lazy and there is way too many characters to type to quite simply copy some text to the clipboard.

## Install

Trust me?

```
curl -sL https:git.io/clipinstall | bash
```

But I recommend you clone the repo and read it first, it’s pretty short

then at your leisure

`cp clip /usr/local/bin`

or somewhere in your path

alternatively if you want to install it to `/usr/local/bin/` using the makefile then

```
sudo make install
```

or you can add hosts to a clip list in your ansible hosts file like so

```
examplehost1 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.4 ansible_ssh_user=root
examplehost2 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.5 ansible_ssh_user=root

[clip]
exampleHost1
exampleHost2
```
and use ansible to install to those hosts

```
make play
```

look at the included Makefile (as you should every Makefile for that matter before you `sudo make anything`)
it merely uses the install command to copy the clip script to `/usr/local/bin` with mode 0755

## Usage

Just place clip at the final pipe of your command line

```
date -I|cut -d- -f2|clip
```

Then paste in your GUI (any of the following should work)

```
ctrl-v
shft-ctrl-v
shift-insert
middle mouse button
```

http://joshuacox.github.io/clip
