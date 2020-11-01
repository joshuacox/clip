all: help

help:
	@echo ""
	@echo "-- Help Menu"
	@echo ""   1. make install       - install the scripts in /usr/local/bin/

install: usrlocalbin

usrlocalbin:
	install --mode=0555 clip /usr/local/bin/clip

playbook:
	ansible-playbook clip.yaml

play: playbook

vanity:
	curl -i https://git.io -F "url=https://raw.githubusercontent.com/joshuacox/clip/master/bootstrap.sh" -F "code=clipinstall"
