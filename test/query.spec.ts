import { Query } from '../src/query';
describe('cardano-cli query', () => {
  /*
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
  */
  it('default commandPrefix', () => {
    expect(Query.createWithCardanoCliBin().commandPrefix).toBe('cardano-cli query');
  });

  it('can change cliBinPath commandPrefix', () => {
    expect(Query.createWithCardanoCliBin('cli').commandPrefix).toBe('cli query');
  });
});
