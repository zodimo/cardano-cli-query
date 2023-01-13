# cardano-cli-query

This package is a command builder part of a series to wrap the cardano-cli

# Development

run the dump command to check for differences.

```bash
npm run build
node dist/dump-cli-help-to-docs.js
```

# cardano-cli query -h

```text
Usage: cardano-cli query
            ( protocol-parameters
            | tip
            | stake-pools
            | stake-distribution
            | stake-address-info
            | utxo
            | ledger-state
            | protocol-state
            | stake-snapshot
            | pool-params
            | leadership-schedule
            | kes-period-info
            )

```

# TODO

- add git integration and test coverage badges

- Implementations

- [ ] query
  - [ ] protocol-parameters
  - [ ] tip
  - [ ] stake-pools
  - [ ] stake-distribution
  - [ ] stake-address-info
  - [ ] utxo
  - [ ] ledger-state
  - [ ] protocol-state
  - [ ] stake-snapshot
  - [ ] pool-params
  - [ ] leadership-schedule
  - [ ] kes-period-info
