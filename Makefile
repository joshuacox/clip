.POSIX:
.PHONY: all install install-completions install-paste uninstall play test site-build site-dev

PREFIX ?= /usr/local
BINDIR ?= $(PREFIX)/bin
MANDIR ?= $(PREFIX)/share/man/man1
BASHCOMPDIR ?= $(PREFIX)/share/bash-completion/completions
ZSHCOMPDIR ?= $(PREFIX)/share/zsh/site-functions
FISHCOMPDIR ?= $(PREFIX)/share/fish/vendor_completions.d

all:
	@echo "Nothing to compile for clip. Run 'make install' to install."

install: install-completions
	install -d $(DESTDIR)$(BINDIR)
	install -m 755 clip $(DESTDIR)$(BINDIR)/clip
	install -d $(DESTDIR)$(MANDIR)
	install -m 644 man/clip.1 $(DESTDIR)$(MANDIR)/clip.1

install-completions:
	install -d $(DESTDIR)$(BASHCOMPDIR)
	install -m 644 completions/bash/clip $(DESTDIR)$(BASHCOMPDIR)/clip
	install -d $(DESTDIR)$(ZSHCOMPDIR)
	install -m 644 completions/zsh/_clip $(DESTDIR)$(ZSHCOMPDIR)/_clip
	install -d $(DESTDIR)$(FISHCOMPDIR)
	install -m 644 completions/fish/clip.fish $(DESTDIR)$(FISHCOMPDIR)/clip.fish

install-paste: install
	ln -sf clip $(DESTDIR)$(BINDIR)/paste

uninstall:
	rm -f $(DESTDIR)$(BINDIR)/clip
	rm -f $(DESTDIR)$(BINDIR)/paste
	rm -f $(DESTDIR)$(MANDIR)/clip.1
	rm -f $(DESTDIR)$(BASHCOMPDIR)/clip
	rm -f $(DESTDIR)$(ZSHCOMPDIR)/_clip
	rm -f $(DESTDIR)$(FISHCOMPDIR)/clip.fish

play:
	ansible-playbook -i hosts clip.yaml

test:
	./tests/test_clip.sh

site-build:
	cd site && npm run build

site-dev:
	cd site && npm run dev
