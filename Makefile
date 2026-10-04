.POSIX:
.PHONY: all install uninstall play test site-build site-dev

PREFIX ?= /usr/local
BINDIR ?= $(PREFIX)/bin
MANDIR ?= $(PREFIX)/share/man/man1

all:
	@echo "Nothing to compile for clip. Run 'make install' to install."

install:
	install -d $(DESTDIR)$(BINDIR)
	install -m 755 clip $(DESTDIR)$(BINDIR)/clip
	install -d $(DESTDIR)$(MANDIR)
	install -m 644 man/clip.1 $(DESTDIR)$(MANDIR)/clip.1

uninstall:
	rm -f $(DESTDIR)$(BINDIR)/clip
	rm -f $(DESTDIR)$(MANDIR)/clip.1

play:
	ansible-playbook -i hosts clip.yaml

test:
	./tests/test_clip.sh

site-build:
	cd site && npm run build

site-dev:
	cd site && npm run dev
