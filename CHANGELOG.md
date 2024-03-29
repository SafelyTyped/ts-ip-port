# CHANGELOG

## Introduction

This CHANGELOG tells you:

* when a release was made
* what is in each release

It also tells you what changes have been completed, and will be included in the next tagged release.

For each release, changes are grouped under these headings:

* _Backwards-Compatibility Breaks_: a list of any backwards-compatibility breaks
* _New_: a list of new features. If the feature came from a contributor via a PR, make sure you link to the PR and give them a mention here.
* _Fixes_: a list of bugs that have been fixed. If there's an issue for the bug, make sure you link to the GitHub issue here.
* _Dependencies_: a list of dependencies that have been added / updated / removed.
* _Tools_: a list of bundled tools that have been added / updated / removed.

## develop branch

The following changes have been completed, and will be included in the next tagged release.

## v0.2.0

Released Saturday, 2nd March 2024.

### Fixes

- add simultaneous support for CommonJS and ESM modules

### B/C Breaks

* Upgrade to Typescript 5.2
* Switch from tslint to @typescript-eslint
  * Lots of tweaks to satisfy @typescript-eslint

### Tests

* All tests now import from `@safelytyped/ip-port` to test that our exports work

## v0.1.1

Released Wednesday, 26th May 2021.

### Dependencies

* Updated all dependencies to the latest version.

## v0.1.0

Released Monday, 22nd June 2020.

### New

* IpPort
  - added `IpPort`
  - added `MIN_IP_PORT`
  - added `MAX_IP_PORT`
  - added `ValidateIpPortDataOptions`
  - added `isIpPort()`
  - added `makeIpPort()`
  - added `mustBeIpPort()`
  - added `resolveIpPortToNumber()`
  - added `resolveIpPortToString()`
  - added `validateIpPortData()`
