# Machine Poet

A machine poet for Avril Li.

## Installation

```bash
$ npm i @linsforever/poet -g
```

## Usage

```bash
Usage: poet [options]

Generate poem with customize variables

Options:
  -v, --version                       output the current version
  -t, --type [type]                   poem type: 5/7/0
  -b, --birthday [birthday]           generate by birthday, e.g: 20210101
  -h, --help                          display help for command

Example call:
  $ poet --help
```

### Random poem

```bash
$ poet 
```

### Generate poem by type

```bash
$ poet -t 7
```

### Generate poem by birthday

```bash
$ poet -b 20210101
```

## License

MIT License

Copyright (c) 2021 Avril Li.
