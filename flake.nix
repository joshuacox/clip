{
  description = "A fast, cross-platform CLI clipboard wrapper";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = {
    self,
    nixpkgs,
  }: let
    systems = [
      "x86_64-linux"
      "aarch64-linux"
      "x86_64-darwin"
      "aarch64-darwin"
    ];
    forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f system (import nixpkgs { inherit system; }));
  in {
    packages = forAllSystems (system: pkgs: {
      default = self.packages.${system}.clip;
      clip = pkgs.stdenv.mkDerivation {
        pname = "clip";
        version = "1.2.0";
        src = self;

        installPhase = ''
          install -Dm755 clip $out/bin/clip
          install -Dm644 man/clip.1 $out/share/man/man1/clip.1
          install -Dm644 completions/bash/clip $out/share/bash-completion/completions/clip
          install -Dm644 completions/zsh/_clip $out/share/zsh/site-functions/_clip
          install -Dm644 completions/fish/clip.fish $out/share/fish/vendor_completions.d/clip.fish
        '';

        meta = with pkgs.lib; {
          description = "Fast, lightweight POSIX-compliant clipboard utility";
          homepage = "https://joshuacox.github.io/clip/";
          license = licenses.gpl3Only;
          platforms = platforms.unix;
          mainProgram = "clip";
        };
      };
    });

    devShells = forAllSystems (system: pkgs: {
      default = pkgs.mkShell {
        buildInputs = [
          self.packages.${system}.clip
          pkgs.shellcheck
        ];
      };
    });
  };
}
