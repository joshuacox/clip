# fish completion for clip

complete -c clip -s p -s o -l paste -d "Paste data from clipboard to standard output"
complete -c clip -s c -l clear -d "Clear current clipboard contents"
complete -c clip -s n -l trim -d "Trim trailing newline before copying"
complete -c clip -s s -l primary -d "Use primary selection buffer instead of clipboard"
complete -c clip -l osc52 -d "Force OSC 52 ANSI escape sequence"
complete -c clip -s h -l help -d "Display help message and exit"
complete -c clip -s v -l version -d "Display version information and exit"
