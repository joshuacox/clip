class Clip < Formula
  desc "Fast, cross-platform command-line clipboard utility"
  homepage "https://joshuacox.github.io/clip/"
  url "https://github.com/joshuacox/clip/archive/refs/tags/v1.2.0.tar.gz"
  license "GPL-3.0-only"

  def install
    bin.install "clip"
    man1.install "man/clip.1"
    bash_completion.install "completions/bash/clip"
    zsh_completion.install "completions/zsh/_clip"
    fish_completion.install "completions/fish/clip.fish"
  end

  test do
    assert_match "clip version", shell_output("#{bin}/clip --version")
  end
end
