import { Builder } from '@zodimo/cardano-cli-base';
import { ProtocolParameters, ProtocolParametersOptions } from './command/protocol-parameters';

export class Query {
  public readonly commandPrefix: string;
  constructor(commandPrefix: string) {
    this.commandPrefix = `${commandPrefix} query`;
  }

  static createWithCardanoCliBin(cardniCliBinPath = 'cardano-cli'): Query {
    return new Query(cardniCliBinPath);
  }

  // protocol-parameters

  protocolParameters(builder: Builder<ProtocolParametersOptions, ProtocolParametersOptions>): ProtocolParameters;
  protocolParameters(options: ProtocolParametersOptions): ProtocolParameters;
  protocolParameters(
    value: ProtocolParametersOptions | Builder<ProtocolParametersOptions, ProtocolParametersOptions>,
  ): ProtocolParameters {
    if (value instanceof ProtocolParametersOptions) {
      return new ProtocolParameters(this.commandPrefix, value);
    }

    const options = value(new ProtocolParametersOptions());
    return this.protocolParameters(options);
  }

  // tip
  tip() {
    throw new Error('Not yet implemented!');
  }
  // stake-pools
  stakePools() {
    throw new Error('Not yet implemented!');
  }
  // stake-distribution
  stakeDistribution() {
    throw new Error('Not yet implemented!');
  }
  // stake-address-info
  stakeAddressInfo() {
    throw new Error('Not yet implemented!');
  }
  // utxo
  utxo() {
    throw new Error('Not yet implemented!');
  }
  // ledger-state
  ledgerState() {
    throw new Error('Not yet implemented!');
  }
  // protocol-state
  protocolState() {
    throw new Error('Not yet implemented!');
  }
  // stake-snapshot
  stakeSnapshot() {
    throw new Error('Not yet implemented!');
  }
  // pool-params
  poolParams() {
    throw new Error('Not yet implemented!');
  }
  // leadership-schedule
  leadershipSchedule() {
    throw new Error('Not yet implemented!');
  }
  // kes-period-info
  kesPeriodInfo() {
    throw new Error('Not yet implemented!');
  }
}
