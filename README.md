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
  - [x] protocol-parameters
  - [x] tip
  - [ ] stake-pools
  - [ ] stake-distribution
  - [ ] stake-address-info
  - [x] utxo
  - [ ] ledger-state
  - [ ] protocol-state
  - [ ] stake-snapshot
  - [ ] pool-params
  - [ ] leadership-schedule
  - [ ] kes-period-info


# Note on incorrect -h docs
### cardano-cli query utxo 
```text
Usage: cardano-cli query utxo 
            [ --shelley-mode
            | --byron-mode [--epoch-slots NATURAL]
            | --cardano-mode [--epoch-slots NATURAL]
            ]
            (--whole-utxo | (--address ADDRESS) | (--tx-in TX-IN))
            (--mainnet | --testnet-magic NATURAL)
            [--out-file FILE]
```
should read 
```text
Usage: cardano-cli query utxo 
            [ --shelley-mode
            | --byron-mode [--epoch-slots NATURAL]
            | --cardano-mode [--epoch-slots NATURAL]
            ]
            (--whole-utxo | --address ADDRESS | --tx-in TX-IN)
            (--mainnet | --testnet-magic NATURAL)
            [--out-file FILE]
```
Error to confirm this
```text
Error: Command failed: cardano-cli query utxo --whole-utxo --address addr_test1qrajrdzsp258gryrxh78ty2wj6udvmq6l3tuqwkslx9dj2rcqg5xt4afs6h06055djwg95kzuc8m3vamympdyu0g6xtsefjs5j
Invalid option `--address'

Usage: cardano-cli query utxo 
            [ --shelley-mode
            | --byron-mode [--epoch-slots NATURAL]
            | --cardano-mode [--epoch-slots NATURAL]
            ]
            (--whole-utxo | (--address ADDRESS) | (--tx-in TX-IN))
            (--mainnet | --testnet-magic NATURAL)
            [--out-file FILE]

  Get a portion of the current UTxO: by tx in, by address or the whole.
```