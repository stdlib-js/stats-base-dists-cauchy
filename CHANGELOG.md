# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-30)

<section class="features">

### Features

-   [`2ccda3e`](https://github.com/stdlib-js/stdlib/commit/2ccda3eb642c84dc52ea2cf2c9f20adb3e5382d6) - add C impolementation for `stdlib/stats/base/dists/cauchy/quantile` [(#4600)](https://github.com/stdlib-js/stdlib/pull/4600)
-   [`f175cf9`](https://github.com/stdlib-js/stdlib/commit/f175cf9948ecaf9928a34777bd35967dc4bf788d) - add C implementation of `stats/base/dists/cauchy/logcdf` [(#4390)](https://github.com/stdlib-js/stdlib/pull/4390)
-   [`dd65185`](https://github.com/stdlib-js/stdlib/commit/dd651854fb03fab5e38823675d5a66d5a439628c) - add C implementation of `stats/base/dists/cauchy/logpdf` [(#4416)](https://github.com/stdlib-js/stdlib/pull/4416)
-   [`8fa3827`](https://github.com/stdlib-js/stdlib/commit/8fa382766ef9fac1355c9ad98cf3e81f47387016) - add C implementation of `stats/base/dists/cauchy/cdf` [(#4389)](https://github.com/stdlib-js/stdlib/pull/4389)
-   [`eaecb57`](https://github.com/stdlib-js/stdlib/commit/eaecb576d77de0a0773f262b59da7a2cee740119) - add C implementation of `stats/base/dists/cauchy/pdf` [(#4393)](https://github.com/stdlib-js/stdlib/pull/4393)
-   [`1188836`](https://github.com/stdlib-js/stdlib/commit/118883606bab688a753219662cb78850e7a48237) - add C implementation for `stats/base/dists/cauchy/median` [(#3958)](https://github.com/stdlib-js/stdlib/pull/3958)
-   [`f5f16d3`](https://github.com/stdlib-js/stdlib/commit/f5f16d3a7fb02c9bd000b0d0d53e7d12b19b097b) - add C implementation for `stats/base/dists/cauchy/mode` [(#3952)](https://github.com/stdlib-js/stdlib/pull/3952)
-   [`ea671df`](https://github.com/stdlib-js/stdlib/commit/ea671dfde903d2ef3f3640ae8ea9505fcaeff726) - add C implementation for `stats/base/dists/cauchy/entropy` [(#3961)](https://github.com/stdlib-js/stdlib/pull/3961)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`f0d49c1`](https://github.com/stdlib-js/stdlib/commit/f0d49c177b252ac1182ebc831fec6c90e862d56d) - handle infinity case and increase tolerances for passing tests

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 11 issues were closed in this release:

[#3479](https://github.com/stdlib-js/stdlib/issues/3479), [#3480](https://github.com/stdlib-js/stdlib/issues/3480), [#3481](https://github.com/stdlib-js/stdlib/issues/3481), [#3482](https://github.com/stdlib-js/stdlib/issues/3482), [#3483](https://github.com/stdlib-js/stdlib/issues/3483), [#3484](https://github.com/stdlib-js/stdlib/issues/3484), [#3485](https://github.com/stdlib-js/stdlib/issues/3485), [#3486](https://github.com/stdlib-js/stdlib/issues/3486), [#5232](https://github.com/stdlib-js/stdlib/issues/5232), [#5428](https://github.com/stdlib-js/stdlib/issues/5428), [#5431](https://github.com/stdlib-js/stdlib/issues/5431)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`2cabe18`](https://github.com/stdlib-js/stdlib/commit/2cabe1887e6a502a306b70580fb5d038da0917f3) - **docs:** fix return values in TSDoc return annotation comments _(by Philipp Burckhardt)_
-   [`97218a1`](https://github.com/stdlib-js/stdlib/commit/97218a12e1d5ec1479a5b39ac4d32318c372e922) - **docs:** fix TSDoc example code return annotations _(by Philipp Burckhardt)_
-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`776887e`](https://github.com/stdlib-js/stdlib/commit/776887e9577ae2402fd69c97328cb864811bd120) - **docs:** update annotation values _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`f0d49c1`](https://github.com/stdlib-js/stdlib/commit/f0d49c177b252ac1182ebc831fec6c90e862d56d) - **fix:** handle infinity case and increase tolerances for passing tests _(by Philipp Burckhardt)_
-   [`0a23889`](https://github.com/stdlib-js/stdlib/commit/0a23889dd55afcd8f1a85cd208a2397c931637bd) - **test:** increase tolerances for passing tests _(by Philipp Burckhardt)_
-   [`ab5d777`](https://github.com/stdlib-js/stdlib/commit/ab5d777cae4eecdcce916060cf4ca2b77825e639) - **chore:** clean-up _(by Athan Reines)_
-   [`555255c`](https://github.com/stdlib-js/stdlib/commit/555255c2ee6c26f065f0bb20eec9314c8d1d2263) - **docs:** update `stats/base/dists/cauchy` examples to use Greek symbols _(by Philipp Burckhardt)_
-   [`2ccda3e`](https://github.com/stdlib-js/stdlib/commit/2ccda3eb642c84dc52ea2cf2c9f20adb3e5382d6) - **feat:** add C impolementation for `stdlib/stats/base/dists/cauchy/quantile` [(#4600)](https://github.com/stdlib-js/stdlib/pull/4600) _(by Nishchay Rajput, Philipp Burckhardt)_
-   [`6af184d`](https://github.com/stdlib-js/stdlib/commit/6af184d8a8ed89c7be0fe08dd5d87125b60c5e01) - **bench:** update random value generation [(#6953)](https://github.com/stdlib-js/stdlib/pull/6953) _(by Harsh Yadav)_
-   [`f025bc3`](https://github.com/stdlib-js/stdlib/commit/f025bc39e4761a1c7dee8bf781581b75868b3a89) - **bench:** update random value generation [(#6954)](https://github.com/stdlib-js/stdlib/pull/6954) _(by Harsh Yadav)_
-   [`ca3d958`](https://github.com/stdlib-js/stdlib/commit/ca3d958f22927d6a6d4af71f50b92b5f7be27d7c) - **docs:** replace manual `for` loop in examples [(#6919)](https://github.com/stdlib-js/stdlib/pull/6919) _(by Harsh Yadav, Philipp Burckhardt)_
-   [`28f64ec`](https://github.com/stdlib-js/stdlib/commit/28f64ec05e56db3e8836cfcdfd45e27a53eda4bf) - **docs:** replace manual `for` loop in examples [(#6918)](https://github.com/stdlib-js/stdlib/pull/6918) _(by Harsh Yadav)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`30f9a5f`](https://github.com/stdlib-js/stdlib/commit/30f9a5fbdad8cb9baa5aa8ceca731afaf6866ef2) - **chore:** address commit comments [(#6192)](https://github.com/stdlib-js/stdlib/pull/6192) _(by MANI)_
-   [`0d8ee45`](https://github.com/stdlib-js/stdlib/commit/0d8ee45ff4534afb9911179c06b3134934dcf640) - **chore:** address commit comments [(#5461)](https://github.com/stdlib-js/stdlib/pull/5461) _(by Harsh Yadav)_
-   [`f175cf9`](https://github.com/stdlib-js/stdlib/commit/f175cf9948ecaf9928a34777bd35967dc4bf788d) - **feat:** add C implementation of `stats/base/dists/cauchy/logcdf` [(#4390)](https://github.com/stdlib-js/stdlib/pull/4390) _(by Vinit Pandit, stdlib-bot, Philipp Burckhardt)_
-   [`dd65185`](https://github.com/stdlib-js/stdlib/commit/dd651854fb03fab5e38823675d5a66d5a439628c) - **feat:** add C implementation of `stats/base/dists/cauchy/logpdf` [(#4416)](https://github.com/stdlib-js/stdlib/pull/4416) _(by Vinit Pandit, stdlib-bot, Philipp Burckhardt)_
-   [`8fa3827`](https://github.com/stdlib-js/stdlib/commit/8fa382766ef9fac1355c9ad98cf3e81f47387016) - **feat:** add C implementation of `stats/base/dists/cauchy/cdf` [(#4389)](https://github.com/stdlib-js/stdlib/pull/4389) _(by Vinit Pandit, stdlib-bot, Philipp Burckhardt)_
-   [`7fc07a2`](https://github.com/stdlib-js/stdlib/commit/7fc07a2122bb9e862ae7e2237dd48096051199dd) - **docs:** fix missing section tags in various READMEs [(#5322)](https://github.com/stdlib-js/stdlib/pull/5322) _(by Saurabh Singh)_
-   [`f7988d3`](https://github.com/stdlib-js/stdlib/commit/f7988d3c02e0eff3bd9bd7523b5dc975bb98dc0e) - **bench:** fix `isnan` checks in `stats/base/dists` [(#5296)](https://github.com/stdlib-js/stdlib/pull/5296) _(by Karan Anand)_
-   [`427d616`](https://github.com/stdlib-js/stdlib/commit/427d616af6cd3690fc65f658bdfd016ad4f49102) - **chore:** address commit comments and update tests [(#5264)](https://github.com/stdlib-js/stdlib/pull/5264) _(by Saurabh Singh)_
-   [`eaecb57`](https://github.com/stdlib-js/stdlib/commit/eaecb576d77de0a0773f262b59da7a2cee740119) - **feat:** add C implementation of `stats/base/dists/cauchy/pdf` [(#4393)](https://github.com/stdlib-js/stdlib/pull/4393) _(by Vinit Pandit, stdlib-bot, Philipp Burckhardt)_
-   [`911e179`](https://github.com/stdlib-js/stdlib/commit/911e1793885aced96a177f2ea54300503b2c2a26) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`e61b1de`](https://github.com/stdlib-js/stdlib/commit/e61b1dee3334bacf30d213de5b5f1c7868c0753b) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`f2d2150`](https://github.com/stdlib-js/stdlib/commit/f2d21507493d82265ec30daa3aa00a0829e902c9) - **bench:** refactor random number generation in `stats/base/dists/cauchy` [(#4850)](https://github.com/stdlib-js/stdlib/pull/4850) _(by Karan Anand)_
-   [`1188836`](https://github.com/stdlib-js/stdlib/commit/118883606bab688a753219662cb78850e7a48237) - **feat:** add C implementation for `stats/base/dists/cauchy/median` [(#3958)](https://github.com/stdlib-js/stdlib/pull/3958) _(by Vivek Maurya, Philipp Burckhardt, stdlib-bot)_
-   [`f3df15f`](https://github.com/stdlib-js/stdlib/commit/f3df15f118d563573f27d2d2b96e35b842f05a18) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`fc0ff17`](https://github.com/stdlib-js/stdlib/commit/fc0ff171dab59e73e1748c1bff504166adc826c3) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`f5f16d3`](https://github.com/stdlib-js/stdlib/commit/f5f16d3a7fb02c9bd000b0d0d53e7d12b19b097b) - **feat:** add C implementation for `stats/base/dists/cauchy/mode` [(#3952)](https://github.com/stdlib-js/stdlib/pull/3952) _(by Vivek Maurya, Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`ea671df`](https://github.com/stdlib-js/stdlib/commit/ea671dfde903d2ef3f3640ae8ea9505fcaeff726) - **feat:** add C implementation for `stats/base/dists/cauchy/entropy` [(#3961)](https://github.com/stdlib-js/stdlib/pull/3961) _(by Vivek Maurya, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 9 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Harsh Yadav
-   Karan Anand
-   MANI
-   Nishchay Rajput
-   Philipp Burckhardt
-   Saurabh Singh
-   Vinit Pandit
-   Vivek Maurya

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`640025b`](https://github.com/stdlib-js/stdlib/commit/640025bb14bd041fbe504ccc89becc0f647bb7cd) - **build:** use supported operators for GitHub rendering _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

