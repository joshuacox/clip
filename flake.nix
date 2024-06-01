{
  description = "A flake for building clip";
  inputs.nixpkgs.url = github:NixOS/nixpkgs/nixos-24.05;

  outputs = {
    self,
    nixpkgs
  }: let
    systems = [
      "x86_64-linux"
      "x86_64-darwin"
      "aarch64-darwin"
      "aarch64-linux"
    ];
    forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f system);
    suffix-version = version: attrs: nixpkgs.lib.mapAttrs' (name: value: nixpkgs.lib.nameValuePair (name + version) value) attrs;
    suffix-stable = suffix-version "-24.05";
  in {
    packages.x86_64-linux.default = self.packages.x86_64-linux.clip;
    packages.x86_64-linux.clip =
      # Notice the reference to nixpkgs here.
      with import nixpkgs { system = "x86_64-linux"; };
      stdenv.mkDerivation {
        name = "clip";
        src = self;
        installPhase = "TMP=$(mktemp -d) && cp clip $TMP/clip && chmod 555 $TMP/clip && mkdir -p $out/bin && install -t $out/bin $TMP/clip";
      };
  };
}
