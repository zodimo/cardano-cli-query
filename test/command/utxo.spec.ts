import { Query } from '../../src/query';

describe('cardano-cli query utxo ', () => {
  /* 
Usage: cardano-cli query utxo 
            [ --shelley-mode
            | --byron-mode [--epoch-slots NATURAL]
            | --cardano-mode [--epoch-slots NATURAL]
            ]
            (--whole-utxo | (--address ADDRESS) | (--tx-in TX-IN))
            (--mainnet | --testnet-magic NATURAL)
            [--out-file FILE]
*/
  it('whole-utxo and mainnet', () => {
    expect(
      Query.createWithCardanoCliBin()
        .utxo((builder) => builder.withNetwork((builder) => builder.mainnet()).withWholeUtxo())
        .getCommand(),
    ).toBe(['cardano-cli query utxo', '--whole-utxo', '--mainnet'].join(' '));
  });
  it('shelley-mode, whole-utxo, testnet and out-file', () => {
    const outFileName = 'my-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .utxo((builder) =>
          builder
            .withNodeMode((builder) => builder.shelley())
            .withNetwork((builder) => builder.testnetMagic(2))
            .withWholeUtxo()
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli query utxo',
        '--shelley-mode',
        '--whole-utxo',
        '--testnet-magic 2',
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });

  it('cardano-mode, whole-utxo, testnet and out-file', () => {
    const outFileName = 'my-out-file';
    const address = 'my-awesome-address';
    expect(
      Query.createWithCardanoCliBin()
        .utxo((builder) =>
          builder
            .withNodeMode((builder) => builder.cardano())
            .withNetwork((builder) => builder.testnetMagic(2))
            .withWholeUtxo()
            .UtxoFilter((builder) => builder.address(address))
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli query utxo',
        '--cardano-mode',
        '--whole-utxo',
        `--address ${address}`,
        '--testnet-magic 2',
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });
});
