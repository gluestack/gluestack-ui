# Performance Comparison Report

- **Current**: main-v4-alpha (beb51d76d7bedfa507c6aadbe003a675fe5e0736) - 2026-02-10 07:29:49Z
- **Baseline**: main-v4-alpha (beb51d76d7bedfa507c6aadbe003a675fe5e0736) - 2026-02-10 04:19:53Z

### Significant Changes To Duration

*There are no entries*

### Meaningless Changes To Duration

*There are no entries*

### Render Count Changes

*There are no entries*

### Render Issues

*There are no entries*

### Added Entries

<details open>
<summary>Show entries</summary>

| Name                                  | Type   | Duration | Count |
| ------------------------------------- | ------ | -------- | ----- |
| Card Performance Tests Card rendering | render | 107.4 ms | 1     |

</details>

<details>
<summary>Show details</summary>

| Name                                  | Type   | Duration                                                                                                                                                                   | Count                                                                                        |
| ------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Card Performance Tests Card rendering | render | **Current**<br/>Mean: 107.4 ms<br/>Stdev: 0.8 ms (0.7%)<br/>Runs: 108.5 107.6 107.2 107.8 107.3 107.6 105.8 107.1<br/>Warmup runs: 231.5<br/>Removed outliers: 257.8 157.4 | **Current**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |

</details>

### Removed Entries

<details open>
<summary>Show entries</summary>

| Name                                                   | Type   | Duration | Count |
| ------------------------------------------------------ | ------ | -------- | ----- |
| Button Performance Tests Button \- default variant     | render | 0.9 ms   | 1     |
| Button Performance Tests Button \- destructive variant | render | 0.8 ms   | 1     |
| Button Performance Tests Button \- ghost variant       | render | 0.8 ms   | 1     |
| Button Performance Tests Button \- large size          | render | 0.8 ms   | 1     |
| Button Performance Tests Button \- outline variant     | render | 0.8 ms   | 1     |
| Button Performance Tests Button \- small size          | render | 0.8 ms   | 1     |
| Button Performance Tests Button \- with long text      | render | 0.8 ms   | 1     |
| Button Performance Tests Multiple Buttons rendering    | render | 1.8 ms   | 1     |

</details>

<details>
<summary>Show details</summary>

| Name                                                   | Type   | Duration                                                                                                                                                    | Count                                                                                         |
| ------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Button Performance Tests Button \- default variant     | render | **Baseline**<br/>Mean: 0.9 ms<br/>Stdev: 0.2 ms (18.4%)<br/>Runs: 1.1 1.0 0.8 0.9 0.9 0.8 0.8 1.4 0.9 0.8<br/>Warmup runs: 6.6<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- destructive variant | render | **Baseline**<br/>Mean: 0.8 ms<br/>Stdev: 0.0 ms (4.8%)<br/>Runs: 0.8 0.7 0.8 0.8 0.8 0.8 0.7 0.7 0.8 0.8<br/>Warmup runs: 1.0<br/>Removed outliers: (none)  | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- ghost variant       | render | **Baseline**<br/>Mean: 0.8 ms<br/>Stdev: 0.0 ms (4.9%)<br/>Runs: 0.8 0.9 0.8 0.7 0.8 0.7 0.8 0.8 0.7 0.7<br/>Warmup runs: 0.8<br/>Removed outliers: (none)  | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- large size          | render | **Baseline**<br/>Mean: 0.8 ms<br/>Stdev: 0.0 ms (5.3%)<br/>Runs: 0.8 0.8 0.7 0.8 0.9 0.8 0.8 0.8 0.7 0.7<br/>Warmup runs: 0.8<br/>Removed outliers: (none)  | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- outline variant     | render | **Baseline**<br/>Mean: 0.8 ms<br/>Stdev: 0.1 ms (13.4%)<br/>Runs: 0.8 0.7 0.7 0.7 0.7 0.8 0.9 0.7 1.0 0.8<br/>Warmup runs: 0.9<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- small size          | render | **Baseline**<br/>Mean: 0.8 ms<br/>Stdev: 0.0 ms (1.5%)<br/>Runs: 0.8 0.8 0.8 0.8 0.8 0.8 0.8 0.8<br/>Warmup runs: 0.8<br/>Removed outliers: 2.0 1.3         | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- with long text      | render | **Baseline**<br/>Mean: 0.8 ms<br/>Stdev: 0.1 ms (8.0%)<br/>Runs: 0.8 0.7 0.8 0.8 0.7 0.9 0.7 0.7 0.7 0.7<br/>Warmup runs: 0.7<br/>Removed outliers: (none)  | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Multiple Buttons rendering    | render | **Baseline**<br/>Mean: 1.8 ms<br/>Stdev: 0.1 ms (3.0%)<br/>Runs: 1.8 1.9 1.8 1.7 1.8 1.9 1.8 1.8 1.9 1.8<br/>Warmup runs: 1.9<br/>Removed outliers: (none)  | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |

</details>