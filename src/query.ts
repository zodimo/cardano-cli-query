import { Builder } from '@zodimo/cardano-cli-base';
import { ProtocolParameters, ProtocolParametersOptions } from './command/protocol-parameters';
import { Tip, TipOptions } from './command/tip';

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

  tip(builder: Builder<TipOptions, TipOptions>): Tip;
  tip(options: TipOptions): ProtocolParameters;
  tip(value: TipOptions | Builder<TipOptions, TipOptions>): ProtocolParameters {
    if (value instanceof TipOptions) {
      return new Tip(this.commandPrefix, value);
    }

    const options = value(new TipOptions());
    return this.tip(options);
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
