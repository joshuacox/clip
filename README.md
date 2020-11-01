# clip
VV is a wrapper for command line tasks, it's most important feature is that it makes a noise when it is done, allowing me to background and do something else while the task completes, then I generally wrap some nice and ionice and /usr/bin/time -v into the command to make it nice and give me an idea of how long it took.  I added the time sync, to let me know how much of the above the kernel is trying to hide from me as well (of course the sync may reflect something else going on in the system, in any case I think it's a good idea to let the discs sync in general before other things commence and no need to alert me till afterwards)

notes: I imagine there are some escaping issues that could be uncovered by throwing lot’s of interpretation snafu at it in $@  i.e. I imagine I’ll have to throw some escape trickery in there at some point.  I’ll fix it when I run into one of those cases, but for now I’m using this daily without issue.  I tend to escape things pretty heavily though, so I might not run into one of those cases anytime soon.

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
