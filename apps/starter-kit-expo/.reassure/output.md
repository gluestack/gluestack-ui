# Performance Comparison Report

- **Current**: main-v4-alpha (beb51d76d7bedfa507c6aadbe003a675fe5e0736) - 2026-02-10 07:29:42Z
- **Baseline**: main-v4-alpha (beb51d76d7bedfa507c6aadbe003a675fe5e0736) - 2026-02-10 04:27:21Z

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
| Card Performance Tests Card rendering | render | 206.9 ms | 1     |

</details>

<details>
<summary>Show details</summary>

| Name                                  | Type   | Duration                                                                                                                                                                     | Count                                                                                        |
| ------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Card Performance Tests Card rendering | render | **Current**<br/>Mean: 206.9 ms<br/>Stdev: 54.5 ms (26.4%)<br/>Runs: 176.8 171.3 173.1 323.5 277.2 183.1 187.5 184.3 185.3<br/>Warmup runs: 315.7<br/>Removed outliers: 360.4 | **Current**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |

</details>

### Removed Entries

<details open>
<summary>Show entries</summary>

| Name                                                   | Type   | Duration | Count |
| ------------------------------------------------------ | ------ | -------- | ----- |
| Button Performance Tests Button \- default variant     | render | 1.5 ms   | 1     |
| Button Performance Tests Button \- destructive variant | render | 1.4 ms   | 1     |
| Button Performance Tests Button \- ghost variant       | render | 1.3 ms   | 1     |
| Button Performance Tests Button \- large size          | render | 1.2 ms   | 1     |
| Button Performance Tests Button \- outline variant     | render | 1.3 ms   | 1     |
| Button Performance Tests Button \- small size          | render | 1.4 ms   | 1     |
| Button Performance Tests Button \- with long text      | render | 1.0 ms   | 1     |
| Button Performance Tests Multiple Buttons rendering    | render | 3.4 ms   | 1     |

</details>

<details>
<summary>Show details</summary>

| Name                                                   | Type   | Duration                                                                                                                                                    | Count                                                                                         |
| ------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Button Performance Tests Button \- default variant     | render | **Baseline**<br/>Mean: 1.5 ms<br/>Stdev: 0.4 ms (30.0%)<br/>Runs: 2.2 1.4 1.3 1.2 1.3 1.1 2.2 1.2 1.2<br/>Warmup runs: 16.2<br/>Removed outliers: 5.6       | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- destructive variant | render | **Baseline**<br/>Mean: 1.4 ms<br/>Stdev: 0.6 ms (40.4%)<br/>Runs: 1.0 1.1 1.2 1.0 2.9 1.2 1.5 2.0 1.2 1.3<br/>Warmup runs: 1.2<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- ghost variant       | render | **Baseline**<br/>Mean: 1.3 ms<br/>Stdev: 0.3 ms (27.1%)<br/>Runs: 1.2 1.2 1.0 1.2 1.0 1.1 1.3 2.2 1.4 1.1<br/>Warmup runs: 1.1<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- large size          | render | **Baseline**<br/>Mean: 1.2 ms<br/>Stdev: 0.2 ms (14.5%)<br/>Runs: 1.1 1.3 1.0 1.1 1.5 1.1 1.2 1.5 1.3<br/>Warmup runs: 1.1<br/>Removed outliers: 5.5        | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- outline variant     | render | **Baseline**<br/>Mean: 1.3 ms<br/>Stdev: 0.3 ms (25.2%)<br/>Runs: 1.3 1.0 1.0 1.1 1.1 2.0 1.7 1.2 1.3 1.6<br/>Warmup runs: 1.2<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- small size          | render | **Baseline**<br/>Mean: 1.4 ms<br/>Stdev: 0.6 ms (39.3%)<br/>Runs: 1.2 1.1 1.1 1.3 2.9 1.6 1.0 1.3 1.5 1.1<br/>Warmup runs: 2.9<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Button \- with long text      | render | **Baseline**<br/>Mean: 1.0 ms<br/>Stdev: 0.1 ms (10.8%)<br/>Runs: 1.2 1.0 1.0 1.0 1.0 1.2 0.9 1.2 1.0 0.9<br/>Warmup runs: 1.0<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| Button Performance Tests Multiple Buttons rendering    | render | **Baseline**<br/>Mean: 3.4 ms<br/>Stdev: 0.8 ms (25.2%)<br/>Runs: 2.4 4.1 4.6 4.0 3.8 4.2 2.6 2.7 2.7 2.6<br/>Warmup runs: 2.5<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |

</details>