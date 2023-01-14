import { NodeMode } from '@zodimo/cardano-cli-base';
import { Query } from '../../src/query';

describe('cardano-cli query tip ', () => {
  /* 
Usage: cardano-cli query tip 
            [ --shelley-mode
            | --byron-mode [--epoch-slots NATURAL]
            | --cardano-mode [--epoch-slots NATURAL]
            ]
            (--mainnet | --testnet-magic NATURAL)
            [--out-file FILE]
*/
  it('mainnet', () => {
    const outFileName = 'my-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) => builder.withNetwork((builder) => builder.mainnet()))
        .getCommand(),
    ).toBe(['cardano-cli query tip', '--mainnet'].join(' '));
  });

  it('shelley-mode, mainnet with out-file', () => {
    const outFileName = 'mu-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) =>
          builder
            .withNodeMode((builder) => builder.shelley())
            .withNetwork((builder) => builder.mainnet())
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(['cardano-cli query tip', '--shelley-mode', '--mainnet', `--out-file ${outFileName}`].join(' '));
  });

  it('shelley-mode, testnet-magic with out-file', () => {
    const outFileName = 'mu-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) =>
          builder
            .withNodeMode((builder) => builder.shelley())
            .withNetwork((builder) => builder.testnetMagic(2))
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(['cardano-cli query tip', '--shelley-mode', '--testnet-magic 2', `--out-file ${outFileName}`].join(' '));
  });

  it('byron-mode, testnet-magic with out-file', () => {
    const outFileName = 'mu-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) =>
          builder
            .withNodeMode((builder) => builder.byron())
            .withNetwork((builder) => builder.testnetMagic(2))
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(['cardano-cli query tip', '--byron-mode', '--testnet-magic 2', `--out-file ${outFileName}`].join(' '));
  });

  it('byron-mode with epoch, testnet-magic with out-file', () => {
    const outFileName = 'mu-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) =>
          builder
            .withNodeMode((builder) => builder.byron(1000))
            .withNetwork((builder) => builder.testnetMagic(2))
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli query tip',
        '--byron-mode',
        '--epoch-slots 1000',
        '--testnet-magic 2',
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });

  it('cardano-mode, testnet-magic with out-file', () => {
    const outFileName = 'my-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) =>
          builder
            .withNodeMode((builder) => builder.cardano())
            .withNetwork((builder) => builder.testnetMagic(2))
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(['cardano-cli query tip', '--cardano-mode', '--testnet-magic 2', `--out-file ${outFileName}`].join(' '));
  });

  it('cardano-mode with epoch, testnet-magic with out-file', () => {
    const outFileName = 'mu-out-file';
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) =>
          builder
            .withNodeMode((builder) => builder.cardano(1000))
            .withNetwork((builder) => builder.testnetMagic(2))
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli query tip',
        '--cardano-mode',
        '--epoch-slots 1000',
        '--testnet-magic 2',
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });

  it('cardano-mode, testnet-magic', () => {
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) =>
          builder.withNodeMode((builder) => builder.cardano()).withNetwork((builder) => builder.testnetMagic(2)),
        )
        .getCommand(),
    ).toBe(['cardano-cli query tip', '--cardano-mode', '--testnet-magic 2'].join(' '));
  });

  it('cardano-mode withoutbuilder, testnet-magic', () => {
    const nodeMode = NodeMode.cardano();
    expect(
      Query.createWithCardanoCliBin()
        .tip((builder) => builder.withNodeMode(nodeMode).withNetwork((builder) => builder.testnetMagic(2)))
        .getCommand(),
    ).toBe(['cardano-cli query tip', '--cardano-mode', '--testnet-magic 2'].join(' '));
  });
});
