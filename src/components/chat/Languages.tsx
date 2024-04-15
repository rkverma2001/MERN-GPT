export const getLanguage = (block: string) => {
  // JavaScript
  if (block.includes("javascript")) {
    return "javascript";
  }

  // Python
  if (block.includes("python")) {
    return "python";
  }

  // Java
  if (block.includes("java")) {
    return "java";
  }

  // C++
  if (block.includes("c++") || block.includes("cpp")) {
    return "cpp";
  }

  // C#
  if (block.includes("c#") || block.includes("csharp")) {
    return "csharp";
  }

  // Ruby
  if (block.includes("ruby")) {
    return "ruby";
  }

  // Go
  if (block.includes("go")) {
    return "go";
  }

  // PHP
  if (block.includes("php")) {
    return "php";
  }

  // Swift
  if (block.includes("swift")) {
    return "swift";
  }

  // TypeScript
  if (block.includes("typescript")) {
    return "typescript";
  }

  // Rust
  if (block.includes("rust")) {
    return "rust";
  }

  // Kotlin
  if (block.includes("kotlin")) {
    return "kotlin";
  }

  // HTML
  if (block.includes("html")) {
    return "html";
  }

  // CSS
  if (block.includes("css")) {
    return "css";
  }

  // SQL
  if (block.includes("sql")) {
    return "sql";
  }

  // Shell/Bash
  if (block.includes("bash") || block.includes("shell")) {
    return "bash";
  }

  // Perl
  if (block.includes("perl")) {
    return "perl";
  }

  // Objective-C
  if (block.includes("objective-c") || block.includes("objc")) {
    return "objectivec";
  }

  // R
  if (block.includes("r")) {
    return "r";
  }

  // Scala
  if (block.includes("scala")) {
    return "scala";
  }

  // Lua
  if (block.includes("lua")) {
    return "lua";
  }

  // MATLAB
  if (block.includes("matlab")) {
    return "matlab";
  }

  // Haskell
  if (block.includes("haskell")) {
    return "haskell";
  }

  // VB.NET
  if (block.includes("vb.net")) {
    return "vbnet";
  }

  // Assembly
  if (block.includes("assembly")) {
    return "assembly";
  }

  // ActionScript
  if (block.includes("actionscript")) {
    return "actionscript";
  }

  // Dart
  if (block.includes("dart")) {
    return "dart";
  }

  // PowerShell
  if (block.includes("powershell")) {
    return "powershell";
  }

  // Perl
  if (block.includes("perl")) {
    return "perl";
  }

  // VBScript
  if (block.includes("vbscript")) {
    return "vbscript";
  }

  // Clojure
  if (block.includes("clojure")) {
    return "clojure";
  }

  // Elixir
  if (block.includes("elixir")) {
    return "elixir";
  }

  // Groovy
  if (block.includes("groovy")) {
    return "groovy";
  }

  // Markdown
  if (block.includes("markdown")) {
    return "markdown";
  }

  // Other languages
  // Add more conditions for other languages as needed

  // If no specific language is detected
  return undefined;
};
